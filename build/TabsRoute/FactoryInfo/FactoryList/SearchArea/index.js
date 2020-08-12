'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _tinperBee = require('tinper-bee');

var _beeDatepicker = require('bee-datepicker');

var _beeDatepicker2 = _interopRequireDefault(_beeDatepicker);

var _acSearchCn = require('ac-search-cn');

var _acSearchCn2 = _interopRequireDefault(_acSearchCn);

var _index = require('@yonyou/mdf-refer/lib/index');

var _index2 = _interopRequireDefault(_index);

var _Month = require('components/SelectMonth/Month');

var _Month2 = _interopRequireDefault(_Month);

var _zh_CN = require('rc-calendar/lib/locale/zh_CN');

var _zh_CN2 = _interopRequireDefault(_zh_CN);

require('./index.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Option = _tinperBee.Select.Option;
var YearPicker = _beeDatepicker2["default"].YearPicker;

var formatYearRule = "YYYY"; // 格式化年
var formatDateRule = "YYYY-MM-DD HH:mm:ss"; // 格式化日期


var SearchArea = function (_Component) {
    _inherits(SearchArea, _Component);

    function SearchArea() {
        var _temp, _this, _ret;

        _classCallCheck(this, SearchArea);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.searchReset = function () {
            _this.props.form.resetFields();
            _this.modelOrg.setValue(null, true);
        }, _this.handleSearch = function (e) {
            e.preventDefault();
            _this.props.onSearch(); // 父组件查询方法
        }, _this.getSearchValue = function () {
            var param = {};
            _this.props.form.validateFields(function (err, values) {
                for (var key in values) {
                    if (values[key]) {
                        // 对空数据过滤
                        param[key] = values[key];
                        // if (key === 'dept') { // 参照处理
                        //     param[key] = param[key].id;
                        // }
                    }
                }
            });
            return param;
        }, _this.getTooltip = function (value) {
            if (value) {
                return (0, _moment2["default"])(value).format(formatYearRule);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    SearchArea.prototype.componentDidMount = function componentDidMount() {
        this.props.onRef(this); // 在父组件上绑定子组件方法
    };

    // 获取参照的tooltip展示值


    SearchArea.prototype.render = function render() {
        var _props$form = this.props.form,
            getFieldProps = _props$form.getFieldProps,
            getFieldValue = _props$form.getFieldValue;

        return _react2["default"].createElement(
            _acSearchCn2["default"],
            {
                search: this.handleSearch,
                reset: this.searchReset
            },
            _react2["default"].createElement(
                _acSearchCn.FormItem,
                { label: '\u767B\u9646\u5E10\u53F7' },
                _react2["default"].createElement(_tinperBee.FormControl, getFieldProps('loginAccount', {
                    initialValue: ''
                }))
            ),
            _react2["default"].createElement(
                _acSearchCn.FormItem,
                { label: '\u8054\u7CFB\u4EBA\u59D3\u540D' },
                _react2["default"].createElement(_tinperBee.FormControl, getFieldProps('contactName', {
                    initialValue: ''
                }))
            ),
            _react2["default"].createElement(
                _acSearchCn.FormItem,
                { label: '\u7533\u8BF7\u7C7B\u578B' },
                _react2["default"].createElement(
                    _tinperBee.Select,
                    getFieldProps('contactType'),
                    _react2["default"].createElement(
                        Option,
                        { value: '', key: '' },
                        '\u5168\u90E8'
                    ),
                    _react2["default"].createElement(
                        Option,
                        { value: '0', key: '0' },
                        '\u7B2C\u4E00'
                    ),
                    _react2["default"].createElement(
                        Option,
                        { value: '1', key: '1' },
                        '\u7B2C\u4E8C'
                    )
                )
            ),
            _react2["default"].createElement(
                _acSearchCn.FormItem,
                { label: '\u8054\u7CFB\u4EBA\u624B\u673A' },
                _react2["default"].createElement(_tinperBee.FormControl, getFieldProps('contactTel', {
                    initialValue: ''
                }))
            )
        );
    };

    return SearchArea;
}(_react.Component);

exports["default"] = _tinperBee.Form.createForm()(SearchArea);
module.exports = exports['default'];