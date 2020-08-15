import "antd/es/row/style";
import _Row from "antd/es/row";
import "antd/es/col/style";
import _Col from "antd/es/col";
import "antd/es/form/style";
import _Form from "antd/es/form";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useState, useContext, useEffect, useRef, useCallback } from 'react';
import moment from 'moment';
import RcResizeObserver from 'rc-resize-observer';
import useMediaQuery from 'use-media-antd-query';
import useMergedState from 'rc-util/lib/hooks/useMergedState';
import { ConfigContext } from 'antd/lib/config-provider';
import { DownOutlined } from '@ant-design/icons';
import { useIntl } from '@ant-design/pro-provider';
import classNames from 'classnames';
import ProField from '@ant-design/pro-field';
import { useDeepCompareEffect } from '@ant-design/pro-utils';
import { genColumnKey } from '../utils';
import Container from '../container';
import FormOption from './FormOption';
import './index.less';
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
 * 获取最后一行的 offset，保证在最后一列
 * @param length
 * @param span
 */

var getOffset = function getOffset(length) {
  var span = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 8;
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
export var FormInputRender = React.forwardRef(function (props, ref) {
  var item = props.item,
      intl = props.intl,
      form = props.form,
      type = props.type,
      rest = _objectWithoutProperties(props, ["item", "intl", "form", "type"]);

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
        restItem = _objectWithoutProperties(item, ["renderFormItem"]);

    var defaultRender = function defaultRender(newItem) {
      return /*#__PURE__*/React.createElement(FormInputRender, _objectSpread(_objectSpread({}, props), {}, {
        item: newItem
      }) || null);
    }; // 自动注入 onChange 和 value,用户自己很有肯能忘记


    var dom = renderFormItem(restItem, _objectSpread(_objectSpread({}, rest), {}, {
      type: type,
      defaultRender: defaultRender
    }), form); // 有可能不是不是一个组件

    if (!React.isValidElement(dom)) {
      return dom;
    }

    var defaultProps = dom.props; // 已用户的为主，不然过于 magic

    return React.cloneElement(dom, _objectSpread(_objectSpread({}, rest), defaultProps));
  }

  if (!valueType || valueType === 'text') {
    var valueEnum = item.valueEnum;

    if (valueEnum) {
      return /*#__PURE__*/React.createElement(ProField, _extends({
        valueEnum: valueEnum,
        valueType: valueType,
        ref: ref,
        plain: type !== 'form',
        mode: "edit",
        allowClear: true,
        style: {
          width: '100%'
        },
        formItemProps: _objectSpread({
          style: {
            width: '100%'
          }
        }, item.formItemProps),
        placeholder: intl.getMessage('tableForm.selectPlaceholder', '请选择')
      }, rest));
    }
  }

  if (valueType === 'dateTime' || valueType === 'date' || valueType === 'time') {
    return /*#__PURE__*/React.createElement(ProField, _extends({
      ref: ref,
      mode: "edit",
      valueType: valueType,
      formItemProps: _objectSpread({
        style: {
          width: '100%'
        },
        placeholder: intl.getMessage('tableForm.selectPlaceholder', '请选择')
      }, item.formItemProps)
    }, rest));
  }

  if (valueType === 'dateTimeRange' || valueType === 'dateRange') {
    return /*#__PURE__*/React.createElement(ProField, _extends({
      ref: ref,
      mode: "edit",
      valueType: valueType,
      formItemProps: _objectSpread({
        style: {
          width: '100%'
        },
        placeholder: [intl.getMessage('tableForm.selectPlaceholder', '请选择'), intl.getMessage('tableForm.selectPlaceholder', '请选择')]
      }, item.formItemProps)
    }, rest));
  }

  return /*#__PURE__*/React.createElement(ProField, _extends({
    mode: "edit",
    ref: ref,
    formItemProps: _objectSpread({
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
export var proFormItemRender = function proFormItemRender(_ref) {
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
      rest = _objectWithoutProperties(item, ["valueType", "dataIndex", "valueEnum", "renderFormItem", "render", "hideInForm", "hideInSearch", "hideInTable", "renderText", "order", "initialValue", "ellipsis", "formItemProps", "index"]);

  var key = genColumnKey(rest.key, index);
  var dom = /*#__PURE__*/React.createElement(FormInputRender, {
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

  return /*#__PURE__*/React.createElement(_Col, _extends({}, colConfig, {
    key: key
  }), /*#__PURE__*/React.createElement(_Form.Item, _extends({
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
    if (_typeof(type({})) === 'object') {
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


var conversionValue = function conversionValue(value, dateFormatter, proColumnsMap) {
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


    if (moment.isMoment(itemValue) && dateFormatter) {
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

        var _itemValue = _slicedToArray(itemValue, 2),
            startValue = _itemValue[0],
            endValue = _itemValue[1]; // 后端需要日期/时间范围会有[null,date]或者[date,null]的情况


        tmpValue[key] = [startValue && moment(startValue).format(_formatString || 'YYYY-MM-DD HH:mm:ss'), endValue && moment(endValue).format(_formatString || 'YYYY-MM-DD HH:mm:ss')];
        return;
      }

      if (dateFormatter === 'number') {
        var _itemValue2 = _slicedToArray(itemValue, 2),
            _startValue = _itemValue2[0],
            _endValue = _itemValue2[1];

        tmpValue[key] = [moment(_startValue).valueOf(), moment(_endValue).valueOf()];
      }
    } // 都没命中，原样返回


    tmpValue[key] = itemValue;
  });
  return tmpValue;
};

var getDefaultSearch = function getDefaultSearch(search, intl, isForm) {
  var config = {
    collapseRender: function collapseRender(collapsed) {
      if (collapsed) {
        return /*#__PURE__*/React.createElement(React.Fragment, null, intl.getMessage('tableForm.collapsed', '展开'), /*#__PURE__*/React.createElement(DownOutlined, {
          style: {
            marginLeft: '0.5em',
            transition: '0.3s all',
            transform: "rotate(".concat(collapsed ? 0 : 0.5, "turn)")
          }
        }));
      }

      return /*#__PURE__*/React.createElement(React.Fragment, null, intl.getMessage('tableForm.expand', '收起'), /*#__PURE__*/React.createElement(DownOutlined, {
        style: {
          marginLeft: '0.5em',
          transition: '0.3s all',
          transform: "rotate(".concat(collapsed ? 0 : 0.5, "turn)")
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

  return _objectSpread(_objectSpread({}, config), search);
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

  var config = _objectSpread(_objectSpread({}, defaultColConfig), span);

  return config[size];
};

var FormSearch = function FormSearch(_ref2) {
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

  var _Form$useForm = _Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var formInstanceRef = useRef();
  var searchConfig = getDefaultSearch(propsSearch, intl, type === 'form');
  var span = searchConfig.span;
  var counter = Container.useContainer();

  var _useMergedState = useMergedState(true, {
    value: searchConfig.collapsed,
    onChange: searchConfig.onCollapse
  }),
      _useMergedState2 = _slicedToArray(_useMergedState, 2),
      collapse = _useMergedState2[0],
      setCollapse = _useMergedState2[1];

  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      proColumnsMap = _useState2[0],
      setProColumnsMap = _useState2[1];

  var windowSize = useMediaQuery();

  var _useState3 = useState(getSpanConfig(span || 8, windowSize)),
      _useState4 = _slicedToArray(_useState3, 2),
      colSize = _useState4[0],
      setColSize = _useState4[1];

  var _useState5 = useState(88),
      _useState6 = _slicedToArray(_useState5, 2),
      formHeight = _useState6[0],
      setFormHeight = _useState6[1];

  var rowNumber = 24 / colSize || 3;
  var isForm = type === 'form';
  /**
   *提交表单，根据两种模式不同，方法不相同
   */

  var _submit = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var value, _value;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (isForm) {
                _context.next = 4;
                break;
              }

              value = form.getFieldsValue();

              if (onSubmit) {
                onSubmit(conversionValue(value, dateFormatter, proColumnsMap));
              }

              return _context.abrupt("return");

            case 4:
              _context.prev = 4;
              _context.next = 7;
              return form.validateFields();

            case 7:
              _value = _context.sent;

              if (onSubmit) {
                onSubmit(conversionValue(_value, dateFormatter, proColumnsMap));
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

  useEffect(function () {
    if (!formRef) {
      return;
    }

    if (typeof formRef === 'function') {
      formRef(form);
    }

    if (formRef && typeof formRef !== 'function') {
      // eslint-disable-next-line no-param-reassign
      formRef.current = _objectSpread(_objectSpread({}, form), {}, {
        submit: function submit() {
          _submit();

          form.submit();
        }
      });
    }
  }, []);
  useEffect(function () {
    setColSize(getSpanConfig(span || 8, windowSize));
  }, [windowSize]);
  useDeepCompareEffect(function () {
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

  var _React$useState = React.useState(),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      updateState = _React$useState2[1];

  var forceUpdate = useCallback(function () {
    return updateState({});
  }, []);
  var domList = formInstanceRef.current ? columnsList.map(function (item, index) {
    var _item$dataIndex;

    return proFormItemRender({
      isForm: isForm,
      formInstance: formInstanceRef.current,
      item: _objectSpread({
        key: ((_item$dataIndex = item.dataIndex) === null || _item$dataIndex === void 0 ? void 0 : _item$dataIndex.toString()) || index,
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

  var _useContext = useContext(ConfigContext),
      getPrefixCls = _useContext.getPrefixCls;

  var className = getPrefixCls('pro-table-search');
  var formClassName = getPrefixCls('pro-table-form');
  return /*#__PURE__*/React.createElement("div", {
    className: classNames(className, _defineProperty({}, formClassName, isForm)),
    style: isForm ? undefined : {
      height: formHeight
    }
  }, /*#__PURE__*/React.createElement(RcResizeObserver, {
    onResize: function onResize(_ref4) {
      var height = _ref4.height;

      if (type === 'form') {
        return;
      }

      setFormHeight(height + 24);
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_Form, _extends({}, formConfig, {
    form: form,
    onValuesChange: function onValuesChange() {
      return forceUpdate();
    },
    initialValues: columnsList.reduce(function (pre, item) {
      var key = genColumnKey(item.key, item.index);

      if (item.initialValue) {
        return _objectSpread(_objectSpread({}, pre), {}, _defineProperty({}, key, item.initialValue));
      }

      return pre;
    }, _objectSpread({}, formConfig.initialValues))
  }), /*#__PURE__*/React.createElement(_Form.Item, {
    shouldUpdate: true,
    noStyle: true
  }, function (formInstance) {
    setTimeout(function () {
      formInstanceRef.current = formInstance;
    }, 0);
    return null;
  }), /*#__PURE__*/React.createElement(_Row, {
    gutter: 16,
    justify: "start"
  }, /*#__PURE__*/React.createElement(_Form.Item, {
    label: isForm && ' ',
    shouldUpdate: true,
    noStyle: true
  }, /*#__PURE__*/React.createElement(React.Fragment, null, domList)), /*#__PURE__*/React.createElement(_Col, _extends({}, colConfig, {
    offset: getOffset(domList.length, colSize),
    key: "option",
    className: classNames("".concat(className, "-option"), _defineProperty({}, "".concat(className, "-form-option"), isForm))
  }), /*#__PURE__*/React.createElement(_Form.Item, {
    label: isForm && ' '
  }, /*#__PURE__*/React.createElement(FormOption, {
    showCollapseButton: columnsList.length > rowNumber - 1 && !isForm,
    searchConfig: searchConfig,
    submit: _submit,
    onReset: onReset,
    form: _objectSpread(_objectSpread({}, form), {}, {
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

export default FormSearch;