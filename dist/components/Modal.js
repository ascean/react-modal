"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const wrapperStyles = {
  width: '50%',
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)'
};
const modalStyles = {
  maxWidth: '500px',
  border: '1px solid #ddd',
  backgroundColor: '#eee',
  margin: '0 auto',
  zIndex: 1,
  position: 'relative',
  padding: '50px',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  fontSize: '0.9rem'
};
const closeBtnContainerStyles = {
  display: 'flex'
};
const closeBtnStyles = {
  width: '150px',
  margin: '0 auto',
  background: '#5C6E08',
  color: 'white',
  border: '1px solid #5C6E08',
  borderRadius: '5px',
  height: '40px',
  cursor: 'pointer',
  textTransform: 'uppercase',
  textAlign: 'center'
};
const Modal = _ref => {
  let {
    children,
    show,
    onClickCloseBtn
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, show && /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyles
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: modalStyles
  }, children, /*#__PURE__*/_react.default.createElement("div", {
    style: closeBtnContainerStyles
  }, /*#__PURE__*/_react.default.createElement("button", {
    onClick: onClickCloseBtn,
    style: closeBtnStyles
  }, "CANCEL")))));
};
var _default = Modal;
exports.default = _default;