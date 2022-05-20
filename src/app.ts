import express from "express";
import { exampleMiddleware } from "./middlewares/exampleMiddleware";
import user from "./routes/user";

const app = express();

app.get("/", [exampleMiddleware], (req: express.Request, res: express.Response) => {
  res.send("Response");
});

app.use("/user", user);

app.listen(5500, () => {
  console.log("5500 port started. http://localhost:5500/");
});
