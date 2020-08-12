'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _beeButton = require('bee-button');

var _beeButton2 = _interopRequireDefault(_beeButton);

var _acBtns = require('ac-btns');

var _acBtns2 = _interopRequireDefault(_acBtns);

var _acTips = require('ac-tips');

var _acTips2 = _interopRequireDefault(_acTips);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @title 编辑表格基本示例
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description 编辑表格基本示例
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var BtnDiv = function (_Component) {
    _inherits(BtnDiv, _Component);

    function BtnDiv(props) {
        _classCallCheck(this, BtnDiv);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.getEditFlag = function () {
            return _this.state.editFlag;
        };

        _this.openRowEdit = function () {
            _this.setState({
                editFlag: true
            });
        };

        _this.closeRowEdit = function () {
            _this.setState({
                editFlag: false
            });
        };

        _this.state = {
            editFlag: false,
            copyFlag: false
        };
        return _this;
    }

    //获取状态值


    //开启编辑


    //结束编辑


    BtnDiv.prototype.render = function render() {
        var _this2 = this;

        return _react2["default"].createElement(
            'div',
            { style: { 'marginBottom': '20px' } },
            !this.state.editFlag ? _react2["default"].createElement(_acBtns2["default"], {
                btns: {
                    addRow: {
                        className: "u-button-primary",
                        colors: "primary",
                        name: "新增",
                        onClick: function onClick() {
                            _this2.props.addRow();
                        }
                    }
                }
            }) : "",
            _react2["default"].createElement(_acBtns2["default"], {
                btns: {
                    delRow: {
                        name: "删除",
                        onClick: function onClick() {
                            _this2.props.delRow();
                        }
                    }
                }
            }),
            this.state.editFlag ? _react2["default"].createElement(_acBtns2["default"], {
                btns: {
                    save: {
                        className: "u-button-primary",
                        name: "保存",
                        onClick: function onClick() {
                            _this2.props.save();
                        }
                    }
                }
            }) : "",
            this.state.editFlag ? _react2["default"].createElement(_acBtns2["default"], {
                btns: {
                    cancel: {
                        name: "取消",
                        onClick: function onClick() {
                            _this2.props.cancelEdit();
                        }
                    }
                }
            }) : "",
            !this.state.editFlag ? _react2["default"].createElement(_acBtns2["default"], {
                btns: {
                    update: {
                        className: "u-button-primary",
                        colors: "primary",
                        name: "修改",
                        onClick: function onClick() {
                            _this2.props.updateAll();
                        }
                    }
                }
            }) : ""
        );
    };

    return BtnDiv;
}(_react.Component);

exports["default"] = BtnDiv;
module.exports = exports['default'];