"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BmbyEntity_1 = require("./BmbyEntity");
var Contact = /** @class */ (function (_super) {
    __extends(Contact, _super);
    function Contact() {
        var _this = _super.call(this) || this;
        _this._data = {
            'contact_id': '',
            'first_name': '',
            'last_name': '',
            'company_name': '',
            'email': '',
            'mobile': '',
            'mobile2': '',
            'phone': '',
            'phone2': '',
            'fax': '',
            'fax2': ''
        };
        return _this;
    }
    Object.defineProperty(Contact.prototype, "id", {
        get: function () {
            return this._data['contact_id'];
        },
        set: function (value) {
            this._data['contact_id'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "firstName", {
        get: function () {
            return this._data['first_name'];
        },
        set: function (value) {
            this._data['first_name'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "lastName", {
        get: function () {
            return this._data['last_name'];
        },
        set: function (value) {
            this._data['last_name'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "companyName", {
        get: function () {
            return this._data['company_name'];
        },
        set: function (value) {
            this._data['company_name'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "email", {
        get: function () {
            return this._data['email'];
        },
        set: function (value) {
            this._data['email'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "mobile", {
        get: function () {
            return this._data['mobile'];
        },
        set: function (value) {
            this._data['mobile'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "mobile2", {
        get: function () {
            return this._data['mobile2'];
        },
        set: function (value) {
            this._data['mobile2'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "phone", {
        get: function () {
            return this._data['phone'];
        },
        set: function (value) {
            this._data['phone'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "phone2", {
        get: function () {
            return this._data['phone2'];
        },
        set: function (value) {
            this._data['phone2'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "fax", {
        get: function () {
            return this._data['fax'];
        },
        set: function (value) {
            this._data['fax'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "fax2", {
        get: function () {
            return this._data['fax2'];
        },
        set: function (value) {
            this._data['fax2'] = value;
        },
        enumerable: true,
        configurable: true
    });
    return Contact;
}(BmbyEntity_1.BmbyEntity));
exports.Contact = Contact;
