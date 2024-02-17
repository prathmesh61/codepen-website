"use client";
import React, { Dispatch, SetStateAction, useCallback } from "react";
import CodeMirror from "@uiw/react-codemirror";
// @ts-ignore
import { tags as t } from "@lezer/highlight";
import { loadLanguage } from "@uiw/codemirror-extensions-langs";
import { draculaInit } from "@uiw/codemirror-theme-dracula";
import { Code } from "lucide-react";
type Props = {
  language: any;
  displayName: string;
  value: string;
  onChange: (val: string) => void;
};
const Editor = ({ displayName, language, onChange, value }: Props) => {
  const handleChange = useCallback((val: string, viewUpdate: Object) => {
    onChange(val);
  }, []);
  const color =
    (displayName === "HTML" && "bg-orange-400 text-black p-1") ||
    (displayName === "CSS" && "bg-blue-400 text-black p-1") ||
    (displayName === "JS" && "bg-yellow-400 text-black p-1");
  return (
    <div className={`w-full h-full`}>
      <span className="font-bold bg-[#3c3e4b] text-white/45 px-4 text-sm flex items-center gap-2">
        <Code height={20} width={20} className={`${color}`} />
        {displayName}
      </span>
      <CodeMirror
        value={value}
        height="500px"
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
