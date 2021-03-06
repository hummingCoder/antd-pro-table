var ProTable =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 63);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = antd;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return invariant; });
/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */
function invariant(condition, format) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  if (false) {}

  if (!condition) {
    var error;

    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame

    throw error;
  }
}



/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

/* global define */
(function () {
  'use strict';

  var hasOwn = {}.hasOwnProperty;

  function classNames() {
    var classes = [];

    for (var i = 0; i < arguments.length; i++) {
      var arg = arguments[i];
      if (!arg) continue;

      var argType = _typeof(arg);

      if (argType === 'string' || argType === 'number') {
        classes.push(arg);
      } else if (Array.isArray(arg) && arg.length) {
        var inner = classNames.apply(null, arg);

        if (inner) {
          classes.push(inner);
        }
      } else if (argType === 'object') {
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes.push(key);
          }
        }
      }
    }

    return classes.join(' ');
  }

  if ( true && module.exports) {
    classNames.default = classNames;
    module.exports = classNames;
  } else if ( true && _typeof(__webpack_require__(27)) === 'object' && __webpack_require__(27)) {
    // register as 'classnames', consistent with npm package name
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return classNames;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    window.classNames = classNames;
  }
})();

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = moment;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = antd/es/badge;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = antd/lib/config-provider/context;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = antd/lib/config-provider;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = antd/es/input-number;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = antd/es/input;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useControlledState;

var React = _interopRequireWildcard(__webpack_require__(0));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
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

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function useControlledState(defaultStateValue, option) {
  var _ref = option || {},
      defaultValue = _ref.defaultValue,
      value = _ref.value,
      onChange = _ref.onChange,
      postState = _ref.postState;

  var _React$useState = React.useState(function () {
    if (value !== undefined) {
      return value;
    }

    if (defaultValue !== undefined) {
      return typeof defaultValue === 'function' ? defaultValue() : defaultValue;
    }

    return typeof defaultStateValue === 'function' ? defaultStateValue() : defaultStateValue;
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      innerValue = _React$useState2[0],
      setInnerValue = _React$useState2[1];

  var mergedValue = value !== undefined ? value : innerValue;

  if (postState) {
    mergedValue = postState(mergedValue);
  }

  function triggerChange(newValue) {
    setInnerValue(newValue);

    if (mergedValue !== newValue && onChange) {
      onChange(newValue, mergedValue);
    }
  } // Effect of reset value to `undefined`


  var firstRenderRef = React.useRef(true);
  React.useEffect(function () {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }

    if (value === undefined) {
      setInnerValue(value);
    }
  }, [value]);
  return [mergedValue, triggerChange];
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (root, factory) {
  "object" == ( false ? undefined : _typeof(exports)) && "object" == ( false ? undefined : _typeof(module)) ? module.exports = factory(__webpack_require__(0)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}("undefined" != typeof self ? self : this, function (__WEBPACK_EXTERNAL_MODULE_1__) {
  return function (modules) {
    function __webpack_require__(moduleId) {
      if (installedModules[moduleId]) return installedModules[moduleId].exports;
      var module = installedModules[moduleId] = {
        i: moduleId,
        l: !1,
        exports: {}
      };
      return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), module.l = !0, module.exports;
    }

    var installedModules = {};
    return __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.d = function (exports, name, getter) {
      __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
        configurable: !1,
        enumerable: !0,
        get: getter
      });
    }, __webpack_require__.n = function (module) {
      var getter = module && module.__esModule ? function () {
        return module.default;
      } : function () {
        return module;
      };
      return __webpack_require__.d(getter, "a", getter), getter;
    }, __webpack_require__.o = function (object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 7);
  }([function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    function _slicedToArray(arr, i) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
    }

    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    function _unsupportedIterableToArray(o, minLen) {
      if (o) {
        if ("string" == typeof o) return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        return "Object" === n && o.constructor && (n = o.constructor.name), "Map" === n || "Set" === n ? Array.from(o) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray(o, minLen) : void 0;
      }
    }

    function _arrayLikeToArray(arr, len) {
      (null == len || len > arr.length) && (len = arr.length);

      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    }

    function _iterableToArrayLimit(arr, i) {
      if ("undefined" != typeof Symbol && Symbol.iterator in Object(arr)) {
        var _arr = [],
            _n = !0,
            _d = !1,
            _e = void 0;

        try {
          for (var _s, _i = arr[Symbol.iterator](); !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !i || _arr.length !== i); _n = !0) {
            ;
          }
        } catch (err) {
          _d = !0, _e = err;
        } finally {
          try {
            _n || null == _i.return || _i.return();
          } finally {
            if (_d) throw _e;
          }
        }

        return _arr;
      }
    }

    function _arrayWithHoles(arr) {
      if (Array.isArray(arr)) return arr;
    }

    var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__),
        __WEBPACK_IMPORTED_MODULE_1_matchmediaquery__ = __webpack_require__(8),
        __WEBPACK_IMPORTED_MODULE_1_matchmediaquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_matchmediaquery__),
        __WEBPACK_IMPORTED_MODULE_2_hyphenate_style_name__ = __webpack_require__(2),
        __WEBPACK_IMPORTED_MODULE_3_shallow_equal_objects__ = __webpack_require__(10),
        __WEBPACK_IMPORTED_MODULE_3_shallow_equal_objects___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_shallow_equal_objects__),
        __WEBPACK_IMPORTED_MODULE_4__toQuery__ = __webpack_require__(3),
        __WEBPACK_IMPORTED_MODULE_5__Context__ = __webpack_require__(6),
        makeQuery = function makeQuery(settings) {
      return settings.query || Object(__WEBPACK_IMPORTED_MODULE_4__toQuery__.a)(settings);
    },
        hyphenateKeys = function hyphenateKeys(obj) {
      if (!obj) return null;
      var keys = Object.keys(obj);
      return 0 === keys.length ? null : keys.reduce(function (result, key) {
        return result[Object(__WEBPACK_IMPORTED_MODULE_2_hyphenate_style_name__.a)(key)] = obj[key], result;
      }, {});
    },
        useIsUpdate = function useIsUpdate() {
      var ref = __WEBPACK_IMPORTED_MODULE_0_react___default.a.useRef(!1);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.useEffect(function () {
        ref.current = !0;
      }, []), ref.current;
    },
        useDevice = function useDevice(deviceFromProps) {
      var deviceFromContext = __WEBPACK_IMPORTED_MODULE_0_react___default.a.useContext(__WEBPACK_IMPORTED_MODULE_5__Context__.a),
          getDevice = function getDevice() {
        return hyphenateKeys(deviceFromProps) || hyphenateKeys(deviceFromContext);
      },
          _React$useState = __WEBPACK_IMPORTED_MODULE_0_react___default.a.useState(getDevice),
          _React$useState2 = _slicedToArray(_React$useState, 2),
          device = _React$useState2[0],
          setDevice = _React$useState2[1];

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.useEffect(function () {
        var newDevice = getDevice();
        __WEBPACK_IMPORTED_MODULE_3_shallow_equal_objects___default()(device, newDevice) || setDevice(newDevice);
      }, [deviceFromProps, deviceFromContext]), device;
    },
        useQuery = function useQuery(settings) {
      var getQuery = function getQuery() {
        return makeQuery(settings);
      },
          _React$useState3 = __WEBPACK_IMPORTED_MODULE_0_react___default.a.useState(getQuery),
          _React$useState4 = _slicedToArray(_React$useState3, 2),
          query = _React$useState4[0],
          setQuery = _React$useState4[1];

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.useEffect(function () {
        var newQuery = getQuery();
        query !== newQuery && setQuery(newQuery);
      }, [settings]), query;
    },
        useMatchMedia = function useMatchMedia(query, device) {
      var getMatchMedia = function getMatchMedia() {
        return __WEBPACK_IMPORTED_MODULE_1_matchmediaquery___default()(query, device || {}, !!device);
      },
          _React$useState5 = __WEBPACK_IMPORTED_MODULE_0_react___default.a.useState(getMatchMedia),
          _React$useState6 = _slicedToArray(_React$useState5, 2),
          mq = _React$useState6[0],
          setMq = _React$useState6[1],
          isUpdate = useIsUpdate();

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.useEffect(function () {
        return isUpdate && setMq(getMatchMedia()), function () {
          mq.dispose();
        };
      }, [query, device]), mq;
    },
        useMatches = function useMatches(mediaQuery) {
      var _React$useState7 = __WEBPACK_IMPORTED_MODULE_0_react___default.a.useState(mediaQuery.matches),
          _React$useState8 = _slicedToArray(_React$useState7, 2),
          matches = _React$useState8[0],
          setMatches = _React$useState8[1];

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.useEffect(function () {
        var updateMatches = function updateMatches() {
          setMatches(mediaQuery.matches);
        };

        return mediaQuery.addListener(updateMatches), updateMatches(), function () {
          mediaQuery.removeListener(updateMatches);
        };
      }, [mediaQuery]), matches;
    },
        useMediaQuery = function useMediaQuery(settings, device, onChange) {
      var deviceSettings = useDevice(device),
          query = useQuery(settings);
      if (!query) throw new Error("Invalid or missing MediaQuery!");
      var mq = useMatchMedia(query, deviceSettings),
          matches = useMatches(mq),
          isUpdate = useIsUpdate();
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.useEffect(function () {
        isUpdate && onChange && onChange(matches);
      }, [matches]), matches;
    };

    __webpack_exports__.a = useMediaQuery;
  }, function (module, exports) {
    module.exports = __WEBPACK_EXTERNAL_MODULE_1__;
  }, function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    function toHyphenLower(match) {
      return "-" + match.toLowerCase();
    }

    function hyphenateStyleName(name) {
      if (cache.hasOwnProperty(name)) return cache[name];
      var hName = name.replace(uppercasePattern, toHyphenLower);
      return cache[name] = msPattern.test(hName) ? "-" + hName : hName;
    }

    var uppercasePattern = /[A-Z]/g,
        msPattern = /^ms-/,
        cache = {};
    __webpack_exports__.a = hyphenateStyleName;
  }, function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    var __WEBPACK_IMPORTED_MODULE_0_hyphenate_style_name__ = __webpack_require__(2),
        __WEBPACK_IMPORTED_MODULE_1__mediaQuery__ = __webpack_require__(11),
        negate = function negate(cond) {
      return "not ".concat(cond);
    },
        keyVal = function keyVal(k, v) {
      var realKey = Object(__WEBPACK_IMPORTED_MODULE_0_hyphenate_style_name__.a)(k);
      return "number" == typeof v && (v = "".concat(v, "px")), !0 === v ? realKey : !1 === v ? negate(realKey) : "(".concat(realKey, ": ").concat(v, ")");
    },
        join = function join(conds) {
      return conds.join(" and ");
    },
        toQuery = function toQuery(obj) {
      var rules = [];
      return Object.keys(__WEBPACK_IMPORTED_MODULE_1__mediaQuery__.a.all).forEach(function (k) {
        var v = obj[k];
        null != v && rules.push(keyVal(k, v));
      }), join(rules);
    };

    __webpack_exports__.a = toQuery;
  }, function (module, exports, __webpack_require__) {
    "use strict";

    module.exports = __webpack_require__(13);
  }, function (module, exports, __webpack_require__) {
    "use strict";

    module.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  }, function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__),
        Context = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createContext();

    __webpack_exports__.a = Context;
  }, function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    Object.defineProperty(__webpack_exports__, "__esModule", {
      value: !0
    });

    var __WEBPACK_IMPORTED_MODULE_0__useMediaQuery__ = __webpack_require__(0),
        __WEBPACK_IMPORTED_MODULE_1__Component__ = __webpack_require__(17),
        __WEBPACK_IMPORTED_MODULE_2__toQuery__ = __webpack_require__(3),
        __WEBPACK_IMPORTED_MODULE_3__Context__ = __webpack_require__(6);

    __webpack_require__.d(__webpack_exports__, "default", function () {
      return __WEBPACK_IMPORTED_MODULE_1__Component__.a;
    }), __webpack_require__.d(__webpack_exports__, "useMediaQuery", function () {
      return __WEBPACK_IMPORTED_MODULE_0__useMediaQuery__.a;
    }), __webpack_require__.d(__webpack_exports__, "toQuery", function () {
      return __WEBPACK_IMPORTED_MODULE_2__toQuery__.a;
    }), __webpack_require__.d(__webpack_exports__, "Context", function () {
      return __WEBPACK_IMPORTED_MODULE_3__Context__.a;
    });
  }, function (module, exports, __webpack_require__) {
    "use strict";

    function Mql(query, values, forceStatic) {
      function addListener(listener) {
        mql && mql.addListener(listener);
      }

      function removeListener(listener) {
        mql && mql.removeListener(listener);
      }

      function update(evt) {
        self.matches = evt.matches, self.media = evt.media;
      }

      function dispose() {
        mql && mql.removeListener(update);
      }

      var self = this;

      if (dynamicMatch && !forceStatic) {
        var mql = dynamicMatch.call(window, query);
        this.matches = mql.matches, this.media = mql.media, mql.addListener(update);
      } else this.matches = staticMatch(query, values), this.media = query;

      this.addListener = addListener, this.removeListener = removeListener, this.dispose = dispose;
    }

    function matchMedia(query, values, forceStatic) {
      return new Mql(query, values, forceStatic);
    }

    var staticMatch = __webpack_require__(9).match,
        dynamicMatch = "undefined" != typeof window ? window.matchMedia : null;

    module.exports = matchMedia;
  }, function (module, exports, __webpack_require__) {
    "use strict";

    function matchQuery(mediaQuery, values) {
      return parseQuery(mediaQuery).some(function (query) {
        var inverse = query.inverse,
            typeMatch = "all" === query.type || values.type === query.type;
        if (typeMatch && inverse || !typeMatch && !inverse) return !1;
        var expressionsMatch = query.expressions.every(function (expression) {
          var feature = expression.feature,
              modifier = expression.modifier,
              expValue = expression.value,
              value = values[feature];
          if (!value) return !1;

          switch (feature) {
            case "orientation":
            case "scan":
              return value.toLowerCase() === expValue.toLowerCase();

            case "width":
            case "height":
            case "device-width":
            case "device-height":
              expValue = toPx(expValue), value = toPx(value);
              break;

            case "resolution":
              expValue = toDpi(expValue), value = toDpi(value);
              break;

            case "aspect-ratio":
            case "device-aspect-ratio":
            case "device-pixel-ratio":
              expValue = toDecimal(expValue), value = toDecimal(value);
              break;

            case "grid":
            case "color":
            case "color-index":
            case "monochrome":
              expValue = parseInt(expValue, 10) || 1, value = parseInt(value, 10) || 0;
          }

          switch (modifier) {
            case "min":
              return value >= expValue;

            case "max":
              return value <= expValue;

            default:
              return value === expValue;
          }
        });
        return expressionsMatch && !inverse || !expressionsMatch && inverse;
      });
    }

    function parseQuery(mediaQuery) {
      return mediaQuery.split(",").map(function (query) {
        query = query.trim();
        var captures = query.match(RE_MEDIA_QUERY),
            modifier = captures[1],
            type = captures[2],
            expressions = captures[3] || "",
            parsed = {};
        return parsed.inverse = !!modifier && "not" === modifier.toLowerCase(), parsed.type = type ? type.toLowerCase() : "all", expressions = expressions.match(/\([^\)]+\)/g) || [], parsed.expressions = expressions.map(function (expression) {
          var captures = expression.match(RE_MQ_EXPRESSION),
              feature = captures[1].toLowerCase().match(RE_MQ_FEATURE);
          return {
            modifier: feature[1],
            feature: feature[2],
            value: captures[2]
          };
        }), parsed;
      });
    }

    function toDecimal(ratio) {
      var numbers,
          decimal = Number(ratio);
      return decimal || (numbers = ratio.match(/^(\d+)\s*\/\s*(\d+)$/), decimal = numbers[1] / numbers[2]), decimal;
    }

    function toDpi(resolution) {
      var value = parseFloat(resolution);

      switch (String(resolution).match(RE_RESOLUTION_UNIT)[1]) {
        case "dpcm":
          return value / 2.54;

        case "dppx":
          return 96 * value;

        default:
          return value;
      }
    }

    function toPx(length) {
      var value = parseFloat(length);

      switch (String(length).match(RE_LENGTH_UNIT)[1]) {
        case "em":
        case "rem":
          return 16 * value;

        case "cm":
          return 96 * value / 2.54;

        case "mm":
          return 96 * value / 2.54 / 10;

        case "in":
          return 96 * value;

        case "pt":
          return 72 * value;

        case "pc":
          return 72 * value / 12;

        default:
          return value;
      }
    }

    exports.match = matchQuery, exports.parse = parseQuery;
    var RE_MEDIA_QUERY = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,
        RE_MQ_EXPRESSION = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,
        RE_MQ_FEATURE = /^(?:(min|max)-)?(.+)/,
        RE_LENGTH_UNIT = /(em|rem|px|cm|mm|in|pt|pc)?$/,
        RE_RESOLUTION_UNIT = /(dpi|dpcm|dppx)?$/;
  }, function (module, exports, __webpack_require__) {
    "use strict";

    function shallowEqualObjects(objA, objB) {
      if (objA === objB) return !0;
      if (!objA || !objB) return !1;
      var aKeys = Object.keys(objA),
          bKeys = Object.keys(objB),
          len = aKeys.length;
      if (bKeys.length !== len) return !1;

      for (var i = 0; i < len; i++) {
        var key = aKeys[i];
        if (objA[key] !== objB[key] || !Object.prototype.hasOwnProperty.call(objB, key)) return !1;
      }

      return !0;
    }

    module.exports = shallowEqualObjects;
  }, function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);

      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
      }

      return keys;
    }

    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }

      return target;
    }

    function _defineProperty(obj, key, value) {
      return key in obj ? Object.defineProperty(obj, key, {
        value: value,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : obj[key] = value, obj;
    }

    var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(12),
        __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__),
        stringOrNumber = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number]),
        matchers = {
      orientation: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOf(["portrait", "landscape"]),
      scan: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOf(["progressive", "interlace"]),
      aspectRatio: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
      deviceAspectRatio: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
      height: stringOrNumber,
      deviceHeight: stringOrNumber,
      width: stringOrNumber,
      deviceWidth: stringOrNumber,
      color: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
      colorIndex: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
      monochrome: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
      resolution: stringOrNumber
    },
        features = _objectSpread({
      minAspectRatio: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
      maxAspectRatio: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
      minDeviceAspectRatio: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
      maxDeviceAspectRatio: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
      minHeight: stringOrNumber,
      maxHeight: stringOrNumber,
      minDeviceHeight: stringOrNumber,
      maxDeviceHeight: stringOrNumber,
      minWidth: stringOrNumber,
      maxWidth: stringOrNumber,
      minDeviceWidth: stringOrNumber,
      maxDeviceWidth: stringOrNumber,
      minColor: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
      maxColor: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
      minColorIndex: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
      maxColorIndex: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
      minMonochrome: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
      maxMonochrome: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
      minResolution: stringOrNumber,
      maxResolution: stringOrNumber
    }, matchers),
        types = {
      all: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
      grid: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
      aural: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
      braille: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
      handheld: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
      print: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
      projection: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
      screen: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
      tty: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
      tv: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
      embossed: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool
    },
        all = _objectSpread(_objectSpread({}, types), features);

    matchers.type = Object.keys(types), __webpack_exports__.a = {
      all: all,
      types: types,
      matchers: matchers,
      features: features
    };
  }, function (module, exports, __webpack_require__) {
    var ReactIs = __webpack_require__(4);

    module.exports = __webpack_require__(14)(ReactIs.isElement, !0);
  }, function (module, exports, __webpack_require__) {
    "use strict";

    !function () {
      function isValidElementType(type) {
        return "string" == typeof type || "function" == typeof type || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || "object" == _typeof(type) && null !== type && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
      }

      function typeOf(object) {
        if ("object" == _typeof(object) && null !== object) {
          var $$typeof = object.$$typeof;

          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              var type = object.type;

              switch (type) {
                case REACT_ASYNC_MODE_TYPE:
                case REACT_CONCURRENT_MODE_TYPE:
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                  return type;

                default:
                  var $$typeofType = type && type.$$typeof;

                  switch ($$typeofType) {
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_LAZY_TYPE:
                    case REACT_MEMO_TYPE:
                    case REACT_PROVIDER_TYPE:
                      return $$typeofType;

                    default:
                      return $$typeof;
                  }

              }

            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }
      }

      function isAsyncMode(object) {
        return hasWarnedAboutDeprecatedIsAsyncMode || (hasWarnedAboutDeprecatedIsAsyncMode = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
      }

      function isConcurrentMode(object) {
        return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
      }

      function isContextConsumer(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
      }

      function isContextProvider(object) {
        return typeOf(object) === REACT_PROVIDER_TYPE;
      }

      function isElement(object) {
        return "object" == _typeof(object) && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
      }

      function isForwardRef(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
      }

      function isFragment(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
      }

      function isLazy(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
      }

      function isMemo(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
      }

      function isPortal(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
      }

      function isProfiler(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
      }

      function isStrictMode(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
      }

      function isSuspense(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
      }

      var hasSymbol = "function" == typeof Symbol && Symbol.for,
          REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103,
          REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106,
          REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107,
          REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108,
          REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114,
          REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109,
          REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110,
          REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111,
          REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111,
          REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112,
          REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113,
          REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120,
          REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115,
          REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116,
          REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121,
          REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117,
          REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118,
          REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119,
          AsyncMode = REACT_ASYNC_MODE_TYPE,
          ConcurrentMode = REACT_CONCURRENT_MODE_TYPE,
          ContextConsumer = REACT_CONTEXT_TYPE,
          ContextProvider = REACT_PROVIDER_TYPE,
          Element = REACT_ELEMENT_TYPE,
          ForwardRef = REACT_FORWARD_REF_TYPE,
          Fragment = REACT_FRAGMENT_TYPE,
          Lazy = REACT_LAZY_TYPE,
          Memo = REACT_MEMO_TYPE,
          Portal = REACT_PORTAL_TYPE,
          Profiler = REACT_PROFILER_TYPE,
          StrictMode = REACT_STRICT_MODE_TYPE,
          Suspense = REACT_SUSPENSE_TYPE,
          hasWarnedAboutDeprecatedIsAsyncMode = !1;
      exports.AsyncMode = AsyncMode, exports.ConcurrentMode = ConcurrentMode, exports.ContextConsumer = ContextConsumer, exports.ContextProvider = ContextProvider, exports.Element = Element, exports.ForwardRef = ForwardRef, exports.Fragment = Fragment, exports.Lazy = Lazy, exports.Memo = Memo, exports.Portal = Portal, exports.Profiler = Profiler, exports.StrictMode = StrictMode, exports.Suspense = Suspense, exports.isAsyncMode = isAsyncMode, exports.isConcurrentMode = isConcurrentMode, exports.isContextConsumer = isContextConsumer, exports.isContextProvider = isContextProvider, exports.isElement = isElement, exports.isForwardRef = isForwardRef, exports.isFragment = isFragment, exports.isLazy = isLazy, exports.isMemo = isMemo, exports.isPortal = isPortal, exports.isProfiler = isProfiler, exports.isStrictMode = isStrictMode, exports.isSuspense = isSuspense, exports.isValidElementType = isValidElementType, exports.typeOf = typeOf;
    }();
  }, function (module, exports, __webpack_require__) {
    "use strict";

    function emptyFunctionThatReturnsNull() {
      return null;
    }

    var ReactIs = __webpack_require__(4),
        assign = __webpack_require__(15),
        ReactPropTypesSecret = __webpack_require__(5),
        checkPropTypes = __webpack_require__(16),
        has = Function.call.bind(Object.prototype.hasOwnProperty),
        printWarning = function printWarning() {};

    printWarning = function printWarning(text) {
      var message = "Warning: " + text;
      "undefined" != typeof console && console.error(message);

      try {
        throw new Error(message);
      } catch (x) {}
    }, module.exports = function (isValidElement, throwOnDirectAccess) {
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if ("function" == typeof iteratorFn) return iteratorFn;
      }

      function is(x, y) {
        return x === y ? 0 !== x || 1 / x == 1 / y : x !== x && y !== y;
      }

      function PropTypeError(message) {
        this.message = message, this.stack = "";
      }

      function createChainableTypeChecker(validate) {
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          if (componentName = componentName || ANONYMOUS, propFullName = propFullName || propName, secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
              throw err.name = "Invariant Violation", err;
            }

            if ("undefined" != typeof console) {
              var cacheKey = componentName + ":" + propName;
              !manualPropTypeCallCache[cacheKey] && manualPropTypeWarningCount < 3 && (printWarning("You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."), manualPropTypeCallCache[cacheKey] = !0, manualPropTypeWarningCount++);
            }
          }

          return null == props[propName] ? isRequired ? new PropTypeError(null === props[propName] ? "The " + location + " `" + propFullName + "` is marked as required in `" + componentName + "`, but its value is `null`." : "The " + location + " `" + propFullName + "` is marked as required in `" + componentName + "`, but its value is `undefined`.") : null : validate(props, propName, componentName, location, propFullName);
        }

        var manualPropTypeCallCache = {},
            manualPropTypeWarningCount = 0,
            chainedCheckType = checkType.bind(null, !1);
        return chainedCheckType.isRequired = checkType.bind(null, !0), chainedCheckType;
      }

      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          if (getPropType(propValue) !== expectedType) return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + getPreciseType(propValue) + "` supplied to `" + componentName + "`, expected `" + expectedType + "`.");
          return null;
        }

        return createChainableTypeChecker(validate);
      }

      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if ("function" != typeof typeChecker) return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          var propValue = props[propName];

          if (!Array.isArray(propValue)) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + getPropType(propValue) + "` supplied to `" + componentName + "`, expected an array.");
          }

          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
            if (error instanceof Error) return error;
          }

          return null;
        }

        return createChainableTypeChecker(validate);
      }

      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + getClassName(props[propName]) + "` supplied to `" + componentName + "`, expected instance of `" + expectedClassName + "`.");
          }

          return null;
        }

        return createChainableTypeChecker(validate);
      }

      function createEnumTypeChecker(expectedValues) {
        function validate(props, propName, componentName, location, propFullName) {
          for (var propValue = props[propName], i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) return null;
          }

          var valuesString = JSON.stringify(expectedValues, function (key, value) {
            return "symbol" === getPreciseType(value) ? String(value) : value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` supplied to `" + componentName + "`, expected one of " + valuesString + ".");
        }

        return Array.isArray(expectedValues) ? createChainableTypeChecker(validate) : (printWarning(arguments.length > 1 ? "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])." : "Invalid argument supplied to oneOf, expected an array."), emptyFunctionThatReturnsNull);
      }

      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if ("function" != typeof typeChecker) return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          var propValue = props[propName],
              propType = getPropType(propValue);
          if ("object" !== propType) return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` supplied to `" + componentName + "`, expected an object.");

          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) return error;
            }
          }

          return null;
        }

        return createChainableTypeChecker(validate);
      }

      function createUnionTypeChecker(arrayOfTypeCheckers) {
        function validate(props, propName, componentName, location, propFullName) {
          for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
            if (null == (0, arrayOfTypeCheckers[i])(props, propName, componentName, location, propFullName, ReactPropTypesSecret)) return null;
          }

          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to `" + componentName + "`.");
        }

        if (!Array.isArray(arrayOfTypeCheckers)) return printWarning("Invalid argument supplied to oneOfType, expected an instance of array."), emptyFunctionThatReturnsNull;

        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if ("function" != typeof checker) return printWarning("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."), emptyFunctionThatReturnsNull;
        }

        return createChainableTypeChecker(validate);
      }

      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName],
              propType = getPropType(propValue);
          if ("object" !== propType) return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` supplied to `" + componentName + "`, expected `object`.");

          for (var key in shapeTypes) {
            var checker = shapeTypes[key];

            if (checker) {
              var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error) return error;
            }
          }

          return null;
        }

        return createChainableTypeChecker(validate);
      }

      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName],
              propType = getPropType(propValue);
          if ("object" !== propType) return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` supplied to `" + componentName + "`, expected `object`.");
          var allKeys = assign({}, props[propName], shapeTypes);

          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (!checker) return new PropTypeError("Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  "));
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) return error;
          }

          return null;
        }

        return createChainableTypeChecker(validate);
      }

      function isNode(propValue) {
        switch (_typeof(propValue)) {
          case "number":
          case "string":
          case "undefined":
            return !0;

          case "boolean":
            return !propValue;

          case "object":
            if (Array.isArray(propValue)) return propValue.every(isNode);
            if (null === propValue || isValidElement(propValue)) return !0;
            var iteratorFn = getIteratorFn(propValue);
            if (!iteratorFn) return !1;
            var step,
                iterator = iteratorFn.call(propValue);

            if (iteratorFn !== propValue.entries) {
              for (; !(step = iterator.next()).done;) {
                if (!isNode(step.value)) return !1;
              }
            } else for (; !(step = iterator.next()).done;) {
              var entry = step.value;
              if (entry && !isNode(entry[1])) return !1;
            }

            return !0;

          default:
            return !1;
        }
      }

      function isSymbol(propType, propValue) {
        return "symbol" === propType || !!propValue && ("Symbol" === propValue["@@toStringTag"] || "function" == typeof Symbol && propValue instanceof Symbol);
      }

      function getPropType(propValue) {
        var propType = _typeof(propValue);

        return Array.isArray(propValue) ? "array" : propValue instanceof RegExp ? "object" : isSymbol(propType, propValue) ? "symbol" : propType;
      }

      function getPreciseType(propValue) {
        if (void 0 === propValue || null === propValue) return "" + propValue;
        var propType = getPropType(propValue);

        if ("object" === propType) {
          if (propValue instanceof Date) return "date";
          if (propValue instanceof RegExp) return "regexp";
        }

        return propType;
      }

      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);

        switch (type) {
          case "array":
          case "object":
            return "an " + type;

          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;

          default:
            return type;
        }
      }

      function getClassName(propValue) {
        return propValue.constructor && propValue.constructor.name ? propValue.constructor.name : ANONYMOUS;
      }

      var ITERATOR_SYMBOL = "function" == typeof Symbol && Symbol.iterator,
          FAUX_ITERATOR_SYMBOL = "@@iterator",
          ANONYMOUS = "<<anonymous>>",
          ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: function () {
          return createChainableTypeChecker(emptyFunctionThatReturnsNull);
        }(),
        arrayOf: createArrayOfTypeChecker,
        element: function () {
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];

            if (!isValidElement(propValue)) {
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + getPropType(propValue) + "` supplied to `" + componentName + "`, expected a single ReactElement.");
            }

            return null;
          }

          return createChainableTypeChecker(validate);
        }(),
        elementType: function () {
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];

            if (!ReactIs.isValidElementType(propValue)) {
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + getPropType(propValue) + "` supplied to `" + componentName + "`, expected a single ReactElement type.");
            }

            return null;
          }

          return createChainableTypeChecker(validate);
        }(),
        instanceOf: createInstanceTypeChecker,
        node: function () {
          function validate(props, propName, componentName, location, propFullName) {
            return isNode(props[propName]) ? null : new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to `" + componentName + "`, expected a ReactNode.");
          }

          return createChainableTypeChecker(validate);
        }(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      return PropTypeError.prototype = Error.prototype, ReactPropTypes.checkPropTypes = checkPropTypes, ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache, ReactPropTypes.PropTypes = ReactPropTypes, ReactPropTypes;
    };
  }, function (module, exports, __webpack_require__) {
    "use strict";

    function toObject(val) {
      if (null === val || void 0 === val) throw new TypeError("Object.assign cannot be called with null or undefined");
      return Object(val);
    }
    /*
    object-assign
    (c) Sindre Sorhus
    @license MIT
    */


    var getOwnPropertySymbols = Object.getOwnPropertySymbols,
        hasOwnProperty = Object.prototype.hasOwnProperty,
        propIsEnumerable = Object.prototype.propertyIsEnumerable;
    module.exports = function () {
      try {
        if (!Object.assign) return !1;
        var test1 = new String("abc");
        if (test1[5] = "de", "5" === Object.getOwnPropertyNames(test1)[0]) return !1;

        for (var test2 = {}, i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }

        if ("0123456789" !== Object.getOwnPropertyNames(test2).map(function (n) {
          return test2[n];
        }).join("")) return !1;
        var test3 = {};
        return "abcdefghijklmnopqrst".split("").forEach(function (letter) {
          test3[letter] = letter;
        }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, test3)).join("");
      } catch (err) {
        return !1;
      }
    }() ? Object.assign : function (target, source) {
      for (var from, symbols, to = toObject(target), s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);

        for (var key in from) {
          hasOwnProperty.call(from, key) && (to[key] = from[key]);
        }

        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);

          for (var i = 0; i < symbols.length; i++) {
            propIsEnumerable.call(from, symbols[i]) && (to[symbols[i]] = from[symbols[i]]);
          }
        }
      }

      return to;
    };
  }, function (module, exports, __webpack_require__) {
    "use strict";

    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      for (var typeSpecName in typeSpecs) {
        if (has(typeSpecs, typeSpecName)) {
          var error;

          try {
            if ("function" != typeof typeSpecs[typeSpecName]) {
              var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + _typeof(typeSpecs[typeSpecName]) + "`.");
              throw err.name = "Invariant Violation", err;
            }

            error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
          } catch (ex) {
            error = ex;
          }

          if (!error || error instanceof Error || printWarning((componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + _typeof(error) + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."), error instanceof Error && !(error.message in loggedTypeFailures)) {
            loggedTypeFailures[error.message] = !0;
            var stack = getStack ? getStack() : "";
            printWarning("Failed " + location + " type: " + error.message + (null != stack ? stack : ""));
          }
        }
      }
    }

    var printWarning = function printWarning() {},
        ReactPropTypesSecret = __webpack_require__(5),
        loggedTypeFailures = {},
        has = Function.call.bind(Object.prototype.hasOwnProperty);

    printWarning = function printWarning(text) {
      var message = "Warning: " + text;
      "undefined" != typeof console && console.error(message);

      try {
        throw new Error(message);
      } catch (x) {}
    }, checkPropTypes.resetWarningCache = function () {
      loggedTypeFailures = {};
    }, module.exports = checkPropTypes;
  }, function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    function _objectWithoutProperties(source, excluded) {
      if (null == source) return {};

      var key,
          i,
          target = _objectWithoutPropertiesLoose(source, excluded);

      if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

        for (i = 0; i < sourceSymbolKeys.length; i++) {
          key = sourceSymbolKeys[i], excluded.indexOf(key) >= 0 || Object.prototype.propertyIsEnumerable.call(source, key) && (target[key] = source[key]);
        }
      }

      return target;
    }

    function _objectWithoutPropertiesLoose(source, excluded) {
      if (null == source) return {};
      var key,
          i,
          target = {},
          sourceKeys = Object.keys(source);

      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i], excluded.indexOf(key) >= 0 || (target[key] = source[key]);
      }

      return target;
    }

    function MediaQuery(_ref) {
      var children = _ref.children,
          device = _ref.device,
          onChange = _ref.onChange,
          settings = _objectWithoutProperties(_ref, ["children", "device", "onChange"]),
          matches = Object(__WEBPACK_IMPORTED_MODULE_0__useMediaQuery__.a)(settings, device, onChange);

      return "function" == typeof children ? children(matches) : matches ? children : null;
    }

    __webpack_exports__.a = MediaQuery;

    var __WEBPACK_IMPORTED_MODULE_0__useMediaQuery__ = __webpack_require__(0);
  }]);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(28)(module)))

/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, exports) {

module.exports = antd/es/date-picker;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;
/** `Object#toString` result references. */

var symbolTag = '[object Symbol]';
/** Used to match leading and trailing whitespace. */

var reTrim = /^\s+|\s+$/g;
/** Used to detect bad signed hexadecimal string values. */

var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */

var reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */

var reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */

var freeParseInt = parseInt;
/** Used for built-in method references. */

var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var objectToString = objectProto.toString;
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */

function isObject(value) {
  var type = _typeof(value);

  return !!value && (type == 'object' || type == 'function');
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */


function isObjectLike(value) {
  return !!value && _typeof(value) == 'object';
}
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */


function isSymbol(value) {
  return _typeof(value) == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}
/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */


function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }

  if (isSymbol(value)) {
    return NAN;
  }

  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? other + '' : other;
  }

  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }

  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}

module.exports = toNumber;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = antd/es/space;

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ DndContext; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ createDndContext; });

// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/symbol-observable/es/index.js
var es = __webpack_require__(24);

// CONCATENATED MODULE: ./node_modules/redux/es/redux.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */

var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};
/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */

function isPlainObject(obj) {
  if (_typeof(obj) !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}
/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */


function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function.');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (_typeof(observer) !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[es["a" /* default */]] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[es["a" /* default */]] = observable, _ref2;
}
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */


function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && "action \"" + String(actionType) + "\"" || 'an action';
  return "Given " + actionDescription + ", reducer \"" + key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.";
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle " + ActionTypes.INIT + " or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (false) {}

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if (false) {}

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (false) { var warningMessage; }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

function redux_bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return redux_bindActionCreator(actionCreators, dispatch);
  }

  if (_typeof(actionCreators) !== 'object' || actionCreators === null) {
    throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? 'null' : _typeof(actionCreators)) + ". " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = redux_bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
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
    keys.push.apply(keys, Object.getOwnPropertySymbols(object));
  }

  if (enumerableOnly) keys = keys.filter(function (sym) {
    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
  });
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
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */


function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}
/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */


function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread2({}, store, {
        dispatch: _dispatch
      });
    };
  };
}
/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */


function isCrushed() {}

if (false) {}


// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/actions/dragDrop/types.js
var INIT_COORDS = 'dnd-core/INIT_COORDS';
var BEGIN_DRAG = 'dnd-core/BEGIN_DRAG';
var PUBLISH_DRAG_SOURCE = 'dnd-core/PUBLISH_DRAG_SOURCE';
var HOVER = 'dnd-core/HOVER';
var DROP = 'dnd-core/DROP';
var END_DRAG = 'dnd-core/END_DRAG';
// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/utils/equality.js
var strictEquality = function strictEquality(a, b) {
  return a === b;
};
/**
 * Determine if two cartesian coordinate offsets are equal
 * @param offsetA
 * @param offsetB
 */

function areCoordsEqual(offsetA, offsetB) {
  if (!offsetA && !offsetB) {
    return true;
  } else if (!offsetA || !offsetB) {
    return false;
  } else {
    return offsetA.x === offsetB.x && offsetA.y === offsetB.y;
  }
}
/**
 * Determines if two arrays of items are equal
 * @param a The first array of items
 * @param b The second array of items
 */

function areArraysEqual(a, b) {
  var isEqual = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : strictEquality;

  if (a.length !== b.length) {
    return false;
  }

  for (var i = 0; i < a.length; ++i) {
    if (!isEqual(a[i], b[i])) {
      return false;
    }
  }

  return true;
}
// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/reducers/dragOffset.js
function dragOffset_ownKeys(object, enumerableOnly) {
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

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      dragOffset_ownKeys(Object(source), true).forEach(function (key) {
        dragOffset_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      dragOffset_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function dragOffset_defineProperty(obj, key, value) {
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



var initialState = {
  initialSourceClientOffset: null,
  initialClientOffset: null,
  clientOffset: null
};
function dragOffset() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var payload = action.payload;

  switch (action.type) {
    case INIT_COORDS:
    case BEGIN_DRAG:
      return {
        initialSourceClientOffset: payload.sourceClientOffset,
        initialClientOffset: payload.clientOffset,
        clientOffset: payload.clientOffset
      };

    case HOVER:
      if (areCoordsEqual(state.clientOffset, payload.clientOffset)) {
        return state;
      }

      return _objectSpread({}, state, {
        clientOffset: payload.clientOffset
      });

    case END_DRAG:
    case DROP:
      return initialState;

    default:
      return state;
  }
}
// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/actions/registry.js
var ADD_SOURCE = 'dnd-core/ADD_SOURCE';
var ADD_TARGET = 'dnd-core/ADD_TARGET';
var REMOVE_SOURCE = 'dnd-core/REMOVE_SOURCE';
var REMOVE_TARGET = 'dnd-core/REMOVE_TARGET';
function registry_addSource(sourceId) {
  return {
    type: ADD_SOURCE,
    payload: {
      sourceId: sourceId
    }
  };
}
function registry_addTarget(targetId) {
  return {
    type: ADD_TARGET,
    payload: {
      targetId: targetId
    }
  };
}
function registry_removeSource(sourceId) {
  return {
    type: REMOVE_SOURCE,
    payload: {
      sourceId: sourceId
    }
  };
}
function registry_removeTarget(targetId) {
  return {
    type: REMOVE_TARGET,
    payload: {
      targetId: targetId
    }
  };
}
// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/utils/js_utils.js
function _typeof2(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function js_utils_typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    js_utils_typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    js_utils_typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return js_utils_typeof(obj);
} // cheap lodash replacements

/**
 * drop-in replacement for _.get
 * @param obj
 * @param path
 * @param defaultValue
 */


function get(obj, path, defaultValue) {
  return path.split('.').reduce(function (a, c) {
    return a && a[c] ? a[c] : defaultValue || null;
  }, obj);
}
/**
 * drop-in replacement for _.without
 */

function without(items, item) {
  return items.filter(function (i) {
    return i !== item;
  });
}
/**
 * drop-in replacement for _.isString
 * @param input
 */

function isString(input) {
  return typeof input === 'string';
}
/**
 * drop-in replacement for _.isString
 * @param input
 */

function isObject(input) {
  return js_utils_typeof(input) === 'object';
}
/**
 * repalcement for _.xor
 * @param itemsA
 * @param itemsB
 */

function xor(itemsA, itemsB) {
  var map = new Map();

  var insertItem = function insertItem(item) {
    return map.set(item, map.has(item) ? map.get(item) + 1 : 1);
  };

  itemsA.forEach(insertItem);
  itemsB.forEach(insertItem);
  var result = [];
  map.forEach(function (count, key) {
    if (count === 1) {
      result.push(key);
    }
  });
  return result;
}
/**
 * replacement for _.intersection
 * @param itemsA
 * @param itemsB
 */

function intersection(itemsA, itemsB) {
  return itemsA.filter(function (t) {
    return itemsB.indexOf(t) > -1;
  });
}
// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/reducers/dragOperation.js
function dragOperation_ownKeys(object, enumerableOnly) {
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

function dragOperation_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      dragOperation_ownKeys(Object(source), true).forEach(function (key) {
        dragOperation_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      dragOperation_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function dragOperation_defineProperty(obj, key, value) {
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




var dragOperation_initialState = {
  itemType: null,
  item: null,
  sourceId: null,
  targetIds: [],
  dropResult: null,
  didDrop: false,
  isSourcePublic: null
};
function dragOperation() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : dragOperation_initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var payload = action.payload;

  switch (action.type) {
    case BEGIN_DRAG:
      return dragOperation_objectSpread({}, state, {
        itemType: payload.itemType,
        item: payload.item,
        sourceId: payload.sourceId,
        isSourcePublic: payload.isSourcePublic,
        dropResult: null,
        didDrop: false
      });

    case PUBLISH_DRAG_SOURCE:
      return dragOperation_objectSpread({}, state, {
        isSourcePublic: true
      });

    case HOVER:
      return dragOperation_objectSpread({}, state, {
        targetIds: payload.targetIds
      });

    case REMOVE_TARGET:
      if (state.targetIds.indexOf(payload.targetId) === -1) {
        return state;
      }

      return dragOperation_objectSpread({}, state, {
        targetIds: without(state.targetIds, payload.targetId)
      });

    case DROP:
      return dragOperation_objectSpread({}, state, {
        dropResult: payload.dropResult,
        didDrop: true,
        targetIds: []
      });

    case END_DRAG:
      return dragOperation_objectSpread({}, state, {
        itemType: null,
        item: null,
        sourceId: null,
        dropResult: null,
        didDrop: false,
        isSourcePublic: null,
        targetIds: []
      });

    default:
      return state;
  }
}
// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/reducers/refCount.js

function refCount() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_SOURCE:
    case ADD_TARGET:
      return state + 1;

    case REMOVE_SOURCE:
    case REMOVE_TARGET:
      return state - 1;

    default:
      return state;
  }
}
// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/utils/dirtiness.js

var NONE = [];
var ALL = [];
NONE.__IS_NONE__ = true;
ALL.__IS_ALL__ = true;
/**
 * Determines if the given handler IDs are dirty or not.
 *
 * @param dirtyIds The set of dirty handler ids
 * @param handlerIds The set of handler ids to check
 */

function areDirty(dirtyIds, handlerIds) {
  if (dirtyIds === NONE) {
    return false;
  }

  if (dirtyIds === ALL || typeof handlerIds === 'undefined') {
    return true;
  }

  var commonIds = intersection(handlerIds, dirtyIds);
  return commonIds.length > 0;
}
// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/reducers/dirtyHandlerIds.js





function dirtyHandlerIds() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : NONE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case HOVER:
      break;

    case ADD_SOURCE:
    case ADD_TARGET:
    case REMOVE_TARGET:
    case REMOVE_SOURCE:
      return NONE;

    case BEGIN_DRAG:
    case PUBLISH_DRAG_SOURCE:
    case END_DRAG:
    case DROP:
    default:
      return ALL;
  }

  var _action$payload = action.payload,
      _action$payload$targe = _action$payload.targetIds,
      targetIds = _action$payload$targe === void 0 ? [] : _action$payload$targe,
      _action$payload$prevT = _action$payload.prevTargetIds,
      prevTargetIds = _action$payload$prevT === void 0 ? [] : _action$payload$prevT;
  var result = xor(targetIds, prevTargetIds);
  var didChange = result.length > 0 || !areArraysEqual(targetIds, prevTargetIds);

  if (!didChange) {
    return NONE;
  } // Check the target ids at the innermost position. If they are valid, add them
  // to the result


  var prevInnermostTargetId = prevTargetIds[prevTargetIds.length - 1];
  var innermostTargetId = targetIds[targetIds.length - 1];

  if (prevInnermostTargetId !== innermostTargetId) {
    if (prevInnermostTargetId) {
      result.push(prevInnermostTargetId);
    }

    if (innermostTargetId) {
      result.push(innermostTargetId);
    }
  }

  return result;
}
// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/reducers/stateId.js
function stateId() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return state + 1;
}
// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/reducers/index.js
function reducers_ownKeys(object, enumerableOnly) {
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

function reducers_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      reducers_ownKeys(Object(source), true).forEach(function (key) {
        reducers_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      reducers_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function reducers_defineProperty(obj, key, value) {
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







function reduce() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return {
    dirtyHandlerIds: dirtyHandlerIds(state.dirtyHandlerIds, {
      type: action.type,
      payload: reducers_objectSpread({}, action.payload, {
        prevTargetIds: get(state, 'dragOperation.targetIds', [])
      })
    }),
    dragOffset: dragOffset(state.dragOffset, action),
    refCount: refCount(state.refCount, action),
    dragOperation: dragOperation(state.dragOperation, action),
    stateId: stateId(state.stateId)
  };
}
// EXTERNAL MODULE: ./node_modules/@react-dnd/invariant/dist/invariant.esm.js
var invariant_esm = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/actions/dragDrop/local/setClientOffset.js

function setClientOffset(clientOffset, sourceClientOffset) {
  return {
    type: INIT_COORDS,
    payload: {
      sourceClientOffset: sourceClientOffset || null,
      clientOffset: clientOffset || null
    }
  };
}
// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/actions/dragDrop/beginDrag.js




var ResetCoordinatesAction = {
  type: INIT_COORDS,
  payload: {
    clientOffset: null,
    sourceClientOffset: null
  }
};
function createBeginDrag(manager) {
  return function beginDrag() {
    var sourceIds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      publishSource: true
    };
    var _options$publishSourc = options.publishSource,
        publishSource = _options$publishSourc === void 0 ? true : _options$publishSourc,
        clientOffset = options.clientOffset,
        getSourceClientOffset = options.getSourceClientOffset;
    var monitor = manager.getMonitor();
    var registry = manager.getRegistry(); // Initialize the coordinates using the client offset

    manager.dispatch(setClientOffset(clientOffset));
    verifyInvariants(sourceIds, monitor, registry); // Get the draggable source

    var sourceId = getDraggableSource(sourceIds, monitor);

    if (sourceId === null) {
      manager.dispatch(ResetCoordinatesAction);
      return;
    } // Get the source client offset


    var sourceClientOffset = null;

    if (clientOffset) {
      verifyGetSourceClientOffsetIsFunction(getSourceClientOffset);
      sourceClientOffset = getSourceClientOffset(sourceId);
    } // Initialize the full coordinates


    manager.dispatch(setClientOffset(clientOffset, sourceClientOffset));
    var source = registry.getSource(sourceId);
    var item = source.beginDrag(monitor, sourceId);
    verifyItemIsObject(item);
    registry.pinSource(sourceId);
    var itemType = registry.getSourceType(sourceId);
    return {
      type: BEGIN_DRAG,
      payload: {
        itemType: itemType,
        item: item,
        sourceId: sourceId,
        clientOffset: clientOffset || null,
        sourceClientOffset: sourceClientOffset || null,
        isSourcePublic: !!publishSource
      }
    };
  };
}

function verifyInvariants(sourceIds, monitor, registry) {
  Object(invariant_esm["a" /* invariant */])(!monitor.isDragging(), 'Cannot call beginDrag while dragging.');
  sourceIds.forEach(function (sourceId) {
    Object(invariant_esm["a" /* invariant */])(registry.getSource(sourceId), 'Expected sourceIds to be registered.');
  });
}

function verifyGetSourceClientOffsetIsFunction(getSourceClientOffset) {
  Object(invariant_esm["a" /* invariant */])(typeof getSourceClientOffset === 'function', 'When clientOffset is provided, getSourceClientOffset must be a function.');
}

function verifyItemIsObject(item) {
  Object(invariant_esm["a" /* invariant */])(isObject(item), 'Item must be an object.');
}

function getDraggableSource(sourceIds, monitor) {
  var sourceId = null;

  for (var i = sourceIds.length - 1; i >= 0; i--) {
    if (monitor.canDragSource(sourceIds[i])) {
      sourceId = sourceIds[i];
      break;
    }
  }

  return sourceId;
}
// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/actions/dragDrop/publishDragSource.js

function createPublishDragSource(manager) {
  return function publishDragSource() {
    var monitor = manager.getMonitor();

    if (monitor.isDragging()) {
      return {
        type: PUBLISH_DRAG_SOURCE
      };
    }
  };
}
// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/utils/matchesType.js
function matchesType(targetType, draggedItemType) {
  if (draggedItemType === null) {
    return targetType === null;
  }

  return Array.isArray(targetType) ? targetType.some(function (t) {
    return t === draggedItemType;
  }) : targetType === draggedItemType;
}
// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/actions/dragDrop/hover.js



function createHover(manager) {
  return function hover(targetIdsArg) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        clientOffset = _ref.clientOffset;

    verifyTargetIdsIsArray(targetIdsArg);
    var targetIds = targetIdsArg.slice(0);
    var monitor = manager.getMonitor();
    var registry = manager.getRegistry();
    checkInvariants(targetIds, monitor, registry);
    var draggedItemType = monitor.getItemType();
    removeNonMatchingTargetIds(targetIds, registry, draggedItemType);
    hoverAllTargets(targetIds, monitor, registry);
    return {
      type: HOVER,
      payload: {
        targetIds: targetIds,
        clientOffset: clientOffset || null
      }
    };
  };
}

function verifyTargetIdsIsArray(targetIdsArg) {
  Object(invariant_esm["a" /* invariant */])(Array.isArray(targetIdsArg), 'Expected targetIds to be an array.');
}

function checkInvariants(targetIds, monitor, registry) {
  Object(invariant_esm["a" /* invariant */])(monitor.isDragging(), 'Cannot call hover while not dragging.');
  Object(invariant_esm["a" /* invariant */])(!monitor.didDrop(), 'Cannot call hover after drop.');

  for (var i = 0; i < targetIds.length; i++) {
    var targetId = targetIds[i];
    Object(invariant_esm["a" /* invariant */])(targetIds.lastIndexOf(targetId) === i, 'Expected targetIds to be unique in the passed array.');
    var target = registry.getTarget(targetId);
    Object(invariant_esm["a" /* invariant */])(target, 'Expected targetIds to be registered.');
  }
}

function removeNonMatchingTargetIds(targetIds, registry, draggedItemType) {
  // Remove those targetIds that don't match the targetType.  This
  // fixes shallow isOver which would only be non-shallow because of
  // non-matching targets.
  for (var i = targetIds.length - 1; i >= 0; i--) {
    var targetId = targetIds[i];
    var targetType = registry.getTargetType(targetId);

    if (!matchesType(targetType, draggedItemType)) {
      targetIds.splice(i, 1);
    }
  }
}

function hoverAllTargets(targetIds, monitor, registry) {
  // Finally call hover on all matching targets.
  targetIds.forEach(function (targetId) {
    var target = registry.getTarget(targetId);
    target.hover(monitor, targetId);
  });
}
// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/actions/dragDrop/drop.js
function drop_ownKeys(object, enumerableOnly) {
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

function drop_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      drop_ownKeys(Object(source), true).forEach(function (key) {
        drop_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      drop_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function drop_defineProperty(obj, key, value) {
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




function createDrop(manager) {
  return function drop() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var monitor = manager.getMonitor();
    var registry = manager.getRegistry();
    drop_verifyInvariants(monitor);
    var targetIds = getDroppableTargets(monitor); // Multiple actions are dispatched here, which is why this doesn't return an action

    targetIds.forEach(function (targetId, index) {
      var dropResult = determineDropResult(targetId, index, registry, monitor);
      var action = {
        type: DROP,
        payload: {
          dropResult: drop_objectSpread({}, options, {}, dropResult)
        }
      };
      manager.dispatch(action);
    });
  };
}

function drop_verifyInvariants(monitor) {
  Object(invariant_esm["a" /* invariant */])(monitor.isDragging(), 'Cannot call drop while not dragging.');
  Object(invariant_esm["a" /* invariant */])(!monitor.didDrop(), 'Cannot call drop twice during one drag operation.');
}

function determineDropResult(targetId, index, registry, monitor) {
  var target = registry.getTarget(targetId);
  var dropResult = target ? target.drop(monitor, targetId) : undefined;
  verifyDropResultType(dropResult);

  if (typeof dropResult === 'undefined') {
    dropResult = index === 0 ? {} : monitor.getDropResult();
  }

  return dropResult;
}

function verifyDropResultType(dropResult) {
  Object(invariant_esm["a" /* invariant */])(typeof dropResult === 'undefined' || isObject(dropResult), 'Drop result must either be an object or undefined.');
}

function getDroppableTargets(monitor) {
  var targetIds = monitor.getTargetIds().filter(monitor.canDropOnTarget, monitor);
  targetIds.reverse();
  return targetIds;
}
// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/actions/dragDrop/endDrag.js


function createEndDrag(manager) {
  return function endDrag() {
    var monitor = manager.getMonitor();
    var registry = manager.getRegistry();
    verifyIsDragging(monitor);
    var sourceId = monitor.getSourceId();
    var source = registry.getSource(sourceId, true);
    source.endDrag(monitor, sourceId);
    registry.unpinSource();
    return {
      type: END_DRAG
    };
  };
}

function verifyIsDragging(monitor) {
  Object(invariant_esm["a" /* invariant */])(monitor.isDragging(), 'Cannot call endDrag while not dragging.');
}
// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/actions/dragDrop/index.js






function createDragDropActions(manager) {
  return {
    beginDrag: createBeginDrag(manager),
    publishDragSource: createPublishDragSource(manager),
    hover: createHover(manager),
    drop: createDrop(manager),
    endDrag: createEndDrag(manager)
  };
}
// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/utils/coords.js
/**
 * Coordinate addition
 * @param a The first coordinate
 * @param b The second coordinate
 */
function add(a, b) {
  return {
    x: a.x + b.x,
    y: a.y + b.y
  };
}
/**
 * Coordinate subtraction
 * @param a The first coordinate
 * @param b The second coordinate
 */

function subtract(a, b) {
  return {
    x: a.x - b.x,
    y: a.y - b.y
  };
}
/**
 * Returns the cartesian distance of the drag source component's position, based on its position
 * at the time when the current drag operation has started, and the movement difference.
 *
 * Returns null if no item is being dragged.
 *
 * @param state The offset state to compute from
 */

function coords_getSourceClientOffset(state) {
  var clientOffset = state.clientOffset,
      initialClientOffset = state.initialClientOffset,
      initialSourceClientOffset = state.initialSourceClientOffset;

  if (!clientOffset || !initialClientOffset || !initialSourceClientOffset) {
    return null;
  }

  return subtract(add(clientOffset, initialSourceClientOffset), initialClientOffset);
}
/**
 * Determines the x,y offset between the client offset and the initial client offset
 *
 * @param state The offset state to compute from
 */

function coords_getDifferenceFromInitialOffset(state) {
  var clientOffset = state.clientOffset,
      initialClientOffset = state.initialClientOffset;

  if (!clientOffset || !initialClientOffset) {
    return null;
  }

  return subtract(clientOffset, initialClientOffset);
}
// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/DragDropMonitorImpl.js
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






var DragDropMonitorImpl_DragDropMonitorImpl = /*#__PURE__*/function () {
  function DragDropMonitorImpl(store, registry) {
    _classCallCheck(this, DragDropMonitorImpl);

    this.store = store;
    this.registry = registry;
  }

  _createClass(DragDropMonitorImpl, [{
    key: "subscribeToStateChange",
    value: function subscribeToStateChange(listener) {
      var _this = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        handlerIds: undefined
      };
      var handlerIds = options.handlerIds;
      Object(invariant_esm["a" /* invariant */])(typeof listener === 'function', 'listener must be a function.');
      Object(invariant_esm["a" /* invariant */])(typeof handlerIds === 'undefined' || Array.isArray(handlerIds), 'handlerIds, when specified, must be an array of strings.');
      var prevStateId = this.store.getState().stateId;

      var handleChange = function handleChange() {
        var state = _this.store.getState();

        var currentStateId = state.stateId;

        try {
          var canSkipListener = currentStateId === prevStateId || currentStateId === prevStateId + 1 && !areDirty(state.dirtyHandlerIds, handlerIds);

          if (!canSkipListener) {
            listener();
          }
        } finally {
          prevStateId = currentStateId;
        }
      };

      return this.store.subscribe(handleChange);
    }
  }, {
    key: "subscribeToOffsetChange",
    value: function subscribeToOffsetChange(listener) {
      var _this2 = this;

      Object(invariant_esm["a" /* invariant */])(typeof listener === 'function', 'listener must be a function.');
      var previousState = this.store.getState().dragOffset;

      var handleChange = function handleChange() {
        var nextState = _this2.store.getState().dragOffset;

        if (nextState === previousState) {
          return;
        }

        previousState = nextState;
        listener();
      };

      return this.store.subscribe(handleChange);
    }
  }, {
    key: "canDragSource",
    value: function canDragSource(sourceId) {
      if (!sourceId) {
        return false;
      }

      var source = this.registry.getSource(sourceId);
      Object(invariant_esm["a" /* invariant */])(source, 'Expected to find a valid source.');

      if (this.isDragging()) {
        return false;
      }

      return source.canDrag(this, sourceId);
    }
  }, {
    key: "canDropOnTarget",
    value: function canDropOnTarget(targetId) {
      // undefined on initial render
      if (!targetId) {
        return false;
      }

      var target = this.registry.getTarget(targetId);
      Object(invariant_esm["a" /* invariant */])(target, 'Expected to find a valid target.');

      if (!this.isDragging() || this.didDrop()) {
        return false;
      }

      var targetType = this.registry.getTargetType(targetId);
      var draggedItemType = this.getItemType();
      return matchesType(targetType, draggedItemType) && target.canDrop(this, targetId);
    }
  }, {
    key: "isDragging",
    value: function isDragging() {
      return Boolean(this.getItemType());
    }
  }, {
    key: "isDraggingSource",
    value: function isDraggingSource(sourceId) {
      // undefined on initial render
      if (!sourceId) {
        return false;
      }

      var source = this.registry.getSource(sourceId, true);
      Object(invariant_esm["a" /* invariant */])(source, 'Expected to find a valid source.');

      if (!this.isDragging() || !this.isSourcePublic()) {
        return false;
      }

      var sourceType = this.registry.getSourceType(sourceId);
      var draggedItemType = this.getItemType();

      if (sourceType !== draggedItemType) {
        return false;
      }

      return source.isDragging(this, sourceId);
    }
  }, {
    key: "isOverTarget",
    value: function isOverTarget(targetId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        shallow: false
      }; // undefined on initial render

      if (!targetId) {
        return false;
      }

      var shallow = options.shallow;

      if (!this.isDragging()) {
        return false;
      }

      var targetType = this.registry.getTargetType(targetId);
      var draggedItemType = this.getItemType();

      if (draggedItemType && !matchesType(targetType, draggedItemType)) {
        return false;
      }

      var targetIds = this.getTargetIds();

      if (!targetIds.length) {
        return false;
      }

      var index = targetIds.indexOf(targetId);

      if (shallow) {
        return index === targetIds.length - 1;
      } else {
        return index > -1;
      }
    }
  }, {
    key: "getItemType",
    value: function getItemType() {
      return this.store.getState().dragOperation.itemType;
    }
  }, {
    key: "getItem",
    value: function getItem() {
      return this.store.getState().dragOperation.item;
    }
  }, {
    key: "getSourceId",
    value: function getSourceId() {
      return this.store.getState().dragOperation.sourceId;
    }
  }, {
    key: "getTargetIds",
    value: function getTargetIds() {
      return this.store.getState().dragOperation.targetIds;
    }
  }, {
    key: "getDropResult",
    value: function getDropResult() {
      return this.store.getState().dragOperation.dropResult;
    }
  }, {
    key: "didDrop",
    value: function didDrop() {
      return this.store.getState().dragOperation.didDrop;
    }
  }, {
    key: "isSourcePublic",
    value: function isSourcePublic() {
      return this.store.getState().dragOperation.isSourcePublic;
    }
  }, {
    key: "getInitialClientOffset",
    value: function getInitialClientOffset() {
      return this.store.getState().dragOffset.initialClientOffset;
    }
  }, {
    key: "getInitialSourceClientOffset",
    value: function getInitialSourceClientOffset() {
      return this.store.getState().dragOffset.initialSourceClientOffset;
    }
  }, {
    key: "getClientOffset",
    value: function getClientOffset() {
      return this.store.getState().dragOffset.clientOffset;
    }
  }, {
    key: "getSourceClientOffset",
    value: function getSourceClientOffset() {
      return coords_getSourceClientOffset(this.store.getState().dragOffset);
    }
  }, {
    key: "getDifferenceFromInitialOffset",
    value: function getDifferenceFromInitialOffset() {
      return coords_getDifferenceFromInitialOffset(this.store.getState().dragOffset);
    }
  }]);

  return DragDropMonitorImpl;
}();


// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/utils/getNextUniqueId.js
var nextUniqueId = 0;
function getNextUniqueId() {
  return nextUniqueId++;
}
// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/interfaces.js
var HandlerRole;

(function (HandlerRole) {
  HandlerRole["SOURCE"] = "SOURCE";
  HandlerRole["TARGET"] = "TARGET";
})(HandlerRole || (HandlerRole = {}));
// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/contracts.js
function contracts_typeof2(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { contracts_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { contracts_typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return contracts_typeof2(obj); }

function contracts_typeof(obj) {
  if (typeof Symbol === "function" && contracts_typeof2(Symbol.iterator) === "symbol") {
    contracts_typeof = function _typeof(obj) {
      return contracts_typeof2(obj);
    };
  } else {
    contracts_typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : contracts_typeof2(obj);
    };
  }

  return contracts_typeof(obj);
}


function validateSourceContract(source) {
  Object(invariant_esm["a" /* invariant */])(typeof source.canDrag === 'function', 'Expected canDrag to be a function.');
  Object(invariant_esm["a" /* invariant */])(typeof source.beginDrag === 'function', 'Expected beginDrag to be a function.');
  Object(invariant_esm["a" /* invariant */])(typeof source.endDrag === 'function', 'Expected endDrag to be a function.');
}
function validateTargetContract(target) {
  Object(invariant_esm["a" /* invariant */])(typeof target.canDrop === 'function', 'Expected canDrop to be a function.');
  Object(invariant_esm["a" /* invariant */])(typeof target.hover === 'function', 'Expected hover to be a function.');
  Object(invariant_esm["a" /* invariant */])(typeof target.drop === 'function', 'Expected beginDrag to be a function.');
}
function validateType(type, allowArray) {
  if (allowArray && Array.isArray(type)) {
    type.forEach(function (t) {
      return validateType(t, false);
    });
    return;
  }

  Object(invariant_esm["a" /* invariant */])(typeof type === 'string' || contracts_typeof(type) === 'symbol', allowArray ? 'Type can only be a string, a symbol, or an array of either.' : 'Type can only be a string or a symbol.');
}
// EXTERNAL MODULE: ./node_modules/@react-dnd/asap/dist/esm/browser/raw.js
var raw = __webpack_require__(25);

// CONCATENATED MODULE: ./node_modules/@react-dnd/asap/dist/esm/browser/asap.js
 // rawAsap provides everything we need except exception management.
// RawTasks are recycled to reduce GC churn.

var freeTasks = []; // We queue errors to ensure they are thrown in right order (FIFO).
// Array-as-queue is good enough here, since we are just dealing with exceptions.

var pendingErrors = [];
var requestErrorThrow = raw["a" /* rawAsap */].makeRequestCallFromTimer(throwFirstError);

function throwFirstError() {
  if (pendingErrors.length) {
    throw pendingErrors.shift();
  }
}
/**
 * Calls a task as soon as possible after returning, in its own event, with priority
 * over other events like animation, reflow, and repaint. An error thrown from an
 * event will not interrupt, nor even substantially slow down the processing of
 * other events, but will be rather postponed to a lower priority event.
 * @param {{call}} task A callable object, typically a function that takes no
 * arguments.
 */


function asap(task) {
  var rawTask;

  if (freeTasks.length) {
    rawTask = freeTasks.pop();
  } else {
    rawTask = new RawTask();
  }

  rawTask.task = task;
  Object(raw["a" /* rawAsap */])(rawTask);
} // We wrap tasks with recyclable task objects.  A task object implements
// `call`, just like a function.

var RawTask =
/** @class */
function () {
  function RawTask() {}

  RawTask.prototype.call = function () {
    try {
      this.task.call();
    } catch (error) {
      if (asap.onerror) {
        // This hook exists purely for testing purposes.
        // Its name will be periodically randomized to break any code that
        // depends on its existence.
        asap.onerror(error);
      } else {
        // In a web browser, exceptions are not fatal. However, to avoid
        // slowing down the queue of pending tasks, we rethrow the error in a
        // lower priority turn.
        pendingErrors.push(error);
        requestErrorThrow();
      }
    } finally {
      this.task = null;
      freeTasks[freeTasks.length] = this;
    }
  };

  return RawTask;
}();
// CONCATENATED MODULE: ./node_modules/@react-dnd/asap/dist/esm/browser/index.js

// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/HandlerRegistryImpl.js
function HandlerRegistryImpl_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function HandlerRegistryImpl_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function HandlerRegistryImpl_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) HandlerRegistryImpl_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) HandlerRegistryImpl_defineProperties(Constructor, staticProps);
  return Constructor;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
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

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}








function getNextHandlerId(role) {
  var id = getNextUniqueId().toString();

  switch (role) {
    case HandlerRole.SOURCE:
      return "S".concat(id);

    case HandlerRole.TARGET:
      return "T".concat(id);

    default:
      throw new Error("Unknown Handler Role: ".concat(role));
  }
}

function parseRoleFromHandlerId(handlerId) {
  switch (handlerId[0]) {
    case 'S':
      return HandlerRole.SOURCE;

    case 'T':
      return HandlerRole.TARGET;

    default:
      Object(invariant_esm["a" /* invariant */])(false, "Cannot parse handler ID: ".concat(handlerId));
  }
}

function mapContainsValue(map, searchValue) {
  var entries = map.entries();
  var isDone = false;

  do {
    var _entries$next = entries.next(),
        done = _entries$next.done,
        _entries$next$value = _slicedToArray(_entries$next.value, 2),
        value = _entries$next$value[1];

    if (value === searchValue) {
      return true;
    }

    isDone = !!done;
  } while (!isDone);

  return false;
}

var HandlerRegistryImpl_HandlerRegistryImpl = /*#__PURE__*/function () {
  function HandlerRegistryImpl(store) {
    HandlerRegistryImpl_classCallCheck(this, HandlerRegistryImpl);

    this.types = new Map();
    this.dragSources = new Map();
    this.dropTargets = new Map();
    this.pinnedSourceId = null;
    this.pinnedSource = null;
    this.store = store;
  }

  HandlerRegistryImpl_createClass(HandlerRegistryImpl, [{
    key: "addSource",
    value: function addSource(type, source) {
      validateType(type);
      validateSourceContract(source);
      var sourceId = this.addHandler(HandlerRole.SOURCE, type, source);
      this.store.dispatch(registry_addSource(sourceId));
      return sourceId;
    }
  }, {
    key: "addTarget",
    value: function addTarget(type, target) {
      validateType(type, true);
      validateTargetContract(target);
      var targetId = this.addHandler(HandlerRole.TARGET, type, target);
      this.store.dispatch(registry_addTarget(targetId));
      return targetId;
    }
  }, {
    key: "containsHandler",
    value: function containsHandler(handler) {
      return mapContainsValue(this.dragSources, handler) || mapContainsValue(this.dropTargets, handler);
    }
  }, {
    key: "getSource",
    value: function getSource(sourceId) {
      var includePinned = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      Object(invariant_esm["a" /* invariant */])(this.isSourceId(sourceId), 'Expected a valid source ID.');
      var isPinned = includePinned && sourceId === this.pinnedSourceId;
      var source = isPinned ? this.pinnedSource : this.dragSources.get(sourceId);
      return source;
    }
  }, {
    key: "getTarget",
    value: function getTarget(targetId) {
      Object(invariant_esm["a" /* invariant */])(this.isTargetId(targetId), 'Expected a valid target ID.');
      return this.dropTargets.get(targetId);
    }
  }, {
    key: "getSourceType",
    value: function getSourceType(sourceId) {
      Object(invariant_esm["a" /* invariant */])(this.isSourceId(sourceId), 'Expected a valid source ID.');
      return this.types.get(sourceId);
    }
  }, {
    key: "getTargetType",
    value: function getTargetType(targetId) {
      Object(invariant_esm["a" /* invariant */])(this.isTargetId(targetId), 'Expected a valid target ID.');
      return this.types.get(targetId);
    }
  }, {
    key: "isSourceId",
    value: function isSourceId(handlerId) {
      var role = parseRoleFromHandlerId(handlerId);
      return role === HandlerRole.SOURCE;
    }
  }, {
    key: "isTargetId",
    value: function isTargetId(handlerId) {
      var role = parseRoleFromHandlerId(handlerId);
      return role === HandlerRole.TARGET;
    }
  }, {
    key: "removeSource",
    value: function removeSource(sourceId) {
      var _this = this;

      Object(invariant_esm["a" /* invariant */])(this.getSource(sourceId), 'Expected an existing source.');
      this.store.dispatch(registry_removeSource(sourceId));
      asap(function () {
        _this.dragSources.delete(sourceId);

        _this.types.delete(sourceId);
      });
    }
  }, {
    key: "removeTarget",
    value: function removeTarget(targetId) {
      Object(invariant_esm["a" /* invariant */])(this.getTarget(targetId), 'Expected an existing target.');
      this.store.dispatch(registry_removeTarget(targetId));
      this.dropTargets.delete(targetId);
      this.types.delete(targetId);
    }
  }, {
    key: "pinSource",
    value: function pinSource(sourceId) {
      var source = this.getSource(sourceId);
      Object(invariant_esm["a" /* invariant */])(source, 'Expected an existing source.');
      this.pinnedSourceId = sourceId;
      this.pinnedSource = source;
    }
  }, {
    key: "unpinSource",
    value: function unpinSource() {
      Object(invariant_esm["a" /* invariant */])(this.pinnedSource, 'No source is pinned at the time.');
      this.pinnedSourceId = null;
      this.pinnedSource = null;
    }
  }, {
    key: "addHandler",
    value: function addHandler(role, type, handler) {
      var id = getNextHandlerId(role);
      this.types.set(id, type);

      if (role === HandlerRole.SOURCE) {
        this.dragSources.set(id, handler);
      } else if (role === HandlerRole.TARGET) {
        this.dropTargets.set(id, handler);
      }

      return id;
    }
  }]);

  return HandlerRegistryImpl;
}();


// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/DragDropManagerImpl.js
function DragDropManagerImpl_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function DragDropManagerImpl_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function DragDropManagerImpl_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) DragDropManagerImpl_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) DragDropManagerImpl_defineProperties(Constructor, staticProps);
  return Constructor;
}







function makeStoreInstance(debugMode) {
  // TODO: if we ever make a react-native version of this,
  // we'll need to consider how to pull off dev-tooling
  var reduxDevTools = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__;
  return createStore(reduce, debugMode && reduxDevTools && reduxDevTools({
    name: 'dnd-core',
    instanceId: 'dnd-core'
  }));
}

var DragDropManagerImpl_DragDropManagerImpl = /*#__PURE__*/function () {
  function DragDropManagerImpl() {
    var _this = this;

    var debugMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    DragDropManagerImpl_classCallCheck(this, DragDropManagerImpl);

    this.isSetUp = false;

    this.handleRefCountChange = function () {
      var shouldSetUp = _this.store.getState().refCount > 0;

      if (_this.backend) {
        if (shouldSetUp && !_this.isSetUp) {
          _this.backend.setup();

          _this.isSetUp = true;
        } else if (!shouldSetUp && _this.isSetUp) {
          _this.backend.teardown();

          _this.isSetUp = false;
        }
      }
    };

    var store = makeStoreInstance(debugMode);
    this.store = store;
    this.monitor = new DragDropMonitorImpl_DragDropMonitorImpl(store, new HandlerRegistryImpl_HandlerRegistryImpl(store));
    store.subscribe(this.handleRefCountChange);
  }

  DragDropManagerImpl_createClass(DragDropManagerImpl, [{
    key: "receiveBackend",
    value: function receiveBackend(backend) {
      this.backend = backend;
    }
  }, {
    key: "getMonitor",
    value: function getMonitor() {
      return this.monitor;
    }
  }, {
    key: "getBackend",
    value: function getBackend() {
      return this.backend;
    }
  }, {
    key: "getRegistry",
    value: function getRegistry() {
      return this.monitor.registry;
    }
  }, {
    key: "getActions",
    value: function getActions() {
      /* eslint-disable-next-line @typescript-eslint/no-this-alias */
      var manager = this;
      var dispatch = this.store.dispatch;

      function bindActionCreator(actionCreator) {
        return function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          var action = actionCreator.apply(manager, args);

          if (typeof action !== 'undefined') {
            dispatch(action);
          }
        };
      }

      var actions = createDragDropActions(this);
      return Object.keys(actions).reduce(function (boundActions, key) {
        var action = actions[key];
        boundActions[key] = bindActionCreator(action);
        return boundActions;
      }, {});
    }
  }, {
    key: "dispatch",
    value: function dispatch(action) {
      this.store.dispatch(action);
    }
  }]);

  return DragDropManagerImpl;
}();


// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/factories.js

function createDragDropManager(backendFactory, globalContext, backendOptions, debugMode) {
  var manager = new DragDropManagerImpl_DragDropManagerImpl(debugMode);
  var backend = backendFactory(manager, globalContext, backendOptions);
  manager.receiveBackend(backend);
  return manager;
}
// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/common/DndContext.js


/**
 * Create the React Context
 */

var DndContext = /*#__PURE__*/external_React_["createContext"]({
  dragDropManager: undefined
});
/**
 * Creates the context object we're providing
 * @param backend
 * @param context
 */

function createDndContext(backend, context, options, debugMode) {
  return {
    dragDropManager: createDragDropManager(backend, context, options, debugMode)
  };
}

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = antd/es/input-number/style;

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {var isNode = typeof process !== 'undefined' && process.versions != null && process.versions.node != null;

var isBrowser = function isBrowser() {
  return typeof window !== 'undefined' && typeof window.document !== 'undefined' && !isNode;
};

/* harmony default export */ __webpack_exports__["a"] = (isBrowser);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(48)))

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(60);
} else {}

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = antd/es/date-picker/style;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = antd/es/input/style;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.warning = warning;
exports.note = note;
exports.resetWarned = resetWarned;
exports.call = call;
exports.warningOnce = warningOnce;
exports.noteOnce = noteOnce;
exports.default = void 0;
/* eslint-disable no-console */

var warned = {};

function warning(valid, message) {
  // Support uglify
  if (false) {}
}

function note(valid, message) {
  // Support uglify
  if (false) {}
}

function resetWarned() {
  warned = {};
}

function call(method, valid, message) {
  if (!valid && !warned[message]) {
    method(false, message);
    warned[message] = true;
  }
}

function warningOnce(valid, message) {
  call(warning, valid, message);
}

function noteOnce(valid, message) {
  call(note, valid, message);
}

var _default = warningOnce;
/* eslint-enable */

exports.default = _default;

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38);
/* global window */

var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(root);
/* harmony default export */ __webpack_exports__["a"] = (result);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15), __webpack_require__(56)(module)))

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rawAsap; });
// Use the fastest means possible to execute a task in its own turn, with
// priority over other events including IO, animation, reflow, and redraw
// events in browsers.
//
// An exception thrown by a task will permanently interrupt the processing of
// subsequent tasks. The higher level `asap` function ensures that if an
// exception is thrown by a task, that the task queue will continue flushing as
// soon as possible, but if you use `rawAsap` directly, you are responsible to
// either ensure that no exceptions are thrown from your task, or to manually
// call `rawAsap.requestFlush` if an exception is thrown.
function rawAsap(task) {
  if (!queue.length) {
    requestFlush();
    flushing = true;
  } // Equivalent to push, but avoids a function call.


  queue[queue.length] = task;
}
var queue = []; // Once a flush has been requested, no further calls to `requestFlush` are
// necessary until the next `flush` completes.
// @ts-ignore

var flushing = false; // `requestFlush` is an implementation-specific method that attempts to kick
// off a `flush` event as quickly as possible. `flush` will attempt to exhaust
// the event queue before yielding to the browser's own event loop.

var requestFlush; // The position of the next task to execute in the task queue. This is
// preserved between calls to `flush` so that it can be resumed if
// a task throws an exception.

var index = 0; // If a task schedules additional tasks recursively, the task queue can grow
// unbounded. To prevent memory exhaustion, the task queue will periodically
// truncate already-completed tasks.

var capacity = 1024; // The flush function processes all tasks that have been scheduled with
// `rawAsap` unless and until one of those tasks throws an exception.
// If a task throws an exception, `flush` ensures that its state will remain
// consistent and will resume where it left off when called again.
// However, `flush` does not make any arrangements to be called again if an
// exception is thrown.

function flush() {
  while (index < queue.length) {
    var currentIndex = index; // Advance the index before calling the task. This ensures that we will
    // begin flushing on the next task the task throws an error.

    index = index + 1;
    queue[currentIndex].call(); // Prevent leaking memory for long chains of recursive calls to `asap`.
    // If we call `asap` within tasks scheduled by `asap`, the queue will
    // grow, but to avoid an O(n) walk for every task we execute, we don't
    // shift tasks off the queue after they have been executed.
    // Instead, we periodically shift 1024 tasks off the queue.

    if (index > capacity) {
      // Manually shift all values starting at the index back to the
      // beginning of the queue.
      for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
        queue[scan] = queue[scan + index];
      }

      queue.length -= index;
      index = 0;
    }
  }

  queue.length = 0;
  index = 0;
  flushing = false;
} // `requestFlush` is implemented using a strategy based on data collected from
// every available SauceLabs Selenium web driver worker at time of writing.
// https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593
// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
// have WebKitMutationObserver but not un-prefixed MutationObserver.
// Must use `global` or `self` instead of `window` to work in both frames and web
// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.

/* globals self */


var scope = typeof global !== 'undefined' ? global : self;
var BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver; // MutationObservers are desirable because they have high priority and work
// reliably everywhere they are implemented.
// They are implemented in all modern browsers.
//
// - Android 4-4.3
// - Chrome 26-34
// - Firefox 14-29
// - Internet Explorer 11
// - iPad Safari 6-7.1
// - iPhone Safari 7-7.1
// - Safari 6-7

if (typeof BrowserMutationObserver === 'function') {
  requestFlush = makeRequestCallFromMutationObserver(flush); // MessageChannels are desirable because they give direct access to the HTML
  // task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
  // 11-12, and in web workers in many engines.
  // Although message channels yield to any queued rendering and IO tasks, they
  // would be better than imposing the 4ms delay of timers.
  // However, they do not work reliably in Internet Explorer or Safari.
  // Internet Explorer 10 is the only browser that has setImmediate but does
  // not have MutationObservers.
  // Although setImmediate yields to the browser's renderer, it would be
  // preferrable to falling back to setTimeout since it does not have
  // the minimum 4ms penalty.
  // Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
  // Desktop to a lesser extent) that renders both setImmediate and
  // MessageChannel useless for the purposes of ASAP.
  // https://github.com/kriskowal/q/issues/396
  // Timers are implemented universally.
  // We fall back to timers in workers in most engines, and in foreground
  // contexts in the following browsers.
  // However, note that even this simple case requires nuances to operate in a
  // broad spectrum of browsers.
  //
  // - Firefox 3-13
  // - Internet Explorer 6-9
  // - iPad Safari 4.3
  // - Lynx 2.8.7
} else {
  requestFlush = makeRequestCallFromTimer(flush);
} // `requestFlush` requests that the high priority event queue be flushed as
// soon as possible.
// This is useful to prevent an error thrown in a task from stalling the event
// queue if the exception handled by Node.js’s
// `process.on("uncaughtException")` or by a domain.


rawAsap.requestFlush = requestFlush; // To request a high priority event, we induce a mutation observer by toggling
// the text of a text node between "1" and "-1".

function makeRequestCallFromMutationObserver(callback) {
  var toggle = 1;
  var observer = new BrowserMutationObserver(callback);
  var node = document.createTextNode('');
  observer.observe(node, {
    characterData: true
  });
  return function requestCall() {
    toggle = -toggle;
    node.data = toggle;
  };
} // The message channel technique was discovered by Malte Ubl and was the
// original foundation for this library.
// http://www.nonblocking.io/2011/06/windownexttick.html
// Safari 6.0.5 (at least) intermittently fails to create message ports on a
// page's first load. Thankfully, this version of Safari supports
// MutationObservers, so we don't need to fall back in that case.
// function makeRequestCallFromMessageChannel(callback) {
//     var channel = new MessageChannel();
//     channel.port1.onmessage = callback;
//     return function requestCall() {
//         channel.port2.postMessage(0);
//     };
// }
// For reasons explained above, we are also unable to use `setImmediate`
// under any circumstances.
// Even if we were, there is another bug in Internet Explorer 10.
// It is not sufficient to assign `setImmediate` to `requestFlush` because
// `setImmediate` must be called *by name* and therefore must be wrapped in a
// closure.
// Never forget.
// function makeRequestCallFromSetImmediate(callback) {
//     return function requestCall() {
//         setImmediate(callback);
//     };
// }
// Safari 6.0 has a problem where timers will get lost while the user is
// scrolling. This problem does not impact ASAP because Safari 6.0 supports
// mutation observers, so that implementation is used instead.
// However, if we ever elect to use timers in Safari, the prevalent work-around
// is to add a scroll event listener that calls for a flush.
// `setTimeout` does not call the passed callback if the delay is less than
// approximately 7 in web workers in Firefox 8 through 18, and sometimes not
// even then.


function makeRequestCallFromTimer(callback) {
  return function requestCall() {
    // We dispatch a timeout with a specified delay of 0 for engines that
    // can reliably accommodate that request. This will usually be snapped
    // to a 4 milisecond delay, but once we're flushing, there's no delay
    // between events.
    var timeoutHandle = setTimeout(handleTimer, 0); // However, since this timer gets frequently dropped in Firefox
    // workers, we enlist an interval handle that will try to fire
    // an event 20 times per second until it succeeds.

    var intervalHandle = setInterval(handleTimer, 50);

    function handleTimer() {
      // Whichever timer succeeds will cancel both timers and
      // execute the callback.
      clearTimeout(timeoutHandle);
      clearInterval(intervalHandle);
      callback();
    }
  };
} // This is for `asap.js` only.
// Its name will be periodically randomized to break any code that depends on
// its existence.


rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer; // ASAP was originally a nextTick shim included in Q. This was factored out
// into this ASAP package. It was later adapted to RSVP which made further
// amendments. These decisions, particularly to marginalize MessageChannel and
// to capture the MutationObserver implementation in a closure, were integrated
// back into ASAP proper.
// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)))

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = antd/es/space/style;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = antd/es/avatar;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = antd/es/tooltip;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var generate_1 = __importDefault(__webpack_require__(46));

exports.generate = generate_1.default;
var presetPrimaryColors = {
  red: '#F5222D',
  volcano: '#FA541C',
  orange: '#FA8C16',
  gold: '#FAAD14',
  yellow: '#FADB14',
  lime: '#A0D911',
  green: '#52C41A',
  cyan: '#13C2C2',
  blue: '#1890FF',
  geekblue: '#2F54EB',
  purple: '#722ED1',
  magenta: '#EB2F96',
  grey: '#666666'
};
exports.presetPrimaryColors = presetPrimaryColors;
var presetPalettes = {};
exports.presetPalettes = presetPalettes;
Object.keys(presetPrimaryColors).forEach(function (key) {
  presetPalettes[key] = generate_1.default(presetPrimaryColors[key]);
  presetPalettes[key].primary = presetPalettes[key][5];
});
var red = presetPalettes.red;
exports.red = red;
var volcano = presetPalettes.volcano;
exports.volcano = volcano;
var gold = presetPalettes.gold;
exports.gold = gold;
var orange = presetPalettes.orange;
exports.orange = orange;
var yellow = presetPalettes.yellow;
exports.yellow = yellow;
var lime = presetPalettes.lime;
exports.lime = lime;
var green = presetPalettes.green;
exports.green = green;
var cyan = presetPalettes.cyan;
exports.cyan = cyan;
var blue = presetPalettes.blue;
exports.blue = blue;
var geekblue = presetPalettes.geekblue;
exports.geekblue = geekblue;
var purple = presetPalettes.purple;
exports.purple = purple;
var magenta = presetPalettes.magenta;
exports.magenta = magenta;
var grey = presetPalettes.grey;
exports.grey = grey;

/***/ }),
/* 32 */
/***/ (function(module, exports) {

var containers = []; // will store container HTMLElement references

var styleElements = []; // will store {prepend: HTMLElement, append: HTMLElement}

var usage = 'insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).';

function insertCss(css, options) {
  options = options || {};

  if (css === undefined) {
    throw new Error(usage);
  }

  var position = options.prepend === true ? 'prepend' : 'append';
  var container = options.container !== undefined ? options.container : document.querySelector('head');
  var containerId = containers.indexOf(container); // first time we see this container, create the necessary entries

  if (containerId === -1) {
    containerId = containers.push(container) - 1;
    styleElements[containerId] = {};
  } // try to get the correponding container + position styleElement, create it otherwise


  var styleElement;

  if (styleElements[containerId] !== undefined && styleElements[containerId][position] !== undefined) {
    styleElement = styleElements[containerId][position];
  } else {
    styleElement = styleElements[containerId][position] = createStyleElement();

    if (position === 'prepend') {
      container.insertBefore(styleElement, container.childNodes[0]);
    } else {
      container.appendChild(styleElement);
    }
  } // strip potential UTF-8 BOM if css was read from a file


  if (css.charCodeAt(0) === 0xFEFF) {
    css = css.substr(1, css.length);
  } // actually add the stylesheet


  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText += css;
  } else {
    styleElement.textContent += css;
  }

  return styleElement;
}

;

function createStyleElement() {
  var styleElement = document.createElement('style');
  styleElement.setAttribute('type', 'text/css');
  return styleElement;
}

module.exports = insertCss;
module.exports.insertCss = insertCss;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;
/** Used to stand-in for `undefined` hash values. */

var HASH_UNDEFINED = '__lodash_hash_undefined__';
/** Used to compose bitmasks for value comparisons. */

var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;
/** Used as references for various `Number` constants. */

var MAX_SAFE_INTEGER = 9007199254740991;
/** `Object#toString` result references. */

var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    asyncTag = '[object AsyncFunction]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    nullTag = '[object Null]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    proxyTag = '[object Proxy]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    undefinedTag = '[object Undefined]',
    weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */

var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */

var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used to detect unsigned integer values. */

var reIsUint = /^(?:0|[1-9]\d*)$/;
/** Used to identify `toStringTag` values of typed arrays. */

var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
/** Detect free variable `global` from Node.js. */

var freeGlobal = (typeof global === "undefined" ? "undefined" : _typeof(global)) == 'object' && global && global.Object === Object && global;
/** Detect free variable `self`. */

var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = freeGlobal || freeSelf || Function('return this')();
/** Detect free variable `exports`. */

var freeExports = ( false ? undefined : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && ( false ? undefined : _typeof(module)) == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule && freeModule.exports === freeExports;
/** Detect free variable `process` from Node.js. */

var freeProcess = moduleExports && freeGlobal.process;
/** Used to access faster Node.js helpers. */

var nodeUtil = function () {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}();
/* Node.js helper references. */


var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */

function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];

    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }

  return result;
}
/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */


function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }

  return array;
}
/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */


function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }

  return false;
}
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */


function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }

  return result;
}
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */


function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}
/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function cacheHas(cache, key) {
  return cache.has(key);
}
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */


function getValue(object, key) {
  return object == null ? undefined : object[key];
}
/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */


function mapToArray(map) {
  var index = -1,
      result = Array(map.size);
  map.forEach(function (value, key) {
    result[++index] = [key, value];
  });
  return result;
}
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */


function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}
/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */


function setToArray(set) {
  var index = -1,
      result = Array(set.size);
  set.forEach(function (value) {
    result[++index] = value;
  });
  return result;
}
/** Used for built-in method references. */


var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;
/** Used to detect overreaching core-js shims. */

var coreJsData = root['__core-js_shared__'];
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to detect methods masquerading as native. */

var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */


var nativeObjectToString = objectProto.toString;
/** Used to detect if a method is native. */

var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
/** Built-in value references. */

var Buffer = moduleExports ? root.Buffer : undefined,
    _Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice,
    symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);
/* Built-in method references that are verified to be native. */

var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');
/** Used to detect maps, sets, and weakmaps. */

var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);
/** Used to convert symbols to primitives and strings. */

var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */


function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */


function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function hashGet(key) {
  var data = this.__data__;

  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }

  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */


function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
} // Add methods to `Hash`.


Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */


function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */


function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }

  var lastIndex = data.length - 1;

  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }

  --this.size;
  return true;
}
/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);
  return index < 0 ? undefined : data[index][1];
}
/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}
/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */


function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }

  return this;
} // Add methods to `ListCache`.


ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */


function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash(),
    'map': new (Map || ListCache)(),
    'string': new Hash()
  };
}
/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */


function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}
/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}
/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}
/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */


function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
} // Add methods to `MapCache`.


MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */

function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;
  this.__data__ = new MapCache();

  while (++index < length) {
    this.add(values[index]);
  }
}
/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */


function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);

  return this;
}
/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */


function setCacheHas(value) {
  return this.__data__.has(value);
} // Add methods to `SetCache`.


SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;
/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}
/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */


function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}
/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */


function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);
  this.size = data.size;
  return result;
}
/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function stackGet(key) {
  return this.__data__.get(key);
}
/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function stackHas(key) {
  return this.__data__.has(key);
}
/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */


function stackSet(key, value) {
  var data = this.__data__;

  if (data instanceof ListCache) {
    var pairs = data.__data__;

    if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }

    data = this.__data__ = new MapCache(pairs);
  }

  data.set(key, value);
  this.size = data.size;
  return this;
} // Add methods to `Stack`.


Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */

function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && ( // Safari 9 has enumerable `arguments.length` in strict mode.
    key == 'length' || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == 'offset' || key == 'parent') || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
    isIndex(key, length)))) {
      result.push(key);
    }
  }

  return result;
}
/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */


function assocIndexOf(array, key) {
  var length = array.length;

  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }

  return -1;
}
/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */


function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */


function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }

  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */


function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}
/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */


function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }

  if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
    return value !== value && other !== other;
  }

  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}
/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */


function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);
  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;
  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }

    objIsArr = true;
    objIsObj = false;
  }

  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack());
    return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }

  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }

  if (!isSameTag) {
    return false;
  }

  stack || (stack = new Stack());
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */


function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }

  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */


function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */


function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }

  var result = [];

  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }

  return result;
}
/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */


function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  } // Assume cyclic values are equal.


  var stacked = stack.get(array);

  if (stacked && stack.get(other)) {
    return stacked == other;
  }

  var index = -1,
      result = true,
      seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined;
  stack.set(array, other);
  stack.set(other, array); // Ignore non-index properties.

  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }

    if (compared !== undefined) {
      if (compared) {
        continue;
      }

      result = false;
      break;
    } // Recursively compare arrays (susceptible to call stack limits).


    if (seen) {
      if (!arraySome(other, function (othValue, othIndex) {
        if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }

  stack['delete'](array);
  stack['delete'](other);
  return result;
}
/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */


function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }

      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }

      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == other + '';

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      } // Assume cyclic values are equal.


      var stacked = stack.get(object);

      if (stacked) {
        return stacked == other;
      }

      bitmask |= COMPARE_UNORDERED_FLAG; // Recursively compare objects (susceptible to call stack limits).

      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }

  }

  return false;
}
/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */


function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }

  var index = objLength;

  while (index--) {
    var key = objProps[index];

    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  } // Assume cyclic values are equal.


  var stacked = stack.get(object);

  if (stacked && stack.get(other)) {
    return stacked == other;
  }

  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;

  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    } // Recursively compare objects (susceptible to call stack limits).


    if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }

    skipCtor || (skipCtor = key == 'constructor');
  }

  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor; // Non `Object` object instances with different constructors are not equal.

    if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }

  stack['delete'](object);
  stack['delete'](other);
  return result;
}
/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */


function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}
/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */


function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}
/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */


function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */


function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);

  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }

  return result;
}
/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */


var getSymbols = !nativeGetSymbols ? stubArray : function (object) {
  if (object == null) {
    return [];
  }

  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function (symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};
/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

var getTag = baseGetTag; // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.

if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
  getTag = function getTag(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;

        case mapCtorString:
          return mapTag;

        case promiseCtorString:
          return promiseTag;

        case setCtorString:
          return setTag;

        case weakMapCtorString:
          return weakMapTag;
      }
    }

    return result;
  };
}
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */


function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */


function isKeyable(value) {
  var type = _typeof(value);

  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */


function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */


function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
  return value === proto;
}
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */


function objectToString(value) {
  return nativeObjectToString.call(value);
}
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */


function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}

    try {
      return func + '';
    } catch (e) {}
  }

  return '';
}
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */


function eq(value, other) {
  return value === other || value !== value && other !== other;
}
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */


var isArguments = baseIsArguments(function () {
  return arguments;
}()) ? baseIsArguments : function (value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */

var isArray = Array.isArray;
/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */

function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}
/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */


var isBuffer = nativeIsBuffer || stubFalse;
/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */

function isEqual(value, other) {
  return baseIsEqual(value, other);
}
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */


function isFunction(value) {
  if (!isObject(value)) {
    return false;
  } // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.


  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */


function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */


function isObject(value) {
  var type = _typeof(value);

  return value != null && (type == 'object' || type == 'function');
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */


function isObjectLike(value) {
  return value != null && _typeof(value) == 'object';
}
/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */


var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */

function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */


function stubArray() {
  return [];
}
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */


function stubFalse() {
  return false;
}

module.exports = isEqual;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15), __webpack_require__(28)(module)))

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = antd/es/progress;

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = antd/es/select;

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = antd/es/spin;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = get;

function get(entity, path) {
  var current = entity;

  for (var i = 0; i < path.length; i += 1) {
    if (current === null || current === undefined) {
      return undefined;
    }

    current = current[path[i]];
  }

  return current;
}

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return symbolObservablePonyfill; });
function symbolObservablePonyfill(root) {
  var result;
  var _Symbol = root.Symbol;

  if (typeof _Symbol === 'function') {
    if (_Symbol.observable) {
      result = _Symbol.observable;
    } else {
      result = _Symbol('observable');
      _Symbol.observable = result;
    }
  } else {
    result = '@@observable';
  }

  return result;
}
;

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */

/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = function () {
  if (typeof Map !== 'undefined') {
    return Map;
  }
  /**
   * Returns index in provided array that matches the specified key.
   *
   * @param {Array<Array>} arr
   * @param {*} key
   * @returns {number}
   */


  function getIndex(arr, key) {
    var result = -1;
    arr.some(function (entry, index) {
      if (entry[0] === key) {
        result = index;
        return true;
      }

      return false;
    });
    return result;
  }

  return (
    /** @class */
    function () {
      function class_1() {
        this.__entries__ = [];
      }

      Object.defineProperty(class_1.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function get() {
          return this.__entries__.length;
        },
        enumerable: true,
        configurable: true
      });
      /**
       * @param {*} key
       * @returns {*}
       */

      class_1.prototype.get = function (key) {
        var index = getIndex(this.__entries__, key);
        var entry = this.__entries__[index];
        return entry && entry[1];
      };
      /**
       * @param {*} key
       * @param {*} value
       * @returns {void}
       */


      class_1.prototype.set = function (key, value) {
        var index = getIndex(this.__entries__, key);

        if (~index) {
          this.__entries__[index][1] = value;
        } else {
          this.__entries__.push([key, value]);
        }
      };
      /**
       * @param {*} key
       * @returns {void}
       */


      class_1.prototype.delete = function (key) {
        var entries = this.__entries__;
        var index = getIndex(entries, key);

        if (~index) {
          entries.splice(index, 1);
        }
      };
      /**
       * @param {*} key
       * @returns {void}
       */


      class_1.prototype.has = function (key) {
        return !!~getIndex(this.__entries__, key);
      };
      /**
       * @returns {void}
       */


      class_1.prototype.clear = function () {
        this.__entries__.splice(0);
      };
      /**
       * @param {Function} callback
       * @param {*} [ctx=null]
       * @returns {void}
       */


      class_1.prototype.forEach = function (callback, ctx) {
        if (ctx === void 0) {
          ctx = null;
        }

        for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
          var entry = _a[_i];
          callback.call(ctx, entry[1], entry[0]);
        }
      };

      return class_1;
    }()
  );
}();
/**
 * Detects whether window and document objects are available in current environment.
 */


var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document; // Returns global object of a current environment.

var global$1 = function () {
  if (typeof global !== 'undefined' && global.Math === Math) {
    return global;
  }

  if (typeof self !== 'undefined' && self.Math === Math) {
    return self;
  }

  if (typeof window !== 'undefined' && window.Math === Math) {
    return window;
  } // eslint-disable-next-line no-new-func


  return Function('return this')();
}();
/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */


var requestAnimationFrame$1 = function () {
  if (typeof requestAnimationFrame === 'function') {
    // It's required to use a bounded function because IE sometimes throws
    // an "Invalid calling object" error if rAF is invoked without the global
    // object on the left hand side.
    return requestAnimationFrame.bind(global$1);
  }

  return function (callback) {
    return setTimeout(function () {
      return callback(Date.now());
    }, 1000 / 60);
  };
}(); // Defines minimum timeout before adding a trailing call.


var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */

function throttle(callback, delay) {
  var leadingCall = false,
      trailingCall = false,
      lastCallTime = 0;
  /**
   * Invokes the original callback function and schedules new invocation if
   * the "proxy" was called during current request.
   *
   * @returns {void}
   */

  function resolvePending() {
    if (leadingCall) {
      leadingCall = false;
      callback();
    }

    if (trailingCall) {
      proxy();
    }
  }
  /**
   * Callback invoked after the specified delay. It will further postpone
   * invocation of the original function delegating it to the
   * requestAnimationFrame.
   *
   * @returns {void}
   */


  function timeoutCallback() {
    requestAnimationFrame$1(resolvePending);
  }
  /**
   * Schedules invocation of the original function.
   *
   * @returns {void}
   */


  function proxy() {
    var timeStamp = Date.now();

    if (leadingCall) {
      // Reject immediately following calls.
      if (timeStamp - lastCallTime < trailingTimeout) {
        return;
      } // Schedule new call to be in invoked when the pending one is resolved.
      // This is important for "transitions" which never actually start
      // immediately so there is a chance that we might miss one if change
      // happens amids the pending invocation.


      trailingCall = true;
    } else {
      leadingCall = true;
      trailingCall = false;
      setTimeout(timeoutCallback, delay);
    }

    lastCallTime = timeStamp;
  }

  return proxy;
} // Minimum delay before invoking the update of observers.


var REFRESH_DELAY = 20; // A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.

var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight']; // Check if MutationObserver is available.

var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */

var ResizeObserverController =
/** @class */
function () {
  /**
   * Creates a new instance of ResizeObserverController.
   *
   * @private
   */
  function ResizeObserverController() {
    /**
     * Indicates whether DOM listeners have been added.
     *
     * @private {boolean}
     */
    this.connected_ = false;
    /**
     * Tells that controller has subscribed for Mutation Events.
     *
     * @private {boolean}
     */

    this.mutationEventsAdded_ = false;
    /**
     * Keeps reference to the instance of MutationObserver.
     *
     * @private {MutationObserver}
     */

    this.mutationsObserver_ = null;
    /**
     * A list of connected observers.
     *
     * @private {Array<ResizeObserverSPI>}
     */

    this.observers_ = [];
    this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
    this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
  }
  /**
   * Adds observer to observers list.
   *
   * @param {ResizeObserverSPI} observer - Observer to be added.
   * @returns {void}
   */


  ResizeObserverController.prototype.addObserver = function (observer) {
    if (!~this.observers_.indexOf(observer)) {
      this.observers_.push(observer);
    } // Add listeners if they haven't been added yet.


    if (!this.connected_) {
      this.connect_();
    }
  };
  /**
   * Removes observer from observers list.
   *
   * @param {ResizeObserverSPI} observer - Observer to be removed.
   * @returns {void}
   */


  ResizeObserverController.prototype.removeObserver = function (observer) {
    var observers = this.observers_;
    var index = observers.indexOf(observer); // Remove observer if it's present in registry.

    if (~index) {
      observers.splice(index, 1);
    } // Remove listeners if controller has no connected observers.


    if (!observers.length && this.connected_) {
      this.disconnect_();
    }
  };
  /**
   * Invokes the update of observers. It will continue running updates insofar
   * it detects changes.
   *
   * @returns {void}
   */


  ResizeObserverController.prototype.refresh = function () {
    var changesDetected = this.updateObservers_(); // Continue running updates if changes have been detected as there might
    // be future ones caused by CSS transitions.

    if (changesDetected) {
      this.refresh();
    }
  };
  /**
   * Updates every observer from observers list and notifies them of queued
   * entries.
   *
   * @private
   * @returns {boolean} Returns "true" if any observer has detected changes in
   *      dimensions of it's elements.
   */


  ResizeObserverController.prototype.updateObservers_ = function () {
    // Collect observers that have active observations.
    var activeObservers = this.observers_.filter(function (observer) {
      return observer.gatherActive(), observer.hasActive();
    }); // Deliver notifications in a separate cycle in order to avoid any
    // collisions between observers, e.g. when multiple instances of
    // ResizeObserver are tracking the same element and the callback of one
    // of them changes content dimensions of the observed target. Sometimes
    // this may result in notifications being blocked for the rest of observers.

    activeObservers.forEach(function (observer) {
      return observer.broadcastActive();
    });
    return activeObservers.length > 0;
  };
  /**
   * Initializes DOM listeners.
   *
   * @private
   * @returns {void}
   */


  ResizeObserverController.prototype.connect_ = function () {
    // Do nothing if running in a non-browser environment or if listeners
    // have been already added.
    if (!isBrowser || this.connected_) {
      return;
    } // Subscription to the "Transitionend" event is used as a workaround for
    // delayed transitions. This way it's possible to capture at least the
    // final state of an element.


    document.addEventListener('transitionend', this.onTransitionEnd_);
    window.addEventListener('resize', this.refresh);

    if (mutationObserverSupported) {
      this.mutationsObserver_ = new MutationObserver(this.refresh);
      this.mutationsObserver_.observe(document, {
        attributes: true,
        childList: true,
        characterData: true,
        subtree: true
      });
    } else {
      document.addEventListener('DOMSubtreeModified', this.refresh);
      this.mutationEventsAdded_ = true;
    }

    this.connected_ = true;
  };
  /**
   * Removes DOM listeners.
   *
   * @private
   * @returns {void}
   */


  ResizeObserverController.prototype.disconnect_ = function () {
    // Do nothing if running in a non-browser environment or if listeners
    // have been already removed.
    if (!isBrowser || !this.connected_) {
      return;
    }

    document.removeEventListener('transitionend', this.onTransitionEnd_);
    window.removeEventListener('resize', this.refresh);

    if (this.mutationsObserver_) {
      this.mutationsObserver_.disconnect();
    }

    if (this.mutationEventsAdded_) {
      document.removeEventListener('DOMSubtreeModified', this.refresh);
    }

    this.mutationsObserver_ = null;
    this.mutationEventsAdded_ = false;
    this.connected_ = false;
  };
  /**
   * "Transitionend" event handler.
   *
   * @private
   * @param {TransitionEvent} event
   * @returns {void}
   */


  ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
    var _b = _a.propertyName,
        propertyName = _b === void 0 ? '' : _b; // Detect whether transition may affect dimensions of an element.

    var isReflowProperty = transitionKeys.some(function (key) {
      return !!~propertyName.indexOf(key);
    });

    if (isReflowProperty) {
      this.refresh();
    }
  };
  /**
   * Returns instance of the ResizeObserverController.
   *
   * @returns {ResizeObserverController}
   */


  ResizeObserverController.getInstance = function () {
    if (!this.instance_) {
      this.instance_ = new ResizeObserverController();
    }

    return this.instance_;
  };
  /**
   * Holds reference to the controller's instance.
   *
   * @private {ResizeObserverController}
   */


  ResizeObserverController.instance_ = null;
  return ResizeObserverController;
}();
/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */


var defineConfigurable = function defineConfigurable(target, props) {
  for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
    var key = _a[_i];
    Object.defineProperty(target, key, {
      value: props[key],
      enumerable: false,
      writable: false,
      configurable: true
    });
  }

  return target;
};
/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */


var getWindowOf = function getWindowOf(target) {
  // Assume that the element is an instance of Node, which means that it
  // has the "ownerDocument" property from which we can retrieve a
  // corresponding global object.
  var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView; // Return the local global object if it's not possible extract one from
  // provided element.

  return ownerGlobal || global$1;
}; // Placeholder of an empty content rectangle.


var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */

function toFloat(value) {
  return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */


function getBordersSize(styles) {
  var positions = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    positions[_i - 1] = arguments[_i];
  }

  return positions.reduce(function (size, position) {
    var value = styles['border-' + position + '-width'];
    return size + toFloat(value);
  }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */


function getPaddings(styles) {
  var positions = ['top', 'right', 'bottom', 'left'];
  var paddings = {};

  for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
    var position = positions_1[_i];
    var value = styles['padding-' + position];
    paddings[position] = toFloat(value);
  }

  return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */


function getSVGContentRect(target) {
  var bbox = target.getBBox();
  return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */


function getHTMLElementContentRect(target) {
  // Client width & height properties can't be
  // used exclusively as they provide rounded values.
  var clientWidth = target.clientWidth,
      clientHeight = target.clientHeight; // By this condition we can catch all non-replaced inline, hidden and
  // detached elements. Though elements with width & height properties less
  // than 0.5 will be discarded as well.
  //
  // Without it we would need to implement separate methods for each of
  // those cases and it's not possible to perform a precise and performance
  // effective test for hidden elements. E.g. even jQuery's ':visible' filter
  // gives wrong results for elements with width & height less than 0.5.

  if (!clientWidth && !clientHeight) {
    return emptyRect;
  }

  var styles = getWindowOf(target).getComputedStyle(target);
  var paddings = getPaddings(styles);
  var horizPad = paddings.left + paddings.right;
  var vertPad = paddings.top + paddings.bottom; // Computed styles of width & height are being used because they are the
  // only dimensions available to JS that contain non-rounded values. It could
  // be possible to utilize the getBoundingClientRect if only it's data wasn't
  // affected by CSS transformations let alone paddings, borders and scroll bars.

  var width = toFloat(styles.width),
      height = toFloat(styles.height); // Width & height include paddings and borders when the 'border-box' box
  // model is applied (except for IE).

  if (styles.boxSizing === 'border-box') {
    // Following conditions are required to handle Internet Explorer which
    // doesn't include paddings and borders to computed CSS dimensions.
    //
    // We can say that if CSS dimensions + paddings are equal to the "client"
    // properties then it's either IE, and thus we don't need to subtract
    // anything, or an element merely doesn't have paddings/borders styles.
    if (Math.round(width + horizPad) !== clientWidth) {
      width -= getBordersSize(styles, 'left', 'right') + horizPad;
    }

    if (Math.round(height + vertPad) !== clientHeight) {
      height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
    }
  } // Following steps can't be applied to the document's root element as its
  // client[Width/Height] properties represent viewport area of the window.
  // Besides, it's as well not necessary as the <html> itself neither has
  // rendered scroll bars nor it can be clipped.


  if (!isDocumentElement(target)) {
    // In some browsers (only in Firefox, actually) CSS width & height
    // include scroll bars size which can be removed at this step as scroll
    // bars are the only difference between rounded dimensions + paddings
    // and "client" properties, though that is not always true in Chrome.
    var vertScrollbar = Math.round(width + horizPad) - clientWidth;
    var horizScrollbar = Math.round(height + vertPad) - clientHeight; // Chrome has a rather weird rounding of "client" properties.
    // E.g. for an element with content width of 314.2px it sometimes gives
    // the client width of 315px and for the width of 314.7px it may give
    // 314px. And it doesn't happen all the time. So just ignore this delta
    // as a non-relevant.

    if (Math.abs(vertScrollbar) !== 1) {
      width -= vertScrollbar;
    }

    if (Math.abs(horizScrollbar) !== 1) {
      height -= horizScrollbar;
    }
  }

  return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */


var isSVGGraphicsElement = function () {
  // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
  // interface.
  if (typeof SVGGraphicsElement !== 'undefined') {
    return function (target) {
      return target instanceof getWindowOf(target).SVGGraphicsElement;
    };
  } // If it's so, then check that element is at least an instance of the
  // SVGElement and that it has the "getBBox" method.
  // eslint-disable-next-line no-extra-parens


  return function (target) {
    return target instanceof getWindowOf(target).SVGElement && typeof target.getBBox === 'function';
  };
}();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */


function isDocumentElement(target) {
  return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */


function getContentRect(target) {
  if (!isBrowser) {
    return emptyRect;
  }

  if (isSVGGraphicsElement(target)) {
    return getSVGContentRect(target);
  }

  return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */


function createReadOnlyRect(_a) {
  var x = _a.x,
      y = _a.y,
      width = _a.width,
      height = _a.height; // If DOMRectReadOnly is available use it as a prototype for the rectangle.

  var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
  var rect = Object.create(Constr.prototype); // Rectangle's properties are not writable and non-enumerable.

  defineConfigurable(rect, {
    x: x,
    y: y,
    width: width,
    height: height,
    top: y,
    right: x + width,
    bottom: height + y,
    left: x
  });
  return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */


function createRectInit(x, y, width, height) {
  return {
    x: x,
    y: y,
    width: width,
    height: height
  };
}
/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */


var ResizeObservation =
/** @class */
function () {
  /**
   * Creates an instance of ResizeObservation.
   *
   * @param {Element} target - Element to be observed.
   */
  function ResizeObservation(target) {
    /**
     * Broadcasted width of content rectangle.
     *
     * @type {number}
     */
    this.broadcastWidth = 0;
    /**
     * Broadcasted height of content rectangle.
     *
     * @type {number}
     */

    this.broadcastHeight = 0;
    /**
     * Reference to the last observed content rectangle.
     *
     * @private {DOMRectInit}
     */

    this.contentRect_ = createRectInit(0, 0, 0, 0);
    this.target = target;
  }
  /**
   * Updates content rectangle and tells whether it's width or height properties
   * have changed since the last broadcast.
   *
   * @returns {boolean}
   */


  ResizeObservation.prototype.isActive = function () {
    var rect = getContentRect(this.target);
    this.contentRect_ = rect;
    return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
  };
  /**
   * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
   * from the corresponding properties of the last observed content rectangle.
   *
   * @returns {DOMRectInit} Last observed content rectangle.
   */


  ResizeObservation.prototype.broadcastRect = function () {
    var rect = this.contentRect_;
    this.broadcastWidth = rect.width;
    this.broadcastHeight = rect.height;
    return rect;
  };

  return ResizeObservation;
}();

var ResizeObserverEntry =
/** @class */
function () {
  /**
   * Creates an instance of ResizeObserverEntry.
   *
   * @param {Element} target - Element that is being observed.
   * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
   */
  function ResizeObserverEntry(target, rectInit) {
    var contentRect = createReadOnlyRect(rectInit); // According to the specification following properties are not writable
    // and are also not enumerable in the native implementation.
    //
    // Property accessors are not being used as they'd require to define a
    // private WeakMap storage which may cause memory leaks in browsers that
    // don't support this type of collections.

    defineConfigurable(this, {
      target: target,
      contentRect: contentRect
    });
  }

  return ResizeObserverEntry;
}();

var ResizeObserverSPI =
/** @class */
function () {
  /**
   * Creates a new instance of ResizeObserver.
   *
   * @param {ResizeObserverCallback} callback - Callback function that is invoked
   *      when one of the observed elements changes it's content dimensions.
   * @param {ResizeObserverController} controller - Controller instance which
   *      is responsible for the updates of observer.
   * @param {ResizeObserver} callbackCtx - Reference to the public
   *      ResizeObserver instance which will be passed to callback function.
   */
  function ResizeObserverSPI(callback, controller, callbackCtx) {
    /**
     * Collection of resize observations that have detected changes in dimensions
     * of elements.
     *
     * @private {Array<ResizeObservation>}
     */
    this.activeObservations_ = [];
    /**
     * Registry of the ResizeObservation instances.
     *
     * @private {Map<Element, ResizeObservation>}
     */

    this.observations_ = new MapShim();

    if (typeof callback !== 'function') {
      throw new TypeError('The callback provided as parameter 1 is not a function.');
    }

    this.callback_ = callback;
    this.controller_ = controller;
    this.callbackCtx_ = callbackCtx;
  }
  /**
   * Starts observing provided element.
   *
   * @param {Element} target - Element to be observed.
   * @returns {void}
   */


  ResizeObserverSPI.prototype.observe = function (target) {
    if (!arguments.length) {
      throw new TypeError('1 argument required, but only 0 present.');
    } // Do nothing if current environment doesn't have the Element interface.


    if (typeof Element === 'undefined' || !(Element instanceof Object)) {
      return;
    }

    if (!(target instanceof getWindowOf(target).Element)) {
      throw new TypeError('parameter 1 is not of type "Element".');
    }

    var observations = this.observations_; // Do nothing if element is already being observed.

    if (observations.has(target)) {
      return;
    }

    observations.set(target, new ResizeObservation(target));
    this.controller_.addObserver(this); // Force the update of observations.

    this.controller_.refresh();
  };
  /**
   * Stops observing provided element.
   *
   * @param {Element} target - Element to stop observing.
   * @returns {void}
   */


  ResizeObserverSPI.prototype.unobserve = function (target) {
    if (!arguments.length) {
      throw new TypeError('1 argument required, but only 0 present.');
    } // Do nothing if current environment doesn't have the Element interface.


    if (typeof Element === 'undefined' || !(Element instanceof Object)) {
      return;
    }

    if (!(target instanceof getWindowOf(target).Element)) {
      throw new TypeError('parameter 1 is not of type "Element".');
    }

    var observations = this.observations_; // Do nothing if element is not being observed.

    if (!observations.has(target)) {
      return;
    }

    observations.delete(target);

    if (!observations.size) {
      this.controller_.removeObserver(this);
    }
  };
  /**
   * Stops observing all elements.
   *
   * @returns {void}
   */


  ResizeObserverSPI.prototype.disconnect = function () {
    this.clearActive();
    this.observations_.clear();
    this.controller_.removeObserver(this);
  };
  /**
   * Collects observation instances the associated element of which has changed
   * it's content rectangle.
   *
   * @returns {void}
   */


  ResizeObserverSPI.prototype.gatherActive = function () {
    var _this = this;

    this.clearActive();
    this.observations_.forEach(function (observation) {
      if (observation.isActive()) {
        _this.activeObservations_.push(observation);
      }
    });
  };
  /**
   * Invokes initial callback function with a list of ResizeObserverEntry
   * instances collected from active resize observations.
   *
   * @returns {void}
   */


  ResizeObserverSPI.prototype.broadcastActive = function () {
    // Do nothing if observer doesn't have active observations.
    if (!this.hasActive()) {
      return;
    }

    var ctx = this.callbackCtx_; // Create ResizeObserverEntry instance for every active observation.

    var entries = this.activeObservations_.map(function (observation) {
      return new ResizeObserverEntry(observation.target, observation.broadcastRect());
    });
    this.callback_.call(ctx, entries, ctx);
    this.clearActive();
  };
  /**
   * Clears the collection of active observations.
   *
   * @returns {void}
   */


  ResizeObserverSPI.prototype.clearActive = function () {
    this.activeObservations_.splice(0);
  };
  /**
   * Tells whether observer has active observations.
   *
   * @returns {boolean}
   */


  ResizeObserverSPI.prototype.hasActive = function () {
    return this.activeObservations_.length > 0;
  };

  return ResizeObserverSPI;
}(); // Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.


var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */

var ResizeObserver =
/** @class */
function () {
  /**
   * Creates a new instance of ResizeObserver.
   *
   * @param {ResizeObserverCallback} callback - Callback that is invoked when
   *      dimensions of the observed elements change.
   */
  function ResizeObserver(callback) {
    if (!(this instanceof ResizeObserver)) {
      throw new TypeError('Cannot call a class as a function.');
    }

    if (!arguments.length) {
      throw new TypeError('1 argument required, but only 0 present.');
    }

    var controller = ResizeObserverController.getInstance();
    var observer = new ResizeObserverSPI(callback, controller, this);
    observers.set(this, observer);
  }

  return ResizeObserver;
}(); // Expose public methods of ResizeObserver.


['observe', 'unobserve', 'disconnect'].forEach(function (method) {
  ResizeObserver.prototype[method] = function () {
    var _a;

    return (_a = observers.get(this))[method].apply(_a, arguments);
  };
});

var index = function () {
  // Export existing implementation if available.
  if (typeof global$1.ResizeObserver !== 'undefined') {
    return global$1.ResizeObserver;
  }

  return ResizeObserver;
}();

/* harmony default export */ __webpack_exports__["a"] = (index);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)))

/***/ }),
/* 41 */,
/* 42 */,
/* 43 */
/***/ (function(module, exports) {

module.exports = antd/es/avatar/style;

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = antd/es/tooltip/style;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var tinycolor2_1 = __importDefault(__webpack_require__(47));

var hueStep = 2; // 色相阶梯

var saturationStep = 16; // 饱和度阶梯，浅色部分

var saturationStep2 = 5; // 饱和度阶梯，深色部分

var brightnessStep1 = 5; // 亮度阶梯，浅色部分

var brightnessStep2 = 15; // 亮度阶梯，深色部分

var lightColorCount = 5; // 浅色数量，主色上

var darkColorCount = 4; // 深色数量，主色下

function getHue(hsv, i, light) {
  var hue; // 根据色相不同，色相转向不同

  if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) {
    hue = light ? Math.round(hsv.h) - hueStep * i : Math.round(hsv.h) + hueStep * i;
  } else {
    hue = light ? Math.round(hsv.h) + hueStep * i : Math.round(hsv.h) - hueStep * i;
  }

  if (hue < 0) {
    hue += 360;
  } else if (hue >= 360) {
    hue -= 360;
  }

  return hue;
}

function getSaturation(hsv, i, light) {
  // grey color don't change saturation
  if (hsv.h === 0 && hsv.s === 0) {
    return hsv.s;
  }

  var saturation;

  if (light) {
    saturation = Math.round(hsv.s * 100) - saturationStep * i;
  } else if (i === darkColorCount) {
    saturation = Math.round(hsv.s * 100) + saturationStep;
  } else {
    saturation = Math.round(hsv.s * 100) + saturationStep2 * i;
  } // 边界值修正


  if (saturation > 100) {
    saturation = 100;
  } // 第一格的 s 限制在 6-10 之间


  if (light && i === lightColorCount && saturation > 10) {
    saturation = 10;
  }

  if (saturation < 6) {
    saturation = 6;
  }

  return saturation;
}

function getValue(hsv, i, light) {
  if (light) {
    return Math.round(hsv.v * 100) + brightnessStep1 * i;
  }

  return Math.round(hsv.v * 100) - brightnessStep2 * i;
}

function generate(color) {
  var patterns = [];
  var pColor = tinycolor2_1.default(color);

  for (var i = lightColorCount; i > 0; i -= 1) {
    var hsv = pColor.toHsv();
    var colorString = tinycolor2_1.default({
      h: getHue(hsv, i, true),
      s: getSaturation(hsv, i, true),
      v: getValue(hsv, i, true)
    }).toHexString();
    patterns.push(colorString);
  }

  patterns.push(pColor.toHexString());

  for (var i = 1; i <= darkColorCount; i += 1) {
    var hsv = pColor.toHsv();
    var colorString = tinycolor2_1.default({
      h: getHue(hsv, i),
      s: getSaturation(hsv, i),
      v: getValue(hsv, i)
    }).toHexString();
    patterns.push(colorString);
  }

  return patterns;
}

exports.default = generate;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// TinyColor v1.4.1
// https://github.com/bgrins/TinyColor
// Brian Grinstead, MIT License
(function (Math) {
  var trimLeft = /^\s+/,
      trimRight = /\s+$/,
      tinyCounter = 0,
      mathRound = Math.round,
      mathMin = Math.min,
      mathMax = Math.max,
      mathRandom = Math.random;

  function tinycolor(color, opts) {
    color = color ? color : '';
    opts = opts || {}; // If input is already a tinycolor, return itself

    if (color instanceof tinycolor) {
      return color;
    } // If we are called as a function, call using new instead


    if (!(this instanceof tinycolor)) {
      return new tinycolor(color, opts);
    }

    var rgb = inputToRGB(color);
    this._originalInput = color, this._r = rgb.r, this._g = rgb.g, this._b = rgb.b, this._a = rgb.a, this._roundA = mathRound(100 * this._a) / 100, this._format = opts.format || rgb.format;
    this._gradientType = opts.gradientType; // Don't let the range of [0,255] come back in [0,1].
    // Potentially lose a little bit of precision here, but will fix issues where
    // .5 gets interpreted as half of the total, instead of half of 1
    // If it was supposed to be 128, this was already taken care of by `inputToRgb`

    if (this._r < 1) {
      this._r = mathRound(this._r);
    }

    if (this._g < 1) {
      this._g = mathRound(this._g);
    }

    if (this._b < 1) {
      this._b = mathRound(this._b);
    }

    this._ok = rgb.ok;
    this._tc_id = tinyCounter++;
  }

  tinycolor.prototype = {
    isDark: function isDark() {
      return this.getBrightness() < 128;
    },
    isLight: function isLight() {
      return !this.isDark();
    },
    isValid: function isValid() {
      return this._ok;
    },
    getOriginalInput: function getOriginalInput() {
      return this._originalInput;
    },
    getFormat: function getFormat() {
      return this._format;
    },
    getAlpha: function getAlpha() {
      return this._a;
    },
    getBrightness: function getBrightness() {
      //http://www.w3.org/TR/AERT#color-contrast
      var rgb = this.toRgb();
      return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    },
    getLuminance: function getLuminance() {
      //http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
      var rgb = this.toRgb();
      var RsRGB, GsRGB, BsRGB, R, G, B;
      RsRGB = rgb.r / 255;
      GsRGB = rgb.g / 255;
      BsRGB = rgb.b / 255;

      if (RsRGB <= 0.03928) {
        R = RsRGB / 12.92;
      } else {
        R = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
      }

      if (GsRGB <= 0.03928) {
        G = GsRGB / 12.92;
      } else {
        G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
      }

      if (BsRGB <= 0.03928) {
        B = BsRGB / 12.92;
      } else {
        B = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
      }

      return 0.2126 * R + 0.7152 * G + 0.0722 * B;
    },
    setAlpha: function setAlpha(value) {
      this._a = boundAlpha(value);
      this._roundA = mathRound(100 * this._a) / 100;
      return this;
    },
    toHsv: function toHsv() {
      var hsv = rgbToHsv(this._r, this._g, this._b);
      return {
        h: hsv.h * 360,
        s: hsv.s,
        v: hsv.v,
        a: this._a
      };
    },
    toHsvString: function toHsvString() {
      var hsv = rgbToHsv(this._r, this._g, this._b);
      var h = mathRound(hsv.h * 360),
          s = mathRound(hsv.s * 100),
          v = mathRound(hsv.v * 100);
      return this._a == 1 ? "hsv(" + h + ", " + s + "%, " + v + "%)" : "hsva(" + h + ", " + s + "%, " + v + "%, " + this._roundA + ")";
    },
    toHsl: function toHsl() {
      var hsl = rgbToHsl(this._r, this._g, this._b);
      return {
        h: hsl.h * 360,
        s: hsl.s,
        l: hsl.l,
        a: this._a
      };
    },
    toHslString: function toHslString() {
      var hsl = rgbToHsl(this._r, this._g, this._b);
      var h = mathRound(hsl.h * 360),
          s = mathRound(hsl.s * 100),
          l = mathRound(hsl.l * 100);
      return this._a == 1 ? "hsl(" + h + ", " + s + "%, " + l + "%)" : "hsla(" + h + ", " + s + "%, " + l + "%, " + this._roundA + ")";
    },
    toHex: function toHex(allow3Char) {
      return rgbToHex(this._r, this._g, this._b, allow3Char);
    },
    toHexString: function toHexString(allow3Char) {
      return '#' + this.toHex(allow3Char);
    },
    toHex8: function toHex8(allow4Char) {
      return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
    },
    toHex8String: function toHex8String(allow4Char) {
      return '#' + this.toHex8(allow4Char);
    },
    toRgb: function toRgb() {
      return {
        r: mathRound(this._r),
        g: mathRound(this._g),
        b: mathRound(this._b),
        a: this._a
      };
    },
    toRgbString: function toRgbString() {
      return this._a == 1 ? "rgb(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ")" : "rgba(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ", " + this._roundA + ")";
    },
    toPercentageRgb: function toPercentageRgb() {
      return {
        r: mathRound(bound01(this._r, 255) * 100) + "%",
        g: mathRound(bound01(this._g, 255) * 100) + "%",
        b: mathRound(bound01(this._b, 255) * 100) + "%",
        a: this._a
      };
    },
    toPercentageRgbString: function toPercentageRgbString() {
      return this._a == 1 ? "rgb(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%)" : "rgba(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
    },
    toName: function toName() {
      if (this._a === 0) {
        return "transparent";
      }

      if (this._a < 1) {
        return false;
      }

      return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
    },
    toFilter: function toFilter(secondColor) {
      var hex8String = '#' + rgbaToArgbHex(this._r, this._g, this._b, this._a);
      var secondHex8String = hex8String;
      var gradientType = this._gradientType ? "GradientType = 1, " : "";

      if (secondColor) {
        var s = tinycolor(secondColor);
        secondHex8String = '#' + rgbaToArgbHex(s._r, s._g, s._b, s._a);
      }

      return "progid:DXImageTransform.Microsoft.gradient(" + gradientType + "startColorstr=" + hex8String + ",endColorstr=" + secondHex8String + ")";
    },
    toString: function toString(format) {
      var formatSet = !!format;
      format = format || this._format;
      var formattedString = false;
      var hasAlpha = this._a < 1 && this._a >= 0;
      var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "hex4" || format === "hex8" || format === "name");

      if (needsAlphaFormat) {
        // Special case for "transparent", all other non-alpha formats
        // will return rgba when there is transparency.
        if (format === "name" && this._a === 0) {
          return this.toName();
        }

        return this.toRgbString();
      }

      if (format === "rgb") {
        formattedString = this.toRgbString();
      }

      if (format === "prgb") {
        formattedString = this.toPercentageRgbString();
      }

      if (format === "hex" || format === "hex6") {
        formattedString = this.toHexString();
      }

      if (format === "hex3") {
        formattedString = this.toHexString(true);
      }

      if (format === "hex4") {
        formattedString = this.toHex8String(true);
      }

      if (format === "hex8") {
        formattedString = this.toHex8String();
      }

      if (format === "name") {
        formattedString = this.toName();
      }

      if (format === "hsl") {
        formattedString = this.toHslString();
      }

      if (format === "hsv") {
        formattedString = this.toHsvString();
      }

      return formattedString || this.toHexString();
    },
    clone: function clone() {
      return tinycolor(this.toString());
    },
    _applyModification: function _applyModification(fn, args) {
      var color = fn.apply(null, [this].concat([].slice.call(args)));
      this._r = color._r;
      this._g = color._g;
      this._b = color._b;
      this.setAlpha(color._a);
      return this;
    },
    lighten: function lighten() {
      return this._applyModification(_lighten, arguments);
    },
    brighten: function brighten() {
      return this._applyModification(_brighten, arguments);
    },
    darken: function darken() {
      return this._applyModification(_darken, arguments);
    },
    desaturate: function desaturate() {
      return this._applyModification(_desaturate, arguments);
    },
    saturate: function saturate() {
      return this._applyModification(_saturate, arguments);
    },
    greyscale: function greyscale() {
      return this._applyModification(_greyscale, arguments);
    },
    spin: function spin() {
      return this._applyModification(_spin, arguments);
    },
    _applyCombination: function _applyCombination(fn, args) {
      return fn.apply(null, [this].concat([].slice.call(args)));
    },
    analogous: function analogous() {
      return this._applyCombination(_analogous, arguments);
    },
    complement: function complement() {
      return this._applyCombination(_complement, arguments);
    },
    monochromatic: function monochromatic() {
      return this._applyCombination(_monochromatic, arguments);
    },
    splitcomplement: function splitcomplement() {
      return this._applyCombination(_splitcomplement, arguments);
    },
    triad: function triad() {
      return this._applyCombination(_triad, arguments);
    },
    tetrad: function tetrad() {
      return this._applyCombination(_tetrad, arguments);
    }
  }; // If input is an object, force 1 into "1.0" to handle ratios properly
  // String input requires "1.0" as input, so 1 will be treated as 1

  tinycolor.fromRatio = function (color, opts) {
    if (_typeof(color) == "object") {
      var newColor = {};

      for (var i in color) {
        if (color.hasOwnProperty(i)) {
          if (i === "a") {
            newColor[i] = color[i];
          } else {
            newColor[i] = convertToPercentage(color[i]);
          }
        }
      }

      color = newColor;
    }

    return tinycolor(color, opts);
  }; // Given a string or object, convert that input to RGB
  // Possible string inputs:
  //
  //     "red"
  //     "#f00" or "f00"
  //     "#ff0000" or "ff0000"
  //     "#ff000000" or "ff000000"
  //     "rgb 255 0 0" or "rgb (255, 0, 0)"
  //     "rgb 1.0 0 0" or "rgb (1, 0, 0)"
  //     "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
  //     "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
  //     "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
  //     "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
  //     "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
  //


  function inputToRGB(color) {
    var rgb = {
      r: 0,
      g: 0,
      b: 0
    };
    var a = 1;
    var s = null;
    var v = null;
    var l = null;
    var ok = false;
    var format = false;

    if (typeof color == "string") {
      color = stringInputToObject(color);
    }

    if (_typeof(color) == "object") {
      if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
        rgb = rgbToRgb(color.r, color.g, color.b);
        ok = true;
        format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
      } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
        s = convertToPercentage(color.s);
        v = convertToPercentage(color.v);
        rgb = hsvToRgb(color.h, s, v);
        ok = true;
        format = "hsv";
      } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
        s = convertToPercentage(color.s);
        l = convertToPercentage(color.l);
        rgb = hslToRgb(color.h, s, l);
        ok = true;
        format = "hsl";
      }

      if (color.hasOwnProperty("a")) {
        a = color.a;
      }
    }

    a = boundAlpha(a);
    return {
      ok: ok,
      format: color.format || format,
      r: mathMin(255, mathMax(rgb.r, 0)),
      g: mathMin(255, mathMax(rgb.g, 0)),
      b: mathMin(255, mathMax(rgb.b, 0)),
      a: a
    };
  } // Conversion Functions
  // --------------------
  // `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
  // <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>
  // `rgbToRgb`
  // Handle bounds / percentage checking to conform to CSS color spec
  // <http://www.w3.org/TR/css3-color/>
  // *Assumes:* r, g, b in [0, 255] or [0, 1]
  // *Returns:* { r, g, b } in [0, 255]


  function rgbToRgb(r, g, b) {
    return {
      r: bound01(r, 255) * 255,
      g: bound01(g, 255) * 255,
      b: bound01(b, 255) * 255
    };
  } // `rgbToHsl`
  // Converts an RGB color value to HSL.
  // *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
  // *Returns:* { h, s, l } in [0,1]


  function rgbToHsl(r, g, b) {
    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);
    var max = mathMax(r, g, b),
        min = mathMin(r, g, b);
    var h,
        s,
        l = (max + min) / 2;

    if (max == min) {
      h = s = 0; // achromatic
    } else {
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;

        case g:
          h = (b - r) / d + 2;
          break;

        case b:
          h = (r - g) / d + 4;
          break;
      }

      h /= 6;
    }

    return {
      h: h,
      s: s,
      l: l
    };
  } // `hslToRgb`
  // Converts an HSL color value to RGB.
  // *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
  // *Returns:* { r, g, b } in the set [0, 255]


  function hslToRgb(h, s, l) {
    var r, g, b;
    h = bound01(h, 360);
    s = bound01(s, 100);
    l = bound01(l, 100);

    function hue2rgb(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    }

    if (s === 0) {
      r = g = b = l; // achromatic
    } else {
      var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      var p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }

    return {
      r: r * 255,
      g: g * 255,
      b: b * 255
    };
  } // `rgbToHsv`
  // Converts an RGB color value to HSV
  // *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
  // *Returns:* { h, s, v } in [0,1]


  function rgbToHsv(r, g, b) {
    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);
    var max = mathMax(r, g, b),
        min = mathMin(r, g, b);
    var h,
        s,
        v = max;
    var d = max - min;
    s = max === 0 ? 0 : d / max;

    if (max == min) {
      h = 0; // achromatic
    } else {
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;

        case g:
          h = (b - r) / d + 2;
          break;

        case b:
          h = (r - g) / d + 4;
          break;
      }

      h /= 6;
    }

    return {
      h: h,
      s: s,
      v: v
    };
  } // `hsvToRgb`
  // Converts an HSV color value to RGB.
  // *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
  // *Returns:* { r, g, b } in the set [0, 255]


  function hsvToRgb(h, s, v) {
    h = bound01(h, 360) * 6;
    s = bound01(s, 100);
    v = bound01(v, 100);
    var i = Math.floor(h),
        f = h - i,
        p = v * (1 - s),
        q = v * (1 - f * s),
        t = v * (1 - (1 - f) * s),
        mod = i % 6,
        r = [v, q, p, p, t, v][mod],
        g = [t, v, v, q, p, p][mod],
        b = [p, p, t, v, v, q][mod];
    return {
      r: r * 255,
      g: g * 255,
      b: b * 255
    };
  } // `rgbToHex`
  // Converts an RGB color to hex
  // Assumes r, g, and b are contained in the set [0, 255]
  // Returns a 3 or 6 character hex


  function rgbToHex(r, g, b, allow3Char) {
    var hex = [pad2(mathRound(r).toString(16)), pad2(mathRound(g).toString(16)), pad2(mathRound(b).toString(16))]; // Return a 3 character hex if possible

    if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
      return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }

    return hex.join("");
  } // `rgbaToHex`
  // Converts an RGBA color plus alpha transparency to hex
  // Assumes r, g, b are contained in the set [0, 255] and
  // a in [0, 1]. Returns a 4 or 8 character rgba hex


  function rgbaToHex(r, g, b, a, allow4Char) {
    var hex = [pad2(mathRound(r).toString(16)), pad2(mathRound(g).toString(16)), pad2(mathRound(b).toString(16)), pad2(convertDecimalToHex(a))]; // Return a 4 character hex if possible

    if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) {
      return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
    }

    return hex.join("");
  } // `rgbaToArgbHex`
  // Converts an RGBA color to an ARGB Hex8 string
  // Rarely used, but required for "toFilter()"


  function rgbaToArgbHex(r, g, b, a) {
    var hex = [pad2(convertDecimalToHex(a)), pad2(mathRound(r).toString(16)), pad2(mathRound(g).toString(16)), pad2(mathRound(b).toString(16))];
    return hex.join("");
  } // `equals`
  // Can be called with any tinycolor input


  tinycolor.equals = function (color1, color2) {
    if (!color1 || !color2) {
      return false;
    }

    return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
  };

  tinycolor.random = function () {
    return tinycolor.fromRatio({
      r: mathRandom(),
      g: mathRandom(),
      b: mathRandom()
    });
  }; // Modification Functions
  // ----------------------
  // Thanks to less.js for some of the basics here
  // <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>


  function _desaturate(color, amount) {
    amount = amount === 0 ? 0 : amount || 10;
    var hsl = tinycolor(color).toHsl();
    hsl.s -= amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
  }

  function _saturate(color, amount) {
    amount = amount === 0 ? 0 : amount || 10;
    var hsl = tinycolor(color).toHsl();
    hsl.s += amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
  }

  function _greyscale(color) {
    return tinycolor(color).desaturate(100);
  }

  function _lighten(color, amount) {
    amount = amount === 0 ? 0 : amount || 10;
    var hsl = tinycolor(color).toHsl();
    hsl.l += amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
  }

  function _brighten(color, amount) {
    amount = amount === 0 ? 0 : amount || 10;
    var rgb = tinycolor(color).toRgb();
    rgb.r = mathMax(0, mathMin(255, rgb.r - mathRound(255 * -(amount / 100))));
    rgb.g = mathMax(0, mathMin(255, rgb.g - mathRound(255 * -(amount / 100))));
    rgb.b = mathMax(0, mathMin(255, rgb.b - mathRound(255 * -(amount / 100))));
    return tinycolor(rgb);
  }

  function _darken(color, amount) {
    amount = amount === 0 ? 0 : amount || 10;
    var hsl = tinycolor(color).toHsl();
    hsl.l -= amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
  } // Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
  // Values outside of this range will be wrapped into this range.


  function _spin(color, amount) {
    var hsl = tinycolor(color).toHsl();
    var hue = (hsl.h + amount) % 360;
    hsl.h = hue < 0 ? 360 + hue : hue;
    return tinycolor(hsl);
  } // Combination Functions
  // ---------------------
  // Thanks to jQuery xColor for some of the ideas behind these
  // <https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js>


  function _complement(color) {
    var hsl = tinycolor(color).toHsl();
    hsl.h = (hsl.h + 180) % 360;
    return tinycolor(hsl);
  }

  function _triad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [tinycolor(color), tinycolor({
      h: (h + 120) % 360,
      s: hsl.s,
      l: hsl.l
    }), tinycolor({
      h: (h + 240) % 360,
      s: hsl.s,
      l: hsl.l
    })];
  }

  function _tetrad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [tinycolor(color), tinycolor({
      h: (h + 90) % 360,
      s: hsl.s,
      l: hsl.l
    }), tinycolor({
      h: (h + 180) % 360,
      s: hsl.s,
      l: hsl.l
    }), tinycolor({
      h: (h + 270) % 360,
      s: hsl.s,
      l: hsl.l
    })];
  }

  function _splitcomplement(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [tinycolor(color), tinycolor({
      h: (h + 72) % 360,
      s: hsl.s,
      l: hsl.l
    }), tinycolor({
      h: (h + 216) % 360,
      s: hsl.s,
      l: hsl.l
    })];
  }

  function _analogous(color, results, slices) {
    results = results || 6;
    slices = slices || 30;
    var hsl = tinycolor(color).toHsl();
    var part = 360 / slices;
    var ret = [tinycolor(color)];

    for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results;) {
      hsl.h = (hsl.h + part) % 360;
      ret.push(tinycolor(hsl));
    }

    return ret;
  }

  function _monochromatic(color, results) {
    results = results || 6;
    var hsv = tinycolor(color).toHsv();
    var h = hsv.h,
        s = hsv.s,
        v = hsv.v;
    var ret = [];
    var modification = 1 / results;

    while (results--) {
      ret.push(tinycolor({
        h: h,
        s: s,
        v: v
      }));
      v = (v + modification) % 1;
    }

    return ret;
  } // Utility Functions
  // ---------------------


  tinycolor.mix = function (color1, color2, amount) {
    amount = amount === 0 ? 0 : amount || 50;
    var rgb1 = tinycolor(color1).toRgb();
    var rgb2 = tinycolor(color2).toRgb();
    var p = amount / 100;
    var rgba = {
      r: (rgb2.r - rgb1.r) * p + rgb1.r,
      g: (rgb2.g - rgb1.g) * p + rgb1.g,
      b: (rgb2.b - rgb1.b) * p + rgb1.b,
      a: (rgb2.a - rgb1.a) * p + rgb1.a
    };
    return tinycolor(rgba);
  }; // Readability Functions
  // ---------------------
  // <http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef (WCAG Version 2)
  // `contrast`
  // Analyze the 2 colors and returns the color contrast defined by (WCAG Version 2)


  tinycolor.readability = function (color1, color2) {
    var c1 = tinycolor(color1);
    var c2 = tinycolor(color2);
    return (Math.max(c1.getLuminance(), c2.getLuminance()) + 0.05) / (Math.min(c1.getLuminance(), c2.getLuminance()) + 0.05);
  }; // `isReadable`
  // Ensure that foreground and background color combinations meet WCAG2 guidelines.
  // The third argument is an optional Object.
  //      the 'level' property states 'AA' or 'AAA' - if missing or invalid, it defaults to 'AA';
  //      the 'size' property states 'large' or 'small' - if missing or invalid, it defaults to 'small'.
  // If the entire object is absent, isReadable defaults to {level:"AA",size:"small"}.
  // *Example*
  //    tinycolor.isReadable("#000", "#111") => false
  //    tinycolor.isReadable("#000", "#111",{level:"AA",size:"large"}) => false


  tinycolor.isReadable = function (color1, color2, wcag2) {
    var readability = tinycolor.readability(color1, color2);
    var wcag2Parms, out;
    out = false;
    wcag2Parms = validateWCAG2Parms(wcag2);

    switch (wcag2Parms.level + wcag2Parms.size) {
      case "AAsmall":
      case "AAAlarge":
        out = readability >= 4.5;
        break;

      case "AAlarge":
        out = readability >= 3;
        break;

      case "AAAsmall":
        out = readability >= 7;
        break;
    }

    return out;
  }; // `mostReadable`
  // Given a base color and a list of possible foreground or background
  // colors for that base, returns the most readable color.
  // Optionally returns Black or White if the most readable color is unreadable.
  // *Example*
  //    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:false}).toHexString(); // "#112255"
  //    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:true}).toHexString();  // "#ffffff"
  //    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"large"}).toHexString(); // "#faf3f3"
  //    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"small"}).toHexString(); // "#ffffff"


  tinycolor.mostReadable = function (baseColor, colorList, args) {
    var bestColor = null;
    var bestScore = 0;
    var readability;
    var includeFallbackColors, level, size;
    args = args || {};
    includeFallbackColors = args.includeFallbackColors;
    level = args.level;
    size = args.size;

    for (var i = 0; i < colorList.length; i++) {
      readability = tinycolor.readability(baseColor, colorList[i]);

      if (readability > bestScore) {
        bestScore = readability;
        bestColor = tinycolor(colorList[i]);
      }
    }

    if (tinycolor.isReadable(baseColor, bestColor, {
      "level": level,
      "size": size
    }) || !includeFallbackColors) {
      return bestColor;
    } else {
      args.includeFallbackColors = false;
      return tinycolor.mostReadable(baseColor, ["#fff", "#000"], args);
    }
  }; // Big List of Colors
  // ------------------
  // <http://www.w3.org/TR/css3-color/#svg-color>


  var names = tinycolor.names = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "0ff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000",
    blanchedalmond: "ffebcd",
    blue: "00f",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    burntsienna: "ea7e5d",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "0ff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkgrey: "a9a9a9",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkslategrey: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dimgrey: "696969",
    dodgerblue: "1e90ff",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "f0f",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    grey: "808080",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgray: "d3d3d3",
    lightgreen: "90ee90",
    lightgrey: "d3d3d3",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslategray: "789",
    lightslategrey: "789",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "0f0",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "f0f",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370db",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "db7093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    rebeccapurple: "663399",
    red: "f00",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    slategrey: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    wheat: "f5deb3",
    white: "fff",
    whitesmoke: "f5f5f5",
    yellow: "ff0",
    yellowgreen: "9acd32"
  }; // Make it easy to access colors via `hexNames[hex]`

  var hexNames = tinycolor.hexNames = flip(names); // Utilities
  // ---------
  // `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`

  function flip(o) {
    var flipped = {};

    for (var i in o) {
      if (o.hasOwnProperty(i)) {
        flipped[o[i]] = i;
      }
    }

    return flipped;
  } // Return a valid alpha value [0,1] with all invalid values being set to 1


  function boundAlpha(a) {
    a = parseFloat(a);

    if (isNaN(a) || a < 0 || a > 1) {
      a = 1;
    }

    return a;
  } // Take input from [0, n] and return it as [0, 1]


  function bound01(n, max) {
    if (isOnePointZero(n)) {
      n = "100%";
    }

    var processPercent = isPercentage(n);
    n = mathMin(max, mathMax(0, parseFloat(n))); // Automatically convert percentage into number

    if (processPercent) {
      n = parseInt(n * max, 10) / 100;
    } // Handle floating point rounding errors


    if (Math.abs(n - max) < 0.000001) {
      return 1;
    } // Convert into [0, 1] range if it isn't already


    return n % max / parseFloat(max);
  } // Force a number between 0 and 1


  function clamp01(val) {
    return mathMin(1, mathMax(0, val));
  } // Parse a base-16 hex value into a base-10 integer


  function parseIntFromHex(val) {
    return parseInt(val, 16);
  } // Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
  // <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>


  function isOnePointZero(n) {
    return typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1;
  } // Check to see if string passed in is a percentage


  function isPercentage(n) {
    return typeof n === "string" && n.indexOf('%') != -1;
  } // Force a hex value to have 2 characters


  function pad2(c) {
    return c.length == 1 ? '0' + c : '' + c;
  } // Replace a decimal with it's percentage value


  function convertToPercentage(n) {
    if (n <= 1) {
      n = n * 100 + "%";
    }

    return n;
  } // Converts a decimal to a hex value


  function convertDecimalToHex(d) {
    return Math.round(parseFloat(d) * 255).toString(16);
  } // Converts a hex value to a decimal


  function convertHexToDecimal(h) {
    return parseIntFromHex(h) / 255;
  }

  var matchers = function () {
    // <http://www.w3.org/TR/css3-values/#integers>
    var CSS_INTEGER = "[-\\+]?\\d+%?"; // <http://www.w3.org/TR/css3-values/#number-value>

    var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?"; // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.

    var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")"; // Actual matching.
    // Parentheses and commas are optional, but not required.
    // Whitespace can take the place of commas or opening paren

    var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
    var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
    return {
      CSS_UNIT: new RegExp(CSS_UNIT),
      rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
      rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
      hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
      hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
      hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
      hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
      hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
      hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
    };
  }(); // `isValidCSSUnit`
  // Take in a single string / number and check to see if it looks like a CSS unit
  // (see `matchers` above for definition).


  function isValidCSSUnit(color) {
    return !!matchers.CSS_UNIT.exec(color);
  } // `stringInputToObject`
  // Permissive string parsing.  Take in a number of formats, and output an object
  // based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`


  function stringInputToObject(color) {
    color = color.replace(trimLeft, '').replace(trimRight, '').toLowerCase();
    var named = false;

    if (names[color]) {
      color = names[color];
      named = true;
    } else if (color == 'transparent') {
      return {
        r: 0,
        g: 0,
        b: 0,
        a: 0,
        format: "name"
      };
    } // Try to match string input using regular expressions.
    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
    // Just return an object and let the conversion functions handle that.
    // This way the result will be the same whether the tinycolor is initialized with string or object.


    var match;

    if (match = matchers.rgb.exec(color)) {
      return {
        r: match[1],
        g: match[2],
        b: match[3]
      };
    }

    if (match = matchers.rgba.exec(color)) {
      return {
        r: match[1],
        g: match[2],
        b: match[3],
        a: match[4]
      };
    }

    if (match = matchers.hsl.exec(color)) {
      return {
        h: match[1],
        s: match[2],
        l: match[3]
      };
    }

    if (match = matchers.hsla.exec(color)) {
      return {
        h: match[1],
        s: match[2],
        l: match[3],
        a: match[4]
      };
    }

    if (match = matchers.hsv.exec(color)) {
      return {
        h: match[1],
        s: match[2],
        v: match[3]
      };
    }

    if (match = matchers.hsva.exec(color)) {
      return {
        h: match[1],
        s: match[2],
        v: match[3],
        a: match[4]
      };
    }

    if (match = matchers.hex8.exec(color)) {
      return {
        r: parseIntFromHex(match[1]),
        g: parseIntFromHex(match[2]),
        b: parseIntFromHex(match[3]),
        a: convertHexToDecimal(match[4]),
        format: named ? "name" : "hex8"
      };
    }

    if (match = matchers.hex6.exec(color)) {
      return {
        r: parseIntFromHex(match[1]),
        g: parseIntFromHex(match[2]),
        b: parseIntFromHex(match[3]),
        format: named ? "name" : "hex"
      };
    }

    if (match = matchers.hex4.exec(color)) {
      return {
        r: parseIntFromHex(match[1] + '' + match[1]),
        g: parseIntFromHex(match[2] + '' + match[2]),
        b: parseIntFromHex(match[3] + '' + match[3]),
        a: convertHexToDecimal(match[4] + '' + match[4]),
        format: named ? "name" : "hex8"
      };
    }

    if (match = matchers.hex3.exec(color)) {
      return {
        r: parseIntFromHex(match[1] + '' + match[1]),
        g: parseIntFromHex(match[2] + '' + match[2]),
        b: parseIntFromHex(match[3] + '' + match[3]),
        format: named ? "name" : "hex"
      };
    }

    return false;
  }

  function validateWCAG2Parms(parms) {
    // return valid WCAG2 parms for isReadable.
    // If input parms are invalid, return {"level":"AA", "size":"small"}
    var level, size;
    parms = parms || {
      "level": "AA",
      "size": "small"
    };
    level = (parms.level || "AA").toUpperCase();
    size = (parms.size || "small").toLowerCase();

    if (level !== "AA" && level !== "AAA") {
      level = "AA";
    }

    if (size !== "small" && size !== "large") {
      size = "small";
    }

    return {
      "level": level,
      "size": size
    };
  } // Node: Export function


  if ( true && module.exports) {
    module.exports = tinycolor;
  } // AMD/requirejs: Define the module
  else if (true) {
      !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
        return tinycolor;
      }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } // Browser: Expose to window
    else {}
})(Math);

/***/ }),
/* 48 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = antd/es/progress/style;

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = antd/es/badge/style;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = antd/es/select/style;

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = antd/es/spin/style;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var b = "function" === typeof Symbol && Symbol.for,
    c = b ? Symbol.for("react.element") : 60103,
    d = b ? Symbol.for("react.portal") : 60106,
    e = b ? Symbol.for("react.fragment") : 60107,
    f = b ? Symbol.for("react.strict_mode") : 60108,
    g = b ? Symbol.for("react.profiler") : 60114,
    h = b ? Symbol.for("react.provider") : 60109,
    k = b ? Symbol.for("react.context") : 60110,
    l = b ? Symbol.for("react.async_mode") : 60111,
    m = b ? Symbol.for("react.concurrent_mode") : 60111,
    n = b ? Symbol.for("react.forward_ref") : 60112,
    p = b ? Symbol.for("react.suspense") : 60113,
    q = b ? Symbol.for("react.suspense_list") : 60120,
    r = b ? Symbol.for("react.memo") : 60115,
    t = b ? Symbol.for("react.lazy") : 60116,
    v = b ? Symbol.for("react.block") : 60121,
    w = b ? Symbol.for("react.fundamental") : 60117,
    x = b ? Symbol.for("react.responder") : 60118,
    y = b ? Symbol.for("react.scope") : 60119;

function z(a) {
  if ("object" === _typeof(a) && null !== a) {
    var u = a.$$typeof;

    switch (u) {
      case c:
        switch (a = a.type, a) {
          case l:
          case m:
          case e:
          case g:
          case f:
          case p:
            return a;

          default:
            switch (a = a && a.$$typeof, a) {
              case k:
              case n:
              case t:
              case r:
              case h:
                return a;

              default:
                return u;
            }

        }

      case d:
        return u;
    }
  }
}

function A(a) {
  return z(a) === m;
}

exports.AsyncMode = l;
exports.ConcurrentMode = m;
exports.ContextConsumer = k;
exports.ContextProvider = h;
exports.Element = c;
exports.ForwardRef = n;
exports.Fragment = e;
exports.Lazy = t;
exports.Memo = r;
exports.Portal = d;
exports.Profiler = g;
exports.StrictMode = f;
exports.Suspense = p;

exports.isAsyncMode = function (a) {
  return A(a) || z(a) === l;
};

exports.isConcurrentMode = A;

exports.isContextConsumer = function (a) {
  return z(a) === k;
};

exports.isContextProvider = function (a) {
  return z(a) === h;
};

exports.isElement = function (a) {
  return "object" === _typeof(a) && null !== a && a.$$typeof === c;
};

exports.isForwardRef = function (a) {
  return z(a) === n;
};

exports.isFragment = function (a) {
  return z(a) === e;
};

exports.isLazy = function (a) {
  return z(a) === t;
};

exports.isMemo = function (a) {
  return z(a) === r;
};

exports.isPortal = function (a) {
  return z(a) === d;
};

exports.isProfiler = function (a) {
  return z(a) === g;
};

exports.isStrictMode = function (a) {
  return z(a) === f;
};

exports.isSuspense = function (a) {
  return z(a) === p;
};

exports.isValidElementType = function (a) {
  return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === _typeof(a) && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
};

exports.typeOf = z;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "TableDropdown", function() { return /* reexport */ component_Dropdown; });
__webpack_require__.d(__webpack_exports__, "TableStatus", function() { return /* reexport */ es_components_Status; });
__webpack_require__.d(__webpack_exports__, "Search", function() { return /* reexport */ src_Form; });
__webpack_require__.d(__webpack_exports__, "IntlProvider", function() { return /* reexport */ ConfigProvider; });
__webpack_require__.d(__webpack_exports__, "ConfigProvider", function() { return /* reexport */ ConfigProvider; });
__webpack_require__.d(__webpack_exports__, "IntlConsumer", function() { return /* reexport */ ConfigConsumer; });
__webpack_require__.d(__webpack_exports__, "ConfigConsumer", function() { return /* reexport */ ConfigConsumer; });
__webpack_require__.d(__webpack_exports__, "zhCNIntl", function() { return /* reexport */ zhCNIntl; });
__webpack_require__.d(__webpack_exports__, "IndexColumn", function() { return /* reexport */ es_components_IndexColumn; });
__webpack_require__.d(__webpack_exports__, "defaultRenderText", function() { return /* reexport */ src_defaultRender; });
__webpack_require__.d(__webpack_exports__, "createIntl", function() { return /* reexport */ createIntl; });
__webpack_require__.d(__webpack_exports__, "enUSIntl", function() { return /* reexport */ enUSIntl; });
__webpack_require__.d(__webpack_exports__, "viVNIntl", function() { return /* reexport */ viVNIntl; });
__webpack_require__.d(__webpack_exports__, "itITIntl", function() { return /* reexport */ itITIntl; });
__webpack_require__.d(__webpack_exports__, "jaJPIntl", function() { return /* reexport */ jaJPIntl; });
__webpack_require__.d(__webpack_exports__, "esESIntl", function() { return /* reexport */ esESIntl; });
__webpack_require__.d(__webpack_exports__, "ruRUIntl", function() { return /* reexport */ ruRUIntl; });
__webpack_require__.d(__webpack_exports__, "msMYIntl", function() { return /* reexport */ msMYIntl; });
__webpack_require__.d(__webpack_exports__, "zhTWIntl", function() { return /* reexport */ zhTWIntl; });
__webpack_require__.d(__webpack_exports__, "frFRIntl", function() { return /* reexport */ frFRIntl; });
__webpack_require__.d(__webpack_exports__, "ptBRIntl", function() { return /* reexport */ ptBRIntl; });
__webpack_require__.d(__webpack_exports__, "trTRIntl", function() { return /* reexport */ trTRIntl; });

// NAMESPACE OBJECT: ./node_modules/react-dnd-html5-backend/dist/esm/NativeTypes.js
var NativeTypes_namespaceObject = {};
__webpack_require__.r(NativeTypes_namespaceObject);
__webpack_require__.d(NativeTypes_namespaceObject, "FILE", function() { return FILE; });
__webpack_require__.d(NativeTypes_namespaceObject, "URL", function() { return URL; });
__webpack_require__.d(NativeTypes_namespaceObject, "TEXT", function() { return TEXT; });

// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(0);
var external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_);

// EXTERNAL MODULE: external "antd/lib/config-provider"
var config_provider_ = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/rc-util/lib/warning.js
var lib_warning = __webpack_require__(23);

// CONCATENATED MODULE: ./packages/provider/es/locale/zh_CN.js
/* harmony default export */ var zh_CN = ({
  moneySymbol: '￥',
  tableForm: {
    search: '查询',
    reset: '重置',
    submit: '提交',
    collapsed: '展开',
    expand: '收起',
    inputPlaceholder: '请输入',
    selectPlaceholder: '请选择'
  },
  alert: {
    clear: '清空',
    selected: '已选择',
    item: '项'
  },
  pagination: {
    total: {
      range: '第',
      total: '条/总共',
      item: '条'
    }
  },
  tableToolBar: {
    leftPin: '固定在列首',
    rightPin: '固定在列尾',
    noPin: '不固定',
    leftFixedTitle: '固定在左侧',
    rightFixedTitle: '固定在右侧',
    noFixedTitle: '不固定',
    reset: '重置',
    columnDisplay: '列展示',
    columnSetting: '列设置',
    fullScreen: '全屏',
    exitFullScreen: '退出全屏',
    reload: '刷新',
    density: '密度',
    densityDefault: '正常',
    densityLarger: '默认',
    densityMiddle: '中等',
    densitySmall: '紧凑'
  }
});
// CONCATENATED MODULE: ./packages/provider/es/locale/en_US.js
/* harmony default export */ var en_US = ({
  moneySymbol: '$',
  tableForm: {
    search: 'Query',
    reset: 'Reset',
    submit: 'Submit',
    collapsed: 'Expand',
    expand: 'Collapse',
    inputPlaceholder: 'Please enter',
    selectPlaceholder: 'Please select'
  },
  alert: {
    clear: 'Clear',
    selected: 'Selected',
    item: 'Item'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'of',
      item: 'items'
    }
  },
  tableToolBar: {
    leftPin: 'Pin to left',
    rightPin: 'Pin to right',
    noPin: 'Unpinned',
    leftFixedTitle: 'Fixed the left',
    rightFixedTitle: 'Fixed the right',
    noFixedTitle: 'Not Fixed',
    reset: 'Reset',
    columnDisplay: 'Column Display',
    columnSetting: 'Settings',
    fullScreen: 'Full Screen',
    exitFullScreen: 'Exit Full Screen',
    reload: 'Refresh',
    density: 'Density',
    densityDefault: 'Default',
    densityLarger: 'Larger',
    densityMiddle: 'Middle',
    densitySmall: 'Compact'
  }
});
// CONCATENATED MODULE: ./packages/provider/es/locale/vi_VN.js
/* harmony default export */ var vi_VN = ({
  moneySymbol: '₫',
  tableForm: {
    search: 'Tìm kiếm',
    reset: 'Làm lại',
    submit: 'Gửi đi',
    collapsed: 'Mở rộng',
    expand: 'Thu gọn',
    inputPlaceholder: 'nhập dữ liệu',
    selectPlaceholder: 'Vui lòng chọn'
  },
  alert: {
    clear: 'Xóa',
    selected: 'đã chọn',
    item: 'mục'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'trên',
      item: 'mặt hàng'
    }
  },
  tableToolBar: {
    leftPin: 'Ghim trái',
    rightPin: 'Ghim phải',
    noPin: 'Bỏ ghim',
    leftFixedTitle: 'Cố định trái',
    rightFixedTitle: 'Cố định phải',
    noFixedTitle: 'Chưa cố định',
    reset: 'Làm lại',
    columnDisplay: 'Cột hiển thị',
    columnSetting: 'Cấu hình',
    fullScreen: 'Chế độ toàn màn hình',
    exitFullScreen: 'Thoát chế độ toàn màn hình',
    reload: 'Làm mới',
    density: 'Mật độ hiển thị',
    densityDefault: 'Mặc định',
    densityLarger: 'Mặc định',
    densityMiddle: 'Trung bình',
    densitySmall: 'Chật'
  }
});
// CONCATENATED MODULE: ./packages/provider/es/locale/it_IT.js
/* harmony default export */ var it_IT = ({
  moneySymbol: '€',
  tableForm: {
    search: 'Filtra',
    reset: 'Pulisci',
    submit: 'Invia',
    collapsed: 'Espandi',
    expand: 'Contrai',
    inputPlaceholder: 'Digita',
    selectPlaceholder: 'Seleziona'
  },
  alert: {
    clear: 'Rimuovi',
    selected: 'Selezionati',
    item: 'elementi'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'di',
      item: 'elementi'
    }
  },
  tableToolBar: {
    leftPin: 'Fissa a sinistra',
    rightPin: 'Fissa a destra',
    noPin: 'Ripristina posizione',
    leftFixedTitle: 'Fissato a sinistra',
    rightFixedTitle: 'Fissato a destra',
    noFixedTitle: 'Non fissato',
    reset: 'Ripristina',
    columnDisplay: 'Disposizione colonne',
    columnSetting: 'Impostazioni',
    fullScreen: 'Modalità schermo intero',
    exitFullScreen: 'Esci da modalità schermo intero',
    reload: 'Ricarica',
    density: 'Grandezza tabella',
    densityLarger: 'Grande',
    densityMiddle: 'Media',
    densitySmall: 'Compatta'
  }
});
// CONCATENATED MODULE: ./packages/provider/es/locale/es_ES.js
/* harmony default export */ var es_ES = ({
  moneySymbol: '€',
  tableForm: {
    search: 'Buscar',
    reset: 'Limpiar',
    submit: 'Submit',
    collapsed: 'Expandir',
    expand: 'Colapsar',
    inputPlaceholder: 'Ingrese valor',
    selectPlaceholder: 'Seleccione valor'
  },
  alert: {
    clear: 'Limpiar',
    selected: 'Seleccionado',
    item: 'Articulo'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'de',
      item: 'artículos'
    }
  },
  tableToolBar: {
    leftPin: 'Pin a la izquierda',
    rightPin: 'Pin a la derecha',
    noPin: 'Sin Pin',
    leftFixedTitle: 'Fijado a la izquierda',
    rightFixedTitle: 'Fijado a la derecha',
    noFixedTitle: 'Sin Fijar',
    reset: 'Reiniciar',
    columnDisplay: 'Mostrar Columna',
    columnSetting: 'Configuración',
    fullScreen: 'Pantalla Completa',
    exitFullScreen: 'Salir Pantalla Completa',
    reload: 'Refrescar',
    density: 'Densidad',
    densityDefault: 'Por Defecto',
    densityLarger: 'Largo',
    densityMiddle: 'Medio',
    densitySmall: 'Compacto'
  }
});
// CONCATENATED MODULE: ./packages/provider/es/locale/ja_JP.js
/* harmony default export */ var ja_JP = ({
  moneySymbol: '¥',
  tableForm: {
    search: '検索',
    reset: 'リセット',
    submit: '提交',
    collapsed: '展開',
    expand: '収納',
    inputPlaceholder: '入力してください',
    selectPlaceholder: '選択してください'
  },
  alert: {
    clear: 'クリア',
    selected: '選択した',
    item: '項目'
  },
  pagination: {
    total: {
      range: '記事',
      total: '/合計',
      item: ' '
    }
  },
  tableToolBar: {
    leftPin: '左に固定',
    rightPin: '右に固定',
    noPin: 'キャンセル',
    leftFixedTitle: '左に固定された項目',
    rightFixedTitle: '右に固定された項目',
    noFixedTitle: '固定されてない項目',
    reset: 'リセット',
    columnDisplay: '表示列',
    columnSetting: '列表示設定',
    fullScreen: 'フルスクリーン',
    exitFullScreen: '終了',
    reload: '更新',
    density: '行高',
    densityLarger: '默认',
    densityMiddle: '中',
    densitySmall: '小'
  }
});
// CONCATENATED MODULE: ./packages/provider/es/locale/ru_RU.js
/* harmony default export */ var ru_RU = ({
  moneySymbol: '₽',
  tableForm: {
    search: 'Найти',
    reset: 'Сброс',
    submit: 'Отправить',
    collapsed: 'Развернуть',
    expand: 'Свернуть',
    inputPlaceholder: 'Введите значение',
    selectPlaceholder: 'Выберите значение'
  },
  alert: {
    clear: 'Очистить',
    selected: 'выбранный',
    item: 'предмет'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'из',
      item: 'предметов'
    }
  },
  tableToolBar: {
    leftPin: 'Закрепить слева',
    rightPin: 'Закрепить справа',
    noPin: 'Открепить',
    leftFixedTitle: 'Закреплено слева',
    rightFixedTitle: 'Закреплено справа',
    noFixedTitle: 'Не закреплено',
    reset: 'Сброс',
    columnDisplay: 'Отображение столбца',
    columnSetting: 'Настройки',
    fullScreen: 'Полный экран',
    exitFullScreen: 'Выйти из полноэкранного режима',
    reload: 'Обновить',
    density: 'Размер',
    densityDefault: 'По умолчанию',
    densityLarger: 'Большой',
    densityMiddle: 'Средний',
    densitySmall: 'Сжатый'
  }
});
// CONCATENATED MODULE: ./packages/provider/es/locale/ms_MY.js
/* harmony default export */ var ms_MY = ({
  moneySymbol: 'RM',
  tableForm: {
    search: 'Cari',
    reset: 'Menetapkan semula',
    submit: 'Hantar',
    collapsed: 'Kembang',
    expand: 'Kuncup',
    inputPlaceholder: 'Sila masuk',
    selectPlaceholder: 'Sila pilih'
  },
  alert: {
    clear: 'Padam',
    selected: 'Dipilih',
    item: 'Item'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'daripada',
      item: 'item'
    }
  },
  tableToolBar: {
    leftPin: 'Pin ke kiri',
    rightPin: 'Pin ke kanan',
    noPin: 'Tidak pin',
    leftFixedTitle: 'Tetap ke kiri',
    rightFixedTitle: 'Tetap ke kanan',
    noFixedTitle: 'Tidak Tetap',
    reset: 'Menetapkan semula',
    columnDisplay: 'Lajur',
    columnSetting: 'Settings',
    fullScreen: 'Full Screen',
    exitFullScreen: 'Keluar Full Screen',
    reload: 'Muat Semula',
    density: 'Densiti',
    densityDefault: 'Biasa',
    densityLarger: 'Besar',
    densityMiddle: 'Tengah',
    densitySmall: 'Kecil'
  }
});
// CONCATENATED MODULE: ./packages/provider/es/locale/zh_TW.js
/* harmony default export */ var zh_TW = ({
  moneySymbol: '￥',
  tableForm: {
    search: '查詢',
    reset: '重置',
    submit: '提交',
    collapsed: '展開',
    expand: '收起',
    inputPlaceholder: '請輸入',
    selectPlaceholder: '請選擇'
  },
  alert: {
    clear: '清空',
    selected: '已選擇',
    item: '項'
  },
  pagination: {
    total: {
      range: '第',
      total: '條/總共',
      item: '條'
    }
  },
  tableToolBar: {
    leftPin: '固定到左邊',
    rightPin: '固定到右邊',
    noPin: '不固定',
    leftFixedTitle: '固定在左側',
    rightFixedTitle: '固定在右側',
    noFixedTitle: '不固定',
    reset: '重置',
    columnDisplay: '列展示',
    columnSetting: '列設置',
    fullScreen: '全屏',
    exitFullScreen: '退出全屏',
    reload: '刷新',
    density: '密度',
    densityDefault: '正常',
    densityLarger: '默認',
    densityMiddle: '中等',
    densitySmall: '緊湊'
  }
});
// CONCATENATED MODULE: ./packages/provider/es/locale/fr_FR.js
/* harmony default export */ var fr_FR = ({
  moneySymbol: '€',
  tableForm: {
    search: 'Rechercher',
    reset: 'Réinitialiser',
    submit: 'Envoyer',
    collapsed: 'Agrandir',
    expand: 'Réduire',
    inputPlaceholder: 'Entrer une valeur',
    selectPlaceholder: 'Sélectionner une valeur'
  },
  alert: {
    clear: 'Réinitialiser',
    selected: 'Sélectionné',
    item: 'Item'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'sur',
      item: 'éléments'
    }
  },
  tableToolBar: {
    leftPin: 'Épingler à gauche',
    rightPin: 'Épingler à gauche',
    noPin: 'Sans épingle',
    leftFixedTitle: 'Fixer à gauche',
    rightFixedTitle: 'Fixer à droite',
    noFixedTitle: 'Non fixé',
    reset: 'Réinitialiser',
    columnDisplay: 'Affichage colonne',
    columnSetting: 'Réglages',
    fullScreen: 'Plein écran',
    exitFullScreen: 'Quitter Plein écran',
    reload: 'Rafraichir',
    density: 'Densité',
    densityDefault: 'Par défaut',
    densityLarger: 'Larger',
    densityMiddle: 'Moyenne',
    densitySmall: 'Compacte'
  }
});
// CONCATENATED MODULE: ./packages/provider/es/locale/pt_BR.js
/* harmony default export */ var pt_BR = ({
  moneySymbol: 'R$',
  tableForm: {
    search: 'Filtrar',
    reset: 'Limpar',
    submit: 'Confirmar',
    collapsed: 'Expandir',
    expand: 'Colapsar',
    inputPlaceholder: 'Por favor insira',
    selectPlaceholder: 'Por favor selecione'
  },
  alert: {
    clear: 'Limpar',
    selected: 'Selecionado(s)',
    item: 'Item(s)'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'de',
      item: 'items'
    }
  },
  tableToolBar: {
    leftPin: 'Fixar à esquerda',
    rightPin: 'Fixar à direita',
    noPin: 'Desfixado',
    leftFixedTitle: 'Fixado à esquerda',
    rightFixedTitle: 'Fixado à direita',
    noFixedTitle: 'Não fixado',
    reset: 'Limpar',
    columnDisplay: 'Mostrar Coluna',
    columnSetting: 'Configurações',
    fullScreen: 'Tela Cheia',
    exitFullScreen: 'Sair da Tela Cheia',
    reload: 'Atualizar',
    density: 'Densidade',
    densityDefault: 'Padrão',
    densityLarger: 'Largo',
    densityMiddle: 'Médio',
    densitySmall: 'Compacto'
  }
});
// CONCATENATED MODULE: ./packages/provider/es/locale/tr_TR.js
/* harmony default export */ var tr_TR = ({
  moneySymbol: '$',
  tableForm: {
    search: 'Arama Yap',
    reset: 'Sıfırla',
    submit: 'Gönder',
    collapsed: 'Genişlet',
    expand: 'Daralt',
    inputPlaceholder: 'Lütfen giriş yapınız',
    selectPlaceholder: 'Lütfen seçiniz'
  },
  alert: {
    clear: 'Temizle',
    selected: 'Seçili',
    item: 'Öğe'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'of',
      item: 'öğeler'
    }
  },
  tableToolBar: {
    leftPin: 'Sola pinle',
    rightPin: 'Sağa pinle',
    noPin: 'Pinleri kaldır',
    leftFixedTitle: 'sola sabitle',
    rightFixedTitle: 'sağa sabitle',
    noFixedTitle: 'sabitlemeyi kaldır',
    reset: 'sıfırla',
    columnDisplay: 'Sütun göster',
    columnSetting: 'ayarlar',
    fullScreen: 'Tam Ekran',
    exitFullScreen: 'Tam Ekrandan çık',
    reload: 'Yenile',
    density: 'Yoğunluk',
    densityDefault: 'varsayılan',
    densityLarger: 'daha büyük',
    densityMiddle: 'orta',
    densitySmall: 'küçük'
  }
});
// CONCATENATED MODULE: ./packages/provider/es/index.js
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

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
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

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = o[Symbol.iterator]();
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
















var getLang = function getLang() {
  var isNavigatorLanguageValid = typeof navigator !== 'undefined' && typeof navigator.language === 'string';
  var browserLang = isNavigatorLanguageValid ? navigator.language.split('-').join('{{BaseSeparator}}') : '';
  var lang = typeof localStorage !== 'undefined' ? window.localStorage.getItem('umi_locale') : '';
  return lang || browserLang || '';
};

function get(source, path, defaultValue) {
  // a[3].b -> a.3.b
  var paths = path.replace(/\[(\d+)\]/g, '.$1').split('.');
  var result = source;
  var message = defaultValue; // eslint-disable-next-line no-restricted-syntax

  var _iterator = _createForOfIteratorHelper(paths),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var p = _step.value;
      message = Object(result)[p];
      result = Object(result)[p];

      if (message === undefined) {
        return defaultValue;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return message;
}
/**
 * 创建一个操作函数
 * @param locale
 * @param localeMap
 */


var createIntl = function createIntl(locale, localeMap) {
  return {
    getMessage: function getMessage(id, defaultMessage) {
      return get(localeMap, id, defaultMessage) || defaultMessage;
    },
    locale: locale
  };
};

var zhCNIntl = createIntl('zh_CN', zh_CN);
var enUSIntl = createIntl('en_US', en_US);
var viVNIntl = createIntl('vi_VN', vi_VN);
var itITIntl = createIntl('it_IT', it_IT);
var jaJPIntl = createIntl('ja_JP', ja_JP);
var esESIntl = createIntl('es_ES', es_ES);
var ruRUIntl = createIntl('ru_RU', ru_RU);
var msMYIntl = createIntl('ms_MY', ms_MY);
var zhTWIntl = createIntl('zh_TW', zh_TW);
var frFRIntl = createIntl('fr_FR', fr_FR);
var ptBRIntl = createIntl('pt_BR', pt_BR);
var trTRIntl = createIntl('tr_TR', tr_TR);
var intlMap = {
  'zh-CN': zhCNIntl,
  'en-US': enUSIntl,
  'vi-VN': viVNIntl,
  'it-IT': itITIntl,
  'js-JP': jaJPIntl,
  'es-ES': esESIntl,
  'ru-RU': ruRUIntl,
  'ms-MY': msMYIntl,
  'zh-TW': zhTWIntl,
  'fr-FR': frFRIntl,
  'pt-BR': ptBRIntl,
  'tr-TR': trTRIntl
};
var intlMapKeys = Object.keys(intlMap);

var ConfigContext = /*#__PURE__*/external_React_default.a.createContext({
  intl: _objectSpread(_objectSpread({}, zhCNIntl), {}, {
    locale: 'default'
  })
});
var ConfigConsumer = ConfigContext.Consumer,
    ConfigProvider = ConfigContext.Provider;
/**
 * 根据 antd 的 key 来找到的 locale 插件的 key
 * @param localeKey
 */

var findIntlKeyByAntdLocaleKey = function findIntlKeyByAntdLocaleKey(localeKey) {
  if (!localeKey) {
    return 'zh-CN';
  }

  var localeName = localeKey.toLocaleLowerCase();
  return intlMapKeys.find(function (intlKey) {
    var LowerCaseKey = intlKey.toLocaleLowerCase();
    return LowerCaseKey.includes(localeName);
  }) || 'zh-CN';
};
/**
 *  如果没有配置 locale，这里组件会根据 antd 的 key 来自动选择
 * @param param0
 */


var es_ConfigProviderWarp = function ConfigProviderWarp(_ref) {
  var children = _ref.children;

  var _useContext = Object(external_React_["useContext"])(config_provider_["ConfigContext"]),
      locale = _useContext.locale;

  return /*#__PURE__*/external_React_default.a.createElement(ConfigConsumer, null, function (value) {
    var localeName = locale === null || locale === void 0 ? void 0 : locale.locale;
    var key = findIntlKeyByAntdLocaleKey(localeName); // antd 的 key 存在的时候以 antd 的为主

    var intl = localeName && value.intl.locale === 'default' ? intlMap[key] : value || intlMap[key];
    return /*#__PURE__*/external_React_default.a.createElement(ConfigProvider, {
      value: intl || zhCNIntl
    }, children);
  });
};


function useIntl() {
  var context = Object(external_React_["useContext"])(ConfigContext);
  Object(lib_warning["noteOnce"])(!!context.intl, "\n\u4E3A\u4E86\u63D0\u5347\u517C\u5BB9\u6027  \n<IntlProvider value={zhCNIntl}/>\n\u9700\u8981\u4FEE\u6539\u4E3A:\n<ConfigProvider\n  value={{\n    intl: zhCNIntl,\n  }}\n/>\n\u6211\u4EEC\u5C06\u4F1A\u5728\u4E0B\u4E2A\u7248\u672C\u4E2D\u5220\u9664\u5B83\n    ");
  Object(lib_warning["noteOnce"])(!!context.intl, "\nTo improve compatibility\n  <IntlProvider value={zhCNIntl}/>\nNeed to be modified to:\n  <ConfigProvider\n    value={{\n      intl: zhCNIntl,\n    }}\n  />\nWe will remove it in the next version\n    ");

  if (!context.intl) {
    return context || zhCNIntl;
  }

  return context.intl || zhCNIntl;
}
/* harmony default export */ var es = (ConfigContext);
// EXTERNAL MODULE: external "antd/es/avatar/style"
var style_ = __webpack_require__(43);

// EXTERNAL MODULE: external "antd/es/avatar"
var avatar_ = __webpack_require__(29);
var avatar_default = /*#__PURE__*/__webpack_require__.n(avatar_);

// EXTERNAL MODULE: external "antd/es/space/style"
var space_style_ = __webpack_require__(26);

// EXTERNAL MODULE: external "antd/es/space"
var space_ = __webpack_require__(16);
var space_default = /*#__PURE__*/__webpack_require__.n(space_);

// EXTERNAL MODULE: external "antd/es/tooltip/style"
var tooltip_style_ = __webpack_require__(44);

// EXTERNAL MODULE: external "antd/es/tooltip"
var tooltip_ = __webpack_require__(30);
var tooltip_default = /*#__PURE__*/__webpack_require__.n(tooltip_);

// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/InfoCircleOutlined.js
// This icon file is generated automatically.
var InfoCircleOutlined_InfoCircleOutlined = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
      }
    }, {
      "tag": "path",
      "attrs": {
        "d": "M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"
      }
    }]
  },
  "name": "info-circle",
  "theme": "outlined"
};
/* harmony default export */ var asn_InfoCircleOutlined = (InfoCircleOutlined_InfoCircleOutlined);
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
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
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function arrayLikeToArray_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function unsupportedIterableToArray_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray_arrayLikeToArray(o, minLen);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || unsupportedIterableToArray_unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
function defineProperty_defineProperty(obj, key, value) {
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
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
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
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js

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
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(3);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js


function objectSpread2_ownKeys(object, enumerableOnly) {
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

function objectSpread2_objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      objectSpread2_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      objectSpread2_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}
// EXTERNAL MODULE: ./node_modules/@ant-design/colors/lib/index.js
var lib = __webpack_require__(31);

// CONCATENATED MODULE: ./node_modules/rc-util/es/warning.js
/* eslint-disable no-console */
var warned = {};
function warning_warning(valid, message) {
  // Support uglify
  if (false) {}
}
function note(valid, message) {
  // Support uglify
  if (false) {}
}
function resetWarned() {
  warned = {};
}
function warning_call(method, valid, message) {
  if (!valid && !warned[message]) {
    method(false, message);
    warned[message] = true;
  }
}
function warningOnce(valid, message) {
  warning_call(warning_warning, valid, message);
}
function noteOnce(valid, message) {
  warning_call(note, valid, message);
}
/* harmony default export */ var es_warning = (warningOnce);
/* eslint-enable */
// EXTERNAL MODULE: ./node_modules/insert-css/index.js
var insert_css = __webpack_require__(32);

// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/utils.js






function utils_warning(valid, message) {
  es_warning(valid, "[@ant-design/icons] ".concat(message));
}
function isIconDefinition(target) {
  return _typeof(target) === 'object' && typeof target.name === 'string' && typeof target.theme === 'string' && (_typeof(target.icon) === 'object' || typeof target.icon === 'function');
}
function normalizeAttrs() {
  var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object.keys(attrs).reduce(function (acc, key) {
    var val = attrs[key];

    switch (key) {
      case 'class':
        acc.className = val;
        delete acc.class;
        break;

      default:
        acc[key] = val;
    }

    return acc;
  }, {});
}
function generate(node, key, rootProps) {
  if (!rootProps) {
    return /*#__PURE__*/external_React_default.a.createElement(node.tag, objectSpread2_objectSpread2({
      key: key
    }, normalizeAttrs(node.attrs)), (node.children || []).map(function (child, index) {
      return generate(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
    }));
  }

  return /*#__PURE__*/external_React_default.a.createElement(node.tag, objectSpread2_objectSpread2(objectSpread2_objectSpread2({
    key: key
  }, normalizeAttrs(node.attrs)), rootProps), (node.children || []).map(function (child, index) {
    return generate(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
  }));
}
function getSecondaryColor(primaryColor) {
  // choose the second color
  return Object(lib["generate"])(primaryColor)[0];
}
function normalizeTwoToneColors(twoToneColor) {
  if (!twoToneColor) {
    return [];
  }

  return Array.isArray(twoToneColor) ? twoToneColor : [twoToneColor];
} // These props make sure that the SVG behaviours like general text.
// Reference: https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4

var svgBaseProps = {
  width: '1em',
  height: '1em',
  fill: 'currentColor',
  'aria-hidden': 'true',
  focusable: 'false'
};
var iconStyles = "\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";
var cssInjectedFlag = false;
var utils_useInsertStyles = function useInsertStyles() {
  var styleStr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : iconStyles;
  Object(external_React_["useEffect"])(function () {
    if (!cssInjectedFlag) {
      Object(insert_css["insertCss"])(styleStr, {
        prepend: true
      });
      cssInjectedFlag = true;
    }
  }, []);
};
// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/components/IconBase.js



var twoToneColorPalette = {
  primaryColor: '#333',
  secondaryColor: '#E6E6E6',
  calculated: false
};

function setTwoToneColors(_ref) {
  var primaryColor = _ref.primaryColor,
      secondaryColor = _ref.secondaryColor;
  twoToneColorPalette.primaryColor = primaryColor;
  twoToneColorPalette.secondaryColor = secondaryColor || getSecondaryColor(primaryColor);
  twoToneColorPalette.calculated = !!secondaryColor;
}

function getTwoToneColors() {
  return objectSpread2_objectSpread2({}, twoToneColorPalette);
}

var IconBase_IconBase = function IconBase(props) {
  var icon = props.icon,
      className = props.className,
      onClick = props.onClick,
      style = props.style,
      primaryColor = props.primaryColor,
      secondaryColor = props.secondaryColor,
      restProps = _objectWithoutProperties(props, ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"]);

  var colors = twoToneColorPalette;

  if (primaryColor) {
    colors = {
      primaryColor: primaryColor,
      secondaryColor: secondaryColor || getSecondaryColor(primaryColor)
    };
  }

  utils_useInsertStyles();
  utils_warning(isIconDefinition(icon), "icon should be icon definiton, but got ".concat(icon));

  if (!isIconDefinition(icon)) {
    return null;
  }

  var target = icon;

  if (target && typeof target.icon === 'function') {
    target = objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, target), {}, {
      icon: target.icon(colors.primaryColor, colors.secondaryColor)
    });
  }

  return generate(target.icon, "svg-".concat(target.name), objectSpread2_objectSpread2({
    className: className,
    onClick: onClick,
    style: style,
    'data-icon': target.name,
    width: '1em',
    height: '1em',
    fill: 'currentColor',
    'aria-hidden': 'true'
  }, restProps));
};

IconBase_IconBase.displayName = 'IconReact';
IconBase_IconBase.getTwoToneColors = getTwoToneColors;
IconBase_IconBase.setTwoToneColors = setTwoToneColors;
/* harmony default export */ var components_IconBase = (IconBase_IconBase);
// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/components/twoTonePrimaryColor.js



function setTwoToneColor(twoToneColor) {
  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor),
      _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2),
      primaryColor = _normalizeTwoToneColo2[0],
      secondaryColor = _normalizeTwoToneColo2[1];

  return components_IconBase.setTwoToneColors({
    primaryColor: primaryColor,
    secondaryColor: secondaryColor
  });
}
function getTwoToneColor() {
  var colors = components_IconBase.getTwoToneColors();

  if (!colors.calculated) {
    return colors.primaryColor;
  }

  return [colors.primaryColor, colors.secondaryColor];
}
// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js







 // Initial setting
// should move it to antd main repo?

setTwoToneColor('#1890ff');
var Icon = /*#__PURE__*/external_React_["forwardRef"](function (props, ref) {
  var className = props.className,
      icon = props.icon,
      spin = props.spin,
      rotate = props.rotate,
      tabIndex = props.tabIndex,
      onClick = props.onClick,
      twoToneColor = props.twoToneColor,
      restProps = _objectWithoutProperties(props, ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"]);

  var classString = classnames_default()('anticon', defineProperty_defineProperty({}, "anticon-".concat(icon.name), Boolean(icon.name)), className);
  var svgClassString = classnames_default()({
    'anticon-spin': !!spin || icon.name === 'loading'
  });
  var iconTabIndex = tabIndex;

  if (iconTabIndex === undefined && onClick) {
    iconTabIndex = -1;
  }

  var svgStyle = rotate ? {
    msTransform: "rotate(".concat(rotate, "deg)"),
    transform: "rotate(".concat(rotate, "deg)")
  } : undefined;

  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor),
      _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2),
      primaryColor = _normalizeTwoToneColo2[0],
      secondaryColor = _normalizeTwoToneColo2[1];

  return /*#__PURE__*/external_React_["createElement"]("span", Object.assign({
    role: "img",
    "aria-label": icon.name
  }, restProps, {
    ref: ref,
    tabIndex: iconTabIndex,
    onClick: onClick,
    className: classString
  }), /*#__PURE__*/external_React_["createElement"](components_IconBase, {
    className: svgClassString,
    icon: icon,
    primaryColor: primaryColor,
    secondaryColor: secondaryColor,
    style: svgStyle
  }));
});
Icon.displayName = 'AntdIcon';
Icon.getTwoToneColor = getTwoToneColor;
Icon.setTwoToneColor = setTwoToneColor;
/* harmony default export */ var AntdIcon = (Icon);
// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/InfoCircleOutlined.js
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var icons_InfoCircleOutlined_InfoCircleOutlined = function InfoCircleOutlined(props, ref) {
  return /*#__PURE__*/external_React_["createElement"](AntdIcon, Object.assign({}, props, {
    ref: ref,
    icon: asn_InfoCircleOutlined
  }));
};

icons_InfoCircleOutlined_InfoCircleOutlined.displayName = 'InfoCircleOutlined';
/* harmony default export */ var icons_InfoCircleOutlined = (/*#__PURE__*/external_React_["forwardRef"](icons_InfoCircleOutlined_InfoCircleOutlined));
// EXTERNAL MODULE: ./packages/utils/es/components/LabelIconTip/index.less
var components_LabelIconTip = __webpack_require__(45);

// CONCATENATED MODULE: ./packages/utils/es/components/LabelIconTip/index.js








/**
 * 在 form 的 label 后面增加一个 tips 来展示一些说明文案
 * @param props
 */

var LabelIconTip_LabelIconTip = function LabelIconTip(props) {
  var label = props.label,
      tip = props.tip;

  var _useContext = Object(external_React_["useContext"])(config_provider_["ConfigContext"]),
      getPrefixCls = _useContext.getPrefixCls; // 如果 tip 不存在直接使用了 label


  if (!tip) {
    return /*#__PURE__*/external_React_default.a.createElement(external_React_default.a.Fragment, null, label);
  }

  var className = getPrefixCls('pro-core-label-tip');
  var tooltipProps = typeof tip === 'string' ? {
    title: tip
  } : tip;
  return /*#__PURE__*/external_React_default.a.createElement(space_default.a, {
    size: 4,
    className: className
  }, label, /*#__PURE__*/external_React_default.a.createElement(tooltip_default.a, tooltipProps, /*#__PURE__*/external_React_default.a.createElement(icons_InfoCircleOutlined, {
    className: "".concat(className, "-icon")
  })));
};

/* harmony default export */ var es_components_LabelIconTip = (LabelIconTip_LabelIconTip);
// EXTERNAL MODULE: ./packages/utils/es/isBrowser/index.js
var isBrowser = __webpack_require__(19);

// CONCATENATED MODULE: ./packages/utils/es/isImg/index.js
/** 判断是否是图片链接 */
function isImg(path) {
  return /\w.(png|jpg|jpeg|svg|webp|gif|bmp)$/i.test(path);
}

/* harmony default export */ var es_isImg = (isImg);
// CONCATENATED MODULE: ./packages/utils/es/isUrl/index.js
/* eslint no-useless-escape:0 import/prefer-default-export:0 */
var reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;

var isUrl = function isUrl(path) {
  return reg.test(path);
};

/* harmony default export */ var es_isUrl = (isUrl);
// CONCATENATED MODULE: ./packages/utils/es/pickProProps/index.js
var proFieldProps = "valueType request mode plain renderFormItem render text formItemProps valueEnum";
var proFormProps = "fieldProps secondary colSize groupProps contentRender submitterProps submitter";
function pickProProps(props) {
  var propList = "".concat(proFieldProps, " ").concat(proFormProps).split(/[\s\n]+/);
  var attrs = {};
  Object.keys(props || {}).forEach(function (key) {
    if (propList.includes(key)) {
      return;
    }

    attrs[key] = props[key];
  });
  return attrs;
}
// CONCATENATED MODULE: ./packages/utils/es/pickUndefined/index.js
var pickUndefined = function pickUndefined(obj) {
  var newObj = {};
  Object.keys(obj).forEach(function (key) {
    var _obj$key;

    if (obj[key] !== undefined && ((_obj$key = obj[key]) === null || _obj$key === void 0 ? void 0 : _obj$key.length) !== 0) {
      newObj[key] = obj[key];
    }
  });
  return newObj;
};

/* harmony default export */ var es_pickUndefined = (pickUndefined);
// CONCATENATED MODULE: ./packages/utils/es/hooks/useDebounceFn/index.js
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || useDebounceFn_unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function useDebounceFn_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return useDebounceFn_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useDebounceFn_arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return useDebounceFn_arrayLikeToArray(arr);
}

function useDebounceFn_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}



var useDebounceFn_useUpdateEffect = function useUpdateEffect(effect, deps) {
  var isMounted = Object(external_React_["useRef"])(false);
  Object(external_React_["useEffect"])(function () {
    if (!isMounted.current) {
      isMounted.current = true;
    } else {
      return effect();
    }

    return function () {
      return undefined;
    };
  }, deps);
};

function useDebounceFn(fn, deps, wait) {
  // eslint-disable-next-line no-underscore-dangle
  var hooksDeps = Array.isArray(deps) ? deps : []; // eslint-disable-next-line no-underscore-dangle

  var hookWait = typeof deps === 'number' ? deps : wait || 0;
  var timer = Object(external_React_["useRef"])();
  var fnRef = Object(external_React_["useRef"])(fn);
  fnRef.current = fn;
  var cancel = Object(external_React_["useCallback"])(function () {
    if (timer.current) {
      clearTimeout(timer.current);
    }
  }, []);
  var run = Object(external_React_["useCallback"])(function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    cancel();
    timer.current = setTimeout(function () {
      fnRef.current.apply(fnRef, args);
    }, hookWait);
  }, [hookWait, cancel]);
  useDebounceFn_useUpdateEffect(function () {
    run();
    return cancel;
  }, [].concat(_toConsumableArray(hooksDeps), [run]));
  Object(external_React_["useEffect"])(function () {
    return cancel;
  }, []);
  return {
    run: run,
    cancel: cancel
  };
}

/* harmony default export */ var hooks_useDebounceFn = (useDebounceFn);
// CONCATENATED MODULE: ./packages/utils/es/hooks/usePrevious/index.js


var usePrevious_usePrevious = function usePrevious(state) {
  var ref = Object(external_React_["useRef"])();
  Object(external_React_["useEffect"])(function () {
    ref.current = state;
  });
  return ref.current;
};

/* harmony default export */ var hooks_usePrevious = (usePrevious_usePrevious);
// EXTERNAL MODULE: ./node_modules/lodash.isequal/index.js
var lodash_isequal = __webpack_require__(33);
var lodash_isequal_default = /*#__PURE__*/__webpack_require__.n(lodash_isequal);

// CONCATENATED MODULE: ./packages/utils/es/hooks/useDeepCompareEffect/index.js



function deepCompareEquals(a, b) {
  return lodash_isequal_default()(a, b);
}

function useDeepCompareMemoize(value) {
  var ref = Object(external_React_["useRef"])(); // it can be done by using useMemo as well
  // but useRef is rather cleaner and easier

  if (!deepCompareEquals(value, ref.current)) {
    ref.current = value;
  }

  return ref.current;
}

function useDeepCompareEffect(effect, dependencies) {
  Object(external_React_["useEffect"])(effect, useDeepCompareMemoize(dependencies));
}

/* harmony default export */ var hooks_useDeepCompareEffect = (useDeepCompareEffect);
// CONCATENATED MODULE: ./packages/utils/es/hooks/useDocumentTitle/index.js



function useDocumentTitle(titleInfo, appDefaultTitle) {
  var titleText = typeof titleInfo.pageName === 'string' ? titleInfo.title : appDefaultTitle;
  Object(external_React_["useEffect"])(function () {
    if (Object(isBrowser["a" /* default */])() && titleText) {
      document.title = titleText;
    }
  }, [titleInfo.title]);
}

/* harmony default export */ var hooks_useDocumentTitle = (useDocumentTitle);
// CONCATENATED MODULE: ./packages/utils/es/index.js






/**
 * hooks
 */






// EXTERNAL MODULE: external "antd/es/input-number/style"
var input_number_style_ = __webpack_require__(18);

// EXTERNAL MODULE: external "antd/es/input-number"
var input_number_ = __webpack_require__(8);
var input_number_default = /*#__PURE__*/__webpack_require__.n(input_number_);

// EXTERNAL MODULE: ./node_modules/lodash.tonumber/index.js
var lodash_tonumber = __webpack_require__(14);
var lodash_tonumber_default = /*#__PURE__*/__webpack_require__.n(lodash_tonumber);

// CONCATENATED MODULE: ./packages/field/es/components/Percent/util.js
/** 获取展示符号 */
function getSymbolByRealValue(realValue) {
  return realValue > 0 ? '+' : '-';
}
/** 获取颜色 */

function getColorByRealValue(realValue
/** ,color: string */
) {
  if (realValue === 0) {
    return '#595959';
  }

  return realValue > 0 ? '#ff4d4f' : '#52c41a';
}
/** 获取到最后展示的数字 */

function getRealTextWithPrecision(realValue) {
  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

  if (precision && precision <= 0) {
    throw new Error('precision must be more the zero');
  }

  return precision && precision > 0 ? realValue.toFixed(precision) : realValue;
}
// CONCATENATED MODULE: ./packages/field/es/components/Percent/index.js



function _extends() {
  _extends = Object.assign || function (target) {
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

function Percent_ownKeys(object, enumerableOnly) {
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

function Percent_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      Percent_ownKeys(Object(source), true).forEach(function (key) {
        Percent_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      Percent_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function Percent_defineProperty(obj, key, value) {
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




/**
 * 百分比组件
 * @param  PercentPropInt
 */

var Percent_FieldPercent = function FieldPercent(_ref, ref) {
  var text = _ref.text,
      prefix = _ref.prefix,
      precision = _ref.precision,
      showSymbol = _ref.showSymbol,
      _ref$suffix = _ref.suffix,
      suffix = _ref$suffix === void 0 ? '%' : _ref$suffix,
      mode = _ref.mode,
      _ref$showColor = _ref.showColor,
      showColor = _ref$showColor === void 0 ? false : _ref$showColor,
      render = _ref.render,
      renderFormItem = _ref.renderFormItem,
      formItemProps = _ref.formItemProps;
  var realValue = Object(external_React_["useMemo"])(function () {
    return typeof text === 'string' && text.includes('%') ? lodash_tonumber_default()(text.replace('%', '')) : lodash_tonumber_default()(text);
  }, [text]);

  if (mode === 'read') {
    /** 颜色有待确定, 根据提供 colors: ['正', '负'] | boolean */
    var style = showColor ? {
      color: getColorByRealValue(realValue)
    } : {};
    var dom = /*#__PURE__*/external_React_default.a.createElement("span", {
      style: style,
      ref: ref
    }, prefix && /*#__PURE__*/external_React_default.a.createElement("span", null, prefix), showSymbol && /*#__PURE__*/external_React_default.a.createElement(external_React_["Fragment"], null, getSymbolByRealValue(realValue), " "), getRealTextWithPrecision(Math.abs(realValue), precision), suffix && suffix);

    if (render) {
      return render(text, Percent_objectSpread(Percent_objectSpread({
        mode: mode
      }, formItemProps), {}, {
        prefix: prefix,
        precision: precision,
        showSymbol: showSymbol,
        suffix: suffix
      }), dom);
    }

    return dom;
  }

  if (mode === 'edit' || mode === 'update') {
    var _dom = /*#__PURE__*/external_React_default.a.createElement(input_number_default.a, _extends({
      ref: ref,
      formatter: function formatter(value) {
        if (value && prefix) {
          return "".concat(prefix, " ").concat(value).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }

        return value;
      },
      parser: function parser(value) {
        return value ? value.replace(new RegExp("\\".concat(prefix, "\\s?|(,*)"), 'g'), '') : '';
      }
    }, formItemProps));

    if (renderFormItem) {
      return renderFormItem(text, Percent_objectSpread({
        mode: mode
      }, formItemProps), _dom);
    }

    return _dom;
  }

  return null;
};

/* harmony default export */ var Percent = (/*#__PURE__*/external_React_default.a.forwardRef(Percent_FieldPercent));
// EXTERNAL MODULE: external "antd/lib/config-provider/context"
var context_ = __webpack_require__(6);

// EXTERNAL MODULE: ./packages/field/es/components/IndexColumn/index.less
var components_IndexColumn = __webpack_require__(49);

// CONCATENATED MODULE: ./packages/field/es/components/IndexColumn/index.js
function IndexColumn_defineProperty(obj, key, value) {
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





/**
 * 默认的 index 列容器，提供一个好看的 index
 * @param param0
 */

var IndexColumn_IndexColumn = function IndexColumn(_ref, ref) {
  var _classnames;

  var _ref$border = _ref.border,
      border = _ref$border === void 0 ? false : _ref$border,
      children = _ref.children;

  var _useContext = Object(external_React_["useContext"])(context_["ConfigContext"]),
      getPrefixCls = _useContext.getPrefixCls;

  var className = getPrefixCls('pro-field-index-column');
  return /*#__PURE__*/external_React_default.a.createElement("div", {
    ref: ref,
    className: classnames_default()(className, (_classnames = {}, IndexColumn_defineProperty(_classnames, "".concat(className, "-border"), border), IndexColumn_defineProperty(_classnames, 'top-three', children > 2), _classnames))
  }, children);
};

/* harmony default export */ var es_components_IndexColumn = (/*#__PURE__*/external_React_default.a.forwardRef(IndexColumn_IndexColumn));
// EXTERNAL MODULE: external "antd/es/progress/style"
var progress_style_ = __webpack_require__(50);

// EXTERNAL MODULE: external "antd/es/progress"
var progress_ = __webpack_require__(34);
var progress_default = /*#__PURE__*/__webpack_require__.n(progress_);

// CONCATENATED MODULE: ./packages/field/es/components/Progress/index.js





function Progress_ownKeys(object, enumerableOnly) {
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

function Progress_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      Progress_ownKeys(Object(source), true).forEach(function (key) {
        Progress_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      Progress_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function Progress_defineProperty(obj, key, value) {
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

function Progress_extends() {
  Progress_extends = Object.assign || function (target) {
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

  return Progress_extends.apply(this, arguments);
}



function getProgressStatus(text) {
  if (typeof text !== 'number') {
    return 'exception';
  }

  if (text === 100) {
    return 'success';
  }

  if (text < 100) {
    return 'active';
  } // magic


  if (text < 0) {
    return 'exception';
  }

  return 'normal';
}
/**
 * 进度条组件
 * @param
 */

var Progress_FieldProgress = function FieldProgress(_ref, ref) {
  var text = _ref.text,
      mode = _ref.mode,
      render = _ref.render,
      plain = _ref.plain,
      renderFormItem = _ref.renderFormItem,
      formItemProps = _ref.formItemProps;
  var realValue = Object(external_React_["useMemo"])(function () {
    return typeof text === 'string' && text.includes('%') ? lodash_tonumber_default()(text.replace('%', '')) : lodash_tonumber_default()(text);
  }, [text]);

  if (mode === 'read') {
    var dom = /*#__PURE__*/external_React_default.a.createElement(progress_default.a, Progress_extends({
      ref: ref,
      size: "small",
      style: {
        minWidth: 100
      },
      percent: realValue,
      steps: plain ? 10 : undefined,
      status: getProgressStatus(realValue)
    }, formItemProps));

    if (render) {
      return render(realValue, Progress_objectSpread({
        mode: mode
      }, formItemProps), dom);
    }

    return dom;
  }

  if (mode === 'edit' || mode === 'update') {
    var _dom = /*#__PURE__*/external_React_default.a.createElement(input_number_default.a, Progress_extends({
      ref: ref
    }, formItemProps));

    if (renderFormItem) {
      return renderFormItem(text, Progress_objectSpread({
        mode: mode
      }, formItemProps), _dom);
    }

    return _dom;
  }

  return null;
};

/* harmony default export */ var Progress = (/*#__PURE__*/external_React_default.a.forwardRef(Progress_FieldProgress));
// CONCATENATED MODULE: ./packages/field/es/components/Money/index.js



function Money_extends() {
  Money_extends = Object.assign || function (target) {
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

  return Money_extends.apply(this, arguments);
}

function Money_ownKeys(object, enumerableOnly) {
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

function Money_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      Money_ownKeys(Object(source), true).forEach(function (key) {
        Money_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      Money_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function Money_defineProperty(obj, key, value) {
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


var moneyIntl = new Intl.NumberFormat('zh-Hans-CN', {
  currency: 'CNY',
  style: 'currency',
  minimumFractionDigits: 2
});
var enMoneyIntl = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});
var ruMoneyIntl = new Intl.NumberFormat('ru-RU', {
  style: 'currency',
  currency: 'RUB'
});
var msMoneyIntl = new Intl.NumberFormat('ms-MY', {
  style: 'currency',
  currency: 'MYR'
});

var getTextByLocale = function getTextByLocale(locale, paramsText) {
  var text = paramsText;

  if (typeof text === 'string') {
    text = Number(text);
  }

  if (locale === 'en_US') {
    // english
    return enMoneyIntl.format(text);
  } // russian


  if (locale === 'ru_RU') {
    return ruMoneyIntl.format(text);
  } // malay


  if (locale === 'ms_MY') {
    return msMoneyIntl.format(text);
  }

  return moneyIntl.format(text);
};
/**
 * 金额组件
 * @param FieldMoneyProps
 * {
 *    text: number;
 *    moneySymbol?: string;
 * }
 */


var Money_FieldMoney = function FieldMoney(_ref, ref) {
  var text = _ref.text,
      type = _ref.mode,
      _ref$moneySymbol = _ref.moneySymbol,
      moneySymbol = _ref$moneySymbol === void 0 ? '￥' : _ref$moneySymbol,
      _ref$locale = _ref.locale,
      locale = _ref$locale === void 0 ? '' : _ref$locale,
      render = _ref.render,
      renderFormItem = _ref.renderFormItem,
      formItemProps = _ref.formItemProps;

  if (type === 'read') {
    var dom = /*#__PURE__*/external_React_default.a.createElement("span", {
      ref: ref
    }, getTextByLocale(locale, text));

    if (render) {
      return render(text, Money_objectSpread({
        mode: type
      }, formItemProps), dom);
    }

    return dom;
  }

  if (type === 'edit' || type === 'update') {
    var _dom = /*#__PURE__*/external_React_default.a.createElement(input_number_default.a, Money_extends({
      ref: ref,
      min: 0,
      precision: 2,
      formatter: function formatter(value) {
        if (value) {
          return "".concat(moneySymbol, " ").concat(value).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }

        return '';
      },
      parser: function parser(value) {
        return value ? value.replace(new RegExp("\\".concat(moneySymbol, "\\s?|(,*)"), 'g'), '') : '';
      },
      style: {
        width: '100%'
      }
    }, formItemProps));

    if (renderFormItem) {
      return renderFormItem(text, Money_objectSpread({
        mode: type
      }, formItemProps), _dom);
    }

    return _dom;
  }

  return null;
};

/* harmony default export */ var Money = (/*#__PURE__*/external_React_default.a.forwardRef(Money_FieldMoney));
// EXTERNAL MODULE: external "antd/es/date-picker/style"
var date_picker_style_ = __webpack_require__(21);

// EXTERNAL MODULE: external "antd/es/date-picker"
var date_picker_ = __webpack_require__(13);
var date_picker_default = /*#__PURE__*/__webpack_require__.n(date_picker_);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(4);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// CONCATENATED MODULE: ./packages/field/es/components/DatePicker/index.js



function DatePicker_extends() {
  DatePicker_extends = Object.assign || function (target) {
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

  return DatePicker_extends.apply(this, arguments);
}

function DatePicker_ownKeys(object, enumerableOnly) {
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

function DatePicker_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      DatePicker_ownKeys(Object(source), true).forEach(function (key) {
        DatePicker_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      DatePicker_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function DatePicker_defineProperty(obj, key, value) {
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



/**
 * 日期选择组件
 * @param
 */

var DatePicker_FieldDatePicker = function FieldDatePicker(_ref, ref) {
  var text = _ref.text,
      mode = _ref.mode,
      _ref$format = _ref.format,
      format = _ref$format === void 0 ? 'YYYY-MM-DD' : _ref$format,
      render = _ref.render,
      renderFormItem = _ref.renderFormItem,
      plain = _ref.plain,
      showTime = _ref.showTime,
      formItemProps = _ref.formItemProps;

  if (mode === 'read') {
    var dom = /*#__PURE__*/external_React_default.a.createElement("span", {
      ref: ref
    }, text ? external_moment_default()(text).format(format) : '-');

    if (render) {
      return render(text, DatePicker_objectSpread({
        mode: mode
      }, formItemProps), /*#__PURE__*/external_React_default.a.createElement("span", null, dom));
    }

    return dom;
  }

  if (mode === 'edit' || mode === 'update') {
    var _dom = /*#__PURE__*/external_React_default.a.createElement(date_picker_default.a, DatePicker_extends({
      showTime: showTime,
      format: format,
      ref: ref,
      bordered: plain === undefined ? true : !plain
    }, formItemProps));

    if (renderFormItem) {
      return renderFormItem(text, DatePicker_objectSpread({
        mode: mode
      }, formItemProps), _dom);
    }

    return _dom;
  }

  return null;
};

/* harmony default export */ var DatePicker = (/*#__PURE__*/external_React_default.a.forwardRef(DatePicker_FieldDatePicker));
// CONCATENATED MODULE: ./packages/field/es/components/RangePicker/index.js



function RangePicker_extends() {
  RangePicker_extends = Object.assign || function (target) {
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

  return RangePicker_extends.apply(this, arguments);
}

function RangePicker_ownKeys(object, enumerableOnly) {
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

function RangePicker_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      RangePicker_ownKeys(Object(source), true).forEach(function (key) {
        RangePicker_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      RangePicker_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function RangePicker_defineProperty(obj, key, value) {
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

function RangePicker_slicedToArray(arr, i) {
  return RangePicker_arrayWithHoles(arr) || RangePicker_iterableToArrayLimit(arr, i) || RangePicker_unsupportedIterableToArray(arr, i) || RangePicker_nonIterableRest();
}

function RangePicker_nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function RangePicker_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return RangePicker_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return RangePicker_arrayLikeToArray(o, minLen);
}

function RangePicker_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function RangePicker_iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
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

function RangePicker_arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}



/**
 * 日期范围选择组件
 * @param
 */

var RangePicker_FieldRangePicker = function FieldRangePicker(_ref, ref) {
  var text = _ref.text,
      mode = _ref.mode,
      _ref$format = _ref.format,
      format = _ref$format === void 0 ? 'YYYY-MM-DD' : _ref$format,
      render = _ref.render,
      renderFormItem = _ref.renderFormItem,
      plain = _ref.plain,
      showTime = _ref.showTime,
      formItemProps = _ref.formItemProps;

  var _ref2 = Array.isArray(text) ? text : [],
      _ref3 = RangePicker_slicedToArray(_ref2, 2),
      startText = _ref3[0],
      endText = _ref3[1];

  if (mode === 'read') {
    var dom = /*#__PURE__*/external_React_default.a.createElement("div", {
      ref: ref
    }, /*#__PURE__*/external_React_default.a.createElement("div", null, startText ? external_moment_default()(startText).format(format) : '-'), /*#__PURE__*/external_React_default.a.createElement("div", null, endText ? external_moment_default()(endText).format(format) : '-'));

    if (render) {
      return render(text, RangePicker_objectSpread({
        mode: mode
      }, formItemProps), /*#__PURE__*/external_React_default.a.createElement("span", null, dom));
    }

    return dom;
  }

  if (mode === 'edit' || mode === 'update') {
    var _dom = /*#__PURE__*/external_React_default.a.createElement(date_picker_default.a.RangePicker, RangePicker_extends({
      ref: ref,
      format: format,
      showTime: showTime,
      bordered: plain === undefined ? true : !plain
    }, formItemProps));

    if (renderFormItem) {
      return renderFormItem(text, RangePicker_objectSpread({
        mode: mode
      }, formItemProps), _dom);
    }

    return _dom;
  }

  return null;
};

/* harmony default export */ var RangePicker = (/*#__PURE__*/external_React_default.a.forwardRef(RangePicker_FieldRangePicker));
// EXTERNAL MODULE: external "antd/es/input/style"
var input_style_ = __webpack_require__(22);

// EXTERNAL MODULE: external "antd/es/input"
var input_ = __webpack_require__(9);
var input_default = /*#__PURE__*/__webpack_require__.n(input_);

// CONCATENATED MODULE: ./packages/field/es/components/Code/index.js



function Code_ownKeys(object, enumerableOnly) {
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

function Code_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      Code_ownKeys(Object(source), true).forEach(function (key) {
        Code_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      Code_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function Code_defineProperty(obj, key, value) {
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

function Code_extends() {
  Code_extends = Object.assign || function (target) {
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

  return Code_extends.apply(this, arguments);
}



var languageFormat = function languageFormat(text, language) {
  if (typeof text !== 'string') {
    return text;
  }

  try {
    if (language === 'json') {
      return JSON.stringify(JSON.parse(text), null, 2);
    }
  } catch (error) {// console.log(error)
  }

  return text;
};
/**
 * 代码片段组件
 * 这个组件为了显示简单的配置，复杂的请使用更加重型的组件
 * @param
 */


var Code_FieldCode = function FieldCode(_ref, ref) {
  var text = _ref.text,
      mode = _ref.mode,
      render = _ref.render,
      _ref$language = _ref.language,
      language = _ref$language === void 0 ? 'text' : _ref$language,
      renderFormItem = _ref.renderFormItem,
      plain = _ref.plain,
      formItemProps = _ref.formItemProps;
  var code = languageFormat(text, language);

  if (mode === 'read') {
    var dom = /*#__PURE__*/external_React_default.a.createElement("pre", Code_extends({
      style: {
        padding: 16,
        overflow: 'auto',
        fontSize: '85%',
        lineHeight: 1.45,
        backgroundColor: '#f6f8fa',
        borderRadius: 3
      },
      ref: ref
    }, formItemProps), /*#__PURE__*/external_React_default.a.createElement("code", null, code));

    if (render) {
      return render(code, Code_objectSpread(Code_objectSpread({
        mode: mode
      }, formItemProps), {}, {
        ref: ref
      }), dom);
    }

    return dom;
  }

  if (mode === 'edit' || mode === 'update') {
    var _dom = /*#__PURE__*/external_React_default.a.createElement(input_default.a.TextArea, Code_extends({
      rows: 5
    }, formItemProps, {
      ref: ref
    }));

    if (plain) {
      _dom = /*#__PURE__*/external_React_default.a.createElement(input_default.a, Code_extends({}, formItemProps, {
        ref: ref
      }));
    }

    if (renderFormItem) {
      return renderFormItem(code, Code_objectSpread(Code_objectSpread({
        mode: mode
      }, formItemProps), {}, {
        ref: ref
      }), _dom);
    }

    return _dom;
  }

  return null;
};

/* harmony default export */ var Code = (/*#__PURE__*/external_React_default.a.forwardRef(Code_FieldCode));
// CONCATENATED MODULE: ./packages/field/es/components/TimePicker/index.js



function TimePicker_extends() {
  TimePicker_extends = Object.assign || function (target) {
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

  return TimePicker_extends.apply(this, arguments);
}

function TimePicker_ownKeys(object, enumerableOnly) {
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

function TimePicker_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      TimePicker_ownKeys(Object(source), true).forEach(function (key) {
        TimePicker_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      TimePicker_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function TimePicker_defineProperty(obj, key, value) {
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



/**
 * 日期选择组件
 * @param
 */

var TimePicker_FieldTimePicker = function FieldTimePicker(_ref, ref) {
  var text = _ref.text,
      mode = _ref.mode,
      _ref$format = _ref.format,
      format = _ref$format === void 0 ? 'HH:mm:ss' : _ref$format,
      render = _ref.render,
      renderFormItem = _ref.renderFormItem,
      plain = _ref.plain,
      formItemProps = _ref.formItemProps;

  if (mode === 'read') {
    var dom = /*#__PURE__*/external_React_default.a.createElement("span", {
      ref: ref
    }, text ? external_moment_default()(text).format(format) : '-');

    if (render) {
      return render(text, TimePicker_objectSpread({
        mode: mode
      }, formItemProps), /*#__PURE__*/external_React_default.a.createElement("span", null, dom));
    }

    return dom;
  }

  if (mode === 'edit' || mode === 'update') {
    var _dom = /*#__PURE__*/external_React_default.a.createElement(date_picker_default.a.TimePicker, TimePicker_extends({
      ref: ref,
      format: format,
      bordered: plain === undefined ? true : !plain
    }, formItemProps));

    if (renderFormItem) {
      return renderFormItem(text, TimePicker_objectSpread({
        mode: mode
      }, formItemProps), _dom);
    }

    return _dom;
  }

  return null;
};

/* harmony default export */ var TimePicker = (/*#__PURE__*/external_React_default.a.forwardRef(TimePicker_FieldTimePicker));
// CONCATENATED MODULE: ./packages/field/es/components/Text/index.js



function Text_extends() {
  Text_extends = Object.assign || function (target) {
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

  return Text_extends.apply(this, arguments);
}

function Text_ownKeys(object, enumerableOnly) {
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

function Text_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      Text_ownKeys(Object(source), true).forEach(function (key) {
        Text_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      Text_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function Text_defineProperty(obj, key, value) {
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


/**
 * 最基本的组件，就是个普通的 Input
 * @param
 */

var Text_FieldText = function FieldText(_ref, ref) {
  var text = _ref.text,
      mode = _ref.mode,
      render = _ref.render,
      renderFormItem = _ref.renderFormItem,
      formItemProps = _ref.formItemProps;
  var inputRef = Object(external_React_["useRef"])();
  Object(external_React_["useImperativeHandle"])(ref, function () {
    return Text_objectSpread({}, inputRef.current || {});
  }, [inputRef.current]);

  if (mode === 'read') {
    var dom = text || '-';

    if (render) {
      return render(text, Text_objectSpread({
        mode: mode
      }, formItemProps), /*#__PURE__*/external_React_default.a.createElement(external_React_default.a.Fragment, null, dom));
    }

    return /*#__PURE__*/external_React_default.a.createElement(external_React_default.a.Fragment, null, dom);
  }

  if (mode === 'edit' || mode === 'update') {
    var _dom = /*#__PURE__*/external_React_default.a.createElement(input_default.a, Text_extends({
      ref: inputRef
    }, formItemProps));

    if (renderFormItem) {
      return renderFormItem(text, Text_objectSpread({
        mode: mode
      }, formItemProps), _dom);
    }

    return _dom;
  }

  return null;
};

/* harmony default export */ var Text = (/*#__PURE__*/external_React_default.a.forwardRef(Text_FieldText));
// CONCATENATED MODULE: ./packages/field/es/components/TextArea/index.js



function TextArea_extends() {
  TextArea_extends = Object.assign || function (target) {
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

  return TextArea_extends.apply(this, arguments);
}

function TextArea_ownKeys(object, enumerableOnly) {
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

function TextArea_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      TextArea_ownKeys(Object(source), true).forEach(function (key) {
        TextArea_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      TextArea_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function TextArea_defineProperty(obj, key, value) {
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


/**
 * 最基本的组件，就是个普通的 Input.TextArea
 * @param
 */

var TextArea_FieldTextArea = function FieldTextArea(_ref, ref) {
  var text = _ref.text,
      mode = _ref.mode,
      render = _ref.render,
      renderFormItem = _ref.renderFormItem,
      formItemProps = _ref.formItemProps;

  if (mode === 'read') {
    var dom = /*#__PURE__*/external_React_default.a.createElement("span", {
      ref: ref
    }, text || '-');

    if (render) {
      return render(text, TextArea_objectSpread({
        mode: mode
      }, formItemProps), dom);
    }

    return dom;
  }

  if (mode === 'edit' || mode === 'update') {
    var _dom = /*#__PURE__*/external_React_default.a.createElement(input_default.a.TextArea, TextArea_extends({
      ref: ref
    }, formItemProps));

    if (renderFormItem) {
      return renderFormItem(text, TextArea_objectSpread({
        mode: mode
      }, formItemProps), _dom);
    }

    return _dom;
  }

  return null;
};

/* harmony default export */ var TextArea = (/*#__PURE__*/external_React_default.a.forwardRef(TextArea_FieldTextArea));
// EXTERNAL MODULE: external "antd/es/badge/style"
var badge_style_ = __webpack_require__(51);

// EXTERNAL MODULE: external "antd/es/badge"
var badge_ = __webpack_require__(5);
var badge_default = /*#__PURE__*/__webpack_require__.n(badge_);

// EXTERNAL MODULE: ./packages/field/es/components/Status/index.less
var components_Status = __webpack_require__(52);

// CONCATENATED MODULE: ./packages/field/es/components/Status/index.js




/**
 * 快捷操作，用于快速的展示一个状态
 */

var Status_Status = {
  Success: function Success(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/external_React_default.a.createElement(badge_default.a, {
      status: "success",
      text: children
    });
  },
  Error: function Error(_ref2) {
    var children = _ref2.children;
    return /*#__PURE__*/external_React_default.a.createElement(badge_default.a, {
      status: "error",
      text: children
    });
  },
  Default: function Default(_ref3) {
    var children = _ref3.children;
    return /*#__PURE__*/external_React_default.a.createElement(badge_default.a, {
      status: "default",
      text: children
    });
  },
  Processing: function Processing(_ref4) {
    var children = _ref4.children;
    return /*#__PURE__*/external_React_default.a.createElement(badge_default.a, {
      status: "processing",
      text: children
    });
  },
  Warning: function Warning(_ref5) {
    var children = _ref5.children;
    return /*#__PURE__*/external_React_default.a.createElement(badge_default.a, {
      status: "warning",
      text: children
    });
  },
  success: function success(_ref6) {
    var children = _ref6.children;
    return /*#__PURE__*/external_React_default.a.createElement(badge_default.a, {
      status: "success",
      text: children
    });
  },
  error: function error(_ref7) {
    var children = _ref7.children;
    return /*#__PURE__*/external_React_default.a.createElement(badge_default.a, {
      status: "error",
      text: children
    });
  },
  default: function _default(_ref8) {
    var children = _ref8.children;
    return /*#__PURE__*/external_React_default.a.createElement(badge_default.a, {
      status: "default",
      text: children
    });
  },
  processing: function processing(_ref9) {
    var children = _ref9.children;
    return /*#__PURE__*/external_React_default.a.createElement(badge_default.a, {
      status: "processing",
      text: children
    });
  },
  warning: function warning(_ref10) {
    var children = _ref10.children;
    return /*#__PURE__*/external_React_default.a.createElement(badge_default.a, {
      status: "warning",
      text: children
    });
  }
};
var Status_ProFieldBadgeColor = function ProFieldBadgeColor(_ref11) {
  var color = _ref11.color,
      children = _ref11.children;
  return /*#__PURE__*/external_React_default.a.createElement(badge_default.a, {
    color: color,
    text: children
  });
};
/* harmony default export */ var es_components_Status = (Status_Status);
// CONCATENATED MODULE: ./packages/field/es/components/Options/index.js



function Options_ownKeys(object, enumerableOnly) {
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

function Options_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      Options_ownKeys(Object(source), true).forEach(function (key) {
        Options_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      Options_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function Options_defineProperty(obj, key, value) {
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



/**
 * 默认的 index 列容器，提供一个好看的 index
 * @param param0
 */

var Options_FieldOptions = function FieldOptions(_ref) {
  var text = _ref.text,
      type = _ref.mode,
      render = _ref.render,
      formItemProps = _ref.formItemProps;

  var _useContext = Object(external_React_["useContext"])(context_["ConfigContext"]),
      getPrefixCls = _useContext.getPrefixCls;

  var className = getPrefixCls('pro-field-option');

  if (render) {
    var dom = render(text, Options_objectSpread({
      mode: type
    }, formItemProps), /*#__PURE__*/external_React_default.a.createElement(external_React_default.a.Fragment, null));

    if (!dom || (dom === null || dom === void 0 ? void 0 : dom.length) < 1) {
      return null;
    }

    return /*#__PURE__*/external_React_default.a.createElement(space_default.a, {
      className: className
    }, dom);
  }

  if (!text || !Array.isArray(text)) {
    return text;
  }

  if (Array.isArray(text) && (text === null || text === void 0 ? void 0 : text.length) < 2) {
    return /*#__PURE__*/external_React_default.a.createElement(external_React_default.a.Fragment, null, text);
  }

  return /*#__PURE__*/external_React_default.a.createElement(space_default.a, {
    className: className
  }, text);
};

/* harmony default export */ var Options = (Options_FieldOptions);
// EXTERNAL MODULE: external "antd/es/select/style"
var select_style_ = __webpack_require__(53);

// EXTERNAL MODULE: external "antd/es/select"
var select_ = __webpack_require__(35);
var select_default = /*#__PURE__*/__webpack_require__.n(select_);

// EXTERNAL MODULE: external "antd/es/spin/style"
var spin_style_ = __webpack_require__(54);

// EXTERNAL MODULE: external "antd/es/spin"
var spin_ = __webpack_require__(36);
var spin_default = /*#__PURE__*/__webpack_require__.n(spin_);

// CONCATENATED MODULE: ./packages/field/es/components/Select/index.js





function Select_extends() {
  Select_extends = Object.assign || function (target) {
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

  return Select_extends.apply(this, arguments);
}

function Select_ownKeys(object, enumerableOnly) {
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

function Select_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      Select_ownKeys(Object(source), true).forEach(function (key) {
        Select_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      Select_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function Select_defineProperty(obj, key, value) {
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

function Select_objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = Select_objectWithoutPropertiesLoose(source, excluded);

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

function Select_objectWithoutPropertiesLoose(source, excluded) {
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

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function Select_slicedToArray(arr, i) {
  return Select_arrayWithHoles(arr) || Select_iterableToArrayLimit(arr, i) || Select_unsupportedIterableToArray(arr, i) || Select_nonIterableRest();
}

function Select_nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function Select_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Select_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Select_arrayLikeToArray(o, minLen);
}

function Select_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function Select_iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
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

function Select_arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function Select_typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    Select_typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    Select_typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return Select_typeof(obj);
}



var ObjToMap = function ObjToMap(value) {
  if (!value) {
    return value;
  }

  if (getType(value) === 'map') {
    return value;
  }

  return new Map(Object.entries(value));
};
/**
 * 转化 text 和 valueEnum
 * 通过 type 来添加 Status
 * @param text
 * @param valueEnum
 * @param pure 纯净模式，不增加 status
 */

var Select_proFieldParsingText = function proFieldParsingText(text, valueEnumParams, pure) {
  if (text === undefined || text === null) {
    return null;
  }

  if (!valueEnumParams) {
    return text;
  }

  var valueEnum = ObjToMap(valueEnumParams);

  if (!valueEnum) {
    return text;
  }

  if (!valueEnum.has(text) && !valueEnum.has("".concat(text))) {
    return text;
  }

  var domText = valueEnum.get(text) || valueEnum.get("".concat(text));

  if (domText.status) {
    if (pure) {
      return domText.text;
    }

    var status = domText.status;
    var Status = es_components_Status[status || 'Init'];

    if (Status) {
      return /*#__PURE__*/external_React_default.a.createElement(Status, null, domText.text);
    }
  }

  return domText.text || domText;
};
/**
 * 获取类型的 type
 * @param obj
 */

function getType(obj) {
  // @ts-ignore
  var type = Object.prototype.toString.call(obj).match(/^\[object (.*)\]$/)[1].toLowerCase();
  if (type === 'string' && Select_typeof(obj) === 'object') return 'object'; // Let "new String('')" return 'object'

  if (obj === null) return 'null'; // PhantomJS has type "DOMWindow" for null

  if (obj === undefined) return 'undefined'; // PhantomJS has type "DOMWindow" for undefined

  return type;
}
/**
 * 把 value 的枚举转化为数组
 * @param valueEnum
 */


var proFieldParsingValueEnumToArray = function proFieldParsingValueEnumToArray() {
  var valueEnumParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Map();
  var enumArray = [];
  var valueEnum = ObjToMap(valueEnumParams);

  if (!valueEnum) {
    return [];
  }

  valueEnum.forEach(function (_, key) {
    if (!valueEnum.has(key) && !valueEnum.has("".concat(key))) {
      return;
    }

    var value = valueEnum.get(key) || valueEnum.get("".concat(key));

    if (!value) {
      return;
    }

    if (Select_typeof(value) === 'object' && (value === null || value === void 0 ? void 0 : value.text)) {
      enumArray.push({
        text: value === null || value === void 0 ? void 0 : value.text,
        value: key
      });
      return;
    }

    enumArray.push({
      text: value,
      value: key
    });
  });
  return enumArray;
};

var Select_useFetchData = function useFetchData(props) {
  var _useState = Object(external_React_["useState"])(function () {
    return proFieldParsingValueEnumToArray(ObjToMap(props.valueEnum)).map(function (_ref) {
      var value = _ref.value,
          text = _ref.text;
      return {
        label: text,
        value: value
      };
    });
  }),
      _useState2 = Select_slicedToArray(_useState, 2),
      options = _useState2[0],
      setOptions = _useState2[1];

  var _useState3 = Object(external_React_["useState"])(false),
      _useState4 = Select_slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var fetchData = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var data;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (props.request) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              setLoading(true);
              _context.next = 5;
              return props.request(props.params, props);

            case 5:
              data = _context.sent;
              setOptions(data);
              setLoading(false);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function fetchData() {
      return _ref2.apply(this, arguments);
    };
  }();

  Object(external_React_["useEffect"])(function () {
    fetchData();
  }, [props.params]);
  return [loading, options, fetchData];
};
/**
 * 可以根据  valueEnum 来进行类型的设置
 * @param
 */


var Select_FieldSelect = function FieldSelect(props, ref) {
  var mode = props.mode,
      valueEnum = props.valueEnum,
      render = props.render,
      renderFormItem = props.renderFormItem,
      request = props.request,
      formItemProps = props.formItemProps,
      plain = props.plain,
      children = props.children,
      rest = Select_objectWithoutProperties(props, ["mode", "valueEnum", "render", "renderFormItem", "request", "formItemProps", "plain", "children"]);

  var inputRef = Object(external_React_["useRef"])();

  var _useFetchData = Select_useFetchData(props),
      _useFetchData2 = Select_slicedToArray(_useFetchData, 3),
      loading = _useFetchData2[0],
      options = _useFetchData2[1],
      _fetchData = _useFetchData2[2];

  Object(external_React_["useImperativeHandle"])(ref, function () {
    return Select_objectSpread(Select_objectSpread({}, inputRef.current || {}), {}, {
      fetchData: function fetchData() {
        return _fetchData();
      }
    });
  });

  if (mode === 'read') {
    if (loading) {
      return /*#__PURE__*/external_React_default.a.createElement(spin_default.a, null);
    }

    var optionsValueEnum = props.request ? options.reduce(function (pre, cur) {
      return Select_objectSpread(Select_objectSpread({}, pre), {}, Select_defineProperty({}, cur.value, cur.label));
    }, {}) : undefined;
    var dom = /*#__PURE__*/external_React_default.a.createElement(external_React_default.a.Fragment, null, Select_proFieldParsingText(rest.text, ObjToMap(optionsValueEnum || valueEnum)));

    if (render) {
      return render(rest.text, Select_objectSpread({
        mode: mode
      }, formItemProps), dom) || null;
    }

    return dom;
  }

  if (mode === 'edit' || mode === 'update') {
    var _dom = /*#__PURE__*/external_React_default.a.createElement(select_default.a, Select_extends({
      style: {
        minWidth: 100
      },
      loading: loading,
      ref: inputRef,
      allowClear: true
    }, rest, {
      options: options
    }, formItemProps), children);

    if (renderFormItem) {
      return renderFormItem(rest.text, Select_objectSpread({
        mode: mode
      }, formItemProps), _dom) || null;
    }

    return _dom;
  }

  return null;
};

/* harmony default export */ var Select = (/*#__PURE__*/external_React_default.a.forwardRef(Select_FieldSelect));
// CONCATENATED MODULE: ./packages/field/es/components/Digit/index.js



function Digit_extends() {
  Digit_extends = Object.assign || function (target) {
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

  return Digit_extends.apply(this, arguments);
}

function Digit_ownKeys(object, enumerableOnly) {
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

function Digit_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      Digit_ownKeys(Object(source), true).forEach(function (key) {
        Digit_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      Digit_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function Digit_defineProperty(obj, key, value) {
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


/**
 * 数字组件
 * @param FieldDigitProps
 * {
 *    text: number;
 *    moneySymbol?: string;
 * }
 */

var Digit_FieldDigit = function FieldDigit(_ref, ref) {
  var text = _ref.text,
      type = _ref.mode,
      render = _ref.render,
      renderFormItem = _ref.renderFormItem,
      formItemProps = _ref.formItemProps;

  if (type === 'read') {
    var digit = new Intl.NumberFormat().format(Number(text));
    var dom = /*#__PURE__*/external_React_default.a.createElement("span", {
      ref: ref
    }, digit);

    if (render) {
      return render(text, Digit_objectSpread({
        mode: type
      }, formItemProps), dom);
    }

    return dom;
  }

  if (type === 'edit' || type === 'update') {
    var _dom = /*#__PURE__*/external_React_default.a.createElement(input_number_default.a, Digit_extends({
      ref: ref,
      min: 0,
      precision: 2,
      style: {
        width: '100%'
      }
    }, formItemProps));

    if (renderFormItem) {
      return renderFormItem(text, Digit_objectSpread({
        mode: type
      }, formItemProps), _dom);
    }

    return _dom;
  }

  return null;
};

/* harmony default export */ var Digit = (/*#__PURE__*/external_React_default.a.forwardRef(Digit_FieldDigit));
// CONCATENATED MODULE: ./packages/field/es/index.js



function es_objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = es_objectWithoutPropertiesLoose(source, excluded);

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

function es_objectWithoutPropertiesLoose(source, excluded) {
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

function es_typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    es_typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    es_typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return es_typeof(obj);
}

function es_extends() {
  es_extends = Object.assign || function (target) {
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

  return es_extends.apply(this, arguments);
}

function es_ownKeys(object, enumerableOnly) {
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

function es_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      es_ownKeys(Object(source), true).forEach(function (key) {
        es_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      es_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function es_defineProperty(obj, key, value) {
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

















/**
 * render valueType object
 * @param text string | number
 * @param valueType ProColumnsValueObjectType
 */

var es_defaultRenderTextByObject = function defaultRenderTextByObject(text, valueType) {
  var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    mode: 'read',
    plain: false
  };
  var pickFormItemProps = pickProProps(props.formItemProps);

  if (valueType.type === 'progress') {
    return /*#__PURE__*/external_React_default.a.createElement(Progress, es_extends({}, props, {
      text: text,
      formItemProps: es_objectSpread({
        status: valueType.status ? valueType.status : undefined
      }, pickFormItemProps)
    }));
  }

  if (valueType.type === 'money') {
    return /*#__PURE__*/external_React_default.a.createElement(Money, es_extends({}, props, {
      formItemProps: pickFormItemProps,
      text: text,
      locale: valueType.locale
    }));
  }

  if (valueType.type === 'percent') {
    return /*#__PURE__*/external_React_default.a.createElement(Percent, es_extends({}, props, {
      text: text,
      showSymbol: valueType.showSymbol,
      precision: valueType.precision,
      formItemProps: pickFormItemProps
    }));
  }

  return text;
};
/**
 * 根据不同的类型来转化数值
 * @param text
 * @param valueType
 */


var es_defaultRenderText = function defaultRenderText(text, valueType, props) {
  if (es_typeof(valueType) === 'object') {
    return es_defaultRenderTextByObject(text, valueType, props);
  }
  /**
   * 如果是金额的值
   */


  if (valueType === 'money') {
    return /*#__PURE__*/external_React_default.a.createElement(Money, es_extends({}, props, {
      text: text
    }));
  }
  /**
   *如果是日期的值
   */


  if (valueType === 'date') {
    return /*#__PURE__*/external_React_default.a.createElement(DatePicker, es_extends({
      text: text,
      format: "YYYY-MM-DD"
    }, props));
  }
  /**
   *如果是日期范围的值
   */


  if (valueType === 'dateRange') {
    return /*#__PURE__*/external_React_default.a.createElement(RangePicker, es_extends({
      text: text,
      format: "YYYY-MM-DD"
    }, props));
  }
  /**
   *如果是日期加时间类型的值
   */


  if (valueType === 'dateTime') {
    return /*#__PURE__*/external_React_default.a.createElement(DatePicker, es_extends({
      text: text,
      format: "YYYY-MM-DD HH:mm:ss",
      showTime: true
    }, props));
  }
  /**
   *如果是日期加时间类型的值的值
   */


  if (valueType === 'dateTimeRange') {
    // 值不存在的时候显示 "-"
    return /*#__PURE__*/external_React_default.a.createElement(RangePicker, es_extends({
      text: text,
      format: "YYYY-MM-DD HH:mm:ss",
      showTime: true
    }, props));
  }
  /**
   *如果是时间类型的值
   */


  if (valueType === 'time') {
    return /*#__PURE__*/external_React_default.a.createElement(TimePicker, es_extends({
      text: text,
      format: "HH:mm:ss"
    }, props));
  }

  if (valueType === 'index') {
    return /*#__PURE__*/external_React_default.a.createElement(es_components_IndexColumn, null, text + 1);
  }

  if (valueType === 'indexBorder') {
    return /*#__PURE__*/external_React_default.a.createElement(es_components_IndexColumn, {
      border: true
    }, text + 1);
  }

  if (valueType === 'progress') {
    return /*#__PURE__*/external_React_default.a.createElement(Progress, es_extends({}, props, {
      text: text
    }));
  }
  /** 百分比, 默认展示符号, 不展示小数位 */


  if (valueType === 'percent') {
    return /*#__PURE__*/external_React_default.a.createElement(Percent, es_extends({
      text: text
    }, props));
  }

  if (valueType === 'avatar' && typeof text === 'string' && props.mode === 'read') {
    return /*#__PURE__*/external_React_default.a.createElement(avatar_default.a, {
      src: text,
      size: 22,
      shape: "circle"
    });
  }

  if (valueType === 'code') {
    return /*#__PURE__*/external_React_default.a.createElement(Code, es_extends({
      text: text
    }, props));
  }

  if (valueType === 'jsonCode') {
    return /*#__PURE__*/external_React_default.a.createElement(Code, es_extends({
      text: text,
      language: "json"
    }, props));
  }

  if (valueType === 'textarea') {
    return /*#__PURE__*/external_React_default.a.createElement(TextArea, es_extends({
      text: text
    }, props));
  }

  if (valueType === 'digit') {
    return /*#__PURE__*/external_React_default.a.createElement(Digit, es_extends({
      text: text
    }, props));
  }

  if (props.valueEnum || props.request) {
    return /*#__PURE__*/external_React_default.a.createElement(Select, es_extends({
      text: text
    }, props));
  }

  if (valueType === 'option') {
    return /*#__PURE__*/external_React_default.a.createElement(Options, es_extends({
      text: text
    }, props));
  }

  var _props$mode = props.mode,
      mode = _props$mode === void 0 ? 'read' : _props$mode,
      emptyText = props.emptyText;

  if (emptyText !== false && mode === 'read') {
    if (typeof text !== 'boolean' && typeof text !== 'number' && !text) {
      return emptyText || '-';
    }
  }

  return /*#__PURE__*/external_React_default.a.createElement(Text, es_extends({
    text: text
  }, props));
};



var es_Field = function Field(_ref, ref) {
  var _ref$text = _ref.text,
      text = _ref$text === void 0 ? '' : _ref$text,
      _ref$valueType = _ref.valueType,
      valueType = _ref$valueType === void 0 ? 'text' : _ref$valueType,
      onChange = _ref.onChange,
      value = _ref.value,
      rest = es_objectWithoutProperties(_ref, ["text", "valueType", "onChange", "value"]);

  var formItemProps = (value || onChange || (rest === null || rest === void 0 ? void 0 : rest.formItemProps)) && es_objectSpread(es_objectSpread({}, rest === null || rest === void 0 ? void 0 : rest.formItemProps), {}, {
    value: value,
    onChange: onChange
  });

  return /*#__PURE__*/external_React_default.a.createElement(external_React_default.a.Fragment, null, es_defaultRenderText(text, valueType, es_objectSpread(es_objectSpread({}, rest), {}, {
    mode: rest.mode || 'read',
    ref: ref,
    formItemProps: pickProProps(formItemProps)
  })));
};


/* harmony default export */ var field_es = (/*#__PURE__*/external_React_default.a.forwardRef(es_Field));
// EXTERNAL MODULE: ./packages/table/src/index.less
var src = __webpack_require__(55);

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/rc-util/lib/utils/get.js
var utils_get = __webpack_require__(37);
var get_default = /*#__PURE__*/__webpack_require__.n(utils_get);

// EXTERNAL MODULE: ./node_modules/rc-util/lib/hooks/useMergedState.js
var useMergedState = __webpack_require__(10);
var useMergedState_default = /*#__PURE__*/__webpack_require__.n(useMergedState);

// CONCATENATED MODULE: ./node_modules/use-json-comparison/dist/index.esm.js
function _typeof2(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }



function index_esm_typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    index_esm_typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    index_esm_typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return index_esm_typeof(obj);
}

var getCircularReplacer = function getCircularReplacer() {
  var seen = new WeakSet();
  return function (key, value) {
    if (index_esm_typeof(value) === 'object' && value !== null) {
      if (seen.has(value)) {
        return;
      }

      seen.add(value);
    }

    return value;
  };
};
/**
 * 一个更加安全的 stringify，可以解决循环依赖的问题
 * @param value
 */


var stringify = function stringify(value) {
  return JSON.stringify(value, getCircularReplacer());
};

var jsonCompareEquals = function jsonCompareEquals(value, nextValue) {
  try {
    return stringify(value) === stringify(nextValue);
  } catch (error) {// do something
  }

  return false;
};

function useJsonCompareMemoize(value) {
  var ref = Object(external_React_["useRef"])(''); // it can be done by using useMemo as well
  // but useRef is rather cleaner and easier

  if (!jsonCompareEquals(value, ref.current)) {
    ref.current = JSON.stringify(value, getCircularReplacer());
  }

  return ref.current;
}

function useDeepJSONEffect(effect, dependencies) {
  Object(external_React_["useEffect"])(effect, [useJsonCompareMemoize(dependencies)]);
}

/* harmony default export */ var index_esm = (useDeepJSONEffect);

// CONCATENATED MODULE: ./packages/table/src/useFetchData.tsx
function useFetchData_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function useFetchData_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { useFetchData_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { useFetchData_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function useFetchData_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function useFetchData_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { useFetchData_ownKeys(Object(source), true).forEach(function (key) { useFetchData_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { useFetchData_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function useFetchData_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var useFetchData_useFetchData = function useFetchData(getData, defaultData, options) {
  // 用于标定组件是否解除挂载，如果解除了就不要 setState
  var mountRef = Object(external_React_["useRef"])(true);

  var _ref = options || {},
      _ref$defaultPageSize = _ref.defaultPageSize,
      defaultPageSize = _ref$defaultPageSize === void 0 ? 20 : _ref$defaultPageSize,
      _ref$defaultCurrent = _ref.defaultCurrent,
      defaultCurrent = _ref$defaultCurrent === void 0 ? 1 : _ref$defaultCurrent,
      _ref$onLoad = _ref.onLoad,
      onLoad = _ref$onLoad === void 0 ? function () {
    return null;
  } : _ref$onLoad,
      manual = _ref.manual,
      onRequestError = _ref.onRequestError;

  var _useState = Object(external_React_["useState"])(defaultData),
      list = _useState[0],
      setList = _useState[1];

  var _useState2 = Object(external_React_["useState"])(undefined),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = Object(external_React_["useState"])({
    hasMore: false,
    page: defaultCurrent || 1,
    total: 0,
    pageSize: defaultPageSize
  }),
      pageInfo = _useState3[0],
      _setPageInfo = _useState3[1]; // pre state


  var prePage = hooks_usePrevious(pageInfo.page);
  var prePageSize = hooks_usePrevious(pageInfo.pageSize);

  var _ref2 = options || {},
      _ref2$effects = _ref2.effects,
      effects = _ref2$effects === void 0 ? [] : _ref2$effects;

  var setDataAndLoading = function setDataAndLoading(newData, dataTotal) {
    var pageSize = pageInfo.pageSize,
        page = pageInfo.page;
    setList(newData);
    setLoading(false);

    _setPageInfo(useFetchData_objectSpread(useFetchData_objectSpread({}, pageInfo), {}, {
      total: dataTotal,
      hasMore: dataTotal > pageSize * page
    }));
  };
  /**
   * 请求数据
   * @param isAppend 是否添加数据到后面
   */


  var fetchList = /*#__PURE__*/function () {
    var _ref3 = useFetchData_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(isAppend) {
      var pageSize, page, _ref4, data, success, _ref4$total, dataTotal;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(loading || !mountRef.current)) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              setLoading(true);
              pageSize = pageInfo.pageSize, page = pageInfo.page;
              _context.prev = 4;
              _context.next = 7;
              return getData({
                current: page,
                pageSize: pageSize
              });

            case 7:
              _context.t0 = _context.sent;

              if (_context.t0) {
                _context.next = 10;
                break;
              }

              _context.t0 = {};

            case 10:
              _ref4 = _context.t0;
              data = _ref4.data;
              success = _ref4.success;
              _ref4$total = _ref4.total;
              dataTotal = _ref4$total === void 0 ? 0 : _ref4$total;

              if (success !== false) {
                if (isAppend && list) {
                  setDataAndLoading([].concat(list, data), dataTotal);
                } else {
                  setDataAndLoading(data, dataTotal);
                }
              }

              if (onLoad) {
                onLoad(data);
              }

              _context.next = 27;
              break;

            case 19:
              _context.prev = 19;
              _context.t1 = _context["catch"](4);

              if (!(onRequestError === undefined)) {
                _context.next = 25;
                break;
              }

              throw new Error(_context.t1);

            case 25:
              onRequestError(_context.t1);

            case 26:
              setLoading(false);

            case 27:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[4, 19]]);
    }));

    return function fetchList(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  var fetchListDebounce = hooks_useDebounceFn(fetchList, [], 200);

  var fetchMore = function fetchMore() {
    // 如果没有更多的就忽略掉
    if (pageInfo.hasMore) {
      _setPageInfo(useFetchData_objectSpread(useFetchData_objectSpread({}, pageInfo), {}, {
        page: pageInfo.page + 1
      }));
    }
  };
  /**
   * pageIndex 改变的时候自动刷新
   */


  Object(external_React_["useEffect"])(function () {
    var page = pageInfo.page,
        pageSize = pageInfo.pageSize; // 如果上次的页码为空或者两次页码等于是没必要查询的
    // 如果 pageSize 发生变化是需要查询的，所以又加了 prePageSize

    if ((!prePage || prePage === page) && (!prePageSize || prePageSize === pageSize)) {
      return function () {
        return undefined;
      };
    } // 如果 list 的长度大于 pageSize 的长度
    // 说明是一个假分页
    // (pageIndex - 1 || 1) 至少要第一页
    // 在第一页大于 10
    // 第二页也应该是大于 10


    if (page !== undefined && list.length <= pageSize) {
      fetchListDebounce.run();
      return function () {
        return fetchListDebounce.cancel();
      };
    }

    return function () {
      return undefined;
    };
  }, [pageInfo.page]); // pageSize 修改后返回第一页

  Object(external_React_["useEffect"])(function () {
    if (!prePageSize) {
      return function () {
        return undefined;
      };
    }
    /**
     * 切换页面的时候清空一下数据，不然会造成判断失误。
     * 会认为是本地分页而不是服务器分页从而不请求数据
     */


    setList([]);

    _setPageInfo(useFetchData_objectSpread(useFetchData_objectSpread({}, pageInfo), {}, {
      page: 1
    }));

    fetchListDebounce.run();
    return function () {
      return fetchListDebounce.cancel();
    };
  }, [pageInfo.pageSize]);
  /**
   * 重置pageIndex 到 1
   */

  var resetPageIndex = function resetPageIndex() {
    _setPageInfo(useFetchData_objectSpread(useFetchData_objectSpread({}, pageInfo), {}, {
      page: 1
    }));
  };

  Object(external_React_["useEffect"])(function () {
    if (manual) {
      return function () {
        return null;
      };
    }

    mountRef.current = true;
    fetchListDebounce.run();
    return function () {
      fetchListDebounce.cancel();
      mountRef.current = false;
    };
  }, [].concat(effects, [manual]));
  return {
    setDataSource: setList,
    dataSource: list,
    loading: loading,
    reload: function () {
      var _reload = useFetchData_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", fetchListDebounce.run());

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function reload() {
        return _reload.apply(this, arguments);
      }

      return reload;
    }(),
    fetchMore: fetchMore,
    total: pageInfo.total,
    hasMore: pageInfo.hasMore,
    resetPageIndex: resetPageIndex,
    current: pageInfo.page,
    reset: function reset() {
      _setPageInfo({
        hasMore: false,
        page: defaultCurrent || 1,
        total: 0,
        pageSize: defaultPageSize
      });
    },
    cancel: fetchListDebounce.cancel,
    pageSize: pageInfo.pageSize,
    setPageInfo: function setPageInfo(info) {
      return _setPageInfo(useFetchData_objectSpread(useFetchData_objectSpread({}, pageInfo), info));
    }
  };
};

/* harmony default export */ var src_useFetchData = (useFetchData_useFetchData);
// CONCATENATED MODULE: ./node_modules/unstated-next/dist/unstated-next.mjs


function createContainer(useHook) {
  var Context = external_React_.createContext(null);

  function Provider(props) {
    var value = useHook(props.initialState);
    return external_React_.createElement(Context.Provider, {
      value: value
    }, props.children);
  }

  function useContainer() {
    var value = external_React_.useContext(Context);

    if (value === null) {
      throw new Error("Component must be wrapped with <Container.Provider>");
    }

    return value;
  }

  return {
    Provider: Provider,
    useContainer: useContainer
  };
}
function unstated_next_useContainer(container) {
  return container.useContainer();
}


//# sourceMappingURL=unstated-next.mjs.map

// CONCATENATED MODULE: ./packages/table/src/container.tsx




function useCounter(props) {
  if (props === void 0) {
    props = {};
  }

  var actionRef = Object(external_React_["useRef"])();

  var _useState = Object(external_React_["useState"])([]),
      columns = _useState[0],
      setColumns = _useState[1];

  var propsRef = Object(external_React_["useRef"])(); // 用于排序的数组

  var sortKeyColumns = Object(external_React_["useRef"])([]);

  var _useState2 = Object(external_React_["useState"])([]),
      proColumns = _useState2[0],
      setProColumns = _useState2[1];

  var _useMergedState = useMergedState_default()(props.size || 'middle', {
    value: props.size,
    onChange: props.onSizeChange
  }),
      tableSize = _useMergedState[0],
      setTableSize = _useMergedState[1];

  var _useMergedState2 = useMergedState_default()(props.columnsStateMap || {}, {
    value: props.columnsStateMap,
    onChange: props.onColumnsStateChange
  }),
      columnsMap = _useMergedState2[0],
      setColumnsMap = _useMergedState2[1];

  return {
    action: actionRef,
    setAction: function setAction(newAction) {
      actionRef.current = newAction;
    },
    sortKeyColumns: sortKeyColumns.current,
    setSortKeyColumns: function setSortKeyColumns(keys) {
      sortKeyColumns.current = keys;
    },
    columns: columns,
    setColumns: setColumns,
    propsRef: propsRef,
    columnsMap: columnsMap,
    setTableSize: setTableSize,
    tableSize: tableSize,
    setColumnsMap: setColumnsMap,
    proColumns: proColumns,
    setProColumns: setProColumns
  };
}

var Counter = createContainer(useCounter);

/* harmony default export */ var container = (Counter);
// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/ReloadOutlined.js
// This icon file is generated automatically.
var ReloadOutlined_ReloadOutlined = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 00-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 01655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 01279 755.2a342.16 342.16 0 01-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 01109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z"
      }
    }]
  },
  "name": "reload",
  "theme": "outlined"
};
/* harmony default export */ var asn_ReloadOutlined = (ReloadOutlined_ReloadOutlined);
// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/ReloadOutlined.js
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var icons_ReloadOutlined_ReloadOutlined = function ReloadOutlined(props, ref) {
  return /*#__PURE__*/external_React_["createElement"](AntdIcon, Object.assign({}, props, {
    ref: ref,
    icon: asn_ReloadOutlined
  }));
};

icons_ReloadOutlined_ReloadOutlined.displayName = 'ReloadOutlined';
/* harmony default export */ var icons_ReloadOutlined = (/*#__PURE__*/external_React_["forwardRef"](icons_ReloadOutlined_ReloadOutlined));
// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/SettingOutlined.js
// This icon file is generated automatically.
var SettingOutlined_SettingOutlined = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 009.3-35.2l-.9-2.6a443.74 443.74 0 00-79.7-137.9l-1.8-2.1a32.12 32.12 0 00-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 00-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 00-25.8 25.7l-15.8 85.4a351.86 351.86 0 00-99 57.4l-81.9-29.1a32 32 0 00-35.1 9.5l-1.8 2.1a446.02 446.02 0 00-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1 0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 00-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0035.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0025.8 25.7l2.7.5a449.4 449.4 0 00159 0l2.7-.5a32.05 32.05 0 0025.8-25.7l15.7-85a350 350 0 0099.7-57.6l81.3 28.9a32 32 0 0035.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1 74.7 63.9a370.03 370.03 0 01-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3-17.9 97a377.5 377.5 0 01-85 0l-17.9-97.2-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5 0-15.3 1.2-30.6 3.7-45.5l6.5-40-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2 31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3 17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97 38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8 92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 01512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 01400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 01624 502c0 29.9-11.7 58-32.8 79.2z"
      }
    }]
  },
  "name": "setting",
  "theme": "outlined"
};
/* harmony default export */ var asn_SettingOutlined = (SettingOutlined_SettingOutlined);
// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/SettingOutlined.js
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var icons_SettingOutlined_SettingOutlined = function SettingOutlined(props, ref) {
  return /*#__PURE__*/external_React_["createElement"](AntdIcon, Object.assign({}, props, {
    ref: ref,
    icon: asn_SettingOutlined
  }));
};

icons_SettingOutlined_SettingOutlined.displayName = 'SettingOutlined';
/* harmony default export */ var icons_SettingOutlined = (/*#__PURE__*/external_React_["forwardRef"](icons_SettingOutlined_SettingOutlined));
// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/VerticalAlignTopOutlined.js
// This icon file is generated automatically.
var VerticalAlignTopOutlined_VerticalAlignTopOutlined = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z"
      }
    }]
  },
  "name": "vertical-align-top",
  "theme": "outlined"
};
/* harmony default export */ var asn_VerticalAlignTopOutlined = (VerticalAlignTopOutlined_VerticalAlignTopOutlined);
// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/VerticalAlignTopOutlined.js
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var icons_VerticalAlignTopOutlined_VerticalAlignTopOutlined = function VerticalAlignTopOutlined(props, ref) {
  return /*#__PURE__*/external_React_["createElement"](AntdIcon, Object.assign({}, props, {
    ref: ref,
    icon: asn_VerticalAlignTopOutlined
  }));
};

icons_VerticalAlignTopOutlined_VerticalAlignTopOutlined.displayName = 'VerticalAlignTopOutlined';
/* harmony default export */ var icons_VerticalAlignTopOutlined = (/*#__PURE__*/external_React_["forwardRef"](icons_VerticalAlignTopOutlined_VerticalAlignTopOutlined));
// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/VerticalAlignMiddleOutlined.js
// This icon file is generated automatically.
var VerticalAlignMiddleOutlined_VerticalAlignMiddleOutlined = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M859.9 474H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zm-353.6-74.7c2.9 3.7 8.5 3.7 11.3 0l100.8-127.5c3.7-4.7.4-11.7-5.7-11.7H550V104c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v156h-62.8c-6 0-9.4 7-5.7 11.7l100.8 127.6zm11.4 225.4a7.14 7.14 0 00-11.3 0L405.6 752.3a7.23 7.23 0 005.7 11.7H474v156c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V764h62.8c6 0 9.4-7 5.7-11.7L517.7 624.7z"
      }
    }]
  },
  "name": "vertical-align-middle",
  "theme": "outlined"
};
/* harmony default export */ var asn_VerticalAlignMiddleOutlined = (VerticalAlignMiddleOutlined_VerticalAlignMiddleOutlined);
// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/VerticalAlignMiddleOutlined.js
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var icons_VerticalAlignMiddleOutlined_VerticalAlignMiddleOutlined = function VerticalAlignMiddleOutlined(props, ref) {
  return /*#__PURE__*/external_React_["createElement"](AntdIcon, Object.assign({}, props, {
    ref: ref,
    icon: asn_VerticalAlignMiddleOutlined
  }));
};

icons_VerticalAlignMiddleOutlined_VerticalAlignMiddleOutlined.displayName = 'VerticalAlignMiddleOutlined';
/* harmony default export */ var icons_VerticalAlignMiddleOutlined = (/*#__PURE__*/external_React_["forwardRef"](icons_VerticalAlignMiddleOutlined_VerticalAlignMiddleOutlined));
// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/VerticalAlignBottomOutlined.js
// This icon file is generated automatically.
var VerticalAlignBottomOutlined_VerticalAlignBottomOutlined = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M859.9 780H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM505.7 669a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V176c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8z"
      }
    }]
  },
  "name": "vertical-align-bottom",
  "theme": "outlined"
};
/* harmony default export */ var asn_VerticalAlignBottomOutlined = (VerticalAlignBottomOutlined_VerticalAlignBottomOutlined);
// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/VerticalAlignBottomOutlined.js
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var icons_VerticalAlignBottomOutlined_VerticalAlignBottomOutlined = function VerticalAlignBottomOutlined(props, ref) {
  return /*#__PURE__*/external_React_["createElement"](AntdIcon, Object.assign({}, props, {
    ref: ref,
    icon: asn_VerticalAlignBottomOutlined
  }));
};

icons_VerticalAlignBottomOutlined_VerticalAlignBottomOutlined.displayName = 'VerticalAlignBottomOutlined';
/* harmony default export */ var icons_VerticalAlignBottomOutlined = (/*#__PURE__*/external_React_["forwardRef"](icons_VerticalAlignBottomOutlined_VerticalAlignBottomOutlined));
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/common/DndProvider.js
var DndProvider = __webpack_require__(65);

// CONCATENATED MODULE: ./node_modules/react-dnd-html5-backend/dist/esm/utils/js_utils.js
// cheap lodash replacements
function memoize(fn) {
  var result = null;

  var memoized = function memoized() {
    if (result == null) {
      result = fn();
    }

    return result;
  };

  return memoized;
}
/**
 * drop-in replacement for _.without
 */

function without(items, item) {
  return items.filter(function (i) {
    return i !== item;
  });
}
function union(itemsA, itemsB) {
  var set = new Set();

  var insertItem = function insertItem(item) {
    return set.add(item);
  };

  itemsA.forEach(insertItem);
  itemsB.forEach(insertItem);
  var result = [];
  set.forEach(function (key) {
    return result.push(key);
  });
  return result;
}
// CONCATENATED MODULE: ./node_modules/react-dnd-html5-backend/dist/esm/EnterLeaveCounter.js
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



var EnterLeaveCounter_EnterLeaveCounter = /*#__PURE__*/function () {
  function EnterLeaveCounter(isNodeInDocument) {
    _classCallCheck(this, EnterLeaveCounter);

    this.entered = [];
    this.isNodeInDocument = isNodeInDocument;
  }

  _createClass(EnterLeaveCounter, [{
    key: "enter",
    value: function enter(enteringNode) {
      var _this = this;

      var previousLength = this.entered.length;

      var isNodeEntered = function isNodeEntered(node) {
        return _this.isNodeInDocument(node) && (!node.contains || node.contains(enteringNode));
      };

      this.entered = union(this.entered.filter(isNodeEntered), [enteringNode]);
      return previousLength === 0 && this.entered.length > 0;
    }
  }, {
    key: "leave",
    value: function leave(leavingNode) {
      var previousLength = this.entered.length;
      this.entered = without(this.entered.filter(this.isNodeInDocument), leavingNode);
      return previousLength > 0 && this.entered.length === 0;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.entered = [];
    }
  }]);

  return EnterLeaveCounter;
}();


// CONCATENATED MODULE: ./node_modules/react-dnd-html5-backend/dist/esm/BrowserDetector.js

var isFirefox = memoize(function () {
  return /firefox/i.test(navigator.userAgent);
});
var isSafari = memoize(function () {
  return Boolean(window.safari);
});
// CONCATENATED MODULE: ./node_modules/react-dnd-html5-backend/dist/esm/MonotonicInterpolant.js
function MonotonicInterpolant_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function MonotonicInterpolant_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function MonotonicInterpolant_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) MonotonicInterpolant_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) MonotonicInterpolant_defineProperties(Constructor, staticProps);
  return Constructor;
}

var MonotonicInterpolant = /*#__PURE__*/function () {
  function MonotonicInterpolant(xs, ys) {
    MonotonicInterpolant_classCallCheck(this, MonotonicInterpolant);

    var length = xs.length; // Rearrange xs and ys so that xs is sorted

    var indexes = [];

    for (var i = 0; i < length; i++) {
      indexes.push(i);
    }

    indexes.sort(function (a, b) {
      return xs[a] < xs[b] ? -1 : 1;
    }); // Get consecutive differences and slopes

    var dys = [];
    var dxs = [];
    var ms = [];
    var dx;
    var dy;

    for (var _i = 0; _i < length - 1; _i++) {
      dx = xs[_i + 1] - xs[_i];
      dy = ys[_i + 1] - ys[_i];
      dxs.push(dx);
      dys.push(dy);
      ms.push(dy / dx);
    } // Get degree-1 coefficients


    var c1s = [ms[0]];

    for (var _i2 = 0; _i2 < dxs.length - 1; _i2++) {
      var m2 = ms[_i2];
      var mNext = ms[_i2 + 1];

      if (m2 * mNext <= 0) {
        c1s.push(0);
      } else {
        dx = dxs[_i2];
        var dxNext = dxs[_i2 + 1];
        var common = dx + dxNext;
        c1s.push(3 * common / ((common + dxNext) / m2 + (common + dx) / mNext));
      }
    }

    c1s.push(ms[ms.length - 1]); // Get degree-2 and degree-3 coefficients

    var c2s = [];
    var c3s = [];
    var m;

    for (var _i3 = 0; _i3 < c1s.length - 1; _i3++) {
      m = ms[_i3];
      var c1 = c1s[_i3];
      var invDx = 1 / dxs[_i3];

      var _common = c1 + c1s[_i3 + 1] - m - m;

      c2s.push((m - c1 - _common) * invDx);
      c3s.push(_common * invDx * invDx);
    }

    this.xs = xs;
    this.ys = ys;
    this.c1s = c1s;
    this.c2s = c2s;
    this.c3s = c3s;
  }

  MonotonicInterpolant_createClass(MonotonicInterpolant, [{
    key: "interpolate",
    value: function interpolate(x) {
      var xs = this.xs,
          ys = this.ys,
          c1s = this.c1s,
          c2s = this.c2s,
          c3s = this.c3s; // The rightmost point in the dataset should give an exact result

      var i = xs.length - 1;

      if (x === xs[i]) {
        return ys[i];
      } // Search for the interval x is in, returning the corresponding y if x is one of the original xs


      var low = 0;
      var high = c3s.length - 1;
      var mid;

      while (low <= high) {
        mid = Math.floor(0.5 * (low + high));
        var xHere = xs[mid];

        if (xHere < x) {
          low = mid + 1;
        } else if (xHere > x) {
          high = mid - 1;
        } else {
          return ys[mid];
        }
      }

      i = Math.max(0, high); // Interpolate

      var diff = x - xs[i];
      var diffSq = diff * diff;
      return ys[i] + c1s[i] * diff + c2s[i] * diffSq + c3s[i] * diff * diffSq;
    }
  }]);

  return MonotonicInterpolant;
}();


// CONCATENATED MODULE: ./node_modules/react-dnd-html5-backend/dist/esm/OffsetUtils.js


var ELEMENT_NODE = 1;
function getNodeClientOffset(node) {
  var el = node.nodeType === ELEMENT_NODE ? node : node.parentElement;

  if (!el) {
    return null;
  }

  var _el$getBoundingClient = el.getBoundingClientRect(),
      top = _el$getBoundingClient.top,
      left = _el$getBoundingClient.left;

  return {
    x: left,
    y: top
  };
}
function getEventClientOffset(e) {
  return {
    x: e.clientX,
    y: e.clientY
  };
}

function isImageNode(node) {
  return node.nodeName === 'IMG' && (isFirefox() || !document.documentElement.contains(node));
}

function getDragPreviewSize(isImage, dragPreview, sourceWidth, sourceHeight) {
  var dragPreviewWidth = isImage ? dragPreview.width : sourceWidth;
  var dragPreviewHeight = isImage ? dragPreview.height : sourceHeight; // Work around @2x coordinate discrepancies in browsers

  if (isSafari() && isImage) {
    dragPreviewHeight /= window.devicePixelRatio;
    dragPreviewWidth /= window.devicePixelRatio;
  }

  return {
    dragPreviewWidth: dragPreviewWidth,
    dragPreviewHeight: dragPreviewHeight
  };
}

function getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint, offsetPoint) {
  // The browsers will use the image intrinsic size under different conditions.
  // Firefox only cares if it's an image, but WebKit also wants it to be detached.
  var isImage = isImageNode(dragPreview);
  var dragPreviewNode = isImage ? sourceNode : dragPreview;
  var dragPreviewNodeOffsetFromClient = getNodeClientOffset(dragPreviewNode);
  var offsetFromDragPreview = {
    x: clientOffset.x - dragPreviewNodeOffsetFromClient.x,
    y: clientOffset.y - dragPreviewNodeOffsetFromClient.y
  };
  var sourceWidth = sourceNode.offsetWidth,
      sourceHeight = sourceNode.offsetHeight;
  var anchorX = anchorPoint.anchorX,
      anchorY = anchorPoint.anchorY;

  var _getDragPreviewSize = getDragPreviewSize(isImage, dragPreview, sourceWidth, sourceHeight),
      dragPreviewWidth = _getDragPreviewSize.dragPreviewWidth,
      dragPreviewHeight = _getDragPreviewSize.dragPreviewHeight;

  var calculateYOffset = function calculateYOffset() {
    var interpolantY = new MonotonicInterpolant([0, 0.5, 1], [// Dock to the top
    offsetFromDragPreview.y, // Align at the center
    offsetFromDragPreview.y / sourceHeight * dragPreviewHeight, // Dock to the bottom
    offsetFromDragPreview.y + dragPreviewHeight - sourceHeight]);
    var y = interpolantY.interpolate(anchorY); // Work around Safari 8 positioning bug

    if (isSafari() && isImage) {
      // We'll have to wait for @3x to see if this is entirely correct
      y += (window.devicePixelRatio - 1) * dragPreviewHeight;
    }

    return y;
  };

  var calculateXOffset = function calculateXOffset() {
    // Interpolate coordinates depending on anchor point
    // If you know a simpler way to do this, let me know
    var interpolantX = new MonotonicInterpolant([0, 0.5, 1], [// Dock to the left
    offsetFromDragPreview.x, // Align at the center
    offsetFromDragPreview.x / sourceWidth * dragPreviewWidth, // Dock to the right
    offsetFromDragPreview.x + dragPreviewWidth - sourceWidth]);
    return interpolantX.interpolate(anchorX);
  }; // Force offsets if specified in the options.


  var offsetX = offsetPoint.offsetX,
      offsetY = offsetPoint.offsetY;
  var isManualOffsetX = offsetX === 0 || offsetX;
  var isManualOffsetY = offsetY === 0 || offsetY;
  return {
    x: isManualOffsetX ? offsetX : calculateXOffset(),
    y: isManualOffsetY ? offsetY : calculateYOffset()
  };
}
// CONCATENATED MODULE: ./node_modules/react-dnd-html5-backend/dist/esm/NativeTypes.js
var FILE = '__NATIVE_FILE__';
var URL = '__NATIVE_URL__';
var TEXT = '__NATIVE_TEXT__';
// CONCATENATED MODULE: ./node_modules/react-dnd-html5-backend/dist/esm/NativeDragSources/getDataFromDataTransfer.js
function getDataFromDataTransfer(dataTransfer, typesToTry, defaultValue) {
  var result = typesToTry.reduce(function (resultSoFar, typeToTry) {
    return resultSoFar || dataTransfer.getData(typeToTry);
  }, '');
  return result != null ? result : defaultValue;
}
// CONCATENATED MODULE: ./node_modules/react-dnd-html5-backend/dist/esm/NativeDragSources/nativeTypesConfig.js
var _nativeTypesConfig;

function nativeTypesConfig_defineProperty(obj, key, value) {
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



var nativeTypesConfig = (_nativeTypesConfig = {}, nativeTypesConfig_defineProperty(_nativeTypesConfig, FILE, {
  exposeProperties: {
    files: function files(dataTransfer) {
      return Array.prototype.slice.call(dataTransfer.files);
    },
    items: function items(dataTransfer) {
      return dataTransfer.items;
    }
  },
  matchesTypes: ['Files']
}), nativeTypesConfig_defineProperty(_nativeTypesConfig, URL, {
  exposeProperties: {
    urls: function urls(dataTransfer, matchesTypes) {
      return getDataFromDataTransfer(dataTransfer, matchesTypes, '').split('\n');
    }
  },
  matchesTypes: ['Url', 'text/uri-list']
}), nativeTypesConfig_defineProperty(_nativeTypesConfig, TEXT, {
  exposeProperties: {
    text: function text(dataTransfer, matchesTypes) {
      return getDataFromDataTransfer(dataTransfer, matchesTypes, '');
    }
  },
  matchesTypes: ['Text', 'text/plain']
}), _nativeTypesConfig);
// CONCATENATED MODULE: ./node_modules/react-dnd-html5-backend/dist/esm/NativeDragSources/NativeDragSource.js
function NativeDragSource_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function NativeDragSource_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function NativeDragSource_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) NativeDragSource_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) NativeDragSource_defineProperties(Constructor, staticProps);
  return Constructor;
}

var NativeDragSource = /*#__PURE__*/function () {
  function NativeDragSource(config) {
    NativeDragSource_classCallCheck(this, NativeDragSource);

    this.config = config;
    this.item = {};
    this.initializeExposedProperties();
  }

  NativeDragSource_createClass(NativeDragSource, [{
    key: "initializeExposedProperties",
    value: function initializeExposedProperties() {
      var _this = this;

      Object.keys(this.config.exposeProperties).forEach(function (property) {
        Object.defineProperty(_this.item, property, {
          configurable: true,
          enumerable: true,
          get: function get() {
            // eslint-disable-next-line no-console
            console.warn("Browser doesn't allow reading \"".concat(property, "\" until the drop event."));
            return null;
          }
        });
      });
    }
  }, {
    key: "loadDataTransfer",
    value: function loadDataTransfer(dataTransfer) {
      var _this2 = this;

      if (dataTransfer) {
        var newProperties = {};
        Object.keys(this.config.exposeProperties).forEach(function (property) {
          newProperties[property] = {
            value: _this2.config.exposeProperties[property](dataTransfer, _this2.config.matchesTypes),
            configurable: true,
            enumerable: true
          };
        });
        Object.defineProperties(this.item, newProperties);
      }
    }
  }, {
    key: "canDrag",
    value: function canDrag() {
      return true;
    }
  }, {
    key: "beginDrag",
    value: function beginDrag() {
      return this.item;
    }
  }, {
    key: "isDragging",
    value: function isDragging(monitor, handle) {
      return handle === monitor.getSourceId();
    }
  }, {
    key: "endDrag",
    value: function endDrag() {// empty
    }
  }]);

  return NativeDragSource;
}();
// CONCATENATED MODULE: ./node_modules/react-dnd-html5-backend/dist/esm/NativeDragSources/index.js


function createNativeDragSource(type, dataTransfer) {
  var result = new NativeDragSource(nativeTypesConfig[type]);
  result.loadDataTransfer(dataTransfer);
  return result;
}
function matchNativeItemType(dataTransfer) {
  if (!dataTransfer) {
    return null;
  }

  var dataTransferTypes = Array.prototype.slice.call(dataTransfer.types || []);
  return Object.keys(nativeTypesConfig).filter(function (nativeItemType) {
    var matchesTypes = nativeTypesConfig[nativeItemType].matchesTypes;
    return matchesTypes.some(function (t) {
      return dataTransferTypes.indexOf(t) > -1;
    });
  })[0] || null;
}
// CONCATENATED MODULE: ./node_modules/react-dnd-html5-backend/dist/esm/OptionsReader.js
function OptionsReader_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function OptionsReader_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function OptionsReader_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) OptionsReader_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) OptionsReader_defineProperties(Constructor, staticProps);
  return Constructor;
}

var OptionsReader = /*#__PURE__*/function () {
  function OptionsReader(globalContext) {
    OptionsReader_classCallCheck(this, OptionsReader);

    this.globalContext = globalContext;
  }

  OptionsReader_createClass(OptionsReader, [{
    key: "window",
    get: function get() {
      if (this.globalContext) {
        return this.globalContext;
      } else if (typeof window !== 'undefined') {
        return window;
      }

      return undefined;
    }
  }, {
    key: "document",
    get: function get() {
      if (this.window) {
        return this.window.document;
      }

      return undefined;
    }
  }]);

  return OptionsReader;
}();
// CONCATENATED MODULE: ./node_modules/react-dnd-html5-backend/dist/esm/HTML5Backend.js
function HTML5Backend_ownKeys(object, enumerableOnly) {
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

function HTML5Backend_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      HTML5Backend_ownKeys(Object(source), true).forEach(function (key) {
        HTML5Backend_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      HTML5Backend_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function HTML5Backend_defineProperty(obj, key, value) {
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

function HTML5Backend_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function HTML5Backend_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function HTML5Backend_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) HTML5Backend_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) HTML5Backend_defineProperties(Constructor, staticProps);
  return Constructor;
}








var HTML5Backend_HTML5Backend = /*#__PURE__*/function () {
  function HTML5Backend(manager, globalContext) {
    var _this = this;

    HTML5Backend_classCallCheck(this, HTML5Backend);

    this.sourcePreviewNodes = new Map();
    this.sourcePreviewNodeOptions = new Map();
    this.sourceNodes = new Map();
    this.sourceNodeOptions = new Map();
    this.dragStartSourceIds = null;
    this.dropTargetIds = [];
    this.dragEnterTargetIds = [];
    this.currentNativeSource = null;
    this.currentNativeHandle = null;
    this.currentDragSourceNode = null;
    this.altKeyPressed = false;
    this.mouseMoveTimeoutTimer = null;
    this.asyncEndDragFrameId = null;
    this.dragOverTargetIds = null;

    this.getSourceClientOffset = function (sourceId) {
      return getNodeClientOffset(_this.sourceNodes.get(sourceId));
    };

    this.endDragNativeItem = function () {
      if (!_this.isDraggingNativeItem()) {
        return;
      }

      _this.actions.endDrag();

      _this.registry.removeSource(_this.currentNativeHandle);

      _this.currentNativeHandle = null;
      _this.currentNativeSource = null;
    };

    this.isNodeInDocument = function (node) {
      // Check the node either in the main document or in the current context
      return _this.document && _this.document.body && document.body.contains(node);
    };

    this.endDragIfSourceWasRemovedFromDOM = function () {
      var node = _this.currentDragSourceNode;

      if (_this.isNodeInDocument(node)) {
        return;
      }

      if (_this.clearCurrentDragSourceNode()) {
        _this.actions.endDrag();
      }
    };

    this.handleTopDragStartCapture = function () {
      _this.clearCurrentDragSourceNode();

      _this.dragStartSourceIds = [];
    };

    this.handleTopDragStart = function (e) {
      if (e.defaultPrevented) {
        return;
      }

      var dragStartSourceIds = _this.dragStartSourceIds;
      _this.dragStartSourceIds = null;
      var clientOffset = getEventClientOffset(e); // Avoid crashing if we missed a drop event or our previous drag died

      if (_this.monitor.isDragging()) {
        _this.actions.endDrag();
      } // Don't publish the source just yet (see why below)


      _this.actions.beginDrag(dragStartSourceIds || [], {
        publishSource: false,
        getSourceClientOffset: _this.getSourceClientOffset,
        clientOffset: clientOffset
      });

      var dataTransfer = e.dataTransfer;
      var nativeType = matchNativeItemType(dataTransfer);

      if (_this.monitor.isDragging()) {
        if (dataTransfer && typeof dataTransfer.setDragImage === 'function') {
          // Use custom drag image if user specifies it.
          // If child drag source refuses drag but parent agrees,
          // use parent's node as drag image. Neither works in IE though.
          var sourceId = _this.monitor.getSourceId();

          var sourceNode = _this.sourceNodes.get(sourceId);

          var dragPreview = _this.sourcePreviewNodes.get(sourceId) || sourceNode;

          if (dragPreview) {
            var _this$getCurrentSourc = _this.getCurrentSourcePreviewNodeOptions(),
                anchorX = _this$getCurrentSourc.anchorX,
                anchorY = _this$getCurrentSourc.anchorY,
                offsetX = _this$getCurrentSourc.offsetX,
                offsetY = _this$getCurrentSourc.offsetY;

            var anchorPoint = {
              anchorX: anchorX,
              anchorY: anchorY
            };
            var offsetPoint = {
              offsetX: offsetX,
              offsetY: offsetY
            };
            var dragPreviewOffset = getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint, offsetPoint);
            dataTransfer.setDragImage(dragPreview, dragPreviewOffset.x, dragPreviewOffset.y);
          }
        }

        try {
          // Firefox won't drag without setting data
          dataTransfer.setData('application/json', {});
        } catch (err) {} // IE doesn't support MIME types in setData
        // Store drag source node so we can check whether
        // it is removed from DOM and trigger endDrag manually.


        _this.setCurrentDragSourceNode(e.target); // Now we are ready to publish the drag source.. or are we not?


        var _this$getCurrentSourc2 = _this.getCurrentSourcePreviewNodeOptions(),
            captureDraggingState = _this$getCurrentSourc2.captureDraggingState;

        if (!captureDraggingState) {
          // Usually we want to publish it in the next tick so that browser
          // is able to screenshot the current (not yet dragging) state.
          //
          // It also neatly avoids a situation where render() returns null
          // in the same tick for the source element, and browser freaks out.
          setTimeout(function () {
            return _this.actions.publishDragSource();
          }, 0);
        } else {
          // In some cases the user may want to override this behavior, e.g.
          // to work around IE not supporting custom drag previews.
          //
          // When using a custom drag layer, the only way to prevent
          // the default drag preview from drawing in IE is to screenshot
          // the dragging state in which the node itself has zero opacity
          // and height. In this case, though, returning null from render()
          // will abruptly end the dragging, which is not obvious.
          //
          // This is the reason such behavior is strictly opt-in.
          _this.actions.publishDragSource();
        }
      } else if (nativeType) {
        // A native item (such as URL) dragged from inside the document
        _this.beginDragNativeItem(nativeType);
      } else if (dataTransfer && !dataTransfer.types && (e.target && !e.target.hasAttribute || !e.target.hasAttribute('draggable'))) {
        // Looks like a Safari bug: dataTransfer.types is null, but there was no draggable.
        // Just let it drag. It's a native type (URL or text) and will be picked up in
        // dragenter handler.
        return;
      } else {
        // If by this time no drag source reacted, tell browser not to drag.
        e.preventDefault();
      }
    };

    this.handleTopDragEndCapture = function () {
      if (_this.clearCurrentDragSourceNode()) {
        // Firefox can dispatch this event in an infinite loop
        // if dragend handler does something like showing an alert.
        // Only proceed if we have not handled it already.
        _this.actions.endDrag();
      }
    };

    this.handleTopDragEnterCapture = function (e) {
      _this.dragEnterTargetIds = [];

      var isFirstEnter = _this.enterLeaveCounter.enter(e.target);

      if (!isFirstEnter || _this.monitor.isDragging()) {
        return;
      }

      var dataTransfer = e.dataTransfer;
      var nativeType = matchNativeItemType(dataTransfer);

      if (nativeType) {
        // A native item (such as file or URL) dragged from outside the document
        _this.beginDragNativeItem(nativeType, dataTransfer);
      }
    };

    this.handleTopDragEnter = function (e) {
      var dragEnterTargetIds = _this.dragEnterTargetIds;
      _this.dragEnterTargetIds = [];

      if (!_this.monitor.isDragging()) {
        // This is probably a native item type we don't understand.
        return;
      }

      _this.altKeyPressed = e.altKey;

      if (!isFirefox()) {
        // Don't emit hover in `dragenter` on Firefox due to an edge case.
        // If the target changes position as the result of `dragenter`, Firefox
        // will still happily dispatch `dragover` despite target being no longer
        // there. The easy solution is to only fire `hover` in `dragover` on FF.
        _this.actions.hover(dragEnterTargetIds, {
          clientOffset: getEventClientOffset(e)
        });
      }

      var canDrop = dragEnterTargetIds.some(function (targetId) {
        return _this.monitor.canDropOnTarget(targetId);
      });

      if (canDrop) {
        // IE requires this to fire dragover events
        e.preventDefault();

        if (e.dataTransfer) {
          e.dataTransfer.dropEffect = _this.getCurrentDropEffect();
        }
      }
    };

    this.handleTopDragOverCapture = function () {
      _this.dragOverTargetIds = [];
    };

    this.handleTopDragOver = function (e) {
      var dragOverTargetIds = _this.dragOverTargetIds;
      _this.dragOverTargetIds = [];

      if (!_this.monitor.isDragging()) {
        // This is probably a native item type we don't understand.
        // Prevent default "drop and blow away the whole document" action.
        e.preventDefault();

        if (e.dataTransfer) {
          e.dataTransfer.dropEffect = 'none';
        }

        return;
      }

      _this.altKeyPressed = e.altKey;

      _this.actions.hover(dragOverTargetIds || [], {
        clientOffset: getEventClientOffset(e)
      });

      var canDrop = (dragOverTargetIds || []).some(function (targetId) {
        return _this.monitor.canDropOnTarget(targetId);
      });

      if (canDrop) {
        // Show user-specified drop effect.
        e.preventDefault();

        if (e.dataTransfer) {
          e.dataTransfer.dropEffect = _this.getCurrentDropEffect();
        }
      } else if (_this.isDraggingNativeItem()) {
        // Don't show a nice cursor but still prevent default
        // "drop and blow away the whole document" action.
        e.preventDefault();
      } else {
        e.preventDefault();

        if (e.dataTransfer) {
          e.dataTransfer.dropEffect = 'none';
        }
      }
    };

    this.handleTopDragLeaveCapture = function (e) {
      if (_this.isDraggingNativeItem()) {
        e.preventDefault();
      }

      var isLastLeave = _this.enterLeaveCounter.leave(e.target);

      if (!isLastLeave) {
        return;
      }

      if (_this.isDraggingNativeItem()) {
        _this.endDragNativeItem();
      }
    };

    this.handleTopDropCapture = function (e) {
      _this.dropTargetIds = [];
      e.preventDefault();

      if (_this.isDraggingNativeItem()) {
        _this.currentNativeSource.loadDataTransfer(e.dataTransfer);
      }

      _this.enterLeaveCounter.reset();
    };

    this.handleTopDrop = function (e) {
      var dropTargetIds = _this.dropTargetIds;
      _this.dropTargetIds = [];

      _this.actions.hover(dropTargetIds, {
        clientOffset: getEventClientOffset(e)
      });

      _this.actions.drop({
        dropEffect: _this.getCurrentDropEffect()
      });

      if (_this.isDraggingNativeItem()) {
        _this.endDragNativeItem();
      } else {
        _this.endDragIfSourceWasRemovedFromDOM();
      }
    };

    this.handleSelectStart = function (e) {
      var target = e.target; // Only IE requires us to explicitly say
      // we want drag drop operation to start

      if (typeof target.dragDrop !== 'function') {
        return;
      } // Inputs and textareas should be selectable


      if (target.tagName === 'INPUT' || target.tagName === 'SELECT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
        return;
      } // For other targets, ask IE
      // to enable drag and drop


      e.preventDefault();
      target.dragDrop();
    };

    this.options = new OptionsReader(globalContext);
    this.actions = manager.getActions();
    this.monitor = manager.getMonitor();
    this.registry = manager.getRegistry();
    this.enterLeaveCounter = new EnterLeaveCounter_EnterLeaveCounter(this.isNodeInDocument);
  } // public for test


  HTML5Backend_createClass(HTML5Backend, [{
    key: "setup",
    value: function setup() {
      if (this.window === undefined) {
        return;
      }

      if (this.window.__isReactDndBackendSetUp) {
        throw new Error('Cannot have two HTML5 backends at the same time.');
      }

      this.window.__isReactDndBackendSetUp = true;
      this.addEventListeners(this.window);
    }
  }, {
    key: "teardown",
    value: function teardown() {
      if (this.window === undefined) {
        return;
      }

      this.window.__isReactDndBackendSetUp = false;
      this.removeEventListeners(this.window);
      this.clearCurrentDragSourceNode();

      if (this.asyncEndDragFrameId) {
        this.window.cancelAnimationFrame(this.asyncEndDragFrameId);
      }
    }
  }, {
    key: "connectDragPreview",
    value: function connectDragPreview(sourceId, node, options) {
      var _this2 = this;

      this.sourcePreviewNodeOptions.set(sourceId, options);
      this.sourcePreviewNodes.set(sourceId, node);
      return function () {
        _this2.sourcePreviewNodes.delete(sourceId);

        _this2.sourcePreviewNodeOptions.delete(sourceId);
      };
    }
  }, {
    key: "connectDragSource",
    value: function connectDragSource(sourceId, node, options) {
      var _this3 = this;

      this.sourceNodes.set(sourceId, node);
      this.sourceNodeOptions.set(sourceId, options);

      var handleDragStart = function handleDragStart(e) {
        return _this3.handleDragStart(e, sourceId);
      };

      var handleSelectStart = function handleSelectStart(e) {
        return _this3.handleSelectStart(e);
      };

      node.setAttribute('draggable', 'true');
      node.addEventListener('dragstart', handleDragStart);
      node.addEventListener('selectstart', handleSelectStart);
      return function () {
        _this3.sourceNodes.delete(sourceId);

        _this3.sourceNodeOptions.delete(sourceId);

        node.removeEventListener('dragstart', handleDragStart);
        node.removeEventListener('selectstart', handleSelectStart);
        node.setAttribute('draggable', 'false');
      };
    }
  }, {
    key: "connectDropTarget",
    value: function connectDropTarget(targetId, node) {
      var _this4 = this;

      var handleDragEnter = function handleDragEnter(e) {
        return _this4.handleDragEnter(e, targetId);
      };

      var handleDragOver = function handleDragOver(e) {
        return _this4.handleDragOver(e, targetId);
      };

      var handleDrop = function handleDrop(e) {
        return _this4.handleDrop(e, targetId);
      };

      node.addEventListener('dragenter', handleDragEnter);
      node.addEventListener('dragover', handleDragOver);
      node.addEventListener('drop', handleDrop);
      return function () {
        node.removeEventListener('dragenter', handleDragEnter);
        node.removeEventListener('dragover', handleDragOver);
        node.removeEventListener('drop', handleDrop);
      };
    }
  }, {
    key: "addEventListeners",
    value: function addEventListeners(target) {
      // SSR Fix (https://github.com/react-dnd/react-dnd/pull/813
      if (!target.addEventListener) {
        return;
      }

      target.addEventListener('dragstart', this.handleTopDragStart);
      target.addEventListener('dragstart', this.handleTopDragStartCapture, true);
      target.addEventListener('dragend', this.handleTopDragEndCapture, true);
      target.addEventListener('dragenter', this.handleTopDragEnter);
      target.addEventListener('dragenter', this.handleTopDragEnterCapture, true);
      target.addEventListener('dragleave', this.handleTopDragLeaveCapture, true);
      target.addEventListener('dragover', this.handleTopDragOver);
      target.addEventListener('dragover', this.handleTopDragOverCapture, true);
      target.addEventListener('drop', this.handleTopDrop);
      target.addEventListener('drop', this.handleTopDropCapture, true);
    }
  }, {
    key: "removeEventListeners",
    value: function removeEventListeners(target) {
      // SSR Fix (https://github.com/react-dnd/react-dnd/pull/813
      if (!target.removeEventListener) {
        return;
      }

      target.removeEventListener('dragstart', this.handleTopDragStart);
      target.removeEventListener('dragstart', this.handleTopDragStartCapture, true);
      target.removeEventListener('dragend', this.handleTopDragEndCapture, true);
      target.removeEventListener('dragenter', this.handleTopDragEnter);
      target.removeEventListener('dragenter', this.handleTopDragEnterCapture, true);
      target.removeEventListener('dragleave', this.handleTopDragLeaveCapture, true);
      target.removeEventListener('dragover', this.handleTopDragOver);
      target.removeEventListener('dragover', this.handleTopDragOverCapture, true);
      target.removeEventListener('drop', this.handleTopDrop);
      target.removeEventListener('drop', this.handleTopDropCapture, true);
    }
  }, {
    key: "getCurrentSourceNodeOptions",
    value: function getCurrentSourceNodeOptions() {
      var sourceId = this.monitor.getSourceId();
      var sourceNodeOptions = this.sourceNodeOptions.get(sourceId);
      return HTML5Backend_objectSpread({
        dropEffect: this.altKeyPressed ? 'copy' : 'move'
      }, sourceNodeOptions || {});
    }
  }, {
    key: "getCurrentDropEffect",
    value: function getCurrentDropEffect() {
      if (this.isDraggingNativeItem()) {
        // It makes more sense to default to 'copy' for native resources
        return 'copy';
      }

      return this.getCurrentSourceNodeOptions().dropEffect;
    }
  }, {
    key: "getCurrentSourcePreviewNodeOptions",
    value: function getCurrentSourcePreviewNodeOptions() {
      var sourceId = this.monitor.getSourceId();
      var sourcePreviewNodeOptions = this.sourcePreviewNodeOptions.get(sourceId);
      return HTML5Backend_objectSpread({
        anchorX: 0.5,
        anchorY: 0.5,
        captureDraggingState: false
      }, sourcePreviewNodeOptions || {});
    }
  }, {
    key: "isDraggingNativeItem",
    value: function isDraggingNativeItem() {
      var itemType = this.monitor.getItemType();
      return Object.keys(NativeTypes_namespaceObject).some(function (key) {
        return NativeTypes_namespaceObject[key] === itemType;
      });
    }
  }, {
    key: "beginDragNativeItem",
    value: function beginDragNativeItem(type, dataTransfer) {
      this.clearCurrentDragSourceNode();
      this.currentNativeSource = createNativeDragSource(type, dataTransfer);
      this.currentNativeHandle = this.registry.addSource(type, this.currentNativeSource);
      this.actions.beginDrag([this.currentNativeHandle]);
    }
  }, {
    key: "setCurrentDragSourceNode",
    value: function setCurrentDragSourceNode(node) {
      var _this5 = this;

      this.clearCurrentDragSourceNode();
      this.currentDragSourceNode = node; // A timeout of > 0 is necessary to resolve Firefox issue referenced
      // See:
      //   * https://github.com/react-dnd/react-dnd/pull/928
      //   * https://github.com/react-dnd/react-dnd/issues/869

      var MOUSE_MOVE_TIMEOUT = 1000; // Receiving a mouse event in the middle of a dragging operation
      // means it has ended and the drag source node disappeared from DOM,
      // so the browser didn't dispatch the dragend event.
      //
      // We need to wait before we start listening for mousemove events.
      // This is needed because the drag preview needs to be drawn or else it fires an 'mousemove' event
      // immediately in some browsers.
      //
      // See:
      //   * https://github.com/react-dnd/react-dnd/pull/928
      //   * https://github.com/react-dnd/react-dnd/issues/869
      //

      this.mouseMoveTimeoutTimer = setTimeout(function () {
        return _this5.window && _this5.window.addEventListener('mousemove', _this5.endDragIfSourceWasRemovedFromDOM, true);
      }, MOUSE_MOVE_TIMEOUT);
    }
  }, {
    key: "clearCurrentDragSourceNode",
    value: function clearCurrentDragSourceNode() {
      if (this.currentDragSourceNode) {
        this.currentDragSourceNode = null;

        if (this.window) {
          this.window.clearTimeout(this.mouseMoveTimeoutTimer || undefined);
          this.window.removeEventListener('mousemove', this.endDragIfSourceWasRemovedFromDOM, true);
        }

        this.mouseMoveTimeoutTimer = null;
        return true;
      }

      return false;
    }
  }, {
    key: "handleDragStart",
    value: function handleDragStart(e, sourceId) {
      if (e.defaultPrevented) {
        return;
      }

      if (!this.dragStartSourceIds) {
        this.dragStartSourceIds = [];
      }

      this.dragStartSourceIds.unshift(sourceId);
    }
  }, {
    key: "handleDragEnter",
    value: function handleDragEnter(e, targetId) {
      this.dragEnterTargetIds.unshift(targetId);
    }
  }, {
    key: "handleDragOver",
    value: function handleDragOver(e, targetId) {
      if (this.dragOverTargetIds === null) {
        this.dragOverTargetIds = [];
      }

      this.dragOverTargetIds.unshift(targetId);
    }
  }, {
    key: "handleDrop",
    value: function handleDrop(e, targetId) {
      this.dropTargetIds.unshift(targetId);
    }
  }, {
    key: "window",
    get: function get() {
      return this.options.window;
    }
  }, {
    key: "document",
    get: function get() {
      return this.options.document;
    }
  }]);

  return HTML5Backend;
}();


// CONCATENATED MODULE: ./node_modules/react-dnd-html5-backend/dist/esm/index.js





var esm_createBackend = function createBackend(manager, context) {
  return new HTML5Backend_HTML5Backend(manager, context);
};

/* harmony default export */ var esm = (esm_createBackend);
// EXTERNAL MODULE: ./node_modules/@react-dnd/invariant/dist/invariant.esm.js
var invariant_esm = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/hooks/internal/useIsomorphicLayoutEffect.js
 // suppress the useLayoutEffect warning on server side.

var useIsomorphicLayoutEffect = typeof window !== 'undefined' ? external_React_["useLayoutEffect"] : external_React_["useEffect"];
// CONCATENATED MODULE: ./node_modules/@react-dnd/shallowequal/dist/shallowequal.esm.js
function shallowequal_esm_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { shallowequal_esm_typeof = function _typeof(obj) { return typeof obj; }; } else { shallowequal_esm_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return shallowequal_esm_typeof(obj); }

function shallowEqual(objA, objB, compare, compareContext) {
  var compareResult = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (compareResult !== void 0) {
    return !!compareResult;
  }

  if (objA === objB) {
    return true;
  }

  if (shallowequal_esm_typeof(objA) !== 'object' || !objA || shallowequal_esm_typeof(objB) !== 'object' || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB); // Test for A's keys different from B.

  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];
    compareResult = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (compareResult === false || compareResult === void 0 && valueA !== valueB) {
      return false;
    }
  }

  return true;
}


// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/hooks/internal/useCollector.js
function useCollector_slicedToArray(arr, i) {
  return useCollector_arrayWithHoles(arr) || useCollector_iterableToArrayLimit(arr, i) || useCollector_nonIterableRest();
}

function useCollector_nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function useCollector_iterableToArrayLimit(arr, i) {
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

function useCollector_arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}




/**
 *
 * @param monitor The monitor to collect state from
 * @param collect The collecting function
 * @param onUpdate A method to invoke when updates occur
 */

function useCollector(monitor, collect, onUpdate) {
  var _useState = Object(external_React_["useState"])(function () {
    return collect(monitor);
  }),
      _useState2 = useCollector_slicedToArray(_useState, 2),
      collected = _useState2[0],
      setCollected = _useState2[1];

  var updateCollected = Object(external_React_["useCallback"])(function () {
    var nextValue = collect(monitor);

    if (!shallowEqual(collected, nextValue)) {
      setCollected(nextValue);

      if (onUpdate) {
        onUpdate();
      }
    }
  }, [collected, monitor, onUpdate]); // update the collected properties after the first render
  // and the components are attached to dnd-core

  useIsomorphicLayoutEffect(updateCollected, []);
  return [collected, updateCollected];
}
// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/hooks/internal/useMonitorOutput.js
function useMonitorOutput_slicedToArray(arr, i) {
  return useMonitorOutput_arrayWithHoles(arr) || useMonitorOutput_iterableToArrayLimit(arr, i) || useMonitorOutput_nonIterableRest();
}

function useMonitorOutput_nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function useMonitorOutput_iterableToArrayLimit(arr, i) {
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

function useMonitorOutput_arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}



function useMonitorOutput(monitor, collect, onCollect) {
  var _useCollector = useCollector(monitor, collect, onCollect),
      _useCollector2 = useMonitorOutput_slicedToArray(_useCollector, 2),
      collected = _useCollector2[0],
      updateCollected = _useCollector2[1];

  useIsomorphicLayoutEffect(function subscribeToMonitorStateChange() {
    var handlerId = monitor.getHandlerId();

    if (handlerId == null) {
      return undefined;
    }

    return monitor.subscribeToStateChange(updateCollected, {
      handlerIds: [handlerId]
    });
  }, [monitor, updateCollected]);
  return collected;
}
// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/common/registration.js
function registerTarget(type, target, manager) {
  var registry = manager.getRegistry();
  var targetId = registry.addTarget(type, target);
  return [targetId, function () {
    return registry.removeTarget(targetId);
  }];
}
function registerSource(type, source, manager) {
  var registry = manager.getRegistry();
  var sourceId = registry.addSource(type, source);
  return [sourceId, function () {
    return registry.removeSource(sourceId);
  }];
}
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/common/DndContext.js + 30 modules
var DndContext = __webpack_require__(17);

// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/hooks/internal/useDragDropManager.js



/**
 * A hook to retrieve the DragDropManager from Context
 */

function useDragDropManager() {
  var _useContext = Object(external_React_["useContext"])(DndContext["a" /* DndContext */]),
      dragDropManager = _useContext.dragDropManager;

  Object(invariant_esm["a" /* invariant */])(dragDropManager != null, 'Expected drag drop context');
  return dragDropManager;
}
// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/utils/cloneWithRef.js



function setRef(ref, node) {
  if (typeof ref === 'function') {
    ref(node);
  } else {
    ref.current = node;
  }
}

function cloneWithRef(element, newRef) {
  var previousRef = element.ref;
  Object(invariant_esm["a" /* invariant */])(typeof previousRef !== 'string', 'Cannot connect React DnD to an element with an existing string ref. ' + 'Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. ' + 'Read more: https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute');

  if (!previousRef) {
    // When there is no ref on the element, use the new ref directly
    return /*#__PURE__*/Object(external_React_["cloneElement"])(element, {
      ref: newRef
    });
  } else {
    return /*#__PURE__*/Object(external_React_["cloneElement"])(element, {
      ref: function ref(node) {
        setRef(previousRef, node);
        setRef(newRef, node);
      }
    });
  }
}
// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/common/wrapConnectorHooks.js



function throwIfCompositeComponentElement(element) {
  // Custom components can no longer be wrapped directly in React DnD 2.0
  // so that we don't need to depend on findDOMNode() from react-dom.
  if (typeof element.type === 'string') {
    return;
  }

  var displayName = element.type.displayName || element.type.name || 'the component';
  throw new Error('Only native element nodes can now be passed to React DnD connectors.' + "You can either wrap ".concat(displayName, " into a <div>, or turn it into a ") + 'drag source or a drop target itself.');
}

function wrapHookToRecognizeElement(hook) {
  return function () {
    var elementOrNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null; // When passed a node, call the hook straight away.

    if (! /*#__PURE__*/Object(external_React_["isValidElement"])(elementOrNode)) {
      var node = elementOrNode;
      hook(node, options); // return the node so it can be chained (e.g. when within callback refs
      // <div ref={node => connectDragSource(connectDropTarget(node))}/>

      return node;
    } // If passed a ReactElement, clone it and attach this function as a ref.
    // This helps us achieve a neat API where user doesn't even know that refs
    // are being used under the hood.


    var element = elementOrNode;
    throwIfCompositeComponentElement(element); // When no options are passed, use the hook directly

    var ref = options ? function (node) {
      return hook(node, options);
    } : hook;
    return cloneWithRef(element, ref);
  };
}

function wrapConnectorHooks(hooks) {
  var wrappedHooks = {};
  Object.keys(hooks).forEach(function (key) {
    var hook = hooks[key]; // ref objects should be passed straight through without wrapping

    if (key.endsWith('Ref')) {
      wrappedHooks[key] = hooks[key];
    } else {
      var wrappedHook = wrapHookToRecognizeElement(hook);

      wrappedHooks[key] = function () {
        return wrappedHook;
      };
    }
  });
  return wrappedHooks;
}
// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/utils/isRef.js
function isRef_typeof2(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { isRef_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { isRef_typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return isRef_typeof2(obj); }

function isRef_typeof(obj) {
  if (typeof Symbol === "function" && isRef_typeof2(Symbol.iterator) === "symbol") {
    isRef_typeof = function _typeof(obj) {
      return isRef_typeof2(obj);
    };
  } else {
    isRef_typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : isRef_typeof2(obj);
    };
  }

  return isRef_typeof(obj);
}

function isRef(obj) {
  return (// eslint-disable-next-line no-prototype-builtins
    obj !== null && isRef_typeof(obj) === 'object' && obj.hasOwnProperty('current')
  );
}
// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/common/TargetConnector.js
function TargetConnector_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function TargetConnector_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function TargetConnector_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) TargetConnector_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) TargetConnector_defineProperties(Constructor, staticProps);
  return Constructor;
}




var TargetConnector_TargetConnector = /*#__PURE__*/function () {
  function TargetConnector(backend) {
    var _this = this;

    TargetConnector_classCallCheck(this, TargetConnector);

    this.hooks = wrapConnectorHooks({
      dropTarget: function dropTarget(node, options) {
        _this.clearDropTarget();

        _this.dropTargetOptions = options;

        if (isRef(node)) {
          _this.dropTargetRef = node;
        } else {
          _this.dropTargetNode = node;
        }

        _this.reconnect();
      }
    });
    this.handlerId = null; // The drop target may either be attached via ref or connect function

    this.dropTargetRef = null;
    this.dropTargetOptionsInternal = null;
    this.lastConnectedHandlerId = null;
    this.lastConnectedDropTarget = null;
    this.lastConnectedDropTargetOptions = null;
    this.backend = backend;
  }

  TargetConnector_createClass(TargetConnector, [{
    key: "reconnect",
    value: function reconnect() {
      // if nothing has changed then don't resubscribe
      var didChange = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();

      if (didChange) {
        this.disconnectDropTarget();
      }

      var dropTarget = this.dropTarget;

      if (!this.handlerId) {
        return;
      }

      if (!dropTarget) {
        this.lastConnectedDropTarget = dropTarget;
        return;
      }

      if (didChange) {
        this.lastConnectedHandlerId = this.handlerId;
        this.lastConnectedDropTarget = dropTarget;
        this.lastConnectedDropTargetOptions = this.dropTargetOptions;
        this.unsubscribeDropTarget = this.backend.connectDropTarget(this.handlerId, dropTarget, this.dropTargetOptions);
      }
    }
  }, {
    key: "receiveHandlerId",
    value: function receiveHandlerId(newHandlerId) {
      if (newHandlerId === this.handlerId) {
        return;
      }

      this.handlerId = newHandlerId;
      this.reconnect();
    }
  }, {
    key: "didHandlerIdChange",
    value: function didHandlerIdChange() {
      return this.lastConnectedHandlerId !== this.handlerId;
    }
  }, {
    key: "didDropTargetChange",
    value: function didDropTargetChange() {
      return this.lastConnectedDropTarget !== this.dropTarget;
    }
  }, {
    key: "didOptionsChange",
    value: function didOptionsChange() {
      return !shallowEqual(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
    }
  }, {
    key: "disconnectDropTarget",
    value: function disconnectDropTarget() {
      if (this.unsubscribeDropTarget) {
        this.unsubscribeDropTarget();
        this.unsubscribeDropTarget = undefined;
      }
    }
  }, {
    key: "clearDropTarget",
    value: function clearDropTarget() {
      this.dropTargetRef = null;
      this.dropTargetNode = null;
    }
  }, {
    key: "connectTarget",
    get: function get() {
      return this.dropTarget;
    }
  }, {
    key: "dropTargetOptions",
    get: function get() {
      return this.dropTargetOptionsInternal;
    },
    set: function set(options) {
      this.dropTargetOptionsInternal = options;
    }
  }, {
    key: "dropTarget",
    get: function get() {
      return this.dropTargetNode || this.dropTargetRef && this.dropTargetRef.current;
    }
  }]);

  return TargetConnector;
}();
// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/common/DropTargetMonitorImpl.js
function DropTargetMonitorImpl_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function DropTargetMonitorImpl_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function DropTargetMonitorImpl_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) DropTargetMonitorImpl_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) DropTargetMonitorImpl_defineProperties(Constructor, staticProps);
  return Constructor;
}


var isCallingCanDrop = false;
var DropTargetMonitorImpl_DropTargetMonitorImpl = /*#__PURE__*/function () {
  function DropTargetMonitorImpl(manager) {
    DropTargetMonitorImpl_classCallCheck(this, DropTargetMonitorImpl);

    this.targetId = null;
    this.internalMonitor = manager.getMonitor();
  }

  DropTargetMonitorImpl_createClass(DropTargetMonitorImpl, [{
    key: "receiveHandlerId",
    value: function receiveHandlerId(targetId) {
      this.targetId = targetId;
    }
  }, {
    key: "getHandlerId",
    value: function getHandlerId() {
      return this.targetId;
    }
  }, {
    key: "subscribeToStateChange",
    value: function subscribeToStateChange(listener, options) {
      return this.internalMonitor.subscribeToStateChange(listener, options);
    }
  }, {
    key: "canDrop",
    value: function canDrop() {
      // Cut out early if the target id has not been set. This should prevent errors
      // where the user has an older version of dnd-core like in
      // https://github.com/react-dnd/react-dnd/issues/1310
      if (!this.targetId) {
        return false;
      }

      Object(invariant_esm["a" /* invariant */])(!isCallingCanDrop, 'You may not call monitor.canDrop() inside your canDrop() implementation. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor');

      try {
        isCallingCanDrop = true;
        return this.internalMonitor.canDropOnTarget(this.targetId);
      } finally {
        isCallingCanDrop = false;
      }
    }
  }, {
    key: "isOver",
    value: function isOver(options) {
      if (!this.targetId) {
        return false;
      }

      return this.internalMonitor.isOverTarget(this.targetId, options);
    }
  }, {
    key: "getItemType",
    value: function getItemType() {
      return this.internalMonitor.getItemType();
    }
  }, {
    key: "getItem",
    value: function getItem() {
      return this.internalMonitor.getItem();
    }
  }, {
    key: "getDropResult",
    value: function getDropResult() {
      return this.internalMonitor.getDropResult();
    }
  }, {
    key: "didDrop",
    value: function didDrop() {
      return this.internalMonitor.didDrop();
    }
  }, {
    key: "getInitialClientOffset",
    value: function getInitialClientOffset() {
      return this.internalMonitor.getInitialClientOffset();
    }
  }, {
    key: "getInitialSourceClientOffset",
    value: function getInitialSourceClientOffset() {
      return this.internalMonitor.getInitialSourceClientOffset();
    }
  }, {
    key: "getSourceClientOffset",
    value: function getSourceClientOffset() {
      return this.internalMonitor.getSourceClientOffset();
    }
  }, {
    key: "getClientOffset",
    value: function getClientOffset() {
      return this.internalMonitor.getClientOffset();
    }
  }, {
    key: "getDifferenceFromInitialOffset",
    value: function getDifferenceFromInitialOffset() {
      return this.internalMonitor.getDifferenceFromInitialOffset();
    }
  }]);

  return DropTargetMonitorImpl;
}();
// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/hooks/internal/drop.js
function drop_slicedToArray(arr, i) {
  return drop_arrayWithHoles(arr) || drop_iterableToArrayLimit(arr, i) || drop_nonIterableRest();
}

function drop_nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function drop_iterableToArrayLimit(arr, i) {
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

function drop_arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}







function useDropTargetMonitor() {
  var manager = useDragDropManager();
  var monitor = Object(external_React_["useMemo"])(function () {
    return new DropTargetMonitorImpl_DropTargetMonitorImpl(manager);
  }, [manager]);
  var connector = Object(external_React_["useMemo"])(function () {
    return new TargetConnector_TargetConnector(manager.getBackend());
  }, [manager]);
  return [monitor, connector];
}
function useDropHandler(spec, monitor, connector) {
  var manager = useDragDropManager();
  var handler = Object(external_React_["useMemo"])(function () {
    return {
      canDrop: function canDrop() {
        var canDrop = spec.current.canDrop;
        return canDrop ? canDrop(monitor.getItem(), monitor) : true;
      },
      hover: function hover() {
        var hover = spec.current.hover;

        if (hover) {
          hover(monitor.getItem(), monitor);
        }
      },
      drop: function drop() {
        var drop = spec.current.drop;

        if (drop) {
          return drop(monitor.getItem(), monitor);
        }
      }
    };
  }, [monitor]);
  useIsomorphicLayoutEffect(function registerHandler() {
    var _registerTarget = registerTarget(spec.current.accept, handler, manager),
        _registerTarget2 = drop_slicedToArray(_registerTarget, 2),
        handlerId = _registerTarget2[0],
        unregister = _registerTarget2[1];

    monitor.receiveHandlerId(handlerId);
    connector.receiveHandlerId(handlerId);
    return unregister;
  }, [monitor, connector]);
}
// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/hooks/useDrop.js
function useDrop_slicedToArray(arr, i) {
  return useDrop_arrayWithHoles(arr) || useDrop_iterableToArrayLimit(arr, i) || useDrop_nonIterableRest();
}

function useDrop_nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function useDrop_iterableToArrayLimit(arr, i) {
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

function useDrop_arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}






/**
 * useDropTarget Hook
 * @param spec The drop target specification
 */

function useDrop(spec) {
  var specRef = Object(external_React_["useRef"])(spec);
  specRef.current = spec;
  Object(invariant_esm["a" /* invariant */])(spec.accept != null, 'accept must be defined');

  var _useDropTargetMonitor = useDropTargetMonitor(),
      _useDropTargetMonitor2 = useDrop_slicedToArray(_useDropTargetMonitor, 2),
      monitor = _useDropTargetMonitor2[0],
      connector = _useDropTargetMonitor2[1];

  useDropHandler(specRef, monitor, connector);
  var result = useMonitorOutput(monitor, specRef.current.collect || function () {
    return {};
  }, function () {
    return connector.reconnect();
  });
  var connectDropTarget = Object(external_React_["useMemo"])(function () {
    return connector.hooks.dropTarget();
  }, [connector]);
  useIsomorphicLayoutEffect(function () {
    connector.dropTargetOptions = spec.options || null;
    connector.reconnect();
  }, [spec.options]);
  return [result, connectDropTarget];
}
// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/common/DragSourceMonitorImpl.js
function DragSourceMonitorImpl_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function DragSourceMonitorImpl_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function DragSourceMonitorImpl_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) DragSourceMonitorImpl_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) DragSourceMonitorImpl_defineProperties(Constructor, staticProps);
  return Constructor;
}


var isCallingCanDrag = false;
var isCallingIsDragging = false;
var DragSourceMonitorImpl_DragSourceMonitorImpl = /*#__PURE__*/function () {
  function DragSourceMonitorImpl(manager) {
    DragSourceMonitorImpl_classCallCheck(this, DragSourceMonitorImpl);

    this.sourceId = null;
    this.internalMonitor = manager.getMonitor();
  }

  DragSourceMonitorImpl_createClass(DragSourceMonitorImpl, [{
    key: "receiveHandlerId",
    value: function receiveHandlerId(sourceId) {
      this.sourceId = sourceId;
    }
  }, {
    key: "getHandlerId",
    value: function getHandlerId() {
      return this.sourceId;
    }
  }, {
    key: "canDrag",
    value: function canDrag() {
      Object(invariant_esm["a" /* invariant */])(!isCallingCanDrag, 'You may not call monitor.canDrag() inside your canDrag() implementation. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor');

      try {
        isCallingCanDrag = true;
        return this.internalMonitor.canDragSource(this.sourceId);
      } finally {
        isCallingCanDrag = false;
      }
    }
  }, {
    key: "isDragging",
    value: function isDragging() {
      if (!this.sourceId) {
        return false;
      }

      Object(invariant_esm["a" /* invariant */])(!isCallingIsDragging, 'You may not call monitor.isDragging() inside your isDragging() implementation. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor');

      try {
        isCallingIsDragging = true;
        return this.internalMonitor.isDraggingSource(this.sourceId);
      } finally {
        isCallingIsDragging = false;
      }
    }
  }, {
    key: "subscribeToStateChange",
    value: function subscribeToStateChange(listener, options) {
      return this.internalMonitor.subscribeToStateChange(listener, options);
    }
  }, {
    key: "isDraggingSource",
    value: function isDraggingSource(sourceId) {
      return this.internalMonitor.isDraggingSource(sourceId);
    }
  }, {
    key: "isOverTarget",
    value: function isOverTarget(targetId, options) {
      return this.internalMonitor.isOverTarget(targetId, options);
    }
  }, {
    key: "getTargetIds",
    value: function getTargetIds() {
      return this.internalMonitor.getTargetIds();
    }
  }, {
    key: "isSourcePublic",
    value: function isSourcePublic() {
      return this.internalMonitor.isSourcePublic();
    }
  }, {
    key: "getSourceId",
    value: function getSourceId() {
      return this.internalMonitor.getSourceId();
    }
  }, {
    key: "subscribeToOffsetChange",
    value: function subscribeToOffsetChange(listener) {
      return this.internalMonitor.subscribeToOffsetChange(listener);
    }
  }, {
    key: "canDragSource",
    value: function canDragSource(sourceId) {
      return this.internalMonitor.canDragSource(sourceId);
    }
  }, {
    key: "canDropOnTarget",
    value: function canDropOnTarget(targetId) {
      return this.internalMonitor.canDropOnTarget(targetId);
    }
  }, {
    key: "getItemType",
    value: function getItemType() {
      return this.internalMonitor.getItemType();
    }
  }, {
    key: "getItem",
    value: function getItem() {
      return this.internalMonitor.getItem();
    }
  }, {
    key: "getDropResult",
    value: function getDropResult() {
      return this.internalMonitor.getDropResult();
    }
  }, {
    key: "didDrop",
    value: function didDrop() {
      return this.internalMonitor.didDrop();
    }
  }, {
    key: "getInitialClientOffset",
    value: function getInitialClientOffset() {
      return this.internalMonitor.getInitialClientOffset();
    }
  }, {
    key: "getInitialSourceClientOffset",
    value: function getInitialSourceClientOffset() {
      return this.internalMonitor.getInitialSourceClientOffset();
    }
  }, {
    key: "getSourceClientOffset",
    value: function getSourceClientOffset() {
      return this.internalMonitor.getSourceClientOffset();
    }
  }, {
    key: "getClientOffset",
    value: function getClientOffset() {
      return this.internalMonitor.getClientOffset();
    }
  }, {
    key: "getDifferenceFromInitialOffset",
    value: function getDifferenceFromInitialOffset() {
      return this.internalMonitor.getDifferenceFromInitialOffset();
    }
  }]);

  return DragSourceMonitorImpl;
}();
// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/common/SourceConnector.js
function SourceConnector_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function SourceConnector_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function SourceConnector_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) SourceConnector_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) SourceConnector_defineProperties(Constructor, staticProps);
  return Constructor;
}




var SourceConnector_SourceConnector = /*#__PURE__*/function () {
  function SourceConnector(backend) {
    var _this = this;

    SourceConnector_classCallCheck(this, SourceConnector);

    this.hooks = wrapConnectorHooks({
      dragSource: function dragSource(node, options) {
        _this.clearDragSource();

        _this.dragSourceOptions = options || null;

        if (isRef(node)) {
          _this.dragSourceRef = node;
        } else {
          _this.dragSourceNode = node;
        }

        _this.reconnectDragSource();
      },
      dragPreview: function dragPreview(node, options) {
        _this.clearDragPreview();

        _this.dragPreviewOptions = options || null;

        if (isRef(node)) {
          _this.dragPreviewRef = node;
        } else {
          _this.dragPreviewNode = node;
        }

        _this.reconnectDragPreview();
      }
    });
    this.handlerId = null; // The drop target may either be attached via ref or connect function

    this.dragSourceRef = null;
    this.dragSourceOptionsInternal = null; // The drag preview may either be attached via ref or connect function

    this.dragPreviewRef = null;
    this.dragPreviewOptionsInternal = null;
    this.lastConnectedHandlerId = null;
    this.lastConnectedDragSource = null;
    this.lastConnectedDragSourceOptions = null;
    this.lastConnectedDragPreview = null;
    this.lastConnectedDragPreviewOptions = null;
    this.backend = backend;
  }

  SourceConnector_createClass(SourceConnector, [{
    key: "receiveHandlerId",
    value: function receiveHandlerId(newHandlerId) {
      if (this.handlerId === newHandlerId) {
        return;
      }

      this.handlerId = newHandlerId;
      this.reconnect();
    }
  }, {
    key: "reconnect",
    value: function reconnect() {
      this.reconnectDragSource();
      this.reconnectDragPreview();
    }
  }, {
    key: "reconnectDragSource",
    value: function reconnectDragSource() {
      var dragSource = this.dragSource; // if nothing has changed then don't resubscribe

      var didChange = this.didHandlerIdChange() || this.didConnectedDragSourceChange() || this.didDragSourceOptionsChange();

      if (didChange) {
        this.disconnectDragSource();
      }

      if (!this.handlerId) {
        return;
      }

      if (!dragSource) {
        this.lastConnectedDragSource = dragSource;
        return;
      }

      if (didChange) {
        this.lastConnectedHandlerId = this.handlerId;
        this.lastConnectedDragSource = dragSource;
        this.lastConnectedDragSourceOptions = this.dragSourceOptions;
        this.dragSourceUnsubscribe = this.backend.connectDragSource(this.handlerId, dragSource, this.dragSourceOptions);
      }
    }
  }, {
    key: "reconnectDragPreview",
    value: function reconnectDragPreview() {
      var dragPreview = this.dragPreview; // if nothing has changed then don't resubscribe

      var didChange = this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange();

      if (!this.handlerId) {
        this.disconnectDragPreview();
      } else if (this.dragPreview && didChange) {
        this.lastConnectedHandlerId = this.handlerId;
        this.lastConnectedDragPreview = dragPreview;
        this.lastConnectedDragPreviewOptions = this.dragPreviewOptions;
        this.disconnectDragPreview();
        this.dragPreviewUnsubscribe = this.backend.connectDragPreview(this.handlerId, dragPreview, this.dragPreviewOptions);
      }
    }
  }, {
    key: "didHandlerIdChange",
    value: function didHandlerIdChange() {
      return this.lastConnectedHandlerId !== this.handlerId;
    }
  }, {
    key: "didConnectedDragSourceChange",
    value: function didConnectedDragSourceChange() {
      return this.lastConnectedDragSource !== this.dragSource;
    }
  }, {
    key: "didConnectedDragPreviewChange",
    value: function didConnectedDragPreviewChange() {
      return this.lastConnectedDragPreview !== this.dragPreview;
    }
  }, {
    key: "didDragSourceOptionsChange",
    value: function didDragSourceOptionsChange() {
      return !shallowEqual(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
    }
  }, {
    key: "didDragPreviewOptionsChange",
    value: function didDragPreviewOptionsChange() {
      return !shallowEqual(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
    }
  }, {
    key: "disconnectDragSource",
    value: function disconnectDragSource() {
      if (this.dragSourceUnsubscribe) {
        this.dragSourceUnsubscribe();
        this.dragSourceUnsubscribe = undefined;
      }
    }
  }, {
    key: "disconnectDragPreview",
    value: function disconnectDragPreview() {
      if (this.dragPreviewUnsubscribe) {
        this.dragPreviewUnsubscribe();
        this.dragPreviewUnsubscribe = undefined;
        this.dragPreviewNode = null;
        this.dragPreviewRef = null;
      }
    }
  }, {
    key: "clearDragSource",
    value: function clearDragSource() {
      this.dragSourceNode = null;
      this.dragSourceRef = null;
    }
  }, {
    key: "clearDragPreview",
    value: function clearDragPreview() {
      this.dragPreviewNode = null;
      this.dragPreviewRef = null;
    }
  }, {
    key: "connectTarget",
    get: function get() {
      return this.dragSource;
    }
  }, {
    key: "dragSourceOptions",
    get: function get() {
      return this.dragSourceOptionsInternal;
    },
    set: function set(options) {
      this.dragSourceOptionsInternal = options;
    }
  }, {
    key: "dragPreviewOptions",
    get: function get() {
      return this.dragPreviewOptionsInternal;
    },
    set: function set(options) {
      this.dragPreviewOptionsInternal = options;
    }
  }, {
    key: "dragSource",
    get: function get() {
      return this.dragSourceNode || this.dragSourceRef && this.dragSourceRef.current;
    }
  }, {
    key: "dragPreview",
    get: function get() {
      return this.dragPreviewNode || this.dragPreviewRef && this.dragPreviewRef.current;
    }
  }]);

  return SourceConnector;
}();
// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/hooks/internal/drag.js
function drag_typeof2(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { drag_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { drag_typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return drag_typeof2(obj); }

function drag_slicedToArray(arr, i) {
  return drag_arrayWithHoles(arr) || drag_iterableToArrayLimit(arr, i) || drag_nonIterableRest();
}

function drag_nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function drag_iterableToArrayLimit(arr, i) {
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

function drag_arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function drag_typeof(obj) {
  if (typeof Symbol === "function" && drag_typeof2(Symbol.iterator) === "symbol") {
    drag_typeof = function _typeof(obj) {
      return drag_typeof2(obj);
    };
  } else {
    drag_typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : drag_typeof2(obj);
    };
  }

  return drag_typeof(obj);
}








function useDragSourceMonitor() {
  var manager = useDragDropManager();
  var monitor = Object(external_React_["useMemo"])(function () {
    return new DragSourceMonitorImpl_DragSourceMonitorImpl(manager);
  }, [manager]);
  var connector = Object(external_React_["useMemo"])(function () {
    return new SourceConnector_SourceConnector(manager.getBackend());
  }, [manager]);
  return [monitor, connector];
}
function useDragHandler(spec, monitor, connector) {
  var manager = useDragDropManager();
  var handler = Object(external_React_["useMemo"])(function () {
    return {
      beginDrag: function beginDrag() {
        var _spec$current = spec.current,
            begin = _spec$current.begin,
            item = _spec$current.item;

        if (begin) {
          var beginResult = begin(monitor);
          Object(invariant_esm["a" /* invariant */])(beginResult == null || drag_typeof(beginResult) === 'object', 'dragSpec.begin() must either return an object, undefined, or null');
          return beginResult || item || {};
        }

        return item || {};
      },
      canDrag: function canDrag() {
        if (typeof spec.current.canDrag === 'boolean') {
          return spec.current.canDrag;
        } else if (typeof spec.current.canDrag === 'function') {
          return spec.current.canDrag(monitor);
        } else {
          return true;
        }
      },
      isDragging: function isDragging(globalMonitor, target) {
        var isDragging = spec.current.isDragging;
        return isDragging ? isDragging(monitor) : target === globalMonitor.getSourceId();
      },
      endDrag: function endDrag() {
        var end = spec.current.end;

        if (end) {
          end(monitor.getItem(), monitor);
        }

        connector.reconnect();
      }
    };
  }, []);
  useIsomorphicLayoutEffect(function registerHandler() {
    var _registerSource = registerSource(spec.current.item.type, handler, manager),
        _registerSource2 = drag_slicedToArray(_registerSource, 2),
        handlerId = _registerSource2[0],
        unregister = _registerSource2[1];

    monitor.receiveHandlerId(handlerId);
    connector.receiveHandlerId(handlerId);
    return unregister;
  }, []);
}
// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/hooks/useDrag.js
function useDrag_slicedToArray(arr, i) {
  return useDrag_arrayWithHoles(arr) || useDrag_iterableToArrayLimit(arr, i) || useDrag_nonIterableRest();
}

function useDrag_nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function useDrag_iterableToArrayLimit(arr, i) {
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

function useDrag_arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}






/**
 * useDragSource hook
 * @param sourceSpec The drag source specification *
 */

function useDrag(spec) {
  var specRef = Object(external_React_["useRef"])(spec);
  specRef.current = spec; // TODO: wire options into createSourceConnector

  Object(invariant_esm["a" /* invariant */])(spec.item != null, 'item must be defined');
  Object(invariant_esm["a" /* invariant */])(spec.item.type != null, 'item type must be defined');

  var _useDragSourceMonitor = useDragSourceMonitor(),
      _useDragSourceMonitor2 = useDrag_slicedToArray(_useDragSourceMonitor, 2),
      monitor = _useDragSourceMonitor2[0],
      connector = _useDragSourceMonitor2[1];

  useDragHandler(specRef, monitor, connector);
  var result = useMonitorOutput(monitor, specRef.current.collect || function () {
    return {};
  }, function () {
    return connector.reconnect();
  });
  var connectDragSource = Object(external_React_["useMemo"])(function () {
    return connector.hooks.dragSource();
  }, [connector]);
  var connectDragPreview = Object(external_React_["useMemo"])(function () {
    return connector.hooks.dragPreview();
  }, [connector]);
  useIsomorphicLayoutEffect(function () {
    connector.dragSourceOptions = specRef.current.options || null;
    connector.reconnect();
  }, [connector]);
  useIsomorphicLayoutEffect(function () {
    connector.dragPreviewOptions = specRef.current.previewOptions || null;
    connector.reconnect();
  }, [connector]);
  return [result, connectDragSource, connectDragPreview];
}
// CONCATENATED MODULE: ./packages/table/src/component/ColumnSetting/DndItem.tsx


var ItemTypes = {
  CARD: 'card'
};

var DndItem_Card = function Card(_ref) {
  var id = _ref.id,
      _end = _ref.end,
      move = _ref.move,
      children = _ref.children,
      index = _ref.index;
  var ref = Object(external_React_["useRef"])(null);

  var _useDrop = useDrop({
    accept: ItemTypes.CARD,
    hover: function hover(item, monitor) {
      if (!ref.current) {
        return;
      }

      var dragIndex = item.index;
      var hoverIndex = index; // Don't replace items with themselves

      if (dragIndex === hoverIndex) {
        return;
      } // Determine rectangle on screen


      var hoverBoundingRect = ref.current.getBoundingClientRect(); // Get vertical middle

      var hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2; // Determine mouse position

      var clientOffset = monitor.getClientOffset(); // Get pixels to the top

      var hoverClientY = clientOffset.y - hoverBoundingRect.top; // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      } // Dragging upwards


      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      } // Time to actually perform the action


      if (move) {
        move(dragIndex, hoverIndex);
      } // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      // eslint-disable-next-line no-param-reassign


      item.index = hoverIndex;
    }
  }),
      drop = _useDrop[1];

  var _useDrag = useDrag({
    item: {
      type: ItemTypes.CARD,
      id: id,
      index: index
    },
    collect: function collect(monitor) {
      return {
        isDragging: monitor.isDragging()
      };
    },
    end: function end(item) {
      if (!item) {
        return;
      }

      _end(item.id, item.index);
    }
  }),
      isDragging = _useDrag[0].isDragging,
      drag = _useDrag[1];

  var opacity = isDragging ? 0.4 : 1;
  drag(drop(ref));
  return /*#__PURE__*/external_React_default.a.createElement("div", {
    ref: ref,
    style: {
      opacity: opacity
    }
  }, children);
};

/* harmony default export */ var DndItem = (DndItem_Card);
// EXTERNAL MODULE: ./packages/table/src/component/ColumnSetting/index.less
var component_ColumnSetting = __webpack_require__(57);

// CONCATENATED MODULE: ./packages/table/src/component/ColumnSetting/DragIcon.tsx

/* harmony default export */ var DragIcon = (function () {
  return /*#__PURE__*/external_React_default.a.createElement("span", {
    className: "anticon",
    role: "img",
    "aria-label": "info-darg-icon",
    style: {
      paddingRight: 6,
      cursor: 'move'
    }
  }, /*#__PURE__*/external_React_default.a.createElement("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 8 16"
  }, /*#__PURE__*/external_React_default.a.createElement("g", {
    id: "surface5"
  }, /*#__PURE__*/external_React_default.a.createElement("path", {
    style: {
      fill: 'rgba(0, 0, 0, 0.45)',
      fillOpacity: 1,
      fillRule: 'nonzero',
      stroke: 'none'
    },
    d: "M 5 4.003906 C 5 3.449219 5.449219 3 6.003906 3 C 6.558594 3 7.007812 3.449219 7.007812 4.003906 C 7.007812 4.558594 6.558594 5.007812 6.003906 5.007812 C 5.449219 5.007812 5 4.558594 5 4.003906 Z M 5 8.25 C 5 7.695312 5.449219 7.246094 6.003906 7.246094 C 6.558594 7.246094 7.007812 7.695312 7.007812 8.25 C 7.007812 8.804688 6.558594 9.253906 6.003906 9.253906 C 5.449219 9.253906 5 8.804688 5 8.25 Z M 5 12.496094 C 5 11.941406 5.449219 11.492188 6.003906 11.492188 C 6.558594 11.492188 7.007812 11.941406 7.007812 12.496094 C 7.007812 13.050781 6.558594 13.5 6.003906 13.5 C 5.449219 13.5 5 13.050781 5 12.496094 Z M 9.554688 4.003906 C 9.554688 3.449219 10.003906 3 10.558594 3 C 11.113281 3 11.5625 3.449219 11.5625 4.003906 C 11.5625 4.558594 11.113281 5.007812 10.558594 5.007812 C 10.003906 5.007812 9.554688 4.558594 9.554688 4.003906 Z M 9.554688 8.25 C 9.554688 7.695312 10.003906 7.246094 10.558594 7.246094 C 11.113281 7.246094 11.5625 7.695312 11.5625 8.25 C 11.5625 8.804688 11.113281 9.253906 10.558594 9.253906 C 10.003906 9.253906 9.554688 8.804688 9.554688 8.25 Z M 9.554688 12.496094 C 9.554688 11.941406 10.003906 11.492188 10.558594 11.492188 C 11.113281 11.492188 11.5625 11.941406 11.5625 12.496094 C 11.5625 13.050781 11.113281 13.5 10.558594 13.5 C 10.003906 13.5 9.554688 13.050781 9.554688 12.496094 Z M 9.554688 12.496094 "
  }))));
});
// CONCATENATED MODULE: ./packages/table/src/utils.tsx
function utils_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function utils_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { utils_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { utils_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function utils_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function utils_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { utils_ownKeys(Object(source), true).forEach(function (key) { utils_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { utils_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function utils_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable @typescript-eslint/naming-convention */



/**
 * 检查值是否存在
 * 为了 避开 0 和 false
 * @param value
 */
var checkUndefinedOrNull = function checkUndefinedOrNull(value) {
  return value !== undefined && value !== null;
};
/**
 *  根据 key 和 dataIndex 生成唯一 id
 * @param key 用户设置的 key
 * @param dataIndex 在对象中的数据
 * @param index 序列号，理论上唯一
 */

var genColumnKey = function genColumnKey(key, index) {
  if (key) {
    return "" + key;
  }

  return "" + index;
};
/**
 * 减少 width，支持 string 和 number
 */

var reduceWidth = function reduceWidth(width) {
  if (width === undefined) {
    return width;
  }

  if (typeof width === 'string') {
    if (!width.includes('calc')) {
      return "calc(100% - " + width + ")";
    }

    return width;
  }

  if (typeof width === 'number') {
    return width - 32;
  }

  return width;
};
/**
 * 生成 Ellipsis 的 tooltip
 * @param dom
 * @param item
 * @param text
 */

var utils_genEllipsis = function genEllipsis(dom, item, text) {
  if (!item.ellipsis) {
    return dom;
  }

  return /*#__PURE__*/external_React_default.a.createElement(external_antd_["Tooltip"], {
    title: text
  }, /*#__PURE__*/external_React_default.a.createElement("span", null, dom));
};
var utils_genCopyable = function genCopyable(dom, item, text) {
  if (item.copyable || item.ellipsis) {
    return /*#__PURE__*/external_React_default.a.createElement(external_antd_["Typography"].Paragraph, {
      style: {
        width: reduceWidth(item.width),
        margin: 0,
        padding: 0
      },
      copyable: item.copyable ? {
        text: text
      } : undefined,
      title: text,
      ellipsis: item.ellipsis
    }, dom);
  }

  return dom;
};
/**
 * 合并用户 props 和 预设的 props
 * @param pagination
 * @param action
 * @param intl
 */

var mergePagination = function mergePagination(pagination, action, intl) {
  if (pagination === void 0) {
    pagination = {};
  }

  if (pagination === false) {
    return false;
  }

  var defaultPagination = pagination || {};
  var current = action.current,
      pageSize = action.pageSize;

  if (pagination === true) {
    defaultPagination = {};
  }

  return utils_objectSpread(utils_objectSpread({
    showTotal: function showTotal(all, range) {
      return intl.getMessage('pagination.total.range', '第') + " " + range[0] + "-" + range[1] + " " + intl.getMessage('pagination.total.total', '条/总共') + " " + all + " " + intl.getMessage('pagination.total.item', '条');
    },
    showSizeChanger: true,
    total: action.total
  }, defaultPagination), {}, {
    current: current,
    pageSize: pageSize,
    onChange: function onChange(page, newPageSize) {
      // pageSize 改变之后就没必要切换页码
      if (newPageSize !== pageSize && current !== page) {
        action.setPageInfo({
          pageSize: newPageSize,
          page: page
        });
      } else {
        if (newPageSize !== pageSize) {
          action.setPageInfo({
            pageSize: newPageSize
          });
        }

        if (current !== page) {
          action.setPageInfo({
            page: page
          });
        }
      }

      var _ref = pagination,
          onChange = _ref.onChange;

      if (onChange) {
        onChange(page, newPageSize || 20);
      }
    }
  });
};
/**
 * 八卦
 * @param actionRef
 * @param counter
 * @param onCleanSelected
 */

var utils_useActionType = function useActionType(action, ref, counter, onCleanSelected) {
  /**
   * 这里生成action的映射，保证 action 总是使用的最新
   * 只需要渲染一次即可
   */
  Object(external_React_["useEffect"])(function () {
    var userAction = {
      setDataSource: function setDataSource(value) {
        action.setDataSource(value);
      },
      getDataSource: function getDataSource() {
        return action.dataSource;
      },
      reload: function () {
        var _reload = utils_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resetPageIndex) {
          var current;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  current = counter.action.current;

                  if (current) {
                    _context.next = 3;
                    break;
                  }

                  return _context.abrupt("return");

                case 3:
                  if (!resetPageIndex) {
                    _context.next = 6;
                    break;
                  }

                  _context.next = 6;
                  return current.resetPageIndex();

                case 6:
                  _context.next = 8;
                  return current.reload();

                case 8:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        function reload(_x) {
          return _reload.apply(this, arguments);
        }

        return reload;
      }(),
      reloadAndRest: function () {
        var _reloadAndRest = utils_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          var current;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  current = counter.action.current;

                  if (current) {
                    _context2.next = 3;
                    break;
                  }

                  return _context2.abrupt("return");

                case 3:
                  // reload 之后大概率会切换数据，清空一下选择。
                  onCleanSelected(); // 如果为 true，回到第一页

                  _context2.next = 6;
                  return current.resetPageIndex();

                case 6:
                  _context2.next = 8;
                  return current.reload();

                case 8:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        function reloadAndRest() {
          return _reloadAndRest.apply(this, arguments);
        }

        return reloadAndRest;
      }(),
      fetchMore: function () {
        var _fetchMore = utils_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
          var current;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  current = counter.action.current;

                  if (current) {
                    _context3.next = 3;
                    break;
                  }

                  return _context3.abrupt("return");

                case 3:
                  _context3.next = 5;
                  return current.fetchMore();

                case 5:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));

        function fetchMore() {
          return _fetchMore.apply(this, arguments);
        }

        return fetchMore;
      }(),
      reset: function reset() {
        var current = counter.action.current;

        if (!current) {
          return;
        }

        current.reset();
      },
      clearSelected: function clearSelected() {
        return onCleanSelected();
      }
    };

    if (ref && typeof ref === 'function') {
      ref(userAction);
    }

    if (ref && typeof ref !== 'function') {
      // eslint-disable-next-line no-param-reassign
      ref.current = userAction;
    }
  }, [action]);
};

/**
 * 一个转化的 pipeline 列表
 * @param data
 * @param pipeline
 */
var postDataPipeline = function postDataPipeline(data, pipeline) {
  if (pipeline.filter(function (item) {
    return item;
  }).length < 1) {
    return data;
  }

  return pipeline.reduce(function (pre, postData) {
    if (postData) {
      return postData(pre);
    }

    return pre;
  }, data);
};
// CONCATENATED MODULE: ./packages/table/src/component/ColumnSetting/index.tsx
function ColumnSetting_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ColumnSetting_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ColumnSetting_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ColumnSetting_ownKeys(Object(source), true).forEach(function (key) { ColumnSetting_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ColumnSetting_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ColumnSetting_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















var ColumnSetting_ToolTipIcon = function ToolTipIcon(_ref) {
  var title = _ref.title,
      show = _ref.show,
      children = _ref.children,
      columnKey = _ref.columnKey,
      fixed = _ref.fixed;

  var _Container$useContain = container.useContainer(),
      columnsMap = _Container$useContain.columnsMap,
      setColumnsMap = _Container$useContain.setColumnsMap;

  if (!show) {
    return null;
  }

  return /*#__PURE__*/external_React_default.a.createElement(external_antd_["Tooltip"], {
    title: title
  }, /*#__PURE__*/external_React_default.a.createElement("span", {
    onClick: function onClick() {
      var _objectSpread2;

      var config = columnsMap[columnKey] || {};

      var columnKeyMap = ColumnSetting_objectSpread(ColumnSetting_objectSpread({}, columnsMap), {}, (_objectSpread2 = {}, _objectSpread2[columnKey] = ColumnSetting_objectSpread(ColumnSetting_objectSpread({}, config), {}, {
        fixed: fixed
      }), _objectSpread2));

      setColumnsMap(columnKeyMap);
    }
  }, children));
};

var ColumnSetting_CheckboxListItem = function CheckboxListItem(_ref2) {
  var columnKey = _ref2.columnKey,
      className = _ref2.className,
      columnsMap = _ref2.columnsMap,
      title = _ref2.title,
      setColumnsMap = _ref2.setColumnsMap,
      fixed = _ref2.fixed;
  var intl = useIntl();
  var config = columnsMap[columnKey || 'null'] || {
    show: true
  };
  return /*#__PURE__*/external_React_default.a.createElement("span", {
    className: className + "-list-item",
    key: columnKey
  }, /*#__PURE__*/external_React_default.a.createElement(DragIcon, null), /*#__PURE__*/external_React_default.a.createElement(external_antd_["Checkbox"], {
    onChange: function onChange(e) {
      if (columnKey) {
        var _objectSpread3;

        var tempConfig = columnsMap[columnKey] || {};

        var newSetting = ColumnSetting_objectSpread({}, tempConfig);

        if (e.target.checked) {
          delete newSetting.show;
        } else {
          newSetting.show = false;
        }

        var columnKeyMap = ColumnSetting_objectSpread(ColumnSetting_objectSpread({}, columnsMap), {}, (_objectSpread3 = {}, _objectSpread3[columnKey] = newSetting, _objectSpread3)); // 如果没有值了，直接干掉他


        if (Object.keys(newSetting).length === 0) {
          delete columnKeyMap[columnKey];
        }

        setColumnsMap(columnKeyMap);
      }
    },
    checked: config.show !== false
  }, title), /*#__PURE__*/external_React_default.a.createElement("span", {
    className: className + "-list-item-option"
  }, /*#__PURE__*/external_React_default.a.createElement(ColumnSetting_ToolTipIcon, {
    columnKey: columnKey,
    fixed: "left",
    title: intl.getMessage('tableToolBar.leftPin', '固定在列首'),
    show: fixed !== 'left'
  }, /*#__PURE__*/external_React_default.a.createElement(icons_VerticalAlignTopOutlined, null)), /*#__PURE__*/external_React_default.a.createElement(ColumnSetting_ToolTipIcon, {
    columnKey: columnKey,
    fixed: undefined,
    title: intl.getMessage('tableToolBar.noPin', '不固定'),
    show: !!fixed
  }, /*#__PURE__*/external_React_default.a.createElement(icons_VerticalAlignMiddleOutlined, null)), /*#__PURE__*/external_React_default.a.createElement(ColumnSetting_ToolTipIcon, {
    columnKey: columnKey,
    fixed: "right",
    title: intl.getMessage('tableToolBar.rightPin', '固定在列尾'),
    show: fixed !== 'right'
  }, /*#__PURE__*/external_React_default.a.createElement(icons_VerticalAlignBottomOutlined, null))));
};

var ColumnSetting_CheckboxList = function CheckboxList(_ref3) {
  var list = _ref3.list,
      className = _ref3.className,
      _ref3$showTitle = _ref3.showTitle,
      showTitle = _ref3$showTitle === void 0 ? true : _ref3$showTitle,
      listTitle = _ref3.title;

  var _Container$useContain2 = container.useContainer(),
      columnsMap = _Container$useContain2.columnsMap,
      setColumnsMap = _Container$useContain2.setColumnsMap,
      sortKeyColumns = _Container$useContain2.sortKeyColumns,
      setSortKeyColumns = _Container$useContain2.setSortKeyColumns;

  var show = list && list.length > 0;

  if (!show) {
    return null;
  }

  var move = function move(id, targetIndex) {
    var newMap = ColumnSetting_objectSpread({}, columnsMap);

    var newColumns = [].concat(sortKeyColumns);
    var findIndex = newColumns.findIndex(function (columnKey) {
      return columnKey === id;
    });

    if (findIndex === undefined) {
      return;
    }

    var index = newColumns[findIndex];
    newColumns.splice(findIndex, 1);

    if (targetIndex === 0) {
      newColumns.unshift(index);
    } else {
      newColumns.splice(targetIndex, 0, index);
    }

    newColumns.forEach(function (key, order) {
      newMap[key] = ColumnSetting_objectSpread(ColumnSetting_objectSpread({}, newMap[key] || {}), {}, {
        order: order
      });
    });
    setColumnsMap(newMap);
    setSortKeyColumns(newColumns);
  };

  var listDom = list.map(function (_ref4, index) {
    var key = _ref4.key,
        dataIndex = _ref4.dataIndex,
        title = _ref4.title,
        fixed = _ref4.fixed,
        rest = ColumnSetting_objectWithoutPropertiesLoose(_ref4, ["key", "dataIndex", "title", "fixed"]);

    var columnKey = genColumnKey(key, rest.index);
    return /*#__PURE__*/external_React_default.a.createElement(DndItem, {
      index: index,
      id: "" + columnKey,
      key: columnKey,
      end: function end(id, targetIndex) {
        move(id, targetIndex);
      }
    }, /*#__PURE__*/external_React_default.a.createElement(ColumnSetting_CheckboxListItem, {
      setColumnsMap: setColumnsMap,
      columnKey: columnKey || "" + index,
      columnsMap: columnsMap,
      title: title,
      fixed: fixed,
      className: className
    }));
  });
  return /*#__PURE__*/external_React_default.a.createElement(DndProvider["a" /* DndProvider */], {
    backend: esm
  }, showTitle && /*#__PURE__*/external_React_default.a.createElement("span", {
    className: className + "-list-title"
  }, listTitle), listDom);
};

var ColumnSetting_GroupCheckboxList = function GroupCheckboxList(_ref5) {
  var _classNames;

  var localColumns = _ref5.localColumns,
      className = _ref5.className;
  var rightList = [];
  var leftList = [];
  var list = [];
  var intl = useIntl();
  localColumns.forEach(function (item) {
    var fixed = item.fixed;

    if (fixed === 'left') {
      leftList.push(item);
      return;
    }

    if (fixed === 'right') {
      rightList.push(item);
      return;
    }

    list.push(item);
  });
  var showRight = rightList && rightList.length > 0;
  var showLeft = leftList && leftList.length > 0;
  return /*#__PURE__*/external_React_default.a.createElement("div", {
    className: classnames_default()(className + "-list", (_classNames = {}, _classNames[className + "-list-group"] = showRight || showLeft, _classNames))
  }, /*#__PURE__*/external_React_default.a.createElement(ColumnSetting_CheckboxList, {
    title: intl.getMessage('tableToolBar.leftFixedTitle', '固定在左侧'),
    list: leftList,
    className: className
  }), /*#__PURE__*/external_React_default.a.createElement(ColumnSetting_CheckboxList, {
    list: list,
    title: intl.getMessage('tableToolBar.noFixedTitle', '不固定'),
    showTitle: showLeft || showRight,
    className: className
  }), /*#__PURE__*/external_React_default.a.createElement(ColumnSetting_CheckboxList, {
    title: intl.getMessage('tableToolBar.rightFixedTitle', '固定在右侧'),
    list: rightList,
    className: className
  }));
};

var ColumnSetting_ColumnSetting = function ColumnSetting(props) {
  var counter = container.useContainer();
  var localColumns = props.columns || counter.columns || [];
  var columnsMap = counter.columnsMap,
      setColumnsMap = counter.setColumnsMap,
      setSortKeyColumns = counter.setSortKeyColumns;
  /**
   * 设置全部选中，或全部未选中
   * @param show
   */

  var setAllSelectAction = function setAllSelectAction(show) {
    if (show === void 0) {
      show = true;
    }

    var columnKeyMap = {};
    localColumns.forEach(function (_ref6) {
      var key = _ref6.key,
          fixed = _ref6.fixed,
          index = _ref6.index;
      var columnKey = genColumnKey(key, index);

      if (columnKey) {
        columnKeyMap[columnKey] = {
          show: show,
          fixed: fixed
        };
      }
    });
    setColumnsMap(columnKeyMap);
  }; // 选中的 key 列表


  var selectedKeys = Object.values(columnsMap).filter(function (value) {
    return !value || value.show === false;
  }); // 是否已经选中

  var indeterminate = selectedKeys.length > 0 && selectedKeys.length !== localColumns.length;
  var intl = useIntl();

  var _useContext = Object(external_React_["useContext"])(config_provider_["ConfigContext"]),
      getPrefixCls = _useContext.getPrefixCls;

  var className = getPrefixCls('pro-table-column-setting');
  var toolBarClassName = getPrefixCls('pro-table-toolbar');
  return /*#__PURE__*/external_React_default.a.createElement(external_antd_["Popover"], {
    arrowPointAtCenter: true,
    title: /*#__PURE__*/external_React_default.a.createElement("div", {
      className: className + "-title"
    }, /*#__PURE__*/external_React_default.a.createElement(external_antd_["Checkbox"], {
      indeterminate: indeterminate,
      checked: selectedKeys.length === 0 && selectedKeys.length !== localColumns.length,
      onChange: function onChange(e) {
        if (e.target.checked) {
          setAllSelectAction();
        } else {
          setAllSelectAction(false);
        }
      }
    }, intl.getMessage('tableToolBar.columnDisplay', '列展示')), /*#__PURE__*/external_React_default.a.createElement("a", {
      onClick: function onClick() {
        setColumnsMap({});
        setSortKeyColumns([]);
      }
    }, intl.getMessage('tableToolBar.reset', '重置'))),
    overlayClassName: className + "-overlay",
    trigger: "click",
    placement: "bottomRight",
    content: /*#__PURE__*/external_React_default.a.createElement(ColumnSetting_GroupCheckboxList, {
      className: className,
      localColumns: localColumns
    })
  }, /*#__PURE__*/external_React_default.a.createElement("span", {
    className: toolBarClassName + "-item-icon"
  }, /*#__PURE__*/external_React_default.a.createElement(external_antd_["Tooltip"], {
    title: intl.getMessage('tableToolBar.columnSetting', '列设置')
  }, /*#__PURE__*/external_React_default.a.createElement(icons_SettingOutlined, null))));
};

/* harmony default export */ var src_component_ColumnSetting = (ColumnSetting_ColumnSetting);
// EXTERNAL MODULE: ./packages/table/src/component/ToolBar/index.less
var component_ToolBar = __webpack_require__(58);

// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/FullscreenExitOutlined.js
// This icon file is generated automatically.
var FullscreenExitOutlined_FullscreenExitOutlined = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M391 240.9c-.8-6.6-8.9-9.4-13.6-4.7l-43.7 43.7L200 146.3a8.03 8.03 0 00-11.3 0l-42.4 42.3a8.03 8.03 0 000 11.3L280 333.6l-43.9 43.9a8.01 8.01 0 004.7 13.6L401 410c5.1.6 9.5-3.7 8.9-8.9L391 240.9zm10.1 373.2L240.8 633c-6.6.8-9.4 8.9-4.7 13.6l43.9 43.9L146.3 824a8.03 8.03 0 000 11.3l42.4 42.3c3.1 3.1 8.2 3.1 11.3 0L333.7 744l43.7 43.7A8.01 8.01 0 00391 783l18.9-160.1c.6-5.1-3.7-9.4-8.8-8.8zm221.8-204.2L783.2 391c6.6-.8 9.4-8.9 4.7-13.6L744 333.6 877.7 200c3.1-3.1 3.1-8.2 0-11.3l-42.4-42.3a8.03 8.03 0 00-11.3 0L690.3 279.9l-43.7-43.7a8.01 8.01 0 00-13.6 4.7L614.1 401c-.6 5.2 3.7 9.5 8.8 8.9zM744 690.4l43.9-43.9a8.01 8.01 0 00-4.7-13.6L623 614c-5.1-.6-9.5 3.7-8.9 8.9L633 783.1c.8 6.6 8.9 9.4 13.6 4.7l43.7-43.7L824 877.7c3.1 3.1 8.2 3.1 11.3 0l42.4-42.3c3.1-3.1 3.1-8.2 0-11.3L744 690.4z"
      }
    }]
  },
  "name": "fullscreen-exit",
  "theme": "outlined"
};
/* harmony default export */ var asn_FullscreenExitOutlined = (FullscreenExitOutlined_FullscreenExitOutlined);
// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/FullscreenExitOutlined.js
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var icons_FullscreenExitOutlined_FullscreenExitOutlined = function FullscreenExitOutlined(props, ref) {
  return /*#__PURE__*/external_React_["createElement"](AntdIcon, Object.assign({}, props, {
    ref: ref,
    icon: asn_FullscreenExitOutlined
  }));
};

icons_FullscreenExitOutlined_FullscreenExitOutlined.displayName = 'FullscreenExitOutlined';
/* harmony default export */ var icons_FullscreenExitOutlined = (/*#__PURE__*/external_React_["forwardRef"](icons_FullscreenExitOutlined_FullscreenExitOutlined));
// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/FullscreenOutlined.js
// This icon file is generated automatically.
var FullscreenOutlined_FullscreenOutlined = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M290 236.4l43.9-43.9a8.01 8.01 0 00-4.7-13.6L169 160c-5.1-.6-9.5 3.7-8.9 8.9L179 329.1c.8 6.6 8.9 9.4 13.6 4.7l43.7-43.7L370 423.7c3.1 3.1 8.2 3.1 11.3 0l42.4-42.3c3.1-3.1 3.1-8.2 0-11.3L290 236.4zm352.7 187.3c3.1 3.1 8.2 3.1 11.3 0l133.7-133.6 43.7 43.7a8.01 8.01 0 0013.6-4.7L863.9 169c.6-5.1-3.7-9.5-8.9-8.9L694.8 179c-6.6.8-9.4 8.9-4.7 13.6l43.9 43.9L600.3 370a8.03 8.03 0 000 11.3l42.4 42.4zM845 694.9c-.8-6.6-8.9-9.4-13.6-4.7l-43.7 43.7L654 600.3a8.03 8.03 0 00-11.3 0l-42.4 42.3a8.03 8.03 0 000 11.3L734 787.6l-43.9 43.9a8.01 8.01 0 004.7 13.6L855 864c5.1.6 9.5-3.7 8.9-8.9L845 694.9zm-463.7-94.6a8.03 8.03 0 00-11.3 0L236.3 733.9l-43.7-43.7a8.01 8.01 0 00-13.6 4.7L160.1 855c-.6 5.1 3.7 9.5 8.9 8.9L329.2 845c6.6-.8 9.4-8.9 4.7-13.6L290 787.6 423.7 654c3.1-3.1 3.1-8.2 0-11.3l-42.4-42.4z"
      }
    }]
  },
  "name": "fullscreen",
  "theme": "outlined"
};
/* harmony default export */ var asn_FullscreenOutlined = (FullscreenOutlined_FullscreenOutlined);
// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/FullscreenOutlined.js
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var icons_FullscreenOutlined_FullscreenOutlined = function FullscreenOutlined(props, ref) {
  return /*#__PURE__*/external_React_["createElement"](AntdIcon, Object.assign({}, props, {
    ref: ref,
    icon: asn_FullscreenOutlined
  }));
};

icons_FullscreenOutlined_FullscreenOutlined.displayName = 'FullscreenOutlined';
/* harmony default export */ var icons_FullscreenOutlined = (/*#__PURE__*/external_React_["forwardRef"](icons_FullscreenOutlined_FullscreenOutlined));
// CONCATENATED MODULE: ./packages/table/src/component/ToolBar/FullscreenIcon.tsx





var FullscreenIcon_FullScreenIcon = function FullScreenIcon() {
  var intl = useIntl();

  var _useState = Object(external_React_["useState"])(false),
      fullscreen = _useState[0],
      setFullscreen = _useState[1];

  Object(external_React_["useEffect"])(function () {
    document.onfullscreenchange = function () {
      setFullscreen(!!document.fullscreenElement);
    };
  }, []);
  return fullscreen ? /*#__PURE__*/external_React_default.a.createElement(external_antd_["Tooltip"], {
    title: intl.getMessage('tableToolBar.exitFullScreen', '全屏')
  }, /*#__PURE__*/external_React_default.a.createElement(icons_FullscreenExitOutlined, null)) : /*#__PURE__*/external_React_default.a.createElement(external_antd_["Tooltip"], {
    title: intl.getMessage('tableToolBar.fullScreen', '全屏')
  }, /*#__PURE__*/external_React_default.a.createElement(icons_FullscreenOutlined, null));
};

/* harmony default export */ var FullscreenIcon = (FullscreenIcon_FullScreenIcon);
// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/ColumnHeightOutlined.js
// This icon file is generated automatically.
var ColumnHeightOutlined_ColumnHeightOutlined = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M840 836H184c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h656c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm0-724H184c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h656c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zM610.8 378c6 0 9.4-7 5.7-11.7L515.7 238.7a7.14 7.14 0 00-11.3 0L403.6 366.3a7.23 7.23 0 005.7 11.7H476v268h-62.8c-6 0-9.4 7-5.7 11.7l100.8 127.5c2.9 3.7 8.5 3.7 11.3 0l100.8-127.5c3.7-4.7.4-11.7-5.7-11.7H548V378h62.8z"
      }
    }]
  },
  "name": "column-height",
  "theme": "outlined"
};
/* harmony default export */ var asn_ColumnHeightOutlined = (ColumnHeightOutlined_ColumnHeightOutlined);
// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/ColumnHeightOutlined.js
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var icons_ColumnHeightOutlined_ColumnHeightOutlined = function ColumnHeightOutlined(props, ref) {
  return /*#__PURE__*/external_React_["createElement"](AntdIcon, Object.assign({}, props, {
    ref: ref,
    icon: asn_ColumnHeightOutlined
  }));
};

icons_ColumnHeightOutlined_ColumnHeightOutlined.displayName = 'ColumnHeightOutlined';
/* harmony default export */ var icons_ColumnHeightOutlined = (/*#__PURE__*/external_React_["forwardRef"](icons_ColumnHeightOutlined_ColumnHeightOutlined));
// CONCATENATED MODULE: ./packages/table/src/component/ToolBar/DensityIcon.tsx






var DensityIcon_DensityIcon = function DensityIcon(_, ref) {
  var counter = container.useContainer();
  var intl = useIntl();
  return /*#__PURE__*/external_React_default.a.createElement(external_antd_["Dropdown"], {
    overlay: /*#__PURE__*/external_React_default.a.createElement(external_antd_["Menu"], {
      selectedKeys: [counter.tableSize],
      onClick: function onClick(_ref) {
        var key = _ref.key;

        if (counter.setTableSize) {
          counter.setTableSize(key);
        }
      },
      style: {
        width: 80
      }
    }, /*#__PURE__*/external_React_default.a.createElement(external_antd_["Menu"].Item, {
      key: "large"
    }, intl.getMessage('tableToolBar.densityLarger', '默认')), /*#__PURE__*/external_React_default.a.createElement(external_antd_["Menu"].Item, {
      key: "middle"
    }, intl.getMessage('tableToolBar.densityMiddle', '中等')), /*#__PURE__*/external_React_default.a.createElement(external_antd_["Menu"].Item, {
      key: "small"
    }, intl.getMessage('tableToolBar.densitySmall', '紧凑'))),
    trigger: ['click']
  }, /*#__PURE__*/external_React_default.a.createElement(external_antd_["Tooltip"], {
    ref: ref,
    title: intl.getMessage('tableToolBar.density', '表格密度')
  }, /*#__PURE__*/external_React_default.a.createElement(icons_ColumnHeightOutlined, null)));
};

/* harmony default export */ var ToolBar_DensityIcon = (/*#__PURE__*/external_React_default.a.forwardRef(DensityIcon_DensityIcon));
// CONCATENATED MODULE: ./packages/table/src/component/ToolBar/index.tsx
function ToolBar_extends() { ToolBar_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ToolBar_extends.apply(this, arguments); }

function ToolBar_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ToolBar_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ToolBar_ownKeys(Object(source), true).forEach(function (key) { ToolBar_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ToolBar_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ToolBar_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












var ToolBar_getButtonText = function getButtonText(_ref) {
  var intl = _ref.intl;
  return {
    reload: {
      text: intl.getMessage('tableToolBar.reload', '刷新'),
      icon: /*#__PURE__*/external_React_default.a.createElement(icons_ReloadOutlined, null)
    },
    density: {
      text: intl.getMessage('tableToolBar.density', '表格密度'),
      icon: /*#__PURE__*/external_React_default.a.createElement(ToolBar_DensityIcon, null)
    },
    setting: {
      text: intl.getMessage('tableToolBar.columnSetting', '列设置'),
      icon: /*#__PURE__*/external_React_default.a.createElement(icons_SettingOutlined, null)
    },
    fullScreen: {
      text: intl.getMessage('tableToolBar.fullScreen', '全屏'),
      icon: /*#__PURE__*/external_React_default.a.createElement(FullscreenIcon, null)
    }
  };
};
/**
 * 渲染默认的 工具栏
 * @param options
 * @param className
 */


var ToolBar_renderDefaultOption = function renderDefaultOption(options, className, defaultOptions) {
  return options && Object.keys(options).filter(function (item) {
    return item;
  }).map(function (key) {
    var value = options[key];

    if (!value) {
      return null;
    }

    if (key === 'setting') {
      return /*#__PURE__*/external_React_default.a.createElement(src_component_ColumnSetting, {
        key: key
      });
    }

    if (key === 'fullScreen') {
      return /*#__PURE__*/external_React_default.a.createElement("span", {
        key: key,
        className: className,
        onClick: value === true ? defaultOptions[key] : value
      }, /*#__PURE__*/external_React_default.a.createElement(FullscreenIcon, null));
    }

    var optionItem = ToolBar_getButtonText(defaultOptions)[key];

    if (optionItem) {
      return /*#__PURE__*/external_React_default.a.createElement("span", {
        key: key,
        className: className,
        onClick: function onClick() {
          if (value && defaultOptions[key] !== true) {
            if (value !== true) {
              value();
              return;
            }

            defaultOptions[key]();
          }
        }
      }, /*#__PURE__*/external_React_default.a.createElement(external_antd_["Tooltip"], {
        title: optionItem.text
      }, optionItem.icon));
    }

    return null;
  }).filter(function (item) {
    return item;
  });
};

var ToolBar_ToolBar = function ToolBar(_ref2) {
  var headerTitle = _ref2.headerTitle,
      tip = _ref2.tip,
      toolBarRender = _ref2.toolBarRender,
      action = _ref2.action,
      propsOptions = _ref2.options,
      selectedRowKeys = _ref2.selectedRowKeys,
      selectedRows = _ref2.selectedRows,
      onSearch = _ref2.onSearch;

  var _useContext = Object(external_React_["useContext"])(context_["ConfigContext"]),
      getPrefixCls = _useContext.getPrefixCls;

  var className = getPrefixCls('pro-table-toolbar');

  var defaultOptions = ToolBar_objectSpread({
    reload: function reload() {
      return action.reload();
    },
    density: true,
    setting: true,
    search: false,
    fullScreen: function fullScreen() {
      return action.fullScreen && action.fullScreen();
    }
  }, propsOptions || {});

  var options = propsOptions !== false ? defaultOptions : false;
  var intl = useIntl();
  var optionDom = ToolBar_renderDefaultOption(options, className + "-item-icon", ToolBar_objectSpread(ToolBar_objectSpread({}, defaultOptions), {}, {
    intl: intl
  })) || []; // 操作列表

  var actions = toolBarRender ? toolBarRender(action, {
    selectedRowKeys: selectedRowKeys,
    selectedRows: selectedRows
  }) : [];

  var renderDivider = function renderDivider() {
    if (optionDom.length < 1) {
      return false;
    }

    if (actions.length < 1 && options && options.search === false) {
      return false;
    }

    return /*#__PURE__*/external_React_default.a.createElement(external_antd_["Divider"], {
      type: "vertical"
    });
  };

  return /*#__PURE__*/external_React_default.a.createElement("div", {
    className: className
  }, /*#__PURE__*/external_React_default.a.createElement("div", {
    className: className + "-title"
  }, /*#__PURE__*/external_React_default.a.createElement(es_components_LabelIconTip, {
    label: headerTitle,
    tip: tip
  })), /*#__PURE__*/external_React_default.a.createElement("div", {
    className: className + "-option"
  }, /*#__PURE__*/external_React_default.a.createElement(external_antd_["Space"], null, options && options.search && /*#__PURE__*/external_React_default.a.createElement(external_antd_["Input"].Search, ToolBar_extends({
    placeholder: intl.getMessage('tableForm.inputPlaceholder', '请输入'),
    style: {
      width: 200
    }
  }, options.search, {
    onSearch: onSearch
  })), actions.filter(function (item) {
    return item;
  }).map(function (node, index) {
    return /*#__PURE__*/external_React_default.a.createElement("div", {
      // eslint-disable-next-line react/no-array-index-key
      key: index
    }, node);
  })), /*#__PURE__*/external_React_default.a.createElement("div", {
    className: className + "-default-option"
  }, renderDivider(), /*#__PURE__*/external_React_default.a.createElement(external_antd_["Space"], null, optionDom))));
};

/* harmony default export */ var src_component_ToolBar = (ToolBar_ToolBar);
// EXTERNAL MODULE: ./packages/table/src/component/Alert/index.less
var Alert = __webpack_require__(59);

// CONCATENATED MODULE: ./packages/table/src/component/Alert/index.tsx






var Alert_defaultAlertOptionRender = function defaultAlertOptionRender(props) {
  var intl = props.intl,
      onCleanSelected = props.onCleanSelected;
  return [/*#__PURE__*/external_React_default.a.createElement("a", {
    onClick: onCleanSelected,
    key: "0"
  }, intl.getMessage('alert.clear', '清空'))];
};

var Alert_TableAlert = function TableAlert(_ref) {
  var _ref$selectedRowKeys = _ref.selectedRowKeys,
      selectedRowKeys = _ref$selectedRowKeys === void 0 ? [] : _ref$selectedRowKeys,
      onCleanSelected = _ref.onCleanSelected,
      _ref$selectedRows = _ref.selectedRows,
      selectedRows = _ref$selectedRows === void 0 ? [] : _ref$selectedRows,
      _ref$alertInfoRender = _ref.alertInfoRender,
      alertInfoRender = _ref$alertInfoRender === void 0 ? function (_ref2) {
    var intl = _ref2.intl;
    return /*#__PURE__*/external_React_default.a.createElement(external_antd_["Space"], null, intl.getMessage('alert.selected', '已选择'), /*#__PURE__*/external_React_default.a.createElement("a", {
      style: {
        fontWeight: 600
      }
    }, selectedRowKeys.length), intl.getMessage('alert.item', '项'), "\xA0\xA0");
  } : _ref$alertInfoRender,
      _ref$alertOptionRende = _ref.alertOptionRender,
      alertOptionRender = _ref$alertOptionRende === void 0 ? Alert_defaultAlertOptionRender : _ref$alertOptionRende;
  var intl = useIntl();
  var option = alertOptionRender && alertOptionRender({
    onCleanSelected: onCleanSelected,
    intl: intl
  });

  var _useContext = Object(external_React_["useContext"])(context_["ConfigContext"]),
      getPrefixCls = _useContext.getPrefixCls;

  var className = getPrefixCls('pro-table-alert');

  if (alertInfoRender === false) {
    return null;
  }

  var dom = alertInfoRender({
    intl: intl,
    selectedRowKeys: selectedRowKeys,
    selectedRows: selectedRows
  });

  if (dom === false || selectedRowKeys.length < 1) {
    return null;
  }

  return /*#__PURE__*/external_React_default.a.createElement("div", {
    className: className
  }, /*#__PURE__*/external_React_default.a.createElement(external_antd_["Alert"], {
    message: /*#__PURE__*/external_React_default.a.createElement("div", {
      className: className + "-info"
    }, /*#__PURE__*/external_React_default.a.createElement("div", {
      className: className + "-info-content"
    }, dom), option && /*#__PURE__*/external_React_default.a.createElement("div", {
      className: className + "-info-option"
    }, option)),
    type: "info",
    showIcon: true
  }));
};

/* harmony default export */ var component_Alert = (Alert_TableAlert);
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function classCallCheck_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
function createClass_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function createClass_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) createClass_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) createClass_defineProperties(Constructor, staticProps);
  return Constructor;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js

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
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js


function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
// EXTERNAL MODULE: external "ReactDOM"
var external_ReactDOM_ = __webpack_require__(39);
var external_ReactDOM_default = /*#__PURE__*/__webpack_require__.n(external_ReactDOM_);

// CONCATENATED MODULE: ./node_modules/rc-util/es/Dom/findDOMNode.js

/**
 * Return if a node is a DOM node. Else will return by `findDOMNode`
 */

function findDOMNode(node) {
  if (node instanceof HTMLElement) {
    return node;
  }

  return external_ReactDOM_default.a.findDOMNode(node);
}
// EXTERNAL MODULE: ./node_modules/react-is/index.js
var react_is = __webpack_require__(20);

// CONCATENATED MODULE: ./node_modules/rc-util/es/Children/toArray.js


function toArray(children) {
  var ret = [];
  external_React_default.a.Children.forEach(children, function (child) {
    if (child === undefined || child === null) {
      return;
    }

    if (Array.isArray(child)) {
      ret = ret.concat(toArray(child));
    } else if (Object(react_is["isFragment"])(child) && child.props) {
      ret = ret.concat(toArray(child.props.children));
    } else {
      ret.push(child);
    }
  });
  return ret;
}
// CONCATENATED MODULE: ./node_modules/rc-util/es/ref.js
function ref_typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    ref_typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    ref_typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return ref_typeof(obj);
}


function fillRef(ref, node) {
  if (typeof ref === 'function') {
    ref(node);
  } else if (ref_typeof(ref) === 'object' && ref && 'current' in ref) {
    ref.current = node;
  }
}
/**
 * Merge refs into one ref function to support ref passing.
 */

function composeRef() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }

  return function (node) {
    refs.forEach(function (ref) {
      fillRef(ref, node);
    });
  };
}
function supportRef(nodeOrComponent) {
  var _type$prototype, _nodeOrComponent$prot;

  var type = Object(react_is["isMemo"])(nodeOrComponent) ? nodeOrComponent.type.type : nodeOrComponent.type; // Function component node

  if (typeof type === 'function' && !((_type$prototype = type.prototype) === null || _type$prototype === void 0 ? void 0 : _type$prototype.render)) {
    return false;
  } // Class component


  if (typeof nodeOrComponent === 'function' && !((_nodeOrComponent$prot = nodeOrComponent.prototype) === null || _nodeOrComponent$prot === void 0 ? void 0 : _nodeOrComponent$prot.render)) {
    return false;
  }

  return true;
}
/* eslint-enable */
// EXTERNAL MODULE: ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js
var ResizeObserver_es = __webpack_require__(40);

// CONCATENATED MODULE: ./node_modules/rc-resize-observer/es/index.js







function rc_resize_observer_es_ownKeys(object, enumerableOnly) {
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

function rc_resize_observer_es_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      rc_resize_observer_es_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      rc_resize_observer_es_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}







var INTERNAL_PREFIX_KEY = 'rc-observer-key'; // Still need to be compatible with React 15, we use class component here

var es_ReactResizeObserver =
/** @class */
function () {
  var ReactResizeObserver = /*#__PURE__*/function (_React$Component) {
    _inherits(ReactResizeObserver, _React$Component);

    var _super = _createSuper(ReactResizeObserver);

    function ReactResizeObserver() {
      var _this;

      classCallCheck_classCallCheck(this, ReactResizeObserver);

      _this = _super.apply(this, arguments);
      _this.resizeObserver = null;
      _this.childNode = null;
      _this.currentElement = null;
      _this.state = {
        width: 0,
        height: 0
      };

      _this.onResize = function (entries) {
        var onResize = _this.props.onResize;
        var target = entries[0].target;

        var _target$getBoundingCl = target.getBoundingClientRect(),
            width = _target$getBoundingCl.width,
            height = _target$getBoundingCl.height;

        var offsetWidth = target.offsetWidth,
            offsetHeight = target.offsetHeight;
        /**
         * Resize observer trigger when content size changed.
         * In most case we just care about element size,
         * let's use `boundary` instead of `contentRect` here to avoid shaking.
         */

        var fixedWidth = Math.floor(width);
        var fixedHeight = Math.floor(height);

        if (_this.state.width !== fixedWidth || _this.state.height !== fixedHeight) {
          var size = {
            width: fixedWidth,
            height: fixedHeight
          };

          _this.setState(size);

          if (onResize) {
            onResize(rc_resize_observer_es_objectSpread(rc_resize_observer_es_objectSpread({}, size), {}, {
              offsetWidth: offsetWidth,
              offsetHeight: offsetHeight
            }));
          }
        }
      };

      _this.setChildNode = function (node) {
        _this.childNode = node;
      };

      return _this;
    }

    createClass_createClass(ReactResizeObserver, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.onComponentUpdated();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        this.onComponentUpdated();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.destroyObserver();
      }
    }, {
      key: "onComponentUpdated",
      value: function onComponentUpdated() {
        var disabled = this.props.disabled; // Unregister if disabled

        if (disabled) {
          this.destroyObserver();
          return;
        } // Unregister if element changed


        var element = findDOMNode(this.childNode || this);
        var elementChanged = element !== this.currentElement;

        if (elementChanged) {
          this.destroyObserver();
          this.currentElement = element;
        }

        if (!this.resizeObserver && element) {
          this.resizeObserver = new ResizeObserver_es["a" /* default */](this.onResize);
          this.resizeObserver.observe(element);
        }
      }
    }, {
      key: "destroyObserver",
      value: function destroyObserver() {
        if (this.resizeObserver) {
          this.resizeObserver.disconnect();
          this.resizeObserver = null;
        }
      }
    }, {
      key: "render",
      value: function render() {
        var children = this.props.children;
        var childNodes = toArray(children);

        if (childNodes.length > 1) {
          es_warning(false, 'Find more than one child node with `children` in ResizeObserver. Will only observe first one.');
        } else if (childNodes.length === 0) {
          es_warning(false, '`children` of ResizeObserver is empty. Nothing is in observe.');
          return null;
        }

        var childNode = childNodes[0];

        if ( /*#__PURE__*/external_React_["isValidElement"](childNode) && supportRef(childNode)) {
          var ref = childNode.ref;
          childNodes[0] = /*#__PURE__*/external_React_["cloneElement"](childNode, {
            ref: composeRef(ref, this.setChildNode)
          });
        }

        return childNodes.length === 1 ? childNodes[0] : childNodes.map(function (node, index) {
          if (! /*#__PURE__*/external_React_["isValidElement"](node) || 'key' in node && node.key !== null) {
            return node;
          }

          return /*#__PURE__*/external_React_["cloneElement"](node, {
            key: "".concat(INTERNAL_PREFIX_KEY, "-").concat(index)
          });
        });
      }
    }]);

    return ReactResizeObserver;
  }(external_React_["Component"]);

  ReactResizeObserver.displayName = 'ResizeObserver';
  return ReactResizeObserver;
}();

/* harmony default export */ var rc_resize_observer_es = (es_ReactResizeObserver);
// EXTERNAL MODULE: ./node_modules/react-responsive/dist/react-responsive.js
var react_responsive = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/use-media-antd-query/es/index.js
function es_slicedToArray(arr, i) {
  return es_arrayWithHoles(arr) || es_iterableToArrayLimit(arr, i) || es_nonIterableRest();
}

function es_nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function es_iterableToArrayLimit(arr, i) {
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

function es_arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}



var MediaQueryEnum = {
  xs: {
    maxWidth: 575,
    matchMedia: '(max-width: 575px)'
  },
  sm: {
    minWidth: 576,
    maxWidth: 767,
    matchMedia: '(min-width: 576px) and (max-width: 767px)'
  },
  md: {
    minWidth: 768,
    maxWidth: 991,
    matchMedia: '(min-width: 768px) and (max-width: 991px)'
  },
  lg: {
    minWidth: 992,
    maxWidth: 1199,
    matchMedia: '(min-width: 992px) and (max-width: 1199px)'
  },
  xl: {
    minWidth: 1200,
    maxWidth: 1599,
    matchMedia: '(min-width: 1200px) and (max-width: 1599px)'
  },
  xxl: {
    minWidth: 1600,
    matchMedia: '(min-width: 1600px)'
  }
};
/**
 * loop query screen className
 * Array.find will throw a error
 * `Rendered more hooks than during the previous render.`
 * So should use Array.forEach
 */

var getScreenClassName = function getScreenClassName() {
  var className = 'md'; // support ssr

  if (typeof window === 'undefined') {
    return className;
  }

  var mediaQueryKey = Object.keys(MediaQueryEnum).find(function (key) {
    var matchMedia = MediaQueryEnum[key].matchMedia;

    if (window.matchMedia(matchMedia).matches) {
      return true;
    }

    return false;
  });
  className = mediaQueryKey;
  return className;
};

var es_useMedia = function useMedia() {
  var isMd = Object(react_responsive["useMediaQuery"])(MediaQueryEnum.md);
  var isLg = Object(react_responsive["useMediaQuery"])(MediaQueryEnum.lg);
  var isXxl = Object(react_responsive["useMediaQuery"])(MediaQueryEnum.xxl);
  var isXl = Object(react_responsive["useMediaQuery"])(MediaQueryEnum.xl);
  var isSm = Object(react_responsive["useMediaQuery"])(MediaQueryEnum.sm);
  var isXs = Object(react_responsive["useMediaQuery"])(MediaQueryEnum.xs);

  var _useState = Object(external_React_["useState"])(getScreenClassName()),
      _useState2 = es_slicedToArray(_useState, 2),
      colSpan = _useState2[0],
      setColSpan = _useState2[1];

  Object(external_React_["useEffect"])(function () {
    if (isXxl) {
      setColSpan('xxl');
      return;
    }

    if (isXl) {
      setColSpan('xl');
      return;
    }

    if (isLg) {
      setColSpan('lg');
      return;
    }

    if (isMd) {
      setColSpan('md');
      return;
    }

    if (isSm) {
      setColSpan('sm');
      return;
    }

    if (isXs) {
      setColSpan('xs');
      return;
    }

    setColSpan('md');
  }, [isMd, isLg, isXxl, isXl, isSm, isXs]);
  return colSpan;
};

/* harmony default export */ var use_media_antd_query_es = (es_useMedia);
// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/DownOutlined.js
// This icon file is generated automatically.
var DownOutlined_DownOutlined = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"
      }
    }]
  },
  "name": "down",
  "theme": "outlined"
};
/* harmony default export */ var asn_DownOutlined = (DownOutlined_DownOutlined);
// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/DownOutlined.js
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var icons_DownOutlined_DownOutlined = function DownOutlined(props, ref) {
  return /*#__PURE__*/external_React_["createElement"](AntdIcon, Object.assign({}, props, {
    ref: ref,
    icon: asn_DownOutlined
  }));
};

icons_DownOutlined_DownOutlined.displayName = 'DownOutlined';
/* harmony default export */ var icons_DownOutlined = (/*#__PURE__*/external_React_["forwardRef"](icons_DownOutlined_DownOutlined));
// CONCATENATED MODULE: ./packages/table/src/Form/FormOption.tsx



/**
 * FormFooter 的组件，可以自动进行一些配置
 * @param props
 */
var FormOption_FormOption = function FormOption(props) {
  var searchConfig = props.searchConfig,
      setCollapse = props.setCollapse,
      collapse = props.collapse,
      type = props.type,
      form = props.form,
      submit = props.submit,
      showCollapseButton = props.showCollapseButton,
      _props$onReset = props.onReset,
      onReset = _props$onReset === void 0 ? function () {} : _props$onReset;
  var isForm = type === 'form';
  var searchText = searchConfig.searchText,
      submitText = searchConfig.submitText,
      resetText = searchConfig.resetText,
      collapseRender = searchConfig.collapseRender,
      optionRender = searchConfig.optionRender;

  if (optionRender === false) {
    return null;
  }

  if (optionRender) {
    return /*#__PURE__*/external_React_default.a.createElement(external_React_default.a.Fragment, null, optionRender(searchConfig, props));
  }

  return /*#__PURE__*/external_React_default.a.createElement(external_antd_["Space"], null, /*#__PURE__*/external_React_default.a.createElement(external_antd_["Button"], {
    onClick: function onClick() {
      form.resetFields();
      onReset();

      if (!isForm) {
        submit();
      }
    }
  }, resetText), /*#__PURE__*/external_React_default.a.createElement(external_antd_["Button"], {
    type: "primary",
    htmlType: "submit",
    onClick: function onClick() {
      return submit();
    }
  }, isForm ? submitText : searchText), !isForm && showCollapseButton && /*#__PURE__*/external_React_default.a.createElement("a", {
    onClick: function onClick() {
      setCollapse(!collapse);
    }
  }, collapseRender && collapseRender(collapse)));
};

/* harmony default export */ var Form_FormOption = (FormOption_FormOption);
// EXTERNAL MODULE: ./packages/table/src/Form/index.less
var Form = __webpack_require__(61);

// CONCATENATED MODULE: ./packages/table/src/Form/index.tsx
function Form_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function Form_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { Form_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { Form_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function Form_extends() { Form_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Form_extends.apply(this, arguments); }

function Form_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Form_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Form_ownKeys(Object(source), true).forEach(function (key) { Form_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Form_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Form_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Form_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

















/**
 * 默认的查询表单配置
 */

var defaultColConfig = {
  xs: 24,
  sm: 24,
  md: 12,
  lg: 12,
  xl: 8,
  xxl: 6
};
/**
 * 默认的新建表单配置
 */

var defaultFormColConfig = {
  xs: 24,
  sm: 24,
  md: 24,
  lg: 24,
  xl: 24,
  xxl: 24
};
/**
 * 用于配置操作栏
 */

/**
 * 获取最后一行的 offset，保证在最后一列
 * @param length
 * @param span
 */
var getOffset = function getOffset(length, span) {
  if (span === void 0) {
    span = 8;
  }

  var cols = 24 / span;
  return (cols - 1 - length % cols) * span;
};
/**
 * 默认的设置
 */


var defaultSearch = {
  searchText: '查询',
  resetText: '重置',
  span: defaultColConfig,
  collapseRender: function collapseRender(collapsed) {
    return collapsed ? '展开' : '收起';
  }
};
var FormInputRender = /*#__PURE__*/external_React_default.a.forwardRef(function (props, ref) {
  var item = props.item,
      intl = props.intl,
      form = props.form,
      type = props.type,
      rest = Form_objectWithoutPropertiesLoose(props, ["item", "intl", "form", "type"]);

  var itemValueType = item.valueType; // if function， run it

  var valueType = (typeof itemValueType === 'function' ? itemValueType({}) : itemValueType) || 'text';
  /**
   * 自定义 render
   */

  if (item.renderFormItem) {
    /**
     *删除 renderFormItem 防止重复的 dom 渲染
     */
    var renderFormItem = item.renderFormItem,
        restItem = Form_objectWithoutPropertiesLoose(item, ["renderFormItem"]);

    var defaultRender = function defaultRender(newItem) {
      return /*#__PURE__*/external_React_default.a.createElement(FormInputRender, Form_objectSpread(Form_objectSpread({}, props), {}, {
        item: newItem
      }) || null);
    }; // 自动注入 onChange 和 value,用户自己很有肯能忘记


    var dom = renderFormItem(restItem, Form_objectSpread(Form_objectSpread({}, rest), {}, {
      type: type,
      defaultRender: defaultRender
    }), form); // 有可能不是不是一个组件

    if (! /*#__PURE__*/external_React_default.a.isValidElement(dom)) {
      return dom;
    }

    var defaultProps = dom.props; // 已用户的为主，不然过于 magic

    return /*#__PURE__*/external_React_default.a.cloneElement(dom, Form_objectSpread(Form_objectSpread({}, rest), defaultProps));
  }

  if (!valueType || valueType === 'text') {
    var valueEnum = item.valueEnum;

    if (valueEnum) {
      return /*#__PURE__*/external_React_default.a.createElement(field_es, Form_extends({
        valueEnum: valueEnum,
        valueType: valueType,
        ref: ref,
        plain: type !== 'form',
        mode: "edit",
        allowClear: true,
        style: {
          width: '100%'
        },
        formItemProps: Form_objectSpread({
          style: {
            width: '100%'
          }
        }, item.formItemProps),
        placeholder: intl.getMessage('tableForm.selectPlaceholder', '请选择')
      }, rest));
    }
  }

  if (valueType === 'dateTime' || valueType === 'date' || valueType === 'time') {
    return /*#__PURE__*/external_React_default.a.createElement(field_es, Form_extends({
      ref: ref,
      mode: "edit",
      valueType: valueType,
      formItemProps: Form_objectSpread({
        style: {
          width: '100%'
        },
        placeholder: intl.getMessage('tableForm.selectPlaceholder', '请选择')
      }, item.formItemProps)
    }, rest));
  }

  if (valueType === 'dateTimeRange' || valueType === 'dateRange') {
    return /*#__PURE__*/external_React_default.a.createElement(field_es, Form_extends({
      ref: ref,
      mode: "edit",
      valueType: valueType,
      formItemProps: Form_objectSpread({
        style: {
          width: '100%'
        },
        placeholder: [intl.getMessage('tableForm.selectPlaceholder', '请选择'), intl.getMessage('tableForm.selectPlaceholder', '请选择')]
      }, item.formItemProps)
    }, rest));
  }

  return /*#__PURE__*/external_React_default.a.createElement(field_es, Form_extends({
    mode: "edit",
    ref: ref,
    formItemProps: Form_objectSpread({
      placeholder: intl.getMessage('tableForm.inputPlaceholder', '请输入'),
      style: {
        width: '100%'
      }
    }, item.formItemProps) // valueType = textarea，但是在 查询表单这里，应该是个 input 框
    ,
    valueType: !valueType || valueType === 'textarea' ? 'text' : valueType,
    plain: type !== 'form'
  }, rest));
});
var Form_proFormItemRender = function proFormItemRender(_ref) {
  var item = _ref.item,
      intl = _ref.intl,
      formInstance = _ref.formInstance,
      type = _ref.type,
      isForm = _ref.isForm,
      colConfig = _ref.colConfig;

  var valueType = item.valueType,
      dataIndex = item.dataIndex,
      valueEnum = item.valueEnum,
      renderFormItem = item.renderFormItem,
      render = item.render,
      hideInForm = item.hideInForm,
      hideInSearch = item.hideInSearch,
      hideInTable = item.hideInTable,
      renderText = item.renderText,
      order = item.order,
      initialValue = item.initialValue,
      ellipsis = item.ellipsis,
      formItemProps = item.formItemProps,
      index = item.index,
      rest = Form_objectWithoutPropertiesLoose(item, ["valueType", "dataIndex", "valueEnum", "renderFormItem", "render", "hideInForm", "hideInSearch", "hideInTable", "renderText", "order", "initialValue", "ellipsis", "formItemProps", "index"]);

  var key = genColumnKey(rest.key, index);
  var dom = /*#__PURE__*/external_React_default.a.createElement(FormInputRender, {
    item: item,
    type: type,
    intl: intl,
    form: formInstance
  });

  if (!dom) {
    return null;
  } // 支持 function 的 title


  var getTitle = function getTitle() {
    if (rest.title && typeof rest.title === 'function') {
      return rest.title(item, 'form', '');
    }

    return rest.title;
  };

  return /*#__PURE__*/external_React_default.a.createElement(external_antd_["Col"], Form_extends({}, colConfig, {
    key: key
  }), /*#__PURE__*/external_React_default.a.createElement(external_antd_["Form"].Item, Form_extends({
    labelAlign: "right",
    label: getTitle(),
    name: Array.isArray(dataIndex) ? dataIndex : key
  }, isForm && rest), dom));
};
var dateFormatterMap = {
  time: 'HH:mm:ss',
  date: 'YYYY-MM-DD',
  dateTime: 'YYYY-MM-DD HH:mm:ss',
  dateRange: 'YYYY-MM-DD',
  dateTimeRange: 'YYYY-MM-DD HH:mm:ss'
};
/**
 * 判断 DataType 是不是日期类型
 * @param type
 */

var isDateValueType = function isDateValueType(type) {
  var valueType = type;

  if (typeof type === 'function') {
    // 如果是 object 说明是进度条，直接返回 false
    if (typeof type({}) === 'object') {
      return false;
    }

    valueType = type({});
  }

  var dateTypes = ['date', 'dateRange', 'dateTimeRange', 'dateTime', 'time'];
  return dateTypes.includes(valueType);
};
/**
 * 这里主要是来转化一下数据
 * 将 moment 转化为 string
 * 将 all 默认删除
 * @param value
 * @param dateFormatter
 * @param proColumnsMap
 */


var Form_conversionValue = function conversionValue(value, dateFormatter, proColumnsMap) {
  var tmpValue = {};
  Object.keys(value).forEach(function (key) {
    var column = proColumnsMap[key || 'null'] || {};
    var valueType = column.valueType || 'text';
    var itemValue = value[key]; // 如果值是 "all"，或者不存在直接删除
    // 下拉框里选 all，会删除

    if (itemValue === undefined || itemValue === 'all' && column.valueEnum) {
      return;
    } // 如果是日期，再处理这些


    if (!isDateValueType(valueType)) {
      tmpValue[key] = itemValue;
      return;
    } // 如果执行到这里，肯定是 ['date', 'dateRange', 'dateTimeRange', 'dateTime', 'time'] 之一
    // 选择日期再清空之后会出现itemValue为 null 的情况，需要删除


    if (!itemValue) {
      return;
    } // 如果是 moment 的对象的处理方式


    if (external_moment_default.a.isMoment(itemValue) && dateFormatter) {
      if (dateFormatter === 'string') {
        var formatString = dateFormatterMap[valueType];
        tmpValue[key] = itemValue.format(formatString || 'YYYY-MM-DD HH:mm:ss');
        return;
      }

      if (dateFormatter === 'number') {
        tmpValue[key] = itemValue.valueOf();
        return;
      }
    } // 这里是日期数组


    if (Array.isArray(itemValue) && itemValue.length === 2 && dateFormatter) {
      if (dateFormatter === 'string') {
        var _formatString = dateFormatterMap[valueType];
        var startValue = itemValue[0],
            endValue = itemValue[1]; // 后端需要日期/时间范围会有[null,date]或者[date,null]的情况

        tmpValue[key] = [startValue && external_moment_default()(startValue).format(_formatString || 'YYYY-MM-DD HH:mm:ss'), endValue && external_moment_default()(endValue).format(_formatString || 'YYYY-MM-DD HH:mm:ss')];
        return;
      }

      if (dateFormatter === 'number') {
        var _startValue = itemValue[0],
            _endValue = itemValue[1];
        tmpValue[key] = [external_moment_default()(_startValue).valueOf(), external_moment_default()(_endValue).valueOf()];
      }
    } // 都没命中，原样返回


    tmpValue[key] = itemValue;
  });
  return tmpValue;
};

var Form_getDefaultSearch = function getDefaultSearch(search, intl, isForm) {
  var config = {
    collapseRender: function collapseRender(collapsed) {
      if (collapsed) {
        return /*#__PURE__*/external_React_default.a.createElement(external_React_default.a.Fragment, null, intl.getMessage('tableForm.collapsed', '展开'), /*#__PURE__*/external_React_default.a.createElement(icons_DownOutlined, {
          style: {
            marginLeft: '0.5em',
            transition: '0.3s all',
            transform: "rotate(" + (collapsed ? 0 : 0.5) + "turn)"
          }
        }));
      }

      return /*#__PURE__*/external_React_default.a.createElement(external_React_default.a.Fragment, null, intl.getMessage('tableForm.expand', '收起'), /*#__PURE__*/external_React_default.a.createElement(icons_DownOutlined, {
        style: {
          marginLeft: '0.5em',
          transition: '0.3s all',
          transform: "rotate(" + (collapsed ? 0 : 0.5) + "turn)"
        }
      }));
    },
    searchText: intl.getMessage('tableForm.search', defaultSearch.searchText || '查询'),
    resetText: intl.getMessage('tableForm.reset', defaultSearch.resetText || '重置'),
    submitText: intl.getMessage('tableForm.submit', defaultSearch.submitText || '提交'),
    span: isForm ? defaultFormColConfig : defaultColConfig
  };

  if (search === undefined || search === true) {
    return config;
  }

  return Form_objectSpread(Form_objectSpread({}, config), search);
};
/**
 * 合并用户和默认的配置
 * @param span
 * @param size
 */


var getSpanConfig = function getSpanConfig(span, size) {
  if (typeof span === 'number') {
    return span;
  }

  var config = Form_objectSpread(Form_objectSpread({}, defaultColConfig), span);

  return config[size];
};

var Form_FormSearch = function FormSearch(_ref2) {
  var _classNames, _classNames2;

  var onSubmit = _ref2.onSubmit,
      formRef = _ref2.formRef,
      _ref2$dateFormatter = _ref2.dateFormatter,
      dateFormatter = _ref2$dateFormatter === void 0 ? 'string' : _ref2$dateFormatter,
      propsSearch = _ref2.search,
      type = _ref2.type,
      _ref2$form = _ref2.form,
      formConfig = _ref2$form === void 0 ? {} : _ref2$form,
      onReset = _ref2.onReset;

  /**
   * 为了支持 dom 的消失，支持了这个 api
   */
  var intl = useIntl();

  var _Form$useForm = external_antd_["Form"].useForm(),
      form = _Form$useForm[0];

  var formInstanceRef = Object(external_React_["useRef"])();
  var searchConfig = Form_getDefaultSearch(propsSearch, intl, type === 'form');
  var span = searchConfig.span;
  var counter = container.useContainer();

  var _useMergedState = useMergedState_default()(true, {
    value: searchConfig.collapsed,
    onChange: searchConfig.onCollapse
  }),
      collapse = _useMergedState[0],
      setCollapse = _useMergedState[1];

  var _useState = Object(external_React_["useState"])({}),
      proColumnsMap = _useState[0],
      setProColumnsMap = _useState[1];

  var windowSize = use_media_antd_query_es();

  var _useState2 = Object(external_React_["useState"])(getSpanConfig(span || 8, windowSize)),
      colSize = _useState2[0],
      setColSize = _useState2[1];

  var _useState3 = Object(external_React_["useState"])(88),
      formHeight = _useState3[0],
      setFormHeight = _useState3[1];

  var rowNumber = 24 / colSize || 3;
  var isForm = type === 'form';
  /**
   *提交表单，根据两种模式不同，方法不相同
   */

  var _submit = /*#__PURE__*/function () {
    var _ref3 = Form_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _value, _value2;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (isForm) {
                _context.next = 4;
                break;
              }

              _value = form.getFieldsValue();

              if (onSubmit) {
                onSubmit(Form_conversionValue(_value, dateFormatter, proColumnsMap));
              }

              return _context.abrupt("return");

            case 4:
              _context.prev = 4;
              _context.next = 7;
              return form.validateFields();

            case 7:
              _value2 = _context.sent;

              if (onSubmit) {
                onSubmit(Form_conversionValue(_value2, dateFormatter, proColumnsMap));
              }

              _context.next = 13;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](4);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[4, 11]]);
    }));

    return function submit() {
      return _ref3.apply(this, arguments);
    };
  }();

  Object(external_React_["useEffect"])(function () {
    if (!formRef) {
      return;
    }

    if (typeof formRef === 'function') {
      formRef(form);
    }

    if (formRef && typeof formRef !== 'function') {
      // eslint-disable-next-line no-param-reassign
      formRef.current = Form_objectSpread(Form_objectSpread({}, form), {}, {
        submit: function submit() {
          _submit();

          form.submit();
        }
      });
    }
  }, []);
  Object(external_React_["useEffect"])(function () {
    setColSize(getSpanConfig(span || 8, windowSize));
  }, [windowSize]);
  hooks_useDeepCompareEffect(function () {
    var tempMap = {};
    counter.proColumns.forEach(function (item) {
      tempMap[genColumnKey(item.key, item.index)] = item;
    });
    setProColumnsMap(tempMap);
  }, [counter.proColumns]);
  var columnsList = counter.proColumns.filter(function (item) {
    var valueType = item.valueType;

    if (item.hideInSearch && type !== 'form') {
      return false;
    }

    if (type === 'form' && item.hideInForm) {
      return false;
    }

    if (valueType !== 'index' && valueType !== 'indexBorder' && valueType !== 'option' && (item.key || item.dataIndex)) {
      return true;
    }

    return false;
  }).sort(function (a, b) {
    if (a && b) {
      return (b.order || 0) - (a.order || 0);
    }

    if (a && a.order) {
      return -1;
    }

    if (b && b.order) {
      return 1;
    }

    return 0;
  });
  var colConfig = typeof span === 'number' ? {
    span: span
  } : span; // 这么做是为了在用户修改了输入的时候触发一下子节点的render

  var _React$useState = external_React_default.a.useState(),
      updateState = _React$useState[1];

  var forceUpdate = Object(external_React_["useCallback"])(function () {
    return updateState({});
  }, []);
  var domList = formInstanceRef.current ? columnsList.map(function (item, index) {
    var _item$dataIndex;

    return Form_proFormItemRender({
      isForm: isForm,
      formInstance: formInstanceRef.current,
      item: Form_objectSpread({
        key: ((_item$dataIndex = item.dataIndex) == null ? void 0 : _item$dataIndex.toString()) || index,
        index: index
      }, item),
      type: type,
      colConfig: colConfig,
      intl: intl
    });
  }).filter(function (_, index) {
    return collapse && type !== 'form' ? index < (rowNumber - 1 || 1) : true;
  }).filter(function (item) {
    return !!item;
  }) : [];

  var _useContext = Object(external_React_["useContext"])(config_provider_["ConfigContext"]),
      getPrefixCls = _useContext.getPrefixCls;

  var className = getPrefixCls('pro-table-search');
  var formClassName = getPrefixCls('pro-table-form');
  return /*#__PURE__*/external_React_default.a.createElement("div", {
    className: classnames_default()(className, (_classNames = {}, _classNames[formClassName] = isForm, _classNames)),
    style: isForm ? undefined : {
      height: formHeight
    }
  }, /*#__PURE__*/external_React_default.a.createElement(rc_resize_observer_es, {
    onResize: function onResize(_ref4) {
      var height = _ref4.height;

      if (type === 'form') {
        return;
      }

      setFormHeight(height + 24);
    }
  }, /*#__PURE__*/external_React_default.a.createElement("div", null, /*#__PURE__*/external_React_default.a.createElement(external_antd_["Form"], Form_extends({}, formConfig, {
    form: form,
    onValuesChange: function onValuesChange() {
      return forceUpdate();
    },
    initialValues: columnsList.reduce(function (pre, item) {
      var key = genColumnKey(item.key, item.index);

      if (item.initialValue) {
        var _objectSpread2;

        return Form_objectSpread(Form_objectSpread({}, pre), {}, (_objectSpread2 = {}, _objectSpread2[key] = item.initialValue, _objectSpread2));
      }

      return pre;
    }, Form_objectSpread({}, formConfig.initialValues))
  }), /*#__PURE__*/external_React_default.a.createElement(external_antd_["Form"].Item, {
    shouldUpdate: true,
    noStyle: true
  }, function (formInstance) {
    setTimeout(function () {
      formInstanceRef.current = formInstance;
    }, 0);
    return null;
  }), /*#__PURE__*/external_React_default.a.createElement(external_antd_["Row"], {
    gutter: 16,
    justify: "start"
  }, /*#__PURE__*/external_React_default.a.createElement(external_antd_["Form"].Item, {
    label: isForm && ' ',
    shouldUpdate: true,
    noStyle: true
  }, /*#__PURE__*/external_React_default.a.createElement(external_React_default.a.Fragment, null, domList)), /*#__PURE__*/external_React_default.a.createElement(external_antd_["Col"], Form_extends({}, colConfig, {
    offset: getOffset(domList.length, colSize),
    key: "option",
    className: classnames_default()(className + "-option", (_classNames2 = {}, _classNames2[className + "-form-option"] = isForm, _classNames2))
  }), /*#__PURE__*/external_React_default.a.createElement(external_antd_["Form"].Item, {
    label: isForm && ' '
  }, /*#__PURE__*/external_React_default.a.createElement(Form_FormOption, {
    showCollapseButton: columnsList.length > rowNumber - 1 && !isForm,
    searchConfig: searchConfig,
    submit: _submit,
    onReset: onReset,
    form: Form_objectSpread(Form_objectSpread({}, form), {}, {
      submit: function submit() {
        _submit();

        form.submit();
      }
    }),
    type: type,
    collapse: collapse,
    setCollapse: setCollapse
  }))))))));
};

/* harmony default export */ var src_Form = (Form_FormSearch);
// CONCATENATED MODULE: ./packages/table/src/defaultRender.tsx
function defaultRender_extends() { defaultRender_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return defaultRender_extends.apply(this, arguments); }




/**
 * 根据不同的类型来转化数值
 * @param text
 * @param valueType
 */
var defaultRender_defaultRenderText = function defaultRenderText(text, valueType, index, item, columnEmptyText, props) {
  // 如果 valueType === text ，没必要多走一次 render
  if ((!valueType || valueType === 'text') && !(props == null ? void 0 : props.valueEnum)) {
    return text;
  }

  if (typeof valueType === 'function' && item) {
    var value = valueType(item);

    if (!value) {
      return columnEmptyText;
    }

    return defaultRenderText(text, value, index, props);
  }

  return /*#__PURE__*/external_React_default.a.createElement(field_es, defaultRender_extends({}, props, {
    text: valueType === 'index' || valueType === 'indexBorder' ? index : text,
    mode: "read",
    columnEmptyText: columnEmptyText,
    render: undefined,
    renderFormItem: undefined,
    valueType: valueType
  }));
};

/* harmony default export */ var src_defaultRender = (defaultRender_defaultRenderText);
// CONCATENATED MODULE: ./packages/table/src/component/ErrorBoundary.tsx
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }




var ErrorBoundary_ErrorBoundary = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ErrorBoundary, _React$Component);

  function ErrorBoundary() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      hasError: false,
      errorInfo: ''
    };
    return _this;
  }

  ErrorBoundary.getDerivedStateFromError = function getDerivedStateFromError(error) {
    return {
      hasError: true,
      errorInfo: error.message
    };
  };

  var _proto = ErrorBoundary.prototype;

  _proto.componentDidCatch = function componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // eslint-disable-next-line no-console
    console.log(error, errorInfo);
  };

  _proto.render = function render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return /*#__PURE__*/external_React_default.a.createElement(external_antd_["Result"], {
        status: "error",
        title: "Something went wrong.",
        extra: this.state.errorInfo
      });
    }

    return this.props.children;
  };

  return ErrorBoundary;
}(external_React_default.a.Component);

/* harmony default export */ var component_ErrorBoundary = (ErrorBoundary_ErrorBoundary);
// CONCATENATED MODULE: ./packages/table/src/Table.tsx
function Table_extends() { Table_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Table_extends.apply(this, arguments); }

function Table_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function Table_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { Table_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { Table_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function Table_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Table_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Table_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Table_ownKeys(Object(source), true).forEach(function (key) { Table_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Table_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Table_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





















/**
 * 这个组件负责单元格的具体渲染
 * @param param0
 */
var Table_columnRender = function columnRender(_ref) {
  var item = _ref.item,
      text = _ref.text,
      row = _ref.row,
      index = _ref.index,
      columnEmptyText = _ref.columnEmptyText,
      counter = _ref.counter;
  var action = counter.action;
  var _item$renderText = item.renderText,
      renderText = _item$renderText === void 0 ? function (val) {
    return val;
  } : _item$renderText;

  if (!action.current) {
    return null;
  }

  var renderTextStr = renderText(text, row, index, action.current);
  var textDom = src_defaultRender(renderTextStr, item.valueType || 'text', index, row, columnEmptyText, item);
  var dom = utils_genEllipsis(utils_genCopyable(textDom, item, renderTextStr), item, renderTextStr);

  if (item.render) {
    var renderDom = item.render(dom, row, index, action.current, item); // 如果是合并单元格的，直接返回对象

    if (renderDom && typeof renderDom === 'object' && renderDom.props && renderDom.props.colSpan) {
      return renderDom;
    }

    if (renderDom && item.valueType === 'option' && Array.isArray(renderDom)) {
      return /*#__PURE__*/external_React_default.a.createElement(external_antd_["Space"], null, renderDom);
    }

    return renderDom;
  }

  return checkUndefinedOrNull(dom) ? dom : null;
};
/**
 * render 的 title
 * @param item
 */


var Table_renderColumnsTitle = function renderColumnsTitle(item) {
  var title = item.title;

  if (title && typeof title === 'function') {
    return title(item, 'table', /*#__PURE__*/external_React_default.a.createElement(es_components_LabelIconTip, {
      label: title,
      tip: item.tip
    }));
  }

  return /*#__PURE__*/external_React_default.a.createElement(es_components_LabelIconTip, {
    label: title,
    tip: item.tip
  });
};

var Table_defaultOnFilter = function defaultOnFilter(value, record, dataIndex) {
  var recordElement = Array.isArray(dataIndex) ? get_default()(record, dataIndex) : record[dataIndex];

  if (typeof recordElement === 'number') {
    recordElement = recordElement.toString();
  }

  var itemValue = String(recordElement || '');
  return String(itemValue) === String(value);
};
/**
 * 转化 columns 到 pro 的格式
 * 主要是 render 方法的自行实现
 * @param columns
 * @param map
 * @param columnEmptyText
 */


var Table_genColumnList = function genColumnList(columns, map, counter, columnEmptyText) {
  return columns.map(function (item, columnsIndex) {
    var _propsRef$current;

    var key = item.key,
        dataIndex = item.dataIndex,
        valueEnum = item.valueEnum,
        valueType = item.valueType,
        _item$filters = item.filters,
        filters = _item$filters === void 0 ? [] : _item$filters;
    var columnKey = genColumnKey(key, columnsIndex);
    var noNeedPro = !dataIndex && !valueEnum && !valueType;

    if (noNeedPro) {
      return item;
    }

    var propsRef = counter.propsRef;
    var config = columnKey ? map[columnKey] || {
      fixed: item.fixed
    } : {
      fixed: item.fixed
    };

    var tempColumns = Table_objectSpread(Table_objectSpread({
      key: columnsIndex,
      onFilter: ((_propsRef$current = propsRef.current) == null ? void 0 : _propsRef$current.request) ? undefined : function (value, row) {
        return Table_defaultOnFilter(value, row, dataIndex);
      },
      index: columnsIndex
    }, item), {}, {
      title: Table_renderColumnsTitle(item),
      valueEnum: valueEnum,
      filters: filters === true ? proFieldParsingValueEnumToArray(valueEnum).filter(function (valueItem) {
        return valueItem && valueItem.value !== 'all';
      }) : filters,
      ellipsis: false,
      fixed: config.fixed,
      width: item.width || (item.fixed ? 200 : undefined),
      children: item.children ? genColumnList(item.children, map, counter, columnEmptyText) : undefined,
      render: function render(text, row, index) {
        return Table_columnRender({
          item: item,
          text: text,
          row: row,
          index: index,
          columnEmptyText: columnEmptyText,
          counter: counter
        });
      }
    });

    return es_pickUndefined(tempColumns);
  }).filter(function (item) {
    return !item.hideInTable;
  });
};
/**
 * 🏆 Use Ant Design Table like a Pro!
 * 更快 更好 更方便
 * @param props
 */


var Table_ProTable = function ProTable(props) {
  var request = props.request,
      propsClassName = props.className,
      _props$params = props.params,
      params = _props$params === void 0 ? {} : _props$params,
      _props$defaultData = props.defaultData,
      defaultData = _props$defaultData === void 0 ? [] : _props$defaultData,
      headerTitle = props.headerTitle,
      postData = props.postData,
      propsPagination = props.pagination,
      actionRef = props.actionRef,
      _props$columns = props.columns,
      propsColumns = _props$columns === void 0 ? [] : _props$columns,
      toolBarRender = props.toolBarRender,
      onLoad = props.onLoad,
      onRequestError = props.onRequestError,
      style = props.style,
      tableStyle = props.tableStyle,
      tableClassName = props.tableClassName,
      columnsStateMap = props.columnsStateMap,
      onColumnsStateChange = props.onColumnsStateChange,
      options = props.options,
      _props$search = props.search,
      search = _props$search === void 0 ? true : _props$search,
      _props$rowSelection = props.rowSelection,
      propsRowSelection = _props$rowSelection === void 0 ? false : _props$rowSelection,
      _props$beforeSearchSu = props.beforeSearchSubmit,
      beforeSearchSubmit = _props$beforeSearchSu === void 0 ? function (searchParams) {
    return searchParams;
  } : _props$beforeSearchSu,
      tableAlertRender = props.tableAlertRender,
      defaultClassName = props.defaultClassName,
      formRef = props.formRef,
      _props$type = props.type,
      type = _props$type === void 0 ? 'table' : _props$type,
      _props$onReset = props.onReset,
      _onReset = _props$onReset === void 0 ? function () {} : _props$onReset,
      _props$columnEmptyTex = props.columnEmptyText,
      columnEmptyText = _props$columnEmptyTex === void 0 ? '-' : _props$columnEmptyTex,
      _props$manualRequest = props.manualRequest,
      manualRequest = _props$manualRequest === void 0 ? false : _props$manualRequest,
      rest = Table_objectWithoutPropertiesLoose(props, ["request", "className", "params", "defaultData", "headerTitle", "postData", "pagination", "actionRef", "columns", "toolBarRender", "onLoad", "onRequestError", "style", "tableStyle", "tableClassName", "columnsStateMap", "onColumnsStateChange", "options", "search", "rowSelection", "beforeSearchSubmit", "tableAlertRender", "defaultClassName", "formRef", "type", "onReset", "columnEmptyText", "manualRequest"]);

  var _useMergedState = useMergedState_default()([], {
    value: propsRowSelection ? propsRowSelection.selectedRowKeys : undefined
  }),
      selectedRowKeys = _useMergedState[0],
      setSelectedRowKeys = _useMergedState[1];

  var _useState = Object(external_React_["useState"])(function () {
    var _rest$form;

    return (_rest$form = rest.form) == null ? void 0 : _rest$form.initialValues;
  }),
      formSearch = _useState[0],
      setFormSearch = _useState[1];

  var _useState2 = Object(external_React_["useState"])([]),
      selectedRows = _useState2[0],
      setSelectedRows = _useState2[1];

  var _useState3 = Object(external_React_["useState"])({}),
      proFilter = _useState3[0],
      setProFilter = _useState3[1];

  var _useState4 = Object(external_React_["useState"])({}),
      proSort = _useState4[0],
      setProSort = _useState4[1];

  var rootRef = Object(external_React_["useRef"])(null);
  var fullScreen = Object(external_React_["useRef"])();
  var intl = useIntl();
  /**
   * 需要初始化 不然默认可能报错
   * 这里取了 defaultCurrent 和 current
   * 为了保证不会重复刷新
   */

  var fetchPagination = typeof propsPagination === 'object' ? propsPagination : {
    defaultCurrent: 1,
    defaultPageSize: 20,
    pageSize: 20,
    current: 1
  };
  var action = src_useFetchData( /*#__PURE__*/function () {
    var _ref3 = Table_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref2) {
      var pageSize, current, needManualFirstReq, actionParams, response, responseData, msgData;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              pageSize = _ref2.pageSize, current = _ref2.current;
              // 需要手动触发的首次请求
              needManualFirstReq = manualRequest && !formSearch;

              if (!(!request || needManualFirstReq)) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return", {
                data: props.dataSource || [],
                success: true
              });

            case 4:
              actionParams = Table_objectSpread(Table_objectSpread({
                current: current,
                pageSize: pageSize
              }, formSearch), params);
              _context.next = 7;
              return request(actionParams, proSort, proFilter);

            case 7:
              response = _context.sent;
              responseData = postDataPipeline(response.data, [postData]);

              if (!Array.isArray(response)) {
                _context.next = 11;
                break;
              }

              return _context.abrupt("return", response);

            case 11:
              msgData = Table_objectSpread(Table_objectSpread({}, response), {}, {
                data: responseData
              });
              return _context.abrupt("return", msgData);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref3.apply(this, arguments);
    };
  }(), defaultData, Table_objectSpread(Table_objectSpread({}, fetchPagination), {}, {
    onLoad: onLoad,
    onRequestError: onRequestError,
    manual: !request,
    effects: [stringify(params), stringify(formSearch), stringify(proFilter), stringify(proSort)]
  }));
  Object(external_React_["useEffect"])(function () {
    fullScreen.current = function () {
      if (!rootRef.current || !document.fullscreenEnabled) {
        return;
      }

      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        rootRef.current.requestFullscreen();
      }
    };
  }, [rootRef.current]);
  action.fullScreen = fullScreen.current;
  var pagination = mergePagination(propsPagination, action, intl);
  var counter = container.useContainer();
  var onCleanSelected = Object(external_React_["useCallback"])(function () {
    if (propsRowSelection && propsRowSelection.onChange) {
      propsRowSelection.onChange([], []);
    }

    setSelectedRowKeys([]);
    setSelectedRows([]);
  }, [setSelectedRowKeys, setSelectedRows]);
  /**
   * 绑定 action
   */

  utils_useActionType(action, actionRef, counter, onCleanSelected);
  counter.setAction(action);
  counter.propsRef.current = props;
  /**
   *  保存一下 propsColumns
   *  生成 form 需要用
   */

  hooks_useDeepCompareEffect(function () {
    counter.setProColumns(propsColumns);
  }, [propsColumns]);
  var tableColumn = Object(external_React_["useMemo"])(function () {
    return Table_genColumnList(propsColumns, counter.columnsMap, counter, columnEmptyText);
  }, [propsColumns]);
  /**
   * Table Column 变化的时候更新一下，这个参数将会用于渲染
   */

  hooks_useDeepCompareEffect(function () {
    if (tableColumn && tableColumn.length > 0) {
      counter.setColumns(tableColumn); // 重新生成key的字符串用于排序

      var columnKeys = tableColumn.map(function (item, index) {
        return genColumnKey(item.key, index);
      });
      counter.setSortKeyColumns(columnKeys);
    }
  }, [tableColumn]);
  /**
   * 这里主要是为了排序，为了保证更新及时，每次都重新计算
   */

  hooks_useDeepCompareEffect(function () {
    var columnsMap = counter.columnsMap;
    var sortTableColumn = Table_genColumnList(propsColumns, columnsMap, counter, columnEmptyText).sort(function (a, b) {
      var _columnsMap$aKey, _columnsMap$bKey;

      var aFixed = a.fixed,
          aIndex = a.index;
      var bFixed = b.fixed,
          bIndex = b.index;

      if (aFixed === 'left' && bFixed !== 'left' || bFixed === 'right' && aFixed !== 'right') {
        return -2;
      }

      if (bFixed === 'left' && aFixed !== 'left' || aFixed === 'right' && bFixed !== 'right') {
        return 2;
      } // 如果没有index，在 dataIndex 或者 key 不存在的时候他会报错


      var aKey = a.key || "" + aIndex;
      var bKey = b.key || "" + bIndex;
      return (((_columnsMap$aKey = columnsMap[aKey]) == null ? void 0 : _columnsMap$aKey.order) || 0) - (((_columnsMap$bKey = columnsMap[bKey]) == null ? void 0 : _columnsMap$bKey.order) || 0);
    });

    if (sortTableColumn && sortTableColumn.length > 0) {
      counter.setColumns(sortTableColumn);
    }
  }, [counter.columnsMap]);
  /**
   * 同步 Pagination，支持受控的 页码 和 pageSize
   */

  hooks_useDeepCompareEffect(function () {
    if (propsPagination && propsPagination.current && propsPagination.pageSize) {
      action.setPageInfo({
        pageSize: propsPagination.pageSize,
        page: propsPagination.current
      });
    }
  }, [propsPagination && propsPagination.pageSize, propsPagination && propsPagination.current]); // 映射 selectedRowKeys 与 selectedRow

  Object(external_React_["useEffect"])(function () {
    if (action.loading !== false || propsRowSelection === false) {
      return;
    }

    var tableKey = rest.rowKey;
    var dataSource = request ? action.dataSource : props.dataSource || []; // dataSource maybe is a null
    // eg: api has 404 error

    var duplicateRemoveMap = new Map();

    if (Array.isArray(dataSource)) {
      // 根据当前选中和当前的所有数据计算选中的行
      // 因为防止翻页以后丢失，所有还增加了当前选择选中的
      var rows = [].concat(dataSource, selectedRows).filter(function (item, index) {
        var rowKey = tableKey;

        if (!tableKey) {
          return selectedRowKeys.includes(index);
        }

        if (typeof tableKey === 'function') {
          rowKey = tableKey(item, index);
        } else {
          rowKey = item[tableKey];
        }

        if (duplicateRemoveMap.has(rowKey)) {
          return false;
        }

        duplicateRemoveMap.set(rowKey, true);
        return selectedRowKeys.includes(rowKey);
      });
      setSelectedRows(rows);
      return;
    }

    setSelectedRows([]);
  }, [selectedRowKeys.join('-'), action.loading, propsRowSelection === false]);

  var rowSelection = Table_objectSpread(Table_objectSpread({
    selectedRowKeys: selectedRowKeys
  }, propsRowSelection), {}, {
    onChange: function onChange(keys, rows) {
      if (propsRowSelection && propsRowSelection.onChange) {
        propsRowSelection.onChange(keys, rows);
      }

      setSelectedRowKeys([].concat(keys));
    }
  });

  Object(external_React_["useEffect"])(function () {
    counter.setTableSize(rest.size || 'middle');
  }, [rest.size]);

  if (props.columns && props.columns.length < 1) {
    return /*#__PURE__*/external_React_default.a.createElement(external_antd_["Card"], {
      bordered: false,
      bodyStyle: {
        padding: 50
      }
    }, /*#__PURE__*/external_React_default.a.createElement(external_antd_["Empty"], null));
  }

  var className = classnames_default()(defaultClassName, propsClassName);
  var toolbarDom = toolBarRender !== false && (options !== false || headerTitle || toolBarRender) &&
  /*#__PURE__*/
  // if options= false & headerTitle=== false, hide Toolbar
  external_React_default.a.createElement(src_component_ToolBar, {
    options: options,
    headerTitle: headerTitle,
    action: action,
    onSearch: function onSearch(keyword) {
      if (options && options.search) {
        var _objectSpread2;

        var _ref4 = options.search === true ? {
          name: 'keyword'
        } : options.search,
            _ref4$name = _ref4.name,
            name = _ref4$name === void 0 ? 'keyword' : _ref4$name;

        setFormSearch(Table_objectSpread(Table_objectSpread({}, formSearch), {}, (_objectSpread2 = {}, _objectSpread2[name] = keyword, _objectSpread2)));
      }
    },
    selectedRows: selectedRows,
    selectedRowKeys: selectedRowKeys,
    toolBarRender: toolBarRender
  });
  var alertDom = propsRowSelection !== false && /*#__PURE__*/external_React_default.a.createElement(component_Alert, {
    selectedRowKeys: selectedRowKeys,
    selectedRows: selectedRows,
    onCleanSelected: onCleanSelected,
    alertOptionRender: rest.tableAlertOptionRender,
    alertInfoRender: tableAlertRender
  });
  var dataSource = request ? action.dataSource : props.dataSource || [];
  var tableDom = /*#__PURE__*/external_React_default.a.createElement(external_antd_["Table"], Table_extends({}, rest, {
    size: counter.tableSize,
    rowSelection: propsRowSelection === false ? undefined : rowSelection,
    className: tableClassName,
    style: tableStyle,
    columns: counter.columns.filter(function (item) {
      // 删掉不应该显示的
      var columnKey = genColumnKey(item.key, item.index);

      if (!columnKey) {
        return true;
      }

      var config = counter.columnsMap[columnKey];

      if (config && config.show === false) {
        return false;
      }

      return true;
    }),
    loading: action.loading || props.loading,
    dataSource: request ? action.dataSource : props.dataSource || [],
    pagination: pagination,
    onChange: function onChange(changePagination, filters, sorter, extra) {
      if (rest.onChange) {
        rest.onChange(changePagination, filters, sorter, extra);
      } // 制造筛选的数据


      setProFilter(es_pickUndefined(filters)); // 制造一个排序的数据

      if (Array.isArray(sorter)) {
        var _data = sorter.reduce(function (pre, value) {
          var _objectSpread3;

          return Table_objectSpread(Table_objectSpread({}, pre), {}, (_objectSpread3 = {}, _objectSpread3["" + value.field] = value.order, _objectSpread3));
        }, {});

        setProSort(_data);
      } else {
        var _setProSort;

        setProSort((_setProSort = {}, _setProSort["" + sorter.field] = sorter.order, _setProSort));
      }
    }
  }));
  /**
   * table 区域的 dom，为了方便 render
   */

  var tableAreaDom = /*#__PURE__*/external_React_default.a.createElement(external_React_default.a.Fragment, null, toolbarDom, alertDom, tableDom);

  var renderTable = function renderTable() {
    if (props.tableRender) {
      return props.tableRender(props, tableAreaDom, {
        toolbar: toolbarDom || undefined,
        alert: alertDom || undefined,
        table: tableDom || undefined
      });
    }

    return tableAreaDom;
  };

  return /*#__PURE__*/external_React_default.a.createElement(external_antd_["ConfigProvider"], {
    getPopupContainer: function getPopupContainer() {
      return rootRef.current || document.body;
    }
  }, /*#__PURE__*/external_React_default.a.createElement("div", {
    className: className,
    id: "ant-design-pro-table",
    style: style,
    ref: rootRef
  }, (search || type === 'form') && /*#__PURE__*/external_React_default.a.createElement(src_Form, Table_extends({}, rest, {
    type: props.type,
    formRef: formRef,
    onSubmit: function onSubmit(value) {
      if (type !== 'form') {
        var submitParams = Table_objectSpread(Table_objectSpread({}, value), {}, {
          _timestamp: Date.now()
        });

        setFormSearch(beforeSearchSubmit(submitParams)); // back first page

        action.resetPageIndex();
      }

      if (props.onSubmit) {
        props.onSubmit(value);
      }
    },
    onReset: function onReset() {
      setFormSearch(beforeSearchSubmit({})); // back first page

      action.resetPageIndex();

      _onReset();
    },
    dateFormatter: rest.dateFormatter,
    search: search
  })), type !== 'form' && props.tableExtraRender && /*#__PURE__*/external_React_default.a.createElement("div", {
    className: className + "-extra"
  }, props.tableExtraRender(props, dataSource)), type !== 'form' && /*#__PURE__*/external_React_default.a.createElement(external_antd_["Card"], {
    bordered: false,
    style: {
      height: '100%'
    },
    bodyStyle: {
      padding: 0
    }
  }, renderTable())));
};
/**
 * 🏆 Use Ant Design Table like a Pro!
 * 更快 更好 更方便
 * @param props
 */


var Table_ProviderWarp = function ProviderWarp(props) {
  var _useContext = Object(external_React_["useContext"])(config_provider_["ConfigContext"]),
      getPrefixCls = _useContext.getPrefixCls;

  return /*#__PURE__*/external_React_default.a.createElement(container.Provider, {
    initialState: props
  }, /*#__PURE__*/external_React_default.a.createElement(es_ConfigProviderWarp, null, /*#__PURE__*/external_React_default.a.createElement(component_ErrorBoundary, null, /*#__PURE__*/external_React_default.a.createElement(Table_ProTable, Table_extends({
    defaultClassName: getPrefixCls('pro-table')
  }, props)))));
};

/* harmony default export */ var Table = (Table_ProviderWarp);
// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/EllipsisOutlined.js
// This icon file is generated automatically.
var EllipsisOutlined_EllipsisOutlined = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"
      }
    }]
  },
  "name": "ellipsis",
  "theme": "outlined"
};
/* harmony default export */ var asn_EllipsisOutlined = (EllipsisOutlined_EllipsisOutlined);
// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/EllipsisOutlined.js
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var icons_EllipsisOutlined_EllipsisOutlined = function EllipsisOutlined(props, ref) {
  return /*#__PURE__*/external_React_["createElement"](AntdIcon, Object.assign({}, props, {
    ref: ref,
    icon: asn_EllipsisOutlined
  }));
};

icons_EllipsisOutlined_EllipsisOutlined.displayName = 'EllipsisOutlined';
/* harmony default export */ var icons_EllipsisOutlined = (/*#__PURE__*/external_React_["forwardRef"](icons_EllipsisOutlined_EllipsisOutlined));
// EXTERNAL MODULE: ./packages/table/src/component/Dropdown/index.less
var Dropdown = __webpack_require__(62);

// CONCATENATED MODULE: ./packages/table/src/component/Dropdown/index.tsx







/**
 * 默认的 index 列容器，提供一个好看的 index
 * @param param0
 */
var Dropdown_DropdownButton = function DropdownButton(_ref) {
  var children = _ref.children,
      _ref$menus = _ref.menus,
      menus = _ref$menus === void 0 ? [] : _ref$menus,
      onSelect = _ref.onSelect,
      className = _ref.className,
      style = _ref.style;

  var _useContext = Object(external_React_["useContext"])(context_["ConfigContext"]),
      getPrefixCls = _useContext.getPrefixCls;

  var tempClassName = getPrefixCls('pro-table-dropdown');
  var menu = /*#__PURE__*/external_React_default.a.createElement(external_antd_["Menu"], {
    onClick: function onClick(params) {
      return onSelect && onSelect(params.key);
    }
  }, menus.map(function (item) {
    return /*#__PURE__*/external_React_default.a.createElement(external_antd_["Menu"].Item, {
      key: item.key
    }, item.name);
  }));
  return /*#__PURE__*/external_React_default.a.createElement(external_antd_["Dropdown"], {
    overlay: menu,
    className: classnames_default()(tempClassName, className)
  }, /*#__PURE__*/external_React_default.a.createElement(external_antd_["Button"], {
    style: style
  }, children, " ", /*#__PURE__*/external_React_default.a.createElement(icons_DownOutlined, null)));
};

var Dropdown_TableDropdown = function TableDropdown(_ref2) {
  var propsClassName = _ref2.className,
      style = _ref2.style,
      onSelect = _ref2.onSelect,
      _ref2$menus = _ref2.menus,
      menus = _ref2$menus === void 0 ? [] : _ref2$menus;

  var _useContext2 = Object(external_React_["useContext"])(context_["ConfigContext"]),
      getPrefixCls = _useContext2.getPrefixCls;

  var className = getPrefixCls('pro-table-dropdown');
  var menu = /*#__PURE__*/external_React_default.a.createElement(external_antd_["Menu"], {
    onClick: function onClick(params) {
      return onSelect && onSelect(params.key);
    }
  }, menus.map(function (item) {
    return /*#__PURE__*/external_React_default.a.createElement(external_antd_["Menu"].Item, {
      key: item.key
    }, item.name);
  }));
  return /*#__PURE__*/external_React_default.a.createElement(external_antd_["Dropdown"], {
    overlay: menu,
    className: classnames_default()(className, propsClassName)
  }, /*#__PURE__*/external_React_default.a.createElement("a", {
    style: style
  }, /*#__PURE__*/external_React_default.a.createElement(icons_EllipsisOutlined, null)));
};

Dropdown_TableDropdown.Button = Dropdown_DropdownButton;
/* harmony default export */ var component_Dropdown = (Dropdown_TableDropdown);
// CONCATENATED MODULE: ./packages/table/src/index.tsx









/* harmony default export */ var table_src = __webpack_exports__["default"] = (Table);

/***/ }),
/* 64 */,
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DndProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DndContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
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

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
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




var refCount = 0;
/**
 * A React component that provides the React-DnD context
 */

var DndProvider = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function (_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  var _getDndContextValue = getDndContextValue(props),
      _getDndContextValue2 = _slicedToArray(_getDndContextValue, 2),
      manager = _getDndContextValue2[0],
      isGlobalInstance = _getDndContextValue2[1]; // memoized from props

  /**
   * If the global context was used to store the DND context
   * then where theres no more references to it we should
   * clean it up to avoid memory leaks
   */


  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
    if (isGlobalInstance) {
      refCount++;
    }

    return function () {
      if (isGlobalInstance) {
        refCount--;

        if (refCount === 0) {
          var context = getGlobalContext();
          context[instanceSymbol] = null;
        }
      }
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_DndContext__WEBPACK_IMPORTED_MODULE_1__[/* DndContext */ "a"].Provider, {
    value: manager
  }, children);
});
DndProvider.displayName = 'DndProvider';

function getDndContextValue(props) {
  if ('manager' in props) {
    var _manager = {
      dragDropManager: props.manager
    };
    return [_manager, false];
  }

  var manager = createSingletonDndContext(props.backend, props.context, props.options, props.debugMode);
  var isGlobalInstance = !props.context;
  return [manager, isGlobalInstance];
}

var instanceSymbol = Symbol.for('__REACT_DND_CONTEXT_INSTANCE__');

function createSingletonDndContext(backend) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getGlobalContext();
  var options = arguments.length > 2 ? arguments[2] : undefined;
  var debugMode = arguments.length > 3 ? arguments[3] : undefined;
  var ctx = context;

  if (!ctx[instanceSymbol]) {
    ctx[instanceSymbol] = Object(_DndContext__WEBPACK_IMPORTED_MODULE_1__[/* createDndContext */ "b"])(backend, context, options, debugMode);
  }

  return ctx[instanceSymbol];
}

function getGlobalContext() {
  return typeof global !== 'undefined' ? global : window;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)))

/***/ })
/******/ ])["default"];