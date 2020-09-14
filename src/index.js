const express = require('express');
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const cors = require('cors');
const pdfTemplate = require('./documents');
const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/generate-certificate', (req, res) => {
  const data = {
    name: 'Sasha',
    lastName: 'Zayets',
  };
  pdf.create(pdfTemplate(data), {}).toFile(`${__dirname}/result.pdf`, (err) => {
    if(err) {
      res.send(Promise.reject());
    }

    res.sendFile(`${__dirname}/result.pdf`);
  });
});

app.listen(port, () => {
  console.log('serve rund');
});