import React, {Component} from "react";
import moment from 'moment';

import {Form, FormControl, Select} from 'tinper-bee';
import DatePicker from "bee-datepicker";
import SearchPanel, {FormItem} from 'ac-search-cn';
import MdfRefer from '@yonyou/mdf-refer/lib/index';
import Month from 'components/SelectMonth/Month';

import zhCN from "rc-calendar/lib/locale/zh_CN";

import './index.less';

const Option = Select.Option;
const {YearPicker} = DatePicker;
const formatYearRule = "YYYY"; // 格式化年
const formatDateRule = "YYYY-MM-DD HH:mm:ss"; // 格式化日期


class SearchArea extends Component {

    componentDidMount() {
        this.props.onRef(this);// 在父组件上绑定子组件方法
    }

    searchReset = () => {
        this.props.form.resetFields();
        this.modelOrg.setValue(null,true);
    }

    handleSearch = (e) => {
        e.preventDefault();
        this.props.onSearch(); // 父组件查询方法
    };

    getSearchValue = () => {
        let param = {};
        this.props.form.validateFields((err, values) => {
            for (const key in values) {
                if (values[key]) { // 对空数据过滤
                    param[key] = values[key];
                    // if (key === 'dept') { // 参照处理
                    //     param[key] = param[key].id;
                    // }
                }
            }
        });
        return param;
    }

    // 获取参照的tooltip展示值
    getTooltip = value  => {
        if(value){
            return moment(value).format(formatYearRule);
        }
    }

    render() {
        const {
            getFieldProps,
            getFieldValue } = this.props.form;
        return (
            <SearchPanel
                search={this.handleSearch}
                reset={this.searchReset}
            >
                <FormItem label='登陆帐号'>
                    <FormControl
                        {...getFieldProps('loginAccount', {
                            initialValue: ''
                        })}
                    />
                </FormItem>

                <FormItem label='联系人姓名'>
                    <FormControl
                        {...getFieldProps('contactName', {
                            initialValue: '',
                        })}
                    />
                </FormItem>

                <FormItem label='申请类型'>
                    <Select
                        {...getFieldProps('contactType')}
                    >
                        <Option value='' key=''>全部</Option>
                        <Option value='0' key='0'>第一</Option>
                        <Option value='1' key='1'>第二</Option>
                    </Select>
                </FormItem>
                <FormItem label='联系人手机'>
                    <FormControl
                        {...getFieldProps('contactTel', {
                            initialValue: '',
                        })}
                    />
                </FormItem>
            </SearchPanel>
        )
    }
}

export default Form.createForm()(SearchArea);
