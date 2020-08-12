import React, { Component } from "react";
 import {Grid} from "ac-gridcn";
import {Form, Icon, Modal, Panel} from 'tinper-bee';
import AcHeader from "ac-header";
import FixedForm from "./FixedForm"
import './index.less'
 import {actions, connect} from "mirrorx";



class FixedPoint  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerIconOpen : true,//表单状态图标
            headerIcon: 'uf uf-triangle-down',
             open:true,
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



    onLoadData = (param = {}) => {
        const {queryObj} = this.props;
        let {pageSize} = queryObj; // 获取分页值
        if (pageSize > 50) {// 对分页条数为 all 处理
            pageSize = 1;
        }
        let otherParam = {pageSize, pageIndex: 0}; // 其他查询条件
        actions.supplierRouter.getSupplierPartData({ ...otherParam, ...param});  // 获取表格数据，如果传入的分页信息可以覆盖默认值
    }

    render() {
        const props = this.props;
        let {headerIconOpen,headerIcon} = this.state;
        let headerCls = headerIconOpen ? '' : 'close'
        return (
            <div>
                {/*<AcHeader className={headerCls} title={<span onClick={ () => { this.clickHeaderIcon()}}><Icon type={headerIcon}/>材料组</span>}>*/}
                {/*</AcHeader>*/}
                {/*<Panel collapsible expanded={this.state.open}>*/}
                <div className="tab_contable">
                    <FixedForm   {...props}  />
                </div>
                {/*</Panel>*/}
            </div>
        );
    }
}
export default  connect(state => state. supplierRouter)(FixedPoint)
