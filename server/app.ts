import express from "express";

const app = express();
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Server is running!!!");
});

app.use((_req, _res, next) => next(new Error("Route not found")));

export default app;
