/**
 * Module dependencies.
 */
const dotenv = require('dotenv');

dotenv.config({
  path: './.env/.common.env',
});

const env = process.env.NODE_ENV || 'local';

dotenv.config({
  path: `./.env/.${env}.env`,
});
