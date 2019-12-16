import YouSee from './see';
import YouDo from './do';
import YouUse from './use';
import memory from './lib/memory';

const Homo = {};
const tasks = [];
const execIndex = 0;
const WAITING_FOR_RESULT = '[{(<...@ waiting for result @...>)}]';
const taskify = fn => tasks.push((...args) => fn(...args));

const memorizeResult = s => memory.memorize(`task_result.${execIndex}`, s);
const recallResult = () => memory.recall(`task_result.${execIndex}`);





const isWaitingForResult = () => {
  return recallResult() === WAITING_FOR_RESULT;
};
const noMoreFurtherTasks = () => {
  return execIndex === tasks.length - 1;
};
const checkTasks = async () => {
  if (isWaitingForResult() || noMoreFurtherTasks()) {
    return;
  }
  const task = tasks[++execIndex];
  const resultKey = `task_result.${execIndex}`;
  const result = task();
  if (result && typeof result.then === 'function') {
    memorizeResult(WAITING_FOR_RESULT);
    result.then(res => {
      memorizeResult(res);
      checkTasks();
    });
  }
  memorizeResult(result);
  checkTasks();
};




const execTask = (index, task) => {
  const lastResult = memory.recall('task_result');
  if (lastResult && typeof lastResult.then === 'function') {
    lastResult.then(() => {

    });
  };
  memory.memorize('task_result', task());
};

const loadFn = fn => {
  setTimeout(checkTasks);
  return taskify(fn);
}

const Homo = {
  YouSee: function() {
    YouSee.apply(null, arguments);
    return Homo;
  },
  YouDo: function() {
    YouDo.apply(null, arguments);
    return Homo;
  },
  YouUse: function() {
    YouUse.apply(null, arguments);
    return Homo;
  }
};

export default Homo;
