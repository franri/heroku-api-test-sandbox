
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
      let ret = '';
      let s = '';
      console.log(`req.ip: ${JSON.stringify(req.ip)}`);
      s = s + `req.ip: ${JSON.stringify(req.ip)}` + '\n';
      console.log(`req.ips: ${JSON.stringify(req.ips)}`);
      s = s + `req.ips: ${JSON.stringify(req.ips)}` + '\n';
      console.log(`req.headers: ${JSON.stringify(req.headers)}`);
      s = s + `req.headers: ${JSON.stringify(req.headers)}` + '\n';
      console.log(`req.query: ${JSON.stringify(req.query)}`);
      s = s + `req.query: ${JSON.stringify(req.query)}` + '\n';
      console.log(`req.params: ${JSON.stringify(req.params)}`);
      s = s + `req.params: ${JSON.stringify(req.params)}` + '\n';
      console.log(`req.body: ${JSON.stringify(req.body)}`);
      s = s + `req.body: ${JSON.stringify(req.body)}` + '\n';
      console.log(s);
      res.send(s);
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

