"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
var Enumerations_1 = require("../Enumerations");
var Query = /** @class */ (function (_super) {
    __extends(Query, _super);
    function Query() {
        var _this = _super.call(this) || this;
        _this._data = {
            'query_id': '',
            'user_id': 0,
            'agency_id': 0,
            'min_rooms': null,
            'max_rooms': null,
            'min_floor': null,
            'max_floor': null,
            'min_price': null,
            'max_price': null,
            'min_area': null,
            'max_area': null,
            'wind_direction': Enumerations_1.WindDirection.Unknown,
            'has_balcony': null,
            'has_security_room': null,
            'has_parking': null,
            'has_air_conditioner': null,
            'has_storage': null,
            'is_new_building': null,
            'has_garden': null,
            'has_elevator': null,
            'has_furniture': null,
            'has_access_to_disabled': null,
            'is_active': null,
            'deal_types': [],
            'zones': [],
            'cities': [],
            'neighbourhoods': [],
            'streets': [],
            'property_types': []
        };
        return _this;
    }
    Object.defineProperty(Query.prototype, "id", {
        get: function () {
            return this._data['query_id'];
        },
        set: function (value) {
            this._data['query_id'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Query.prototype, "userId", {
        get: function () {
            return this._data['user_id'];
        },
        set: function (value) {
            this._data['user_id'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Query.prototype, "agencyId", {
        get: function () {
            return this._data['agency_id'];
        },
        set: function (value) {
            this._data['agency_id'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Query.prototype, "minRooms", {
        get: function () {
            return this._data['min_rooms'];
        },
        set: function (value) {
            this._data['min_rooms'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Query.prototype, "maxRooms", {
        get: function () {
            return this._data['max_rooms'];
        },
        set: function (value) {
            this._data['max_rooms'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Query.prototype, "minFloor", {
        get: function () {
            return this._data['min_floor'];
        },
        set: function (value) {
            this._data['min_floor'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Query.prototype, "maxFloor", {
        get: function () {
            return this._data['max_floor'];
        },
        set: function (value) {
            this._data['max_floor'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Query.prototype, "minPrice", {
        get: function () {
            return this._data['min_price'];
        },
        set: function (value) {
            this._data['min_price'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Query.prototype, "maxPrice", {
        get: function () {
            return this._data['max_price'];
        },
        set: function (value) {
            this._data['max_price'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Query.prototype, "minArea", {
        get: function () {
            return this._data['min_area'];
        },
        set: function (value) {
            this._data['min_area'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Query.prototype, "maxArea", {
        get: function () {
            return this._data['max_area'];
        },
        set: function (value) {
            this._data['max_area'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Query.prototype, "windDirection", {
        get: function () {
            return this._data['wind_direction'];
        },
        set: function (value) {
            this._data['wind_direction'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Query.prototype, "hasBalcony", {
        get: function () {
            return this._data['has_balcony'];
        },
        set: function (value) {
            this._data['has_balcony'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Query.prototype, "hasSecurityBalcony", {
        get: function () {
            return this._data['has_security_room'];
        },
        set: function (value) {
            this._data['has_security_room'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Query.prototype, "hasParking", {
        get: function () {
            return this._data['has_parking'];
        },
        set: function (value) {
            this._data['has_parking'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Query.prototype, "hasAirConditioner", {
        get: function () {
            return this._data['has_air_conditioner'];
        },
        set: function (value) {
            this._data['has_air_conditioner'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Query.prototype, "hasStorage", {
        get: function () {
            return this._data['has_storage'];
        },
        set: function (value) {
            this._data['has_storage'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Query.prototype, "isNewBuilding", {
        get: function () {
            return this._data['is_new_building'];
        },
        set: function (value) {
            this._data['is_new_building'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Query.prototype, "hasGarden", {
        get: function () {
            return this._data['has_garden'];
        },
        set: function (value) {
            this._data['has_garden'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Query.prototype, "hasElevator", {
        get: function () {
            return this._data['has_elevator'];
        },
        set: function (value) {
            this._data['has_elevator'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Query.prototype, "hasFurniture", {
        get: function () {
            return this._data['has_furniture'];
        },
        set: function (value) {
            this._data['has_furniture'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Query.prototype, "hasAccessToDisabled", {
        get: function () {
            return this._data['has_access_to_disabled'];
        },
        set: function (value) {
            this._data['has_access_to_disabled'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Query.prototype, "isActive", {
        get: function () {
            return this._data['is_active'];
        },
        set: function (value) {
            this._data['is_active'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Query.prototype, "dealTypes", {
        get: function () {
            return this._data['deal_types'];
        },
        set: function (value) {
            this._data['deal_types'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Query.prototype, "zones", {
        get: function () {
            return this._data['zones'];
        },
        set: function (value) {
            this._data['zones'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Query.prototype, "cities", {
        get: function () {
            return this._data['cities'];
        },
        set: function (value) {
            this._data['cities'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Query.prototype, "neighbourhoods", {
        get: function () {
            return this._data['neighbourhoods'];
        },
        set: function (value) {
            this._data['neighbourhoods'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Query.prototype, "propertyTypes", {
        get: function () {
            return this._data['property_types'];
        },
        set: function (value) {
            this._data['property_types'] = value;
        },
        enumerable: true,
        configurable: true
    });
    return Query;
}(index_1.BmbyEntity));
exports.Query = Query;
