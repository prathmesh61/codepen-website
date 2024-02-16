"use client";
import React, { useState } from "react";
import Editor from "./Editor";

type Props = {};

const EditorPanel = (props: Props) => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const srcDoc = `
  <html>
    <body>${html}</body>
    <style>${css}</style>
    <script>${js}</script>
  </html>
`;
  return (
    <div className="flex flex-col w-full h-full gap-8">
      <div className="flex w-full h-full gap-4">
        <Editor
          language="html"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}
        />
      </div>

      <div className="w-full h-full bg-white">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default EditorPanel;
