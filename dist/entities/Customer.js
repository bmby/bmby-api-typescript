"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BmbyEntity_1 = require("./BmbyEntity");
var index_1 = require("../index");
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer() {
        var _this = _super.call(this) || this;
        _this._data = {
            'customer_id': '',
            'contact': null
        };
        return _this;
    }
    Object.defineProperty(Customer.prototype, "data", {
        get: function () {
            if (this._data['contact'] != undefined && this._data['contact'] instanceof index_1.Contact) {
                this._data['contact'] = this._data['contact'].data;
            }
            return this._data;
        },
        set: function (value) {
            this._data = value;
            if (this._data['contact'] != undefined && this._data['contact'] != null) {
                this._data['contact'] = new index_1.Contact();
                this._data['contact'].data = this._data['contact'];
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "contact", {
        get: function () {
            if (this._data['contact'] == undefined || this._data['contact'] == null) {
                this._data['contact'] = new index_1.Contact();
            }
            return this._data['contact'];
        },
        enumerable: true,
        configurable: true
    });
    return Customer;
}(BmbyEntity_1.BmbyEntity));
exports.Customer = Customer;
