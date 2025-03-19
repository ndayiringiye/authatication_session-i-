import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import { connectdb } from "./config/db.js";
import protectedRoutes from "./routes/protected.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/auth", authRoutes);
app.use("/api/protected", protectedRoutes);

const PORT = process.env.PORT || 7000;

app.listen(PORT, async () => {
    await connectdb();
    console.log(`Server running on port ${PORT}`);
});
