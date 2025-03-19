import express from "express";
import authMiddleware from "../config/authMiddleWare/auth";

const router = express.Router();

router.get("/dashboard",(req, res), authMiddleware => {
    res.json({
        msg: "Welcome to the dashboard!",
        user: req.user,
    });
});

export default router;
