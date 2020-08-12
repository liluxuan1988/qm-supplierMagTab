"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _acGridcn = require("ac-gridcn");

var _tinperBee = require("tinper-bee");

var _acHeader = require("ac-header");

var _acHeader2 = _interopRequireDefault(_acHeader);

var _CapacityInformation = require("./CapacityInformation");

var _CapacityInformation2 = _interopRequireDefault(_CapacityInformation);

var _MainProducts = require("./MainProducts");

var _MainProducts2 = _interopRequireDefault(_MainProducts);

var _mirrorx = require("mirrorx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var CustomerCapacity = function (_Component) {
    _inherits(CustomerCapacity, _Component);

    function CustomerCapacity(props) {
        _classCallCheck(this, CustomerCapacity);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.clickHeaderIcon = function () {
            var headerIconOpen = !_this.state.headerIconOpen;
            var headerIcon = headerIconOpen ? 'uf uf-triangle-down' : 'uf uf-triangle-right';
            _this.setState({ headerIconOpen: headerIconOpen, headerIcon: headerIcon, open: !_this.state.open });
        };

        _this.clickChildHeaderIcon = function () {
            var headerChildIconOpen = !_this.state.headerChildIconOpen;
            var headerChildIcon = headerChildIconOpen ? 'uf uf-triangle-down' : 'uf uf-triangle-right';
            _this.setState({ headerChildIconOpen: headerChildIconOpen, headerChildIcon: headerChildIcon, ChildTapOpen: !_this.state.ChildTapOpen });
        };

        _this.onLoadData = function () {
            var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var queryObj = _this.props.queryObj;
            var pageSize = queryObj.pageSize; // 获取分页值

            if (pageSize > 50) {
                // 对分页条数为 all 处理
                pageSize = 1;
            }
            var otherParam = { pageSize: pageSize, pageIndex: 0 }; // 其他查询条件
            _mirrorx.actions.supplierRouter.getSupplierMainproductionData(_extends({}, otherParam, param)); // 获取表格数据，如果传入的分页信息可以覆盖默认值
            _mirrorx.actions.supplierRouter.getSupplierProductionData(_extends({}, otherParam, param)); // 获取表格数据，如果传入的分页信息可以覆盖默认值
        };

        _this.state = {
            headerIconOpen: true, //表单状态图标
            headerIcon: 'uf uf-triangle-down',
            open: true,
            headerChildIconOpen: true, //子表单状态图表
            headerChildIcon: "uf uf-triangle-down",
            ChildTapOpen: true
        };
        return _this;
    }

    CustomerCapacity.prototype.componentDidMount = function componentDidMount() {
        this.onLoadData({ supplierCode: this.props.supplierCode }); // 获取查询数据
    };

    CustomerCapacity.prototype.render = function render() {
        var _this2 = this;

        var props = this.props;

        var _state = this.state,
            headerIconOpen = _state.headerIconOpen,
            headerIcon = _state.headerIcon,
            headerChildIcon = _state.headerChildIcon;

        var headerCls = headerIconOpen ? '' : 'close';
        return _react2["default"].createElement(
            "div",
            { className: "factoryInfo" },
            _react2["default"].createElement(
                "div",
                { className: "table-panel" },
                _react2["default"].createElement(
                    "div",
                    { className: "table-panel-top" },
                    _react2["default"].createElement(_acHeader2["default"], { className: headerCls, title: _react2["default"].createElement(
                            "span",
                            { onClick: function onClick() {
                                    _this2.clickHeaderIcon();
                                } },
                            _react2["default"].createElement(_tinperBee.Icon, { type: headerIcon }),
                            "\u4E3B\u8981\u4EA7\u54C1\u53CA\u5BA2\u6237"
                        ) }),
                    _react2["default"].createElement(
                        _tinperBee.Panel,
                        { collapsible: true, expanded: this.state.open },
                        _react2["default"].createElement(_MainProducts2["default"], props)
                    )
                )
            ),
            _react2["default"].createElement(
                "div",
                { className: "table-panel" },
                _react2["default"].createElement(
                    "div",
                    { className: "table-panel-top" },
                    _react2["default"].createElement(_acHeader2["default"], { className: headerCls, title: _react2["default"].createElement(
                            "span",
                            { onClick: function onClick() {
                                    _this2.clickChildHeaderIcon();
                                } },
                            _react2["default"].createElement(_tinperBee.Icon, { type: headerChildIcon }),
                            "\u4EA7\u80FD\u4FE1\u606F"
                        ) }),
                    _react2["default"].createElement(
                        _tinperBee.Panel,
                        { collapsible: true, expanded: this.state.ChildTapOpen },
                        _react2["default"].createElement(_CapacityInformation2["default"], _extends({ rmation: true }, props))
                    )
                )
            )
        );
    };

    return CustomerCapacity;
}(_react.Component);

exports["default"] = (0, _mirrorx.connect)(function (state) {
    return state.supplierRouter;
})(CustomerCapacity);
module.exports = exports["default"];