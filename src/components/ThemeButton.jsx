import React, { useState, useEffect } from 'react';
import { MoonStar, Sun } from 'lucide-react';

function ThemeButton() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      aria-label="Toggle theme"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.5rem 1rem',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        backgroundColor: '#6b4f26',
        color: 'white',
        fontSize: '1.2rem',
        transition: 'background-color 0.3s ease, color 0.3s ease',
        width: '40px',
        height: '40px',
      }}
    >
      {isDark ? (
        <Sun size={20} color="white" />
      ) : (
        <MoonStar size={20} color="white" />
      )}
    </button>
  );
}

export default ThemeButton;
