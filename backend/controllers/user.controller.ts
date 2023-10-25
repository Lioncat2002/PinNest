import { Request, Response } from "express";
import { PRISMA } from "../services/db";
export default class User {
  static async get(req: Request, res: Response) {
    const users = await PRISMA.user.findMany({
      include: {
        pinsByUsers: true,
      },
    });
    res.status(200).json({ data: users });
  }
  static async create(req: Request, res: Response) {
    try {
      const newUser = await PRISMA.user.create({
        data: {
          email: req.body.email,
        },
      });
      res.status(201).json({ status: "created", user: newUser });
    } catch (error) {
      res.status(500).json({ status: "error", err: error });
    }
  }
  static async pin(req: Request, res: Response) {
    try {
      const userPin = await PRISMA.userPin.create({
        data: {
          userId: req.body.userId,
          pinId: req.body.pinId,
        },
      });
      res.status(201).json({ status: "created", pinned: userPin });
    } catch (error) {
      res.status(500).json({ status: "error", err: error });
    }
  }
}
