import express from "express";
// import { cookieJwtAuth } from "./middleware/cookieJwtAuth";
// import authRouter from "./routes/auth";
// import cookieParser from "cookie-parser";

const app = express();

// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
// app.use(express.json());

const PORT = process.env.PORT || 3000;

// app.use("/auth", authRouter);

// endpoints protected with jwt
// app.use("/route-to-protect", cookieJwtAuth, routeImported);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
