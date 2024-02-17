"use client";
import React, { Dispatch, SetStateAction, useCallback, useState } from "react";
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
  onChange: Dispatch<SetStateAction<string>>;
};
const Editor = ({ displayName, language, onChange, value }: Props) => {
  const [open, setOpen] = useState<boolean>(true);
  const handleChange = useCallback((val: string, viewUpdate: Object) => {
    onChange(val);
  }, []);

  return (
    <div className={`w-full h-full`}>
      <span className="font-bold bg-[#3c3e4b] text-white/45 px-4 text-sm flex items-center gap-1">
        <Code height={20} width={20} />
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
