import React, {Component} from 'react';
import {actions, connect} from 'mirrorx';
import {Button, Icon, Loading, Form, Panel} from 'tinper-bee';
import AcHeader from "ac-header";
import {getQueryString} from "utils";
import './index.less';
import FactoryList from "./FactoryList";
import FactoryListSub from "./FactoryListSub";

class FactoryInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open:true,
            headerChildIconOpen: true,  //子表单状态图表
            ChildTapOpen:true,
            headerChildIcon:"uf uf-triangle-down",
            headerIconOpen : true,//表单状态图标
            headerIcon: 'uf uf-triangle-down',
            importLoading: false,
            // headerSubIconOpen : true,//表单状态图标
            // headerSubIcon: 'uf uf-triangle-down',
        }
        this.btnFlag = '0';
    }

    componentWillMount() {

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

    componentDidMount() {
        let serviceCode = getQueryString('serviceCode', window.location.href) || getQueryString('servicecode', window.location.href);
        // actions.dlSup.getPower({
        //     params: {servicecode: serviceCode},
        //     context: pom.fe.new.ctx
        // });
        this.onLoadData({supplierCode:this.props.supplierCode}); // 获取查询数据
    }
    clickHeaderSubIcon = () => {
        const headerSubIconOpen = !this.state.headerSubIconOpen;
        const headerSubIcon = headerSubIconOpen ? 'uf uf-triangle-down' : 'uf uf-triangle-right';
        this.setState({headerSubIconOpen, headerSubIcon})
    }
    /**
     * 加载列表数据
     * @param {*} param 查询信息
     */
    onLoadData = (param = {}) => {
        const {queryObj} = this.props;
        let {pageSize} = queryObj; // 获取分页值
        if (pageSize > 50) {// 对分页条数为 all 处理
            pageSize = 1;
        }
        let otherParam = {pageSize, pageIndex: 0}; // 其他查询条件
        //工厂信息
        actions.supplierRouter.getSupplierPlantData({ ...otherParam, ...param});  // 获取表格数据，如果传入的分页信息可以覆盖默认值
        //子公司信息
        actions.supplierRouter.getSupplierRelationData({ ...otherParam, ...param});  // 获取表格数据，如果传入的分页信息可以覆盖默认值
    }

    onRef = (ref) => {
        this.contactTable = ref;
    }

    onRefSub = (ref) => {
        this.contactTableSub = ref;
    }

    doAdd = () => {
        this.contactTable.openModal();
    }

    render() {

        let {powerBtns, panelTitle, panelSubTitle} = this.props;
        let {headerIconOpen,headerIcon,headerChildIcon} = this.state;
        let headerCls = headerIconOpen ? '' : 'close'

        return (
            <div className="factoryInfo">
                {/*<BaseHeader doAdd = {this.doAdd} clickHeaderIcon = {this.clickHeaderIcon} headerIconOpen = {this.state.headerIconOpen} headerIcon = {this.state.headerIcon} panelTitle={panelTitle}>*/}
                {/*</BaseHeader>*/}
                 <div className="table-panel">
                    <div className="table-panel-top">
                <AcHeader className={headerCls} title={<span onClick={ () => { this.clickHeaderIcon()}}><Icon type={headerIcon}/>子公司信息</span>}>
                </AcHeader>
                <Panel collapsible expanded={this.state.open}>
                <FactoryList {...this.props} onRef={this.onRef} headerIconOpen = {this.state.headerIconOpen}>
                </FactoryList>
                </Panel>
                    </div>
                </div>
                {/*<BaseHeaderSub clickHeaderSubIcon = {this.clickHeaderSubIcon} headerSubIconOpen = {this.state.headerSubIconOpen} headerSubIcon = {this.state.headerSubIcon} panelSubTitle={panelSubTitle}>*/}
                {/*</BaseHeaderSub>*/}
                <div className="table-panel">
                    <div className="table-panel-top">
                <AcHeader className={headerCls} title={<span onClick={ () => { this.clickChildHeaderIcon()}}><Icon type={headerChildIcon}/>
工厂信息</span>}>
                </AcHeader>
                <Panel collapsible expanded={this.state.ChildTapOpen}>
                <FactoryListSub {...this.props} onRef={this.onRefSub} headerSubIconOpen = {this.state.headerSubIconOpen}>
                </FactoryListSub>
                </Panel>
                    </div>
                </div>
            </div>
        )
    }
}

 export default  connect(state => state. supplierRouter)(FactoryInfo)

