import React, { Component } from "react";
import {Grid} from "ac-gridcn";
import {Form, Loading} from 'tinper-bee';
import {actions} from "mirrorx";


const data  = [
    {
        materialCode:"J001",
        materialName:"精品件",
        processCode:"J001001",
        processName:"精品件",
        supplier:"上海福之来汽车标准件有限公司",
        available:"否",
        reviewStatus:'',
        reviewTime:"2020-05-06",
        accessType:"正式进入",
    },{
        materialCode:"M008001",
        materialName:"分动器",
        processCode:"M008001",
        processName:"分动器",
        supplier:"上海福之来汽车标准件有限公司",
        available:"否",
        reviewStatus:'',
        reviewTime:"",
        accessType:"",
    },{
        materialCode:"J001001",
        materialName:"精品件",
        processCode:"M030",
        processName:"精品件",
        supplier:"上海福之来汽车标准件有限公司",
        available:"否",
        reviewStatus:'',
        reviewTime:"",
        accessType:"",
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

class MaterialForm extends Component {
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
        { title: "材料组代码", dataIndex: "materialgroupCode", key: "materialgroupCode", width:200},
        { title: "材料组名称", dataIndex: "materialgroupName", key: "materialgroupName", width:300},
        { title: "工艺组代码", dataIndex: "subMaterialgroupCode", key: "subMaterialgroupCode", width:200},
        { title: "工艺组名称\n", dataIndex: "subMaterialgroupName", key: "subMaterialgroupName", width:200},
        { title: "供应商生产地", dataIndex: "supplierAddress", key: "supplierAddress", width:300},
        { title: "是否可供货", dataIndex: "isTrade", key: "isTrade", width:200},
        { title: "评审状态", dataIndex: "reviceStatus", key: "reviceStatus", width:100},
        { title: "评审时间", dataIndex: "reviewTime", key: "reviewTime", width:100},
        { title: "材料组准入类型", dataIndex: "status", key: "status", width:200},
    ];


    openSupplier = () => {
        this.props.DemoTable.getChildrenMsg(this, true)
    }

    /**
     * 列表选中行
     */
    getSelectedDataFunc = (selectData, record, index, newData) => {
        this.selectList = selectData;
    }
    /**
     * 分页修改
     * @param pageIndex
     */
    pageIndexChange = (pageIndex) => {
        actions.supplierRouter.setPaginationCondition({
            pageIndex: pageIndex - 1,
            pageSize: this.props.paginationCondition.pageSize,
            setType:"getSupplierPsGroupData",
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
            setType:"getSupplierPsGroupData",
            supplierCode:this.props.supplierCode

        });
        this.setState({
            selectedIndex: 0
        })
    }


    // onDataNumSelect = (index, value) => {
    //     console.log('index：', index, ' value：', value);
    // }
    onClick = () => {
        this.setState({
            selectedRow: function() {}
        });
    };

    render() {

        const {SupplierPsGroupList = {},showLoading} = this.props;
        const {list, pageIndex, pageSize, totalPage, total} = SupplierPsGroupList;
        let paginationObj = {
            items: totalPage,
            activePage: pageIndex,//当前页
            total,
            freshData: this.pageIndexChange,//点击下一页刷新的数据
            onDataNumSelect: this.pageSizeChange, //每页大小改变触发的事件
            showJump: true,
            horizontalPosition: 'center',
            dataNum: dataNumObj[pageSize],// 分页条数选择
        }
        return (
            <div>
                <Loading fullScreen showBackDrop={true} show={showLoading}/>
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

export default Form.createForm()(MaterialForm);
