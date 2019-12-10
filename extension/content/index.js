var Homo =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/actions.js":
/*!************************!*\
  !*** ./src/actions.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

const triggerEvent = (target, name) => {
  const oldFashion = 'createEvent' in document;
  const event = oldFashion ? document.createEvent('Event') : new Event(name, {
    bubbles: true,
    cancelable: true
  });

  if (oldFashion) {
    event.initEvent(name, true, true);
  }

  target.dispatchEvent(event);
};

const strokeKey = (target, key) => {
  const code = {
    13: 'Enter'
  }[key];
  const payload = {
    keyCode: key,
    which: key,
    key: code,
    code: code,
    bubbles: true,
    cancelable: true
  };
  target.dispatchEvent(new KeyboardEvent('keydown', payload));
  target.dispatchEvent(new KeyboardEvent('keypress', payload));
  target.dispatchEvent(new KeyboardEvent('keyup', payload));
};

const highlight = element => {
  element.style.outline = 'red solid 5px';
};

module.exports = {
  triggerEvent,
  strokeKey,
  highlight
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const YouSee = __webpack_require__(/*! ./yousee */ "./src/yousee.js");

const YouDo = __webpack_require__(/*! ./youdo */ "./src/youdo.js");

const Homo = {
  YouSee: function () {
    YouSee.apply(null, arguments);
    return Homo;
  },
  YouDo: function () {
    YouDo.apply(null, arguments);
    return Homo;
  }
};

Homo.Test = () => {
  const targetValue = 'define Rango';
  Homo.YouSee('input').YouDo('highlight').YouSee({
    type: 'input',
    desc: {
      value: v => v !== targetValue
    }
  }).YouDo({
    action: 'input',
    payload: targetValue
  }).YouDo('submit');
};

module.exports = Homo;

/***/ }),

/***/ "./src/seeable.js":
/*!************************!*\
  !*** ./src/seeable.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

const walk = (density = 30, fn) => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  for (let x = 0; x <= density; x++) {
    const clientX = x * width / density;

    for (let y = 0; y <= density; y++) {
      const clientY = y * height / density;
      const element = document.elementFromPoint(clientX, clientY);

      if (element && fn(element) === false) {
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
  find
};
module.exports = Seeable;

/***/ }),

/***/ "./src/youdo.js":
/*!**********************!*\
  !*** ./src/youdo.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  triggerEvent,
  strokeKey,
  highlight
} = __webpack_require__(/*! ./actions */ "./src/actions.js");

const {
  getLastSeen
} = __webpack_require__(/*! ./yousee */ "./src/yousee.js");

const delegate = (action, target, payload) => {
  switch (action) {
    case 'focus':
      triggerEvent(target, 'focus');
      break;

    case 'input':
      triggerEvent(target, 'click');
      triggerEvent(target, 'focus');
      target.value = payload;
      triggerEvent(target, 'change');
      triggerEvent(target, 'blur');
      break;

    case 'submit':
      triggerEvent(target, 'click');
      triggerEvent(target, 'focus');
      strokeKey(target, 13);
      const form = target.form || target;
      form.submit();
      break;

    case 'highlight':
    default:
      highlight(target);
      break;
  }
};

const YouDo = sth => {
  let action, target, payload;

  if (typeof sth === 'string') {
    action = sth;
    target = getLastSeen();
  } else if (typeof sth === 'object') {
    action = sth.action;
    target = sth.target || getLastSeen();
    payload = sth.payload;
  }

  if (!target) {
    return;
  }

  delegate(action, target, payload);
};

module.exports = YouDo;

/***/ }),

/***/ "./src/yousee.js":
/*!***********************!*\
  !*** ./src/yousee.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Seeable = __webpack_require__(/*! ./seeable */ "./src/seeable.js");

const youHaveSeenScreens = [];
const youHaveSeenList = [];

const checkType = (el, type) => {
  if (type === 'input') {
    type = 'input|textarea';
  }

  const typeReg = new RegExp(type, 'i');
  return typeReg.test(el.tagName);
};

const checkDesc = (el, desc) => {
  if (!el) {
    return false;
  }

  if (desc) {
    if (typeof desc === 'function') {
      return Boolean(desc(el));
    } else if (typeof desc === 'object') {
      return !Object.keys(desc).find(key => !checkDesc(el[key], desc[key]));
    }
  }

  return true;
};

const YouSee = sth => {
  let type, desc, number, position;

  if (typeof sth === 'string') {
    type = sth;
  } else if (typeof sth === 'object') {
    type = sth.type;
    desc = sth.desc;
    number = sth.number;
    position = sth.position;
  }

  ;
  const el = Seeable.find(e => {
    const typeMatch = checkType(e, type);

    if (!typeMatch) {
      return false;
    }

    const descMatch = checkDesc(e, desc);

    if (descMatch) {
      return true;
    }
  });
  youHaveSeenList.push(el);
  return el;
};

YouSee.getLastSeen = () => {
  return youHaveSeenList[youHaveSeenList.length - 1];
};

YouSee.newScreen = () => {
  youHaveSeenScreens.push([...youHaveSeenList]);
  youHaveSeenList.length = 0;
};

YouSee.previousScreen = () => {
  if (youHaveSeenScreens.length) {
    youHaveSeenList = youHaveSeenScreens[youHaveSeenScreens.length - 1];
    youHaveSeenScreens.length--;
  } else {
    youHaveSeenList.length = 0;
  }
};

module.exports = YouSee;

/***/ })

/******/ });