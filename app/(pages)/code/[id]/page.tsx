"use client";

type Props = {
  params: { id: string };
};
import Editor from "@/components/Editor";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { UserData } from "@/lib/types";
import { useStore } from "@/store/store";
import axios from "axios";
import Link from "next/link";
import { useCallback, useEffect } from "react";

const CodePage = ({ params }: Props) => {
  const { css, html, js, updateCss, updateHtml, updatejs } = useStore(
    (state) => state
  );
  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(`/api/share-code/${params.id}`);
      if (response.statusText === "error") {
        throw new Error(
          `Failed to fetch data: ${response.status} ${response.statusText}`
        );
      }
      const res: UserData = response.data;
      updateHtml(res.fullCode.html);
      updateCss(res.fullCode.css);
      updatejs(res.fullCode.js);
    } catch (error) {
      console.error("Error while fetching data", error);
      // Handle error state here, such as displaying an error message to the user
    }
  }, [params.id, updateHtml, updateCss, updatejs]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  const srcDoc = `
  <html>
   <body>${html}</body>
   <style>${css}</style>
    <script>${js}</script>
  </html>
`;

  return (
    <div className="flex flex-col">
      <div className="h-[50px] px-12 mx-auto flex justify-between items-center shadow-lg bg-[#0E1525] ">
        <Link
          href={"/"}
          className="font-bold text-xl font-mono border-b-4 border-b-[#0079F2] text-white"
        >
          CodeEdii
        </Link>
      </div>
      <div className="flex flex-col w-full h-[calc(100vh-50px)] gap-8  ">
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
    </div>
  );
};

export default CodePage;
