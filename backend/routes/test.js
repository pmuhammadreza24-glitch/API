
import express from "express";

const userRoutes = express.Router();

userRoutes.get("/test", (req, res) => {
    res.send({
        data: {
            name: "Bilal"
        },
        error: false,
        status: 2
    });
});

userRoutes.post("/test", (req, res) => {
    res.send("Post Request");
});

userRoutes.put("/test", (req, res) => {
    res.send("Put Request");
});

userRoutes.delete("/test", (req, res) => {
    res.send("Delete Request");
});

export default userRoutes;
