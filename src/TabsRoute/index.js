import React, {Component} from 'react';
import {actions, connect} from 'mirrorx';
import {Button, Icon, Select, Tabs} from 'tinper-bee';

import './index.less';
import BaseInfo from "./BaseInfo";
import ContactInfo from "./ContactInfo"
import FactoryInfo from "./FactoryInfo"
import FixedPoint  from "./FixedPoint"
import MaterialGroup  from "./MaterialGroup"
import CustomerCapacity from "./CustomerCapacity"
import PersonPerformance from "./PersonPerformance";
import SupplierTab from "../SupplierTab";

const { TabPane } = Tabs;
class TabsRoute extends Component {
    constructor(props) {
        super(props);
        this.state = {
            codeParamsType : {type: "employeeType", emptyHeader : "true"},
            codeParamsTsDefault : {type: "isDefault", emptyHeader : "true"},
            statusParams : {type: "specialGroupCode", emptyHeader : "false"},
            supplierCode:"",
            OptionsList:[]
        }
     }
    componentDidMount(){
        this.props.onRef(this);
        this.setState({
            supplierCode:this.props.supplierCode
        });
        // actions.supplierRouter.getEmployeeTypeSelect(this.state.codeParamsType);
        // actions.supplierRouter.getEmployeeIsDefaultSelect(this.state.codeParamsTsDefault)

    }
    componentWillMount() {
        actions.supplierRouter.getSelectOptionsList(this.state.statusParams).then(result=>{
            console.log(result);
            this.setState({
                OptionsList:result.data
            })
        });
    }
    /**
     * 页签切换
     */
    tabsOnChange = (n) => {
         this.setState({
            // activePage: 1,
            // activeKey: n
        })
    }

    routeSave = () => {
        this.PersonPerformanceContext.save();
    }


    onRef = (ref) => {
        this.PersonPerformanceContext = ref;
    };

    onButtonClick = (n) => {
          this.props.MainContent.getFooterMsg(this,"2")
    }

    onNoButtonClick = (n) => {
        console.log(n);
        //只有 第一个页面需要有保存按钮 msg  值为 0   其它所有页面的都为2 为只显示 关闭按钮
        if(n!=7){{this.props.SupplierTab.getNoSaveMsg(this,"0")}
        }else{{ this.props.SupplierTab.getNoSaveMsg(this,"2")}}
    }
    // renderTabsItem = (tableData, item, index) => {
    //     return (
    //         <TabPane className="" tab={<span><Icon type={item.iconStr}></Icon>{item.title}</span>} >
    //             {/*{ item.key === '1' ? <BaseInfo panelTitle={item.panelTitle}/> : ''}*/}
    //          </TabPane>
    //     )
    // };
    render() {
        const props = this.props;
        // let activeKey =   this.props.showEdit ?  '1': '0';
     let activeKey =   '1';
        return (
            <div>
                <Tabs
                    // 默认是第一个
                    defaultActiveKey={activeKey}
                    className="Tabs-routes"
                    onTabClick ={this.onNoButtonClick}
                >
                    <TabPane tab='企业基本信息' key="1"><BaseInfo  {...props} panelTitle="供应商登记信息"/> </TabPane>
                    <TabPane tab='企业联系人' key="2"><ContactInfo   {...props}  /></TabPane>
                    <TabPane tab='子公司及工厂' key="3"><FactoryInfo   {...props}/></TabPane>
                    <TabPane tab='主要产品及客户、产能' key="4"><CustomerCapacity {...props} /></TabPane>
                    <TabPane tab='材料组' key="5"> <MaterialGroup {...props}  /> </TabPane>
                    <TabPane tab='定点信息' key="6"><FixedPoint {...props}  /> </TabPane>
                    {this.props.showEdit ? "": <TabPane tab='信息编辑' key="7"><PersonPerformance  {...props} OptionsList ={this.state.OptionsList}  onRef={this.onRef}/> </TabPane>}
                </Tabs>
            </div>
        );
    }
}

 export default  connect(state => state. supplierRouter)(TabsRoute)