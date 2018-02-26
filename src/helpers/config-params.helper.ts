import * as config from 'config';


export const getDataForSourceFromConfig = (key, source) => {
  const sourceConfig = config.get(source);
  return sourceConfig[key];
};
