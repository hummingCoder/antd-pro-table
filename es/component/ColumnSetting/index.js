import "antd/es/popover/style";
import _Popover from "antd/es/popover";
import "antd/es/checkbox/style";
import _Checkbox from "antd/es/checkbox";
import "antd/es/tooltip/style";
import _Tooltip from "antd/es/tooltip";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { useContext } from 'react';
import { useIntl } from '@ant-design/pro-provider';
import { ConfigContext } from 'antd/lib/config-provider';
import { SettingOutlined, VerticalAlignMiddleOutlined, VerticalAlignTopOutlined, VerticalAlignBottomOutlined } from '@ant-design/icons';
import { DndProvider } from 'react-dnd';
import classNames from 'classnames';
import Backend from 'react-dnd-html5-backend';
import Container from '../../container';
import DnDItem from './DndItem';
import './index.less';
import DragIcon from './DragIcon';
import { genColumnKey } from '../../utils';

var ToolTipIcon = function ToolTipIcon(_ref) {
  var title = _ref.title,
      show = _ref.show,
      children = _ref.children,
      columnKey = _ref.columnKey,
      fixed = _ref.fixed;

  var _Container$useContain = Container.useContainer(),
      columnsMap = _Container$useContain.columnsMap,
      setColumnsMap = _Container$useContain.setColumnsMap;

  if (!show) {
    return null;
  }

  return /*#__PURE__*/React.createElement(_Tooltip, {
    title: title
  }, /*#__PURE__*/React.createElement("span", {
    onClick: function onClick() {
      var config = columnsMap[columnKey] || {};

      var columnKeyMap = _objectSpread(_objectSpread({}, columnsMap), {}, _defineProperty({}, columnKey, _objectSpread(_objectSpread({}, config), {}, {
        fixed: fixed
      })));

      setColumnsMap(columnKeyMap);
    }
  }, children));
};

var CheckboxListItem = function CheckboxListItem(_ref2) {
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
  return /*#__PURE__*/React.createElement("span", {
    className: "".concat(className, "-list-item"),
    key: columnKey
  }, /*#__PURE__*/React.createElement(DragIcon, null), /*#__PURE__*/React.createElement(_Checkbox, {
    onChange: function onChange(e) {
      if (columnKey) {
        var tempConfig = columnsMap[columnKey] || {};

        var newSetting = _objectSpread({}, tempConfig);

        if (e.target.checked) {
          delete newSetting.show;
        } else {
          newSetting.show = false;
        }

        var columnKeyMap = _objectSpread(_objectSpread({}, columnsMap), {}, _defineProperty({}, columnKey, newSetting)); // 如果没有值了，直接干掉他


        if (Object.keys(newSetting).length === 0) {
          delete columnKeyMap[columnKey];
        }

        setColumnsMap(columnKeyMap);
      }
    },
    checked: config.show !== false
  }, title), /*#__PURE__*/React.createElement("span", {
    className: "".concat(className, "-list-item-option")
  }, /*#__PURE__*/React.createElement(ToolTipIcon, {
    columnKey: columnKey,
    fixed: "left",
    title: intl.getMessage('tableToolBar.leftPin', '固定在列首'),
    show: fixed !== 'left'
  }, /*#__PURE__*/React.createElement(VerticalAlignTopOutlined, null)), /*#__PURE__*/React.createElement(ToolTipIcon, {
    columnKey: columnKey,
    fixed: undefined,
    title: intl.getMessage('tableToolBar.noPin', '不固定'),
    show: !!fixed
  }, /*#__PURE__*/React.createElement(VerticalAlignMiddleOutlined, null)), /*#__PURE__*/React.createElement(ToolTipIcon, {
    columnKey: columnKey,
    fixed: "right",
    title: intl.getMessage('tableToolBar.rightPin', '固定在列尾'),
    show: fixed !== 'right'
  }, /*#__PURE__*/React.createElement(VerticalAlignBottomOutlined, null))));
};

var CheckboxList = function CheckboxList(_ref3) {
  var list = _ref3.list,
      className = _ref3.className,
      _ref3$showTitle = _ref3.showTitle,
      showTitle = _ref3$showTitle === void 0 ? true : _ref3$showTitle,
      listTitle = _ref3.title;

  var _Container$useContain2 = Container.useContainer(),
      columnsMap = _Container$useContain2.columnsMap,
      setColumnsMap = _Container$useContain2.setColumnsMap,
      sortKeyColumns = _Container$useContain2.sortKeyColumns,
      setSortKeyColumns = _Container$useContain2.setSortKeyColumns;

  var show = list && list.length > 0;

  if (!show) {
    return null;
  }

  var move = function move(id, targetIndex) {
    var newMap = _objectSpread({}, columnsMap);

    var newColumns = _toConsumableArray(sortKeyColumns);

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
      newMap[key] = _objectSpread(_objectSpread({}, newMap[key] || {}), {}, {
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
        rest = _objectWithoutProperties(_ref4, ["key", "dataIndex", "title", "fixed"]);

    var columnKey = genColumnKey(key, rest.index);
    return /*#__PURE__*/React.createElement(DnDItem, {
      index: index,
      id: "".concat(columnKey),
      key: columnKey,
      end: function end(id, targetIndex) {
        move(id, targetIndex);
      }
    }, /*#__PURE__*/React.createElement(CheckboxListItem, {
      setColumnsMap: setColumnsMap,
      columnKey: columnKey || "".concat(index),
      columnsMap: columnsMap,
      title: title,
      fixed: fixed,
      className: className
    }));
  });
  return /*#__PURE__*/React.createElement(DndProvider, {
    backend: Backend
  }, showTitle && /*#__PURE__*/React.createElement("span", {
    className: "".concat(className, "-list-title")
  }, listTitle), listDom);
};

var GroupCheckboxList = function GroupCheckboxList(_ref5) {
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
  return /*#__PURE__*/React.createElement("div", {
    className: classNames("".concat(className, "-list"), _defineProperty({}, "".concat(className, "-list-group"), showRight || showLeft))
  }, /*#__PURE__*/React.createElement(CheckboxList, {
    title: intl.getMessage('tableToolBar.leftFixedTitle', '固定在左侧'),
    list: leftList,
    className: className
  }), /*#__PURE__*/React.createElement(CheckboxList, {
    list: list,
    title: intl.getMessage('tableToolBar.noFixedTitle', '不固定'),
    showTitle: showLeft || showRight,
    className: className
  }), /*#__PURE__*/React.createElement(CheckboxList, {
    title: intl.getMessage('tableToolBar.rightFixedTitle', '固定在右侧'),
    list: rightList,
    className: className
  }));
};

var ColumnSetting = function ColumnSetting(props) {
  var counter = Container.useContainer();
  var localColumns = props.columns || counter.columns || [];
  var columnsMap = counter.columnsMap,
      setColumnsMap = counter.setColumnsMap,
      setSortKeyColumns = counter.setSortKeyColumns;
  /**
   * 设置全部选中，或全部未选中
   * @param show
   */

  var setAllSelectAction = function setAllSelectAction() {
    var show = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
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

  var _useContext = useContext(ConfigContext),
      getPrefixCls = _useContext.getPrefixCls;

  var className = getPrefixCls('pro-table-column-setting');
  var toolBarClassName = getPrefixCls('pro-table-toolbar');
  return /*#__PURE__*/React.createElement(_Popover, {
    arrowPointAtCenter: true,
    title: /*#__PURE__*/React.createElement("div", {
      className: "".concat(className, "-title")
    }, /*#__PURE__*/React.createElement(_Checkbox, {
      indeterminate: indeterminate,
      checked: selectedKeys.length === 0 && selectedKeys.length !== localColumns.length,
      onChange: function onChange(e) {
        if (e.target.checked) {
          setAllSelectAction();
        } else {
          setAllSelectAction(false);
        }
      }
    }, intl.getMessage('tableToolBar.columnDisplay', '列展示')), /*#__PURE__*/React.createElement("a", {
      onClick: function onClick() {
        setColumnsMap({});
        setSortKeyColumns([]);
      }
    }, intl.getMessage('tableToolBar.reset', '重置'))),
    overlayClassName: "".concat(className, "-overlay"),
    trigger: "click",
    placement: "bottomRight",
    content: /*#__PURE__*/React.createElement(GroupCheckboxList, {
      className: className,
      localColumns: localColumns
    })
  }, /*#__PURE__*/React.createElement("span", {
    className: "".concat(toolBarClassName, "-item-icon")
  }, /*#__PURE__*/React.createElement(_Tooltip, {
    title: intl.getMessage('tableToolBar.columnSetting', '列设置')
  }, /*#__PURE__*/React.createElement(SettingOutlined, null))));
};

export default ColumnSetting;