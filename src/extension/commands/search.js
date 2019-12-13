const searchInTab = (query, tab) => {
  chrome.tabs.update(
    tab.id,
    {url: `https://www.google.com/search?q=${query}`}
  );
};

const searchInContent = (query, tab) => {
  chrome.tabs.executeScript(
    tab.id,
    {code: `Homo.Search("${query}");`}
  );
};

const search = query => {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, tabs => {
    const currentTab = tabs[0];
    const chromePage = /^chrome:\/\//.test(currentTab.url);
    if (chromePage) {
      searchInTab(query, currentTab);
    } else {
      searchInContent(query, currentTab);
    }
  });
};

export default search;
