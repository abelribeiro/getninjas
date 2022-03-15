// eslint-disable-next-line import/no-extraneous-dependencies
const express = require('express');
const fields = require('./fields.json');

const app = express();
const port = 3333;

app.use(express.static('public'));

app.get('/api/fields', (_req, res) => {
  res.json(fields);
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port ${port}`);
});
