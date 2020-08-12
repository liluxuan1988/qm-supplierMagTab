'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _tinperBee = require('tinper-bee');

require('bee-complex-grid/build/Grid.css');

var _ = require('static/images/headerIcon/BasicArchives/3.svg');

var _2 = _interopRequireDefault(_);

var _Btns = require('components/Btns');

var _Btns2 = _interopRequireDefault(_Btns);

var _TabsRoute = require('./TabsRoute');

var _TabsRoute2 = _interopRequireDefault(_TabsRoute);

require('./index.less');

var _mirrorx = require('mirrorx');

var _mirrorx2 = _interopRequireDefault(_mirrorx);

var _model = require('./router/model');

var _model2 = _interopRequireDefault(_model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @title EditGrid 编辑表格
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description disabled 参数控制是否可编辑，onChange 方法是表格数据更改后的回调函数，onValidate 方法用于提交前的数据校验。
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


// 数据模型引入


// 数据和组件UI关联、绑定
_mirrorx2["default"].model(_model2["default"]);

var modalResize = {
    max: true,
    bodyHeight: 0,
    bodyWidth: 0,
    tableHeight: 570,
    modalWidth: 1200
};

var SupplierTab = function (_Component) {
    _inherits(SupplierTab, _Component);

    function SupplierTab(props) {
        _classCallCheck(this, SupplierTab);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.onRef = function (ref) {
            _this.TabrouteContent = ref;
        };

        _this.save = function (e) {
            _this.TabrouteContent.routeSave();
        };

        _this.getChildrenMsg = function (result, msg) {
            // console.log(result, msg)
            // 很奇怪这里的result就是子组件那bind的第一个参数this，msg是第二个参数
            _this.setState({
                showModal: msg
            });
        };

        _this.getNoSaveMsg = function (result, msg) {
            // console.log(result, msg)
            // 很奇怪这里的result就是子组件那bind的第一个参数this，msg是第二个参数
            _this.setState({
                btnFlag: msg
            });
        };

        _this.close = function () {
            _this.setState({
                showModal: false
            });
            _this.props.MainContent.getCloseMsg(_this, false);
        };

        _this.onRef1 = function (ref) {
            _this.searchForm = ref;
        };

        _this.clickHeaderIcon = function () {
            var headerIconOpen = !_this.state.headerIconOpen;
            var headerIcon = headerIconOpen ? 'uf uf-triangle-down' : 'uf uf-triangle-right';
            _this.setState({ headerIconOpen: headerIconOpen, headerIcon: headerIcon, open: !_this.state.open });
        };

        _this.state = _extends({
            filterable: false,
            open: true,
            ChildTapOpen: true,
            activePage: 1,
            showButton: false,
            showModal: false,
            detailObj: {}, // 存储关联数据信息
            selectedValue: "1",
            selectStatusParams: []
        }, modalResize, { //modal 最大化按钮
            childrenMsg: false,
            openPanel: true,
            btnFlag: "0",
            supplierCode: '',
            statusParams: { type: "supplierStatus", emptyHeader: "true" }

            //combobox---------------------------------------------------
        });
        _this.btnFlag = '0';
        return _this;
    }

    SupplierTab.prototype.componentWillMount = function componentWillMount() {
        this.setState({
            showModal: this.props.showModal,
            supplierCode: this.props.supplierCode
        });
    };

    SupplierTab.prototype.componentDidMount = function componentDidMount() {}
    // this.props.onRef(this);

    /**
     * 加载列表数据
     * @param {*} param 查询信息
     */
    ;
    /**
     * 页码修改
     * @param pageIndex
     */
    /**
    * 页大小修改
    * @param {*} index 页码
    * @param {*} num 页大小
    */
    /**
     * 关闭窗口
     */


    SupplierTab.prototype.open = function open() {
        this.setState({
            showModal: true
        });
    };

    SupplierTab.prototype.onClick = function onClick() {
        this.mainTable["export"]();
    };

    //最大化点击事件
    SupplierTab.prototype.setMax = function setMax() {
        this.setState({
            max: !this.state.max
        });
    };

    SupplierTab.prototype.render = function render() {
        var _this2 = this;

        var btnFlag = this.state.btnFlag;
        var close = this.props.close;
        var _state = this.state,
            max = _state.max,
            modalHeight = _state.modalHeight,
            modalWidth = _state.modalWidth,
            bodyHeight = _state.bodyHeight,
            bodyWidth = _state.bodyWidth;

        if (max) {
            console.log(window);
            modalHeight = window.document.body.clientHeight - 60;
            modalWidth = window.document.body.clientWidth - 250;
            bodyHeight = window.document.body.clientHeight - 100;
            bodyWidth = window.document.body.clientWidth - 50;
        }
        var _state2 = this.state,
            headerIconOpen = _state2.headerIconOpen,
            headerIcon = _state2.headerIcon,
            headerChildIcon = _state2.headerChildIcon,
            filePanelTitle = _state2.filePanelTitle,
            fileShowLoading = _state2.fileShowLoading;

        var headerCls = headerIconOpen ? '' : 'close';
        return _react2["default"].createElement(
            _tinperBee.Modal,
            {
                show: this.state.showModal //开启按钮
                // onHide={this.close}            //关闭按钮
                , onHide: function onHide() {
                    close();
                },
                backdropClosable: false,
                autoFocus: true
                // width="1600"
                // height="1200"
                , width: modalWidth,
                height: modalHeight,
                ref: function ref(_ref) {
                    return _this2.modal = _ref;
                },
                searchForm: this.searchForm
            },
            _react2["default"].createElement(
                _tinperBee.Modal.Header,
                { closeButton: true },
                _react2["default"].createElement(
                    _tinperBee.Modal.Title,
                    null,
                    '\u4F9B\u5E94\u5546\u7BA1\u7406',
                    _react2["default"].createElement(
                        'button',
                        { fieldid: 'modalResize', type: 'button', className: 'modal-resize', 'aria-label': 'modalResize' },
                        _react2["default"].createElement(
                            'span',
                            { 'aria-hidden': 'true' },
                            _react2["default"].createElement('i', { className: max ? 'iconfont icon-zuixiaohua2' : 'iconfont icon-zuidahua1', onClick: function onClick(e) {
                                    return _this2.setMax();
                                } })
                        )
                    )
                )
            ),
            _react2["default"].createElement(
                _tinperBee.Modal.Body,
                null,
                _react2["default"].createElement(_TabsRoute2["default"], { onRef: this.onRef, supplierCode: this.state.supplierCode, showEdit: this.props.showEdit, SupplierTab: this })
            ),
            btnFlag == 2 ? _react2["default"].createElement(
                _tinperBee.Modal.Footer,
                null,
                _react2["default"].createElement(
                    _tinperBee.Button,
                    { colors: 'primary', onClick: this.save, style: { marginRight: 8 } },
                    '\u4FDD\u5B58'
                ),
                _react2["default"].createElement(
                    _tinperBee.Button,
                    { onClick: function onClick() {
                            close();
                        }, colors: 'secondary', style: { marginRight: 8 } },
                    '\u5173\u95ED'
                )
            ) : _react2["default"].createElement(
                _tinperBee.Modal.Footer,
                null,
                _react2["default"].createElement(
                    _tinperBee.Button,
                    { onClick: function onClick() {
                            close();
                        }, colors: 'secondary', style: { marginRight: 8 } },
                    '\u5173\u95ED'
                )
            )
        );
    };

    return SupplierTab;
}(_react.Component);

exports["default"] = (0, _mirrorx.connect)(function (state) {
    return state.supplierRouter;
})(SupplierTab);
module.exports = exports['default'];