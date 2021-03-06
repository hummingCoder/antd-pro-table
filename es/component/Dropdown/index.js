import "antd/es/dropdown/style";
import _Dropdown from "antd/es/dropdown";
import "antd/es/button/style";
import _Button from "antd/es/button";
import "antd/es/menu/style";
import _Menu from "antd/es/menu";
import React, { useContext } from 'react';
import classnames from 'classnames';
import { DownOutlined, EllipsisOutlined } from '@ant-design/icons';
import { ConfigContext } from 'antd/lib/config-provider/context';
import './index.less';
/**
 * 默认的 index 列容器，提供一个好看的 index
 * @param param0
 */

var DropdownButton = function DropdownButton(_ref) {
  var children = _ref.children,
      _ref$menus = _ref.menus,
      menus = _ref$menus === void 0 ? [] : _ref$menus,
      onSelect = _ref.onSelect,
      className = _ref.className,
      style = _ref.style;

  var _useContext = useContext(ConfigContext),
      getPrefixCls = _useContext.getPrefixCls;

  var tempClassName = getPrefixCls('pro-table-dropdown');
  var menu = /*#__PURE__*/React.createElement(_Menu, {
    onClick: function onClick(params) {
      return onSelect && onSelect(params.key);
    }
  }, menus.map(function (item) {
    return /*#__PURE__*/React.createElement(_Menu.Item, {
      key: item.key
    }, item.name);
  }));
  return /*#__PURE__*/React.createElement(_Dropdown, {
    overlay: menu,
    className: classnames(tempClassName, className)
  }, /*#__PURE__*/React.createElement(_Button, {
    style: style
  }, children, " ", /*#__PURE__*/React.createElement(DownOutlined, null)));
};

var TableDropdown = function TableDropdown(_ref2) {
  var propsClassName = _ref2.className,
      style = _ref2.style,
      onSelect = _ref2.onSelect,
      _ref2$menus = _ref2.menus,
      menus = _ref2$menus === void 0 ? [] : _ref2$menus;

  var _useContext2 = useContext(ConfigContext),
      getPrefixCls = _useContext2.getPrefixCls;

  var className = getPrefixCls('pro-table-dropdown');
  var menu = /*#__PURE__*/React.createElement(_Menu, {
    onClick: function onClick(params) {
      return onSelect && onSelect(params.key);
    }
  }, menus.map(function (item) {
    return /*#__PURE__*/React.createElement(_Menu.Item, {
      key: item.key
    }, item.name);
  }));
  return /*#__PURE__*/React.createElement(_Dropdown, {
    overlay: menu,
    className: classnames(className, propsClassName)
  }, /*#__PURE__*/React.createElement("a", {
    style: style
  }, /*#__PURE__*/React.createElement(EllipsisOutlined, null)));
};

TableDropdown.Button = DropdownButton;
export default TableDropdown;