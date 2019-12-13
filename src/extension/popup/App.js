import Ganic from 'ganic';
import {
  useCallback,
  useEffect,
  useDebounce
} from 'ganic-usex';
import Speech2Text from '../../components/Speech2Text';
import search from '../commands/search';
import useStorage from '../../shared/useStorage';

const execCommand = (text = '') => {
  text = text.trim();
  const searchRegex = /^search\s/i;
  if (searchRegex.test(text)) {
    const query = text.replace(searchRegex, '');
    search(query);
  }
};

const App = () => {
  const [text, setText] = useStorage('homoscript_extension_commands_list_demo', '');
  const commands = useDebounce(text, 700);
  useEffect(execCommand, commands);
  const onChange = useCallback(i => setText(t => t + '\n' + i));

  return <>
    <Speech2Text onChange={onChange} initOn={false}/>
    <pre>{commands}</pre>
  </>
};

export default App;
