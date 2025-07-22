import React, { useRef } from 'react';
import { Upload } from 'lucide-react';

function LoadNoteButton({ onLoadContent, onChangeTitle}) {
  const fileInputRef = useRef();
  
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // extract title from filename (remove .json extension)
      const titleFromFilename = file.name.replace(/\.json$/, '');
      
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const content = JSON.parse(e.target.result);
          
          // send content to TipTap
          if (onLoadContent) {
            onLoadContent(content);
          }
          
          // send title separately to parent
          if (onChangeTitle) {
            onChangeTitle(titleFromFilename); 
          }
        } catch (err) {
          alert("Invalid JSON file");
        }
      };
      reader.readAsText(file);
    }
  };
  
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  
  return (
    <>
      <input
        type="file"
        accept=".json"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      <button
        onClick={handleButtonClick}
        style={{
          backgroundColor: '#6b4f26',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          padding: '0.5rem 1rem',
          fontSize: '1rem',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <Upload size={20} color="white" />
      </button>
    </>
  );
}

export default LoadNoteButton;
