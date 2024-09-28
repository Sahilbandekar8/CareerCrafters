import mangoose from "mongoose";

const connectDB = async () => {
    try {
        await mangoose.connect(process.env.MONGO_URI);
        console.log('mongodb connected successfully');
    } catch (error) {
        console.log(error);
    }
}
export default connectDB;