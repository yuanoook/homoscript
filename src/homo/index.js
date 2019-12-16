import Homo from './homo';
import { getLines } from './lab/utils';

const startWithYOU = /^you/i;
const startWithYOUAndSPACE = /^you\s/i;

const tellMeWhatOurHomoCanDo = () => {
  return Object.keys(Homo).filter(key => startWithYOU.test(key));
};

const parseLine = line => {
  const words = line.trim().split(/\s+/);
  const homoCanDos = tellMeWhatOurHomoCanDo();
  const verb = homoCanDos.find(canDo => {
    const verbWithoutYOU = canDo.replace(startWithYOU, '').toLowerCase();
    return new RegExp(verbWithoutYOU, 'i').test(words[1]);
  });
  const x = words.slice(2).join(' ');
  return [verb, x];
};

const execLine = line => {
  if (!startWithYOUAndSPACE.test(line)) {
    return;
  }
  const [verb, x] = parseLine(line);
  if (verb && x) {
    console.log('verb x: ', verb, x);
    Homo[verb](x);
  };
}

export const read = scripts => {
  const lines = getLines(scripts);
  lines.forEach(execLine);
};

export default Homo.default || Homo;
