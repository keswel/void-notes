import { FileText } from 'lucide-react';
import ThemeButton from './ThemeButton';
import { Plus } from 'lucide-react';
import LoadNoteButton from './LoadNoteButton';
import TitleText from './TitleText';

function Header({ onLoadContent }) {
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
      
      <TitleText/>
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
          }}
        >
          <Plus size={20} color="white" />
        </button>
      </div>
    </div>
  );
}

export default Header;