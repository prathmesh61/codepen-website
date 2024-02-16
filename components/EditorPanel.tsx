"use client";
import React, { useState } from "react";
import Editor from "./Editor";

type Props = {};

const EditorPanel = (props: Props) => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  return (
    <div>
      <Editor
        language="html"
        displayName="HTML"
        value={html}
        onChange={setHtml}
      />
      <Editor language="css" displayName="CSS" value={css} onChange={setCss} />
      <Editor
        language="javascript"
        displayName="JS"
        value={js}
        onChange={setJs}
      />
    </div>
  );
};

export default EditorPanel;
