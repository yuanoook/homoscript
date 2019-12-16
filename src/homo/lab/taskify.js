import memory from './memory';

const tasks = [];
const WAITING_FOR_RESULT = '[{(<...@ waiting for result @...>)}]';

let execIndex = 0;

const memorizeResult = s => memory.memorize(`task_result.${execIndex}`, s);
const recallResult = () => memory.recall(`task_result.${execIndex}`);

const canProcessNextTask = () => {
  const isNotWaitingForResult = recallResult() !== WAITING_FOR_RESULT;
  const hasMoreFurtherTasks = tasks.length && execIndex < tasks.length - 1;
  return isNotWaitingForResult && hasMoreFurtherTasks;
}

const acceptTaskResult = result => {
  memorizeResult(result);
  clearTasks();
};

const clearTasks = async () => {
  if (!canProcessNextTask()) {
    return;
  }
  const task = tasks[++execIndex];
  const result = task();
  if (result && typeof result.then === 'function') {
    memorizeResult(WAITING_FOR_RESULT);
    result.then(acceptTaskResult);
  } else {
    acceptTaskResult(result);
  }
};

const taskify = fn => (...args) => {
  tasks.push(() => fn(...args));
  clearTasks();
};

export default taskify;
