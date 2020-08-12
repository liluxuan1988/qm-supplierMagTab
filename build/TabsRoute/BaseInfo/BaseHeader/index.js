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

var _acUpload = require('ac-upload');

var _acUpload2 = _interopRequireDefault(_acUpload);

require('./index.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } //加载组件


var BaseHeader = function (_Component) {
    _inherits(BaseHeader, _Component);

    function BaseHeader(props) {
        _classCallCheck(this, BaseHeader);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.searchFileNameChange = function (value) {
            _this.setState({ searchFileName: value });
        };

        _this.searchAttachment = function (attachmentId) {
            //查询条件
        };

        _this.state = {
            open: false,
            searchFileName: "",
            urlList: {
                list: pom.fe["new"].ctx + '/attachment/getAttachmentList', //文件列表
                "delete": pom.fe["new"].ctx + '/attachment/deleteAttachment', //删除
                upload: pom.fe["new"].ctx + '/attachment/uploadAttachment', //上传
                info: pom.fe["new"].ctx + '/attachment/getAttachmentInfo', //文件信息
                download: pom.fe["new"].ctx + '/attachment/downloadAttachment' //下载
            }
        };
        return _this;
    }

    BaseHeader.prototype.componentDidMount = function componentDidMount() {};
    //输入值改变

    //点击查询按钮查询符合条件的附件


    BaseHeader.prototype.render = function render() {
        var _props = this.props,
            headerCls = _props.headerCls,
            clickChildHeaderIcon = _props.clickChildHeaderIcon,
            headerChildIcon = _props.headerChildIcon;

        return _react2["default"].createElement(_acHeader2["default"], { className: headerCls, title: _react2["default"].createElement(
                'span',
                { onClick: function onClick() {
                        return clickChildHeaderIcon();
                    } },
                _react2["default"].createElement(_tinperBee.Icon, { type: headerChildIcon }),
                '\u652F\u6301\u6750\u6599'
            ) });
    };

    return BaseHeader;
}(_react.Component);

exports["default"] = BaseHeader;
module.exports = exports['default'];