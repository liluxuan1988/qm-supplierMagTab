import React, { Component } from 'react';
import { actions } from 'mirrorx';
import { ButtonGroup, Button, Icon } from 'tinper-bee'
import AcHeader from 'ac-header';
import Btns from 'components/Btns'
import { getQueryString } from "utils";
import './index.less';

class BaseHeaderSub extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let serviceCode = getQueryString('serviceCode', window.location.href) || getQueryString('servicecode', window.location.href);
        // actions.dlSup.getPower({
        //     params:{
        //         servicecode:serviceCode,
        //     },
        //     context:pom.fe.new.ctx
        // });
    }


    render() {

        let { doSave, powerBtns, clickHeaderSubIcon, headerSubIconOpen, headerSubIcon, panelSubTitle } = this.props;
        let headerCls = headerSubIconOpen ? '' : 'close'

        return (
            <AcHeader className={headerCls} title={<span onClick={ () => { clickHeaderSubIcon()} }><Icon type={headerSubIcon}/>{panelSubTitle}</span>}>
            </AcHeader>
        )
    }
}

export default BaseHeaderSub;
