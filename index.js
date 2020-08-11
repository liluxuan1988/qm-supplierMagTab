/**
 * @title EditGrid 编辑表格
 * @description disabled 参数控制是否可编辑，onChange 方法是表格数据更改后的回调函数，onValidate 方法用于提交前的数据校验。
 *
 */
import React, {Component} from 'react';
import {PageLayout, Modal, Button,Tabs, Loading} from 'tinper-bee';
import 'bee-complex-grid/build/Grid.css';
import headIcon from 'static/images/headerIcon/BasicArchives/3.svg';
import Btns from 'components/Btns';
import TabRoute from './TabsRoute'
import './index.less';
import mirror, { Route, connect } from 'mirrorx';

// 数据模型引入
import model from './router/model'
// 数据和组件UI关联、绑定
mirror.model(model);

import './index.less';


const modalResize = {
    max :true,
    bodyHeight : 0,
    bodyWidth: 0,
    tableHeight: 570,
    modalWidth: 1200,
}


class SupplierTab extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filterable: false,
            open: true,
            ChildTapOpen:true,
            activePage: 1,
            showButton:false,
            showModal: false,
             detailObj: {}, // 存储关联数据信息
            selectedValue: "1",
            selectStatusParams:[],
            ...modalResize, //modal 最大化按钮
            childrenMsg:false,
            openPanel:true,
            btnFlag:"0",
            supplierCode:'',
            statusParams : {type: "supplierStatus", emptyHeader : "true"},

            //combobox---------------------------------------------------
        };
        this.btnFlag = '0';
    }
    componentWillMount() {
        this.setState({
            showModal:this.props.showModal,
            supplierCode:this.props.supplierCode,
        })
    }

    componentDidMount() {
        // this.props.onRef(this);
    }
    /**
     * 加载列表数据
     * @param {*} param 查询信息
     */
    onRef = (ref) => {
        this.TabrouteContent = ref;
    };
    save  = (e) =>  {
        this.TabrouteContent.routeSave();
    };

    getChildrenMsg = (result, msg) => {
        // console.log(result, msg)
        // 很奇怪这里的result就是子组件那bind的第一个参数this，msg是第二个参数
        this.setState({
            showModal: msg
        })
    }
    getNoSaveMsg = (result, msg) => {
        // console.log(result, msg)
        // 很奇怪这里的result就是子组件那bind的第一个参数this，msg是第二个参数
        this.setState({
            btnFlag: msg
        })
    }
    /**
     * 页码修改
     * @param pageIndex
     */
     /**
     * 页大小修改
     * @param {*} index 页码
     * @param {*} num 页大小
     */
    /**
     * 关闭窗口
     */
    close =() => {
        this.setState({
            showModal: false
        });
        this.props.MainContent.getCloseMsg(this,false)
     };
    open() {
        this.setState({
            showModal: true
        });
    };
    onClick  ()  {
        this.mainTable.export()
    };
    onRef1 = (ref) => {
        this.searchForm = ref;
    }
    //最大化点击事件
    setMax () {
        this.setState({
            max:!this.state.max
        })
    };
    clickHeaderIcon = () => {
        const headerIconOpen = !this.state.headerIconOpen;
        const headerIcon = headerIconOpen ? 'uf uf-triangle-down' : 'uf uf-triangle-right';
        this.setState({headerIconOpen, headerIcon ,open: !this.state.open});
    };
    render () {
        let {btnFlag} =this.state;
        let{close} =this.props;
        let {max,modalHeight,modalWidth,bodyHeight,bodyWidth} = this.state;
        if(max) {
            console.log(window);
            modalHeight = window.document.body.clientHeight -60;
            modalWidth = window.document.body.clientWidth - 250;
            bodyHeight = window.document.body.clientHeight -100;
            bodyWidth  = window.document.body.clientWidth  -50;
        }
        let {headerIconOpen,headerIcon,headerChildIcon,filePanelTitle, fileShowLoading} = this.state;
        let headerCls = headerIconOpen ? '' : 'close'
        return (
                 <Modal
                    show={this.state.showModal}     //开启按钮
                    // onHide={this.close}            //关闭按钮
                    onHide={() =>{
                     close();
                 }}
                    backdropClosable={false}
                    autoFocus ={true}
                    // width="1600"
                    // height="1200"
                    width={modalWidth}
                    height={modalHeight}
                    ref={ref => this.modal = ref}
                    searchForm={this.searchForm}
                >
                    <Modal.Header  closeButton>
                        <Modal.Title>供应商管理
                            <button fieldid="modalResize" type="button" className="modal-resize"   aria-label="modalResize">
                                <span aria-hidden="true"><i className={max ? 'iconfont icon-zuixiaohua2' : 'iconfont icon-zuidahua1'} onClick={e => this.setMax()}></i></span></button>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <TabRoute onRef={this.onRef} supplierCode = {this.state.supplierCode}  showEdit ={this.props.showEdit} SupplierTab={ this } />
                    </Modal.Body>
                    {
                        btnFlag == 2 ? <Modal.Footer>
                            <Button   colors="primary"  onClick = {this.save}  style={{ marginRight: 8 }}>保存</Button>
                            <Button onClick={() =>{close()}} colors="secondary" style={{ marginRight: 8 }}>关闭</Button>
                        </Modal.Footer>:  <Modal.Footer>
                            <Button onClick={() =>{close()}}  colors="secondary" style={{ marginRight: 8 }}>关闭</Button>
                        </Modal.Footer>
                    }
                </Modal>
         );
    }
}
export default  connect(state => state. supplierRouter)(SupplierTab)