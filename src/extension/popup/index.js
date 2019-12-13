import Ganic from 'ganic';
import GanicDOM from 'ganic-dom';
import App from './App';

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
