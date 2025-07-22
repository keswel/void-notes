import { FileText, Plus } from 'lucide-react';
import ThemeButton from './ThemeButton';
import LoadNoteButton from './LoadNoteButton';
import TitleText from './TitleText';
// import React, { useState } from 'react';

function Header({ onLoadContent, editor, title, setTitle }) {

  const handleClear = () => {
    if (editor) {
      editor.commands.clearContent();
      editor.commands.focus();
      console.log("Cleared editor.");
    } else {
      console.log("No access to editor.");
    }
  };

  const handleNewNoteClick = () => {
    console.log('New Note Clicked');
    handleClear();
    setTitle('title');  // reset title to 'title'
  };

  // this will be passed to TitleText to update title as user types
  const handleTitleChange = (newTitle) => {
    setTitle(newTitle);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1rem',
      }}
    >
      <h1
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          fontSize: '2rem',
          color: '#6b4f26',
          userSelect: 'none',
          margin: 0,
        }}
      >
        <FileText size={28} color="#6b4f26" />
        void notes
      </h1>

      {/* pass title and onChangeTitle callback */}
      <TitleText title={title} onChangeTitle={handleTitleChange} />

      <div
        style={{
          display: 'flex',
          gap: '8px',
        }}
      >
        <ThemeButton />
        <LoadNoteButton onLoadContent={onLoadContent} onChangeTitle={handleTitleChange} />
        <button
          style={{
            backgroundColor: '#6b4f26',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            padding: '0.5rem 1rem',
            fontSize: '1.2rem',
            cursor: 'pointer',
          }}
          onClick={() => {
            console.log('New Note Clicked');
            handleNewNoteClick();
          }}
        >
          <Plus size={20} color="white" />
        </button>
      </div>
    </div>
  );
}

export default Header;
