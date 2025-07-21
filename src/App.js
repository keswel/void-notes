import React, { useState } from "react";
import NoteEditor from "./components/NoteEditor";
import StyledButton from "./components/StyledButton";
import Header from "./components/Header"
import ThemeButton from "./components/ThemeButton";

function App() {
  const [editor, setEditor] = useState(null);

  return (
    // TODO:
    /* 
  [ ] UPDATE INIT TEXT WITH:
      void notes:
        the ultimate minimalist note-taking app!
      
  [X] ADD THEMING (Still ugly)
  [X] ADD TXT SAVING
  [X] ADD TXT CLEARING 
  [ ] ADD NOTE-SAVING
  [ ] ADD PREVIOUS-NOTES (DATABASE REQUIRED)
  [ ] ADD NOTE SHARING (DATABASE REQUIRED)  
  [ ] BUY ME A COFFEE AT BOTTOM OF PAGE LOL
    */
    
  <div style={{ padding: "2rem", position: "relative", maxWidth: "700px", margin: "auto" }}>
 
  {/* main editor stack */}
  <div>
    <Header />
    <NoteEditor onEditorReady={setEditor} />
    <StyledButton editor={editor} />
  </div>
</div>
  );
}

export default App;
