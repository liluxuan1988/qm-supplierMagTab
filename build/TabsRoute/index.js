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

var _BaseInfo = require('./BaseInfo');

var _BaseInfo2 = _interopRequireDefault(_BaseInfo);

var _ContactInfo = require('./ContactInfo');

var _ContactInfo2 = _interopRequireDefault(_ContactInfo);

var _FactoryInfo = require('./FactoryInfo');

var _FactoryInfo2 = _interopRequireDefault(_FactoryInfo);

var _FixedPoint = require('./FixedPoint');

var _FixedPoint2 = _interopRequireDefault(_FixedPoint);

var _MaterialGroup = require('./MaterialGroup');

var _MaterialGroup2 = _interopRequireDefault(_MaterialGroup);

var _CustomerCapacity = require('./CustomerCapacity');

var _CustomerCapacity2 = _interopRequireDefault(_CustomerCapacity);

var _PersonPerformance = require('./PersonPerformance');

var _PersonPerformance2 = _interopRequireDefault(_PersonPerformance);

var _SupplierTab = require('../SupplierTab');

var _SupplierTab2 = _interopRequireDefault(_SupplierTab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var TabPane = _tinperBee.Tabs.TabPane;

var TabsRoute = function (_Component) {
    _inherits(TabsRoute, _Component);

    function TabsRoute(props) {
        _classCallCheck(this, TabsRoute);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.tabsOnChange = function (n) {
            _this.setState({
                // activePage: 1,
                // activeKey: n
            });
        };

        _this.routeSave = function () {
            _this.PersonPerformanceContext.save();
        };

        _this.onRef = function (ref) {
            _this.PersonPerformanceContext = ref;
        };

        _this.onButtonClick = function (n) {
            _this.props.MainContent.getFooterMsg(_this, "2");
        };

        _this.onNoButtonClick = function (n) {
            console.log(n);
            //只有 第一个页面需要有保存按钮 msg  值为 0   其它所有页面的都为2 为只显示 关闭按钮
            if (n != 7) {
                {
                    _this.props.SupplierTab.getNoSaveMsg(_this, "0");
                }
            } else {
                {
                    _this.props.SupplierTab.getNoSaveMsg(_this, "2");
                }
            }
        };

        _this.state = {
            codeParamsType: { type: "employeeType", emptyHeader: "true" },
            codeParamsTsDefault: { type: "isDefault", emptyHeader: "true" },
            statusParams: { type: "specialGroupCode", emptyHeader: "false" },
            supplierCode: "",
            OptionsList: []
        };
        return _this;
    }

    TabsRoute.prototype.componentDidMount = function componentDidMount() {
        this.props.onRef(this);
        this.setState({
            supplierCode: this.props.supplierCode
        });
        // actions.supplierRouter.getEmployeeTypeSelect(this.state.codeParamsType);
        // actions.supplierRouter.getEmployeeIsDefaultSelect(this.state.codeParamsTsDefault)
    };

    TabsRoute.prototype.componentWillMount = function componentWillMount() {
        var _this2 = this;

        _mirrorx.actions.supplierRouter.getSelectOptionsList(this.state.statusParams).then(function (result) {
            console.log(result);
            _this2.setState({
                OptionsList: result.data
            });
        });
    };
    /**
     * 页签切换
     */


    // renderTabsItem = (tableData, item, index) => {
    //     return (
    //         <TabPane className="" tab={<span><Icon type={item.iconStr}></Icon>{item.title}</span>} >
    //             {/*{ item.key === '1' ? <BaseInfo panelTitle={item.panelTitle}/> : ''}*/}
    //          </TabPane>
    //     )
    // };
    TabsRoute.prototype.render = function render() {
        var props = this.props;
        // let activeKey =   this.props.showEdit ?  '1': '0';
        var activeKey = '1';
        return _react2["default"].createElement(
            'div',
            null,
            _react2["default"].createElement(
                _tinperBee.Tabs
                // 默认是第一个
                ,
                { defaultActiveKey: activeKey,
                    className: 'Tabs-routes',
                    onTabClick: this.onNoButtonClick
                },
                _react2["default"].createElement(
                    TabPane,
                    { tab: '\u4F01\u4E1A\u57FA\u672C\u4FE1\u606F', key: '1' },
                    _react2["default"].createElement(_BaseInfo2["default"], _extends({}, props, { panelTitle: '\u4F9B\u5E94\u5546\u767B\u8BB0\u4FE1\u606F' })),
                    ' '
                ),
                _react2["default"].createElement(
                    TabPane,
                    { tab: '\u4F01\u4E1A\u8054\u7CFB\u4EBA', key: '2' },
                    _react2["default"].createElement(_ContactInfo2["default"], props)
                ),
                _react2["default"].createElement(
                    TabPane,
                    { tab: '\u5B50\u516C\u53F8\u53CA\u5DE5\u5382', key: '3' },
                    _react2["default"].createElement(_FactoryInfo2["default"], props)
                ),
                _react2["default"].createElement(
                    TabPane,
                    { tab: '\u4E3B\u8981\u4EA7\u54C1\u53CA\u5BA2\u6237\u3001\u4EA7\u80FD', key: '4' },
                    _react2["default"].createElement(_CustomerCapacity2["default"], props)
                ),
                _react2["default"].createElement(
                    TabPane,
                    { tab: '\u6750\u6599\u7EC4', key: '5' },
                    ' ',
                    _react2["default"].createElement(_MaterialGroup2["default"], props),
                    ' '
                ),
                _react2["default"].createElement(
                    TabPane,
                    { tab: '\u5B9A\u70B9\u4FE1\u606F', key: '6' },
                    _react2["default"].createElement(_FixedPoint2["default"], props),
                    ' '
                ),
                this.props.showEdit ? "" : _react2["default"].createElement(
                    TabPane,
                    { tab: '\u4FE1\u606F\u7F16\u8F91', key: '7' },
                    _react2["default"].createElement(_PersonPerformance2["default"], _extends({}, props, { OptionsList: this.state.OptionsList, onRef: this.onRef })),
                    ' '
                )
            )
        );
    };

    return TabsRoute;
}(_react.Component);

exports["default"] = (0, _mirrorx.connect)(function (state) {
    return state.supplierRouter;
})(TabsRoute);
module.exports = exports['default'];