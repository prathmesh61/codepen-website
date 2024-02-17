import EditorPanel from "@/components/EditorPanel";
import HelperNav from "@/components/HelperNav";

const CodeEditor = () => {
  return (
    <div className="h-screen w-full">
      <HelperNav />
      <EditorPanel />
    </div>
  );
};

export default CodeEditor;
