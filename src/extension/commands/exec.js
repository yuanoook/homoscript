import search from './search';

const execCommand = (commands = '') => {
  commands = commands.split('\n');
  const text = commands[commands.length - 1].trim();
  const searchRegex = /^search\s/i;
  if (searchRegex.test(text)) {
    const query = text.replace(searchRegex, '');
    search(query);
  }
};

export default execCommand;
