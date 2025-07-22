import NoteEditor from "./NoteEditor";
import StyledButton from "./StyledButton";
import Header from "./Header";
import React, { useState } from "react";

function VoidEditor() {
  const [editor, setEditor] = useState(null);
  const [contentToLoad, setContentToLoad] = useState(null);
  
  const handleLoadContent = (json) => {
    setContentToLoad(json);
  };

  const [title, setTitle] = useState('title');  // initial title state

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
                      title={title} />
      </div>
    </div>
  );
}

export default VoidEditor;
