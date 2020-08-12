import React, { Component } from "react";
import {Grid} from "ac-gridcn";
import {Form, Loading} from 'tinper-bee';
import {actions} from "mirrorx";


const data  = [
    {
        products:"副仪表板区域",
        customer:"一汽轿车",
        model:"X80",
        supplyStatus:"批量供货",
        startTime:" ",
        annualMatching:"20000",
        matchingProportion:"100",
        annualSales:"1000000",
        mainStructure:"注塑",
        placeSupply:"内饰工厂",
        remarks:" ",
    },
    {
        products:"座椅总成",
        customer:"一汽轿车",
        model:"Benturn X80F",
        supplyStatus:"批量供货",
        startTime:" ",
        annualMatching:"29000",
        matchingProportion:"100",
        annualSales:"58000000",
        mainStructure:"前后排",
        placeSupply:"座椅工厂",
        remarks:" ",
    },
    {
        products:"座椅总成",
        customer:"一汽吉林",
        model:"森雅 R7",
        supplyStatus:"批量供货",
        startTime:" ",
        annualMatching:"43000",
        matchingProportion:"100",
        annualSales:"86000000",
        mainStructure:"前后排",
        placeSupply:"座椅工厂",
        remarks:" ",
    },
    {
        products:"座椅总成",
        customer:"一汽大众",
        model:"BORA NF",
        supplyStatus:"批量供货",
        startTime:" ",
        annualMatching:"58000",
        matchingProportion:"100",
        annualSales:"1160000",
        mainStructure:"前后排",
        placeSupply:"座椅工厂",
        remarks:" ",
    },
    {
        products:"座椅总成",
        customer:"天津一汽夏利",
        model:"T086",
        supplyStatus:"批量供货",
        startTime:" ",
        annualMatching:"84000",
        matchingProportion:"100",
        annualSales:"1260000",
        mainStructure:"前后排",
        placeSupply:"座椅工厂",
        remarks:" ",
    },
    {
        products:"座椅总成",
        customer:"一汽丰田",
        model:"RAV4",
        supplyStatus:"批量供货",
        startTime:" ",
        annualMatching:"108000",
        matchingProportion:"100",
        annualSales:"324000000",
        mainStructure:"前后排",
        placeSupply:"座椅工厂",
        remarks:" ",
    },
];
const dataNumObj = {
    "5": 0,
    "10": 1,
    "15": 2,
    "20": 3,
    "25": 4,
    "50": 5,
    "1": 6,
}
class MainProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterable: false,
            showModal: false,
            record: {}, // 存储关联数据信息
        };
    }

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
        { title: "主要产品",
            dataIndex: "materialName", key: "materialName", width:200},
        { title: "客户", dataIndex: "customer", key: "customer", width:200,},
        { title: "车型/上市名称", dataIndex: "vehicle", key: "vehicle", width:200},
        { title: "供货状态\n", dataIndex: "supplyStatus", key: "supplyStatus", width:200},
        { title: "批量供货开始时间", dataIndex: "matintTime", key: "matintTime", width:200},
        { title: "年配套量(辆份)", dataIndex: "matintNums", key: "matintNums",textAlign:'right', width:200 // 靠右对齐
        },
        { title: "配套比例", dataIndex: "matintPercent", key: "matintPercent",textAlign:'right', width:200   // 靠右对齐
        },
        { title: "年销售额(万元)", dataIndex: "salesVolume", key: "salesVolume",textAlign:'right',  width:200 // 靠右对齐
        },
        { title: "主要结构/工艺特点", dataIndex: "mainlyStructure", key: "mainlyStructure", width:200},
        { title: "供货生产地", dataIndex: "supplyProduction", key: "supplyProduction", width:200},
        { title: "备注", dataIndex: "remark", key: "remark", width:200}
    ];

    /**
     * 页码修改
     * @param pageIndex
     */
    pageIndexChange = (pageIndex) => {
        actions.supplierRouter.setPaginationCondition({
            pageIndex: pageIndex - 1,
            pageSize: this.props.paginationCondition.pageSize,
            setType:"getSupplierMainproductionData",
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
            setType:"getSupplierMainproductionData"
        });
        this.setState({
            selectedIndex: 0
        })
    }
    // onDataNumSelect = (index, value) => {
    //     console.log('index：', index, ' value：', value);
    // }

    render() {
        const {getSupplierMainproductionList = {} ,showLoading } = this.props;
        const {list, pageIndex, pageSize, totalPage, total} = getSupplierMainproductionList;
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

        };
         return (
            <div  className='contact-main'>
                <Loading fullScreen showBackDrop={true} show={showLoading}/>

            <Grid
                ref={(ref) => this.grid = ref}
                rowKey={r => r.id ? r.id : r.key}
                columns={this.gridColumn}
                data={list}
                getSelectedDataFunc={this.getSelectedDataFunc}
                paginationObj={paginationObj}//分页数据
                headerScroll={true} // 双向滚动条
                multiSelect={true}
                // onRowClick={this.onSelect}
                columnFilterAble={false}//下拉隐藏
                showHeaderMenu ={false}   //关闭列过滤面板。默认显示。
                bodyDisplayInRow={true}
            />
            </div>
        );
    }
}

export default Form.createForm()(MainProducts);
