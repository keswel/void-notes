import React from "react";
import { Save, Trash2, Share2 } from "lucide-react";

// base button style
const baseButtonStyle = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  padding: "10px 16px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "14px",
  fontWeight: "500",
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
  outline: "none",
  letterSpacing: "-0.01em",
  position: "relative",
  overflow: "hidden",
};

// hover style generator
const getHoverStyle = (isHovered, baseColor, hoverColor) => ({
  ...baseButtonStyle,
  backgroundColor: isHovered ? hoverColor : baseColor,
  transform: isHovered ? "translateY(-1px)" : "translateY(0)",
  boxShadow: isHovered
    ? "0 4px 12px rgba(0, 0, 0, 0.15)"
    : "0 2px 8px rgba(0, 0, 0, 0.1)",
});

// save Button
function SaveFile({ editor, title }) {
  const [isHovered, setIsHovered] = React.useState(false);
  // NOTE DONT SAVE THE TITLE TO JSON. SAVE THE TITLE AS THE NAME OF THE .JSON ! ! !
  const handleSave = () => {
    console.log("Save button clicked!");
    console.log("The current title is: " + title);

    if (!editor) {
      console.log("Editor is null/undefined");
      return;
    }

    const content = editor.getJSON(); 
    const isEmpty = !content || !content.content || content.content.length === 0;

    if (isEmpty) {
      console.log("No content to save");
      return;
    }

    
    const noteToSave = content;
    /* combine title and content into one object
       DISABLED FOR NOW. 
    const noteToSave = {
      // title: title,
      content: content,
    };
    */

    const jsonString = JSON.stringify(noteToSave, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.download = `${title}.json`;
    link.href = url;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    console.log("File saved successfully!");
  };

  return (
    <button
      onClick={handleSave}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={getHoverStyle(isHovered, "#6b4f26", "#5a3f1f")}
    >
      <Save size={16} color="#f9f4e7" />
      <span style={{ color: "#f9f4e7" }}>Save</span>
    </button>
  );
}

// clear button
function ClearButton({ editor }) {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleClear = () => {
    console.log("Clear button clicked!");
    if (editor) {
      editor.commands.clearContent();
      editor.commands.focus();
      console.log("Content cleared!");
    } else {
      console.log("Editor is null/undefined");
    }
  };

  return (
    <button
      onClick={handleClear}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={getHoverStyle(isHovered, "#8b5a3c", "#704a32")}
    >
      <Trash2 size={16} color="#f9f4e7" />
      <span style={{ color: "#f9f4e7" }}>Clear</span>
    </button>
  );
}

// share button
function ShareButton() {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleShare = () => {
    console.log("Share button clicked!");
      // share logic
  };

  return (
    <button
      onClick={handleShare}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={getHoverStyle(isHovered, "#9d6b3a", "#82552f")}
    >
      <Share2 size={16} color="#f9f4e7" />
      <span style={{ color: "#f9f4e7" }}>Share</span>
    </button>
  );
}

// main button bar
function StyledButton({ editor, title }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "12px",
        alignItems: "center",
        padding: "16px 20px",
        backgroundColor: "--bg-color",
        borderTop: "none",
        border: "1px solid #e5e5e7",
        borderBottomLeftRadius: "12px",
        borderBottomRightRadius: "12px",
        boxShadow: "0 8px 25px rgba(0, 0, 0, 0.08)",
        justifyContent: "center",
      }}
    >
      <SaveFile editor={editor} title={title} />
      <ClearButton editor={editor} />
      <ShareButton />
    </div>
  );
}

export default StyledButton;
