const {
  triggerEvent,
  strokeKey,
  highlight,
} = require('../lib/actions');
const {
  getLastSeen,
} = require('./see');

const YouUse = sth => {
  let action, target, payload;
  if (typeof sth === 'string') {
    action = sth;
    target = getLastSeen();
  } else if (typeof sth === 'object') {
    action = sth.action;
    target = sth.target || getLastSeen();
    payload = sth.payload;
  }
  if (!target ) {
    return;
  }
  delegate(action, target, payload);
};

module.exports = YouUse;
