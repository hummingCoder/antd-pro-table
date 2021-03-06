function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import { useState, useRef, useEffect } from 'react';
import { usePrevious, useDebounceFn } from '@ant-design/pro-utils';

var useFetchData = function useFetchData(getData, defaultData, options) {
  // 用于标定组件是否解除挂载，如果解除了就不要 setState
  var mountRef = useRef(true);

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

  var _useState = useState(defaultData),
      _useState2 = _slicedToArray(_useState, 2),
      list = _useState2[0],
      setList = _useState2[1];

  var _useState3 = useState(undefined),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = useState({
    hasMore: false,
    page: defaultCurrent || 1,
    total: 0,
    pageSize: defaultPageSize
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      pageInfo = _useState6[0],
      _setPageInfo = _useState6[1]; // pre state


  var prePage = usePrevious(pageInfo.page);
  var prePageSize = usePrevious(pageInfo.pageSize);

  var _ref2 = options || {},
      _ref2$effects = _ref2.effects,
      effects = _ref2$effects === void 0 ? [] : _ref2$effects;

  var setDataAndLoading = function setDataAndLoading(newData, dataTotal) {
    var pageSize = pageInfo.pageSize,
        page = pageInfo.page;
    setList(newData);
    setLoading(false);

    _setPageInfo(_objectSpread(_objectSpread({}, pageInfo), {}, {
      total: dataTotal,
      hasMore: dataTotal > pageSize * page
    }));
  };
  /**
   * 请求数据
   * @param isAppend 是否添加数据到后面
   */


  var fetchList = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(isAppend) {
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
                  setDataAndLoading([].concat(_toConsumableArray(list), _toConsumableArray(data)), dataTotal);
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

  var fetchListDebounce = useDebounceFn(fetchList, [], 200);

  var fetchMore = function fetchMore() {
    // 如果没有更多的就忽略掉
    if (pageInfo.hasMore) {
      _setPageInfo(_objectSpread(_objectSpread({}, pageInfo), {}, {
        page: pageInfo.page + 1
      }));
    }
  };
  /**
   * pageIndex 改变的时候自动刷新
   */


  useEffect(function () {
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

  useEffect(function () {
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

    _setPageInfo(_objectSpread(_objectSpread({}, pageInfo), {}, {
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
    _setPageInfo(_objectSpread(_objectSpread({}, pageInfo), {}, {
      page: 1
    }));
  };

  useEffect(function () {
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
  }, [].concat(_toConsumableArray(effects), [manual]));
  return {
    setDataSource: setList,
    dataSource: list,
    loading: loading,
    reload: function () {
      var _reload = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
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
      return _setPageInfo(_objectSpread(_objectSpread({}, pageInfo), info));
    }
  };
};

export default useFetchData;