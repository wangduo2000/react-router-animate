"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = (function (){
  var _react = _interopRequireDefault(require("react"));
  
  var _reactTransitionGroup = require("react-transition-group");
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
  
  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }
  
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }
  
  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }
  
  function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }
  
  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
  
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
  
  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }
  
  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }
  
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  
  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
  
  return function _default(Comp, animate, where, time) {
    return (
      /*#__PURE__*/
      function (_React$Component) {
        _inherits(_class, _React$Component);
  
        function _class(props) {
          var _this;
  
          _classCallCheck(this, _class);
  
          _this = _possibleConstructorReturn(this, _getPrototypeOf(_class).call(this, props));
          _this.num = 0;
          _this.switchTo = _this.switchTo.bind(_assertThisInitialized(_assertThisInitialized(_this)));
          return _this;
        }
  
        _createClass(_class, [{
          key: "switchTo",
          value: function switchTo(str, animateIn, animateOut) {
            switch (str) {
              case 'rollIn':
                this[animateOut] = 'rollOut';
                break;
  
              case 'lightSpeedIn':
                this[animateOut] = 'lightSpeedOut';
                break;
  
              case 'hinge':
                this[animateIn] = 'fadeInLeft';
                this[animateOut] = 'hinge';
                break;
  
              default:
            }
          }
        }, {
          key: "render",
          value: function render() {
            var num = this.props.location.state ? this.props.location.state.num : 0,
                animateState = animate ? animate : 'fade',
                animateDirection = ['Right', 'Left'];
  
            switch (animateState) {
              case 'flip':
                animateDirection = ['X', 'Y'];
                break;
  
              case 'rotate':
                animateDirection = ['DownLeft', 'UpLeft'];
                break;
  
              case 'hinge':
              case 'jackInTheBox':
              case 'rollIn':
              case 'rollOut':
              case 'lightSpeedIn':
              case 'lightSpeedOut':
                animateDirection = '';
                break;
  
              default:
                if (Object.prototype.toString.call(where) === "[object Array]") {
                  animateDirection = _toConsumableArray(where);
                }
  
                switch (where) {
                  case undefined:
                  case 'Right':
                  case 'Left':
                    break;
  
                  case 'Up':
                  case 'Down':
                    animateDirection = ['Down', 'Up'];
                    break;
  
                  case 'X':
                  case 'Y':
                    animateDirection = ['X', 'Y'];
                    break;
  
                  default:
                }
  
            }
  
            ;
            this.animateIn = animateState + (animateDirection === '' ? '' : 'In' + animateDirection[0]);
            this.animateIn2 = animateState + (animateDirection === '' ? '' : 'In' + animateDirection[1]);
            this.animateOut = animateState + (animateDirection === '' ? '' : 'Out' + animateDirection[1]);
            this.animateOut2 = animateState + (animateDirection === '' ? '' : 'Out' + animateDirection[0]);
            this.switchTo(this.animateIn, 'animateIn', 'animateOut');
            this.switchTo(this.animateIn2, 'animateIn2', 'animateOut2');
            return _react.default.createElement(_reactTransitionGroup.CSSTransition, {
              in: !!this.props.match,
              classNames: {
                enter: 'animated',
                enterActive: num > this.num ? this.animateIn : this.animateIn2,
                exit: 'animated',
                exitActive: num > this.num ? this.animateOut : this.animateOut2
              },
              timeout: !!time ? typeof time === 'number' ? time : 1000 : 1000,
              mountOnEnter: true,
              unmountOnExit: true,
              toAdd: this.num = !!this.props.location.state ? this.props.location.state.num : 0
            }, _react.default.createElement(Comp, _objectSpread({}, this.props)));
          }
        }]);
  
        return _class;
      }(_react.default.Component)
    );
  };
})()