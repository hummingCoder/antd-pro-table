"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _proField = _interopRequireDefault(require("@ant-design/pro-field"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 根据不同的类型来转化数值
 * @param text
 * @param valueType
 */
var defaultRenderText = function defaultRenderText(text, valueType, index, item, columnEmptyText, props) {
  // 如果 valueType === text ，没必要多走一次 render
  if ((!valueType || valueType === 'text') && !(props === null || props === void 0 ? void 0 : props.valueEnum)) {
    return text;
  }

  if (typeof valueType === 'function' && item) {
    var value = valueType(item);

    if (!value) {
      return columnEmptyText;
    }

    return defaultRenderText(text, value, index, props);
  }

  return /*#__PURE__*/_react.default.createElement(_proField.default, _extends({}, props, {
    text: valueType === 'index' || valueType === 'indexBorder' ? index : text,
    mode: "read",
    columnEmptyText: columnEmptyText,
    render: undefined,
    renderFormItem: undefined,
    valueType: valueType
  }));
};

var _default = defaultRenderText;
exports.default = _default;