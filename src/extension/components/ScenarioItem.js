import Ganic from 'ganic';
import { useCallback } from 'ganic-usex';
import useStorage from '../shared/useStorage';
import exec from '../commands/exec';

const textareaStyle = {
  minWidth: '200px',
  minHeight: '200px',
};

const ScenarioItem = ({
  data: {
    id,
    name,
    given,
    scripts,
  },
  dispatch,
}) => {
  const start = () => exec(scripts);
  const update = useCallback((key, value) => dispatch({
    type: 'UPDATE',
    payload: {
      id,
      [key]: value,
    },
  }));
  const updateName = useCallback(e => update('name', e.target.value));
  const updateScripts = useCallback(e => update('scripts', e.target.value));

  return <fieldset>
    <legend>
      <input value={name} onInput={updateName}/>
    </legend>
    <textarea style={textareaStyle} value={scripts} onInput={updateScripts}/>
    <button onClick={start}>Run</button>
  </fieldset>
}

export default ScenarioItem;
