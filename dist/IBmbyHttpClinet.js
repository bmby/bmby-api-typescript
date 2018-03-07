"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HttpMethod;
(function (HttpMethod) {
    HttpMethod[HttpMethod["Get"] = 0] = "Get";
    HttpMethod[HttpMethod["Post"] = 1] = "Post";
    HttpMethod[HttpMethod["Put"] = 2] = "Put";
    HttpMethod[HttpMethod["Delete"] = 3] = "Delete";
    HttpMethod[HttpMethod["Patch"] = 4] = "Patch";
})(HttpMethod = exports.HttpMethod || (exports.HttpMethod = {}));
var BmbyHttpResponseStatus;
(function (BmbyHttpResponseStatus) {
    BmbyHttpResponseStatus[BmbyHttpResponseStatus["Ok"] = 0] = "Ok";
    BmbyHttpResponseStatus[BmbyHttpResponseStatus["Error"] = 1] = "Error";
})(BmbyHttpResponseStatus = exports.BmbyHttpResponseStatus || (exports.BmbyHttpResponseStatus = {}));
var BmbyHttpResponse = /** @class */ (function () {
    function BmbyHttpResponse(status, data) {
        this.status = status;
        this.data = data;
    }
    ;
    BmbyHttpResponse.prototype.getStatus = function () {
        return this.status;
    };
    BmbyHttpResponse.prototype.getData = function () {
        return this.data;
    };
    return BmbyHttpResponse;
}());
exports.BmbyHttpResponse = BmbyHttpResponse;
