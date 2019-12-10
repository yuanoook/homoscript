const walk = (density = 30, fn) => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  for (let x = 0; x <= density; x++) {
    const clientX = x * width / density;
    for (let y = 0; y <= density; y++) {
      const clientY = y * height / density;
      const element = document.elementFromPoint(clientX, clientY);
      if (element && (fn(element) === false)) {
        return;
      }
    }
  }
};

const getAll = (density = 30) => {
  const elements = [];
  const addToElements = elements.push.bind(elements);
  walk(density, addToElements);
  return elements;
};

const find = (fn, density = 30) => {
  let target;
  walk(density, element => {
    if (fn(element)) {
      target = element;
      return false;
    }
  });
  return target;
};

const Seeable = {
  walk,
  getAll,
  find,
};

module.exports = Seeable;
