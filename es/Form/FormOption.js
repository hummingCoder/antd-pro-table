import "antd/es/space/style";
import _Space from "antd/es/space";
import "antd/es/button/style";
import _Button from "antd/es/button";
import React from 'react';

/**
 * FormFooter 的组件，可以自动进行一些配置
 * @param props
 */
var FormOption = function FormOption(props) {
  var searchConfig = props.searchConfig,
      setCollapse = props.setCollapse,
      collapse = props.collapse,
      type = props.type,
      form = props.form,
      submit = props.submit,
      showCollapseButton = props.showCollapseButton,
      _props$onReset = props.onReset,
      onReset = _props$onReset === void 0 ? function () {} : _props$onReset;
  var isForm = type === 'form';
  var searchText = searchConfig.searchText,
      submitText = searchConfig.submitText,
      resetText = searchConfig.resetText,
      collapseRender = searchConfig.collapseRender,
      optionRender = searchConfig.optionRender;

  if (optionRender === false) {
    return null;
  }

  if (optionRender) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, optionRender(searchConfig, props));
  }

  return /*#__PURE__*/React.createElement(_Space, null, /*#__PURE__*/React.createElement(_Button, {
    onClick: function onClick() {
      form.resetFields();
      onReset();

      if (!isForm) {
        submit();
      }
    }
  }, resetText), /*#__PURE__*/React.createElement(_Button, {
    type: "primary",
    htmlType: "submit",
    onClick: function onClick() {
      return submit();
    }
  }, isForm ? submitText : searchText), !isForm && showCollapseButton && /*#__PURE__*/React.createElement("a", {
    onClick: function onClick() {
      setCollapse(!collapse);
    }
  }, collapseRender && collapseRender(collapse)));
};

export default FormOption;