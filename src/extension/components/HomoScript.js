import Ganic from 'ganic';
import { useCallback } from 'ganic-usex';
import useStorage from '../../shared/useStorage';
import exec from '../commands/exec';

const HomoScript = () => {
  const [lines, setLines] = useStorage('homoscript_extension_popup_lines', `you see input
you do highlight
you use Rango Movie
you do input
you do submit`);
  const onInput = useCallback(e => setLines(e.target.value));
  const start = () => exec(lines);

  return <div>
    <div style={{display: 'flex'}}>
      <textarea value={lines} onInput={onInput}/>
      <pre style={{fontSize: '11px', margin: 0}}>{lines}</pre>
    </div>
    <button onClick={start}>Start</button>
  </div>
}

export default HomoScript;
