import React, { useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import Highlight from "@tiptap/extension-highlight";
import { Extension } from "@tiptap/core";
import { createLowlight } from "lowlight";

// highlight.js languages
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import python from "highlight.js/lib/languages/python";
import css from "highlight.js/lib/languages/css";
import html from "highlight.js/lib/languages/xml";
import json from "highlight.js/lib/languages/json";
import bash from "highlight.js/lib/languages/bash";
import java from "highlight.js/lib/languages/java";
import cpp from "highlight.js/lib/languages/cpp";


// create lowlight instance and register languages
const lowlight = createLowlight();
lowlight.register("javascript", javascript);
lowlight.register("typescript", typescript);
lowlight.register("python", python);
lowlight.register("css", css);
lowlight.register("html", html);
lowlight.register("json", json);
lowlight.register("bash", bash);
lowlight.register("java", java);
lowlight.register("cpp", cpp);


// tab indent extension
const TabIndent = Extension.create({
  name: "tabIndent",
  addKeyboardShortcuts() {
    return {
      Tab: () => {
        return this.editor.commands.insertContent("     ");
      },
      "Shift-Tab": () => {
        const { state } = this.editor;
        const { selection } = state;
        const { from } = selection;

        const textBefore = state.doc.textBetween(Math.max(0, from - 5), from);
        if (textBefore === "    ") {
          return this.editor.commands.deleteRange({
            from: from - 5,
            to: from,
          });
        }

        const line = state.doc.resolve(from).parent;
        const lineStart = from - state.doc.resolve(from).parentOffset;
        const lineText = line.textContent;
        let spacesToRemove = 0;

        for (let i = 0; i < Math.min(5, lineText.length); i++) {
          if (lineText[i] === " ") {
            spacesToRemove++;
          } else {
            break;
          }
        }

        if (spacesToRemove > 0) {
          return this.editor.commands.deleteRange({
            from: lineStart,
            to: lineStart + spacesToRemove,
          });
        }

        return false;
      },
    };
  },
});

const HighlightWithShortcut = Highlight.extend({
  addKeyboardShortcuts() {
    return {
      "Mod-h": () => this.editor.commands.toggleHighlight(),
    };
  },
});

function NoteEditor({ onEditorReady, contentToLoad }) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        codeBlock: false,
      }),
      CodeBlockLowlight.configure({
        lowlight,
        defaultLanguage: "javascript",
      }),
      Placeholder.configure({
        placeholder: "Start typing...",
      }),
      HighlightWithShortcut,
      TabIndent,
    ],
    content: "", // initial empty
  });

  // pass editor back to parent once it's ready
  useEffect(() => {
    if (editor && onEditorReady) {
      onEditorReady(editor);
    }
  }, [editor, onEditorReady]);

  // set new content from props when available
  useEffect(() => {
    if (editor && contentToLoad) {
      editor.commands.setContent(contentToLoad);
    }
  }, [editor, contentToLoad]);

  return (
    <div
      style={{
        position: "relative",
        border: "1px solid #ccc",
        borderTopLeftRadius: "12px",
        borderTopRightRadius: "12px",
        borderColor: "--border-color",
        backgroundColor: "--bg-color",
        fontSize: "16px",
        lineHeight: "1.5",
        minHeight: "300px",
      }}
    >
      <style>
        {`
          @import url('https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/github.min.css');

          .ProseMirror p.is-editor-empty:first-child::before {
            content: attr(data-placeholder);
            float: left;
            color: #9ca3af;
            pointer-events: none;
            height: 0;
          }

          .ProseMirror:focus {
            outline: none;
          }

          .ProseMirror {
            white-space: pre-wrap;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'SF Pro Text', 'Helvetica Neue', sans-serif;
            font-size: 16px;
            font-weight: 400;
            line-height: 1.6;
            letter-spacing: -0.01em;
          }

          .ProseMirror pre {
            background: var(--code-background);
            border-radius: 8px;
            padding: 16px;
            margin: 12px 0;
            overflow-x: auto;
            font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
            font-size: 14px;
            line-height: 1.4;
            border: 1px solid #e1e4e8;
            position: relative;
          }

          .ProseMirror pre code {
            background: none;
            padding: 0;
            border: none;
            font-size: inherit;
            color: inherit;
          }

          .ProseMirror pre::before {
            content: attr(data-language);
            position: absolute;
            top: 8px;
            right: 12px;
            font-size: 12px;
            color: #6a737d;
            text-transform: uppercase;
            font-weight: 500;
          }

          .ProseMirror code {
            background: #f3f4f6;
            padding: 2px 4px;
            border-radius: 3px;
            font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
            font-size: 14px;
            color: #e11d48;
          }

          /* Highlight style (yellow) */
          mark {
            background-color: #fef08a;
            padding: 0 2px;
            border-radius: 2px;
          }
        `}
      </style>

      <EditorContent
        editor={editor}
        className="note-editor"
        style={{
          padding: "1rem",
          minHeight: "300px",
          outline: "none",
        }}
      />
    </div>
  );
}

export default NoteEditor;
