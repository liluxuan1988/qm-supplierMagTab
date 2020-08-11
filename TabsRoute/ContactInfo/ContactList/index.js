import React, {Component} from 'react';
import {actions, connect} from "mirrorx";
import moment from 'moment';
import {ButtonGroup, Menu, Loading, Form, FormControl, Select, Icon, InputNumber} from 'tinper-bee'

import { EditGrid } from 'qmac-gridcn/build/index'

import AcTips from 'ac-tips';
import Modal from 'bee-modal';
import {getQueryString} from 'utils';
import FormLayout from "ac-form-layout";

import './index.less';
import AcHeader from "ac-header";
import BtnDiv from "./BtnDiv";

const {FormItem, FormRow} = FormLayout;

const {Item} = Menu;

const dataNumObj = {
    "5": 0,
    "10": 1,
    "15": 2,
    "20": 3,
    "25": 4,
    "50": 5,
    "1": 6,
}

const layoutOpt = {
    md: 6,
    xs: 12
}

const formatDateRule = "YYYY-MM-DD HH:mm:ss"; // 格式化日期
const formatYearRule = "YYYY"; // 格式化年

class ContactList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filterable: false,
            showModal: false,
            record: {}, // 存储关联数据信息
        }
    }

    selectList = [];//选中的数据
    orderByParam = []; // 多排序
    whereParam = []; // 行过滤

    isDefaultList = this.props.IsDefault;
    // this.props.contractTypes.map((item, index) => {
    // if (item.code === value) return name = item.name
// })
    lxrTypeList = this.props.EmployeeType;

    getSelectedDataFunc = (selectData, record, index, newData) => {
        this.selectList = selectData;
    }
    //列数据
    gridColumn = [
        {
            title: "序号",
            dataIndex: "index",
            key: "index",
            textAlign:"center",
            fixed: "left",
            width: 80,
            render(text, record, index) {
                return index + 1;
            }
        },
        {
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
                data: this.lxrTypeList
            },
        },
        {
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
                data: this.isDefaultList
            },
        },
        {
            title: "联系人姓名",
            dataIndex: "employeeName",
            key: "employeeName",
            width: 150,
            renderType: 'input',
            required: true,
            validate: true,
            fieldProps: {
              maxLength:'10',
              defaultValue: ''
            },
        },
        {
            title: "登录帐号",
            dataIndex: "tsUserId",
            key: "tsUserId",
            width: 150,
            renderType: 'input',
            // required: true,
            // validate: true,
            fieldProps: {
                maxLength:'10',
                defaultValue: 0
            },
        },
        {
            title: "联系人职务(中文)",
            dataIndex: "position",
            key: "position",
            width: 150,
            renderType: 'input',
            // required: true,
            // validate: true,
            fieldProps: {
                maxLength:'10',
                defaultValue: ''
            },
        },
        {
            title: "联系人职务(英文)",
            dataIndex: "engPostion",
            key: "engPostion",
            width: 150,
            renderType: 'input',
            // required: true,
            // validate: true,
            fieldProps: {
                maxLength:'10',
                defaultValue: ''
            },
        },
        {
            title: "联系人部门",
            dataIndex: "department",
            key: "department",
            width: 150,
            renderType: 'input',
            // required: true,
            // validate: true,
            fieldProps: {
                maxLength:'10',
                defaultValue: ''
            },
        },
        {
            title: "联系人电话",
            dataIndex: "telephone",
            key: "telephone",
            width: 150,
            renderType: 'input',
            // required: true,
            validate: true,
                rules: [{
                    required: true, message: <span><Icon type="uf-exc-t"></Icon><span>请输入联系方式</span></span>,
                }, {
                }],
                defaultValue: '',

        },
        {
            title: "联系人手机",
            dataIndex: "mobil",
            key: "mobil",
            width: 150,
            renderType: 'input',
            // required: true,
            // validate: true,
            fieldProps: {
                maxLength:'10',
                defaultValue: ''
            },
        },
        {
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
                },
                    {
                        message: '邮箱码格式错误',
                        pattern: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
                    }],
                defaultValue: '',
            },
        },
        {
            title: "备注",
            dataIndex: "memo",
            key: "memo",
            width: 150,
            renderType: 'input',
            fieldProps: {
                maxLength:'100',
                defaultValue: ''
            },
        }
    ];

    componentDidMount() {
        this.props.onRef(this);
        this.onLoadData(); // 获取查询数据
        let serviceCode = getQueryString('serviceCode', window.location.href) || getQueryString('servicecode', window.location.href);
        // actions.dlSup.getPower({
        //     params: {
        //         servicecode: serviceCode
        //     },
        //     context: pom.fe.new.ctx
        // })
        console.log( this.props.selectTypeOptions);
        console.log( this.props.selectTsDefaultOptions);
     }


    /**
     * 搜索面板查询
     */
    onSearch = () => {
        this.onLoadData(); // 获取查询数据
    };

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
    getSelectedDataFun = (selectData, record, index, newData) => {
        this.selectList = selectData;
    }
    /**
     *
     * 关联数据钻取
     * @param {object} record 关联数据行数据
     * @param {string} key menu菜单key值
     */
    onRelevance = (record, key) => {
        if (key === "modelType") {  // 弹出模态框
            this.setState({record, showModal: true});
        }
        if (key === "linkType") {  // 跳转页面详情
            this.goDetailPage(2, record.id);
        }
    }
    goDetailPage = (btnFlag, id) => {
        actions.routing.push({
            pathname: '/edit',
            search: `?btnFlag=${btnFlag}&id=${id}`
        });
    }
    /**
     * 关闭模态框
     */
    close = () => {
        this.setState({showModal: false});
    }

    /**
     *
     *触发过滤输入操作以及下拉条件的回调
     * @param {string} key 过滤字段名称
     * @param {*} value 过滤字段值
     * @param {string} condition 过滤字段条件
     */
    onFilterChange = (key, value, condition) => {
        // 构造一个 map
        let tempObj = {};
        for (let item of this.whereParam) {
            tempObj[item.key] = item;
        }
        let formatValue = value;
        // if (key === 'contactType') { // 年份格式化
        //     formatValue = moment(value).format(formatDateRule);
        // }
        //

        tempObj[key] = {key, value: formatValue, condition};
        // 拼接过滤条件
        let tempArray = [];
        for (let key in tempObj) {
            tempArray.push(tempObj[key]);
        }
        this.onLoadData({whereParam: tempArray});
        this.setState({filterable: true}); // 打开行过滤
        this.whereParam = tempArray; // 缓存过滤数据
    }

    /**
     * 清除过滤条件的回调函数，回调参数为清空的字段
     * @param {string} key 清除过滤字段
     */
    onFilterClear = (key) => {
        let tempObj = {};
        for (let item of this.whereParam) {
            if (item.key !== key) {
                tempObj[item.key] = item;
            }
        }
        // 拼接过滤条件
        let tempArray = [];
        for (let key in tempObj) {
            tempArray.push(tempObj[key]);
        }
        this.onLoadData({whereParam: tempArray});
        this.setState({filterable: true}); //  打开行过滤
        this.whereParam = tempArray; // 清空过滤数据
    }

    /**
     *
     * @param {Boolean} status 控制栏位的显示/隐藏
     */
    afterRowFilter = (status) => {
        // todo 关闭是否清空过滤条件 是否发送请求
        this.onLoadData({whereParam: []});
        this.whereParam = []; // 清空过滤数据
        this.setState({filterable: status});
    }

    /**
     *
     *排序属性设置
     * @param {Array} sortParam 排序参数对象数组
     */
    sortFun = (sortParam) => {

        const {filterable} = this.state;

        let orderByParam = [];
        for (let item of sortParam) {//   转换成后端约定的数据格式
            const {order, field} = item;
            let value = order === 'ascend' ? 'ASC' : 'DESC'; // 约定 ASC 表示升序，DESC 表示降序
            orderByParam.push({[field]: value});
        }
        this.onLoadData({orderByParam});
        this.orderByParam = orderByParam;
        this.setState({filterable}); //  缓存是否打开行过滤

    }


    /**
     * 加载列表数据
     * @param {*} param 查询信息
     */
    onLoadData = (param = {}) => {
        // this.selectList = [];// 清空选中的数据
        // const {queryObj} = this.props;
        // let {pageSize} = queryObj; // 获取分页值
        // let searchData = this.child.getSearchValue(); // 获取表单组件里的值
        // if (pageSize > 50) {// 对分页条数为 all 处理
        //     pageSize = 1;
        // }
        // let otherParam = {pageSize, pageIndex: 0, orderByParam: this.orderByParam, whereParam: this.whereParam}; // 其他查询条件
        // actions.dlSup.loadData({...searchData, ...otherParam, ...param});  // 获取表格数据，如果传入的分页信息可以覆盖默认值
    }

    exportExcel = () => {
        this.grid.exportExcel();
    }

    /**
     * 新增模态框
     */
    openModal = () => {
        // actions.dlSup.getBillNo();
        this.setState({
            showModal: true,
            btnFlag: 0
        }, () => {
            // this.modelOrg.setValue('');//参照特殊处理
            // this.modelApplier.setValue('');//参照特殊处理
        })
    }

    onSave =  async (data) => {
            let id = this.props.supplierCode
           const result = data.map((item) => {
               delete item._edit; // 删除后端不要的前端标识 _edit、_status、_checked
               delete item._status;
               delete item._checked;
               item.supplierCode = id;
            return item;
        })

        let {status} = await actions.supplierRouter.saveSupplierEmployee(result);
          if (status === 'success'){
             actions.supplierRouter.refreshEdit({supplierCode:this.props.supplierCode});
            this.setState({ showModal: false })
        }
         this.btnDiv.closeRowEdit();
    }

    onDel = async (data) => {
        const filterAdd = data.filter(item => item.id);
        console.log(filterAdd);
        if (filterAdd.length > 0) { // 删除数据的数据
             if (data.status === 'success' || filterAdd.length === 0) { // 数据库删除成功或者删除前端为保存的数据
                  actions.supplierRouter.refreshEdit({supplierCode:this.props.supplierCode});
                 this.setState({ showModal: false })
             }
        }
    }

    getAllData=()=>{
        console.log(this.mainTableRef.allData)
    }
    getSelectData=()=>{
        console.log(this.mainTableRef.selectList);
        return this.mainTableRef.selectList;
    }
    validate=()=>{
        let error = this.grid.validate();
        if(error){
            alert('数据校验失败，错误信息见控制台');
            console.log(error)
        }else{
            alert('数据校验成功')
        }
    }
    validateSelect=()=>{
        let error = this.grid.validateSelect();
        if(error){
            alert('数据校验失败，错误信息见控制台');
            console.log(error)
        }else{
            alert('数据校验成功')
        }
    }

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

    addRow=()=>{
        this.btnDiv.openRowEdit();
        this.grid.addRow()
    }
    updateAll=()=>{
        //  if(this.grid.allData.length == 0)
        //         // {
        //         //     AcTips.create({
        //         //         type:'warning',
        //         //         content:"没有可编辑的数据"
        //         //     })
        //         //     return false;
        //         // }
        this.btnDiv.openRowEdit();
        this.grid.updateAll()
    }
    /**
     * 页码修改
     * @param pageIndex
     */
    pageIndexChange = (pageIndex) => {
        actions.supplierRouter.setPaginationCondition({
            pageIndex: pageIndex - 1,
            pageSize: this.props.paginationCondition.pageSize,
            setType:"getSupplierEmployeeData",
            supplierCode:this.props.supplierCode
        });
    }
    /**
     * 页大小修改
     * @param {*} index 页码
     * @param {*} num 页大小
     */
    pageSizeChange = (index, num) => {
        actions.supplierRouter.setPaginationCondition({
            pageIndex: '0',
            pageSize: num,
            setType:"getSupplierEmployeeData",
            supplierCode:this.props.supplierCode
        });
        this.setState({
            selectedIndex: 0
        })
    }
    delRow= async(data)=>{
        //this.grid.delRow()
        if(this.btnDiv.state.editFlag)
        {
            AcTips.create({
                type:'error',
                content:"请先结束编辑"
            })
            return false;
        }
         if(this.grid.selectList.length == 0)
        {
            AcTips.create({
                type:'warning',
                content:"请先选择数据"
            })
            return false;
        }
        //确认删除窗口
        Modal.confirm({
            title: '提示信息',
            keyword: '删除',
            content: "确定要删除吗?",
            onOk: this.confirmDeleteData,
            onCancel: () => {
                console.log('Cancel');
            },
            confirmType: 'two'
        })

    }
    /**
     * 删除选中的记录
     * @returns {Promise<void>}
     */
    confirmDeleteData = async () => {
        let {status} =  await  actions.supplierRouter.deleteSupplierEmployee(this.grid.selectList);
        console.log(status);
        if (status === 'success'){
            actions.supplierRouter.refreshEdit({supplierCode:this.props.supplierCode});
            this.setState({ showModal: false })
        }
        this.btnDiv.closeRowEdit();
    }



    copyRow=()=>{
        if(this.grid.selectList.length == 0)
        {
            AcTips.create({
                type:'warning',
                content:"请先选择数据"
            })
            return false;
        }
        this.grid.copyRow();
        //处理按钮状态
        this.btnDiv.openCopyEdit();
    }
    copyToEnd=()=>{
        this.grid.copyToEnd();
        this.btnDiv.closeCopyEdit();
    }
    save=()=>{
        let error = this.grid.validateSelect();
        if (error) {
            AcTips.create({
                type:'error',
                content:"数据校验失败"
            })
            console.log(error)
        } else {
            console.log(this.grid.selectList.length);
            if(this.grid.selectList.length === 0) {
                AcTips.create({
                    type:'error',
                    content:"数据保存失败"
                })
            }
            if (this.grid.selectList.length > 0) {
                const ids = Object.keys(this.selectList).map(key => this.selectList[key].id);
                // let result = actions.supplierRouter.saveSupplierEmployee(this.grid.selectList);
                this.setState({
                    showModal: false
                })
                //关闭编辑状态
                // this.btnDiv.closeRowEdit();
                //保存数据
                this.grid.save();
            }
        }
    }

    /**
     * 表格添加、修改保存方法
     * @param {*} data  添加的数据或者修改后的数据
     */
     cancelEdit=()=>{
        this.grid.cancelEdit();
        this.btnDiv.closeRowEdit();
    }
    openRowEdit=(editRecord)=>{
        this.btnDiv.openRowEdit();
        console.log(JSON.stringify(editRecord));
    }

    onRowDoubleClick=(editItem)=>{
         this.btnDiv.openRowEdit();
        console.log(editItem)
    }

    render() {
        const {getSupplierEmployeeList = {}  } = this.props;
        const {list, pageIndex, pageSize, totalPage, total} = getSupplierEmployeeList;
        /**
         * 修改分页页数
         * @param {*} index 数组下标
         * @param {*} value 分页条数值
         */
        let paginationObj = {
            activePage: pageIndex,//当前页
            items: totalPage,
            total,//总共多少条
            freshData: this.pageIndexChange,//点击下一页刷新的数据
            onDataNumSelect: this.pageSizeChange, //每页大小改变触发的事件
            showJump: true,
            disabled: false,//分页条禁用状态
            // horizontalPosition: 'center',
            dataNum: dataNumObj[pageSize],// 分页条数选择
        }

        const sortObj = {  //排序属性设置
            mode: 'multiple',
            backSource: true,
            sortFun: this.sortFun
        };

        return (
            <div className='contact-main'>
                <AcHeader>
                    <BtnDiv
                        ref={(el) => this.btnDiv = el}//ref用于调用内部方法
                        addRow={this.addRow}
                        updateAll={this.updateAll}
                        delRow={this.delRow}
                        save={this.save}
                        cancelEdit={this.cancelEdit}

                    ></BtnDiv>
                </AcHeader>
                <EditGrid
                     ref={(el) => this.grid = el}
                     data={list}
                     rowKey={r => r.id ? r.id : r.key}
                     columns={this.gridColumn}
                     paginationObj={paginationObj}//分页数据
                     getSelectedDataFunc={this.getSelectedDataFun}
                     scroll={{y: 500}}
                     excludeKeys={['id', 'ts', 'code', 'createUserName', 'createTime', 'lastModifyUserName', 'lastModified']} // 不许复制的字段
                     save={selectList => this.onSave(selectList)}  // 保存数据
                     delRow={selectList => this.onDel(selectList)}  // 删除数据
                     headerScroll={true}  // 双向滚动条
                     openRowEdit={this.openRowEdit}
                     onRowDoubleClick={this.onRowDoubleClick}
                     powerBtns={[]}
                />
            </div>
        )
    }
}

 export default Form.createForm()(ContactList);


