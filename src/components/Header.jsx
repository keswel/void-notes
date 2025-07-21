import React from 'react';
import { FileText } from 'lucide-react';
import ThemeButton from './ThemeButton';

function Header() {
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
          color: '#6b4f26', // coffee brown
          userSelect: 'none',
          margin: 0,
        }}
      >
        <FileText size={28} color="#6b4f26" />
        void notes
      </h1>
<div
  style={{
    display: 'flex',
    gap: '8px',
  }}
>
  <button
    style={{
      backgroundColor: '#6b4f26',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      padding: '0.5rem 1rem',
      fontSize: '1rem',
      cursor: 'pointer',
    }}
    onClick={() => {
      // load note logic
      console.log('Load Note Clicked');
    }}
  >
    Load
      </button>
      
      <ThemeButton />

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
        }}
      >
        +
      </button>
          
    </div>
    </div>
  );
}

export default Header;
