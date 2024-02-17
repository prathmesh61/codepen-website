import { cssCode, htmlCode, jsCode } from "@/lib/initCode";
import { create } from "zustand";

type State = {
  html: string;
  css: string;
  js: string;
  updateHtml: (val: State["html"]) => void;
  updateCss: (val: State["css"]) => void;
  updatejs: (val: State["js"]) => void;
};

export const useStore = create<State>((set) => ({
  html: htmlCode,
  css: cssCode,
  js: jsCode,
  updateHtml: (val) => set(() => ({ html: val })),
  updateCss: (val) => set(() => ({ css: val })),
  updatejs: (val) => set(() => ({ js: val })),
}));
