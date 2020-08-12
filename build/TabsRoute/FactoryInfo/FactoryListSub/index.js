'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mirrorx = require('mirrorx');

var _tinperBee = require('tinper-bee');

var _acGridcn = require('ac-gridcn');

var _utils = require('utils');

require('./index.less');

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

var layoutOpt = {
    md: 6,
    xs: 12
};

var formatDateRule = "YYYY-MM-DD HH:mm:ss"; // 格式化日期
var formatYearRule = "YYYY"; // 格式化年

var FactoryListSub = function (_Component) {
    _inherits(FactoryListSub, _Component);

    function FactoryListSub(props) {
        _classCallCheck(this, FactoryListSub);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.selectList = [];
        _this.orderByParam = [];
        _this.whereParam = [];
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
        }, {
            title: "工厂名称",
            dataIndex: "orgName",
            key: "orgName",
            width: 400,
            filterType: "text", //输入框类型
            filterDropdown: "show", //显示条件
            filterDropdownType: "string" //字符条件
        }, {
            title: "工厂简称",
            dataIndex: "orgSampleName",
            key: "orgSampleName",
            width: 300,
            filterType: "text", //输入框类型
            filterDropdown: "show", //显示条件
            filterDropdownType: "string" //字符条件
        }, {
            title: "国家",
            dataIndex: "country",
            key: "country",
            width: 150
        }, {
            title: "省份",
            dataIndex: "province",
            key: "province",
            width: 150
        }, {
            title: "城市",
            dataIndex: "city",
            key: "city",
            width: 150
        }, {
            title: "工厂地址",
            dataIndex: "address",
            key: "address",
            width: 500
        }, {
            title: "车间数量",
            dataIndex: "workshopNums",
            key: "workshopNums",
            width: 150,
            textAlign: 'right' // 靠右对齐
        }];

        _this.pageIndexChange = function (pageIndex) {
            _mirrorx.actions.supplierRouter.setPaginationCondition({
                pageIndex: pageIndex - 1,
                pageSize: _this.props.paginationCondition.pageSize,
                setType: "getSupplierPlantData",
                supplierCode: _this.props.supplierCode
            });
        };

        _this.pageSizeChange = function (index, num) {
            _mirrorx.actions.supplierRouter.setPaginationCondition({
                pageIndex: '0',
                pageSize: num,
                setType: "getSupplierPlantData",
                supplierCode: _this.props.supplierCode
            });
            _this.setState({
                selectedIndex: 0
            });
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
            _mirrorx.actions.supplierRouter.getSupplierPlantData(_extends({}, otherParam, param)); // 获取表格数据，如果传入的分页信息可以覆盖默认值
        };

        _this.exportExcel = function () {
            _this.grid.exportExcel();
        };

        _this.openModal = function () {
            // actions.dlSup.getBillNo();
            _this.setState({
                showModal: true,
                btnFlag: 0
            }, function () {
                // this.modelOrg.setValue('');//参照特殊处理
            });
        };

        _this.state = {
            filterable: false,
            showModal: false,
            record: {} // 存储关联数据信息
        };
        return _this;
    } //选中的数据
    // 多排序
    // 行过滤
    //列数据


    FactoryListSub.prototype.componentDidMount = function componentDidMount() {
        this.onLoadData({ supplierCode: this.props.supplierCode }); // 获取查询数据
        var serviceCode = (0, _utils.getQueryString)('serviceCode', window.location.href) || (0, _utils.getQueryString)('servicecode', window.location.href);
    };
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
     * 加载列表数据
     * @param {*} param 查询信息
     */


    /**
     * 新增模态框
     */


    FactoryListSub.prototype.render = function render() {
        var _this2 = this;

        var _props = this.props,
            _props$getSupplierPla = _props.getSupplierPlantList,
            getSupplierPlantList = _props$getSupplierPla === undefined ? {} : _props$getSupplierPla,
            showLoadingChild = _props.showLoadingChild;
        var list = getSupplierPlantList.list,
            pageIndex = getSupplierPlantList.pageIndex,
            pageSize = getSupplierPlantList.pageSize,
            totalPage = getSupplierPlantList.totalPage,
            total = getSupplierPlantList.total;

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
            'div',
            { className: 'contact-main' },
            _react2["default"].createElement(
                'div',
                { className: 'search-area' },
                _react2["default"].createElement(_tinperBee.Loading, {
                    fullScreen: true,
                    showBackDrop: true,
                    show: showLoadingChild
                })
            ),
            _react2["default"].createElement(_acGridcn.Grid, {
                exportFileName: '工厂信息',
                ref: function ref(el) {
                    return _this2.grid = el;
                },
                rowKey: function rowKey(r) {
                    return r.id ? r.id : r.key;
                },
                columns: this.gridColumn,
                data: list,
                columnFilterAble: false //下拉隐藏
                , showHeaderMenu: false,
                paginationObj: paginationObj //分页数据
                , headerScroll: true // 双向滚动条
                , multiSelect: true
            })
        );
    };

    return FactoryListSub;
}(_react.Component);

exports["default"] = (0, _mirrorx.connect)(function (state) {
    return state.supplierRouter;
})(FactoryListSub);
module.exports = exports['default'];