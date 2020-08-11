import React, { Component } from "react";
import {Grid} from "ac-gridcn";
import {Form, Icon, Panel,Loading} from 'tinper-bee';
import AcHeader from "ac-header";
import CapacityInformation from "./CapacityInformation";
import MainProducts from "./MainProducts";
import {actions, connect} from "mirrorx";


class CustomerCapacity  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerIconOpen : true,//表单状态图标
            headerIcon: 'uf uf-triangle-down',
            open:true,
            headerChildIconOpen: true,  //子表单状态图表
            headerChildIcon:"uf uf-triangle-down",
            ChildTapOpen:true,
         };
    }

    componentDidMount() {
        this.onLoadData({supplierCode:this.props.supplierCode}); // 获取查询数据
    }

    clickHeaderIcon =() => {
        const headerIconOpen = !this.state.headerIconOpen;
        const headerIcon = headerIconOpen ? 'uf uf-triangle-down' : 'uf uf-triangle-right';
        this.setState({headerIconOpen, headerIcon ,open: !this.state.open});
    };
    clickChildHeaderIcon = () => {
        const headerChildIconOpen = !this.state.headerChildIconOpen;
        const headerChildIcon =  headerChildIconOpen ?  'uf uf-triangle-down' : 'uf uf-triangle-right';
        this.setState({headerChildIconOpen, headerChildIcon ,ChildTapOpen: !this.state.ChildTapOpen});
    }

    onLoadData = (param = {}) => {
        const {queryObj} = this.props;
        let {pageSize} = queryObj; // 获取分页值
        if (pageSize > 50) {// 对分页条数为 all 处理
            pageSize = 1;
        }
        let otherParam = {pageSize, pageIndex: 0}; // 其他查询条件
        actions.supplierRouter.getSupplierMainproductionData({ ...otherParam, ...param});  // 获取表格数据，如果传入的分页信息可以覆盖默认值
        actions.supplierRouter.getSupplierProductionData({ ...otherParam, ...param});  // 获取表格数据，如果传入的分页信息可以覆盖默认值
    }

    render() {
        const props = this.props;

        let {headerIconOpen,headerIcon,headerChildIcon} = this.state;
        let headerCls = headerIconOpen ? '' : 'close'
        return (
            <div className="factoryInfo">
                <div className="table-panel">
                    <div className="table-panel-top">
                <AcHeader className={headerCls} title={<span onClick={ () => { this.clickHeaderIcon()}}><Icon type={headerIcon}/>主要产品及客户</span>}>
                </AcHeader>
                <Panel collapsible expanded={this.state.open}>
                    <MainProducts {...props}/>
                </Panel>
                    </div>
                </div>
                <div className="table-panel">
                    <div className="table-panel-top">
                <AcHeader className={headerCls} title={<span onClick={ () => { this.clickChildHeaderIcon()}}><Icon type={headerChildIcon}/>
产能信息</span>}>
                </AcHeader>
                <Panel collapsible expanded={this.state.ChildTapOpen}>
                    <CapacityInformation   rmation  {...props}/>
                </Panel>
                    </div>
                </div>
            </div>
        );
    }
}

 export default  connect(state => state. supplierRouter)(CustomerCapacity)
