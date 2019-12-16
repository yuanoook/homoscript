import Ganic from 'ganic';
import {
  useCallback,
  useEffect,
  useDebounce
} from 'ganic-usex';
import Speech2Text from '../components/Speech2Text';
import HomoScript from '../components/HomoScript';
import useStorage from '../shared/useStorage';
import exec from '../commands/exec';

let firstTime = true;
const App = () => {
  const [text, setText] = useStorage('homoscript_extension_commands_list_demo', '');
  const commands = useDebounce(text, 700);
  useEffect(s => {
    if (firstTime) {
      firstTime = false;
      return;
    }
    exec(s);
  }, commands);
  const onChange = useCallback(i => setText(t => t + '\n' + i));

  return <>
    <HomoScript/>
    {/* <Speech2Text onChange={onChange} initOn={false}/> */}
    {/* <pre>{commands}</pre> */}
  </>
};

export default App;
