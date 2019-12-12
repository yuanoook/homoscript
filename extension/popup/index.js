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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/popup.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/.npminstall/@babel/runtime/7.7.6/@babel/runtime/helpers/arrayWithHoles.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/.npminstall/@babel/runtime/7.7.6/@babel/runtime/helpers/arrayWithHoles.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/.npminstall/@babel/runtime/7.7.6/@babel/runtime/helpers/defineProperty.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/.npminstall/@babel/runtime/7.7.6/@babel/runtime/helpers/defineProperty.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/.npminstall/@babel/runtime/7.7.6/@babel/runtime/helpers/extends.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/.npminstall/@babel/runtime/7.7.6/@babel/runtime/helpers/extends.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/.npminstall/@babel/runtime/7.7.6/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.npminstall/@babel/runtime/7.7.6/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/.npminstall/@babel/runtime/7.7.6/@babel/runtime/helpers/nonIterableRest.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.npminstall/@babel/runtime/7.7.6/@babel/runtime/helpers/nonIterableRest.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/.npminstall/@babel/runtime/7.7.6/@babel/runtime/helpers/objectWithoutProperties.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.npminstall/@babel/runtime/7.7.6/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/.npminstall/@babel/runtime/7.7.6/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),

/***/ "./node_modules/.npminstall/@babel/runtime/7.7.6/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/@babel/runtime/7.7.6/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/.npminstall/@babel/runtime/7.7.6/@babel/runtime/helpers/slicedToArray.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.npminstall/@babel/runtime/7.7.6/@babel/runtime/helpers/slicedToArray.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/.npminstall/@babel/runtime/7.7.6/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/.npminstall/@babel/runtime/7.7.6/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/.npminstall/@babel/runtime/7.7.6/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/.npminstall/ganic-dom/2.2.6/ganic-dom/cjs/ganic-dom.development.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/.npminstall/ganic-dom/2.2.6/ganic-dom/cjs/ganic-dom.development.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var ganic = _interopDefault(__webpack_require__(/*! ganic */ "./node_modules/.npminstall/ganic/2.1.5/ganic/index.js"));

var wood = [];

var getTrees = function getTrees() {
  return [].concat(wood);
};

var addTree = function addTree(tree) {
  if (!wood.includes(tree)) {
    wood.push(tree);
  }
};

var getTreeByRoot = function getTreeByRoot(envRoot) {
  return wood.find(function (tree) {
    return tree.envRoot === envRoot;
  });
};

var removeTree = function removeTree(tree) {
  if (wood.includes(tree)) {
    wood.splice(wood.indexOf(tree), 1);
  }
};

var clear = function clear() {
  wood.length = 0;
};

var wood_1 = {
  getTrees: getTrees,
  addTree: addTree,
  getTreeByRoot: getTreeByRoot,
  removeTree: removeTree,
  clear: clear
};

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

var Connector =
/*#__PURE__*/
function () {
  function Connector(relationship) {
    _classCallCheck(this, Connector);

    this.key = null;
    this.parent = null;
    this.preSibling = null;
    this.nextSibling = null; // this.children = {};

    this.firstChild = null;
    this.lastChild = null;
    this.buildRelationship(relationship);
  }

  _createClass(Connector, [{
    key: "clearUpRelationship",
    value: function clearUpRelationship() {
      this.key = null;
      this.parent = null;
      this.preSibling = null;
      this.nextSibling = null; // this.children = null;

      this.firstChild = null;
      this.lastChild = null;
    }
  }, {
    key: "buildRelationship",
    value: function buildRelationship(relationship) {
      if (!relationship) {
        return;
      }

      var key = relationship.key,
          parent = relationship.parent,
          isFirst = relationship.isFirst,
          isLast = relationship.isLast,
          preSibling = relationship.preSibling;

      if (preSibling) {
        this.preSibling = preSibling;
        this.nextSibling = preSibling.nextSibling;
        preSibling.nextSibling = this;

        if (this.nextSibling) {
          this.nextSibling.preSibling = this;
        }
      }

      if (parent) {
        this.key = key;
        this.parent = parent;
        parent.children[key] = this;

        if (isFirst && parent.firstChild !== this) {
          var oldFirstChild = parent.firstChild;
          parent.firstChild = this;

          if (oldFirstChild) {
            oldFirstChild.preSibling = this;
            this.nextSibling = oldFirstChild;
          }
        }

        if (isLast && parent.lastChild !== this) {
          var oldLastChild = parent.lastChild;
          parent.lastChild = this;

          if (oldLastChild) {
            oldLastChild.nextSibling = this;
            this.preSibling = oldLastChild;
          }
        }
      }
    }
  }, {
    key: "vanishRelationship",
    value: function vanishRelationship() {
      if (this.preSibling) {
        this.preSibling.nextSibling = this.nextSibling;
      }

      if (this.nextSibling) {
        this.nextSibling.preSibling = this.preSibling;
      }

      if (!this.parent) {
        return;
      }

      if (this.parent.firstChild === this) {
        this.parent.firstChild = this.nextSibling;
      }

      if (this.parent.lastChild === this) {
        this.parent.lastChild = this.preSibling;
      }

      if (this.parent.children[this.key] === this) {
        delete this.parent.children[this.key];
      }

      this.parent = null;
    }
  }, {
    key: "vanish",
    value: function vanish() {
      this.vanishRelationship();
      this.clearUpRelationship();
    }
  }]);

  return Connector;
}();

var Connector_1 = {
  Connector: Connector
};

var Connector$1 = Connector_1.Connector;
/**
 * OrganLeaf does not have any children
 * It's the end node for a non-organ-desc variable
 */

var OrganLeaf =
/*#__PURE__*/
function (_Connector) {
  _inherits(OrganLeaf, _Connector);

  function OrganLeaf(_ref) {
    var _this;

    var value = _ref.value,
        tree = _ref.tree,
        relationship = _ref.relationship;

    _classCallCheck(this, OrganLeaf);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(OrganLeaf).call(this, relationship));
    _this.value = value === false ? undefined : value;
    _this.tree = tree;
    return _this;
  }

  _createClass(OrganLeaf, [{
    key: "clearUp",
    value: function clearUp() {
      this.value = null;
      this.tree = null;
    }
  }, {
    key: "update",
    value: function update() {
      if (this.tree) {
        this.tree.envRunner.updateLeaf(this);
      }
    }
  }, {
    key: "receive",
    value: function receive(value) {
      if (this.value !== value) {
        this.value = value === false ? undefined : value;
        this.update();
      }
    }
  }, {
    key: "vanish",
    value: function vanish() {
      if (this.tree) {
        this.tree.envRunner.vanishLeaf(this);
      }

      _get(_getPrototypeOf(OrganLeaf.prototype), "vanish", this).call(this);

      this.clearUp();
    }
  }]);

  return OrganLeaf;
}(Connector$1);

var OrganLeaf_1 = {
  OrganLeaf: OrganLeaf
};

var List = function List(props) {
  return props;
};

var getOrganKit = function getOrganKit(desc, tree) {
  var organism = desc && desc.organism;

  if (!organism) {
    return;
  }

  if (typeof organism === 'function') {
    return {
      organism: organism
    };
  }

  if (tree && typeof organism === 'string') {
    return tree.envRunner.getTagkit(organism);
  }
};

var createNode = function createNode(_ref) {
  var _ref$constructors = _ref.constructors,
      Organ = _ref$constructors.Organ,
      OrganNode = _ref$constructors.OrganNode,
      OrganLeaf = _ref$constructors.OrganLeaf,
      desc = _ref.desc,
      tree = _ref.tree,
      parent = _ref.parent,
      index = _ref.index,
      relationship = _ref.relationship;

  var _ref2 = getOrganKit(desc, tree) || {},
      organism = _ref2.organism,
      onReady = _ref2.onReady;

  var node;

  if (organism) {
    node = new OrganNode({
      organ: new Organ({
        organism: organism,
        props: desc.props
      }),
      parent: parent,
      tree: tree,
      index: index,
      relationship: relationship
    });
  } else {
    node = new OrganLeaf({
      value: desc,
      parent: parent,
      tree: tree,
      relationship: relationship
    });

    onReady = function onReady() {
      return node.update();
    };
  }

  return {
    node: node,
    onReady: onReady
  };
};

var utils = {
  List: List,
  getOrganKit: getOrganKit,
  createNode: createNode
};

/* eslint-disable no-multi-spaces */

var Connector$2 = Connector_1.Connector;
var Organ = ganic.Organ;
var OrganLeaf$1 = OrganLeaf_1.OrganLeaf;
var List$1 = utils.List,
    getOrganKit$1 = utils.getOrganKit,
    createNode$1 = utils.createNode;
/**
 * OrganNode is the wrapper for one organ
 * It handles the parent - children relationship things
 * It manages the update of its children
 */

var OrganNode =
/*#__PURE__*/
function (_Connector) {
  _inherits(OrganNode, _Connector);

  function OrganNode(_ref) {
    var _this;

    var organ = _ref.organ,
        tree = _ref.tree,
        index = _ref.index,
        relationship = _ref.relationship;

    _classCallCheck(this, OrganNode);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(OrganNode).call(this, relationship));
    _this.organ = organ;
    _this.tree = tree;
    _this.index = index;
    _this.updating = false;
    _this.vanishing = false;
    _this.children = {};
    _this.descs = [];
    _this.descKeys = []; // this.namespace = ? // will be set in ganic-dom

    _this.update = _this.update.bind(_assertThisInitialized(_this));
    _this.vanishChild = _this.vanishChild.bind(_assertThisInitialized(_this));
    _this.updateChild = _this.updateChild.bind(_assertThisInitialized(_this));
    organ.node = _assertThisInitialized(_this);
    organ.addListener(_this.update);
    return _this;
  }

  _createClass(OrganNode, [{
    key: "clearUp",
    value: function clearUp() {
      this.organ = null;
      this.tree = null; // this.index = 0;
      // this.updating = false;
      // this.vanishing = false;
      // this.children = null;

      this.descs.length = 0;
      this.descKeys.length = 0;
    }
  }, {
    key: "update",
    value: function update() {
      var _this2 = this;

      this.updating = true;
      this.descs = this.parseDescs();
      this.descKeys = this.getDescKeys();
      var childrenKeys = Object.keys(this.children);
      var toVanishKeys = childrenKeys.filter(function (x) {
        return !_this2.descKeys.includes(x);
      });
      toVanishKeys.forEach(this.vanishChild);
      this.descs.forEach(this.updateChild);
      this.updating = false;

      if ((!this.parent || !this.parent.updating) && this.tree) {
        this.tree.envRunner.onSettled(this);
      }
    }
  }, {
    key: "parseDescs",
    value: function parseDescs() {
      if (this.organ.result === undefined || this.organ.result === null) {
        return [];
      }

      var descs = Array.isArray(this.organ.result) ? this.organ.result : [this.organ.result];
      return descs.map(function (desc) {
        return !Array.isArray(desc) ? desc : {
          organism: List$1,
          props: desc
        };
      });
    }
  }, {
    key: "getDescKeys",
    value: function getDescKeys() {
      return this.descs.map(function (desc, index) {
        var hasKey = desc && desc.props && desc.props.hasOwnProperty('key') && desc.props.key !== undefined && desc.props.key !== null;
        return hasKey ? String(desc.props.key) : String(index);
      });
    }
  }, {
    key: "getChildPreSibling",
    value: function getChildPreSibling(index) {
      var preIndex = index - 1;

      if (preIndex < 0) {
        return null;
      }

      var preKey = this.descKeys[preIndex];
      return this.children[preKey];
    }
  }, {
    key: "vanishChild",
    value: function vanishChild(key) {
      if (this.children[key]) {
        this.children[key].vanish();
      }
    }
  }, {
    key: "vanishAllChildren",
    value: function vanishAllChildren() {
      var _this3 = this;

      var childrenKeys = Object.keys(this.children);
      childrenKeys.forEach(function (key) {
        return _this3.vanishChild(key);
      });
    }
  }, {
    key: "updateChild",
    value: function updateChild(desc, index) {
      var key = this.descKeys[index];

      var _ref2 = getOrganKit$1(desc, this.tree) || {},
          organism = _ref2.organism;

      var isDescLeaf = !organism;
      var child = this.children[key];
      var isChildNode = child instanceof OrganNode;
      var isChildLeaf = child instanceof OrganLeaf$1;

      if (isChildNode && organism && child.organ.organism === organism) {
        if (index !== child.index) {
          child.index = index;
          this.relocateChild(child, index);
        }

        child.organ.receive(desc.props); // update existing same type organNode
      } else if (isChildLeaf && isDescLeaf) {
        child.receive(desc); // update existing organLeaf
      } else {
        this.createChild(desc, index);
      }
    }
  }, {
    key: "createChild",
    value: function createChild(desc, index) {
      var key = this.descKeys[index];
      this.vanishChild(key);
      var isFirst = index === 0;

      var _createNode = createNode$1({
        constructors: {
          Organ: Organ,
          OrganNode: OrganNode,
          OrganLeaf: OrganLeaf$1
        },
        desc: desc,
        parent: this,
        tree: this.tree,
        index: index,
        relationship: {
          key: key,
          parent: this,
          isFirst: isFirst,
          isLast: index === this.descKeys.length - 1,
          preSibling: isFirst ? null : this.getChildPreSibling(index)
        }
      }),
          node = _createNode.node,
          onReady = _createNode.onReady;

      if (typeof onReady === 'function') {
        onReady(node);
      }
    }
  }, {
    key: "relocateChild",
    value: function relocateChild(child, index) {
      var isFirst = index === 0;
      var preSibling = isFirst ? null : this.getChildPreSibling(index);

      if (child.preSibling !== preSibling) {
        child.vanishRelationship();
        child.buildRelationship({
          key: this.descKeys[index],
          parent: this,
          isFirst: index === 0,
          isLast: index === this.descKeys.length - 1,
          preSibling: preSibling
        });
        this.tree.envRunner.relocate(child);
      }
    }
  }, {
    key: "vanish",
    value: function vanish() {
      this.vanishing = true;
      var onBuried = (!this.parent || !this.parent.vanishing) && this.tree && this.tree.envRunner.onBuried;
      this.organ.vanish();
      this.organ.node = null;
      this.vanishAllChildren();

      _get(_getPrototypeOf(OrganNode.prototype), "vanish", this).call(this);

      this.clearUp();

      if (onBuried) {
        onBuried(this);
      }
    }
  }]);

  return OrganNode;
}(Connector$2);

var OrganNode_1 = {
  OrganNode: OrganNode
};

var Organ$1 = ganic.Organ;
var OrganNode$1 = OrganNode_1.OrganNode;
var OrganLeaf$2 = OrganLeaf_1.OrganLeaf;
var createNode$2 = utils.createNode,
    List$2 = utils.List;
var addTree$1 = wood_1.addTree,
    removeTree$1 = wood_1.removeTree;

var OrganTree =
/*#__PURE__*/
function () {
  function OrganTree(_ref) {
    var organDesc = _ref.organDesc,
        envRoot = _ref.envRoot,
        envRunner = _ref.envRunner;

    _classCallCheck(this, OrganTree);

    this.organDesc = organDesc;
    this.trunkNode = null;
    this.envRoot = envRoot;
    this.envRunner = envRunner;
    addTree$1(this);
    this.grow();
  }

  _createClass(OrganTree, [{
    key: "clearUp",
    value: function clearUp() {
      this.organDesc = null;
      this.trunkNode = null;
      this.envRoot = null;
      this.envRunner = null;
    }
  }, {
    key: "update",
    value: function update(organDesc) {
      this.organDesc = organDesc;
      this.trunkNode.organ.receive(organDesc);
    }
  }, {
    key: "grow",
    value: function grow() {
      var trunkDesc = {
        organism: List$2,
        props: this.organDesc
      };

      var _createNode = createNode$2({
        constructors: {
          Organ: Organ$1,
          OrganNode: OrganNode$1,
          OrganLeaf: OrganLeaf$2
        },
        desc: trunkDesc,
        tree: this
      }),
          node = _createNode.node,
          onReady = _createNode.onReady;

      this.trunkNode = node;

      if (typeof onReady === 'function') {
        onReady(node);
      }
    }
  }, {
    key: "vanish",
    value: function vanish() {
      removeTree$1(this);
      this.trunkNode.vanish();
      this.clearUp();
    }
  }]);

  return OrganTree;
}();

var OrganTree_1 = {
  OrganTree: OrganTree
};

var nullFn = function nullFn() {
  return null;
};

var getTagkit = function getTagkit() {
  return {
    organism: nullFn,
    onReady: nullFn
  };
};

var env = {
  getTagkit: getTagkit,
  updateLeaf: nullFn,
  vanishLeaf: nullFn,
  onSettled: nullFn,
  relocate: nullFn,
  onBuried: nullFn
};

var getTreeByRoot$1 = wood_1.getTreeByRoot;
var OrganTree$1 = OrganTree_1.OrganTree;

var render = function render(_ref) {
  var organDesc = _ref.organDesc,
      envRoot = _ref.envRoot,
      _ref$envRunner = _ref.envRunner,
      envRunner = _ref$envRunner === void 0 ? env : _ref$envRunner;
  var tree = getTreeByRoot$1(envRoot);

  if (tree) {
    tree.update(organDesc);
  } else {
    tree = new OrganTree$1({
      organDesc: organDesc,
      envRoot: envRoot,
      envRunner: envRunner
    });
  }

  return tree;
};

var ganicTree = {
  render: render
};

var attrsKey = Symbol();
var listenersKey = Symbol();

var applyRef = function applyRef(node, ref) {
  return ref ? ref(node) : null;
};

var applyEventListener = function applyEventListener(node, name, listener) {
  var eventName = name.replace(/^on/, '').toLowerCase();

  if (!node[listenersKey]) {
    node[listenersKey] = {};
  }

  if (!node[listenersKey][eventName]) {
    node[listenersKey][eventName] = {};
  }

  var bindInfo = node[listenersKey][eventName];
  bindInfo.listener = listener;

  if (!bindInfo.bound) {
    node.addEventListener(eventName, function (e) {
      if (typeof bindInfo.listener === 'function') {
        bindInfo.listener(e);
      }
    });
    bindInfo.bound = true;
  }
};

var applyStyle = function applyStyle(node, name, value) {
  var oldValue = node[attrsKey] && node[attrsKey].style;

  if (_typeof(value) === 'object' && value) {
    var checkOldValue = _typeof(oldValue) === 'object' && oldValue;
    Object.keys(value).forEach(function (key) {
      if (checkOldValue ? oldValue[key] !== value[key] : true) {
        node.style[key] = value[key];
      }
    });
  }

  if (typeof value === 'string' && oldValue !== value) {
    applySimpleAttr(node, name, value);
  }
};

var applyClass = function applyClass(node, name, value) {
  var oldValue = node[attrsKey] && node[attrsKey].class;

  if (_typeof(value) === 'object' && value) {
    var checkOldValue = _typeof(oldValue) === 'object' && oldValue;
    Object.keys(value).forEach(function (key) {
      if (checkOldValue ? oldValue[key] !== value[key] : true) {
        node.classList[value[key] ? 'add' : 'remove'](key);
      }
    });
  }

  if (typeof value === 'string' && oldValue !== value) {
    applySimpleAttr(node, name, value);
  }
};

var properties = ['value', 'checked', 'selected', 'disabled'];

var applySimpleProperty = function applySimpleProperty(node, name, value) {
  if (node[name] !== value) {
    node[name] = value;
  }
};

var applySimpleAttr = function applySimpleAttr(node, name, value) {
  if (value === null || value === undefined) {
    node.removeAttribute(name);
  } else {
    node.setAttribute(name, value);
  }
};

var applyAttr = function applyAttr(node, name, value) {
  if (name === 'key') {
    return;
  } else if (name === 'ref') {
    applyRef(node, value);
  } else if (/^on[A-Z][a-zA-Z]*$/.test(name)) {
    applyEventListener(node, name, value);
  } else if (name === 'style') {
    applyStyle(node, name, value);
  } else if (name === 'class') {
    applyClass(node, name, value);
  } else if (properties.includes(name)) {
    applySimpleProperty(node, name, value);
  } else {
    applySimpleAttr(node, name, value);
  }
};

var applyAttrs = function applyAttrs(node, attrs) {
  var oldAttrs = node[attrsKey] || {};
  Object.keys(_objectSpread2({}, oldAttrs, {}, attrs)).forEach(function (name) {
    return oldAttrs[name] !== attrs[name] && applyAttr(node, name, attrs[name]);
  });
  node[attrsKey] = _objectSpread2({}, attrs);
};

var attrs = {
  applyAttrs: applyAttrs
};

var namespaceMap = {
  'svg': 'http://www.w3.org/2000/svg'
};
var usedNamespace = false;

var getNamespace = function getNamespace(tagName, node) {
  if (namespaceMap[tagName]) {
    node.namespace = namespaceMap[tagName];
    usedNamespace = true;
    return node.namespace;
  }

  if (!usedNamespace) {
    return;
  }

  var ancestor = node && node.parent;

  while (ancestor) {
    if (ancestor.namespace) {
      node.namespace = ancestor.namespace;
      return node.namespace;
    }

    ancestor = ancestor.parent;
  }
};

var shared = {
  getNamespace: getNamespace,
  organDomMap: new Map(),
  leafDomMap: new Map()
};

var findParent = function findParent(node, find) {
  if (node.parent) {
    return find(node.parent) || findParent(node.parent, find);
  } else if (node.tree) {
    return node.tree.envRoot;
  }

  throw new Error("Cannot find env parent");
};

var findOnes = function findOnes(node, find) {
  var one = find(node);

  if (one) {
    return [one];
  }

  var child = node.firstChild;
  var ones = [];

  while (child) {
    ones = ones.concat(findOnes(child, find));
    child = child.nextSibling;
  }

  return ones;
};

var findPre = function findPre(node, find) {
  if (node.preSibling) {
    return findBackward(node.preSibling, find) || findPre(node.preSibling, find);
  }

  if (node.parent) {
    return find(node.parent) ? null : findPre(node.parent, find);
  }
};

var findBackward = function findBackward(node, find) {
  var one = find(node);

  if (one) {
    return one;
  }

  var child = node.lastChild;

  while (child) {
    one = findBackward(child, find);

    if (one) {
      return one;
    }

    child = child.preSibling;
  }
};

var lostboy = {
  findParent: findParent,
  findPre: findPre,
  findOnes: findOnes
};

var organDomMap = shared.organDomMap,
    leafDomMap = shared.leafDomMap;
var findParent$1 = lostboy.findParent,
    findPre$1 = lostboy.findPre,
    findOnes$1 = lostboy.findOnes;

var getTagDom = function getTagDom(node) {
  return organDomMap.get(node.organ);
};

var getText = function getText(node) {
  return leafDomMap.get(node);
};

var findDom = function findDom(node) {
  return getTagDom(node) || getText(node);
};

var insertDom = function insertDom(dom, node) {
  if (!dom || !node) {
    return;
  }

  var parentDom = findParent$1(node, findDom);

  if (!parentDom) {
    return;
  }

  var preDom = findPre$1(node, findDom);

  if (!preDom) {
    parentDom.insertBefore(dom, parentDom.firstChild);
    return;
  }

  if (preDom.parentNode !== parentDom) {
    throw new Error('Dom structure has changed!');
  }

  parentDom.insertBefore(dom, preDom.nextSibling);
};

var relocate = function relocate(node) {
  var parentDom = findParent$1(node, findDom);

  if (!parentDom) {
    return;
  }

  var doms = findOnes$1(node, findDom);

  if (!doms.length) {
    return;
  }

  var preDom = findPre$1(node, findDom);

  if (preDom ? preDom.nextSibling === doms[0] : parentDom.firstChild === doms[0]) {
    return;
  }

  doms.forEach(function (dom, index) {
    if (index === 0) {
      if (!preDom) {
        parentDom.insertBefore(dom, parentDom.firstChild);
      } else {
        parentDom.insertBefore(dom, preDom.nextSibling);
      }
    } else {
      var pre = doms[index - 1];
      parentDom.insertBefore(dom, pre.nextSibling);
    }
  });
};

var removeDom = Element.prototype.remove ? function (dom) {
  return dom.remove();
} : function (dom) {
  if (dom.parentNode) {
    dom.parentNode.removeChild(dom);
  }
};
var utils$1 = {
  insertDom: insertDom,
  removeDom: removeDom,
  relocate: relocate
};

var queueSize = 1000;
var taskQueueGroup = [];

var taskify = function taskify(fn) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var task = function task() {
      return fn.apply(void 0, args);
    };

    var taskQueue = taskQueueGroup[taskQueueGroup.length - 1];

    if (taskQueue && taskQueue.length < queueSize) {
      taskQueue.push(task);
    } else {
      taskQueueGroup.push([task]);
    }
  };
};

var clearTaskQueue = function clearTaskQueue(taskQueue) {
  var length = taskQueue.length;

  for (var i = 0; i < length; i++) {
    taskQueue[i]();
  }

  taskQueue.length = 0;
};

var timeBudget = 50;
var restGap = 25;
var startAt;

var clearTasks = function clearTasks() {
  if (taskQueueGroup.length === 0) {
    return;
  }

  startAt = Date.now();

  do {
    clearTaskQueue(taskQueueGroup.shift());

    if (taskQueueGroup.length === 0) {
      return;
    }
  } while (Date.now() - startAt < timeBudget);

  setTimeout(clearTasks, restGap);
};

var taskQueue = {
  taskify: taskify,
  clearTasks: clearTasks
};

var getUpdatingOrgan = ganic.getUpdatingOrgan,
    attach = ganic.attach;
var applyAttrs$1 = attrs.applyAttrs;
var organDomMap$1 = shared.organDomMap,
    getNamespace$1 = shared.getNamespace;
var removeDom$1 = utils$1.removeDom;
var taskify$1 = taskQueue.taskify;
var engage = taskify$1(function (organ, tagName, attrs) {
  var dom = organDomMap$1.get(organ);

  if (!dom) {
    var xmlns = getNamespace$1(tagName, organ.node);
    dom = xmlns ? document.createElementNS(xmlns, tagName) : document.createElement(tagName);
    organDomMap$1.set(organ, dom);
  }

  applyAttrs$1(dom, attrs);
});
var release = taskify$1(function (organ) {
  var dom = organDomMap$1.get(organ);
  organDomMap$1.delete(organ);

  if (dom) {
    removeDom$1(dom);
  }
});

var newParasitismByTag = function newParasitismByTag(tagName) {
  return function (attrs) {
    var organ = getUpdatingOrgan();
    engage(organ, tagName, attrs);
    return function (_ref) {
      var ending = _ref.ending;

      if (ending) {
        release(organ);
      }
    };
  };
};

var tagParasitismMap = {};

var parasitismFactory = function parasitismFactory(tagName) {
  if (!tagParasitismMap[tagName]) {
    tagParasitismMap[tagName] = newParasitismByTag(tagName);
  }

  return tagParasitismMap[tagName];
};

var newOrganismByTag = function newOrganismByTag(tagName) {
  return function (props) {
    var _ref2 = props || {},
        children = _ref2.children,
        style = _ref2.style,
        attrs = _objectWithoutProperties(_ref2, ["children", "style"]);

    var parasitism = parasitismFactory(tagName);
    attach(parasitism, _objectSpread2({}, attrs, {
      style: attach(style, style)
    }));
    return children;
  };
};

var tagOrganismMap = {};

var organismFactory = function organismFactory(tagName) {
  if (!tagOrganismMap[tagName]) {
    tagOrganismMap[tagName] = newOrganismByTag(tagName);
  }

  return tagOrganismMap[tagName];
};

var organisms = {};

var getOrganism = function getOrganism(tagName) {
  if (organisms[tagName]) {
    return organisms[tagName];
  }

  return organismFactory(tagName);
};

var dom = {
  getOrganism: getOrganism
};

var insertDom$1 = utils$1.insertDom,
    removeDom$2 = utils$1.removeDom;
var leafDomMap$1 = shared.leafDomMap;

var updateLeaf = function updateLeaf(organLeaf) {
  var value = organLeaf.value === undefined || organLeaf.value === null ? '' : organLeaf.value;
  var textNode = leafDomMap$1.get(organLeaf);

  if (!textNode) {
    textNode = document.createTextNode(value);
    leafDomMap$1.set(organLeaf, textNode);
    insertDom$1(textNode, organLeaf);
    return;
  }

  var newContent = document.createTextNode(value).textContent;

  if (textNode.textContent !== newContent) {
    textNode.textContent = newContent;
  }
};

var vanishLeaf = function vanishLeaf(organLeaf) {
  var textNode = leafDomMap$1.get(organLeaf);
  leafDomMap$1.delete(organLeaf);

  if (textNode) {
    removeDom$2(textNode);
  }
};

var leaf = {
  updateLeaf: updateLeaf,
  vanishLeaf: vanishLeaf
};

var getOrganism$1 = dom.getOrganism;
var updateLeaf$1 = leaf.updateLeaf,
    vanishLeaf$1 = leaf.vanishLeaf;
var relocate$1 = utils$1.relocate,
    insertDom$2 = utils$1.insertDom;
var organDomMap$2 = shared.organDomMap;
var taskify$2 = taskQueue.taskify,
    clearTasks$1 = taskQueue.clearTasks;

var setUpNode = function setUpNode(node) {
  var dom = organDomMap$2.get(node.organ);
  insertDom$2(dom, node);
};

var onReady = taskify$2(setUpNode);

var getTagkit$1 = function getTagkit(tagName) {
  return {
    organism: getOrganism$1(tagName),
    onReady: onReady
  };
};

var src = {
  getTagkit: getTagkit$1,
  updateLeaf: taskify$2(updateLeaf$1),
  vanishLeaf: taskify$2(vanishLeaf$1),
  relocate: taskify$2(relocate$1),
  onSettled: clearTasks$1,
  onBuried: clearTasks$1
};

var render$1 = function render(organDesc, envRoot) {
  return ganicTree.render({
    organDesc: organDesc,
    envRoot: envRoot,
    envRunner: src
  });
};

var ganicDom = {
  render: render$1
};
var ganicDom_1 = ganicDom.render;

exports.default = ganicDom;
exports.render = ganicDom_1;


/***/ }),

/***/ "./node_modules/.npminstall/ganic-dom/2.2.6/ganic-dom/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/.npminstall/ganic-dom/2.2.6/ganic-dom/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/ganic-dom.development.js */ "./node_modules/.npminstall/ganic-dom/2.2.6/ganic-dom/cjs/ganic-dom.development.js");
}


/***/ }),

/***/ "./node_modules/.npminstall/ganic-usex/2.2.3/ganic-usex/cjs/ganic-usex.development.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/.npminstall/ganic-usex/2.2.3/ganic-usex/cjs/ganic-usex.development.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var ganic = _interopDefault(__webpack_require__(/*! ganic */ "./node_modules/.npminstall/ganic/2.1.5/ganic/index.js"));

var attach = ganic.attach;

var useRef = function useRef() {
  return useMemo(function () {
    var fn = function fn(value) {
      return fn.current = value;
    };

    fn.current = null;
    return fn;
  });
};

var useMemo = function useMemo(fn, dependencies) {
  if (typeof fn !== 'function') {
    return attach(fn, dependencies);
  }

  var parasitism = function parasitism(deps, give) {
    return give(fn(deps));
  };

  return attach(parasitism, dependencies);
};

var useCallback = function useCallback(fn, dependencies) {
  return useMemo(function (deps) {
    return function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return fn.apply(void 0, args.concat([deps]));
    };
  }, dependencies);
};

var stateParasitism = function stateParasitism(deps, give) {
  var state = deps;

  var _setState = function setState(newState) {
    if (!_setState) {
      return;
    }

    state = typeof newState === 'function' ? newState(state) : newState;
    give([state, _setState]);
  };

  give([state, _setState]);
  return function () {
    state = null;
    _setState = null;
  };
};

var useState = function useState(initState) {
  return attach(stateParasitism, useMemo(initState));
};

var useEffect = function useEffect(parasitism, dependencies) {
  return attach(function (deps) {
    var toDetach = parasitism(deps);
    return function () {
      if (typeof toDetach === 'function') {
        toDetach();
      }
    };
  }, dependencies);
};

var base = {
  useRef: useRef,
  useMemo: useMemo,
  useCallback: useCallback,
  useState: useState,
  useEffect: useEffect
};

var attach$1 = ganic.attach;
var useRef$1 = base.useRef;

var makeTimeParasitism = function makeTimeParasitism(setTimer, clearTimer) {
  return function (_ref) {
    var delay = _ref.delay,
        callbackRef = _ref.callbackRef;

    if (typeof delay !== 'number') {
      return;
    }

    var timer = setTimer(function () {
      callbackRef.current();
    }, delay);
    return function () {
      clearTimer(timer);
    };
  };
};

var timeoutParasitism = makeTimeParasitism(setTimeout, clearTimeout);
var intervalParasitism = makeTimeParasitism(setInterval, clearInterval);

var attachTimeParasitism = function attachTimeParasitism(parasitism, _ref2) {
  var callback = _ref2.callback,
      delay = _ref2.delay;
  var callbackRef = useRef$1();
  callbackRef.current = callback;
  return attach$1(parasitism, {
    delay: delay,
    callbackRef: callbackRef
  });
};

var useTimeout = function useTimeout(callback, delay) {
  return attachTimeParasitism(timeoutParasitism, {
    callback: callback,
    delay: delay
  });
};

var useInterval = function useInterval(callback, delay) {
  return attachTimeParasitism(intervalParasitism, {
    callback: callback,
    delay: delay
  });
};

var timer = {
  useTimeout: useTimeout,
  useInterval: useInterval
};

var attach$2 = ganic.attach;

var debounceParasitism = function debounceParasitism(_ref, give) {
  var value = _ref.value,
      idle = _ref.idle;
  var timer = setTimeout(function () {
    return give(value);
  }, idle);
  return function () {
    clearTimeout(timer);
  };
};

var useDebounce = function useDebounce(value, idle) {
  return attach$2(debounceParasitism, {
    value: value,
    idle: idle
  }, value);
};

var throttleParasitism = function throttleParasitism(_ref2, give, _ref3) {
  var value = _ref2.value,
      idle = _ref2.idle;
  var _ref3$handover = _ref3.handover,
      lastTime = _ref3$handover === void 0 ? 0 : _ref3$handover;
  var timeLeft = lastTime + idle - Date.now();

  var update = function update() {
    lastTime = Date.now();
    give(value);
  };

  var timer = timeLeft <= 0 ? update() : setTimeout(update, timeLeft);
  return function (_ref4) {
    var ending = _ref4.ending;

    if (timer) {
      clearTimeout(timer);
    }

    if (ending) {
      return;
    }

    return lastTime;
  };
};

var useThrottle = function useThrottle(value, idle) {
  return attach$2(throttleParasitism, {
    value: value,
    idle: idle
  }, value);
};

var sloth = {
  useDebounce: useDebounce,
  useThrottle: useThrottle
};

var create = ganic.create,
    attach$3 = ganic.attach;

var useOrgan = function useOrgan(organism, props) {
  return attach$3(function (deps, give, _ref) {
    var organ = _ref.handover;

    if (!organ) {
      organ = create({
        organism: organism,
        props: deps
      }).addListener(give);
    } else {
      organ.receive(deps);
    }

    return function (_ref2) {
      var ending = _ref2.ending;

      if (ending) {
        organ.vanish();
        return;
      }

      return organ;
    };
  }, props);
};

var promiseParasitism = function promiseParasitism(_ref3, give) {
  var promiseFn = _ref3.promiseFn,
      props = _ref3.props;
  var promising = true;
  promiseFn(props).then(function (res) {
    if (!promising) {
      return;
    }

    give(res);
  }).catch(function (error) {
    if (!promising) {
      return;
    }

    give(error);
  });
  return function () {
    promising = false;
  };
};

var usePromise = function usePromise(promiseFn, props) {
  return attach$3(promiseParasitism, {
    promiseFn: promiseFn,
    props: props
  });
};

var async = {
  useOrgan: useOrgan,
  usePromise: usePromise
};

var useRef$2 = base.useRef,
    useMemo$1 = base.useMemo,
    useCallback$1 = base.useCallback,
    useState$1 = base.useState,
    useEffect$1 = base.useEffect;
var useTimeout$1 = timer.useTimeout,
    useInterval$1 = timer.useInterval;
var useDebounce$1 = sloth.useDebounce,
    useThrottle$1 = sloth.useThrottle;
var useOrgan$1 = async.useOrgan,
    usePromise$1 = async.usePromise;
var ganicUsex = {
  useRef: useRef$2,
  useMemo: useMemo$1,
  useCallback: useCallback$1,
  useState: useState$1,
  useEffect: useEffect$1,
  useTimeout: useTimeout$1,
  useInterval: useInterval$1,
  useDebounce: useDebounce$1,
  useThrottle: useThrottle$1,
  useOrgan: useOrgan$1,
  usePromise: usePromise$1
};
var ganicUsex_1 = ganicUsex.useRef;
var ganicUsex_2 = ganicUsex.useMemo;
var ganicUsex_3 = ganicUsex.useCallback;
var ganicUsex_4 = ganicUsex.useState;
var ganicUsex_5 = ganicUsex.useEffect;
var ganicUsex_6 = ganicUsex.useTimeout;
var ganicUsex_7 = ganicUsex.useInterval;
var ganicUsex_8 = ganicUsex.useDebounce;
var ganicUsex_9 = ganicUsex.useThrottle;
var ganicUsex_10 = ganicUsex.useOrgan;
var ganicUsex_11 = ganicUsex.usePromise;

exports.default = ganicUsex;
exports.useCallback = ganicUsex_3;
exports.useDebounce = ganicUsex_8;
exports.useEffect = ganicUsex_5;
exports.useInterval = ganicUsex_7;
exports.useMemo = ganicUsex_2;
exports.useOrgan = ganicUsex_10;
exports.usePromise = ganicUsex_11;
exports.useRef = ganicUsex_1;
exports.useState = ganicUsex_4;
exports.useThrottle = ganicUsex_9;
exports.useTimeout = ganicUsex_6;


/***/ }),

/***/ "./node_modules/.npminstall/ganic-usex/2.2.3/ganic-usex/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/.npminstall/ganic-usex/2.2.3/ganic-usex/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/ganic-usex.development.js */ "./node_modules/.npminstall/ganic-usex/2.2.3/ganic-usex/cjs/ganic-usex.development.js");
}


/***/ }),

/***/ "./node_modules/.npminstall/ganic/2.1.5/ganic/cjs/ganic.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/.npminstall/ganic/2.1.5/ganic/cjs/ganic.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var keyList = Object.keys;

var shallowEqual = function shallowEqual(a, b) {
  if (a === b) {
    return true;
  }

  if (!(a instanceof Object) || !(b instanceof Object)) {
    return false;
  }

  var keys = keyList(a);
  var length = keys.length;

  for (var i = 0; i < length; i++) {
    if (a[keys[i]] !== b[keys[i]]) {
      return false;
    }
  }

  return length === keyList(b).length;
};

var utils = {
  shallowEqual: shallowEqual
};

var stackFactory = function stackFactory(key) {
  var stack = [];

  var set = function set(item) {
    return stack.push(item);
  };

  var get = function get() {
    return stack[stack.length - 1] || null;
  };

  var getAll = function getAll() {
    return [].concat(stack);
  };

  var clear = function clear(item) {
    var index = stack.lastIndexOf(item);

    if (index === -1) {
      throw new Error("Lakhesis.clear".concat(key, " gets wrongly called!"));
    }

    if (index !== stack.length - 1) {
      throw new Error("Don't support error boundary now!");
    }

    stack.splice(stack.lastIndexOf(item));
  };

  return [set, get, clear, getAll];
};

var _stackFactory = stackFactory('UpdatingOrgan'),
    _stackFactory2 = _slicedToArray(_stackFactory, 4),
    setUpdatingOrgan = _stackFactory2[0],
    getUpdatingOrgan = _stackFactory2[1],
    clearUpdatingOrgan = _stackFactory2[2],
    getAllUpdatingOrgans = _stackFactory2[3];

var _stackFactory3 = stackFactory('GivingParasite'),
    _stackFactory4 = _slicedToArray(_stackFactory3, 4),
    setGivingParasite = _stackFactory4[0],
    getGivingParasite = _stackFactory4[1],
    clearGivingParasite = _stackFactory4[2],
    getAllGivingParasites = _stackFactory4[3];

var Lakhesis = {
  setUpdatingOrgan: setUpdatingOrgan,
  getUpdatingOrgan: getUpdatingOrgan,
  clearUpdatingOrgan: clearUpdatingOrgan,
  getAllUpdatingOrgans: getAllUpdatingOrgans,
  setGivingParasite: setGivingParasite,
  getGivingParasite: getGivingParasite,
  clearGivingParasite: clearGivingParasite,
  getAllGivingParasites: getAllGivingParasites
};

var shallowEqual$1 = utils.shallowEqual;
var ASYNC_GIVE_AFTER_DETACH_ERROR_MESSAGE = "\n  This parasite has been detached from it's organ.\n  There should be no more giving behavior.\n  Clean job hasn't been set up properly in the parasitism.\n";
var ASYNC_GIVE_IN_DETACH_ERROR_MESSAGE = "\n  Don't call give inside detach function.\n";
var LEAVE_HANDOVER_AT_THE_ENDING = "\n  Don't leave handover at the ending of a parasite.\n";

var Parasite =
/*#__PURE__*/
function () {
  function Parasite(organ) {
    _classCallCheck(this, Parasite);

    this.organ = organ;
    this.value = null;
    this.deps = null;
    this.hasSet = false;
    this.attaching = false;
    this.attached = false;
    this.toDetach = null;
    this.detaching = false;
  }

  _createClass(Parasite, [{
    key: "clearUp",
    value: function clearUp() {
      this.organ = null;
      this.value = null;
      this.deps = null; // this.hasSet = false;
      // this.attaching = false;
      // this.attached = false;

      this.toDetach = null; // this.detaching = false;
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      this.hasSet = true;
      this.value = value;
    }
  }, {
    key: "firstGive",
    value: function firstGive(value) {
      return this.hasSet ? this.value : this.give(value);
    }
  }, {
    key: "give",
    value: function give(value) {
      this.setValue(value);
      return this.value;
    }
  }, {
    key: "asyncGive",
    value: function asyncGive(value) {
      if (!this.organ) {
        throw new Error(ASYNC_GIVE_AFTER_DETACH_ERROR_MESSAGE);
      }

      if (this.detaching) {
        throw new Error(ASYNC_GIVE_IN_DETACH_ERROR_MESSAGE);
      }

      Lakhesis.setGivingParasite(this);
      var oldValue = this.value;
      this.setValue(value);
      var organUpdateNeeded = !this.attaching && !shallowEqual$1(oldValue, this.value);

      if (organUpdateNeeded) {
        this.organ.update();
      }

      Lakhesis.clearGivingParasite(this);
      return this;
    }
  }, {
    key: "receiveDeps",
    value: function receiveDeps(deps) {
      this.attachable = !shallowEqual$1(deps, this.deps);
      this.deps = deps;
      return this;
    }
  }, {
    key: "attach",
    value: function attach(toAttach) {
      var _this = this;

      if (this.attached && !this.attachable) {
        return this;
      }

      var handover = this.detach();
      this.attaching = true;

      if (typeof toAttach === 'function') {
        this.toDetach = toAttach(this.deps, this.asyncGive.bind(this), {
          handover: handover
        });
      } else {
        this.setValue(toAttach);

        this.toDetach = function () {
          return _this.setValue(null);
        };
      }

      this.attaching = false;
      this.attached = true;
      return this;
    }
  }, {
    key: "detach",
    value: function detach() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$ending = _ref.ending,
          ending = _ref$ending === void 0 ? false : _ref$ending;

      var handover;
      this.detaching = true;

      if (typeof this.toDetach === 'function') {
        handover = this.toDetach({
          ending: ending
        });
        this.toDetach = null;
      }

      this.detaching = false;
      return handover;
    }
  }, {
    key: "vanish",
    value: function vanish() {
      var handover = this.detach({
        ending: true
      });

      if (handover !== undefined) {
        throw new Error(LEAVE_HANDOVER_AT_THE_ENDING);
      }

      this.clearUp();
    }
  }]);

  return Parasite;
}();

var Parasite_1 = {
  Parasite: Parasite,
  ASYNC_GIVE_AFTER_DETACH_ERROR_MESSAGE: ASYNC_GIVE_AFTER_DETACH_ERROR_MESSAGE,
  ASYNC_GIVE_IN_DETACH_ERROR_MESSAGE: ASYNC_GIVE_IN_DETACH_ERROR_MESSAGE,
  LEAVE_HANDOVER_AT_THE_ENDING: LEAVE_HANDOVER_AT_THE_ENDING
};

var Parasite$1 = Parasite_1.Parasite;
var shallowEqual$2 = utils.shallowEqual;

var Organ =
/*#__PURE__*/
function () {
  function Organ(_ref) {
    var organism = _ref.organism,
        props = _ref.props;

    _classCallCheck(this, Organ);

    if (typeof organism !== 'function') {
      throw new Error('To create an Organ, organism must be a function!');
    }

    this.organism = organism;
    this.props = props;
    this.result = null;
    this.parasites = [];
    this.parasiteCheckingIndexStack = [];
    this.listeners = [];
    this.update();
  }

  _createClass(Organ, [{
    key: "clearUp",
    value: function clearUp() {
      this.organism = null;
      this.props = null;
      this.result = null; // this.parasites.length = 0;
      // this.parasiteCheckingIndexStack.length = 0;
      // this.listeners.length = 0;
    }
  }, {
    key: "receive",
    value: function receive(props) {
      if (!shallowEqual$2(this.props, props)) {
        this.props = props;
        this.update();
      }

      return this;
    }
  }, {
    key: "update",
    value: function update() {
      Lakhesis.setUpdatingOrgan(this);
      var oldResult = this.result;
      this.parasiteCheckingIndexStack[this.parasiteCheckingIndexStack.length] = 0;
      this.result = this.organism(this.props);
      this.parasiteCheckingIndexStack.length--;
      var changeDetected = !shallowEqual$2(oldResult, this.result);

      if (changeDetected) {
        this.wakeListeners();
      }

      Lakhesis.clearUpdatingOrgan(this);
      return this;
    }
  }, {
    key: "getParasite",
    value: function getParasite(index) {
      var parasite = this.parasites[index];

      if (parasite) {
        return parasite;
      }

      this.parasites[index] = new Parasite$1(this);
      return this.parasites[index];
    }
  }, {
    key: "take",
    value: function take(deps) {
      var parasite = this.getParasite(this.parasiteCheckingIndexStack[this.parasiteCheckingIndexStack.length - 1]);
      parasite.receiveDeps(deps);
      this.parasiteCheckingIndexStack[this.parasiteCheckingIndexStack.length - 1]++;
      return parasite;
    }
  }, {
    key: "attach",
    value: function attach(parasitism, deps, firstValue) {
      return this.take(deps).attach(parasitism).firstGive(firstValue);
    }
  }, {
    key: "removeAllParasites",
    value: function removeAllParasites() {
      this.parasites.forEach(function (parasite) {
        return parasite.vanish();
      });
      this.parasites.length = 0;
    }
  }, {
    key: "addListener",
    value: function addListener(func) {
      this.listeners.push(func);
      func(this.result);
      return this;
    }
  }, {
    key: "removeListner",
    value: function removeListner(listener) {
      this.listeners.splice(this.listeners.indexOf(listener), 1);
    }
  }, {
    key: "wakeListeners",
    value: function wakeListeners() {
      var _this = this;

      this.listeners.forEach(function (func) {
        return func(_this.result);
      });
      return this;
    }
  }, {
    key: "removeAllListners",
    value: function removeAllListners() {
      this.listeners.length = 0;
    }
  }, {
    key: "vanish",
    value: function vanish() {
      this.removeAllParasites();
      this.removeAllListners();
      this.clearUp();
    }
  }]);

  return Organ;
}();

var Organ_1 = {
  Organ: Organ
};

var Organ$1 = Organ_1.Organ;
var getUpdatingOrgan$1 = Lakhesis.getUpdatingOrgan;

var create = function create(_ref) {
  var organism = _ref.organism,
      props = _ref.props;
  return new Organ$1({
    organism: organism,
    props: props
  });
};

var attach = function attach(parasitism, deps, firstValue) {
  var updatingOrgan = getUpdatingOrgan$1();

  if (!updatingOrgan) {
    throw new Error("Don't use ATTACH outside of organism!");
  }

  return updatingOrgan.attach(parasitism, deps, firstValue);
};

var Klotho = {
  create: create,
  attach: attach
};

var Fragment = null;

var createElement = function createElement(element, attrs) {
  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  return element === Fragment ? children : {
    organism: element,
    props: children.length ? _objectSpread2({}, attrs, {
      children: children
    }) : attrs
  };
};

var JSXparser = {
  Fragment: Fragment,
  createElement: createElement
};

var Organ$2 = Organ_1.Organ;
var create$1 = Klotho.create,
    attach$1 = Klotho.attach;
var getUpdatingOrgan$2 = Lakhesis.getUpdatingOrgan,
    getAllUpdatingOrgans$1 = Lakhesis.getAllUpdatingOrgans,
    getGivingParasite$1 = Lakhesis.getGivingParasite,
    getAllGivingParasites$1 = Lakhesis.getAllGivingParasites;
var Fragment$1 = JSXparser.Fragment,
    createElement$1 = JSXparser.createElement;
var ganic = {
  Fragment: Fragment$1,
  createElement: createElement$1,
  Organ: Organ$2,
  create: create$1,
  attach: attach$1,
  getUpdatingOrgan: getUpdatingOrgan$2,
  getAllUpdatingOrgans: getAllUpdatingOrgans$1,
  getGivingParasite: getGivingParasite$1,
  getAllGivingParasites: getAllGivingParasites$1
};
var ganic_1 = ganic.Fragment;
var ganic_2 = ganic.createElement;
var ganic_3 = ganic.Organ;
var ganic_4 = ganic.create;
var ganic_5 = ganic.attach;
var ganic_6 = ganic.getUpdatingOrgan;
var ganic_7 = ganic.getAllUpdatingOrgans;
var ganic_8 = ganic.getGivingParasite;
var ganic_9 = ganic.getAllGivingParasites;

exports.Fragment = ganic_1;
exports.Organ = ganic_3;
exports.attach = ganic_5;
exports.create = ganic_4;
exports.createElement = ganic_2;
exports.default = ganic;
exports.getAllGivingParasites = ganic_9;
exports.getAllUpdatingOrgans = ganic_7;
exports.getGivingParasite = ganic_8;
exports.getUpdatingOrgan = ganic_6;


/***/ }),

/***/ "./node_modules/.npminstall/ganic/2.1.5/ganic/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/.npminstall/ganic/2.1.5/ganic/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/ganic.development.js */ "./node_modules/.npminstall/ganic/2.1.5/ganic/cjs/ganic.development.js");
}


/***/ }),

/***/ "./src/components/Speech2Text.js":
/*!***************************************!*\
  !*** ./src/components/Speech2Text.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/.npminstall/@babel/runtime/7.7.6/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ganic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ganic */ "./node_modules/.npminstall/ganic/2.1.5/ganic/index.js");
/* harmony import */ var ganic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ganic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ganic_usex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ganic-usex */ "./node_modules/.npminstall/ganic-usex/2.2.3/ganic-usex/index.js");
/* harmony import */ var ganic_usex__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ganic_usex__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SpeechRecognition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SpeechRecognition */ "./src/components/SpeechRecognition.js");
/* harmony import */ var _shared_useStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/useStorage */ "./src/shared/useStorage.js");

// https://developers.google.com/web/updates/2013/01/Voice-Driven-Web-Apps-Introduction-to-the-Web-Speech-API




var langs = {
  'en-US': 'English (US)',
  'cmn-Hans-CN': '普通话 (中国大陆)',
  'yue-Hant-HK': '粵語 (香港)',
  'cmn-Hant-TW': '中文 (台灣)'
};
var langOptions = Object.keys(langs).map(function (key) {
  return {
    value: key,
    text: langs[key]
  };
});

var Option = function Option(_ref) {
  var value = _ref.value,
      text = _ref.text,
      select = _ref.select;
  return ganic__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    selected: value === select,
    value: value
  }, text);
};

var useSelect = function useSelect(options) {
  var _useStorage = Object(_shared_useStorage__WEBPACK_IMPORTED_MODULE_4__["default"])('ganic_codesandbox__speech2text_lang_select', options[0].value),
      _useStorage2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useStorage, 2),
      select = _useStorage2[0],
      setSelect = _useStorage2[1];

  var optionsUI = Object(ganic_usex__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function (options) {
    return options.map(function (option) {
      return ganic__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Option, {
        value: option.value,
        text: option.text,
        key: option.value,
        select: select
      });
    });
  }, options);
  var selectUI = Object(ganic_usex__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function (setSelect) {
    return ganic__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
      style: {
        fontSize: '20px',
        marginTop: '-40px'
      },
      onChange: function onChange(e) {
        return setSelect(e.target.value);
      }
    }, optionsUI);
  }, setSelect);
  return [select, selectUI];
};

var Speech2Text = function Speech2Text() {
  var _useSelect = useSelect(langOptions),
      _useSelect2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useSelect, 2),
      lang = _useSelect2[0],
      langSelectUI = _useSelect2[1];

  var _useState = Object(ganic_usex__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      on = _useState2[0],
      setOn = _useState2[1];

  var _useState3 = Object(ganic_usex__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      _final = _useState4[0],
      onFinal = _useState4[1];

  var _useState5 = Object(ganic_usex__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),
      interim = _useState6[0],
      onInterim = _useState6[1];

  var _useState7 = Object(ganic_usex__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState7, 2),
      error = _useState8[0],
      onError = _useState8[1];

  var SRProps = {
    lang: lang,
    on: on,
    onClick: function onClick() {
      return setOn(function (o) {
        return !o;
      });
    },
    style: {
      margin: '100px',
      maxWidth: '100px'
    },
    onFinal: onFinal,
    onInterim: onInterim,
    onError: onError
  };
  return ganic__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ganic__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, langSelectUI, ganic__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SpeechRecognition__WEBPACK_IMPORTED_MODULE_3__["default"], SRProps), ganic__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), _final, " ", interim, ganic__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), ganic__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    style: "color: red"
  }, error));
};

/* harmony default export */ __webpack_exports__["default"] = (Speech2Text);

/***/ }),

/***/ "./src/components/SpeechRecognition.js":
/*!*********************************************!*\
  !*** ./src/components/SpeechRecognition.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/.npminstall/@babel/runtime/7.7.6/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/.npminstall/@babel/runtime/7.7.6/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/.npminstall/@babel/runtime/7.7.6/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/.npminstall/@babel/runtime/7.7.6/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ganic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ganic */ "./node_modules/.npminstall/ganic/2.1.5/ganic/index.js");
/* harmony import */ var ganic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ganic__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ganic_usex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ganic-usex */ "./node_modules/.npminstall/ganic-usex/2.2.3/ganic-usex/index.js");
/* harmony import */ var ganic_usex__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ganic_usex__WEBPACK_IMPORTED_MODULE_5__);





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var emptyFn = function emptyFn() {};

var useRecognition = function useRecognition(_ref) {
  var _ref$lang = _ref.lang,
      lang = _ref$lang === void 0 ? 'en-US' : _ref$lang,
      _ref$onStart = _ref.onStart,
      onStart = _ref$onStart === void 0 ? emptyFn : _ref$onStart,
      _ref$onFinal = _ref.onFinal,
      onFinal = _ref$onFinal === void 0 ? emptyFn : _ref$onFinal,
      _ref$onInterim = _ref.onInterim,
      onInterim = _ref$onInterim === void 0 ? emptyFn : _ref$onInterim,
      _ref$onError = _ref.onError,
      onError = _ref$onError === void 0 ? emptyFn : _ref$onError;
  var ref = Object(ganic_usex__WEBPACK_IMPORTED_MODULE_5__["useRef"])();
  ref.lang = lang;
  ref.onStart = onStart;
  ref.onFinal = onFinal;
  ref.onInterim = onInterim;
  ref.onError = onError;

  var _useState = Object(ganic_usex__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState, 2),
      recognizing = _useState2[0],
      setRecognizing = _useState2[1];

  var toggle = Object(ganic_usex__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
    var recognizing = false;
    var _final = '';
    var ignore_onend;
    var start_timestamp;
    var recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onstart = function () {
      setRecognizing(recognizing = true);
      ref.onStart(recognition);
    };

    recognition.onerror = function (event) {
      ignore_onend = true;
      ref.onError({
        'not-allowed': Date.now() - start_timestamp < 100 ? 'blocked' : 'denied',
        'no-speech': 'no_speech',
        'audio-capture': 'no_microphone',
        'network': 'no_network'
      }[event.error] || event.error);
    };

    recognition.onend = function () {
      setRecognizing(recognizing = false);

      if (ignore_onend) {
        return;
      }

      if (!_final) {
        return;
      }
    };

    recognition.onresult = function (event) {
      var interim = '';

      if (typeof event.results === 'undefined') {
        recognition.onend = null;
        recognition.stop();
        return;
      }

      for (var i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          _final += event.results[i][0].transcript;
        } else {
          interim += event.results[i][0].transcript;
        }
      }

      ref.onFinal(_final);
      ref.onInterim(interim);
    };

    var turnOn = function turnOn() {
      _final = '';
      recognition.lang = ref.lang;
      recognition.start();
      ignore_onend = false;
      start_timestamp = Date.now();
    };

    var turnOff = function turnOff() {
      recognition.stop();
    };

    return function (on) {
      if (on === recognizing) {
        return;
      }

      on ? turnOn() : turnOff();
    };
  });
  return [recognizing, toggle];
};

var SpeechRecognition = function SpeechRecognition(props) {
  var _ref2 = props || {},
      lang = _ref2.lang,
      on = _ref2.on,
      onStart = _ref2.onStart,
      onFinal = _ref2.onFinal,
      onInterim = _ref2.onInterim,
      onError = _ref2.onError,
      styleProp = _ref2.style,
      otherProps = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(_ref2, ["lang", "on", "onStart", "onFinal", "onInterim", "onError", "style"]);

  var _useRecognition = useRecognition({
    lang: lang,
    onStart: onStart,
    onFinal: onFinal,
    onInterim: onInterim,
    onError: onError
  }),
      _useRecognition2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useRecognition, 2),
      recognizing = _useRecognition2[0],
      toggle = _useRecognition2[1];

  Object(ganic_usex__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(toggle, on);

  var style = _objectSpread({
    cursor: 'pointer',
    pointerEvents: recognizing && !on ? 'none' : 'initial',
    borderRadius: recognizing ? '25%' : '100%',
    transition: 'border-radius .6s',
    transitionTimingFunction: 'ease'
  }, styleProp);

  return ganic__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    src: "./images/mic".concat(on ? '-animate' : '', ".gif"),
    alt: "Click and say something!",
    title: "Click and say something!",
    style: style
  }, otherProps));
};

/* harmony default export */ __webpack_exports__["default"] = (SpeechRecognition);

/***/ }),

/***/ "./src/popup.js":
/*!**********************!*\
  !*** ./src/popup.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ganic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ganic */ "./node_modules/.npminstall/ganic/2.1.5/ganic/index.js");
/* harmony import */ var ganic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ganic__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Speech2Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Speech2Text */ "./src/components/Speech2Text.js");
/* harmony import */ var ganic_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ganic-dom */ "./node_modules/.npminstall/ganic-dom/2.2.6/ganic-dom/index.js");
/* harmony import */ var ganic_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ganic_dom__WEBPACK_IMPORTED_MODULE_2__);




var App = function App() {
  return ganic__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Speech2Text__WEBPACK_IMPORTED_MODULE_1__["default"], null);
};

ganic_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render(ganic__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), document.getElementById('app'));
var changeColor = document.getElementById('changeColor');
chrome.storage.sync.get('color', function (data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

changeColor.onclick = function (element) {
  var color = element.target.value;
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function (tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      code: 'document.body.style.backgroundColor = "' + color + '";'
    });
  });
};

test.onclick = function () {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function (tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      code: 'Homo.Start();'
    });
  });
};

/***/ }),

/***/ "./src/shared/useStorage.js":
/*!**********************************!*\
  !*** ./src/shared/useStorage.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/.npminstall/@babel/runtime/7.7.6/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ganic_usex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ganic-usex */ "./node_modules/.npminstall/ganic-usex/2.2.3/ganic-usex/index.js");
/* harmony import */ var ganic_usex__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ganic_usex__WEBPACK_IMPORTED_MODULE_1__);


/* eslint-disable react-hooks/exhaustive-deps */


var getStoredValue = function getStoredValue(key, initValue) {
  if (!key) {
    return initValue;
  }

  try {
    return JSON.parse(window.localStorage[key]);
  } catch (e) {
    return initValue;
  }
};

var setStoredValue = function setStoredValue(key, value) {
  if (!key) {
    return;
  }

  try {
    window.localStorage[key] = JSON.stringify(value);
  } catch (e) {}
};

var useStorage = function useStorage(key, defaultValue) {
  var _useState = Object(ganic_usex__WEBPACK_IMPORTED_MODULE_1__["useState"])(function () {
    return getStoredValue(key, defaultValue);
  }),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  setStoredValue(key, value);
  return [value, setValue];
};

/* harmony default export */ __webpack_exports__["default"] = (useStorage);

/***/ })

/******/ });