import express from 'express';
import { fizzbuzz } from './fizzbuzz';

const app = express();

app.get("/:input", (req, res) => {
  const inputNumber: number = Number(req.params.input);
  res.jsonp(fizzbuzz(inputNumber));
});

const port = 8080;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
