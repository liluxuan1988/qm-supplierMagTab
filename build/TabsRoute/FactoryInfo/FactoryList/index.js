'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var FactoryList = function (_Component) {
    _inherits(FactoryList, _Component);

    function FactoryList(props) {
        _classCallCheck(this, FactoryList);

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
            title: "企业关系",
            dataIndex: "relation",
            key: "relation",
            width: 200,
            filterType: "text", //输入框类型
            filterDropdown: "show", //显示条件
            filterDropdownType: "string" //字符条件
        }, {
            title: "公司中文名称",
            dataIndex: "name",
            key: "name",
            width: 200,
            filterType: "text", //输入框类型
            filterDropdown: "show", //显示条件
            filterDropdownType: "string" //字符条件
        }, {
            title: "公司地址",
            dataIndex: "address",
            key: "address",
            width: 400
        }, {
            title: "公司英文名称",
            dataIndex: "enName",
            key: "enName",
            width: 200
        }, {
            title: "公司简称",
            dataIndex: "simpleName",
            key: "simpleName",
            width: 150
        }, {
            title: "主要产品",
            dataIndex: "prodouction",
            key: "prodouction",
            width: 300
        }];
        _this.data = [{ businessRelations: "子公司",
            chineseCompany: "济南分公司",
            companyAddress: "济南市",
            englishCompany: " ",
            abbreviation: " ",
            mainProducts: " "
        }, {
            businessRelations: "子公司",
            chineseCompany: "佛山分公司 ",
            companyAddress: "佛山市",
            englishCompany: " ",
            abbreviation: " ",
            mainProducts: " "
        }];

        _this.onDataNumSelect = function (index, value) {
            console.log('index：', index, ' value：', value);
        };

        _this.pageIndexChange = function (pageIndex) {
            _mirrorx.actions.supplierRouter.setPaginationCondition({
                pageIndex: pageIndex - 1,
                pageSize: _this.props.paginationCondition.pageSize,
                setType: "getSupplierRelationData",
                supplierCode: _this.props.supplierCode
            });
        };

        _this.pageSizeChange = function (index, num) {
            _mirrorx.actions.supplierRouter.setPaginationCondition({
                pageIndex: '0',
                pageSize: num,
                setType: "getSupplierRelationData"
            });
            _this.setState({
                selectedIndex: 0
            });
        };

        _this.afterRowFilter = function (status) {
            // todo 关闭是否清空过滤条件 是否发送请求
            _this.onLoadData({ whereParam: [] });
            _this.whereParam = []; // 清空过滤数据
            _this.setState({ filterable: status });
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


    FactoryList.prototype.componentDidMount = function componentDidMount() {
        this.props.onRef(this);
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
     *
     * @param {Boolean} status 控制栏位的显示/隐藏
     */


    FactoryList.prototype.render = function render() {
        var _this2 = this;

        var _props = this.props,
            _props$getSupplierRel = _props.getSupplierRelationList,
            getSupplierRelationList = _props$getSupplierRel === undefined ? {} : _props$getSupplierRel,
            showLoading = _props.showLoading;
        var list = getSupplierRelationList.list,
            pageIndex = getSupplierRelationList.pageIndex,
            pageSize = getSupplierRelationList.pageSize,
            totalPage = getSupplierRelationList.totalPage,
            total = getSupplierRelationList.total;

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
        return (
            // headerIconOpen ? (<div className='contact-main'>
            //     <div className="search-area">
            //         {/*页面加载动画*/}

            //
            //         {/*查询区域*/}
            //         <SearchArea
            //             onSearch={this.onSearch}
            //             onRef={ref => this.child = ref}
            //         />
            //     </div>
            _react2["default"].createElement(
                'div',
                { className: 'contact-main' },
                _react2["default"].createElement(_tinperBee.Loading, {
                    fullScreen: true,
                    showBackDrop: true,
                    show: showLoading
                }),
                _react2["default"].createElement(_acGridcn.Grid, {
                    exportFileName: '子公司信息',
                    ref: function ref(el) {
                        return _this2.grid = el;
                    },
                    rowKey: function rowKey(r) {
                        return r.id ? r.id : r.key;
                    },
                    columns: this.gridColumn,
                    data: list,
                    columnFilterAble: false //下拉隐藏
                    , showHeaderMenu: false //关闭列过滤面板。默认显示。
                    , paginationObj: paginationObj //分页数据
                    , headerScroll: true // 双向滚动条
                    , multiSelect: true
                })
            )
        );
    };

    return FactoryList;
}(_react.Component);

exports["default"] = FactoryList;
module.exports = exports['default'];