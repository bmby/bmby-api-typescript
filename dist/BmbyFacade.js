"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var BmbyFacade = /** @class */ (function () {
    function BmbyFacade(_httpClient, _localStore) {
        this._httpClient = _httpClient;
        this._localStore = _localStore;
        this._identityRest = new index_1.IdentityRest(_httpClient);
        this._customerRest = new index_1.CustomerRest(_httpClient);
        this._propertyRest = new index_1.PropertyRest(_httpClient);
        this._crmTaskRest = new index_1.CrmTaskRest(_httpClient);
    }
    Object.defineProperty(BmbyFacade.prototype, "identityRest", {
        get: function () {
            return this._identityRest;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BmbyFacade.prototype, "customerRest", {
        get: function () {
            return this._customerRest;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BmbyFacade.prototype, "propertyRest", {
        get: function () {
            return this._propertyRest;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BmbyFacade.prototype, "crmTaskRest", {
        get: function () {
            return this._crmTaskRest;
        },
        enumerable: true,
        configurable: true
    });
    return BmbyFacade;
}());
exports.BmbyFacade = BmbyFacade;
