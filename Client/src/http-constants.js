import axios from 'axios';

let baseURL;
// Need to change between versions of development and production...
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003/';
}

export const HTTP = axios.create({
  baseURL: baseURL
});
