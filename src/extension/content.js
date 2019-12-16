import Homo from '../homo/index';
import { getLines } from './shared/utils';

export const Search = query => {
  Homo
    .YouSee('window')
    .YouDo('scroll_to_top_left')
    .YouSee('input')
    .YouDo('highlight')
    .YouSee({
      type: 'input',
      desc: {
        type: /text|search/,
        value: v => v !== query,
      },
    })
    .YouUse(query)
    .YouDo('input')
    .YouDo('submit');
};

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

export const Start = text => {
  const str = unescape(text);
  const lines = getLines(str);
  lines.forEach(execLine);
};

export default Homo.default || Homo;
