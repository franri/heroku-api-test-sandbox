
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log(req);
    res.send(JSON.stringify(req));
});

app.get('/webhook', (req, res) => {
    console.log(req);
    res.send(JSON.stringify(req));
  });

  app.post('/webhook', (req, res) => {
      console.log(req);
      res.send(JSON.stringify(req));
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

