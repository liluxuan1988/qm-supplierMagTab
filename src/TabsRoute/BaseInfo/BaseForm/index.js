import React, { Component } from "react";
import moment from "moment";
import {FormControl, Select, Icon, Form, InputNumber, Col, Loading} from 'tinper-bee'
import DatePicker from 'bee-datepicker';
import FormLayout from 'ac-form-layout';
import {connect} from "mirrorx";
import './index.less';
const Option = Select.Option;

const { FormItem, FormRow } = FormLayout;
const format = "YYYY-MM-DD";

const layoutOpt = {
    md: 4,
    sm: 6,
    xs: 12
}
// const layoutOpt = {
//     md: 6,
//     xs: 12
// }

class BaseForm extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    /**
     * 固有信息打开关闭
     * @param {*} areaOpen 打开/关闭
     */
    openChange=(areaOpen)=>{
        this.setState({

        })
    }
    render() {
         let {SupplierDetail = {} ,showLoading ,form} = this.props;
        let {content} = SupplierDetail;
        let { getFieldProps, getFieldError } = form;
        let obj = {};
        if(content && content.length >0)
        {
            obj = content[0]
        }
        return (
            <div className='baseForm-editform' id = "baseForm-editform">
                <Loading fullScreen showBackDrop={true} show={showLoading}/>
                <FormLayout disabled={true}>
                    <FormRow>
                        <FormItem label='供应商代码'   errorMsg={getFieldError('supplierCode')} {...layoutOpt}>
                            <FormControl
                                maxLength={40}
                                {...getFieldProps('supplierCode', {
                                    initialValue: obj.supplierCode

                                })}
                            />
                        </FormItem>
                        <FormItem label='供应商中文名称'  
                                  errorMsg={getFieldError('supplierName')} {...layoutOpt}>
                            <FormControl
                                maxLength={200}
                                {...getFieldProps('supplierName', {
                                    validateTrigger: 'onBlur',
                                    rules: [{
                                        message: '请填写供应商名称',
                                        required: true
                                    }],
                                    initialValue: obj.supplierName || "",
                                })}
                            />
                        </FormItem>
                        <FormItem label='供应商中文简称'  
                                  errorMsg={getFieldError('supplierAbbr')} {...layoutOpt}>
                            <FormControl
                                maxLength={100}
                                {...getFieldProps('supplierAbbr', {
                                    validateTrigger: 'onBlur',
                                    rules: [{
                                        message: '请填写供应商名称',
                                        required: true
                                    }],
                                    initialValue: obj.supplierAbbr || "",
                                })}
                            />
                        </FormItem>
                    </FormRow>
                    <FormRow>
                        <FormItem label='供应商英文名称'  
                                  errorMsg={getFieldError('supplierNameEn')} {...layoutOpt}>
                            <FormControl
                                maxLength={200}
                                {...getFieldProps('supplierNameEn', {
                                    validateTrigger: 'onBlur',
                                    rules: [{
                                        message: '请填写供应商名称',
                                        required: true
                                    }],
                                    initialValue: obj.supplierNameEn || "",
                                })}
                            />
                        </FormItem>


                        <FormItem label='供应商英文简称'  
                                  errorMsg={getFieldError('supplierAbbrEn')} {...layoutOpt}>
                            <FormControl
                                maxLength={100}
                                {...getFieldProps('supplierAbbrEn', {
                                    validateTrigger: 'onBlur',
                                    rules: [{
                                        message: '请填写供应商名称',
                                        required: true
                                    }],
                                    initialValue: obj.supplierAbbrEn || "",
                                })}
                            />
                        </FormItem>
                        <FormItem label='统一社会信用代码'  
                                  errorMsg={getFieldError('supplierTaxCode')} {...layoutOpt}>
                            <FormControl
                                maxLength={100}
                                {...getFieldProps('supplierTaxCode', {
                                    validateTrigger: 'onBlur',
                                    rules: [{
                                        message: '请填写统一社会信用代码',
                                        required: true
                                    }],
                                    initialValue: obj.supplierTaxCode || "",
                                })}
                            />
                        </FormItem>
                    </FormRow>
                    <FormRow>
                        <FormItem label='企业性质'  
                                  errorMsg={getFieldError('supplierEnterpriseType')} {...layoutOpt}>
                            <FormControl
                                maxLength={100}
                                {...getFieldProps('supplierEnterpriseType', {
                                    validateTrigger: 'onBlur',
                                    rules: [{
                                        message: '请填写企业性质',
                                        required: true
                                    }],
                                    initialValue: obj.supplierEnterpriseType || "",
                                })}
                            />
                        </FormItem>
                        <FormItem label='注册地_国家'  
                                  errorMsg={getFieldError('supplierCountry')} {...layoutOpt}>
                            <FormControl
                                maxLength={100}
                                {...getFieldProps('supplierCountry', {
                                    validateTrigger: 'onBlur',
                                    rules: [{
                                        message: '请填写注册地_国家',
                                        required: true
                                    }],
                                    initialValue: obj.supplierCountry || "",
                                })}
                            />
                        </FormItem>
                        <FormItem label='省份'  
                                  errorMsg={getFieldError('supplierProvince')} {...layoutOpt}>
                            <FormControl
                                maxLength={100}
                                {...getFieldProps('supplierProvince', {
                                    validateTrigger: 'onBlur',
                                    rules: [{
                                        message: '请填写省份',
                                        required: true
                                    }],
                                    initialValue: obj.supplierProvince || "",
                                })}
                            />
                        </FormItem>
                    </FormRow>
                    <FormRow>
                        <FormItem label='城市'  
                                  errorMsg={getFieldError('supplierCity')} {...layoutOpt}>
                            <FormControl
                                maxLength={100}
                                {...getFieldProps('supplierCity', {
                                    validateTrigger: 'onBlur',
                                    rules: [{
                                        message: '请填写城市',
                                        required: true
                                    }],
                                    initialValue: obj.supplierCity || "",
                                })}
                            />
                        </FormItem>
                        <FormItem label='详细地址'  
                                  errorMsg={getFieldError('supplierAddress')} {...layoutOpt}>
                            <FormControl
                                maxLength={100}
                                {...getFieldProps('supplierAddress', {
                                    validateTrigger: 'onBlur',
                                    rules: [{
                                        message: '请填写详细地址',
                                        required: true
                                    }],
                                    initialValue: obj.supplierAddress || "",
                                })}
                            />
                        </FormItem>
                        <FormItem label='邮编'  
                                  errorMsg={getFieldError('supplierPostcode')} {...layoutOpt}>
                            <FormControl
                                maxLength={100}
                                {...getFieldProps('supplierPostcode', {
                                    validateTrigger: 'onBlur',
                                    rules: [{
                                        message: '请填写邮编',
                                        required: true
                                    }],
                                    initialValue: obj.supplierPostcode || "",
                                })}
                            />
                        </FormItem>
                    </FormRow>
                    <FormRow>
                        <FormItem label='成立日期'  
                                  errorMsg={getFieldError('supplierRegisteredDate')} {...layoutOpt}>
                            <DatePicker
                                format={format}
                                {...getFieldProps('supplierRegisteredDate', {
                                        initialValue: obj.supplierRegisteredDate,
                                        validateTrigger: 'onBlur',
                                        rules: [{
                                            required: true,
                                            message: '请选择成立日期',
                                        }],
                                    }
                                )}
                                getCalendarContainer={()=>document.getElementById('baseForm-editform')}
                            />
                        </FormItem>
                        <FormItem label="注册资金（万元）" {...layoutOpt}  
                                  errorMsg={getFieldError('supplierRegisteredCapital')}>
                            <InputNumber
                                min={0}
                                style={{'float': 'left', 'text-align': 'left'}}
                                {...getFieldProps('supplierRegisteredCapital', {
                                    initialValue: obj.supplierRegisteredCapital,
                                    rules: [{
                                        message: '请填写册资金（万元）',
                                        required: true
                                    }]
                                })}
                            />
                        </FormItem>

                        <FormItem label="币种" {...layoutOpt}  
                                  errorMsg={getFieldError('supplierRegisteredCurrency')}>
                            {/*<Select*/}
                            {/*    {...getFieldProps('supplierRegisteredCurrency', {*/}
                            {/*        validateTrigger: 'onBlur',*/}
                            {/*        initialValue: obj.supplierRegisteredCurrency,*/}
                            {/*        rules: [{*/}
                            {/*            message: '请选择币种',*/}
                            {/*            required: true*/}
                            {/*        }]*/}
                            {/*    })}*/}
                            {/*>*/}
                            {/*    <Option value={0}>人民币</Option>*/}
                            {/*    <Option value={1}>美元</Option>*/}
                            {/*    <Option value={2}>卢布</Option>*/}
                            {/*</Select>*/}
                            <FormControl
                                maxLength={100}
                                {...getFieldProps('supplierRegisteredCurrency', {
                                    validateTrigger: 'onBlur',
                                    rules: [{
                                        message: '请选择币种',
                                        required: true
                                    }],
                                    initialValue: obj.supplierRegisteredCurrency || "",
                                })}
                            />
                        </FormItem>
                    </FormRow>
                    <FormRow>
                        <FormItem label='公司法人代表'   {...layoutOpt}>
                            <FormControl
                                maxLength={100}
                                {...getFieldProps('supplierLegalPerson', {
                                    validateTrigger: 'onBlur',
                                    rules: [{
                                        message: '请填写公司法人代表',
                                        required: true
                                    }],
                                    initialValue: obj.supplierLegalPerson || "",
                                })}
                            />
                        </FormItem>

                        <FormItem label='公司法人电话'  
                                  errorMsg={getFieldError('supplierLegalPersonTel')} {...layoutOpt}>
                            <FormControl
                                maxLength={100}
                                {...getFieldProps('supplierLegalPersonTel', {
                                    validateTrigger: 'onBlur',
                                    rules: [{
                                        message: '请填写公司法人电话',
                                        required: true
                                    }],
                                    initialValue: obj.supplierLegalPersonTel || "",
                                })}
                            />
                        </FormItem>

                        <FormItem label='公司法人邮箱'  
                                  errorMsg={getFieldError('supplierLegalPersonEmail')} {...layoutOpt}>
                            <FormControl
                                maxLength={100}
                                {...getFieldProps('supplierLegalPersonEmail', {
                                    validateTrigger: 'onBlur',
                                    rules: [{
                                        message: '请填写公司法人邮箱',
                                        required: true
                                    }],
                                    initialValue: obj.supplierLegalPersonEmail || "",
                                })}
                            />
                        </FormItem>
                    </FormRow>
                    <FormRow>
                        <FormItem label='公司总机'   errorMsg={getFieldError('supplierTel')} {...layoutOpt}>
                            <FormControl
                                maxLength={100}
                                {...getFieldProps('supplierTel', {
                                    validateTrigger: 'onBlur',
                                    rules: [{
                                        message: '请填写公司总机',
                                        required: true
                                    }],
                                    initialValue: obj.supplierTel || "",
                                })}
                            />
                        </FormItem>
                        <FormItem label='公司法人传真'   errorMsg={getFieldError('supplierFax')} {...layoutOpt}>
                            <FormControl
                                maxLength={100}
                                {...getFieldProps('supplierFax', {
                                    validateTrigger: 'onBlur',
                                    rules: [{
                                        message: '请填写公司传真',
                                        required: true
                                    }],
                                    initialValue: obj.supplierFax || "",
                                })}
                            />
                        </FormItem>

                        <FormItem label='公司占地面积（m2）'  
                                  errorMsg={getFieldError('supplierOccupy')} {...layoutOpt}>
                            <InputNumber
                                min={0}
                                style={{'float': 'left', 'text-align': 'left'}}
                                {...getFieldProps('supplierOccupy', {
                                    initialValue: obj.supplierOccupy,
                                    rules: [{
                                        message: '请填写公司建筑面积（万元）',
                                        required: true
                                    }]
                                })}
                            />
                        </FormItem>

                        <FormItem label='公司建筑面积（m2）'  
                                  errorMsg={getFieldError('supplierStructureArea')} {...layoutOpt}>
                            <InputNumber
                                min={0}
                                style={{'float': 'left', 'text-align': 'left'}}
                                {...getFieldProps('supplierStructureArea', {
                                    initialValue: obj.supplierStructureArea,
                                    rules: [{
                                        message: '请填写公司建筑面积（万元）',
                                        required: true
                                    }]
                                })}
                            />
                        </FormItem>
                        <FormItem label='固定资产（万RMB）'  
                                  errorMsg={getFieldError('supplierFixedAssets')} {...layoutOpt}>
                            <InputNumber
                                min={0}
                                style={{'float': 'left', 'text-align': 'left'}}
                                {...getFieldProps('supplierFixedAssets', {
                                    initialValue: obj.supplierFixedAssets,
                                    rules: [{
                                        message: '请填写固定资产',
                                        required: true
                                    }]
                                })}
                            />
                        </FormItem>

                        <FormItem label='资产负债率（%）'  
                                  errorMsg={getFieldError('supplierDebtRatio')} {...layoutOpt}>
                            <InputNumber
                                min={0}
                                style={{'float': 'left', 'text-align': 'left'}}
                                {...getFieldProps('supplierDebtRatio', {
                                    initialValue: obj.supplierDebtRatio,
                                    rules: [{
                                        message: '请填写资产负债率',
                                        required: true
                                    }]
                                })}
                            />
                        </FormItem>
                    </FormRow>
                    <FormRow>
                        <FormItem label='场地所有形式'    {...layoutOpt}>
                            <FormControl
                                maxLength={100}
                                {...getFieldProps('supplierSiteType', {
                                    validateTrigger: 'onBlur',
                                    rules: [{
                                        message: '请填写场地所有形式',
                                        required: true
                                    }],
                                    initialValue: obj.supplierSiteType || "",
                                })}
                            />
                        </FormItem>
                        <FormItem label='产品类别'   errorMsg={getFieldError('primaryProduction')} {...layoutOpt}>
                            <FormControl
                                maxLength={100}
                                {...getFieldProps('primaryProduction', {
                                    validateTrigger: 'onBlur',
                                    rules: [{
                                        message: '请填写资产类别',
                                        required: true
                                    }],
                                    initialValue: obj.primaryProduction || "",
                                })}
                            />
                        </FormItem>

                        <FormItem label='贸易伙伴类型'  
                                  errorMsg={getFieldError('tradingPartnerType')} {...layoutOpt}>
                            <FormControl
                                maxLength={100}
                                {...getFieldProps('tradingPartnerType', {
                                    validateTrigger: 'onBlur',
                                    rules: [{
                                        message: '请填写贸易伙伴类型',
                                        required: true
                                    }],
                                    initialValue: obj.tradingPartnerType || "",
                                })}
                            />
                        </FormItem>
                    </FormRow>
                    <FormRow>

                        <FormItem label='公司网址'  
                                  errorMsg={getFieldError('supplierWebsite')} {...layoutOpt}>
                            <FormControl
                                maxLength={100}
                                {...getFieldProps('supplierWebsite', {
                                    validateTrigger: 'onBlur',
                                    rules: [{
                                        message: '请填写公司网址',
                                        required: true
                                    }],
                                    initialValue: obj.supplierWebsite || "",
                                })}
                            />
                        </FormItem>


                        <FormItem label="经营范围"  className='u-col-12'
                                  errorMsg={getFieldError('supplierBusinessScope')} {...layoutOpt}>
                            <FormControl componentClass='textarea' className="textareaStyle"
                                         {
                                             ...getFieldProps('supplierBusinessScope', {
                                                 validateTrigger: 'onBlur',
                                                 rules: [{
                                                     message: '请填写经营范围',
                                                     required: true
                                                 }],
                                                 initialValue: obj.supplierBusinessScope || "",
                                             })}
                            />
                        </FormItem>

                    </FormRow>
                    <FormRow className="textAreaRow">
                        <FormItem label="所得荣誉"  className='u-col-12'
                                  errorMsg={getFieldError('supplierCert')} {...layoutOpt}>
                            <FormControl componentClass='textarea' className="textareaStyle"
                                         {
                                             ...getFieldProps('supplierCert', {
                                                 validateTrigger: 'onBlur',
                                                 rules: [{
                                                     message: '请填写所得荣誉',
                                                     required: true
                                                 }],
                                                 initialValue: obj.supplierCert || "",
                                             })}
                            />
                         </FormItem>
                    </FormRow>
                  </FormLayout>
            </div>
        )
    }
}

export default Form.createForm()(BaseForm);
