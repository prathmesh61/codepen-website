import mongoose from "mongoose";

type SchemaType = {
  email: string;
  fullCode: {
    html: string;
    css: string;
    js: string;
  };
};

const codeSchema = new mongoose.Schema<SchemaType>(
  {
    email: { type: String, required: true },
    fullCode: {
      html: { type: String, required: true },
      css: { type: String, required: true },
      js: { type: String, required: true },
    },
  },
  { timestamps: true }
);

const Code = mongoose.model("Code", codeSchema);
export default Code;
