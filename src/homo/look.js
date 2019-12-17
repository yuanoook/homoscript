import { navigate } from './lab/view';

const areaLines = {};
const makeLine = (key) => {
  const line = areaLines[key] = document.createElement('div');
  document.body.appendChild(line);
  line.style.outline = 'green inset 2px';
  line.style.position = 'fixed';
  line.style.width = 0;
  line.style.height = 0;
  return line;
};

const renderLine = (key, x, y, width, height) => {
  const line = areaLines[key] || makeLine(key);
  line.style.top = `${y}px`;
  line.style.left = `${x}px`;
  line.style.width = `${width}px`;
  line.style.height = `${height}px`;
};

const makeVerticalLine = (key, x, y, height) => {
  renderLine(key, x, y, 0, height);
};

const makeHorizontalLine = (key, x, y, width) => {
  renderLine(key, x, y, width, 0);
};

const focus = ({x1, y1, width, height}) => {
  x1++;
  y1++;
  width--;
  height--;
  makeVerticalLine(1, x1, y1, height);
  makeVerticalLine(2, x1 + width, y1, height);
  makeHorizontalLine(3, x1, y1, width);
  makeHorizontalLine(4, x1, y1 + height, width);
};

const YouLook = text => {
  const newFocusArea = navigate(text);
  focus(newFocusArea);
};

export default YouLook;
