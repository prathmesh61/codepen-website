"use client";
import React, { useState } from "react";
import Editor from "./Editor";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

const EditorPanel = () => {
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
    <div className="flex flex-col w-full h-full gap-8  ">
      <ResizablePanelGroup direction="vertical">
        <ResizablePanel>
          <ResizablePanelGroup
            direction="horizontal"
            className="flex w-full h-full "
          >
            <ResizablePanel defaultSize={50}>
              <Editor
                language="html"
                displayName="HTML"
                value={html}
                onChange={setHtml}
              />
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel>
              <Editor
                language="css"
                displayName="CSS"
                value={css}
                onChange={setCss}
              />
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel>
              <Editor
                language="javascript"
                displayName="JS"
                value={js}
                onChange={setJs}
              />
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
        <ResizableHandle />

        <ResizablePanel>
          <div className="w-full h-full bg-white">
            <iframe
              srcDoc={srcDoc}
              title="output"
              sandbox="allow-scripts"
              width="100%"
              height="100%"
            />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default EditorPanel;
