const express = require('express');
const os = require('os');
const app = express();
const port = 3000;

app.get('/', (req,res) => {
  const now = new Date();
  const currentTime = now.toLocaleTimeString();
  res.send(`Hello World! ${currentTime} UTC ${os.hostname()}`);
});

// Route that generates CPU load
app.get('/load', (req, res) => {
  const start = Date.now();

  // Function to generate CPU load
  function generateLoad(duration) {
      const end = Date.now() + duration;
      while (Date.now() < end) {
          // Busy wait loop
          Math.sqrt(Math.random() * 1000000);
      }
  }

  // Generate CPU load for 1 seconds
  generateLoad(1000);

  res.send('CPU load generated for 1 second');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});