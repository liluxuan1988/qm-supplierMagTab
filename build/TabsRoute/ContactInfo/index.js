'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mirrorx = require('mirrorx');

var _tinperBee = require('tinper-bee');

require('./index.less');

var _ContactList = require('./ContactList');

var _ContactList2 = _interopRequireDefault(_ContactList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var ContactInfo = function (_Component) {
    _inherits(ContactInfo, _Component);

    function ContactInfo(props) {
        _classCallCheck(this, ContactInfo);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.onLoadData = function () {
            var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var queryObj = _this.props.queryObj;
            var pageSize = queryObj.pageSize; // 获取分页值

            if (pageSize > 50) {
                // 对分页条数为 all 处理
                pageSize = 1;
            }
            var otherParam = { pageSize: pageSize, pageIndex: 0 }; // 其他查询条件
            _mirrorx.actions.supplierRouter.getSupplierEmployeeData(_extends({}, otherParam, param)); // 获取表格数据，如果传入的分页信息可以覆盖默认值
        };

        _this.clickHeaderIcon = function () {
            var headerIconOpen = !_this.state.headerIconOpen;
            var headerIcon = headerIconOpen ? 'uf uf-triangle-down' : 'uf uf-triangle-right';
            _this.setState({ headerIconOpen: headerIconOpen, headerIcon: headerIcon });
        };

        _this.onRef = function (ref) {
            _this.contactTable = ref;
        };

        _this.doAdd = function () {};

        _this.state = {
            headerIconOpen: true, //表单状态图标
            headerIcon: 'uf uf-triangle-down',

            selectTypeOptions: [],
            selectTsDefaultOptions: [],
            importLoading: false
        };
        _this.btnFlag = '0';
        return _this;
    }

    ContactInfo.prototype.componentWillMount = function componentWillMount() {};

    ContactInfo.prototype.componentDidMount = function componentDidMount() {
        this.onLoadData({ supplierCode: this.props.supplierCode }); // 获取查询数据
    };

    ContactInfo.prototype.render = function render() {
        var props = this.props;

        var Employeeselect = this.props.EmployeeType;
        var IsDefaultelect = this.props.IsDefault;

        return _react2["default"].createElement(
            'div',
            { className: 'tab_contable' },
            _react2["default"].createElement(_tinperBee.Loading, { fullScreen: true, showBackDrop: true }),
            _react2["default"].createElement(_ContactList2["default"], _extends({}, props, { onRef: this.onRef }))
        );
    };

    return ContactInfo;
}(_react.Component);

exports["default"] = (0, _mirrorx.connect)(function (state) {
    return state.supplierRouter;
})(ContactInfo);
module.exports = exports['default'];