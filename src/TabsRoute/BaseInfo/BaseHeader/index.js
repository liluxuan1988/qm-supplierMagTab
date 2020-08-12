import React, { Component } from 'react';
import { actions } from 'mirrorx';
import {ButtonGroup, Button, Icon,FormControl, Panel} from 'tinper-bee'
import AcHeader from 'ac-header';
import AcUpload from 'ac-upload';//加载组件


import './index.less';

class BaseHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            searchFileName : "",
            urlList: {
            list:  `${pom.fe.new.ctx}/attachment/getAttachmentList`,//文件列表
                delete: `${pom.fe.new.ctx}/attachment/deleteAttachment`,//删除
                upload : `${pom.fe.new.ctx}/attachment/uploadAttachment`,//上传
                info :`${pom.fe.new.ctx}/attachment/getAttachmentInfo`,//文件信息
                download :`${pom.fe.new.ctx}/attachment/downloadAttachment`//下载
        }
        }
    }
    componentDidMount() {
    }
    //输入值改变
    searchFileNameChange = (value) =>{
        this.setState({searchFileName : value});
    }
    //点击查询按钮查询符合条件的附件
    searchAttachment = (attachmentId) =>{
        //查询条件
     }
    render() {
        let {headerCls,clickChildHeaderIcon,headerChildIcon } = this.props
        return (
            <AcHeader className={headerCls} title={<span onClick={()=>  clickChildHeaderIcon()}><Icon type={headerChildIcon}/>支持材料</span>}>
     {/*<span className="ac-header-text">*/}
     {/*               /!*<input placeholder="附件名称" id="searchFileName" type="text" className="u-form-control md" onInput={() => { this.searchFileNameChange()}}/>*!/*/}
     {/*    <FormControl*/}
     {/*        id="searchFileName"*/}
     {/*        placeholder="附件名称"*/}
     {/*        className=""*/}
     {/*        value={this.state.searchFileName}*/}
     {/*        onChange={this.searchFileNameChange}*/}
     {/*        showClose*/}
     {/*    />*/}
     {/*               </span>*/}
     {/*           <span className="ac-btns">*/}
     {/*                   <button type="button" onClick={() => {this.searchAttachment(attachmentId)}}*/}
     {/*                           className="u-button ac-btns-write ac-btns-item ac-btns-upload u-button-primary">查询*/}
     {/*                   </button>*/}

     {/*                   <AcUpload*/}
     {/*                       title="导入文件"*/}
     {/*                       //action={`${pom.fe.new.ctx}/attachment/uploadAttachment`}*/}
     {/*                       action={ this.state.urlList }*/}
     {/*                       name="uploadFile"*/}
     {/*                       data={{ "attachmentId": "111111111111111"}}*/}
     {/*                       multiple={false}*/}
     {/*                       onError={(err) => console.log(err)}*/}
     {/*                       onSuccess={(data) => {*/}
     {/*                        }}*/}
     {/*                       beforeUpload={ (file) => {*/}
     {/*                           let maxsize = 100; //M*/}
     {/*                           return (file.size/1024)>= maxsize ? false : true;*/}
     {/*                       }}*/}

     {/*                   >*/}
     {/*                       <button type="button"*/}
     {/*                               className="u-button ac-btns-write ac-btns-item ac-btns-upload u-button-primary">上传*/}
     {/*                       </button>*/}
     {/*                   </AcUpload>*/}
     {/*               </span>*/}
            </AcHeader>
        )
    }


}
export default BaseHeader;
