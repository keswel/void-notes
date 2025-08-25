import VoidEditor from "./components/VoidEditor.jsx";
import UserAccount from "./components/UserAccount.jsx";

function App() {
  /*
   * [X] ADD THEMING (Still ugly)
   * [X] ADD TXT SAVING
   * [X] ADD TXT CLEARING
   * [X] ADD NOTE-SAVING
   * [ ] ADD PREVIOUS-NOTES (DATABASE REQUIRED)
   * [ ] ADD NOTE SHARING (DATABASE REQUIRED)
   * [ ] BUY ME A COFFEE AT BOTTOM OF PAGE LOL
   */
  
  return (
    <div style={{ position: 'relative', height: '100vh' }}>

      {/* Login Buttons */}
      <UserAccount />
    
      {/* VoidEditor centered */}
      <div style={{ 
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '90%'
      }}>
        <VoidEditor />
      </div>

      {/* Other content won't affect VoidEditor */}
    </div>
  );
}

export default App;
