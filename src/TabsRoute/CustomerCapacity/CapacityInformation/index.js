import React, { Component } from "react";
import {Grid} from "ac-gridcn";
import {Form, Loading} from 'tinper-bee';
import {actions} from "mirrorx";


const data  = [
    {
        mainEquipment:"仪表板、副仪表板、门板、座椅",
        productionEquipment:"仪表板、副仪表板、门板、座椅",
        experimentalEquipment:"电检设备",
        weekdays:"",
        dailyShifts:"",
        Maximum:"1",
        Surplus:"1",
    }

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

class CapacityInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        { title: "主要产品", dataIndex: "mainProduct", key: "mainProduct", width:200},
        { title: "主要生产设备", dataIndex: "produceEquipment", key: "produceEquipment", width:200},
        { title: "主要实验设备", dataIndex: "laboratoryEquipment", key: "laboratoryEquipment", width:200},
        { title: "周工作日", dataIndex: "workdays", key: "workdays", width:200,  textAlign:'right'},
        { title: "日班次数\n", dataIndex: "dayShifts", key: "dayShifts", width:200,  textAlign:'right'},
        { title: "最大产能(年)", dataIndex: "maxProduction", key: "maxProduction", width:200,  textAlign:'right'},
        { title: "剩余产能(车)", dataIndex: "leftProduction", key: "leftProduction", width:200,  textAlign:'right'}
    ];


    onDataNumSelect = (index, value) => {
        console.log('index：', index, ' value：', value);
    }

    /**
     * 列表选中行
     */
    getSelectedDataFunc = (selectData, record, index, newData) => {
        this.selectList = selectData;
    }

    /**
     * 页码修改
     * @param pageIndex
     */
    pageIndexChange = (pageIndex) => {
        actions.supplierRouter.setPaginationCondition({
            pageIndex: pageIndex - 1,
            pageSize: this.props.paginationCondition.pageSize,
            setType:"getSupplierProductionData",
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
            setType:"getSupplierProductionData"
        });
        this.setState({
            selectedIndex: 0
        })
    }
    onClick = () => {
        this.setState({
            selectedRow: function() {}
        });
    };

    render() {
        const {getSupplierProductionList = {},showLoadingChild  } = this.props;
        const {list, pageIndex, pageSize, totalPage, total} = getSupplierProductionList;
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
            <div>
                <Loading fullScreen showBackDrop={true} show={showLoadingChild}/>
            <Grid
                ref={(ref) => this.grid = ref}
                rowKey={r => r.id ? r.id : r.key}
                columns={this.gridColumn}
                data={list}
                getSelectedDataFunc={this.getSelectedDataFunc}
                paginationObj={paginationObj}//分页数据
                headerScroll={true}  // 双向滚动条
                multiSelect={true}
                columnFilterAble={false}//下拉隐藏
                showHeaderMenu ={false}   //关闭列过滤面板。默认显示。
                // onRowClick={this.onSelect}
                bodyDisplayInRow={true}
            />
            </div>
        );
    }
}

export default Form.createForm()(CapacityInformation);
