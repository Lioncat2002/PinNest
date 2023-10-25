import express, { Express, Request, Response } from "express";
import User from "../controllers/user.controller";
import Pin from "../controllers/pin.controller";
const PinRoute = express.Router();

PinRoute.get("/", Pin.get);

PinRoute.put("/", Pin.create);

export default PinRoute;
