import express, { Request, Response } from "express";

const app = express();
const port = 5000;

app.get("/", (_req: Request, res: Response) => {
  res.send("WORK!");
});

app.get("/ping", (_req: Request, res: Response) => {
  res.send("Pong 🏓!");
});

app.listen(port, () => console.log(`server running at ${port}`));

export default app