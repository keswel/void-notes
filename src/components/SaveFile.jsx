function SaveFile({ editor }) {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleSave = () => {
    console.log('Save button clicked!');
    if (!editor) {
      console.log('Editor is null/undefined');
      return;
    }

    const content = editor.getText();
    if (!content.trim()) {
      console.log('No content to save');
      return;
    }

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    const now = new Date();
    const timestamp = now.toISOString().slice(0, 19).replace(/:/g, '-');
    link.download = `note-${timestamp}.txt`;
    link.href = url;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    console.log('File saved successfully!');
  };

  return (
    <button
      onClick={handleSave}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={getHoverStyle(isHovered, '#6b4f26', '#5a3f1f')}
    >
      <Save size={16} color="#f9f4e7" />
      <span style={{ color: '#f9f4e7' }}>Save</span>
    </button>
  );
}
