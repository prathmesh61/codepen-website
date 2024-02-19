import mongoose from "mongoose";

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL!, {
      dbName: "codeEditor",
    });

    console.log("DB Connection successful");
  } catch (error) {
    console.log("Connection to DB", error);
  }
};

export default connection;
