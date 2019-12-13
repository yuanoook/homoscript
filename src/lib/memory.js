const cache = {};

const memorize = (key, value) => {
  cache[key] = cache[key] || [];
  cache[key].push(value);
};

const remember = (key) => {
  return cache[key] && cache[key][cache[key].length - 1];
};

const memory = {
  memorize,
  remember,
};

module.exports = memory;
