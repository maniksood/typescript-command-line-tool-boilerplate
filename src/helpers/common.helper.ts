import * as base64 from 'base-64';
import * as request_promise from 'request-promise';
import * as DB from '../storage/models';
const Main = DB['Main'];
const Info = DB['Info'];
const Jarvis1 = DB['Jarvis1'];
const Jarvis2 = DB['Jarvis2'];

export const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};


