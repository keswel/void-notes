import React from 'react';
import { X } from 'lucide-react';

function UserAccount() {
  const handleSignIn = () => {
    alert("Signing In")

  };

  return (
    <button
      onClick={handleSignIn}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 12px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        cursor: 'pointer',
        backgroundColor: 'white',
      }}
    >
      <X size={20} color="black" />
      Log In 
    </button>
  );
}

export default UserAccount;
