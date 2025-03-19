import mongoose from "mongoose";
export const connectdb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI || "mongodb+srv://david:xwoUUMmdZNjnQmcS@cluster0.uvq3y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("MongoDB Connected");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
};
