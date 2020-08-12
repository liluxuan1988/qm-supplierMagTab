'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mirrorx = require('mirrorx');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _tinperBee = require('tinper-bee');

var _index = require('qmac-gridcn/build/index');

var _acTips = require('ac-tips');

var _acTips2 = _interopRequireDefault(_acTips);

var _beeModal = require('bee-modal');

var _beeModal2 = _interopRequireDefault(_beeModal);

var _utils = require('utils');

var _acFormLayout = require('ac-form-layout');

var _acFormLayout2 = _interopRequireDefault(_acFormLayout);

require('./index.less');

var _acHeader = require('ac-header');

var _acHeader2 = _interopRequireDefault(_acHeader);

var _BtnDiv = require('./BtnDiv');

var _BtnDiv2 = _interopRequireDefault(_BtnDiv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var FormItem = _acFormLayout2["default"].FormItem,
    FormRow = _acFormLayout2["default"].FormRow;
var Item = _tinperBee.Menu.Item;


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

var ContactList = function (_Component) {
    _inherits(ContactList, _Component);

    function ContactList(props) {
        var _this2 = this;

        _classCallCheck(this, ContactList);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.selectList = [];
        _this.orderByParam = [];
        _this.whereParam = [];
        _this.isDefaultList = _this.props.IsDefault;
        _this.lxrTypeList = _this.props.EmployeeType;

        _this.getSelectedDataFunc = function (selectData, record, index, newData) {
            _this.selectList = selectData;
        };

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
            title: "联系人类型",
            dataIndex: "type",
            key: "type",
            width: 150,
            renderType: 'input',
            required: true,
            validate: true,
            fieldProps: {
                allowClear: true,
                defaultValue: '',
                data: _this.lxrTypeList
            }
        }, {
            title: "是否关键联系人",
            dataIndex: "isDefault",
            key: "isDefault",
            width: 150,
            renderType: 'input',
            required: true,
            validate: true,
            fieldProps: {
                allowClear: true,
                defaultValue: '',
                data: _this.isDefaultList
            }
        }, {
            title: "联系人姓名",
            dataIndex: "employeeName",
            key: "employeeName",
            width: 150,
            renderType: 'input',
            required: true,
            validate: true,
            fieldProps: {
                maxLength: '10',
                defaultValue: ''
            }
        }, {
            title: "登录帐号",
            dataIndex: "tsUserId",
            key: "tsUserId",
            width: 150,
            renderType: 'input',
            // required: true,
            // validate: true,
            fieldProps: {
                maxLength: '10',
                defaultValue: 0
            }
        }, {
            title: "联系人职务(中文)",
            dataIndex: "position",
            key: "position",
            width: 150,
            renderType: 'input',
            // required: true,
            // validate: true,
            fieldProps: {
                maxLength: '10',
                defaultValue: ''
            }
        }, {
            title: "联系人职务(英文)",
            dataIndex: "engPostion",
            key: "engPostion",
            width: 150,
            renderType: 'input',
            // required: true,
            // validate: true,
            fieldProps: {
                maxLength: '10',
                defaultValue: ''
            }
        }, {
            title: "联系人部门",
            dataIndex: "department",
            key: "department",
            width: 150,
            renderType: 'input',
            // required: true,
            // validate: true,
            fieldProps: {
                maxLength: '10',
                defaultValue: ''
            }
        }, {
            title: "联系人电话",
            dataIndex: "telephone",
            key: "telephone",
            width: 150,
            renderType: 'input',
            // required: true,
            validate: true,
            rules: [{
                required: true, message: _react2["default"].createElement(
                    'span',
                    null,
                    _react2["default"].createElement(_tinperBee.Icon, { type: 'uf-exc-t' }),
                    _react2["default"].createElement(
                        'span',
                        null,
                        '\u8BF7\u8F93\u5165\u8054\u7CFB\u65B9\u5F0F'
                    )
                )
            }, {}],
            defaultValue: ''

        }, {
            title: "联系人手机",
            dataIndex: "mobil",
            key: "mobil",
            width: 150,
            renderType: 'input',
            // required: true,
            // validate: true,
            fieldProps: {
                maxLength: '10',
                defaultValue: ''
            }
        }, {
            title: "联系人邮箱",
            dataIndex: "email",
            key: "email",
            width: 150,
            renderType: 'input',
            // required: true,
            validate: true,
            fieldProps: {
                rules: [{
                    message: '请填写正确联系人邮箱',
                    required: true
                }, {
                    message: '邮箱码格式错误',
                    pattern: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
                }],
                defaultValue: ''
            }
        }, {
            title: "备注",
            dataIndex: "memo",
            key: "memo",
            width: 150,
            renderType: 'input',
            fieldProps: {
                maxLength: '100',
                defaultValue: ''
            }
        }];

        _this.onSearch = function () {
            _this.onLoadData(); // 获取查询数据
        };

        _this.getSelectedDataFun = function (selectData, record, index, newData) {
            _this.selectList = selectData;
        };

        _this.onRelevance = function (record, key) {
            if (key === "modelType") {
                // 弹出模态框
                _this.setState({ record: record, showModal: true });
            }
            if (key === "linkType") {
                // 跳转页面详情
                _this.goDetailPage(2, record.id);
            }
        };

        _this.goDetailPage = function (btnFlag, id) {
            _mirrorx.actions.routing.push({
                pathname: '/edit',
                search: '?btnFlag=' + btnFlag + '&id=' + id
            });
        };

        _this.close = function () {
            _this.setState({ showModal: false });
        };

        _this.onFilterChange = function (key, value, condition) {
            // 构造一个 map
            var tempObj = {};
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = _this.whereParam[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var item = _step.value;

                    tempObj[item.key] = item;
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator["return"]) {
                        _iterator["return"]();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            var formatValue = value;
            // if (key === 'contactType') { // 年份格式化
            //     formatValue = moment(value).format(formatDateRule);
            // }
            //

            tempObj[key] = { key: key, value: formatValue, condition: condition };
            // 拼接过滤条件
            var tempArray = [];
            for (var _key in tempObj) {
                tempArray.push(tempObj[_key]);
            }
            _this.onLoadData({ whereParam: tempArray });
            _this.setState({ filterable: true }); // 打开行过滤
            _this.whereParam = tempArray; // 缓存过滤数据
        };

        _this.onFilterClear = function (key) {
            var tempObj = {};
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = _this.whereParam[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var item = _step2.value;

                    if (item.key !== key) {
                        tempObj[item.key] = item;
                    }
                }
                // 拼接过滤条件
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
                        _iterator2["return"]();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            var tempArray = [];
            for (var _key2 in tempObj) {
                tempArray.push(tempObj[_key2]);
            }
            _this.onLoadData({ whereParam: tempArray });
            _this.setState({ filterable: true }); //  打开行过滤
            _this.whereParam = tempArray; // 清空过滤数据
        };

        _this.afterRowFilter = function (status) {
            // todo 关闭是否清空过滤条件 是否发送请求
            _this.onLoadData({ whereParam: [] });
            _this.whereParam = []; // 清空过滤数据
            _this.setState({ filterable: status });
        };

        _this.sortFun = function (sortParam) {
            var filterable = _this.state.filterable;


            var orderByParam = [];
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = sortParam[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var item = _step3.value;
                    //   转换成后端约定的数据格式
                    var order = item.order,
                        field = item.field;

                    var value = order === 'ascend' ? 'ASC' : 'DESC'; // 约定 ASC 表示升序，DESC 表示降序
                    orderByParam.push(_defineProperty({}, field, value));
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3["return"]) {
                        _iterator3["return"]();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }

            _this.onLoadData({ orderByParam: orderByParam });
            _this.orderByParam = orderByParam;
            _this.setState({ filterable: filterable }); //  缓存是否打开行过滤
        };

        _this.onLoadData = function () {
            // this.selectList = [];// 清空选中的数据
            // const {queryObj} = this.props;
            // let {pageSize} = queryObj; // 获取分页值
            // let searchData = this.child.getSearchValue(); // 获取表单组件里的值
            // if (pageSize > 50) {// 对分页条数为 all 处理
            //     pageSize = 1;
            // }
            // let otherParam = {pageSize, pageIndex: 0, orderByParam: this.orderByParam, whereParam: this.whereParam}; // 其他查询条件
            // actions.dlSup.loadData({...searchData, ...otherParam, ...param});  // 获取表格数据，如果传入的分页信息可以覆盖默认值

            var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
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
                // this.modelApplier.setValue('');//参照特殊处理
            });
        };

        _this.onSave = function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
                var id, result, _ref2, status;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                id = _this.props.supplierCode;
                                result = data.map(function (item) {
                                    delete item._edit; // 删除后端不要的前端标识 _edit、_status、_checked
                                    delete item._status;
                                    delete item._checked;
                                    item.supplierCode = id;
                                    return item;
                                });
                                _context.next = 4;
                                return _mirrorx.actions.supplierRouter.saveSupplierEmployee(result);

                            case 4:
                                _ref2 = _context.sent;
                                status = _ref2.status;

                                if (status === 'success') {
                                    _mirrorx.actions.supplierRouter.refreshEdit({ supplierCode: _this.props.supplierCode });
                                    _this.setState({ showModal: false });
                                }
                                _this.btnDiv.closeRowEdit();

                            case 8:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2);
            }));

            return function (_x2) {
                return _ref.apply(this, arguments);
            };
        }();

        _this.onDel = function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data) {
                var filterAdd;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                filterAdd = data.filter(function (item) {
                                    return item.id;
                                });

                                console.log(filterAdd);
                                if (filterAdd.length > 0) {
                                    // 删除数据的数据
                                    if (data.status === 'success' || filterAdd.length === 0) {
                                        // 数据库删除成功或者删除前端为保存的数据
                                        _mirrorx.actions.supplierRouter.refreshEdit({ supplierCode: _this.props.supplierCode });
                                        _this.setState({ showModal: false });
                                    }
                                }

                            case 3:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, _this2);
            }));

            return function (_x3) {
                return _ref3.apply(this, arguments);
            };
        }();

        _this.getAllData = function () {
            console.log(_this.mainTableRef.allData);
        };

        _this.getSelectData = function () {
            console.log(_this.mainTableRef.selectList);
            return _this.mainTableRef.selectList;
        };

        _this.validate = function () {
            var error = _this.grid.validate();
            if (error) {
                alert('数据校验失败，错误信息见控制台');
                console.log(error);
            } else {
                alert('数据校验成功');
            }
        };

        _this.validateSelect = function () {
            var error = _this.grid.validateSelect();
            if (error) {
                alert('数据校验失败，错误信息见控制台');
                console.log(error);
            } else {
                alert('数据校验成功');
            }
        };

        _this.addRow = function () {
            _this.btnDiv.openRowEdit();
            _this.grid.addRow();
        };

        _this.updateAll = function () {
            //  if(this.grid.allData.length == 0)
            //         // {
            //         //     AcTips.create({
            //         //         type:'warning',
            //         //         content:"没有可编辑的数据"
            //         //     })
            //         //     return false;
            //         // }
            _this.btnDiv.openRowEdit();
            _this.grid.updateAll();
        };

        _this.pageIndexChange = function (pageIndex) {
            _mirrorx.actions.supplierRouter.setPaginationCondition({
                pageIndex: pageIndex - 1,
                pageSize: _this.props.paginationCondition.pageSize,
                setType: "getSupplierEmployeeData",
                supplierCode: _this.props.supplierCode
            });
        };

        _this.pageSizeChange = function (index, num) {
            _mirrorx.actions.supplierRouter.setPaginationCondition({
                pageIndex: '0',
                pageSize: num,
                setType: "getSupplierEmployeeData",
                supplierCode: _this.props.supplierCode
            });
            _this.setState({
                selectedIndex: 0
            });
        };

        _this.delRow = function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(data) {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                if (!_this.btnDiv.state.editFlag) {
                                    _context3.next = 3;
                                    break;
                                }

                                _acTips2["default"].create({
                                    type: 'error',
                                    content: "请先结束编辑"
                                });
                                return _context3.abrupt('return', false);

                            case 3:
                                if (!(_this.grid.selectList.length == 0)) {
                                    _context3.next = 6;
                                    break;
                                }

                                _acTips2["default"].create({
                                    type: 'warning',
                                    content: "请先选择数据"
                                });
                                return _context3.abrupt('return', false);

                            case 6:
                                //确认删除窗口
                                _beeModal2["default"].confirm({
                                    title: '提示信息',
                                    keyword: '删除',
                                    content: "确定要删除吗?",
                                    onOk: _this.confirmDeleteData,
                                    onCancel: function onCancel() {
                                        console.log('Cancel');
                                    },
                                    confirmType: 'two'
                                });

                            case 7:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, _this2);
            }));

            return function (_x4) {
                return _ref4.apply(this, arguments);
            };
        }();

        _this.confirmDeleteData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _ref6, status;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            _context4.next = 2;
                            return _mirrorx.actions.supplierRouter.deleteSupplierEmployee(_this.grid.selectList);

                        case 2:
                            _ref6 = _context4.sent;
                            status = _ref6.status;

                            console.log(status);
                            if (status === 'success') {
                                _mirrorx.actions.supplierRouter.refreshEdit({ supplierCode: _this.props.supplierCode });
                                _this.setState({ showModal: false });
                            }
                            _this.btnDiv.closeRowEdit();

                        case 7:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, _this2);
        }));

        _this.copyRow = function () {
            if (_this.grid.selectList.length == 0) {
                _acTips2["default"].create({
                    type: 'warning',
                    content: "请先选择数据"
                });
                return false;
            }
            _this.grid.copyRow();
            //处理按钮状态
            _this.btnDiv.openCopyEdit();
        };

        _this.copyToEnd = function () {
            _this.grid.copyToEnd();
            _this.btnDiv.closeCopyEdit();
        };

        _this.save = function () {
            var error = _this.grid.validateSelect();
            if (error) {
                _acTips2["default"].create({
                    type: 'error',
                    content: "数据校验失败"
                });
                console.log(error);
            } else {
                console.log(_this.grid.selectList.length);
                if (_this.grid.selectList.length === 0) {
                    _acTips2["default"].create({
                        type: 'error',
                        content: "数据保存失败"
                    });
                }
                if (_this.grid.selectList.length > 0) {
                    var ids = Object.keys(_this.selectList).map(function (key) {
                        return _this.selectList[key].id;
                    });
                    // let result = actions.supplierRouter.saveSupplierEmployee(this.grid.selectList);
                    _this.setState({
                        showModal: false
                    });
                    //关闭编辑状态
                    // this.btnDiv.closeRowEdit();
                    //保存数据
                    _this.grid.save();
                }
            }
        };

        _this.cancelEdit = function () {
            _this.grid.cancelEdit();
            _this.btnDiv.closeRowEdit();
        };

        _this.openRowEdit = function (editRecord) {
            _this.btnDiv.openRowEdit();
            console.log(JSON.stringify(editRecord));
        };

        _this.onRowDoubleClick = function (editItem) {
            _this.btnDiv.openRowEdit();
            console.log(editItem);
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

    // this.props.contractTypes.map((item, index) => {
    // if (item.code === value) return name = item.name
    // })

    //列数据


    ContactList.prototype.componentDidMount = function componentDidMount() {
        this.props.onRef(this);
        this.onLoadData(); // 获取查询数据
        var serviceCode = (0, _utils.getQueryString)('serviceCode', window.location.href) || (0, _utils.getQueryString)('servicecode', window.location.href);
        // actions.dlSup.getPower({
        //     params: {
        //         servicecode: serviceCode
        //     },
        //     context: pom.fe.new.ctx
        // })
        console.log(this.props.selectTypeOptions);
        console.log(this.props.selectTsDefaultOptions);
    };

    /**
     * 搜索面板查询
     */


    /**
     * 删除
     */
    // onClickDelete = () => {
    //
    //     if (this.selectList.length <= 0) {
    //         AcTips.create({
    //             type: 'warning',
    //             content: "请先选择数据"
    //         });
    //         return;
    //     }
    //
    //     Modal.confirm({
    //         title: '提示信息',
    //         keyword: '删除',
    //         content: "确定要删除吗?",
    //         onOk: this.confirmDeleteData,
    //         onCancel: () => {
    //             console.log('Cancel');
    //         },
    //         confirmType: 'two'
    //     })
    // }


    /**
     * 列表选中行
     */

    /**
     *
     * 关联数据钻取
     * @param {object} record 关联数据行数据
     * @param {string} key menu菜单key值
     */

    /**
     * 关闭模态框
     */


    /**
     *
     *触发过滤输入操作以及下拉条件的回调
     * @param {string} key 过滤字段名称
     * @param {*} value 过滤字段值
     * @param {string} condition 过滤字段条件
     */


    /**
     * 清除过滤条件的回调函数，回调参数为清空的字段
     * @param {string} key 清除过滤字段
     */


    /**
     *
     * @param {Boolean} status 控制栏位的显示/隐藏
     */


    /**
     *
     *排序属性设置
     * @param {Array} sortParam 排序参数对象数组
     */


    /**
     * 加载列表数据
     * @param {*} param 查询信息
     */


    /**
     * 新增模态框
     */


    // addRow=()=>{
    //     this.btnDiv.openRowEdit();
    //     this.mainTableRef.addRow()
    // }
    // updateAll=()=>{
    //     this.btnDiv.openRowEdit();
    //     this.mainTableRef.updateAll()
    // }
    // delRow=()=>{
    //     if(this.btnDiv.state.editFlag)
    //     {
    //         alert("请先结束编辑!");
    //         return false;
    //     }
    //     this.mainTableRef.delRow()
    // }
    // copyRow=()=>{
    //     if(this.mainTableRef.selectList.length == 0)
    //     {
    //         AcTips.create({
    //             type:'warning',
    //             content:"请先选择数据"
    //         })
    //         return false;
    //     }
    //     this.mainTableRef.copyRow();
    //     //处理按钮状态
    //     this.btnDiv.openCopyEdit();
    // }
    // copyToEnd=()=>{
    //     this.mainTableRef.copyToEnd();
    //     this.btnDiv.closeCopyEdit();
    // }
    // save=()=>{
    //     let error = this.mainTableRef.validateSelect();
    //     if(error){
    //         console.log(error)
    //     }else {
    //         //关闭编辑状态
    //         this.btnDiv.closeRowEdit();
    //         //保存数据
    //         this.grid.save();
    //     }
    // }
    // cancelEdit=()=>{
    //     this.grid.cancelEdit();
    //     this.btnDiv.closeRowEdit();
    // }
    // openRowEdit=(editItem)=>{
    //     //设置按钮状态
    //     this.btnDiv.openRowEdit();
    // }

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
     * 删除选中的记录
     * @returns {Promise<void>}
     */


    /**
     * 表格添加、修改保存方法
     * @param {*} data  添加的数据或者修改后的数据
     */


    ContactList.prototype.render = function render() {
        var _this3 = this;

        var _props$getSupplierEmp = this.props.getSupplierEmployeeList,
            getSupplierEmployeeList = _props$getSupplierEmp === undefined ? {} : _props$getSupplierEmp;
        var list = getSupplierEmployeeList.list,
            pageIndex = getSupplierEmployeeList.pageIndex,
            pageSize = getSupplierEmployeeList.pageSize,
            totalPage = getSupplierEmployeeList.totalPage,
            total = getSupplierEmployeeList.total;
        /**
         * 修改分页页数
         * @param {*} index 数组下标
         * @param {*} value 分页条数值
         */

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

        var sortObj = { //排序属性设置
            mode: 'multiple',
            backSource: true,
            sortFun: this.sortFun
        };

        return _react2["default"].createElement(
            'div',
            { className: 'contact-main' },
            _react2["default"].createElement(
                _acHeader2["default"],
                null,
                _react2["default"].createElement(_BtnDiv2["default"], {
                    ref: function ref(el) {
                        return _this3.btnDiv = el;
                    } //ref用于调用内部方法
                    , addRow: this.addRow,
                    updateAll: this.updateAll,
                    delRow: this.delRow,
                    save: this.save,
                    cancelEdit: this.cancelEdit

                })
            ),
            _react2["default"].createElement(_index.EditGrid, {
                ref: function ref(el) {
                    return _this3.grid = el;
                },
                data: list,
                rowKey: function rowKey(r) {
                    return r.id ? r.id : r.key;
                },
                columns: this.gridColumn,
                paginationObj: paginationObj //分页数据
                , getSelectedDataFunc: this.getSelectedDataFun,
                scroll: { y: 500 },
                excludeKeys: ['id', 'ts', 'code', 'createUserName', 'createTime', 'lastModifyUserName', 'lastModified'] // 不许复制的字段
                , save: function save(selectList) {
                    return _this3.onSave(selectList);
                } // 保存数据
                , delRow: function delRow(selectList) {
                    return _this3.onDel(selectList);
                } // 删除数据
                , headerScroll: true // 双向滚动条
                , openRowEdit: this.openRowEdit,
                onRowDoubleClick: this.onRowDoubleClick,
                powerBtns: []
            })
        );
    };

    return ContactList;
}(_react.Component);

exports["default"] = _tinperBee.Form.createForm()(ContactList);
module.exports = exports['default'];