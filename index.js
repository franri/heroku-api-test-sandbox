
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    console.log(req);
    res.send('Hello World!');
});

app.get('/webhook', (req, res) => {
    console.log(req);
    res.send('Hello World!');
  });

  app.post('/webhook', (req, res) => {
      console.log(req);
      res.send(JSON.stringify({
          "status": "success",
          "chatbot_response": "todo ok"
      }));
  });


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

