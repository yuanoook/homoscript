export const getVersion = () => chrome.app.getDetails().version;

export const open = url => {
  chrome.tabs.create({ url });
};

export const accessCurrentTab = fn => {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, tabs => {
    fn(tabs[0]);
  });
};

export const updateUrl = url => {
  accessCurrentTab(tab => {
    chrome.tabs.update(tab.id, {url});
  });
};

export const google = query => {
  open(`https://www.google.com/search?q=${query}`);
};

export const execInSite = code => {
  accessCurrentTab(tab => {
    chrome.tabs.executeScript(tab.id, { code });
  });
};

export const homoStart = str => execInSite("Homo.Start('" + escape(str) + "')");
export const searchInSite = query => execInSite(`Homo.Search('${query}')`);

export const checkWebTab = (yesFn, noFn) => {
  accessCurrentTab(currentTab => {
    const chromePage = /^chrome:\/\//.test(currentTab.url);
    if (chromePage) {
      noFn();
    } else {
      yesFn();
    }
  });
};

export const getLines = str => str.split('\n').map(s => s.trim()).filter(s => s);
export const getLast = arr => arr[arr.length - 1];
