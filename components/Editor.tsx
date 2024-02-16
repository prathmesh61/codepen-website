"use client";
import React, { Dispatch, SetStateAction, useCallback } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { tags as t } from "@lezer/highlight";
import {
  loadLanguage,
  langNames,
  langs,
} from "@uiw/codemirror-extensions-langs";
import { dracula, draculaInit } from "@uiw/codemirror-theme-dracula";
type Props = {
  language: any;
  displayName: string;
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
};
console.log("langNames:", typeof langNames);
const Editor = ({ displayName, language, onChange, value }: Props) => {
  const handleChange = useCallback((val: string, viewUpdate: Object) => {
    onChange(val);
  }, []);
  return (
    <div className="editor-container">
      <div className="editor-title">
        {displayName}
        <button>O-C</button>
      </div>
      <CodeMirror
        value={value}
        height="200px"
        extensions={[loadLanguage(language)!]}
        onChange={handleChange}
        theme={draculaInit({
          settings: {
            caret: "#c6c6c6",
            fontFamily: "monospace",
          },
          styles: [{ tag: t.comment, color: "#6272a4" }],
        })}
      />
    </div>
  );
};

export default Editor;
