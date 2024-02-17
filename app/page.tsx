import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-full bg-[#0E1525] text-white ">
      <Navbar />
      <div className="flex flex-col items-center justify-center h-[calc(100vh-50px)] w-full space-y-4 bg">
        <h1 className="font-bold text-5xl text-center tracking-widest">
          Code, create, and
          <br /> learn together with
          <br /> HTML, CSS, JS
        </h1>
        <p className="font-medium text-lg text-center max-w-[550px] break-words">
          Code, collaborate, compile, run, share, and deploy HTML, CSS, JS and
          more online from your browser.
        </p>
        <Link
          href={"/editor"}
          className="bg-[#0079F2] rounded-md text-sm px-4 py-2"
        >
          Code in HTML, CSS, JAVASCRIPT
        </Link>
      </div>
    </div>
  );
}
