"use client";
import React, { Dispatch, SetStateAction, useCallback, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
// @ts-ignore
import { tags as t } from "@lezer/highlight";
import { loadLanguage } from "@uiw/codemirror-extensions-langs";
import { draculaInit } from "@uiw/codemirror-theme-dracula";
type Props = {
  language: any;
  displayName: string;
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
};
const Editor = ({ displayName, language, onChange, value }: Props) => {
  const [open, setOpen] = useState<boolean>(true);
  const handleChange = useCallback((val: string, viewUpdate: Object) => {
    onChange(val);
  }, []);

  return (
    <div className={` w-full h-full collapsed ${open ? "" : "active"}`}>
      <div className="flex gap-10">
        {displayName}
        <button onClick={() => setOpen((prev) => !prev)}>O-C</button>
      </div>
      <CodeMirror
        value={value}
        height="350px"
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
