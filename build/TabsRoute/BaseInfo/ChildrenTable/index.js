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

var dataNumObj = {
    "5": 0,
    "10": 1,
    "15": 2,
    "20": 3,
    "25": 4,
    "50": 5,
    "1": 6
};

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
            dataIndex: "name",
            key: "name",
            width: 300
        }, {
            title: "上传日期",
            dataIndex: "createTime",
            key: "createTime",
            width: 200
        }, {
            title: "备注说明",
            dataIndex: "remark",
            key: "remark",
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

        _this.onDataNumSelect = function (index, value) {
            console.log('index：', index, ' value：', value);
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


    ChinldTable.prototype.render = function render() {
        var _this2 = this;

        var _props$getAttachmentL = this.props.getAttachmentList,
            getAttachmentList = _props$getAttachmentL === undefined ? {} : _props$getAttachmentL;
        var list = getAttachmentList.list,
            pageIndex = getAttachmentList.pageIndex,
            pageSize = getAttachmentList.pageSize,
            totalPage = getAttachmentList.totalPage,
            total = getAttachmentList.total;

        var paginationObj = {
            activePage: pageIndex, //当前页
            items: totalPage,
            total: total, //总共多少条
            freshData: this.freshData, //点击下一页刷新的数据
            onDataNumSelect: this.onDataNumSelect, //每页大小改变触发的事件
            showJump: true,
            disabled: false, //分页条禁用状态
            // horizontalPosition: 'center',
            dataNum: dataNumObj[pageSize] // 分页条数选择

        };
        return _react2["default"].createElement(_acGridcn.Grid, {
            ref: function ref(_ref) {
                return _this2.grid = _ref;
            },
            rowKey: function rowKey(r) {
                return r.id ? r.id : r.key;
            },
            columns: this.defColumns,
            data: list,
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