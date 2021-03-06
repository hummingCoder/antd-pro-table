"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postDataPipeline = exports.useActionType = exports.mergePagination = exports.genCopyable = exports.genEllipsis = exports.reduceWidth = exports.genColumnKey = exports.checkUndefinedOrNull = void 0;

require("antd/es/typography/style");

var _typography = _interopRequireDefault(require("antd/es/typography"));

require("antd/es/tooltip/style");

var _tooltip = _interopRequireDefault(require("antd/es/tooltip"));

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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


exports.checkUndefinedOrNull = checkUndefinedOrNull;

var genColumnKey = function genColumnKey(key, index) {
  if (key) {
    return "".concat(key);
  }

  return "".concat(index);
};
/**
 * 减少 width，支持 string 和 number
 */


exports.genColumnKey = genColumnKey;

var reduceWidth = function reduceWidth(width) {
  if (width === undefined) {
    return width;
  }

  if (typeof width === 'string') {
    if (!width.includes('calc')) {
      return "calc(100% - ".concat(width, ")");
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


exports.reduceWidth = reduceWidth;

var genEllipsis = function genEllipsis(dom, item, text) {
  if (!item.ellipsis) {
    return dom;
  }

  return /*#__PURE__*/_react.default.createElement(_tooltip.default, {
    title: text
  }, /*#__PURE__*/_react.default.createElement("span", null, dom));
};

exports.genEllipsis = genEllipsis;

var genCopyable = function genCopyable(dom, item, text) {
  if (item.copyable || item.ellipsis) {
    return /*#__PURE__*/_react.default.createElement(_typography.default.Paragraph, {
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


exports.genCopyable = genCopyable;

var mergePagination = function mergePagination() {
  var pagination = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var intl = arguments.length > 2 ? arguments[2] : undefined;

  if (pagination === false) {
    return false;
  }

  var defaultPagination = pagination || {};
  var current = action.current,
      pageSize = action.pageSize;

  if (pagination === true) {
    defaultPagination = {};
  }

  return _objectSpread(_objectSpread({
    showTotal: function showTotal(all, range) {
      return "".concat(intl.getMessage('pagination.total.range', '第'), " ").concat(range[0], "-").concat(range[1], " ").concat(intl.getMessage('pagination.total.total', '条/总共'), " ").concat(all, " ").concat(intl.getMessage('pagination.total.item', '条'));
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

      var onChange = pagination.onChange;

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


exports.mergePagination = mergePagination;

var useActionType = function useActionType(action, ref, counter, onCleanSelected) {
  /**
   * 这里生成action的映射，保证 action 总是使用的最新
   * 只需要渲染一次即可
   */
  (0, _react.useEffect)(function () {
    var userAction = {
      setDataSource: function setDataSource(value) {
        action.setDataSource(value);
      },
      getDataSource: function getDataSource() {
        return action.dataSource;
      },
      reload: function () {
        var _reload = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resetPageIndex) {
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
        var _reloadAndRest = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
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
        var _fetchMore = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
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


exports.useActionType = useActionType;

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

exports.postDataPipeline = postDataPipeline;