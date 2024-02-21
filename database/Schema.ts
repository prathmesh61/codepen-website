import mongoose from "mongoose";

type SchemaType = {
  projectName: string;
  email: string;
  fullCode: {
    html: string;
    css: string;
    js: string;
  };
};

const codeSchema = new mongoose.Schema<SchemaType>(
  {
    projectName: { type: String, required: true },
    email: { type: String, required: true },
    fullCode: {
      html: { type: String, required: true },
      css: { type: String, required: true },
      js: { type: String, required: true },
    },
  },
  { timestamps: true }
);

const Code = mongoose.models.Code || mongoose.model("Code", codeSchema);
export default Code;
