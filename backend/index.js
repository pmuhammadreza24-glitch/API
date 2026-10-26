
import express from "express";
import userRoutes from "./routes/test.js";

const app = express();
const PORT = 3000;

app.use(express.json());

const auth = (req, res, next) => {
    console.log(req.headers);

    if (req.headers["test-auth"] === "123456") {
        next();
    } else {
        return res.status(401).send("User not authorized");
    }
};

app.use("/user", auth, userRoutes);

app.get("/", (req, res) => {
    res.send("Server is running yes!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});