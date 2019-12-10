const triggerEvent = (target, name) => {
  const oldFashion = 'createEvent' in document;
  const event = oldFashion ? document.createEvent('Event') : new Event(name, {
    bubbles: true,
    cancelable: true,
  });
  if (oldFashion) {
    event.initEvent(name, true, true);
  }
  target.dispatchEvent(event);
};

const strokeKey = (target, key) => {
  const code = {
    13: 'Enter',
  }[key];
  const payload = {
    keyCode: key,
    which: key,
    key: code,
    code: code,
    bubbles: true,
    cancelable: true,
  };
  target.dispatchEvent(new KeyboardEvent('keydown', payload));
  target.dispatchEvent(new KeyboardEvent('keypress', payload));
  target.dispatchEvent(new KeyboardEvent('keyup', payload));
};

const highlight = element => {
  element.style.outline = 'red solid 5px';
};

module.exports = {
  triggerEvent,
  strokeKey,
  highlight,
};
