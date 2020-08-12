"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _acGridcn = require("ac-gridcn");

var _tinperBee = require("tinper-bee");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var data = [{
    code: "00592",
    name: "麦格纳动力总成(常州)",
    state: "未评审",
    psstate: "正式进入",
    level: "MC专用",
    Nature: "",
    core: "普通供应商",
    TradeSupplier: "",
    producer: "麦格纳常州",
    GState: "独资-欧美",
    G: "非一汽",
    GBlacklist: "否",
    CBlacklist: "否",
    reviewLevel: "否",
    supplier: "",
    ContractStatus: "正常发包",
    tempContractStatus: "E115",
    FixedPoint: "否",
    newTime: "2018-03-19"

}, {
    code: "LAH54",
    name: "北京博格华纳汽车传动器",
    state: "未评审",
    psstate: "正式进入",
    level: "MC专用",
    Nature: "",
    core: "-",
    TradeSupplier: "",
    producer: "麦格纳常州",
    GState: "民营企业",
    G: "",
    GBlacklist: "否",
    CBlacklist: "否",
    reviewLevel: "",
    supplier: "",
    ContractStatus: "正常发包",
    tempContractStatus: "E115",
    FixedPoint: "否",
    newTime: ""

}];

var ChinldTable = function (_Component) {
    _inherits(ChinldTable, _Component);

    function ChinldTable(props) {
        _classCallCheck(this, ChinldTable);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.defColumns = [{ title: "序号", dataIndex: "SupplierTab.js", key: "SupplierTab.js", width: 80,
            render: function render(text, record, index) {
                return index + 1;
            }
        }, {
            title: "附件名称",
            dataIndex: "fileName",
            key: "fileName",
            width: 300
        }, {
            title: "上传日期",
            dataIndex: "fileExtension",
            key: "fileExtension",
            width: 200
        }, {
            title: "备注说明",
            dataIndex: "createUserName",
            key: "createUserName",
            width: 400
        }];

        _this.openSupplier = function () {
            _this.props.DemoTable.getChildrenMsg(_this, true);
        };

        _this.getSelectedDataFunc = function (selectData, record, index, newData) {
            _this.selectList = selectData;
        };

        _this.freshData = function (pageIndex) {
            console.log('跳转至第 ', pageIndex, ' 页');
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

    // onDataNumSelect = (index, value) => {
    //     console.log('index：', index, ' value：', value);
    // }


    ChinldTable.prototype.render = function render() {
        var _this2 = this;

        var paginationObj = {
            items: 1,
            total: 0, //总共多少条
            freshData: this.freshData, //点击下一页刷新的数据
            onDataNumSelect: this.onDataNumSelect, //每页大小改变触发的事件
            showJump: true,
            horizontalPosition: 'center'
        };
        return _react2["default"].createElement(_acGridcn.Grid, {
            ref: function ref(_ref) {
                return _this2.grid = _ref;
            },
            rowKey: function rowKey(r) {
                return r.id ? r.id : r.key;
            },
            columns: this.defColumns,
            data: [],
            getSelectedDataFunc: this.getSelectedDataFunc,
            paginationObj: paginationObj //分页数据
            , headerScroll: true // 双向滚动条
            , multiSelect: true
            // onRowClick={this.onSelect}
            , columnFilterAble: false //下拉隐藏
            , showHeaderMenu: false //关闭列过滤面板。默认显示。
            , bodyDisplayInRow: true
        });
    };

    return ChinldTable;
}(_react.Component);

exports["default"] = _tinperBee.Form.createForm()(ChinldTable);
module.exports = exports["default"];