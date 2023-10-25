import express, { Express, Request, Response } from "express";
import User from "../controllers/user.controller";
const UserRoute = express.Router();

UserRoute.get("/", User.get);

UserRoute.put("/", User.create);
UserRoute.patch("/pin", User.pin);

export default UserRoute;
