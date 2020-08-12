'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _tinperBee = require('tinper-bee');

var _acFormLayout = require('ac-form-layout');

var _acFormLayout2 = _interopRequireDefault(_acFormLayout);

require('./index.less');

var _acTips = require('ac-tips');

var _acTips2 = _interopRequireDefault(_acTips);

var _mirrorx = require('mirrorx');

var _request = require('ref-combobox/lib/utils/request');

var _request2 = _interopRequireDefault(_request);

require('ref-combobox/lib/index.css');

require('bee-button/build/Button.css');

require('bee-icon/build/Icon.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var FormItem = _acFormLayout2["default"].FormItem,
    FormRow = _acFormLayout2["default"].FormRow;

var Option = _tinperBee.Select.Option;
var layoutOpt = {
    md: 4,
    xs: 10
};

var PersonPerformance = function (_Component) {
    _inherits(PersonPerformance, _Component);

    function PersonPerformance(props) {
        var _this2 = this;

        _classCallCheck(this, PersonPerformance);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.close = function () {
            _this.props.MainContent.getChildrenMsg(_this, false);
        };

        _this.submit = function (e) {
            e.preventDefault();
            _this.props.form.validateFields(function (err, values) {
                if (err) {
                    console.log('校验失败', values);
                } else {
                    console.log('提交成功', values);
                }
            });
        };

        _this.handleChange = function (value) {
            _this.setState({
                selectArrary: value
            });
        };

        _this.save = function () {
            var params = { specialGroupCode: _this.state.selectArrary, supplierCode: _this.props.supplierCode };
            _this.props.form.validateFields(function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(err, value) {
                    var _ref2, status;

                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    if (!err) {
                                        _context.next = 5;
                                        break;
                                    }

                                    _acTips2["default"].create({
                                        type: 'error',
                                        content: "数据校验失败"
                                    });
                                    return _context.abrupt('return');

                                case 5:
                                    console.log([value]);
                                    //编辑时设置主键i
                                    _context.next = 8;
                                    return _mirrorx.actions.supplierRouter.saveSupplierAchieve([value]);

                                case 8:
                                    _ref2 = _context.sent;
                                    status = _ref2.status;

                                    if (!(_this.state.selectArrary && _this.state.selectArrary.length > 0)) {
                                        _context.next = 13;
                                        break;
                                    }

                                    _context.next = 13;
                                    return _mirrorx.actions.supplierRouter.saveSupplierspecialgroup([params]);

                                case 13:
                                    if (status === 'success') {
                                        // actions.sysCode.refresh()
                                        // this.setState({ showModal: false })
                                    }

                                case 14:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, _this2);
                }));

                return function (_x, _x2) {
                    return _ref.apply(this, arguments);
                };
            }());
        };

        _this.state = {
            checkbox: false,
            // statusParams:.
            orderTypes: [{
                'code': '是',
                'name': '是'
            }, {
                'code': '否',
                'name': '否'
            }],
            //专业组状态
            statusParams: { type: "specialGroupCode", emptyHeader: "true" },
            currPageIndex: 1,
            searchValue: '',
            defaultComboValue: '',
            OptionsList: [],
            selectArrary: []

        };
        return _this;
    }

    PersonPerformance.prototype.componentWillMount = function componentWillMount() {
        this.props.onRef(this);
        this.setState({
            OptionsList: this.props.OptionsList
        });
        console.log(this.state.OptionsList);
    };

    /**-------------------------------------------------------------------------------**/
    PersonPerformance.prototype.render = function render() {
        var self = this;
        var _props$form = this.props.form,
            getFieldProps = _props$form.getFieldProps,
            getFieldValue = _props$form.getFieldValue,
            getFieldError = _props$form.getFieldError;

        return _react2["default"].createElement(
            'div',
            null,
            _react2["default"].createElement(
                _acFormLayout2["default"],
                null,
                _react2["default"].createElement(
                    FormRow,
                    null,
                    _react2["default"].createElement(
                        FormItem,
                        _extends({ label: '\u73B0\u751F\u4EA7PPM\u7EE9\u6548\u8D1F\u8D23\u4EBA:', errorMsg: getFieldError('ppmChargeName') }, layoutOpt),
                        _react2["default"].createElement(_tinperBee.FormControl, getFieldProps('ppmChargeName', {
                            validateTrigger: 'onBlur',
                            rules: [{
                                message: '请填写现生产PPM绩效负责人',
                                required: true
                            }]
                        }))
                    ),
                    _react2["default"].createElement(
                        FormItem,
                        _extends({ label: '\u73B0\u751F\u4EA7AUDIT\u7EE9\u6548\u8D1F\u8D23\u4EBA:', errorMsg: getFieldError('auditChargeName') }, layoutOpt),
                        _react2["default"].createElement(_tinperBee.FormControl, getFieldProps('auditChargeName', {
                            validateTrigger: 'onBlur',
                            rules: [{
                                message: '请填写现生产AUDIT绩效负责人',
                                required: true
                            }]
                        }))
                    ),
                    _react2["default"].createElement(
                        FormItem,
                        _extends({ label: '\u73B0\u751F\u4EA7\u505C\u53F0\u7EE9\u6548\u8D1F\u8D23\u4EBA:', errorMsg: getFieldError('stoppageChargeName') }, layoutOpt),
                        _react2["default"].createElement(_tinperBee.FormControl, getFieldProps('stoppageChargeName', {
                            validateTrigger: 'onBlur',
                            rules: [{
                                message: '请填写售后绩效负责人',
                                required: true
                            }]
                        }))
                    )
                ),
                _react2["default"].createElement(
                    FormRow,
                    null,
                    _react2["default"].createElement(
                        FormItem,
                        _extends({ label: '\u552E\u540E\u7EE9\u6548\u8D1F\u8D23\u4EBA:', errorMsg: getFieldError('aftersaleChargeName') }, layoutOpt),
                        _react2["default"].createElement(_tinperBee.FormControl, getFieldProps('aftersaleChargeName', {
                            validateTrigger: 'onBlur',
                            rules: [{
                                message: '请填写售后绩效负责人',
                                required: true
                            }]
                        }))
                    ),
                    _react2["default"].createElement(
                        FormItem,
                        _extends({ label: '\u98CE\u9669\u7BA1\u7406\u8D1F\u8D23\u4EBA:', errorMsg: getFieldError('riskChargeName') }, layoutOpt),
                        _react2["default"].createElement(_tinperBee.FormControl, getFieldProps('riskChargeName', {
                            validateTrigger: 'onBlur',
                            rules: [{
                                message: '请填写风险管理负责人',
                                required: true
                            }]
                        }))
                    ),
                    _react2["default"].createElement(
                        FormItem,
                        _extends({ label: '\u65B0\u9879\u76EE\u7EE9\u6548\u8D1F\u8D23\u4EBA:', errorMsg: getFieldError('newprojectChargeName') }, layoutOpt),
                        _react2["default"].createElement(_tinperBee.FormControl, getFieldProps('newprojectChargeName', {
                            validateTrigger: 'onBlur',
                            rules: [{
                                message: '请填写新项目绩效负责人',
                                required: true
                            }]
                        }))
                    )
                ),
                _react2["default"].createElement(
                    FormRow,
                    null,
                    _react2["default"].createElement(
                        FormItem,
                        _extends({ label: '\u662F\u5426\u7B7E\u7F72\u8D28\u4FDD\u534F\u8BAE:', errorMsg: getFieldError('isAgreement') }, layoutOpt),
                        _react2["default"].createElement(
                            _tinperBee.Select,
                            _extends({ size: 'sm'
                            }, getFieldProps('isAgreement', {
                                initialValue: '',
                                rules: [{
                                    message: '请选择是否签署质保协议',
                                    required: true
                                }]
                            })),
                            _react2["default"].createElement(
                                Option,
                                { value: '' },
                                '\u8BF7\u9009\u62E9'
                            ),
                            self.state.orderTypes.map(function (item, index) {
                                return _react2["default"].createElement(
                                    Option,
                                    { key: index, value: item.code },
                                    item.name
                                );
                            })
                        )
                    ),
                    _react2["default"].createElement(
                        FormItem,
                        _extends({ label: ' \u4E13\u4E1A\u7EC4:' }, layoutOpt),
                        _react2["default"].createElement(
                            _tinperBee.Select,
                            { size: 'sm',
                                multiple: true,
                                onChange: this.handleChange,
                                optionLabelProp: 'label'
                            },
                            self.props.OptionsList.map(function (item, index) {
                                return _react2["default"].createElement(
                                    Option,
                                    { label: item.name, value: item.code },
                                    item.name
                                );
                            })
                        )
                    )
                )
            )
        );
    };

    return PersonPerformance;
}(_react.Component);

exports["default"] = _tinperBee.Form.createForm()(PersonPerformance);
module.exports = exports['default'];