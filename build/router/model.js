"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * 数据模型类
                                                                                                                                                                                                                                                                   */

var _mirrorx = require("mirrorx");

var _service = require("./service");

var api = _interopRequireWildcard(_service);

var _utils = require("utils");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var initTable = {
  list: [],
  pageIndex: 1,
  pageSize: 10,
  totalPages: 0,
  total: 0,
  content: {}
};

exports["default"] = {
  // 确定 Store 中的数据模型作用域
  name: "supplierRouter",
  // 设置当前 Model 所需的初始化 state
  initialState: {
    showLoading: false,
    showLoadingChild: false,
    queryObj: _extends({}, initTable),
    detailObj: {}, //详情数据
    powerBtns: [], // 按钮权限
    autoCompleteData: [], //智能感知的下拉列表
    EmployeeType: [],
    IsDefault: [],
    searchCondition: {}, // 查询条件setPaginationCondition
    paginationCondition: { // 分页条件
      pageIndex: '0',
      pageSize: 10
    }
  },
  reducers: {
    /**
     * 纯函数，相当于 Redux 中的 Reducer，只负责对数据的更新。
     * @param {*} state
     * @param {*} data
     */
    updateState: function updateState(state, data) {
      //更新state
      return _extends({}, state, data);
    }
  },

  effects: {

    // ----------------------------Tab页 整体  ------------------------------------------------------------------//
    /**
     * tab 页面  说明  传入的值目前为   supplierCode 为主键
     *主页面  Modal  页面 还需要添加   shou 属性   close  属性  切换tab 页的属性
     *
     *
     * 加载供应商详细内容
     * @param {*} param
     * @param {*} getState
     */
    getSupplierDetailData: function getSupplierDetailData(params, getState) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _processData, result, data, SupplierDetail;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _mirrorx.actions.supplierRouter.updateState({ showLoading: true });
                _context.t0 = _utils.processData;
                _context.next = 4;
                return api.getSupplierList(params);

              case 4:
                _context.t1 = _context.sent;
                _processData = (0, _context.t0)(_context.t1);
                result = _processData.result;
                data = result.data;
                SupplierDetail = _extends({}, initTable);

                if (data) {
                  SupplierDetail = {
                    total: data.totalElements,
                    totalPage: data.totalPages,
                    pageSize: data.size,
                    pageIndex: data.number + 1,
                    content: data.content
                  };
                  _mirrorx.actions.supplierRouter.updateState({ showLoading: false, SupplierDetail: SupplierDetail });
                }

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },

    /**
     * 定点信息
     * @param {*} param
     * @param {*} getState
     */
    getSupplierPartData: function getSupplierPartData(params, getState) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _processData2, result, data, SupplierPartList;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _mirrorx.actions.supplierRouter.updateState({ showLoading: true });
                _context2.t0 = _utils.processData;
                _context2.next = 4;
                return api.getSupplierPartList(params);

              case 4:
                _context2.t1 = _context2.sent;
                _processData2 = (0, _context2.t0)(_context2.t1);
                result = _processData2.result;
                data = result.data;
                SupplierPartList = _extends({}, initTable);

                if (data) {
                  SupplierPartList = {
                    total: data.totalElements,
                    totalPage: data.totalPages,
                    pageSize: data.size,
                    pageIndex: data.number + 1,
                    list: data.content
                  };
                  _mirrorx.actions.supplierRouter.updateState({ showLoading: false, SupplierPartList: SupplierPartList });
                }

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },

    /**
     * 材料组
     * @param {*} param
     * @param {*} getState
     *
     */
    getSupplierPsGroupData: function getSupplierPsGroupData(params, getState) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var _processData3, result, data, SupplierPsGroupList;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _mirrorx.actions.supplierRouter.updateState({ showLoading: true });
                _context3.t0 = _utils.processData;
                _context3.next = 4;
                return api.getSupplierPsGroupList(params);

              case 4:
                _context3.t1 = _context3.sent;
                _processData3 = (0, _context3.t0)(_context3.t1);
                result = _processData3.result;
                data = result.data;
                SupplierPsGroupList = _extends({}, initTable);

                if (data) {
                  SupplierPsGroupList = {
                    total: data.totalElements,
                    totalPage: data.totalPages,
                    pageSize: data.size,
                    pageIndex: data.number + 1,
                    list: data.content
                  };
                  _mirrorx.actions.supplierRouter.updateState({ showLoading: false, SupplierPsGroupList: SupplierPsGroupList });
                }

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, _this3);
      }))();
    },

    /**
     * 主要产品及客户
     * @param {*} param
     * @param {*} getState
     *
     */
    getSupplierMainproductionData: function getSupplierMainproductionData(params, getState) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var _processData4, result, data, getSupplierMainproductionList;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _mirrorx.actions.supplierRouter.updateState({ showLoading: true });
                _context4.t0 = _utils.processData;
                _context4.next = 4;
                return api.getSupplierMainproductionList(params);

              case 4:
                _context4.t1 = _context4.sent;
                _processData4 = (0, _context4.t0)(_context4.t1);
                result = _processData4.result;
                data = result.data;
                getSupplierMainproductionList = _extends({}, initTable);

                if (data) {
                  getSupplierMainproductionList = {
                    total: data.totalElements,
                    totalPage: data.totalPages,
                    pageSize: data.size,
                    pageIndex: data.number + 1,
                    list: data.content
                  };
                  _mirrorx.actions.supplierRouter.updateState({ showLoading: false, getSupplierMainproductionList: getSupplierMainproductionList });
                }

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, _this4);
      }))();
    },

    /**
     * 支持材料
     * @param {*} param
     * @param {*} getState
     *
     */
    getAttachmentData: function getAttachmentData(params, getState) {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var _processData5, result, data, getAttachmentList;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _mirrorx.actions.supplierRouter.updateState({ showLoading: true });
                _context5.t0 = _utils.processData;
                _context5.next = 4;
                return api.getAttachmentList(params);

              case 4:
                _context5.t1 = _context5.sent;
                _processData5 = (0, _context5.t0)(_context5.t1);
                result = _processData5.result;
                data = result.data;
                getAttachmentList = _extends({}, initTable);

                if (data && data.content) {
                  getAttachmentList = {
                    total: data.totalElements,
                    totalPage: data.totalPages,
                    pageSize: data.size,
                    pageIndex: data.number + 1,
                    list: data.content
                  };
                  _mirrorx.actions.supplierRouter.updateState({ showLoading: false, getAttachmentList: getAttachmentList });
                }

              case 10:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, _this5);
      }))();
    },

    /**
     * 产能信息
     * @param {*} param
     * @param {*} getState
     *
     */
    getSupplierProductionData: function getSupplierProductionData(params, getState) {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var _processData6, result, data, getSupplierProductionList;

        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _mirrorx.actions.supplierRouter.updateState({ showLoadingChild: true });
                _context6.t0 = _utils.processData;
                _context6.next = 4;
                return api.getSupplierProductionList(params);

              case 4:
                _context6.t1 = _context6.sent;
                _processData6 = (0, _context6.t0)(_context6.t1);
                result = _processData6.result;
                data = result.data;
                getSupplierProductionList = _extends({}, initTable);

                if (data && data.content) {
                  getSupplierProductionList = {
                    total: data.totalElements,
                    totalPage: data.totalPages,
                    pageSize: data.size,
                    pageIndex: data.number + 1,
                    list: data.content
                  };
                  _mirrorx.actions.supplierRouter.updateState({ showLoadingChild: false, getSupplierProductionList: getSupplierProductionList });
                }

              case 10:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, _this6);
      }))();
    },

    /**
     * 子公司信息
     * @param {*} param
     * @param {*} getState
     *
     */
    getSupplierRelationData: function getSupplierRelationData(params, getState) {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
        var _processData7, result, data, getSupplierRelationList;

        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _mirrorx.actions.supplierRouter.updateState({ showLoading: true });
                _context7.t0 = _utils.processData;
                _context7.next = 4;
                return api.getSupplierRelationList(params);

              case 4:
                _context7.t1 = _context7.sent;
                _processData7 = (0, _context7.t0)(_context7.t1);
                result = _processData7.result;
                data = result.data;
                getSupplierRelationList = _extends({}, initTable);

                if (data && data.content) {
                  getSupplierRelationList = {
                    total: data.totalElements,
                    totalPage: data.totalPages,
                    pageSize: data.size,
                    pageIndex: data.number + 1,
                    list: data.content
                  };
                  _mirrorx.actions.supplierRouter.updateState({ showLoading: false, getSupplierRelationList: getSupplierRelationList });
                }

              case 10:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, _this7);
      }))();
    },

    /**
     * 工厂信息
     * @param {*} param
     * @param {*} getState
     *
     */
    getSupplierPlantData: function getSupplierPlantData(params, getState) {
      var _this8 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
        var _processData8, result, data, getSupplierPlantList;

        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _mirrorx.actions.supplierRouter.updateState({ showLoadingChild: true });
                _context8.t0 = _utils.processData;
                _context8.next = 4;
                return api.getSupplierPlantList(params);

              case 4:
                _context8.t1 = _context8.sent;
                _processData8 = (0, _context8.t0)(_context8.t1);
                result = _processData8.result;
                data = result.data;
                getSupplierPlantList = _extends({}, initTable);

                if (data && data.content) {
                  getSupplierPlantList = {
                    total: data.totalElements,
                    totalPage: data.totalPages,
                    pageSize: data.size,
                    pageIndex: data.number + 1,
                    list: data.content
                  };
                  _mirrorx.actions.supplierRouter.updateState({ showLoadingChild: false, getSupplierPlantList: getSupplierPlantList });
                }

              case 10:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, _this8);
      }))();
    },

    /**
     * 企业联系人
     * @param {*} param
     * @param {*} getState
     *
     */
    getSupplierEmployeeData: function getSupplierEmployeeData(params, getState) {
      var _this9 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
        var _processData9, result, data, getSupplierEmployeeList;

        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _mirrorx.actions.supplierRouter.updateState({ showLoading: true });
                _context9.t0 = _utils.processData;
                _context9.next = 4;
                return api.getSupplierEmployeeList(params);

              case 4:
                _context9.t1 = _context9.sent;
                _processData9 = (0, _context9.t0)(_context9.t1);
                result = _processData9.result;
                data = result.data;
                getSupplierEmployeeList = _extends({}, initTable);

                if (data && data.content) {
                  getSupplierEmployeeList = {
                    total: data.totalElements,
                    totalPage: data.totalPages,
                    pageSize: data.size,
                    pageIndex: data.number + 1,
                    list: data.content
                  };
                  _mirrorx.actions.supplierRouter.updateState({ showLoading: false, getSupplierEmployeeList: getSupplierEmployeeList });
                }

              case 10:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, _this9);
      }))();
    },

    /**
     * 获取select下拉列表的数据 联系人类型
     * @param params
     * @param getState
     * @returns {Promise<void>}
     */
    getSelectOptionsList: function getSelectOptionsList(params, getState) {
      var _this10 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
        var _processData10, result, data, dataList;

        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.t0 = _utils.processData;
                _context10.next = 3;
                return api.getSelectOptionsList(params);

              case 3:
                _context10.t1 = _context10.sent;
                _processData10 = (0, _context10.t0)(_context10.t1);
                result = _processData10.result;
                data = result.data;
                dataList = data.data;
                return _context10.abrupt("return", data);

              case 9:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, _this10);
      }))();
    },

    /**
     * 绩效负责人新增/保存
     * @param {*} params
     * @param {*} getState
     */
    saveSupplierAchieve: function saveSupplierAchieve(params, getState) {
      var _this11 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
        var _processData11, result;

        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _mirrorx.actions.supplierRouter.updateState({ showLoading: true });
                _context11.t0 = _utils.processData;
                _context11.next = 4;
                return api.saveSupplierAchieveCharge(params);

              case 4:
                _context11.t1 = _context11.sent;
                _processData11 = (0, _context11.t0)(_context11.t1, '操作成功');
                result = _processData11.result;

                _mirrorx.actions.supplierRouter.updateState({ showLoading: false });
                return _context11.abrupt("return", result);

              case 9:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, _this11);
      }))();
    },

    /**
     *
     */
    saveSupplierspecialgroup: function saveSupplierspecialgroup(params, getState) {
      var _this12 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
        var _processData12, result;

        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _mirrorx.actions.supplierRouter.updateState({ showLoading: true });
                _context12.t0 = _utils.processData;
                _context12.next = 4;
                return api.saveSupplierspecialgroup(params);

              case 4:
                _context12.t1 = _context12.sent;
                _processData12 = (0, _context12.t0)(_context12.t1, '操作成功');
                result = _processData12.result;

                _mirrorx.actions.supplierRouter.updateState({ showLoading: false });
                return _context12.abrupt("return", result);

              case 9:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, _this12);
      }))();
    },


    /**
     * 企业联系人保存
     * @param params
     * @param getState
     * @returns {Promise<*>}
     */
    saveSupplierEmployee: function saveSupplierEmployee(params) {
      var _this13 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
        var _processData13, result;

        return regeneratorRuntime.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _mirrorx.actions.supplierRouter.updateState({ showLoading: true });
                _context13.t0 = _utils.processData;
                _context13.next = 4;
                return api.saveSupplierEmployee(params);

              case 4:
                _context13.t1 = _context13.sent;
                _processData13 = (0, _context13.t0)(_context13.t1, '操作成功');
                result = _processData13.result;

                _mirrorx.actions.supplierRouter.updateState({ showLoading: false });
                return _context13.abrupt("return", result);

              case 9:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, _this13);
      }))();
    },

    /**
     * 企业联系人删除
     * @param params
     * @param getState
     * @returns {Promise<*>}
     */
    deleteSupplierEmployee: function deleteSupplierEmployee(params) {
      var _this14 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
        var _processData14, result;

        return regeneratorRuntime.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _mirrorx.actions.supplierRouter.updateState({ showLoading: true });
                _context14.t0 = _utils.processData;
                _context14.next = 4;
                return api.deleteSupplierEmployee(params);

              case 4:
                _context14.t1 = _context14.sent;
                _processData14 = (0, _context14.t0)(_context14.t1, '操作成功');
                result = _processData14.result;

                _mirrorx.actions.supplierRouter.updateState({ showLoading: false });
                return _context14.abrupt("return", result);

              case 9:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, _this14);
      }))();
    },

    /**
     * 按钮权限
     * @param {} params
     */
    getPower: function getPower(params) {
      var _this15 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
        var _processData15, result;

        return regeneratorRuntime.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.t0 = _utils.processData;
                _context15.next = 3;
                return (0, _utils.getPowerBtn)(params);

              case 3:
                _context15.t1 = _context15.sent;
                _processData15 = (0, _context15.t0)(_context15.t1);
                result = _processData15.result;

                if (result.data && result.data.authperm) {
                  _mirrorx.actions.supplierRouter.updateState({
                    powerBtns: result.data.authperm
                  });
                }

              case 7:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, _this15);
      }))();
    },

    /**
     * 记录查询条件并查询
     * @param {*} params
     * @param {*} getState
     */
    setSearchCondition: function setSearchCondition(params, getState) {
      var _this16 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
        var pagiCond, condition;
        return regeneratorRuntime.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                _mirrorx.actions.supplierRouter.updateState({
                  searchCondition: params
                });
                pagiCond = getState().supplierRouter.paginationCondition;
                condition = _extends({}, params, pagiCond, { pageIndex: '0' }); // 搜索时切换到第一页，不改变页面容量

                _mirrorx.actions.supplierRouter.getSupplierData(condition);

              case 4:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, _this16);
      }))();
    },

    /**
     * 记录分页条件并查询
     * @param {*} params
     * @param {*} getState
     */
    setPaginationCondition: function setPaginationCondition(params, getState) {
      var _this17 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
        var _params, pageIndex, pageSize, setType, supplierCode, page;

        return regeneratorRuntime.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                _params = _extends({}, params), pageIndex = _params.pageIndex, pageSize = _params.pageSize, setType = _params.setType, supplierCode = _params.supplierCode;
                //supplierCode 查询主键

                page = { pageIndex: pageIndex, pageSize: pageSize, supplierCode: supplierCode };

                _mirrorx.actions.supplierRouter.updateState({
                  paginationCondition: page
                });
                _context17.t0 = setType;
                _context17.next = _context17.t0 === "getSupplierData" ? 6 : _context17.t0 === "getSupplierPartData" ? 7 : _context17.t0 === "getSupplierEmployeeData" ? 8 : _context17.t0 === "getSupplierPlantData" ? 9 : _context17.t0 === "getSupplierRelationData" ? 10 : _context17.t0 === "getSupplierProductionData" ? 11 : _context17.t0 === "getAttachmentData" ? 12 : _context17.t0 === "getSupplierPsGroupData" ? 13 : _context17.t0 === "getSupplierMainproductionData" ? 14 : 15;
                break;

              case 6:
                return _context17.abrupt("return", _mirrorx.actions.supplierRouter.getSupplierData(page));

              case 7:
                return _context17.abrupt("return", _mirrorx.actions.supplierRouter.getSupplierPartData(page));

              case 8:
                return _context17.abrupt("return", _mirrorx.actions.supplierRouter.getSupplierEmployeeData(page));

              case 9:
                return _context17.abrupt("return", _mirrorx.actions.supplierRouter.getSupplierPlantData(page));

              case 10:
                return _context17.abrupt("return", _mirrorx.actions.supplierRouter.getSupplierRelationData(page));

              case 11:
                return _context17.abrupt("return", _mirrorx.actions.supplierRouter.getSupplierProductionData(page));

              case 12:
                return _context17.abrupt("return", _mirrorx.actions.supplierRouter.getAttachmentData(page));

              case 13:
                return _context17.abrupt("return", _mirrorx.actions.supplierRouter.getSupplierPsGroupData(page));

              case 14:
                return _context17.abrupt("return", _mirrorx.actions.supplierRouter.getSupplierMainproductionData(page));

              case 15:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, _this17);
      }))();
    },


    /**
     * 联系人类型
     *
     * @param params
     */
    getEmployeeTypeSelect: function getEmployeeTypeSelect(params) {
      var _this18 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
        var _processData16, result, data, resultSource;

        return regeneratorRuntime.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                _context18.t0 = _utils.processData;
                _context18.next = 3;
                return api.getSelectOptionsList(params);

              case 3:
                _context18.t1 = _context18.sent;
                _processData16 = (0, _context18.t0)(_context18.t1);
                result = _processData16.result;
                data = result.data;
                resultSource = [];

                if (data.length > 0) {
                  data.map(function (item) {
                    if (item.code === "") {
                      var list = {
                        key: "请选择",
                        value: ""
                      };
                      resultSource.push(list);
                    } else {
                      var _list = {
                        key: item.name,
                        value: item.code
                      };
                      resultSource.push(_list);
                    }
                    _mirrorx.actions.supplierRouter.updateState({
                      EmployeeType: resultSource
                    });
                  });
                }

              case 9:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, _this18);
      }))();
    },

    /**
     * 联系人类型
     *
     * @param params
     */
    getEmployeeIsDefaultSelect: function getEmployeeIsDefaultSelect(params) {
      var _this19 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
        var _processData17, result, data, resultSource;

        return regeneratorRuntime.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                _context19.t0 = _utils.processData;
                _context19.next = 3;
                return api.getSelectOptionsList(params);

              case 3:
                _context19.t1 = _context19.sent;
                _processData17 = (0, _context19.t0)(_context19.t1);
                result = _processData17.result;
                data = result.data.data;
                resultSource = [];

                if (data.length > 0) {
                  data.map(function (item) {
                    if (item.code === "") {
                      var list = {
                        key: "请选择",
                        value: ""
                      };
                      resultSource.push(list);
                    } else {
                      var _list2 = {
                        key: item.name,
                        value: item.code
                      };
                      resultSource.push(_list2);
                    }
                    _mirrorx.actions.supplierRouter.updateState({
                      IsDefault: resultSource
                    });
                  });
                }

              case 9:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, _this19);
      }))();
    },

    /**
     * 更新查询条件
     * @param params
     * @param getState
     * @returns {Promise<void>}
     */
    updateSearchCondition: function updateSearchCondition(params, getState) {
      var _this20 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
        return regeneratorRuntime.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                _mirrorx.actions.supplierRouter.updateState({ searchCondition: params });

              case 1:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, _this20);
      }))();
    },

    /**
     * 刷新表格数据
     * @param {*} params
     * @param {*} getState
     */
    refresh: function refresh(params, getState) {
      var _this21 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
        var condition;
        return regeneratorRuntime.wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                condition = _extends({}, params, getState().supplierRouter.paginationCondition, getState().supplierRouter.searchCondition, { pageIndex: '0' });

                _mirrorx.actions.supplierRouter.getSupplierPartData(condition);

              case 2:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, _this21);
      }))();
    },
    refreshEdit: function refreshEdit(params, getState) {
      var _this22 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
        var condition;
        return regeneratorRuntime.wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                condition = _extends({}, params, getState().supplierRouter.paginationCondition, getState().supplierRouter.searchCondition, { pageIndex: '0' });

                _mirrorx.actions.supplierRouter.getSupplierEmployeeData(condition);

              case 2:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, _this22);
      }))();
    }
  }
  //---------------------------------------Tab 页 --------------------------------------------------------------------------------//
};
module.exports = exports["default"];