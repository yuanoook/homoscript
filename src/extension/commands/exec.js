import search from './search';
import {
  homoStart,
  getLines,
  getLast,
} from '../../shared/utils';

const searchRegex = /^search\s/i;

const exec = (str = '') => {
  const lines = getLines(str);
  const lastLine = getLast(lines);
  if (lines.length === 1 && searchRegex.test(lastLine)) {
    const query = lastLine.replace(searchRegex, '');
    search(query);
    return;
  }
  homoStart(str);
};

export default exec;
