import {
  triggerEvent,
  highlight,
  input,
  submit,
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
      input(target, payload);
      break;
    case 'submit':
      submit(target);
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
