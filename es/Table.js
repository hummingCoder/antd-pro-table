import "antd/es/config-provider/style";
import _ConfigProvider from "antd/es/config-provider";
import "antd/es/table/style";
import _Table from "antd/es/table";
import "antd/es/card/style";
import _Card from "antd/es/card";
import "antd/es/empty/style";
import _Empty from "antd/es/empty";
import "antd/es/space/style";
import _Space from "antd/es/space";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

import './index.less';
import React, { useEffect, useContext, useRef, useState, useCallback, useMemo } from 'react';
import { useIntl, ConfigProviderWarp } from '@ant-design/pro-provider';
import classNames from 'classnames';
import get from 'rc-util/lib/utils/get';
import useMergedState from 'rc-util/lib/hooks/useMergedState';
import { stringify } from 'use-json-comparison';
import { ConfigContext as AntdConfigContext } from 'antd/lib/config-provider';
import { proFieldParsingValueEnumToArray } from '@ant-design/pro-field';
import { useDeepCompareEffect, LabelIconTip, pickUndefined } from '@ant-design/pro-utils';
import useFetchData from './useFetchData';
import Container from './container';
import Toolbar from './component/ToolBar';
import Alert from './component/Alert';
import FormSearch from './Form';
import { checkUndefinedOrNull, genColumnKey, genCopyable, genEllipsis, mergePagination, useActionType, postDataPipeline } from './utils';
import defaultRenderText from './defaultRender';
import ErrorBoundary from './component/ErrorBoundary';
/**
 * 这个组件负责单元格的具体渲染
 * @param param0
 */

var columnRender = function columnRender(_ref) {
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
  var textDom = defaultRenderText(renderTextStr, item.valueType || 'text', index, row, columnEmptyText, item);
  var dom = genEllipsis(genCopyable(textDom, item, renderTextStr), item, renderTextStr);

  if (item.render) {
    var renderDom = item.render(dom, row, index, action.current, item); // 如果是合并单元格的，直接返回对象

    if (renderDom && _typeof(renderDom) === 'object' && renderDom.props && renderDom.props.colSpan) {
      return renderDom;
    }

    if (renderDom && item.valueType === 'option' && Array.isArray(renderDom)) {
      return /*#__PURE__*/React.createElement(_Space, null, renderDom);
    }

    return renderDom;
  }

  return checkUndefinedOrNull(dom) ? dom : null;
};
/**
 * render 的 title
 * @param item
 */


var renderColumnsTitle = function renderColumnsTitle(item) {
  var title = item.title;

  if (title && typeof title === 'function') {
    return title(item, 'table', /*#__PURE__*/React.createElement(LabelIconTip, {
      label: title,
      tip: item.tip
    }));
  }

  return /*#__PURE__*/React.createElement(LabelIconTip, {
    label: title,
    tip: item.tip
  });
};

var defaultOnFilter = function defaultOnFilter(value, record, dataIndex) {
  var recordElement = Array.isArray(dataIndex) ? get(record, dataIndex) : record[dataIndex];

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


var genColumnList = function genColumnList(columns, map, counter, columnEmptyText) {
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

    var tempColumns = _objectSpread(_objectSpread({
      key: columnsIndex,
      onFilter: ((_propsRef$current = propsRef.current) === null || _propsRef$current === void 0 ? void 0 : _propsRef$current.request) ? undefined : function (value, row) {
        return defaultOnFilter(value, row, dataIndex);
      },
      index: columnsIndex
    }, item), {}, {
      title: renderColumnsTitle(item),
      valueEnum: valueEnum,
      filters: filters === true ? proFieldParsingValueEnumToArray(valueEnum).filter(function (valueItem) {
        return valueItem && valueItem.value !== 'all';
      }) : filters,
      ellipsis: false,
      fixed: config.fixed,
      width: item.width || (item.fixed ? 200 : undefined),
      children: item.children ? genColumnList(item.children, map, counter, columnEmptyText) : undefined,
      render: function render(text, row, index) {
        return columnRender({
          item: item,
          text: text,
          row: row,
          index: index,
          columnEmptyText: columnEmptyText,
          counter: counter
        });
      }
    });

    return pickUndefined(tempColumns);
  }).filter(function (item) {
    return !item.hideInTable;
  });
};
/**
 * 🏆 Use Ant Design Table like a Pro!
 * 更快 更好 更方便
 * @param props
 */


var ProTable = function ProTable(props) {
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
      rest = _objectWithoutProperties(props, ["request", "className", "params", "defaultData", "headerTitle", "postData", "pagination", "actionRef", "columns", "toolBarRender", "onLoad", "onRequestError", "style", "tableStyle", "tableClassName", "columnsStateMap", "onColumnsStateChange", "options", "search", "rowSelection", "beforeSearchSubmit", "tableAlertRender", "defaultClassName", "formRef", "type", "onReset", "columnEmptyText", "manualRequest"]);

  var _useMergedState = useMergedState([], {
    value: propsRowSelection ? propsRowSelection.selectedRowKeys : undefined
  }),
      _useMergedState2 = _slicedToArray(_useMergedState, 2),
      selectedRowKeys = _useMergedState2[0],
      setSelectedRowKeys = _useMergedState2[1];

  var _useState = useState(function () {
    var _rest$form;

    return (_rest$form = rest.form) === null || _rest$form === void 0 ? void 0 : _rest$form.initialValues;
  }),
      _useState2 = _slicedToArray(_useState, 2),
      formSearch = _useState2[0],
      setFormSearch = _useState2[1];

  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedRows = _useState4[0],
      setSelectedRows = _useState4[1];

  var _useState5 = useState({}),
      _useState6 = _slicedToArray(_useState5, 2),
      proFilter = _useState6[0],
      setProFilter = _useState6[1];

  var _useState7 = useState({}),
      _useState8 = _slicedToArray(_useState7, 2),
      proSort = _useState8[0],
      setProSort = _useState8[1];

  var rootRef = useRef(null);
  var fullScreen = useRef();
  var intl = useIntl();
  /**
   * 需要初始化 不然默认可能报错
   * 这里取了 defaultCurrent 和 current
   * 为了保证不会重复刷新
   */

  var fetchPagination = _typeof(propsPagination) === 'object' ? propsPagination : {
    defaultCurrent: 1,
    defaultPageSize: 20,
    pageSize: 20,
    current: 1
  };
  var action = useFetchData( /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref2) {
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
              actionParams = _objectSpread(_objectSpread({
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
              msgData = _objectSpread(_objectSpread({}, response), {}, {
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
  }(), defaultData, _objectSpread(_objectSpread({}, fetchPagination), {}, {
    onLoad: onLoad,
    onRequestError: onRequestError,
    manual: !request,
    effects: [stringify(params), stringify(formSearch), stringify(proFilter), stringify(proSort)]
  }));
  useEffect(function () {
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
  var counter = Container.useContainer();
  var onCleanSelected = useCallback(function () {
    if (propsRowSelection && propsRowSelection.onChange) {
      propsRowSelection.onChange([], []);
    }

    setSelectedRowKeys([]);
    setSelectedRows([]);
  }, [setSelectedRowKeys, setSelectedRows]);
  /**
   * 绑定 action
   */

  useActionType(action, actionRef, counter, onCleanSelected);
  counter.setAction(action);
  counter.propsRef.current = props;
  /**
   *  保存一下 propsColumns
   *  生成 form 需要用
   */

  useDeepCompareEffect(function () {
    counter.setProColumns(propsColumns);
  }, [propsColumns]);
  var tableColumn = useMemo(function () {
    return genColumnList(propsColumns, counter.columnsMap, counter, columnEmptyText);
  }, [propsColumns]);
  /**
   * Table Column 变化的时候更新一下，这个参数将会用于渲染
   */

  useDeepCompareEffect(function () {
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

  useDeepCompareEffect(function () {
    var columnsMap = counter.columnsMap;
    var sortTableColumn = genColumnList(propsColumns, columnsMap, counter, columnEmptyText).sort(function (a, b) {
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


      var aKey = a.key || "".concat(aIndex);
      var bKey = b.key || "".concat(bIndex);
      return (((_columnsMap$aKey = columnsMap[aKey]) === null || _columnsMap$aKey === void 0 ? void 0 : _columnsMap$aKey.order) || 0) - (((_columnsMap$bKey = columnsMap[bKey]) === null || _columnsMap$bKey === void 0 ? void 0 : _columnsMap$bKey.order) || 0);
    });

    if (sortTableColumn && sortTableColumn.length > 0) {
      counter.setColumns(sortTableColumn);
    }
  }, [counter.columnsMap]);
  /**
   * 同步 Pagination，支持受控的 页码 和 pageSize
   */

  useDeepCompareEffect(function () {
    if (propsPagination && propsPagination.current && propsPagination.pageSize) {
      action.setPageInfo({
        pageSize: propsPagination.pageSize,
        page: propsPagination.current
      });
    }
  }, [propsPagination && propsPagination.pageSize, propsPagination && propsPagination.current]); // 映射 selectedRowKeys 与 selectedRow

  useEffect(function () {
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
      var rows = [].concat(_toConsumableArray(dataSource), _toConsumableArray(selectedRows)).filter(function (item, index) {
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

  var rowSelection = _objectSpread(_objectSpread({
    selectedRowKeys: selectedRowKeys
  }, propsRowSelection), {}, {
    onChange: function onChange(keys, rows) {
      if (propsRowSelection && propsRowSelection.onChange) {
        propsRowSelection.onChange(keys, rows);
      }

      setSelectedRowKeys(_toConsumableArray(keys));
    }
  });

  useEffect(function () {
    counter.setTableSize(rest.size || 'middle');
  }, [rest.size]);

  if (props.columns && props.columns.length < 1) {
    return /*#__PURE__*/React.createElement(_Card, {
      bordered: false,
      bodyStyle: {
        padding: 50
      }
    }, /*#__PURE__*/React.createElement(_Empty, null));
  }

  var className = classNames(defaultClassName, propsClassName);
  var toolbarDom = toolBarRender !== false && (options !== false || headerTitle || toolBarRender) &&
  /*#__PURE__*/
  // if options= false & headerTitle=== false, hide Toolbar
  React.createElement(Toolbar, {
    options: options,
    headerTitle: headerTitle,
    action: action,
    onSearch: function onSearch(keyword) {
      if (options && options.search) {
        var _ref4 = options.search === true ? {
          name: 'keyword'
        } : options.search,
            _ref4$name = _ref4.name,
            name = _ref4$name === void 0 ? 'keyword' : _ref4$name;

        setFormSearch(_objectSpread(_objectSpread({}, formSearch), {}, _defineProperty({}, name, keyword)));
      }
    },
    selectedRows: selectedRows,
    selectedRowKeys: selectedRowKeys,
    toolBarRender: toolBarRender
  });
  var alertDom = propsRowSelection !== false && /*#__PURE__*/React.createElement(Alert, {
    selectedRowKeys: selectedRowKeys,
    selectedRows: selectedRows,
    onCleanSelected: onCleanSelected,
    alertOptionRender: rest.tableAlertOptionRender,
    alertInfoRender: tableAlertRender
  });
  var dataSource = request ? action.dataSource : props.dataSource || [];
  var tableDom = /*#__PURE__*/React.createElement(_Table, _extends({}, rest, {
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


      setProFilter(pickUndefined(filters)); // 制造一个排序的数据

      if (Array.isArray(sorter)) {
        var data = sorter.reduce(function (pre, value) {
          return _objectSpread(_objectSpread({}, pre), {}, _defineProperty({}, "".concat(value.field), value.order));
        }, {});
        setProSort(data);
      } else {
        setProSort(_defineProperty({}, "".concat(sorter.field), sorter.order));
      }
    }
  }));
  /**
   * table 区域的 dom，为了方便 render
   */

  var tableAreaDom = /*#__PURE__*/React.createElement(React.Fragment, null, toolbarDom, alertDom, tableDom);

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

  return /*#__PURE__*/React.createElement(_ConfigProvider, {
    getPopupContainer: function getPopupContainer() {
      return rootRef.current || document.body;
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: className,
    id: "ant-design-pro-table",
    style: style,
    ref: rootRef
  }, (search || type === 'form') && /*#__PURE__*/React.createElement(FormSearch, _extends({}, rest, {
    type: props.type,
    formRef: formRef,
    onSubmit: function onSubmit(value) {
      if (type !== 'form') {
        var submitParams = _objectSpread(_objectSpread({}, value), {}, {
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
  })), type !== 'form' && props.tableExtraRender && /*#__PURE__*/React.createElement("div", {
    className: "".concat(className, "-extra")
  }, props.tableExtraRender(props, dataSource)), type !== 'form' && /*#__PURE__*/React.createElement(_Card, {
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


var ProviderWarp = function ProviderWarp(props) {
  var _useContext = useContext(AntdConfigContext),
      getPrefixCls = _useContext.getPrefixCls;

  return /*#__PURE__*/React.createElement(Container.Provider, {
    initialState: props
  }, /*#__PURE__*/React.createElement(ConfigProviderWarp, null, /*#__PURE__*/React.createElement(ErrorBoundary, null, /*#__PURE__*/React.createElement(ProTable, _extends({
    defaultClassName: getPrefixCls('pro-table')
  }, props)))));
};

export default ProviderWarp;