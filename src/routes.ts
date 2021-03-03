import { Router, Request, Response } from "express";

import "dotenv/config";

const routes = Router();

routes.get("/books", (req: Request, res: Response) => {
  console.log(process.env.APP_NAME);
  return res.json({ message: "Hello world" });
});

export default routes;
