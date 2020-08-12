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

var BaseHeaderSub = function (_Component) {
    _inherits(BaseHeaderSub, _Component);

    function BaseHeaderSub(props) {
        _classCallCheck(this, BaseHeaderSub);

        return _possibleConstructorReturn(this, _Component.call(this, props));
    }

    BaseHeaderSub.prototype.componentDidMount = function componentDidMount() {
        var serviceCode = (0, _utils.getQueryString)('serviceCode', window.location.href) || (0, _utils.getQueryString)('servicecode', window.location.href);
        // actions.dlSup.getPower({
        //     params:{
        //         servicecode:serviceCode,
        //     },
        //     context:pom.fe.new.ctx
        // });
    };

    BaseHeaderSub.prototype.render = function render() {
        var _props = this.props,
            doSave = _props.doSave,
            powerBtns = _props.powerBtns,
            clickHeaderSubIcon = _props.clickHeaderSubIcon,
            headerSubIconOpen = _props.headerSubIconOpen,
            headerSubIcon = _props.headerSubIcon,
            panelSubTitle = _props.panelSubTitle;

        var headerCls = headerSubIconOpen ? '' : 'close';

        return _react2["default"].createElement(_acHeader2["default"], { className: headerCls, title: _react2["default"].createElement(
                'span',
                { onClick: function onClick() {
                        clickHeaderSubIcon();
                    } },
                _react2["default"].createElement(_tinperBee.Icon, { type: headerSubIcon }),
                panelSubTitle
            ) });
    };

    return BaseHeaderSub;
}(_react.Component);

exports["default"] = BaseHeaderSub;
module.exports = exports['default'];