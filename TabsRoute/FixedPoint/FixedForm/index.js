import React, { Component } from "react";
 import {Grid} from "ac-gridcn";
import {Form, Icon, Loading, Panel} from 'tinper-bee';
import AcHeader from "ac-header";
import {actions} from "mirrorx";
const dataNumObj = {
    "5": 0,
    "10": 1,
    "15": 2,
    "20": 3,
    "25": 4,
    "50": 5,
    "1": 6,
}
class FixedForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
         };
    }
    /**
     * 加载完成
     */
    componentDidMount() {
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
        { title:"零件号",dataIndex:"partNum" ,key:"partNum",width:200},
        { title:"零件名称",dataIndex:"partName" ,key:"partName",width:250},
        { title:"材料组代码",dataIndex:"materialgroupCode" ,key:"materialgroupCode",width:200},
        { title:"定点车型",dataIndex:"fixedPointVehicle" ,key:"fixedPointVehicle",width:150},
        { title:"定点时间",dataIndex:"fixedPointTime" ,key:"fixedPointTime",width:200},
         { title:"RFQ编号",dataIndex:"rfqId" ,key:"rfqId",width:200 ,textAlign:'right', // 靠右对齐},

},
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
     * 页码修改
     * @param pageIndex
     */
    pageIndexChange = (pageIndex) => {
        actions.supplierRouter.setPaginationCondition({
            pageIndex: pageIndex - 1,
            pageSize: this.props.paginationCondition.pageSize,setType:"getSupplierPartData",
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
            setType:"getSupplierPartData",
            supplierCode:this.props.supplierCode

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
        const {SupplierPartList = {} ,showLoading } = this.props;
        const {list, pageIndex, pageSize, totalPage, total} = SupplierPartList;

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
                columnFilterAble={false}//下拉隐藏
                showHeaderMenu ={false}   //关闭列过滤面板。默认显示。
                // onRowClick={this.onSelect}
                bodyDisplayInRow={true}
            />
            </div>
         );
    }
}

 export default Form.createForm()(FixedForm);
