import React, { Component } from 'react';
import { Icon, Label, Checkbox, Button,Select, FormControl, Form } from 'tinper-bee';
import FormLayout from 'ac-form-layout';
import './index.less';
import AcTips from "ac-tips";
import {actions, connect} from "mirrorx";
import request from 'ref-combobox/lib/utils/request';
import 'ref-combobox/lib/index.css';
import 'bee-button/build/Button.css';
import 'bee-icon/build/Icon.css';

const {FormItem, FormRow} = FormLayout;
const Option = Select.Option;
const layoutOpt = {
    md: 4,
    xs: 10
}

 class PersonPerformance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkbox: false,
            // statusParams:.
            orderTypes:[
                {
                    'code':'是',
                    'name':'是'
                },
                {
                    'code':'否',
                    'name':'否'
                }
            ],
            //专业组状态
            statusParams : {type: "specialGroupCode", emptyHeader : "true"},
            currPageIndex:1,
            searchValue:'',
            defaultComboValue:'',
            OptionsList:[],
            selectArrary:[]

        }
    }
     componentWillMount(){
         this.props.onRef(this);
         this.setState({
             OptionsList :  this.props.OptionsList
         })
         console.log(this.state.OptionsList)
     }

    close = () => {
        this.props.MainContent.getChildrenMsg(this, false)
    }
    submit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (err) {
                console.log('校验失败', values);
            } else {
                console.log('提交成功', values)
            }
        });
    }
     handleChange = (value) => {
           this.setState({
             selectArrary: value
         });
     }
    save = () => {
        let params ={specialGroupCode: this.state.selectArrary ,supplierCode:this.props.supplierCode};
           this.props.form.validateFields(async (err, value) => {
             if (err) {
                AcTips.create({
                    type: 'error',
                    content: "数据校验失败"
                })
                return;
            } else {
                console.log([value]);
                //编辑时设置主键i
                 let {status} = await actions.supplierRouter.saveSupplierAchieve([value]);// 调用 model 层保存方法
                if(this.state.selectArrary && this.state.selectArrary.length > 0 ){
                   await actions.supplierRouter.saveSupplierspecialgroup([params]);// 调用 model 层保存方法
                }
                if (status === 'success') {
                    // actions.sysCode.refresh()
                    // this.setState({ showModal: false })
                }
            }
        });
    }
    /**-------------------------------------------------------------------------------**/
    render() {
        const self = this;
        const { getFieldProps, getFieldValue,getFieldError  } = this.props.form;
         return (
            <div  >
                <FormLayout >
                    <FormRow>
                        <FormItem    label='现生产PPM绩效负责人:'  errorMsg={getFieldError('ppmChargeName')} {...layoutOpt}>
                            <FormControl
                                {...getFieldProps('ppmChargeName', {
                                    validateTrigger: 'onBlur',
                                    rules:[{
                                        message: '请填写现生产PPM绩效负责人',
                                        required: true
                                    }]
                                 }) }
                            />

                        </FormItem>
                        <FormItem    label='现生产AUDIT绩效负责人:' errorMsg={getFieldError('auditChargeName')} {...layoutOpt} >
                            <FormControl
                                {...getFieldProps('auditChargeName', {
                                    validateTrigger: 'onBlur',
                                    rules:[{
                                        message: '请填写现生产AUDIT绩效负责人',
                                        required: true
                                    }]
                                }) }
                            />
                        </FormItem>

                        <FormItem   label='现生产停台绩效负责人:' errorMsg={getFieldError('stoppageChargeName')} {...layoutOpt} >
                            <FormControl
                                {...getFieldProps('stoppageChargeName', {
                                    validateTrigger: 'onBlur',
                                    rules:[{
                                        message: '请填写售后绩效负责人',
                                        required: true
                                    }]
                                }) }
                            />
                        </FormItem>
                    </FormRow>
                    <FormRow>
                        <FormItem     label='售后绩效负责人:'  errorMsg={getFieldError('aftersaleChargeName')} {...layoutOpt} >
                            <FormControl
                                {...getFieldProps('aftersaleChargeName', {
                                    validateTrigger: 'onBlur',
                                    rules:[{
                                        message: '请填写售后绩效负责人',
                                        required: true
                                    }]
                                }) }
                            />
                        </FormItem>
                        <FormItem   label='风险管理负责人:'   errorMsg={getFieldError('riskChargeName')}  {...layoutOpt}>
                            <FormControl
                                {...getFieldProps('riskChargeName', {
                                    validateTrigger: 'onBlur',
                                    rules:[{
                                        message: '请填写风险管理负责人',
                                        required: true
                                    }]
                                }) }
                            />
                        </FormItem>
                        <FormItem   label='新项目绩效负责人:'     errorMsg={getFieldError('newprojectChargeName')}   {...layoutOpt}>
                            <FormControl
                                {...getFieldProps('newprojectChargeName', {
                                    validateTrigger: 'onBlur',
                                    rules:[{
                                        message: '请填写新项目绩效负责人',
                                        required: true
                                    }]
                                }) }
                            />
                        </FormItem>
                    </FormRow>
                    <FormRow>
                        <FormItem label='是否签署质保协议:'  errorMsg={getFieldError('isAgreement')}   {...layoutOpt}>
                            <Select size="sm"
                                    {
                                        ...getFieldProps('isAgreement', {
                                                initialValue: '',
                                            rules:[{
                                                message: '请选择是否签署质保协议',
                                                required: true
                                            }]
                                            }
                                        )}>
                                <Option value="">请选择</Option>
                                {
                                    self.state.orderTypes.map((item, index) => {
                                        return (
                                            <Option key={index} value={item.code}>{item.name}</Option>
                                        )
                                    })
                                }
                            </Select>
                        </FormItem>
                        <FormItem label=' 专业组:'  {...layoutOpt}>
                            <Select size="sm"
                                multiple
                                    onChange={this.handleChange}
                                optionLabelProp="label"
                            >
                                 {
                                    self.props.OptionsList.map((item, index) => {
                                        return(
                                            <Option  label={item.name} value={item.code}>{item.name}</Option>
                                        )
                                    })
                                }
                            </Select>
                        </FormItem>
                     </FormRow>
                </FormLayout>
            </div>
        )
    }
}
 export default Form.createForm()(PersonPerformance);

