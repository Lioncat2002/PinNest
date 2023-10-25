import { Request, Response } from "express";
import { PRISMA } from "../services/db";
import { Prisma } from "@prisma/client";
export default class Pin {
  static async get(req: Request, res: Response) {
    const pins = await PRISMA.pin.findMany();
    res.status(200).json({ data: pins });
  }
  static async create(req: Request, res: Response) {
    try {
      const pin = await PRISMA.pin.create({
        data: {
          url: req.body.url,
        },
      });
      res.status(201).json({ status: "created", data: pin });
    } catch (error) {
      res.status(500).json({ status: "error", err: error });
      return;
    }
  }
}
