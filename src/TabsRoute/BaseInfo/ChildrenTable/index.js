import React, { Component } from "react";
import {Grid} from "ac-gridcn";
import {Form} from 'tinper-bee';



const dataNumObj = {
    "5": 0,
    "10": 1,
    "15": 2,
    "20": 3,
    "25": 4,
    "50": 5,
    "1": 6,
}
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
            dataIndex: "name",
            key: "name",
            width: 300,
        },
        {
            title: "上传日期",
            dataIndex: "createTime",
            key: "createTime",
            width: 200,
         },
        {
            title: "备注说明",
            dataIndex: "remark",
            key: "remark",
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
    onDataNumSelect = (index, value) => {
        console.log('index：', index, ' value：', value);
    }
    onClick = () => {
        this.setState({
            selectedRow: function() {}
        });
    };
    render() {
        const {getAttachmentList = {}  } = this.props;
        const {list, pageIndex, pageSize, totalPage, total} = getAttachmentList;
        let paginationObj = {
            activePage: pageIndex,//当前页
            items: totalPage,
            total,//总共多少条
            freshData: this.freshData,//点击下一页刷新的数据
            onDataNumSelect: this.onDataNumSelect, //每页大小改变触发的事件
            showJump: true,
            disabled: false,//分页条禁用状态
            // horizontalPosition: 'center',
            dataNum: dataNumObj[pageSize],// 分页条数选择

        }
        return (
            <Grid
                ref={(ref) => this.grid = ref}
                rowKey={r => r.id ? r.id : r.key}
                columns={this.defColumns}
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
        );
    }
}
export default Form.createForm()(ChinldTable);
