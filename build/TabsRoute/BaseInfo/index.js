'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mirrorx = require('mirrorx');

var _tinperBee = require('tinper-bee');

var _utils = require('utils');

require('./index.less');

require('ac-attachment/dist/ac-attachment.css');

var _Btns = require('components/Btns');

var _Btns2 = _interopRequireDefault(_Btns);

var _BaseHeader = require('./BaseHeader');

var _BaseHeader2 = _interopRequireDefault(_BaseHeader);

var _BaseForm = require('./BaseForm');

var _BaseForm2 = _interopRequireDefault(_BaseForm);

var _ChildrenTable = require('./ChildrenTable');

var _ChildrenTable2 = _interopRequireDefault(_ChildrenTable);

var _acHeader = require('ac-header');

var _acHeader2 = _interopRequireDefault(_acHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var BaseInfo = function (_Component) {
    _inherits(BaseInfo, _Component);

    function BaseInfo(props) {
        var _this2 = this;

        _classCallCheck(this, BaseInfo);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.doAdd = function () {};

        _this.onLoadData = function () {
            var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var queryObj = _this.props.queryObj;
            var pageSize = queryObj.pageSize; // 获取分页值

            if (pageSize > 50) {
                // 对分页条数为 all 处理
                pageSize = 1;
            }
            var otherParam = { pageSize: pageSize, pageIndex: 0 }; // 其他查询条件
            _mirrorx.actions.supplierRouter.getSupplierDetailData(_extends({}, param)); // 获取表格数据，如果传入的分页信息可以覆盖默认值


            //支持材料
            //  actions.supplierRouter.getAttachmentData({ ...otherParam, ...param});  // 获取表格数据，如果传入的分页信息可以覆盖默认值
        };

        _this.doUpload = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            alert("doUpload");

                        case 1:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this2);
        }));

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

        _this.state = {
            headerIconOpen: true, //表单状态图标
            headerIcon: 'uf uf-triangle-down',
            headerChildIconOpen: true, //表单状态图标
            headerChildIcon: 'uf uf-triangle-down',
            open: true,
            ChildTapOpen: true
        };
        _this.btnFlag = '0';
        return _this;
    }

    BaseInfo.prototype.componentWillMount = function componentWillMount() {};

    BaseInfo.prototype.componentDidMount = function componentDidMount() {
        var from = (0, _utils.getQueryString)('from');
        this.from = from;
        this.onLoadData({ supplierCode: this.props.supplierCode }); // 获取查询数据
    };

    BaseInfo.prototype.render = function render() {
        var _this3 = this;

        var panelTitle = this.props.panelTitle;

        var props = this.props;
        var _state = this.state,
            headerIconOpen = _state.headerIconOpen,
            headerIcon = _state.headerIcon,
            headerChildIcon = _state.headerChildIcon,
            filePanelTitle = _state.filePanelTitle,
            fileShowLoading = _state.fileShowLoading;

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
                                    _this3.clickHeaderIcon();
                                } },
                            _react2["default"].createElement(_tinperBee.Icon, { type: headerIcon }),
                            panelTitle
                        ) }),
                    _react2["default"].createElement(
                        _tinperBee.Panel,
                        { collapsible: true, expanded: this.state.open },
                        _react2["default"].createElement(
                            'div',
                            { className: 'table-panel-body' },
                            _react2["default"].createElement(_BaseForm2["default"], props)
                        )
                    )
                )
            )
        );
    };

    return BaseInfo;
}(_react.Component);

exports["default"] = _tinperBee.Form.createForm()(BaseInfo);
module.exports = exports['default'];