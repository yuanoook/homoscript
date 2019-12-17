import memory from './memory';
import { keepInRange } from './utils';

export const CURRENT_FOCUS_AREA = 'current_focus_area';

// TODO: support polygon focus area
export const getCurrentFocusArea = () => {
  return memory.recall(CURRENT_FOCUS_AREA) || {
    x1: 0,
    y1: 0,
    width: window.innerWidth,
    height: window.innerHeight,
  };
};

const getFocusAreaDiff = desc => {
  const diffs = {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  };
  Object.keys(diffs).forEach(key => {
    if (desc[key]) {
      diffs[key] = 0.5;
    }
    if (desc.corner) {
      diffs[key] *= 0.5;
    }
  });
  return diffs;
};

const parseDesc = text => {
  const words = text.split(' ').filter(x => x).map(x => x.trim());
  const desc = [
    'at',
    'left',
    'right',
    'top',
    'bottom',
    'corner',
  ].reduce((obj, key) => {
    obj[key] = words.indexOf(key) > -1;
    return obj;
  }, {});
  return desc;
};

const getNewFocusArea = (diffs) => {
  const {x1, y1, width, height} = getCurrentFocusArea();
  const newFocusArea = {
    x1: diffs.right ? x1 + (1 - diffs.right) * width : x1,
    x2: diffs.left ? (x1 + width) - (1 - diffs.left) * width : (x1 + width),
    y1: diffs.bottom ? y1 + (1 - diffs.bottom) * height : y1,
    y2: diffs.top ? (y1 + height) - (1 - diffs.top) * height : (y1 + height),
  };
  newFocusArea.width = newFocusArea.x2 - newFocusArea.x1;
  newFocusArea.height = newFocusArea.y2 - newFocusArea.y1;
  return newFocusArea;
};

const getFocusAreaByElement = el => {
  if (el === window) {
    return {
      x1: 0,
      y1: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  if (el && typeof el.getBoundingClientRect === 'function') {
    let {x, y, width, height} = el.getBoundingClientRect();
    const x1 = keepInRange(x, 0, window.innerWidth);
    const y1 = keepInRange(y, 0, window.innerHeight);
    return {
      x1,
      y1,
      width: keepInRange(width, 0, window.innerWidth - x1),
      height: keepInRange(height, 0, window.innerHeight - y1),
    };
  }
};

export const navigate = text => {
  const desc = parseDesc(text);
  const diffs = getFocusAreaDiff(desc);
  const newFocusArea = getNewFocusArea(diffs);
  memory.memorize(CURRENT_FOCUS_AREA, newFocusArea);
  return newFocusArea;
};

export const focusOn = el => {
  if (!el) {
    return;
  }
  const newFocusArea = getFocusAreaByElement(el);
  memory.memorize(CURRENT_FOCUS_AREA, newFocusArea);
  return newFocusArea;
};
