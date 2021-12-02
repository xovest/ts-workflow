import express, { Application, Request, Response, NextFunction } from "express";

const app: Application = express();

const add = (n: number, m: number): number => n + m;

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  console.log(add(2, 6));
  res.send('Yo');
});

app.listen(5000, () => console.log('Runnin\''));