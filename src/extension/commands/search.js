import {
  checkWebTab,
  searchInSite,
  google,
} from '../shared/utils';

const search = query => {
  checkWebTab(
    () => searchInSite(query),
    () => google(query),
  );
};

export default search;
