import Seeable from './lab/seeable';
import { lookAtElement } from './look';

const youHaveSeenScreens = [];
const youHaveSeenList = [];

const anotherRegex = /another\s/;
const parseType = str => {
  if (anotherRegex.test(str)) {
    return {
      another: true,
      type: str.replace(anotherRegex, ''),
    };
  }
  return {
    another: false,
    type: str,
  };
};

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

  if (desc instanceof RegExp) {
    return desc.test(el);
  }

  return desc === el;
};

const haveYouEverSeen = el => youHaveSeenList.indexOf(el) > -1;

const seen = el => {
  youHaveSeenList.push(window);
  lookAtElement(el);
};

const YouSee = sth => {
  let toParseType, desc, number, position;
  if (typeof sth === 'string') {
    toParseType = sth;
  } else if (typeof sth === 'object') {
    toParseType = sth.type;
    desc = sth.desc;
    number = sth.number;
    position = sth.position;
  };

  const {type, another} = parseType(toParseType);

  if (type === 'window') {
    seen(window);
    return window;
  }

  const el = Seeable.find(e => {
    const typeMatch = checkType(e, type);
    if (!typeMatch) {
      return false;
    }
    if (another && haveYouEverSeen(e)) {
      return false;
    }
    const descMatch = checkDesc(e, desc);
    if (descMatch) {
      return true;
    }
  });

  seen(el);
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
