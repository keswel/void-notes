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
    <div style={{ display: 'flex', height: '100vh' }}>
      
      { /* Left Sidebar | needs work, disabled for now   
      <div style={{
        width: '10%',
        minWidth: '150px',
        backgroundColor: '#f5f5f5', // optional
        padding: '1rem',
        boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <UserAccount />
      </div>
      */ } 

      {/* Main content area */}
      <div style={{
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <div style={{ width: '90%' }}>
          <VoidEditor />
        </div>
      </div>
    </div>
  );
}

export default App;
