import "antd/es/alert/style";
import _Alert from "antd/es/alert";
import "antd/es/space/style";
import _Space from "antd/es/space";
import React, { useContext } from 'react';
import { ConfigContext } from 'antd/lib/config-provider/context';
import './index.less';
import { useIntl } from '@ant-design/pro-provider';

var defaultAlertOptionRender = function defaultAlertOptionRender(props) {
  var intl = props.intl,
      onCleanSelected = props.onCleanSelected;
  return [/*#__PURE__*/React.createElement("a", {
    onClick: onCleanSelected,
    key: "0"
  }, intl.getMessage('alert.clear', '清空'))];
};

var TableAlert = function TableAlert(_ref) {
  var _ref$selectedRowKeys = _ref.selectedRowKeys,
      selectedRowKeys = _ref$selectedRowKeys === void 0 ? [] : _ref$selectedRowKeys,
      onCleanSelected = _ref.onCleanSelected,
      _ref$selectedRows = _ref.selectedRows,
      selectedRows = _ref$selectedRows === void 0 ? [] : _ref$selectedRows,
      _ref$alertInfoRender = _ref.alertInfoRender,
      alertInfoRender = _ref$alertInfoRender === void 0 ? function (_ref2) {
    var intl = _ref2.intl;
    return /*#__PURE__*/React.createElement(_Space, null, intl.getMessage('alert.selected', '已选择'), /*#__PURE__*/React.createElement("a", {
      style: {
        fontWeight: 600
      }
    }, selectedRowKeys.length), intl.getMessage('alert.item', '项'), "\xA0\xA0");
  } : _ref$alertInfoRender,
      _ref$alertOptionRende = _ref.alertOptionRender,
      alertOptionRender = _ref$alertOptionRende === void 0 ? defaultAlertOptionRender : _ref$alertOptionRende;
  var intl = useIntl();
  var option = alertOptionRender && alertOptionRender({
    onCleanSelected: onCleanSelected,
    intl: intl
  });

  var _useContext = useContext(ConfigContext),
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

  return /*#__PURE__*/React.createElement("div", {
    className: className
  }, /*#__PURE__*/React.createElement(_Alert, {
    message: /*#__PURE__*/React.createElement("div", {
      className: "".concat(className, "-info")
    }, /*#__PURE__*/React.createElement("div", {
      className: "".concat(className, "-info-content")
    }, dom), option && /*#__PURE__*/React.createElement("div", {
      className: "".concat(className, "-info-option")
    }, option)),
    type: "info",
    showIcon: true
  }));
};

export default TableAlert;