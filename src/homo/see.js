import Seeable from '../lib/seeable';

const youHaveSeenScreens = [];
const youHaveSeenList = [];

const checkType = (el, type) => {
  if (type === 'input') {
    if (el.type === 'submit') {
      return false;
    }
  }
  const typeReg = new RegExp(type, 'i');
  return typeReg.test(el.tagName);
}

const checkDesc = (el, desc) => {
  if (desc === undefined || desc === null) {
    return true;
  }

  if (typeof desc === 'function') {
    return Boolean(desc(el));
  } else if (el && typeof desc === 'object') {
    return !Object.keys(desc).find(
      key => !checkDesc(el[key], desc[key])
    );
  }

  return desc === el;
};

const YouSee = sth => {
  let type, desc, number, position;
  if (typeof sth === 'string') {
    type = sth;
  } else if (typeof sth === 'object') {
    type = sth.type;
    desc = sth.desc;
    number = sth.number;
    position = sth.position;
  };
  const el = Seeable.find(e => {
    const typeMatch = checkType(e, type);
    if (!typeMatch) {
      return false;
    }
    const descMatch = checkDesc(e, desc);
    if (descMatch) {
      return true;
    }
  });
  youHaveSeenList.push(el);
  return el;
};

export const getLastSeen = () => {
  return youHaveSeenList[youHaveSeenList.length - 1];
};

export const newScreen = () => {
  youHaveSeenScreens.push([...youHaveSeenList]);
  youHaveSeenList.length = 0;
};

export const previousScreen = () => {
  if (youHaveSeenScreens.length) {
    youHaveSeenList = youHaveSeenScreens[youHaveSeenScreens.length - 1];
    youHaveSeenScreens.length --;
  } else {
    youHaveSeenList.length = 0;
  }
};

export default YouSee;
