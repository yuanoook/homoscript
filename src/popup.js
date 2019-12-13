import Ganic from 'ganic';
import Speech2Text from './components/Speech2Text';
import GanicDOM from 'ganic-dom';
import {
  useState,
  useEffect,
  useDebounce
} from 'ganic-usex';

const search = query => {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: `Homo.Search("${query}");`});
  });
};

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
GanicDOM.render(<App />, document.getElementById('app'));


// OLD CODE
let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

changeColor.onclick = function(element) {
  let color = element.target.value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.body.style.backgroundColor = "' + color + '";'});
  });
};

test.onclick = () => search('Rango');
