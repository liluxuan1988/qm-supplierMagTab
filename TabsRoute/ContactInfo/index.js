import React, {Component} from 'react';
import {actions, connect} from 'mirrorx';
import {Button, Icon, Loading, Form} from 'tinper-bee';
import './index.less';
import ContactList from "./ContactList";

class ContactInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerIconOpen : true,//表单状态图标
            headerIcon: 'uf uf-triangle-down',

            selectTypeOptions:[],
            selectTsDefaultOptions:[],
            importLoading: false
        }
        this.btnFlag = '0';
    }

    componentWillMount() {

    }

    componentDidMount() {
         this.onLoadData({supplierCode:this.props.supplierCode}); // 获取查询数据
    }

    onLoadData = (param = {}) => {
        const {queryObj} = this.props;
        let {pageSize} = queryObj; // 获取分页值
        if (pageSize > 50) {// 对分页条数为 all 处理
            pageSize = 1;
        }
        let otherParam = {pageSize, pageIndex: 0}; // 其他查询条件
        actions.supplierRouter.getSupplierEmployeeData({ ...otherParam, ...param});  // 获取表格数据，如果传入的分页信息可以覆盖默认值
    }

    clickHeaderIcon = () => {
        const headerIconOpen = !this.state.headerIconOpen;
        const headerIcon = headerIconOpen ? 'uf uf-triangle-down' : 'uf uf-triangle-right';
        this.setState({headerIconOpen, headerIcon})
    }

    onRef = (ref) => {
        this.contactTable = ref;
    }



    doAdd = () => {
    }

    render() {
        const props = this.props;

        let Employeeselect  = this.props.EmployeeType;
        let IsDefaultelect = this.props.IsDefault;

        return (
            <div className="tab_contable">
                <Loading fullScreen showBackDrop={true} />
                <ContactList {...props}     onRef={this.onRef}>
                </ContactList>
            </div>
        )
    }
}

export default  connect(state => state. supplierRouter)(ContactInfo)
