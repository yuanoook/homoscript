import Ganic from 'ganic';
import Speech2Text from './components/Speech2Text';
import GanicDOM from 'ganic-dom';

const test = () => {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'Homo.Start();'});
  });
};

const onInput = text => {
  if (/test/i.test(text)) {
    test();
  }
};

const App = () => <Speech2Text onInput={onInput}/>;

GanicDOM.render(<App />, document.getElementById('app'));

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

test.onclick = test;
