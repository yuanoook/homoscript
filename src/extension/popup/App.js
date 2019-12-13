import Ganic from 'ganic';
import {
  useState,
  useEffect,
  useDebounce
} from 'ganic-usex';
import Speech2Text from '../../components/Speech2Text';
import search from '../commands/search';

const onInput = (text = '') => {
  text = text.trim();
  const searchRegex = /^search\s/i;
  if (searchRegex.test(text)) {
    const query = text.replace(searchRegex, '');
    search(query);
  }
};

const App = () => {
  const [text, setText] = useState('');
  useEffect(onInput, useDebounce(text, 500));
  return <Speech2Text onInput={setText}/>
};

export default App;
