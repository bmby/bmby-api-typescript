"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
var Enumerations_1 = require("../Enumerations");
var Contact_1 = require("./Contact");
var Property = /** @class */ (function (_super) {
    __extends(Property, _super);
    function Property() {
        var _this = _super.call(this) || this;
        _this._data = {
            'property_id': 0,
            'agency_id': null,
            'bmby_project_id': null,
            'contact_id': '',
            'catalog': Enumerations_1.PropertyCatalog.Unknown,
            'title': '',
            'description': '',
            'limited_description': '',
            'address': '',
            'bmby_property_id': 0,
            'bmby_owners_property_id': 0,
            'bmby_company_id': 0,
            'bmby_broker_id': 0,
            'is_published': false,
            'parser_record_id': 0,
            'media': Enumerations_1.RealEstateMedia.Unknown,
            'property_media_id': 0,
            'page_link': '',
            'is_commercial': false,
            'deal_type': Enumerations_1.DealType.Unknown,
            'number_of_payments_per_year': 0,
            'can_be_rented_with_roommate': false,
            'roommate_gender': Enumerations_1.RoommateGender.Unknown,
            'rommate_can_smoke': false,
            'zone_id': 0,
            'city_id': 0,
            'neighbourhood_id': 0,
            'street_id': 0,
            'house_number': '',
            'property_type': 0,
            'floor': 0,
            'floors': 0,
            'rooms': 0.0,
            'area': 0.0,
            'plot_area': 0.0,
            'rent_price': 0.0,
            'sale_price': 0.0,
            'unit_price': 0.0,
            'entry_date': '',
            'comments': '',
            'has_air_conditioner': false,
            'has_window_bars': false,
            'has_parking': false,
            'has_furniture': false,
            'furniture_description': '',
            'has_religion_facility': false,
            'can_be_extended': false,
            'has_swimming_pool': false,
            'has_jacuzzi': false,
            'has_pandoor': false,
            'has_gym': false,
            'has_yard': false,
            'has_parent_bedroom': false,
            'has_event_room': false,
            'has_storage': false,
            'has_cellar': false,
            'has_elevator': false,
            'has_shabat_elevator': false,
            'has_secure_room': false,
            'has_guard': false,
            'has_separate_entrance': false,
            'is_unit': false,
            'has_balcony': false,
            'has_teracce': false,
            'has_access_for_disabled': false,
            'has_garden': false,
            'garden_area': 0.0,
            'has_panorama': false,
            'on_columns': false,
            'published_by_agency': false,
            'wind_direction': Enumerations_1.WindDirection.Unknown,
            'creation_time': 0,
            'last_update_time': 0,
            'external_images': []
        };
        return _this;
    }
    Object.defineProperty(Property.prototype, "data", {
        get: function () {
            if (this._data['contact'] != undefined && this._data['contact'] instanceof Contact_1.Contact) {
                this._data['contact'] = this._data['contact'].data;
            }
            return this._data;
        },
        set: function (value) {
            this._data = value;
            if (this._data['contact'] != undefined && this._data['contact'] != null) {
                this._data['contact'] = new Contact_1.Contact();
                this._data['contact'].data = this._data['contact'];
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Property.prototype, "contact", {
        get: function () {
            if (this._data['contact'] == undefined || this._data['contact'] == null) {
                this._data['contact'] = new Contact_1.Contact();
            }
            return this._data['contact'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Property.prototype, "id", {
        get: function () {
            return this._data['property_id'];
        },
        set: function (value) {
            this._data['property_id'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Property.prototype, "agencyId", {
        get: function () {
            return this._data['agency_id'];
        },
        set: function (value) {
            this._data['agency_id'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Property.prototype, "bmbyProjectId", {
        get: function () {
            return this._data['bmby_project_id'];
        },
        set: function (value) {
            this._data['bmby_project_id'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Property.prototype, "contactId", {
        get: function () {
            return this._data['contact_id'];
        },
        set: function (value) {
            this._data['contact_id'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Property.prototype, "catalog", {
        get: function () {
            return this._data['catalog'];
        },
        set: function (value) {
            this._data['catalog'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Property.prototype, "title", {
        get: function () {
            return this._data['title'];
        },
        set: function (value) {
            this._data['title'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Property.prototype, "description", {
        get: function () {
            return this._data['description'];
        },
        set: function (value) {
            this._data['description'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Property.prototype, "comments", {
        get: function () {
            return this._data['comments'];
        },
        set: function (value) {
            this._data['comments'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Property.prototype, "limitedDescription", {
        get: function () {
            return this._data['limited_description'];
        },
        set: function (value) {
            this._data['limited_description'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Property.prototype, "address", {
        get: function () {
            return this._data['address'];
        },
        set: function (value) {
            this._data['address'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Property.prototype, "propertyType", {
        get: function () {
            return this._data['property_type'];
        },
        set: function (value) {
            this._data['property_type'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Property.prototype, "dealType", {
        get: function () {
            return this._data['deal_type'];
        },
        set: function (value) {
            this._data['deal_type'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Property.prototype, "zoneId", {
        get: function () {
            return this._data['zone_id'];
        },
        set: function (value) {
            this._data['zone_id'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Property.prototype, "cityId", {
        get: function () {
            return this._data['city_id'];
        },
        set: function (value) {
            this._data['city_id'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Property.prototype, "neighbourhoodId", {
        get: function () {
            return this._data['neighbourhood_id'];
        },
        set: function (value) {
            this._data['neighbourhood_id'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Property.prototype, "streetId", {
        get: function () {
            return this._data['street_id'];
        },
        set: function (value) {
            this._data['street_id'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Property.prototype, "houseNumber", {
        get: function () {
            return this._data['house_number'];
        },
        set: function (value) {
            this._data['house_number'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Property.prototype, "floor", {
        get: function () {
            return this._data['floor'];
        },
        set: function (value) {
            this._data['floor'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Property.prototype, "floors", {
        get: function () {
            return this._data['floors'];
        },
        set: function (value) {
            this._data['floors'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Property.prototype, "rooms", {
        get: function () {
            return this._data['rooms'];
        },
        set: function (value) {
            this._data['rooms'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Property.prototype, "area", {
        get: function () {
            return this._data['rooms'];
        },
        set: function (value) {
            this._data['rooms'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Property.prototype, "plotArea", {
        get: function () {
            return this._data['plot_area'];
        },
        set: function (value) {
            this._data['plot_area'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Property.prototype, "rentPrice", {
        get: function () {
            return this._data['rent_price'];
        },
        set: function (value) {
            this._data['rent_price'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Property.prototype, "salePrice", {
        get: function () {
            return this._data['sale_price'];
        },
        set: function (value) {
            this._data['sale_price'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Property.prototype, "unitPrice", {
        get: function () {
            return this._data['unit_price'];
        },
        set: function (value) {
            this._data['unit_price'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Property.prototype, "entryDate", {
        get: function () {
            return this._data['entry_date'];
        },
        set: function (value) {
            this._data['entry_date'] = value;
        },
        enumerable: true,
        configurable: true
    });
    return Property;
}(index_1.BmbyEntity));
exports.Property = Property;
