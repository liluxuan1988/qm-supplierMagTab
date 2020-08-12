"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _acGridcn = require("ac-gridcn");

var _tinperBee = require("tinper-bee");

var _mirrorx = require("mirrorx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var data = [{
    mainEquipment: "仪表板、副仪表板、门板、座椅",
    productionEquipment: "仪表板、副仪表板、门板、座椅",
    experimentalEquipment: "电检设备",
    weekdays: "",
    dailyShifts: "",
    Maximum: "1",
    Surplus: "1"
}];

var dataNumObj = {
    "5": 0,
    "10": 1,
    "15": 2,
    "20": 3,
    "25": 4,
    "50": 5,
    "1": 6
};

var CapacityInformation = function (_Component) {
    _inherits(CapacityInformation, _Component);

    function CapacityInformation(props) {
        _classCallCheck(this, CapacityInformation);

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
        }, { title: "主要产品", dataIndex: "mainProduct", key: "mainProduct", width: 200 }, { title: "主要生产设备", dataIndex: "produceEquipment", key: "produceEquipment", width: 200 }, { title: "主要实验设备", dataIndex: "laboratoryEquipment", key: "laboratoryEquipment", width: 200 }, { title: "周工作日", dataIndex: "workdays", key: "workdays", width: 200, textAlign: 'right' }, { title: "日班次数\n", dataIndex: "dayShifts", key: "dayShifts", width: 200, textAlign: 'right' }, { title: "最大产能(年)", dataIndex: "maxProduction", key: "maxProduction", width: 200, textAlign: 'right' }, { title: "剩余产能(车)", dataIndex: "leftProduction", key: "leftProduction", width: 200, textAlign: 'right' }];

        _this.onDataNumSelect = function (index, value) {
            console.log('index：', index, ' value：', value);
        };

        _this.getSelectedDataFunc = function (selectData, record, index, newData) {
            _this.selectList = selectData;
        };

        _this.pageIndexChange = function (pageIndex) {
            _mirrorx.actions.supplierRouter.setPaginationCondition({
                pageIndex: pageIndex - 1,
                pageSize: _this.props.paginationCondition.pageSize,
                setType: "getSupplierProductionData",
                supplierCode: _this.props.supplierCode
            });
        };

        _this.pageSizeChange = function (index, num) {
            _mirrorx.actions.supplierRouter.setPaginationCondition({
                pageIndex: '0',
                pageSize: num,
                setType: "getSupplierProductionData"
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


    CapacityInformation.prototype.render = function render() {
        var _this2 = this;

        var _props = this.props,
            _props$getSupplierPro = _props.getSupplierProductionList,
            getSupplierProductionList = _props$getSupplierPro === undefined ? {} : _props$getSupplierPro,
            showLoadingChild = _props.showLoadingChild;
        var list = getSupplierProductionList.list,
            pageIndex = getSupplierProductionList.pageIndex,
            pageSize = getSupplierProductionList.pageSize,
            totalPage = getSupplierProductionList.totalPage,
            total = getSupplierProductionList.total;

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
            _react2["default"].createElement(_tinperBee.Loading, { fullScreen: true, showBackDrop: true, show: showLoadingChild }),
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

    return CapacityInformation;
}(_react.Component);

exports["default"] = _tinperBee.Form.createForm()(CapacityInformation);
module.exports = exports["default"];