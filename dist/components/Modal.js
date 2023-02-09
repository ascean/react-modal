"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.symbol.description.js");
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const wrapperStyles = {
  zIndex: 999,
  position: 'fixed',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  top: 0,
  left: 0,
  width: '100%',
  margin: '0 auto',
  height: '100vh',
  backgroundColor: 'rgba(255, 255, 255, 0.8)'
};
const modalStyles = {
  maxWidth: '500px',
  border: '1px solid #ddd',
  backgroundColor: '#eee',
  margin: '0 auto',
  zIndex: 1,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  padding: '50px',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  fontSize: '0.8rem',
  boxShadow: '5px 15px 33px 14px rgba(120, 120, 120, 0.089)'
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
const xCloseBtnStyles = {
  position: 'absolute',
  top: 10,
  right: 10,
  fontSize: '16px',
  fontWeight: 'bold',
  color: 'black',
  border: 'none',
  cursor: 'pointer',
  textTransform: 'uppercase'
};
const Modal = _ref => {
  let {
    children,
    show,
    onClickCloseBtn,
    bEscapeClose = true,
    bClicWrapperClose = true,
    xButton = false,
    backgroundStyles = {},
    buttonStyles = {}
  } = _ref;
  const wrapper = document.getElementById("wrapper");
  const closeOnEscape = e => {
    if (!bEscapeClose) return;
    if ((e.charcode || e.keyCode) === 27) {
      document.body.removeEventListener("keydown", closeOnEscape);
      onClickCloseBtn(e);
    }
  };
  const closeOnWrapper = () => {
    if (!bClicWrapperClose) return;
    wrapper.removeEventListener("click", closeOnWrapper);
    onClickCloseBtn();
  };
  (0, _react.useEffect)(() => {
    if (bEscapeClose) document.body.addEventListener("keydown", closeOnEscape);
    if (bClicWrapperClose) {
      if (wrapper) wrapper.addEventListener("click", closeOnWrapper);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, show && /*#__PURE__*/_react.default.createElement("div", {
    id: "wrapper",
    style: wrapperStyles
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: _objectSpread(_objectSpread({}, modalStyles), backgroundStyles)
  }, xButton ? /*#__PURE__*/_react.default.createElement("button", {
    onClick: onClickCloseBtn,
    style: xCloseBtnStyles
  }, "X") : "", children, /*#__PURE__*/_react.default.createElement("div", {
    style: closeBtnContainerStyles
  }, /*#__PURE__*/_react.default.createElement("button", {
    onClick: onClickCloseBtn,
    style: _objectSpread(_objectSpread({}, closeBtnStyles), buttonStyles)
  }, "CLOSE")))));
};
var _default = Modal;
exports.default = _default;