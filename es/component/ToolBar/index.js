import "antd/es/space/style";
import _Space from "antd/es/space";
import "antd/es/input/style";
import _Input from "antd/es/input";
import "antd/es/divider/style";
import _Divider from "antd/es/divider";
import "antd/es/tooltip/style";
import _Tooltip from "antd/es/tooltip";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { useContext } from 'react';
import { ReloadOutlined, SettingOutlined } from '@ant-design/icons';
import { ConfigContext } from 'antd/lib/config-provider/context';
import { useIntl } from '@ant-design/pro-provider';
import { LabelIconTip } from '@ant-design/pro-utils';
import ColumnSetting from '../ColumnSetting';
import './index.less';
import FullScreenIcon from './FullscreenIcon';
import DensityIcon from './DensityIcon';

var getButtonText = function getButtonText(_ref) {
  var intl = _ref.intl;
  return {
    reload: {
      text: intl.getMessage('tableToolBar.reload', '刷新'),
      icon: /*#__PURE__*/React.createElement(ReloadOutlined, null)
    },
    density: {
      text: intl.getMessage('tableToolBar.density', '表格密度'),
      icon: /*#__PURE__*/React.createElement(DensityIcon, null)
    },
    setting: {
      text: intl.getMessage('tableToolBar.columnSetting', '列设置'),
      icon: /*#__PURE__*/React.createElement(SettingOutlined, null)
    },
    fullScreen: {
      text: intl.getMessage('tableToolBar.fullScreen', '全屏'),
      icon: /*#__PURE__*/React.createElement(FullScreenIcon, null)
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
      return /*#__PURE__*/React.createElement(ColumnSetting, {
        key: key
      });
    }

    if (key === 'fullScreen') {
      return /*#__PURE__*/React.createElement("span", {
        key: key,
        className: className,
        onClick: value === true ? defaultOptions[key] : value
      }, /*#__PURE__*/React.createElement(FullScreenIcon, null));
    }

    var optionItem = getButtonText(defaultOptions)[key];

    if (optionItem) {
      return /*#__PURE__*/React.createElement("span", {
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
      }, /*#__PURE__*/React.createElement(_Tooltip, {
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

  var _useContext = useContext(ConfigContext),
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
  var intl = useIntl();
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

    return /*#__PURE__*/React.createElement(_Divider, {
      type: "vertical"
    });
  };

  return /*#__PURE__*/React.createElement("div", {
    className: className
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(className, "-title")
  }, /*#__PURE__*/React.createElement(LabelIconTip, {
    label: headerTitle,
    tip: tip
  })), /*#__PURE__*/React.createElement("div", {
    className: "".concat(className, "-option")
  }, /*#__PURE__*/React.createElement(_Space, null, options && options.search && /*#__PURE__*/React.createElement(_Input.Search, _extends({
    placeholder: intl.getMessage('tableForm.inputPlaceholder', '请输入'),
    style: {
      width: 200
    }
  }, options.search, {
    onSearch: onSearch
  })), actions.filter(function (item) {
    return item;
  }).map(function (node, index) {
    return /*#__PURE__*/React.createElement("div", {
      // eslint-disable-next-line react/no-array-index-key
      key: index
    }, node);
  })), /*#__PURE__*/React.createElement("div", {
    className: "".concat(className, "-default-option")
  }, renderDivider(), /*#__PURE__*/React.createElement(_Space, null, optionDom))));
};

export default ToolBar;