const openExtensionPage = () => {
  chrome.tabs.create({
    url: chrome.extension.getURL(),
    selected: true,
  });
};

const failureHandler = () => {
  const optionsPage = "options/index.html";
  const optionsPageRegExp = new RegExp(optionsPage);
  if (optionsPageRegExp.test(location.href)) {
    alert('Please allow Homoscript to use your microphone!\n\nRefresh to try again!');
  } else {
    openExtensionPage(optionsPage);
  }
};

const requestForMicrophonePermit = () => {
  window.navigator.mediaDevices.getUserMedia({ audio: true })
    .then(function(stream) {
      stream.getTracks()[0].stop();
    })
    .catch(failureHandler);
};

export default requestForMicrophonePermit;
