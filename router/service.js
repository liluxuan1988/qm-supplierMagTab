/**
 * 服务请求类
 */
import request from "utils/request";
//定义接口地址
const URL = {

    //-----------------------------------Tab 页 -------------------------------------------------//
    //定点信息
    "GET_SUPPLIERPART_LIST":  `${pom.fe.new.ctx}/SupplierPart/getSupplierPartPage`,
    //材料组
    "GET_SUPPLIERPSGROUP_LIST":  `${pom.fe.new.ctx}/SupplierPsGroup/getSupplierPsGroupPage`,
    //主要产品及客户
    "GET_SUPPLIERMAINPRODUCTION_LIST":  `${pom.fe.new.ctx}/SupplierMainproduction/getSupplierMainproductionPage`,
    //产能信息
    "GET_SUPPLIERPRODUCTION_LIST":  `${pom.fe.new.ctx}/SupplierProduction/getSupplierProductionPage`,
    //工程信息
    "GET_SUPPLIERPLANT_LIST":  `${pom.fe.new.ctx}/SupplierPlant/getSupplierPlantPage`,
    //子公司信息
    "GET_SUPPLIERREALATION_LIST":  `${pom.fe.new.ctx}/SupplierRelation/getSupplierRelationPage`,
    //企业联系人
    "GET_SUPPLIEREMPLOYEE_LIST":  `${pom.fe.new.ctx}/SupplierEmployee/getSupplierEmployeePage`,
    //编辑企业联系人
    "SAVE_SUPPLIEREMPLOYEE":  `${pom.fe.new.ctx}/SupplierEmployee/saveEntity`,
    //删除企业联系人
    "DELETE_SUPPLIEREMPLOYEE":  `${pom.fe.new.ctx}/SupplierEmployee/deleteEntity`,
    //支持材料
    "GET_SUPPLIERATTACHMENT_LIST":  `${pom.fe.new.ctx}/SupplierAttachment/getSupplierAttachmentPage`,
    //供应商绩效负责人
    "GET_SUPPLIERACHIEVECHARGE_LIST":  `${pom.fe.new.ctx}/SupplierAchieveCharge/getSupplierAchieveChargePage`,
    //供应商登记信息
    "GET_SUPPLIER_LIST":  `${pom.fe.new.ctx}/Supplier/getSupplierPage`,
    //保存绩效负责人
    "SAVE_SUPPLIERATTACHMENT":  `${pom.fe.new.ctx}/SupplierAchieveCharge/saveEntity`,
    //保存信息编辑
    "SAVE_SUPPLIERSPECIALGROUP":  `${pom.fe.new.ctx}/supplierSpecialGroup/saveEntity`,
    // 支持材料
    "GET_ATTACHMENT_LIST":  `${pom.fe.new.ctx}/SupplierAttachment/getSupplierAttachmentPage`,
    // 字典表url
    "POST_CODE_LIST":  `${pom.fe.new.ctx}/code/getCodeList`,
}


/**
 * 定点信息
 * @param data
 */
export const getSupplierPartList = data => {
    return request(URL.GET_SUPPLIERPART_LIST, {
        method: "post",
        data
    });
}

/**
 * 绩效负责人保存
 * 保存 新增、修改
 * @param {*} params
 */
export const saveSupplierAchieveCharge = data => {
    return request(URL.SAVE_SUPPLIERATTACHMENT, {
        method: "post",
        data
    });
}



/**
 * 材料组
 * @param data
 */
export const getSupplierPsGroupList = data => {
    return request(URL.GET_SUPPLIERPSGROUP_LIST, {
        method: "post",
        data
    });
}
/**
 * 主要产品及客户
 * @param data
 */
export const getSupplierMainproductionList = data => {
    return request(URL.GET_SUPPLIERMAINPRODUCTION_LIST, {
        method: "post",
        data
    });
}
/**
 * 产能信息
 * @param data
 */
export const getSupplierProductionList = data => {
    return request(URL.GET_SUPPLIERPRODUCTION_LIST, {
        method: "post",
        data
    });
}

/**
 * 支持材料
 * @param data
 */
export const getAttachmentList = data => {
    return request(URL.GET_ATTACHMENT_LIST, {
        method: "post",
        data
    });
}
/**
 * 工厂信息
 * @param data
 */
export const getSupplierPlantList = data => {
    return request(URL.GET_SUPPLIERPLANT_LIST, {
        method: "post",
        data
    });
}
/**
 * 子公司信息
 * @param data
 */
export const getSupplierRelationList = data => {
    return request(URL.GET_SUPPLIERREALATION_LIST, {
        method: "post",
        data
    });
}
/**
 * 企业联系人
 * @param data
 */
export const getSupplierEmployeeList = data => {
    return request(URL.GET_SUPPLIEREMPLOYEE_LIST, {
        method: "post",
        data
    });
}
/**
 * 企业联系人保存
 * 保存 新增、修改
 * @param {*} params
 */
export const saveSupplierEmployee = data => {
    return request(URL.SAVE_SUPPLIEREMPLOYEE, {
        method: "post",
        data
    });
}
/**
 * 信息编辑
 * 保存
 * @param data
 */
export const  saveSupplierspecialgroup  = data => {
     return request(URL.SAVE_SUPPLIERSPECIALGROUP,{
         method: "post",
         data
     });
}


/**
 * 企业联系人删除
 * 保存 新增、修改
 * @param {*} params
 */
export const deleteSupplierEmployee = data => {
    return request(URL.DELETE_SUPPLIEREMPLOYEE, {
        method: "post",
        data
    });
}
/**
 * 支持材料
 * @param data
 */
export const getSupplierAttachmentList = data => {
    return request(URL.GET_SUPPLIERATTACHMENT_LIST, {
        method: "post",
        data
    });
}
/**
 * 供应商绩效负责人
 * @param data
 */
export const getSupplierAchieveChargeList = data => {
    return request(URL.GET_SUPPLIERACHIEVECHARGE_LIST, {
        method: "post",
        data
    });
}
/**
 * 供应商登记信息
 * @param data
 */
export const getSupplierList = data => {
    return request(URL.GET_SUPPLIER_LIST, {
        method: "post",
        data
    });
}
/**
 * 字典表url
 * @param data
 */
export const  getCodeList = data => {
    return request(URL.POST_CODE_LIST, {
        method: "post",
        data
    });
}
    /**
 * 获取下拉列表的数据
 * @param params
 */
export const getSelectOptionsList = data => {
    return request( URL.POST_CODE_LIST, {
        method: "post",
        data
    })
}

