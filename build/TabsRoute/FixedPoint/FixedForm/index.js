"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _acGridcn = require("ac-gridcn");

var _tinperBee = require("tinper-bee");

var _acHeader = require("ac-header");

var _acHeader2 = _interopRequireDefault(_acHeader);

var _mirrorx = require("mirrorx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var dataNumObj = {
    "5": 0,
    "10": 1,
    "15": 2,
    "20": 3,
    "25": 4,
    "50": 5,
    "1": 6
};

var FixedForm = function (_Component) {
    _inherits(FixedForm, _Component);

    function FixedForm(props) {
        _classCallCheck(this, FixedForm);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.gridColumn = [{
            title: "序号",
            dataIndex: "SupplierTab.js",
            key: "SupplierTab.js",
            textAlign: "center",
            fixed: "left",
            width: 80,
            render: function render(text, record, index) {
                return index + 1;
            }
        }, { title: "零件号", dataIndex: "partNum", key: "partNum", width: 200 }, { title: "零件名称", dataIndex: "partName", key: "partName", width: 250 }, { title: "材料组代码", dataIndex: "materialgroupCode", key: "materialgroupCode", width: 200 }, { title: "定点车型", dataIndex: "fixedPointVehicle", key: "fixedPointVehicle", width: 150 }, { title: "定点时间", dataIndex: "fixedPointTime", key: "fixedPointTime", width: 200 }, { title: "RFQ编号", dataIndex: "rfqId", key: "rfqId", width: 200, textAlign: 'right' // 靠右对齐},

        }];

        _this.openSupplier = function () {
            _this.props.DemoTable.getChildrenMsg(_this, true);
        };

        _this.getSelectedDataFunc = function (selectData, record, index, newData) {
            _this.selectList = selectData;
        };

        _this.pageIndexChange = function (pageIndex) {
            _mirrorx.actions.supplierRouter.setPaginationCondition({
                pageIndex: pageIndex - 1,
                pageSize: _this.props.paginationCondition.pageSize, setType: "getSupplierPartData",
                supplierCode: _this.props.supplierCode

            });
        };

        _this.pageSizeChange = function (index, num) {
            _mirrorx.actions.supplierRouter.setPaginationCondition({
                pageIndex: '0',
                pageSize: num,
                setType: "getSupplierPartData",
                supplierCode: _this.props.supplierCode

            });
            _this.setState({
                selectedIndex: 0
            });
        };

        _this.onClick = function () {
            _this.setState({
                selectedRow: function selectedRow() {}
            });
        };

        _this.state = {};
        return _this;
    }
    /**
     * 加载完成
     */


    FixedForm.prototype.componentDidMount = function componentDidMount() {};

    /**
     * 列表选中行
     */


    /**
     * 页码修改
     * @param pageIndex
     */

    /**
     * 页大小修改
     * @param {*} index 页码
     * @param {*} num 页大小
     */


    FixedForm.prototype.render = function render() {
        var _this2 = this;

        var _props = this.props,
            _props$SupplierPartLi = _props.SupplierPartList,
            SupplierPartList = _props$SupplierPartLi === undefined ? {} : _props$SupplierPartLi,
            showLoading = _props.showLoading;
        var list = SupplierPartList.list,
            pageIndex = SupplierPartList.pageIndex,
            pageSize = SupplierPartList.pageSize,
            totalPage = SupplierPartList.totalPage,
            total = SupplierPartList.total;


        var paginationObj = {
            activePage: pageIndex, //当前页
            items: totalPage,
            total: total, //总共多少条
            freshData: this.pageIndexChange, //点击下一页刷新的数据
            onDataNumSelect: this.pageSizeChange, //每页大小改变触发的事件
            showJump: true,
            disabled: false, //分页条禁用状态
            // horizontalPosition: 'center',
            dataNum: dataNumObj[pageSize] // 分页条数选择
        };
        return _react2["default"].createElement(
            "div",
            null,
            _react2["default"].createElement(_tinperBee.Loading, { fullScreen: true, showBackDrop: true, show: showLoading }),
            _react2["default"].createElement(_acGridcn.Grid, {
                ref: function ref(_ref) {
                    return _this2.grid = _ref;
                },
                rowKey: function rowKey(r) {
                    return r.id ? r.id : r.key;
                },
                columns: this.gridColumn,
                data: list,
                getSelectedDataFunc: this.getSelectedDataFunc,
                paginationObj: paginationObj //分页数据
                , headerScroll: true // 双向滚动条
                , multiSelect: true,
                columnFilterAble: false //下拉隐藏
                , showHeaderMenu: false //关闭列过滤面板。默认显示。
                // onRowClick={this.onSelect}
                , bodyDisplayInRow: true
            })
        );
    };

    return FixedForm;
}(_react.Component);

exports["default"] = _tinperBee.Form.createForm()(FixedForm);
module.exports = exports["default"];