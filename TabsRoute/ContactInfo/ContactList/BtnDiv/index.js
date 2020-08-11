/**
 *
 * @title 编辑表格基本示例
 * @description 编辑表格基本示例
 *
 */
import React, { Component } from 'react';
import Button from 'bee-button';
import Btns from "ac-btns";
import AcTips from 'ac-tips';

class BtnDiv extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editFlag: false,
            copyFlag: false
        }
    }

    //获取状态值
    getEditFlag = () => {
        return this.state.editFlag
    }

    //开启编辑
    openRowEdit = () => {
        this.setState({
            editFlag : true
        })
    }

    //结束编辑
    closeRowEdit = () => {
        this.setState({
            editFlag : false
        })
    }

    render () {
        return (
        <div style={{'marginBottom':'20px'}}>

            { !this.state.editFlag ? <Btns
                btns={{
                    addRow: {
                        className: "u-button-primary",
                        colors: "primary",
                        name: "新增",
                        onClick: () => {
                            this.props.addRow()
                        }
                    }
                }}
            /> : ""}
            <Btns
                btns={{
                    delRow: {
                        name: "删除",
                        onClick: () => {
                            this.props.delRow()
                        }
                    }
                }}
            />
            { this.state.editFlag ? <Btns
                btns={{
                    save: {
                        className: "u-button-primary",
                        name: "保存",
                        onClick: () => {
                            this.props.save();
                        }
                    }
                }}
            /> : ""}
            { this.state.editFlag ? <Btns
                btns={{
                    cancel: {
                        name: "取消",
                        onClick: () => {
                            this.props.cancelEdit()
                        }
                    }
                }}
            /> : "" }
            { !this.state.editFlag ?<Btns
                btns={{
                    update: {
                        className: "u-button-primary",
                        colors:"primary",
                        name: "修改",
                        onClick: () => {
                            this.props.updateAll()
                        }
                    }
                }}
            /> : ""}

        </div>
        )
    }
}
export default BtnDiv