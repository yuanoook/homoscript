import Ganic from 'ganic';
import { useCallback } from 'ganic-usex';
import useStorage from '../../shared/useStorage';
import exec from '../commands/exec';

const toCommands = lines => lines.split('\n').map(x => x.trim()).filter(x => x);

const HomoScript = () => {
  const [lines, setLines] = useStorage('homoscript_extension_popup_lines', '');
  const onInput = useCallback(e => setLines(e.target.value));
  const commands = toCommands(lines);
  const start = () => exec(lines);

  return <div>
    <div style={{display:'flex'}}>
      <textarea value={lines} onInput={onInput}/>
      <pre style={{fontSize: '11px', margin: 0}}>{lines}</pre>
    </div>
    <button onClick={start}>Start</button>
  </div>
}

export default HomoScript;
