import React, { useState, useEffect } from 'react';
import { MoonStar, Sun } from 'lucide-react';

function ThemeButton() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <div style={{
      position: 'fixed',
      top: '16px',
      right: '16px',
      zIndex: 1000,
    }}>
      <button
        onClick={() => setIsDark(!isDark)}
        aria-label="Toggle theme"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '8px',
          border: '1px solid var(--text-color)',
          borderRadius: '4px',
          cursor: 'pointer',
          color: 'var(--text-color)',
          backgroundColor: 'transparent',
          transition: 'background-color 0.3s ease, color 0.3s ease',
          width: '40px',
          height: '40px',
        }}
      >
        {isDark ? (
          <Sun size={20} color="var(--text-color)" />
        ) : (
          <MoonStar size={20} color="var(--text-color)" />
        )}
      </button>
    </div>
  );
}

export default ThemeButton;
