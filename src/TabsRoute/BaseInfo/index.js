import React, { Component } from 'react';
import {actions, connect} from 'mirrorx';
import {Button, Icon, Loading, Form, Panel, Modal} from 'tinper-bee';
import { getQueryString } from "utils";
import './index.less';
import 'ac-attachment/dist/ac-attachment.css';
import Btns from 'components/Btns'

import BaseHeader from "./BaseHeader";
import  BaseForm from "./BaseForm"
import ChinldTable from "./ChildrenTable"
import AcHeader from "ac-header";


class BaseInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerIconOpen : true,//表单状态图标
            headerIcon: 'uf uf-triangle-down',
            headerChildIconOpen : true,//表单状态图标
            headerChildIcon: 'uf uf-triangle-down',
            open:true,
            ChildTapOpen:true,
         }
        this.btnFlag = '0';
     }
    componentWillMount() {
    }
    componentDidMount() {
        let from = getQueryString('from');
        this.from = from;
        this.onLoadData({supplierCode:this.props.supplierCode}); // 获取查询数据
    }
    doAdd = () => {
    };
    onLoadData = (param = {}) => {
        const {queryObj} = this.props;
        let {pageSize} = queryObj; // 获取分页值
        if (pageSize > 50) {// 对分页条数为 all 处理
            pageSize = 1;
        }
        let otherParam = {pageSize, pageIndex: 0}; // 其他查询条件
        actions.supplierRouter.getSupplierDetailData({ ...param});  // 获取表格数据，如果传入的分页信息可以覆盖默认值


        //支持材料
      //  actions.supplierRouter.getAttachmentData({ ...otherParam, ...param});  // 获取表格数据，如果传入的分页信息可以覆盖默认值
    }
    doUpload = async () => {
        alert("doUpload");
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

    render() {
        let {  panelTitle } = this.props;
        const  props  = this.props;
        let {headerIconOpen,headerIcon,headerChildIcon,filePanelTitle, fileShowLoading} = this.state;
        let headerCls = headerIconOpen ? '' : 'close'
        return (
            <div className="factoryInfo">
                <div className="table-panel">
                    {/*----------------------- 供应商登记信息---------------------------------------------*/}
                    <div className="table-panel-top">
                    <AcHeader className={headerCls} title={<span onClick={ () => { this.clickHeaderIcon()}}><Icon type={headerIcon}/>{panelTitle}</span>}>
                    </AcHeader>
                    <Panel collapsible expanded={this.state.open}>
                        <div className="table-panel-body">
                        <BaseForm {...props}/>
                        </div>
                    </Panel>
                        </div>
                    </div>
                    {/*------------------------支持材料---------------------------------------------*/}
            {/*    <div className="table-panel">*/}
            {/*    <div className="table-panel-top">*/}
            {/*        <AcHeader className={headerCls} title={<span onClick={ () => { this.clickChildHeaderIcon()}}><Icon type={headerChildIcon}/>支持材料</span>}>*/}
            {/*        </AcHeader>*/}
            {/*        <Panel collapsible  expanded={this.state.ChildTapOpen}>*/}
            {/*            <ChinldTable {...props}/>*/}
            {/*        </Panel>*/}
            {/*    </div>*/}
            {/*</div>*/}
                </div>

        )
    }
}

export default Form.createForm()(BaseInfo);
