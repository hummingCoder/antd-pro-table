"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/space/style");

var _space = _interopRequireDefault(require("antd/es/space"));

require("antd/es/input/style");

var _input = _interopRequireDefault(require("antd/es/input"));

require("antd/es/divider/style");

var _divider = _interopRequireDefault(require("antd/es/divider"));

require("antd/es/tooltip/style");

var _tooltip = _interopRequireDefault(require("antd/es/tooltip"));

var _react = _interopRequireWildcard(require("react"));

var _icons = require("@ant-design/icons");

var _context = require("antd/lib/config-provider/context");

var _proProvider = require("@ant-design/pro-provider");

var _proUtils = require("@ant-design/pro-utils");

var _ColumnSetting = _interopRequireDefault(require("../ColumnSetting"));

require("./index.less");

var _FullscreenIcon = _interopRequireDefault(require("./FullscreenIcon"));

var _DensityIcon = _interopRequireDefault(require("./DensityIcon"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getButtonText = function getButtonText(_ref) {
  var intl = _ref.intl;
  return {
    reload: {
      text: intl.getMessage('tableToolBar.reload', '刷新'),
      icon: /*#__PURE__*/_react.default.createElement(_icons.ReloadOutlined, null)
    },
    density: {
      text: intl.getMessage('tableToolBar.density', '表格密度'),
      icon: /*#__PURE__*/_react.default.createElement(_DensityIcon.default, null)
    },
    setting: {
      text: intl.getMessage('tableToolBar.columnSetting', '列设置'),
      icon: /*#__PURE__*/_react.default.createElement(_icons.SettingOutlined, null)
    },
    fullScreen: {
      text: intl.getMessage('tableToolBar.fullScreen', '全屏'),
      icon: /*#__PURE__*/_react.default.createElement(_FullscreenIcon.default, null)
    }
  };
};
/**
 * 渲染默认的 工具栏
 * @param options
 * @param className
 */


var renderDefaultOption = function renderDefaultOption(options, className, defaultOptions) {
  return options && Object.keys(options).filter(function (item) {
    return item;
  }).map(function (key) {
    var value = options[key];

    if (!value) {
      return null;
    }

    if (key === 'setting') {
      return /*#__PURE__*/_react.default.createElement(_ColumnSetting.default, {
        key: key
      });
    }

    if (key === 'fullScreen') {
      return /*#__PURE__*/_react.default.createElement("span", {
        key: key,
        className: className,
        onClick: value === true ? defaultOptions[key] : value
      }, /*#__PURE__*/_react.default.createElement(_FullscreenIcon.default, null));
    }

    var optionItem = getButtonText(defaultOptions)[key];

    if (optionItem) {
      return /*#__PURE__*/_react.default.createElement("span", {
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
      }, /*#__PURE__*/_react.default.createElement(_tooltip.default, {
        title: optionItem.text
      }, optionItem.icon));
    }

    return null;
  }).filter(function (item) {
    return item;
  });
};

var ToolBar = function ToolBar(_ref2) {
  var headerTitle = _ref2.headerTitle,
      tip = _ref2.tip,
      toolBarRender = _ref2.toolBarRender,
      action = _ref2.action,
      propsOptions = _ref2.options,
      selectedRowKeys = _ref2.selectedRowKeys,
      selectedRows = _ref2.selectedRows,
      onSearch = _ref2.onSearch;

  var _useContext = (0, _react.useContext)(_context.ConfigContext),
      getPrefixCls = _useContext.getPrefixCls;

  var className = getPrefixCls('pro-table-toolbar');

  var defaultOptions = _objectSpread({
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
  var intl = (0, _proProvider.useIntl)();
  var optionDom = renderDefaultOption(options, "".concat(className, "-item-icon"), _objectSpread(_objectSpread({}, defaultOptions), {}, {
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

    return /*#__PURE__*/_react.default.createElement(_divider.default, {
      type: "vertical"
    });
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: className
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(className, "-title")
  }, /*#__PURE__*/_react.default.createElement(_proUtils.LabelIconTip, {
    label: headerTitle,
    tip: tip
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(className, "-option")
  }, /*#__PURE__*/_react.default.createElement(_space.default, null, options && options.search && /*#__PURE__*/_react.default.createElement(_input.default.Search, _extends({
    placeholder: intl.getMessage('tableForm.inputPlaceholder', '请输入'),
    style: {
      width: 200
    }
  }, options.search, {
    onSearch: onSearch
  })), actions.filter(function (item) {
    return item;
  }).map(function (node, index) {
    return /*#__PURE__*/_react.default.createElement("div", {
      // eslint-disable-next-line react/no-array-index-key
      key: index
    }, node);
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(className, "-default-option")
  }, renderDivider(), /*#__PURE__*/_react.default.createElement(_space.default, null, optionDom))));
};

var _default = ToolBar;
exports.default = _default;