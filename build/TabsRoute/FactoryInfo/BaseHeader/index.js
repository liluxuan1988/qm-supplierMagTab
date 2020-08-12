'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mirrorx = require('mirrorx');

var _tinperBee = require('tinper-bee');

var _acHeader = require('ac-header');

var _acHeader2 = _interopRequireDefault(_acHeader);

var _Btns = require('components/Btns');

var _Btns2 = _interopRequireDefault(_Btns);

var _utils = require('utils');

require('./index.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var BaseHeader = function (_Component) {
    _inherits(BaseHeader, _Component);

    function BaseHeader(props) {
        _classCallCheck(this, BaseHeader);

        return _possibleConstructorReturn(this, _Component.call(this, props));
    }

    BaseHeader.prototype.componentDidMount = function componentDidMount() {
        var serviceCode = (0, _utils.getQueryString)('serviceCode', window.location.href) || (0, _utils.getQueryString)('servicecode', window.location.href);
        // actions.dlSup.getPower({
        //     params:{
        //         servicecode:serviceCode,
        //     },
        //     context:pom.fe.new.ctx
        // });
    };

    BaseHeader.prototype.render = function render() {
        var _props = this.props,
            doAdd = _props.doAdd,
            powerBtns = _props.powerBtns,
            clickHeaderIcon = _props.clickHeaderIcon,
            headerIconOpen = _props.headerIconOpen,
            headerIcon = _props.headerIcon,
            panelTitle = _props.panelTitle;

        var headerCls = headerIconOpen ? '' : 'close';

        return _react2["default"].createElement(
            _acHeader2["default"],
            { className: headerCls, title: _react2["default"].createElement(
                    'span',
                    { onClick: function onClick() {
                            clickHeaderIcon();
                        } },
                    _react2["default"].createElement(_tinperBee.Icon, { type: headerIcon }),
                    panelTitle
                ) },
            _react2["default"].createElement(_Btns2["default"], { btns: {
                    add: {
                        onClick: function onClick() {
                            doAdd();
                        }
                    },
                    "delete": {
                        onClick: function onClick() {}
                    }
                },
                powerBtns: powerBtns
            })
        );
    };

    return BaseHeader;
}(_react.Component);

exports["default"] = BaseHeader;
module.exports = exports['default'];