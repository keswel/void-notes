import NoteEditor from "./NoteEditor";
import StyledButton from "./StyledButton";
import Header from "./Header";
import React, { useState, useEffect } from "react";

function VoidEditor() {
  const [editor, setEditor] = useState(null);
  const [contentToLoad, setContentToLoad] = useState(null);
  const [charCount, setCharCount] = useState(0);
  
  const handleLoadContent = (json) => {
    setContentToLoad(json);
  };

  const [title, setTitle] = useState('title');  // initial title state

  // update char count
  useEffect(() => {
    if (!editor) return;
    editor.on('update', () => {
      setCharCount(editor.getText().replace(/\s/g, '').length);
    });
  }, [editor]); // runs whenever editor becomes available

  return (
    <div style={{ padding: "2rem", position: "relative", maxWidth: "700px", margin: "auto" }}>
      {/* main editor stack */}
      <div>
        <Header onLoadContent={handleLoadContent} 
                editor={editor} 
                title={title} 
                setTitle={setTitle}/>

        <NoteEditor onEditorReady={setEditor} 
                    contentToLoad={contentToLoad} />

        <StyledButton editor={editor} 
                      title={title} 
                      char_count={charCount} />
      </div>
    </div>
  );
}

export default VoidEditor;
