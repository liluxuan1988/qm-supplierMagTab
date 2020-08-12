import React, {Component} from 'react';
import {actions, connect} from "mirrorx";
 import { Menu, Loading} from 'tinper-bee'
 
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

class FactoryList extends Component {

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
            title: "企业关系",
            dataIndex: "relation",
            key: "relation",
            width: 200,
            filterType: "text",//输入框类型
            filterDropdown: "show",//显示条件
            filterDropdownType: "string"//字符条件
        },
        {
            title: "公司中文名称",
            dataIndex: "name",
            key: "name",
            width: 200,
            filterType: "text",//输入框类型
            filterDropdown: "show",//显示条件
            filterDropdownType: "string"//字符条件
        },
        {
            title: "公司地址",
            dataIndex: "address",
            key: "address",
            width: 400,
        },
        {
            title: "公司英文名称",
            dataIndex: "enName",
            key: "enName",
            width: 200,
        },
        {
            title: "公司简称",
            dataIndex: "simpleName",
            key: "simpleName",
            width: 150,
        },
        {
            title: "主要产品",
            dataIndex: "prodouction",
            key: "prodouction",
            width: 300,
        },
    ];

     data =[{businessRelations:"子公司",
         chineseCompany:"济南分公司",
         companyAddress:"济南市",
         englishCompany:" ",
         abbreviation:" ",
         mainProducts:" ",
     },{
         businessRelations:"子公司",
         chineseCompany:"佛山分公司 " ,
         companyAddress:"佛山市",
         englishCompany:" ",
         abbreviation:" ",
         mainProducts:" ",
     }
     ]

    componentDidMount() {
        this.props.onRef(this);
          let serviceCode = getQueryString('serviceCode', window.location.href) || getQueryString('servicecode', window.location.href);

    }
    onDataNumSelect = (index, value) => {
        console.log('index：', index, ' value：', value);
    }

    /**
     * 页码修改
     * @param pageIndex
     */
    pageIndexChange = (pageIndex) => {
        actions.supplierRouter.setPaginationCondition({
            pageIndex: pageIndex - 1,
            pageSize: this.props.paginationCondition.pageSize,
            setType:"getSupplierRelationData",
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
            setType:"getSupplierRelationData"
        });
        this.setState({
            selectedIndex: 0
        })
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
 

    render() {
        const {getSupplierRelationList = {} ,showLoading } = this.props;
        const {list, pageIndex, pageSize, totalPage, total} = getSupplierRelationList;
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
<div  className='contact-main'>
    <Loading
        fullScreen
        showBackDrop={true}
        show={showLoading}
    />
                {/*员工津贴表格*/}
                <Grid
                    exportFileName={'子公司信息'}
                    ref={(el) => this.grid = el}
                    rowKey={r => r.id ? r.id : r.key}
                    columns={this.gridColumn}
                    data={list}
                    columnFilterAble={false}//下拉隐藏
                    showHeaderMenu ={false}   //关闭列过滤面板。默认显示。
                     paginationObj={paginationObj}//分页数据
                    headerScroll={true} // 双向滚动条
                    multiSelect={true}
                />
            </div>
        )
    }
}

export default  FactoryList;