import React, { useState } from 'react';

function TitleText({ title, onChangeTitle }) {
  const [editing, setEditing] = useState(false);

  const handleBlur = () => setEditing(false);

  const handleChange = (e) => {
    onChangeTitle(e.target.value);  // notify parent about change
  };

  return (
    <div>
      {editing ? (
        <input
          value={title}
          onChange={handleChange}
          onBlur={handleBlur}
          autoFocus
          style={{
            fontSize: '16px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            width: '100%',
          }}
        />
      ) : (
        <p
          onClick={() => setEditing(true)}
          style={{
            fontSize: '16px',
            border: '1px dashed transparent',
            cursor: 'pointer',
          }}
          onMouseOver={(e) => (e.currentTarget.style.border = '1px dashed #aaa')}
          onMouseOut={(e) => (e.currentTarget.style.border = '1px dashed transparent')}
        >
          {title}
        </p>
      )}
    </div>
  );
}

export default TitleText;
