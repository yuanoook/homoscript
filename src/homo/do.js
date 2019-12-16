import {
  triggerEvent,
  strokeKey,
  highlight,
} from './lab/actions';
import {
  getLastSeen,
} from './see';
import memory from './lab/memory';

const delegate = (action, target, payload) => {
  switch(action) {
    case 'scroll_to_top_left':
      target.scrollTo(0, 0);
      break;
    case 'focus':
      triggerEvent(target, 'focus');
      break;
    case 'input':
      triggerEvent(target, 'click');
      triggerEvent(target, 'focus');
      target.value = payload;
      triggerEvent(target, 'change');
      triggerEvent(target, 'blur');
      break;
    case 'submit':
      triggerEvent(target, 'click');
      triggerEvent(target, 'focus');
      strokeKey(target, 13);
      const form = target.form || target;
      if (typeof form.submit === 'function') {
        form.submit();
      }
      break;
    case 'highlight':
    default:
      highlight(target);
      break;
  }
}

const YouDo = sth => {
  let action, target, payload;
  if (typeof sth === 'string') {
    action = sth;
    target = getLastSeen();
    payload = memory.recall('payload');
  } else if (typeof sth === 'object') {
    action = sth.action;
    target = sth.target || getLastSeen();
    payload = sth.payload || memory.recall('payload');
  }
  if (!target ) {
    return;
  }
  delegate(action, target, payload);
};

export default YouDo;
