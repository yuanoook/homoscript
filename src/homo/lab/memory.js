const cache = {};

const memorize = (key, value) => {
  cache[key] = cache[key] || [];
  cache[key].push(value);
};

const recall = (key) => {
  return cache[key] && cache[key][cache[key].length - 1];
};

const memory = {
  memorize,
  recall,
};

module.exports = memory;
