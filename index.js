
const express = require('express');
const app = express();
const util = require('util')
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    console.log(req.query);
    console.log(req.body);
    const d = {"get": req.query, "body": req.body};
    res.send(util.inspect(d, false, null, true /* enable colors */));
});

app.get('/webhook', (req, res) => {
    console.log(req.query);
    console.log(req.body);
    const d = {"get": req.query, "body": req.body};
    res.send(util.inspect(d, false, null, true /* enable colors */));
  });

  app.post('/webhook', (req, res) => {
      console.log(`req.ip: ${req.ip}`);
      console.log(`req.ips: ${req.ips}`);
      console.log(`req.query: ${req.query}`);
      console.log(`req.params: ${req.params}`);
      console.log(`req.body: ${req.body}`);
      const data = {"get": req.query, "body": req.body};
      const string = util.inspect(d, false, null, true /* enable colors */)
      console.log(s);
      res.send(s);
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

