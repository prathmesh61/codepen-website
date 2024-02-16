import EditorPanel from "@/components/EditorPanel";

export default function Home() {
  return (
    <div className="h-screen">
      <EditorPanel />
      <div className="pane">
        <iframe
          title="output"
          sandbox="allow-scripts"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
}
