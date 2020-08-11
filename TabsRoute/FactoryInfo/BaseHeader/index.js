import React, { Component } from 'react';
import { actions } from 'mirrorx';
import { ButtonGroup, Button, Icon } from 'tinper-bee'
import AcHeader from 'ac-header';
import Btns from 'components/Btns'
import { getQueryString } from "utils";
import './index.less';

class BaseHeader extends Component {
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

        let { doAdd, powerBtns, clickHeaderIcon, headerIconOpen, headerIcon, panelTitle } = this.props;
        let headerCls = headerIconOpen ? '' : 'close'

        return (
            <AcHeader className={headerCls} title={<span onClick={ () => { clickHeaderIcon()} }><Icon type={headerIcon}/>{panelTitle}</span>}>
                <Btns btns={{
                    add: {
                        onClick: () => { doAdd() }
                    },
                    delete: {
                        onClick: () => {  }
                    },
                }}
                      powerBtns={powerBtns}
                />
            </AcHeader>
        )
    }
}

export default BaseHeader;
