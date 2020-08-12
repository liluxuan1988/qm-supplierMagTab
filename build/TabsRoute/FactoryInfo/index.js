'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mirrorx = require('mirrorx');

var _tinperBee = require('tinper-bee');

var _acHeader = require('ac-header');

var _acHeader2 = _interopRequireDefault(_acHeader);

var _utils = require('utils');

require('./index.less');

var _FactoryList = require('./FactoryList');

var _FactoryList2 = _interopRequireDefault(_FactoryList);

var _FactoryListSub = require('./FactoryListSub');

var _FactoryListSub2 = _interopRequireDefault(_FactoryListSub);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var FactoryInfo = function (_Component) {
    _inherits(FactoryInfo, _Component);

    function FactoryInfo(props) {
        _classCallCheck(this, FactoryInfo);

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

        _this.clickHeaderSubIcon = function () {
            var headerSubIconOpen = !_this.state.headerSubIconOpen;
            var headerSubIcon = headerSubIconOpen ? 'uf uf-triangle-down' : 'uf uf-triangle-right';
            _this.setState({ headerSubIconOpen: headerSubIconOpen, headerSubIcon: headerSubIcon });
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
            //工厂信息
            _mirrorx.actions.supplierRouter.getSupplierPlantData(_extends({}, otherParam, param)); // 获取表格数据，如果传入的分页信息可以覆盖默认值
            //子公司信息
            _mirrorx.actions.supplierRouter.getSupplierRelationData(_extends({}, otherParam, param)); // 获取表格数据，如果传入的分页信息可以覆盖默认值
        };

        _this.onRef = function (ref) {
            _this.contactTable = ref;
        };

        _this.onRefSub = function (ref) {
            _this.contactTableSub = ref;
        };

        _this.doAdd = function () {
            _this.contactTable.openModal();
        };

        _this.state = {
            open: true,
            headerChildIconOpen: true, //子表单状态图表
            ChildTapOpen: true,
            headerChildIcon: "uf uf-triangle-down",
            headerIconOpen: true, //表单状态图标
            headerIcon: 'uf uf-triangle-down',
            importLoading: false
            // headerSubIconOpen : true,//表单状态图标
            // headerSubIcon: 'uf uf-triangle-down',
        };
        _this.btnFlag = '0';
        return _this;
    }

    FactoryInfo.prototype.componentWillMount = function componentWillMount() {};

    FactoryInfo.prototype.componentDidMount = function componentDidMount() {
        var serviceCode = (0, _utils.getQueryString)('serviceCode', window.location.href) || (0, _utils.getQueryString)('servicecode', window.location.href);
        // actions.dlSup.getPower({
        //     params: {servicecode: serviceCode},
        //     context: pom.fe.new.ctx
        // });
        this.onLoadData({ supplierCode: this.props.supplierCode }); // 获取查询数据
    };
    /**
     * 加载列表数据
     * @param {*} param 查询信息
     */


    FactoryInfo.prototype.render = function render() {
        var _this2 = this;

        var _props = this.props,
            powerBtns = _props.powerBtns,
            panelTitle = _props.panelTitle,
            panelSubTitle = _props.panelSubTitle;
        var _state = this.state,
            headerIconOpen = _state.headerIconOpen,
            headerIcon = _state.headerIcon,
            headerChildIcon = _state.headerChildIcon;

        var headerCls = headerIconOpen ? '' : 'close';

        return _react2["default"].createElement(
            'div',
            { className: 'factoryInfo' },
            _react2["default"].createElement(
                'div',
                { className: 'table-panel' },
                _react2["default"].createElement(
                    'div',
                    { className: 'table-panel-top' },
                    _react2["default"].createElement(_acHeader2["default"], { className: headerCls, title: _react2["default"].createElement(
                            'span',
                            { onClick: function onClick() {
                                    _this2.clickHeaderIcon();
                                } },
                            _react2["default"].createElement(_tinperBee.Icon, { type: headerIcon }),
                            '\u5B50\u516C\u53F8\u4FE1\u606F'
                        ) }),
                    _react2["default"].createElement(
                        _tinperBee.Panel,
                        { collapsible: true, expanded: this.state.open },
                        _react2["default"].createElement(_FactoryList2["default"], _extends({}, this.props, { onRef: this.onRef, headerIconOpen: this.state.headerIconOpen }))
                    )
                )
            ),
            _react2["default"].createElement(
                'div',
                { className: 'table-panel' },
                _react2["default"].createElement(
                    'div',
                    { className: 'table-panel-top' },
                    _react2["default"].createElement(_acHeader2["default"], { className: headerCls, title: _react2["default"].createElement(
                            'span',
                            { onClick: function onClick() {
                                    _this2.clickChildHeaderIcon();
                                } },
                            _react2["default"].createElement(_tinperBee.Icon, { type: headerChildIcon }),
                            '\u5DE5\u5382\u4FE1\u606F'
                        ) }),
                    _react2["default"].createElement(
                        _tinperBee.Panel,
                        { collapsible: true, expanded: this.state.ChildTapOpen },
                        _react2["default"].createElement(_FactoryListSub2["default"], _extends({}, this.props, { onRef: this.onRefSub, headerSubIconOpen: this.state.headerSubIconOpen }))
                    )
                )
            )
        );
    };

    return FactoryInfo;
}(_react.Component);

exports["default"] = (0, _mirrorx.connect)(function (state) {
    return state.supplierRouter;
})(FactoryInfo);
module.exports = exports['default'];