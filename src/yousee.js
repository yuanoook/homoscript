const Seeable = require('./seeable');

const youHaveSeenScreens = [];
const youHaveSeenList = [];

const checkType = (el, type) => {
  if (type === 'input') {
    type = 'input|textarea';
  }
  const typeReg = new RegExp(type, 'i');
  return typeReg.test(el.tagName);
}

const checkDesc = (el, desc) => {
  if (!el) {
    return false;
  }

  if (desc) {
    if (typeof desc === 'function') {
      return Boolean(desc(el));
    } else if (typeof desc === 'object') {
      return !Object.keys(desc).find(
        key => !checkDesc(el[key], desc[key])
      );
    }
  }

  return true;
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

YouSee.getLastSeen = () => {
  return youHaveSeenList[youHaveSeenList.length - 1];
};

YouSee.newScreen = () => {
  youHaveSeenScreens.push([...youHaveSeenList]);
  youHaveSeenList.length = 0;
};

YouSee.previousScreen = () => {
  if (youHaveSeenScreens.length) {
    youHaveSeenList = youHaveSeenScreens[youHaveSeenScreens.length - 1];
    youHaveSeenScreens.length --;
  } else {
    youHaveSeenList.length = 0;
  }
};

module.exports = YouSee;
