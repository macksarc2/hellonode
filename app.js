const express = require('express');
const os = require('os');
const app = express();
const port = 3000;

app.get('/', (req,res) => {
  const now = new Date();
  const currentTime = now.toLocaleTimeString();
  res.send(`Hello World! ${currentTime} UTC ${os.hostname()}`);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});