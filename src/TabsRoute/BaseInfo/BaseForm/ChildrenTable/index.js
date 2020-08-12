import React, { Component } from "react";
import {Grid} from "ac-gridcn";
import {Form} from 'tinper-bee';


const data  = [
    {
        code:"00592",
        name:"麦格纳动力总成(常州)",
        state:"未评审",
        psstate:"正式进入",
        level:"MC专用",
        Nature:"",
        core:"普通供应商",
        TradeSupplier:"",
        producer:"麦格纳常州",
        GState:"独资-欧美",
        G:"非一汽",
        GBlacklist:"否",
        CBlacklist:"否",
        reviewLevel:"否",
        supplier:"",
        ContractStatus:"正常发包",
        tempContractStatus:"E115",
        FixedPoint:"否",
        newTime:"2018-03-19"

    },{
        code:"LAH54",
        name:"北京博格华纳汽车传动器",
        state:"未评审",
        psstate:"正式进入",
        level:"MC专用",
        Nature:"",
        core:"-",
        TradeSupplier:"",
        producer:"麦格纳常州",
        GState:"民营企业",
        G:"",
        GBlacklist:"否",
        CBlacklist:"否",
        reviewLevel:"",
        supplier:"",
        ContractStatus:"正常发包",
        tempContractStatus:"E115",
        FixedPoint:"否",
        newTime:""

    }

];

class ChinldTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    defColumns = [
        {title: "序号",dataIndex: "index",key: "index",width: 80,
            render(text, record, index) {
                return index + 1;
            }
        },
        {
            title: "附件名称",
            dataIndex: "fileName",
            key: "fileName",
            width: 300,
        },
        {
            title: "上传日期",
            dataIndex: "fileExtension",
            key: "fileExtension",
            width: 200,
         },
        {
            title: "备注说明",
            dataIndex: "createUserName",
            key: "createUserName",
            width: 400
        }
    ]



    openSupplier = () => {
        this.props.DemoTable.getChildrenMsg(this, true)
    }

    /**
     * 列表选中行
     */
    getSelectedDataFunc = (selectData, record, index, newData) => {
        this.selectList = selectData;
    }

    freshData = (pageIndex) => {
        console.log('跳转至第 ', pageIndex, ' 页');
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
        let paginationObj = {
            items: 1,
            total: 0,//总共多少条
            freshData: this.freshData,//点击下一页刷新的数据
            onDataNumSelect: this.onDataNumSelect, //每页大小改变触发的事件
            showJump: true,
            horizontalPosition: 'center'
        }
        return (
            <Grid
                ref={(ref) => this.grid = ref}
                rowKey={r => r.id ? r.id : r.key}
                columns={this.defColumns}
                data={[]}
                getSelectedDataFunc={this.getSelectedDataFunc}
                paginationObj={paginationObj}//分页数据
                headerScroll={true} // 双向滚动条
                multiSelect={true}
                // onRowClick={this.onSelect}
                columnFilterAble={false}//下拉隐藏
                showHeaderMenu ={false}   //关闭列过滤面板。默认显示。
                bodyDisplayInRow={true}
            />
        );
    }
}

export default Form.createForm()(ChinldTable);
