import express, { Application, Request, Response } from "express";

const createServer = () => {
  const app: Application = express();

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");

    next();
  });

  app.get("/", (_req: Request, res: Response) => {
    res.send("WORK!");
  });

  app.get("/ping", (_req: Request, res: Response) => {
    res.send("Pong 🏓!");
  });


  return app;
};

export default createServer;
