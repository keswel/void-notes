import React from 'react';
import { X } from 'lucide-react';

function ClearButton({ editor }) {
  const handleClear = () => {
    if (editor) {
      editor.commands.clearContent();
      editor.commands.focus();
    }
  };

  return (
    <button
      onClick={handleClear}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 12px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        cursor: 'pointer',
        backgroundColor: 'white',
      }}
    >
      <X size={20} color="black" />
      Clear
    </button>
  );
}

export default ClearButton;
