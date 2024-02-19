"use client";
import Editor from "./Editor";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useStore } from "@/store/store";

const EditorPanel = () => {
  const { css, html, js, updateCss, updateHtml, updatejs } = useStore(
    (state) => state
  );

  const srcDoc = `
  <html>
   <body>${html}</body>
   <style>${css}</style>
    <script>${js}</script>
  </html>
`;

  return (
    <div className="flex flex-col w-full h-[calc(100%-50px)] gap-8  ">
      <ResizablePanelGroup direction="vertical">
        <ResizablePanel defaultSize={70}>
          <ResizablePanelGroup
            direction="horizontal"
            className="flex w-full h-full "
          >
            <ResizablePanel>
              <Editor
                language="html"
                displayName="HTML"
                value={html}
                onChange={updateHtml}
              />
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel>
              <Editor
                language="css"
                displayName="CSS"
                value={css}
                onChange={updateCss}
              />
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel>
              <Editor
                language="javascript"
                displayName="JS"
                value={js}
                onChange={updatejs}
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
