import YouLook from './look';
import YouSee from './see';
import YouDo from './do';
import YouUse from './use';

import taskify from './lab/taskify';

const taskifiedCalls = {
  YouLook: taskify(YouLook),
  YouSee: taskify(YouSee),
  YouDo: taskify(YouDo),
  YouUse: taskify(YouUse),
};

const Homo = {};

Object.keys(taskifiedCalls).forEach(key => {
  Homo[key] = (...args) => {
    taskifiedCalls[key](...args);
    return Homo;
  };
});

export default Homo;
