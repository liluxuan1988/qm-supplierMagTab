import React, {Component} from 'react';
import {actions, connect} from "mirrorx";
import {ButtonGroup, Menu, Loading, Form, FormControl, Select, Icon, InputNumber} from 'tinper-bee'

import {Grid} from 'ac-gridcn';

import {getQueryString} from 'utils';

import './index.less';

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

class FactoryListSub extends Component {

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
            title: "工厂名称",
            dataIndex: "orgName",
            key: "orgName",
            width: 400,
            filterType: "text",//输入框类型
            filterDropdown: "show",//显示条件
            filterDropdownType: "string"//字符条件
        },
        {
            title: "工厂简称",
            dataIndex: "orgSampleName",
            key: "orgSampleName",
            width: 300,
            filterType: "text",//输入框类型
            filterDropdown: "show",//显示条件
            filterDropdownType: "string"//字符条件
        },
        {
            title: "国家",
            dataIndex: "country",
            key: "country",
            width: 150,
        },
        {
            title: "省份",
            dataIndex: "province",
            key: "province",
            width: 150,
        },
        {
            title: "城市",
            dataIndex: "city",
            key: "city",
            width: 150,
        },
        {
            title: "工厂地址",
            dataIndex: "address",
            key: "address",
            width: 500,
        },
        {
            title: "车间数量",
            dataIndex: "workshopNums",
            key: "workshopNums",
            width: 150,
            textAlign:'right', // 靠右对齐
        },
    ];

    componentDidMount() {
        this.onLoadData({supplierCode:this.props.supplierCode}); // 获取查询数据
          let serviceCode = getQueryString('serviceCode', window.location.href) || getQueryString('servicecode', window.location.href);
    }
    /**
     * 页码修改
     * @param pageIndex
     */
    pageIndexChange = (pageIndex) => {
        actions.supplierRouter.setPaginationCondition({
            pageIndex: pageIndex - 1,
            pageSize: this.props.paginationCondition.pageSize,
            setType:"getSupplierPlantData",
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
            setType:"getSupplierPlantData",
            supplierCode:this.props.supplierCode
        });
        this.setState({
            selectedIndex: 0
        })
    }
    /**
     * 加载列表数据
     * @param {*} param 查询信息
     */
    onLoadData = (param = {}) => {
        const {queryObj} = this.props;
        let {pageSize} = queryObj; // 获取分页值
        if (pageSize > 50) {// 对分页条数为 all 处理
            pageSize = 1;
        }
        let otherParam = {pageSize, pageIndex: 0}; // 其他查询条件
        actions.supplierRouter.getSupplierPlantData({ ...otherParam, ...param});  // 获取表格数据，如果传入的分页信息可以覆盖默认值
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
         })
    }

    render() {
        const {getSupplierPlantList = {} ,showLoadingChild } = this.props;
        const {list, pageIndex, pageSize, totalPage, total} = getSupplierPlantList;
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
        return (
            <div className='contact-main'>
                <div className="search-area">
                    {/*页面加载动画*/}
                    <Loading
                        fullScreen
                        showBackDrop={true}
                        show={showLoadingChild}
                    />
                </div>
                {/*员工津贴表格*/}
                <Grid
                    exportFileName={'工厂信息'}
                    ref={(el) => this.grid = el}
                    rowKey={r => r.id ? r.id : r.key}
                    columns={this.gridColumn}
                    data={list}
                    columnFilterAble={false}//下拉隐藏
                    showHeaderMenu={false}
                     paginationObj={paginationObj}//分页数据
                    headerScroll={true} // 双向滚动条
                    multiSelect={true}
                />
            </div>
        )
    }
}

export default connect(state => state.supplierRouter)(FactoryListSub);

