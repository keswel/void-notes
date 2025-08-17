import React, { useState } from 'react';
import { FolderOpen } from 'lucide-react';

// base button style (re-used from StyledButton for consistency)
const baseButtonStyle = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  padding: "10px 16px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "14px",
  fontWeight: "500",
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
  outline: "none",
  letterSpacing: "-0.01em",
  position: "relative",
  overflow: "hidden",
};

// hover style generator (re-used from StyledButton)
const getHoverStyle = (isHovered, baseColor, hoverColor) => ({
  ...baseButtonStyle,
  backgroundColor: isHovered ? hoverColor : baseColor,
  transform: isHovered ? "translateY(-1px)" : "translateY(0)",
  boxShadow: isHovered
    ? "0 4px 12px rgba(0, 0, 0, 0.15)"
    : "0 2px 8px rgba(0, 0, 0, 0.1)",
});

// This component is for loading notes *from localStorage*
function SavedNotesLoader({ savedNotes, onLoadNote, currentTitle }) {
  const [isHovered, setIsHovered] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLoadClick = (noteTitle) => {
    onLoadNote(noteTitle);
    setShowDropdown(false); // Close dropdown after selection
  };

  return (
    <div style={{ position: 'relative' }}>
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={getHoverStyle(isHovered, "#6b4f26", "#5a3f1f")}
      >
        <FolderOpen size={16} color="#f9f4e7" />
        <span style={{ color: "#f9f4e7" }}>My Notes</span> {/* Renamed for clarity */}
      </button>

      {showDropdown && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 8px)', // Position below the button
            left: 0,
            backgroundColor: 'var(--bg-color)',
            border: '1px solid var(--border-color)',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            zIndex: 10,
            minWidth: '200px',
            maxHeight: '300px',
            overflowY: 'auto',
          }}
        >
          {savedNotes.length === 0 ? (
            <div style={{ padding: '10px', color: '#6a737d' }}>No saved notes.</div>
          ) : (
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {savedNotes.map((noteTitle) => (
                <li key={noteTitle}>
                  <button
                    onClick={() => handleLoadClick(noteTitle)}
                    disabled={noteTitle === currentTitle} // Disable button if it's the current note
                    style={{
                      ...baseButtonStyle, // Reuse base button styles
                      width: '100%',
                      textAlign: 'left',
                      backgroundColor: 'transparent',
                      color: 'var(--text-color)', // Use theme text color
                      justifyContent: 'flex-start',
                      padding: '10px 16px',
                      borderRadius: '0', // No border radius for list items
                      borderBottom: '1px solid var(--border-color)',
                      pointerEvents: noteTitle === currentTitle ? 'none' : 'auto', // Disable pointer events
                      opacity: noteTitle === currentTitle ? 0.6 : 1, // Reduce opacity for disabled state
                    }}
                    onMouseEnter={(e) => {
                      if (noteTitle !== currentTitle) e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.05)';
                    }}
                    onMouseLeave={(e) => {
                      if (noteTitle !== currentTitle) e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                  >
                    {noteTitle}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default SavedNotesLoader;
