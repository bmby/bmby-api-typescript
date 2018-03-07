"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        var _this = _super.call(this) || this;
        _this._data = {
            'first_name': '',
            'last_name': '',
            'email': '',
        };
        return _this;
    }
    Object.defineProperty(User.prototype, "id", {
        get: function () {
            return this._data['first_name'];
        },
        set: function (value) {
            this._data['first_name'] = value;
        },
        enumerable: true,
        configurable: true
    });
    return User;
}(index_1.BmbyEntity));
exports.User = User;
