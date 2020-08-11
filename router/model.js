/**
 * 数据模型类
 */

import {actions} from "mirrorx";
import * as api from "./service";
import {processData, getPowerBtn} from "utils";

const initTable = {
  list: [],
  pageIndex: 1,
  pageSize: 10,
  totalPages: 0,
  total: 0,
  content:{}
}



export default {
  // 确定 Store 中的数据模型作用域
  name: "supplierRouter",
  // 设置当前 Model 所需的初始化 state
  initialState: {
    showLoading: false,
    showLoadingChild:false,
    queryObj: {
      ...initTable
    },
    detailObj: {},//详情数据
    powerBtns: [], // 按钮权限
    autoCompleteData:[],//智能感知的下拉列表
    EmployeeType:[],
    IsDefault:[],
    searchCondition: {},            // 查询条件setPaginationCondition
    paginationCondition: {         // 分页条件
      pageIndex: '0',
      pageSize: 10
    },
  },
  reducers: {
    /**
     * 纯函数，相当于 Redux 中的 Reducer，只负责对数据的更新。
     * @param {*} state
     * @param {*} data
     */
    updateState(state, data) { //更新state
      return {
        ...state,
        ...data
      }
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
    async getSupplierDetailData(params, getState) {
      actions.supplierRouter.updateState({showLoading: true});
      const {result} = processData(await api.getSupplierList(params));
      const data = result.data;
      let SupplierDetail = {...initTable}
      if (data) {
        SupplierDetail = {
          total: data.totalElements,
          totalPage: data.totalPages,
          pageSize: data.size,
          pageIndex: data.number + 1,
          content: data.content,
        }
        actions.supplierRouter.updateState({showLoading: false, SupplierDetail});
      }
    },
    /**
     * 定点信息
     * @param {*} param
     * @param {*} getState
     */
    async  getSupplierPartData(params, getState) {
      actions.supplierRouter.updateState({showLoading: true});
      const {result} = processData(await api.getSupplierPartList(params));
      const data = result.data;
      let  SupplierPartList = {...initTable};
      if (data) {
         SupplierPartList = {
          total: data.totalElements,
          totalPage: data.totalPages,
          pageSize: data.size,
          pageIndex: data.number + 1,
          list: data.content,
        }
        actions.supplierRouter.updateState({showLoading: false,  SupplierPartList});
      }
    },
    /**
     * 材料组
     * @param {*} param
     * @param {*} getState
     *
     */
    async  getSupplierPsGroupData(params, getState) {
      actions.supplierRouter.updateState({showLoading: true});
      const {result} = processData(await api.getSupplierPsGroupList(params));
      const data = result.data;
      let SupplierPsGroupList = {...initTable};
      if (data) {
        SupplierPsGroupList = {
          total: data.totalElements,
          totalPage: data.totalPages,
          pageSize: data.size,
          pageIndex: data.number + 1,
          list: data.content,
        }
        actions.supplierRouter.updateState({showLoading: false, SupplierPsGroupList});
      }
    },
    /**
     * 主要产品及客户
     * @param {*} param
     * @param {*} getState
     *
     */
    async  getSupplierMainproductionData(params, getState) {
      actions.supplierRouter.updateState({showLoading: true});
      const {result} = processData(await api.getSupplierMainproductionList(params));
      const data = result.data;
      let  getSupplierMainproductionList = {...initTable};
      if (data ) {
        getSupplierMainproductionList = {
          total: data.totalElements,
          totalPage: data.totalPages,
          pageSize: data.size,
          pageIndex: data.number + 1,
          list: data.content,
        }
        actions.supplierRouter.updateState({showLoading: false, getSupplierMainproductionList});

      }
    },
    /**
     * 支持材料
     * @param {*} param
     * @param {*} getState
     *
     */
    async  getAttachmentData(params, getState) {
      actions.supplierRouter.updateState({showLoading: true});
      const {result} = processData(await api.getAttachmentList(params));
      const data = result.data;
      let  getAttachmentList = {...initTable};
      if (data && data.content) {
        getAttachmentList = {
          total: data.totalElements,
          totalPage: data.totalPages,
          pageSize: data.size,
          pageIndex: data.number + 1,
          list: data.content,
        }
        actions.supplierRouter.updateState({showLoading: false, getAttachmentList});

      }
    },
    /**
     * 产能信息
     * @param {*} param
     * @param {*} getState
     *
     */
    async  getSupplierProductionData(params, getState) {
      actions.supplierRouter.updateState({showLoadingChild: true});
      const {result} = processData(await api.getSupplierProductionList(params));
      const data = result.data;
      let  getSupplierProductionList = {...initTable};
      if (data && data.content) {
        getSupplierProductionList = {
          total: data.totalElements,
          totalPage: data.totalPages,
          pageSize: data.size,
          pageIndex: data.number + 1,
          list: data.content,
        }
        actions.supplierRouter.updateState({showLoadingChild: false, getSupplierProductionList});
      }
    },
    /**
     * 子公司信息
     * @param {*} param
     * @param {*} getState
     *
     */
    async  getSupplierRelationData(params, getState) {
      actions.supplierRouter.updateState({showLoading: true});
      const {result} = processData(await api.getSupplierRelationList(params));
      const data = result.data;
      let   getSupplierRelationList = {...initTable};
      if (data && data.content) {
        getSupplierRelationList = {
          total: data.totalElements,
          totalPage: data.totalPages,
          pageSize: data.size,
          pageIndex: data.number + 1,
          list: data.content,
        }
        actions.supplierRouter.updateState({showLoading: false, getSupplierRelationList});
      }
    },
    /**
     * 工厂信息
     * @param {*} param
     * @param {*} getState
     *
     */
    async  getSupplierPlantData(params, getState) {
      actions.supplierRouter.updateState({showLoadingChild: true});
      const {result} = processData(await api.getSupplierPlantList(params));
      const data = result.data;
      let   getSupplierPlantList = {...initTable};
      if (data && data.content) {
        getSupplierPlantList = {
          total: data.totalElements,
          totalPage: data.totalPages,
          pageSize: data.size,
          pageIndex: data.number + 1,
          list: data.content,
        }
        actions.supplierRouter.updateState({showLoadingChild: false, getSupplierPlantList});
      }
    },
    /**
     * 企业联系人
     * @param {*} param
     * @param {*} getState
     *
     */
    async  getSupplierEmployeeData(params, getState) {
      actions.supplierRouter.updateState({showLoading: true});
      const {result} = processData(await api.getSupplierEmployeeList(params));
      const data = result.data;
      let   getSupplierEmployeeList = {...initTable};
      if (data && data.content) {
        getSupplierEmployeeList = {
          total: data.totalElements,
          totalPage: data.totalPages,
          pageSize: data.size,
          pageIndex: data.number + 1,
          list: data.content,
        }
        actions.supplierRouter.updateState({showLoading: false, getSupplierEmployeeList});
      }
    },
    /**
     * 获取select下拉列表的数据 联系人类型
     * @param params
     * @param getState
     * @returns {Promise<void>}
     */
    async getSelectOptionsList(params, getState) {
       const {result} = processData(await api.getSelectOptionsList(params));
      const {data} = result;
      const {data: dataList} = data
      return data;

    },
    /**
     * 绩效负责人新增/保存
     * @param {*} params
     * @param {*} getState
     */
    async saveSupplierAchieve(params, getState) {
      actions.supplierRouter.updateState({showLoading: true});
      let {result} = processData(await api.saveSupplierAchieveCharge(params), '操作成功');
      actions.supplierRouter.updateState({showLoading: false});
      return result;
    },
    /**
     *
     */
    async saveSupplierspecialgroup (params,getState) {
      actions.supplierRouter.updateState({showLoading: true});
      let {result} = processData(await api.saveSupplierspecialgroup(params), '操作成功');
      actions.supplierRouter.updateState({showLoading: false});
      return result;
    },

    /**
     * 企业联系人保存
     * @param params
     * @param getState
     * @returns {Promise<*>}
     */
    async saveSupplierEmployee(params) {
      actions.supplierRouter.updateState({showLoading: true});
      let {result} = processData(await api.saveSupplierEmployee(params), '操作成功');
      actions.supplierRouter.updateState({showLoading: false});
      return result;
    },
    /**
     * 企业联系人删除
     * @param params
     * @param getState
     * @returns {Promise<*>}
     */
    async deleteSupplierEmployee(params) {
      actions.supplierRouter.updateState({showLoading: true});
      let {result} = processData(await api.deleteSupplierEmployee(params), '操作成功');
      actions.supplierRouter.updateState({showLoading: false});
      return result;
    },
    /**
     * 按钮权限
     * @param {} params
     */
    async getPower(params) {
      const {result} = processData(await getPowerBtn(params));
      if (result.data && result.data.authperm) {
        actions.supplierRouter.updateState({
          powerBtns: result.data.authperm
        })
      }
    },
    /**
     * 记录查询条件并查询
     * @param {*} params
     * @param {*} getState
     */
    async setSearchCondition(params, getState) {
      actions.supplierRouter.updateState({
        searchCondition: params
      })
      let pagiCond = getState().supplierRouter.paginationCondition;
      let condition = { ...params, ...pagiCond, pageIndex: '0' }; // 搜索时切换到第一页，不改变页面容量
      actions.supplierRouter.getSupplierData(condition);
    },
    /**
     * 记录分页条件并查询
     * @param {*} params
     * @param {*} getState
     */
    async setPaginationCondition(params, getState) {
      let{pageIndex,pageSize,setType,supplierCode} ={...params}
      //supplierCode 查询主键
      let page ={pageIndex,pageSize,supplierCode}
       actions.supplierRouter.updateState({
        paginationCondition: page
      })
       switch (setType) {
        case "getSupplierData":
          return actions.supplierRouter.getSupplierData(page);
        case "getSupplierPartData":
          //定点信息
          return actions.supplierRouter.getSupplierPartData(page);
        case "getSupplierEmployeeData":
          //企业联系人
          return actions.supplierRouter.getSupplierEmployeeData(page);
        case "getSupplierPlantData":
          //工厂信息
          return actions.supplierRouter.getSupplierPlantData(page);
        case "getSupplierRelationData":
          //子公司信息
          return actions.supplierRouter.getSupplierRelationData(page);
        case "getSupplierProductionData":
          //产能信息
          return actions.supplierRouter.getSupplierProductionData(page);
        case "getAttachmentData":
          //支持材料
          return actions.supplierRouter.getAttachmentData(page);
        case "getSupplierPsGroupData":
          //材料组
          return actions.supplierRouter.getSupplierPsGroupData(page);
        case  "getSupplierMainproductionData":
          //主要产品及客户
          return actions.supplierRouter.getSupplierMainproductionData(page);
      }
    },

    /**
     * 联系人类型
     *
     * @param params
     */
    async  getEmployeeTypeSelect(params) {
      const {result} = processData(await api.getSelectOptionsList(params));
      const data = result.data;
      let resultSource  = [];
      if(data.length>0){
        data.map(item => {
          if(item.code==="") {
            let list = {
              key:  "请选择",
              value: "",
            }
            resultSource.push(list);
          }else{
            let list = {
              key:  item.name,
              value: item.code,
            }
            resultSource.push(list);
          }
          actions.supplierRouter.updateState({
            EmployeeType:resultSource
          })
        })
      }
    },
    /**
     * 联系人类型
     *
     * @param params
     */
    async  getEmployeeIsDefaultSelect(params) {
      const {result} = processData(await api.getSelectOptionsList(params));
      const data = result.data.data;
      let resultSource  = [];
      if(data.length>0){
        data.map(item => {
          if(item.code===""){
            let list = {
              key:  "请选择",
              value: "",
            }
            resultSource.push(list);
          }else{
            let list = {
              key:  item.name,
              value: item.code,
            }
            resultSource.push(list);
          }
          actions.supplierRouter.updateState({
            IsDefault:resultSource
        })
        })
      }
 },
    /**
     * 更新查询条件
     * @param params
     * @param getState
     * @returns {Promise<void>}
     */
    async updateSearchCondition(params, getState) {
      actions.supplierRouter.updateState({searchCondition: params})
    },
    /**
     * 刷新表格数据
     * @param {*} params
     * @param {*} getState
     */
    async refresh(params, getState) {
      let condition = { ...params,...getState().supplierRouter.paginationCondition, ...getState().supplierRouter.searchCondition, pageIndex: '0' }
      actions.supplierRouter.getSupplierPartData(condition);
    },
    async refreshEdit(params,getState) {
       let condition = {...params, ...getState().supplierRouter.paginationCondition, ...getState().supplierRouter.searchCondition, pageIndex: '0' }
      actions.supplierRouter.getSupplierEmployeeData(condition);
    }
  }
  //---------------------------------------Tab 页 --------------------------------------------------------------------------------//
}
