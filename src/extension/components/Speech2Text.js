// https://developers.google.com/web/updates/2013/01/Voice-Driven-Web-Apps-Introduction-to-the-Web-Speech-API

import Ganic from 'ganic';
import { useState, useMemo, useCallback } from 'ganic-usex';
import SpeechRecognition from './SpeechRecognition';
import useStorage from '../shared/useStorage';

const nullFn = () => {};

const langs = {
  'en-US': 'English (US)',
  'cmn-Hans-CN': '普通话 (中国大陆)',
  'yue-Hant-HK': '粵語 (香港)',
  'cmn-Hant-TW': '中文 (台灣)',
};

const langOptions = Object.keys(langs).map(key => ({
  value: key,
  text: langs[key],
}));

const Option = ({value, text, select}) => (
  <option
    selected={value === select}
    value={value}>
    { text }
  </option>
);

const useSelect = options => {
  const [select, setSelect] = useStorage('ganic_codesandbox__speech2text_lang_select', options[0].value);
  const optionsUI = useMemo(options => options.map(
    option => <Option value={option.value} text={option.text} key={option.value} select={select} />
  ), options);

  const selectUI = useMemo(setSelect => (
    <select
      style={{fontSize: '20px', marginTop: '-40px'}}
      onChange={e => setSelect(e.target.value)}
    >
      { optionsUI }
    </select>
  ), setSelect);
  return [select, selectUI];
}

const Speech2Text = ({
  onInput: onInputProp = nullFn,
  onChange: onChangeProp = nullFn,
  initOn = true,
}) => {
  const [lang, langSelectUI] = useSelect(langOptions);
  const [on, setOn] = useState(initOn);
  const [final, onFinal] = useState('');
  const [interim, onInterim] = useState('');
  const [error, onError] = useState('');
  const onInput = useCallback((i, onInput) => {
    onInterim(i);
    onInput(i);
  }, onInputProp);
  const onChange = useCallback((i, onChange) => {
    onFinal(i);
    onChange(i);
  }, onChangeProp);

  const SRProps = {
    lang,
    on,
    onClick: () => setOn(o => !o),
    style: {
      maxWidth: '50px',
    },
    onFinal: onChange,
    onInterim: onInput,
    onError: onError,
  };

  return <>
    {langSelectUI}
    <SpeechRecognition {...SRProps}/>
    <br/>
    { final } { interim }
    <br/>
    <span style='color: red'>{ error }</span>
  </>;
};

export default Speech2Text;
