import { FileText, Plus } from 'lucide-react';
import ThemeButton from './ThemeButton';
import LoadNoteButton from './LoadNoteButton';
import TitleText from './TitleText';

function Header({ onLoadContent, editor }) {
  // clear function declared once inside Header
  const handleClear = () => {
    if (editor) {
      editor.commands.clearContent();
      editor.commands.focus();
    } else {
      console.warn('Editor instance not available');
    }
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

      <TitleText />

      <div
        style={{
          display: 'flex',
          gap: '8px',
        }}
      >
        <ThemeButton />
        <LoadNoteButton onLoadContent={onLoadContent} />
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
            handleClear(); // Call the function here!
          }}
        >
          <Plus size={20} color="white" />
        </button>
      </div>
    </div>
  );
}

export default Header;
