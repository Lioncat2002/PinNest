import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import UserRoute from "./routes/user.route";
import PinRoute from "./routes/pin.route";
import cors from "cors";
dotenv.config();
const port = process.env.PORT || 3000;
const app: Express = express();
//middlewares
app.use(express.json());
app.use(cors());
//routes
app.use("/user", UserRoute);
app.use("/pin", PinRoute);
app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
