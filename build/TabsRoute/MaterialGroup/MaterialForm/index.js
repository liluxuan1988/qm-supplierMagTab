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
    materialCode: "J001",
    materialName: "精品件",
    processCode: "J001001",
    processName: "精品件",
    supplier: "上海福之来汽车标准件有限公司",
    available: "否",
    reviewStatus: '',
    reviewTime: "2020-05-06",
    accessType: "正式进入"
}, {
    materialCode: "M008001",
    materialName: "分动器",
    processCode: "M008001",
    processName: "分动器",
    supplier: "上海福之来汽车标准件有限公司",
    available: "否",
    reviewStatus: '',
    reviewTime: "",
    accessType: ""
}, {
    materialCode: "J001001",
    materialName: "精品件",
    processCode: "M030",
    processName: "精品件",
    supplier: "上海福之来汽车标准件有限公司",
    available: "否",
    reviewStatus: '',
    reviewTime: "",
    accessType: ""
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

var MaterialForm = function (_Component) {
    _inherits(MaterialForm, _Component);

    function MaterialForm(props) {
        _classCallCheck(this, MaterialForm);

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
        }, { title: "材料组代码", dataIndex: "materialgroupCode", key: "materialgroupCode", width: 200 }, { title: "材料组名称", dataIndex: "materialgroupName", key: "materialgroupName", width: 300 }, { title: "工艺组代码", dataIndex: "subMaterialgroupCode", key: "subMaterialgroupCode", width: 200 }, { title: "工艺组名称\n", dataIndex: "subMaterialgroupName", key: "subMaterialgroupName", width: 200 }, { title: "供应商生产地", dataIndex: "supplierAddress", key: "supplierAddress", width: 300 }, { title: "是否可供货", dataIndex: "isTrade", key: "isTrade", width: 200 }, { title: "评审状态", dataIndex: "reviceStatus", key: "reviceStatus", width: 100 }, { title: "评审时间", dataIndex: "reviewTime", key: "reviewTime", width: 100 }, { title: "材料组准入类型", dataIndex: "status", key: "status", width: 200 }];

        _this.openSupplier = function () {
            _this.props.DemoTable.getChildrenMsg(_this, true);
        };

        _this.getSelectedDataFunc = function (selectData, record, index, newData) {
            _this.selectList = selectData;
        };

        _this.pageIndexChange = function (pageIndex) {
            _mirrorx.actions.supplierRouter.setPaginationCondition({
                pageIndex: pageIndex - 1,
                pageSize: _this.props.paginationCondition.pageSize,
                setType: "getSupplierPsGroupData",
                supplierCode: _this.props.supplierCode
            });
        };

        _this.pageSizeChange = function (index, num) {
            _mirrorx.actions.supplierRouter.setPaginationCondition({
                pageIndex: '0',
                pageSize: num,
                setType: "getSupplierPsGroupData",
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
     * 列表选中行
     */

    /**
     * 分页修改
     * @param pageIndex
     */

    /**
     * 页大小修改
     * @param {*} index 页码
     * @param {*} num 页大小
     */


    // onDataNumSelect = (index, value) => {
    //     console.log('index：', index, ' value：', value);
    // }


    MaterialForm.prototype.render = function render() {
        var _this2 = this;

        var _props = this.props,
            _props$SupplierPsGrou = _props.SupplierPsGroupList,
            SupplierPsGroupList = _props$SupplierPsGrou === undefined ? {} : _props$SupplierPsGrou,
            showLoading = _props.showLoading;
        var list = SupplierPsGroupList.list,
            pageIndex = SupplierPsGroupList.pageIndex,
            pageSize = SupplierPsGroupList.pageSize,
            totalPage = SupplierPsGroupList.totalPage,
            total = SupplierPsGroupList.total;

        var paginationObj = {
            items: totalPage,
            activePage: pageIndex, //当前页
            total: total,
            freshData: this.pageIndexChange, //点击下一页刷新的数据
            onDataNumSelect: this.pageSizeChange, //每页大小改变触发的事件
            showJump: true,
            horizontalPosition: 'center',
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

    return MaterialForm;
}(_react.Component);

exports["default"] = _tinperBee.Form.createForm()(MaterialForm);
module.exports = exports["default"];