import React from 'react';
import { Share2 } from 'lucide-react';

function ShareButton({ onClick }) {
  return (
    <button
      onClick={onClick}
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
      <Share2 size={20} color="black" />
      Share
    </button>
  );
}

export default ShareButton;
