import * as config from 'config';
import * as async from 'async';
import * as request_promise from 'request-promise';
import * as DB from '../storage/models/index';

const Main = DB['Main'];
const Jarvis1 = DB['Jarvis1'];
const Jarvis2 = DB['Jarvis2'];

let PARALLEL_CALLS = 2;

export const requestPromiseQueue = async.queue(async (task, callback) => {

  setParallelCallsForSource(task.source);

  try {
    let data = await request_promise(task.options);
    callback({data: data});
  } catch (e) {
    console.log(e);
  }

}, PARALLEL_CALLS);


const setParallelCallsForSource = (source) => {
  const cfg = config.get(source);

  let parallel_calls_in_queue = cfg.parallel_calls_in_queue;
  if (parallel_calls_in_queue) {
    PARALLEL_CALLS =  parseInt(parallel_calls_in_queue);
  }
};
