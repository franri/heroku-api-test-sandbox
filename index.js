
const express = require('express');
const app = express();

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

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

