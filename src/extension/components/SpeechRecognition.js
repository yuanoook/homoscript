import Ganic from 'ganic';
import {
  useRef,
  useState,
  useEffect,
} from 'ganic-usex';

const nullFn = () => {};

const useRecognition = ({
  lang = 'en-US',
  onStart = nullFn,
  onFinal = nullFn,
  onInterim = nullFn,
  onError = nullFn,
}) => {
  const ref = useRef();
  ref.lang = lang;
  ref.onStart = onStart;
  ref.onFinal = onFinal;
  ref.onInterim = onInterim;
  ref.onError = onError;
  ref.toggle = ref.toggle || nullFn;
  const [recognizing, setRecognizing] = useState(false);

  useEffect(() => {
    let _recognizing = false;
    let final = '';
    let ignoreOnEnd;
    let startAt;
    let newStart;

    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
  
    recognition.onstart = function() {
      newStart = true;
      setRecognizing(_recognizing = true);
      ref.onStart(recognition);
    };
    recognition.onerror = function(event) {
      ignoreOnEnd = true;
      ref.onError({
        'not-allowed': Date.now() - startAt < 100 ? 'blocked' : 'denied',
        'no-speech': 'no_speech',
        'audio-capture': 'no_microphone',
        'network': 'no_network',
      }[event.error] || event.error);
    };
    recognition.onend = function() {
      setRecognizing(_recognizing = false);
      if (ignoreOnEnd) {
        return;
      }
      if (!final) {
        return;
      }
    };
    recognition.onresult = function(event) {
      let interim = '';
      if (typeof event.results === 'undefined') {
        recognition.onend = null;
        recognition.stop();
        return;
      }
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          final += event.results[i][0].transcript;
        } else {
          interim += event.results[i][0].transcript;
        }
      }
      if (newStart && !final) {
        newStart = false;
        ref.onFinal(final);
      }
      if (final) {
        ref.onFinal(final);
      }
      if (final || interim) {
        ref.onInterim(interim);
      }
    };

    const turnOn = () => {
      final = '';
      recognition.lang = ref.lang;
      recognition.start();
      ignoreOnEnd = false;
      startAt = Date.now();
    };

    const turnOff = () => {
      recognition.stop();
    };

    ref.toggle = on => {
      if (on === _recognizing) {
        return;
      }
      if (on) {
        turnOn();
      } else {
        turnOff();
      }
    };

    return () => {
      recognition.onstart = recognition.onerror = recognition.onend = recognition.onresult = null;
      recognition.abort();
    }; 
  });

  return [recognizing, ref.toggle];
};

const SpeechRecognition = props => {
  const {
    lang,
    on,
    onStart,
    onFinal,
    onInterim,
    onError,
    style: styleProp,
    ...otherProps
  } = props || {};

  const [recognizing, toggle] = useRecognition({
    lang,
    onStart,
    onFinal,
    onInterim,
    onError,
  });

  useEffect(toggle, on);

  const style = {
    cursor: 'pointer',
    pointerEvents: (recognizing && !on) ? 'none' : 'initial',
    borderRadius: on ? '25%' : '100%',
    transition: 'border-radius .6s',
    transitionTimingFunction: 'ease',
    ...styleProp,
  };

  return <img
    src={`./images/mic${ recognizing ? '-animate' : '' }.gif`}
    alt="Click and say something!"
    title="Click and say something!"
    style={style}
    {...otherProps}
  />;
};

export default SpeechRecognition;
