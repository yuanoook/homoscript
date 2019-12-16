const highlight = element => {
  element.style.outline = 'red solid 5px';
};

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
    32: 'Space',
    8: 'Backspace',
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

const submit = target => {
  triggerEvent(target, 'click');
  triggerEvent(target, 'focus');
  strokeKey(target, 13);

  // try traditional way
  setTimeout(() => {
    const form = target.form || target;
    const submitButton = form.querySelector('[type=submit]');
    if (submitButton) {
      triggerEvent(submitButton, 'click');
    } else if (typeof form.submit === 'function') {
      form.submit();
    }
  }, 300);
};

const input = (target, value) => {
  triggerEvent(target, 'click');
  triggerEvent(target, 'focus');
  target.value = value;
  triggerEvent(target, 'input');
  triggerEvent(target, 'change');
  triggerEvent(target, 'blur');
};

module.exports = {
  highlight,
  triggerEvent,
  strokeKey,
  submit,
  input,
};
