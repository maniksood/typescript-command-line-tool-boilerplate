import {sleep} from '../helpers/common.helper';
import * as DB from './../storage/models/index';


export const runExample = async () => {
  await sleep(2000);
  console.log('example function from main.controller.ts after sleep of 2 seconds');
};


