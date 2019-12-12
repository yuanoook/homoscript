const memory = require('../lib/memory');

const YouUse = sth => {
  memory.memorize('payload', sth);
};

module.exports = YouUse;
