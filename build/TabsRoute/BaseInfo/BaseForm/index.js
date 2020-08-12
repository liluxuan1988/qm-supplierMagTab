"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _tinperBee = require("tinper-bee");

var _beeDatepicker = require("bee-datepicker");

var _beeDatepicker2 = _interopRequireDefault(_beeDatepicker);

var _acFormLayout = require("ac-form-layout");

var _acFormLayout2 = _interopRequireDefault(_acFormLayout);

var _mirrorx = require("mirrorx");

require("./index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Option = _tinperBee.Select.Option;

var FormItem = _acFormLayout2["default"].FormItem,
    FormRow = _acFormLayout2["default"].FormRow;

var format = "YYYY-MM-DD";

var layoutOpt = {
    md: 4,
    sm: 6,
    xs: 12
    // const layoutOpt = {
    //     md: 6,
    //     xs: 12
    // }

};
var BaseForm = function (_Component) {
    _inherits(BaseForm, _Component);

    function BaseForm(props) {
        _classCallCheck(this, BaseForm);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.openChange = function (areaOpen) {
            _this.setState({});
        };

        _this.state = {};
        return _this;
    }
    /**
     * 固有信息打开关闭
     * @param {*} areaOpen 打开/关闭
     */


    BaseForm.prototype.render = function render() {
        var _props = this.props,
            _props$SupplierDetail = _props.SupplierDetail,
            SupplierDetail = _props$SupplierDetail === undefined ? {} : _props$SupplierDetail,
            showLoading = _props.showLoading,
            form = _props.form;
        var content = SupplierDetail.content;
        var getFieldProps = form.getFieldProps,
            getFieldError = form.getFieldError;

        var obj = {};
        if (content && content.length > 0) {
            obj = content[0];
        }
        return _react2["default"].createElement(
            "div",
            { className: "baseForm-editform", id: "baseForm-editform" },
            _react2["default"].createElement(_tinperBee.Loading, { fullScreen: true, showBackDrop: true, show: showLoading }),
            _react2["default"].createElement(
                _acFormLayout2["default"],
                { disabled: true },
                _react2["default"].createElement(
                    FormRow,
                    null,
                    _react2["default"].createElement(
                        FormItem,
                        _extends({ label: "\u4F9B\u5E94\u5546\u4EE3\u7801", errorMsg: getFieldError('supplierCode') }, layoutOpt),
                        _react2["default"].createElement(_tinperBee.FormControl, _extends({
                            maxLength: 40
                        }, getFieldProps('supplierCode', {
                            initialValue: obj.supplierCode

                        })))
                    ),
                    _react2["default"].createElement(
                        FormItem,
                        _extends({ label: "\u4F9B\u5E94\u5546\u4E2D\u6587\u540D\u79F0",
                            errorMsg: getFieldError('supplierName') }, layoutOpt),
                        _react2["default"].createElement(_tinperBee.FormControl, _extends({
                            maxLength: 200
                        }, getFieldProps('supplierName', {
                            validateTrigger: 'onBlur',
                            rules: [{
                                message: '请填写供应商名称',
                                required: true
                            }],
                            initialValue: obj.supplierName || ""
                        })))
                    ),
                    _react2["default"].createElement(
                        FormItem,
                        _extends({ label: "\u4F9B\u5E94\u5546\u4E2D\u6587\u7B80\u79F0",
                            errorMsg: getFieldError('supplierAbbr') }, layoutOpt),
                        _react2["default"].createElement(_tinperBee.FormControl, _extends({
                            maxLength: 100
                        }, getFieldProps('supplierAbbr', {
                            validateTrigger: 'onBlur',
                            rules: [{
                                message: '请填写供应商名称',
                                required: true
                            }],
                            initialValue: obj.supplierAbbr || ""
                        })))
                    )
                ),
                _react2["default"].createElement(
                    FormRow,
                    null,
                    _react2["default"].createElement(
                        FormItem,
                        _extends({ label: "\u4F9B\u5E94\u5546\u82F1\u6587\u540D\u79F0",
                            errorMsg: getFieldError('supplierNameEn') }, layoutOpt),
                        _react2["default"].createElement(_tinperBee.FormControl, _extends({
                            maxLength: 200
                        }, getFieldProps('supplierNameEn', {
                            validateTrigger: 'onBlur',
                            rules: [{
                                message: '请填写供应商名称',
                                required: true
                            }],
                            initialValue: obj.supplierNameEn || ""
                        })))
                    ),
                    _react2["default"].createElement(
                        FormItem,
                        _extends({ label: "\u4F9B\u5E94\u5546\u82F1\u6587\u7B80\u79F0",
                            errorMsg: getFieldError('supplierAbbrEn') }, layoutOpt),
                        _react2["default"].createElement(_tinperBee.FormControl, _extends({
                            maxLength: 100
                        }, getFieldProps('supplierAbbrEn', {
                            validateTrigger: 'onBlur',
                            rules: [{
                                message: '请填写供应商名称',
                                required: true
                            }],
                            initialValue: obj.supplierAbbrEn || ""
                        })))
                    ),
                    _react2["default"].createElement(
                        FormItem,
                        _extends({ label: "\u7EDF\u4E00\u793E\u4F1A\u4FE1\u7528\u4EE3\u7801",
                            errorMsg: getFieldError('supplierTaxCode') }, layoutOpt),
                        _react2["default"].createElement(_tinperBee.FormControl, _extends({
                            maxLength: 100
                        }, getFieldProps('supplierTaxCode', {
                            validateTrigger: 'onBlur',
                            rules: [{
                                message: '请填写统一社会信用代码',
                                required: true
                            }],
                            initialValue: obj.supplierTaxCode || ""
                        })))
                    )
                ),
                _react2["default"].createElement(
                    FormRow,
                    null,
                    _react2["default"].createElement(
                        FormItem,
                        _extends({ label: "\u4F01\u4E1A\u6027\u8D28",
                            errorMsg: getFieldError('supplierEnterpriseType') }, layoutOpt),
                        _react2["default"].createElement(_tinperBee.FormControl, _extends({
                            maxLength: 100
                        }, getFieldProps('supplierEnterpriseType', {
                            validateTrigger: 'onBlur',
                            rules: [{
                                message: '请填写企业性质',
                                required: true
                            }],
                            initialValue: obj.supplierEnterpriseType || ""
                        })))
                    ),
                    _react2["default"].createElement(
                        FormItem,
                        _extends({ label: "\u6CE8\u518C\u5730_\u56FD\u5BB6",
                            errorMsg: getFieldError('supplierCountry') }, layoutOpt),
                        _react2["default"].createElement(_tinperBee.FormControl, _extends({
                            maxLength: 100
                        }, getFieldProps('supplierCountry', {
                            validateTrigger: 'onBlur',
                            rules: [{
                                message: '请填写注册地_国家',
                                required: true
                            }],
                            initialValue: obj.supplierCountry || ""
                        })))
                    ),
                    _react2["default"].createElement(
                        FormItem,
                        _extends({ label: "\u7701\u4EFD",
                            errorMsg: getFieldError('supplierProvince') }, layoutOpt),
                        _react2["default"].createElement(_tinperBee.FormControl, _extends({
                            maxLength: 100
                        }, getFieldProps('supplierProvince', {
                            validateTrigger: 'onBlur',
                            rules: [{
                                message: '请填写省份',
                                required: true
                            }],
                            initialValue: obj.supplierProvince || ""
                        })))
                    )
                ),
                _react2["default"].createElement(
                    FormRow,
                    null,
                    _react2["default"].createElement(
                        FormItem,
                        _extends({ label: "\u57CE\u5E02",
                            errorMsg: getFieldError('supplierCity') }, layoutOpt),
                        _react2["default"].createElement(_tinperBee.FormControl, _extends({
                            maxLength: 100
                        }, getFieldProps('supplierCity', {
                            validateTrigger: 'onBlur',
                            rules: [{
                                message: '请填写城市',
                                required: true
                            }],
                            initialValue: obj.supplierCity || ""
                        })))
                    ),
                    _react2["default"].createElement(
                        FormItem,
                        _extends({ label: "\u8BE6\u7EC6\u5730\u5740",
                            errorMsg: getFieldError('supplierAddress') }, layoutOpt),
                        _react2["default"].createElement(_tinperBee.FormControl, _extends({
                            maxLength: 100
                        }, getFieldProps('supplierAddress', {
                            validateTrigger: 'onBlur',
                            rules: [{
                                message: '请填写详细地址',
                                required: true
                            }],
                            initialValue: obj.supplierAddress || ""
                        })))
                    ),
                    _react2["default"].createElement(
                        FormItem,
                        _extends({ label: "\u90AE\u7F16",
                            errorMsg: getFieldError('supplierPostcode') }, layoutOpt),
                        _react2["default"].createElement(_tinperBee.FormControl, _extends({
                            maxLength: 100
                        }, getFieldProps('supplierPostcode', {
                            validateTrigger: 'onBlur',
                            rules: [{
                                message: '请填写邮编',
                                required: true
                            }],
                            initialValue: obj.supplierPostcode || ""
                        })))
                    )
                ),
                _react2["default"].createElement(
                    FormRow,
                    null,
                    _react2["default"].createElement(
                        FormItem,
                        _extends({ label: "\u6210\u7ACB\u65E5\u671F",
                            errorMsg: getFieldError('supplierRegisteredDate') }, layoutOpt),
                        _react2["default"].createElement(_beeDatepicker2["default"], _extends({
                            format: format
                        }, getFieldProps('supplierRegisteredDate', {
                            initialValue: obj.supplierRegisteredDate,
                            validateTrigger: 'onBlur',
                            rules: [{
                                required: true,
                                message: '请选择成立日期'
                            }]
                        }), {
                            getCalendarContainer: function getCalendarContainer() {
                                return document.getElementById('baseForm-editform');
                            }
                        }))
                    ),
                    _react2["default"].createElement(
                        FormItem,
                        _extends({ label: "\u6CE8\u518C\u8D44\u91D1\uFF08\u4E07\u5143\uFF09" }, layoutOpt, {
                            errorMsg: getFieldError('supplierRegisteredCapital') }),
                        _react2["default"].createElement(_tinperBee.InputNumber, _extends({
                            min: 0,
                            style: { 'float': 'left', 'text-align': 'left' }
                        }, getFieldProps('supplierRegisteredCapital', {
                            initialValue: obj.supplierRegisteredCapital,
                            rules: [{
                                message: '请填写册资金（万元）',
                                required: true
                            }]
                        })))
                    ),
                    _react2["default"].createElement(
                        FormItem,
                        _extends({ label: "\u5E01\u79CD" }, layoutOpt, {
                            errorMsg: getFieldError('supplierRegisteredCurrency') }),
                        _react2["default"].createElement(_tinperBee.FormControl, _extends({
                            maxLength: 100
                        }, getFieldProps('supplierRegisteredCurrency', {
                            validateTrigger: 'onBlur',
                            rules: [{
                                message: '请选择币种',
                                required: true
                            }],
                            initialValue: obj.supplierRegisteredCurrency || ""
                        })))
                    )
                ),
                _react2["default"].createElement(
                    FormRow,
                    null,
                    _react2["default"].createElement(
                        FormItem,
                        _extends({ label: "\u516C\u53F8\u6CD5\u4EBA\u4EE3\u8868" }, layoutOpt),
                        _react2["default"].createElement(_tinperBee.FormControl, _extends({
                            maxLength: 100
                        }, getFieldProps('supplierLegalPerson', {
                            validateTrigger: 'onBlur',
                            rules: [{
                                message: '请填写公司法人代表',
                                required: true
                            }],
                            initialValue: obj.supplierLegalPerson || ""
                        })))
                    ),
                    _react2["default"].createElement(
                        FormItem,
                        _extends({ label: "\u516C\u53F8\u6CD5\u4EBA\u7535\u8BDD",
                            errorMsg: getFieldError('supplierLegalPersonTel') }, layoutOpt),
                        _react2["default"].createElement(_tinperBee.FormControl, _extends({
                            maxLength: 100
                        }, getFieldProps('supplierLegalPersonTel', {
                            validateTrigger: 'onBlur',
                            rules: [{
                                message: '请填写公司法人电话',
                                required: true
                            }],
                            initialValue: obj.supplierLegalPersonTel || ""
                        })))
                    ),
                    _react2["default"].createElement(
                        FormItem,
                        _extends({ label: "\u516C\u53F8\u6CD5\u4EBA\u90AE\u7BB1",
                            errorMsg: getFieldError('supplierLegalPersonEmail') }, layoutOpt),
                        _react2["default"].createElement(_tinperBee.FormControl, _extends({
                            maxLength: 100
                        }, getFieldProps('supplierLegalPersonEmail', {
                            validateTrigger: 'onBlur',
                            rules: [{
                                message: '请填写公司法人邮箱',
                                required: true
                            }],
                            initialValue: obj.supplierLegalPersonEmail || ""
                        })))
                    )
                ),
                _react2["default"].createElement(
                    FormRow,
                    null,
                    _react2["default"].createElement(
                        FormItem,
                        _extends({ label: "\u516C\u53F8\u603B\u673A", errorMsg: getFieldError('supplierTel') }, layoutOpt),
                        _react2["default"].createElement(_tinperBee.FormControl, _extends({
                            maxLength: 100
                        }, getFieldProps('supplierTel', {
                            validateTrigger: 'onBlur',
                            rules: [{
                                message: '请填写公司总机',
                                required: true
                            }],
                            initialValue: obj.supplierTel || ""
                        })))
                    ),
                    _react2["default"].createElement(
                        FormItem,
                        _extends({ label: "\u516C\u53F8\u6CD5\u4EBA\u4F20\u771F", errorMsg: getFieldError('supplierFax') }, layoutOpt),
                        _react2["default"].createElement(_tinperBee.FormControl, _extends({
                            maxLength: 100
                        }, getFieldProps('supplierFax', {
                            validateTrigger: 'onBlur',
                            rules: [{
                                message: '请填写公司传真',
                                required: true
                            }],
                            initialValue: obj.supplierFax || ""
                        })))
                    ),
                    _react2["default"].createElement(
                        FormItem,
                        _extends({ label: "\u516C\u53F8\u5360\u5730\u9762\u79EF\uFF08m2\uFF09",
                            errorMsg: getFieldError('supplierOccupy') }, layoutOpt),
                        _react2["default"].createElement(_tinperBee.InputNumber, _extends({
                            min: 0,
                            style: { 'float': 'left', 'text-align': 'left' }
                        }, getFieldProps('supplierOccupy', {
                            initialValue: obj.supplierOccupy,
                            rules: [{
                                message: '请填写公司建筑面积（万元）',
                                required: true
                            }]
                        })))
                    ),
                    _react2["default"].createElement(
                        FormItem,
                        _extends({ label: "\u516C\u53F8\u5EFA\u7B51\u9762\u79EF\uFF08m2\uFF09",
                            errorMsg: getFieldError('supplierStructureArea') }, layoutOpt),
                        _react2["default"].createElement(_tinperBee.InputNumber, _extends({
                            min: 0,
                            style: { 'float': 'left', 'text-align': 'left' }
                        }, getFieldProps('supplierStructureArea', {
                            initialValue: obj.supplierStructureArea,
                            rules: [{
                                message: '请填写公司建筑面积（万元）',
                                required: true
                            }]
                        })))
                    ),
                    _react2["default"].createElement(
                        FormItem,
                        _extends({ label: "\u56FA\u5B9A\u8D44\u4EA7\uFF08\u4E07RMB\uFF09",
                            errorMsg: getFieldError('supplierFixedAssets') }, layoutOpt),
                        _react2["default"].createElement(_tinperBee.InputNumber, _extends({
                            min: 0,
                            style: { 'float': 'left', 'text-align': 'left' }
                        }, getFieldProps('supplierFixedAssets', {
                            initialValue: obj.supplierFixedAssets,
                            rules: [{
                                message: '请填写固定资产',
                                required: true
                            }]
                        })))
                    ),
                    _react2["default"].createElement(
                        FormItem,
                        _extends({ label: "\u8D44\u4EA7\u8D1F\u503A\u7387\uFF08%\uFF09",
                            errorMsg: getFieldError('supplierDebtRatio') }, layoutOpt),
                        _react2["default"].createElement(_tinperBee.InputNumber, _extends({
                            min: 0,
                            style: { 'float': 'left', 'text-align': 'left' }
                        }, getFieldProps('supplierDebtRatio', {
                            initialValue: obj.supplierDebtRatio,
                            rules: [{
                                message: '请填写资产负债率',
                                required: true
                            }]
                        })))
                    )
                ),
                _react2["default"].createElement(
                    FormRow,
                    null,
                    _react2["default"].createElement(
                        FormItem,
                        _extends({ label: "\u573A\u5730\u6240\u6709\u5F62\u5F0F" }, layoutOpt),
                        _react2["default"].createElement(_tinperBee.FormControl, _extends({
                            maxLength: 100
                        }, getFieldProps('supplierSiteType', {
                            validateTrigger: 'onBlur',
                            rules: [{
                                message: '请填写场地所有形式',
                                required: true
                            }],
                            initialValue: obj.supplierSiteType || ""
                        })))
                    ),
                    _react2["default"].createElement(
                        FormItem,
                        _extends({ label: "\u4EA7\u54C1\u7C7B\u522B", errorMsg: getFieldError('primaryProduction') }, layoutOpt),
                        _react2["default"].createElement(_tinperBee.FormControl, _extends({
                            maxLength: 100
                        }, getFieldProps('primaryProduction', {
                            validateTrigger: 'onBlur',
                            rules: [{
                                message: '请填写资产类别',
                                required: true
                            }],
                            initialValue: obj.primaryProduction || ""
                        })))
                    ),
                    _react2["default"].createElement(
                        FormItem,
                        _extends({ label: "\u8D38\u6613\u4F19\u4F34\u7C7B\u578B",
                            errorMsg: getFieldError('tradingPartnerType') }, layoutOpt),
                        _react2["default"].createElement(_tinperBee.FormControl, _extends({
                            maxLength: 100
                        }, getFieldProps('tradingPartnerType', {
                            validateTrigger: 'onBlur',
                            rules: [{
                                message: '请填写贸易伙伴类型',
                                required: true
                            }],
                            initialValue: obj.tradingPartnerType || ""
                        })))
                    )
                ),
                _react2["default"].createElement(
                    FormRow,
                    null,
                    _react2["default"].createElement(
                        FormItem,
                        _extends({ label: "\u516C\u53F8\u7F51\u5740",
                            errorMsg: getFieldError('supplierWebsite') }, layoutOpt),
                        _react2["default"].createElement(_tinperBee.FormControl, _extends({
                            maxLength: 100
                        }, getFieldProps('supplierWebsite', {
                            validateTrigger: 'onBlur',
                            rules: [{
                                message: '请填写公司网址',
                                required: true
                            }],
                            initialValue: obj.supplierWebsite || ""
                        })))
                    ),
                    _react2["default"].createElement(
                        FormItem,
                        _extends({ label: "\u7ECF\u8425\u8303\u56F4", className: "u-col-12",
                            errorMsg: getFieldError('supplierBusinessScope') }, layoutOpt),
                        _react2["default"].createElement(_tinperBee.FormControl, _extends({ componentClass: "textarea", className: "textareaStyle"
                        }, getFieldProps('supplierBusinessScope', {
                            validateTrigger: 'onBlur',
                            rules: [{
                                message: '请填写经营范围',
                                required: true
                            }],
                            initialValue: obj.supplierBusinessScope || ""
                        })))
                    )
                ),
                _react2["default"].createElement(
                    FormRow,
                    { className: "textAreaRow" },
                    _react2["default"].createElement(
                        FormItem,
                        _extends({ label: "\u6240\u5F97\u8363\u8A89", className: "u-col-12",
                            errorMsg: getFieldError('supplierCert') }, layoutOpt),
                        _react2["default"].createElement(_tinperBee.FormControl, _extends({ componentClass: "textarea", className: "textareaStyle"
                        }, getFieldProps('supplierCert', {
                            validateTrigger: 'onBlur',
                            rules: [{
                                message: '请填写所得荣誉',
                                required: true
                            }],
                            initialValue: obj.supplierCert || ""
                        })))
                    )
                )
            )
        );
    };

    return BaseForm;
}(_react.Component);

exports["default"] = _tinperBee.Form.createForm()(BaseForm);
module.exports = exports["default"];