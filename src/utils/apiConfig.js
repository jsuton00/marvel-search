const { getApiHash } = require('marvel-api-hash-generator');

require('dotenv').config();

const API_KEY = process.env.REACT_APP_API_KEY;
const PRIVATE_KEY = process.env.REACT_APP_PRIVATE_KEY;
const timeStamp = 1;

const hashValue = getApiHash(timeStamp, PRIVATE_KEY, API_KEY);

export { API_KEY, hashValue, timeStamp };
