const express = require('express');
const { json } = require('body-parser');

require('./lib/dotenv');

const ctrls = require('./lib/controllers');
const { host, port } = require('./lib/config');

const app = express();

app.use(json());

app
  .route('/ok')
  .get(ctrls.ok);

app.listen(port, host, () => {
  console.info('server started at http://%s:%s', host, port);
});
