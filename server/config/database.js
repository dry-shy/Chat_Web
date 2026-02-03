import mongoose from "mongoose";

const connectdb = async () => {
    await mongoose.connect(process.env.MONGODB_URI).then(() => {
      console.log("Connected to MongoDB");
    }).catch((error) => {
      console.error(error);
    });
}
export default connectdb;