"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getSelectOptionsList = exports.getCodeList = exports.getSupplierList = exports.getSupplierAchieveChargeList = exports.getSupplierAttachmentList = exports.deleteSupplierEmployee = exports.saveSupplierspecialgroup = exports.saveSupplierEmployee = exports.getSupplierEmployeeList = exports.getSupplierRelationList = exports.getSupplierPlantList = exports.getAttachmentList = exports.getSupplierProductionList = exports.getSupplierMainproductionList = exports.getSupplierPsGroupList = exports.saveSupplierAchieveCharge = exports.getSupplierPartList = undefined;

var _request = require("utils/request");

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//定义接口地址
var URL = {

    //-----------------------------------Tab 页 -------------------------------------------------//
    //定点信息
    "GET_SUPPLIERPART_LIST": pom.fe["new"].ctx + "/SupplierPart/getSupplierPartPage",
    //材料组
    "GET_SUPPLIERPSGROUP_LIST": pom.fe["new"].ctx + "/SupplierPsGroup/getSupplierPsGroupPage",
    //主要产品及客户
    "GET_SUPPLIERMAINPRODUCTION_LIST": pom.fe["new"].ctx + "/SupplierMainproduction/getSupplierMainproductionPage",
    //产能信息
    "GET_SUPPLIERPRODUCTION_LIST": pom.fe["new"].ctx + "/SupplierProduction/getSupplierProductionPage",
    //工程信息
    "GET_SUPPLIERPLANT_LIST": pom.fe["new"].ctx + "/SupplierPlant/getSupplierPlantPage",
    //子公司信息
    "GET_SUPPLIERREALATION_LIST": pom.fe["new"].ctx + "/SupplierRelation/getSupplierRelationPage",
    //企业联系人
    "GET_SUPPLIEREMPLOYEE_LIST": pom.fe["new"].ctx + "/SupplierEmployee/getSupplierEmployeePage",
    //编辑企业联系人
    "SAVE_SUPPLIEREMPLOYEE": pom.fe["new"].ctx + "/SupplierEmployee/saveEntity",
    //删除企业联系人
    "DELETE_SUPPLIEREMPLOYEE": pom.fe["new"].ctx + "/SupplierEmployee/deleteEntity",
    //支持材料
    "GET_SUPPLIERATTACHMENT_LIST": pom.fe["new"].ctx + "/SupplierAttachment/getSupplierAttachmentPage",
    //供应商绩效负责人
    "GET_SUPPLIERACHIEVECHARGE_LIST": pom.fe["new"].ctx + "/SupplierAchieveCharge/getSupplierAchieveChargePage",
    //供应商登记信息
    "GET_SUPPLIER_LIST": pom.fe["new"].ctx + "/Supplier/getSupplierPage",
    //保存绩效负责人
    "SAVE_SUPPLIERATTACHMENT": pom.fe["new"].ctx + "/SupplierAchieveCharge/saveEntity",
    //保存信息编辑
    "SAVE_SUPPLIERSPECIALGROUP": pom.fe["new"].ctx + "/supplierSpecialGroup/saveEntity",
    // 支持材料
    "GET_ATTACHMENT_LIST": pom.fe["new"].ctx + "/SupplierAttachment/getSupplierAttachmentPage",
    // 字典表url
    "POST_CODE_LIST": pom.fe["new"].ctx + "/code/getCodeList"

    /**
     * 定点信息
     * @param data
     */
}; /**
    * 服务请求类
    */
var getSupplierPartList = exports.getSupplierPartList = function getSupplierPartList(data) {
    return (0, _request2["default"])(URL.GET_SUPPLIERPART_LIST, {
        method: "post",
        data: data
    });
};

/**
 * 绩效负责人保存
 * 保存 新增、修改
 * @param {*} params
 */
var saveSupplierAchieveCharge = exports.saveSupplierAchieveCharge = function saveSupplierAchieveCharge(data) {
    return (0, _request2["default"])(URL.SAVE_SUPPLIERATTACHMENT, {
        method: "post",
        data: data
    });
};

/**
 * 材料组
 * @param data
 */
var getSupplierPsGroupList = exports.getSupplierPsGroupList = function getSupplierPsGroupList(data) {
    return (0, _request2["default"])(URL.GET_SUPPLIERPSGROUP_LIST, {
        method: "post",
        data: data
    });
};
/**
 * 主要产品及客户
 * @param data
 */
var getSupplierMainproductionList = exports.getSupplierMainproductionList = function getSupplierMainproductionList(data) {
    return (0, _request2["default"])(URL.GET_SUPPLIERMAINPRODUCTION_LIST, {
        method: "post",
        data: data
    });
};
/**
 * 产能信息
 * @param data
 */
var getSupplierProductionList = exports.getSupplierProductionList = function getSupplierProductionList(data) {
    return (0, _request2["default"])(URL.GET_SUPPLIERPRODUCTION_LIST, {
        method: "post",
        data: data
    });
};

/**
 * 支持材料
 * @param data
 */
var getAttachmentList = exports.getAttachmentList = function getAttachmentList(data) {
    return (0, _request2["default"])(URL.GET_ATTACHMENT_LIST, {
        method: "post",
        data: data
    });
};
/**
 * 工厂信息
 * @param data
 */
var getSupplierPlantList = exports.getSupplierPlantList = function getSupplierPlantList(data) {
    return (0, _request2["default"])(URL.GET_SUPPLIERPLANT_LIST, {
        method: "post",
        data: data
    });
};
/**
 * 子公司信息
 * @param data
 */
var getSupplierRelationList = exports.getSupplierRelationList = function getSupplierRelationList(data) {
    return (0, _request2["default"])(URL.GET_SUPPLIERREALATION_LIST, {
        method: "post",
        data: data
    });
};
/**
 * 企业联系人
 * @param data
 */
var getSupplierEmployeeList = exports.getSupplierEmployeeList = function getSupplierEmployeeList(data) {
    return (0, _request2["default"])(URL.GET_SUPPLIEREMPLOYEE_LIST, {
        method: "post",
        data: data
    });
};
/**
 * 企业联系人保存
 * 保存 新增、修改
 * @param {*} params
 */
var saveSupplierEmployee = exports.saveSupplierEmployee = function saveSupplierEmployee(data) {
    return (0, _request2["default"])(URL.SAVE_SUPPLIEREMPLOYEE, {
        method: "post",
        data: data
    });
};
/**
 * 信息编辑
 * 保存
 * @param data
 */
var saveSupplierspecialgroup = exports.saveSupplierspecialgroup = function saveSupplierspecialgroup(data) {
    return (0, _request2["default"])(URL.SAVE_SUPPLIERSPECIALGROUP, {
        method: "post",
        data: data
    });
};

/**
 * 企业联系人删除
 * 保存 新增、修改
 * @param {*} params
 */
var deleteSupplierEmployee = exports.deleteSupplierEmployee = function deleteSupplierEmployee(data) {
    return (0, _request2["default"])(URL.DELETE_SUPPLIEREMPLOYEE, {
        method: "post",
        data: data
    });
};
/**
 * 支持材料
 * @param data
 */
var getSupplierAttachmentList = exports.getSupplierAttachmentList = function getSupplierAttachmentList(data) {
    return (0, _request2["default"])(URL.GET_SUPPLIERATTACHMENT_LIST, {
        method: "post",
        data: data
    });
};
/**
 * 供应商绩效负责人
 * @param data
 */
var getSupplierAchieveChargeList = exports.getSupplierAchieveChargeList = function getSupplierAchieveChargeList(data) {
    return (0, _request2["default"])(URL.GET_SUPPLIERACHIEVECHARGE_LIST, {
        method: "post",
        data: data
    });
};
/**
 * 供应商登记信息
 * @param data
 */
var getSupplierList = exports.getSupplierList = function getSupplierList(data) {
    return (0, _request2["default"])(URL.GET_SUPPLIER_LIST, {
        method: "post",
        data: data
    });
};
/**
 * 字典表url
 * @param data
 */
var getCodeList = exports.getCodeList = function getCodeList(data) {
    return (0, _request2["default"])(URL.POST_CODE_LIST, {
        method: "post",
        data: data
    });
};
/**
* 获取下拉列表的数据
* @param params
*/
var getSelectOptionsList = exports.getSelectOptionsList = function getSelectOptionsList(data) {
    return (0, _request2["default"])(URL.POST_CODE_LIST, {
        method: "post",
        data: data
    });
};