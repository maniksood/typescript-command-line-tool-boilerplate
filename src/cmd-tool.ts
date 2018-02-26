import * as Argv from 'yargs';
import {runExample} from './controllers/main.controller';

const argv = Argv.argv;


const main  = async () => {

  const mode = argv['mode'];

  switch (mode) {
    case 'example':
      await runExample();
  }

};

main();
