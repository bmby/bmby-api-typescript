"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
var Enumerations_1 = require("../Enumerations");
var CrmTask = /** @class */ (function (_super) {
    __extends(CrmTask, _super);
    function CrmTask() {
        var _this = _super.call(this) || this;
        _this._data = {
            'crm_task_id': '',
            'property_id': '',
            'customer_id': '',
            'crm_task_bmby_id': 0,
            'task_type': Enumerations_1.CrmTaskType.Unknown,
            'task_sub_type': Enumerations_1.CrmTaskSubType.Unknown,
            'agency_id': 0,
            'is_private': false,
            'subject': '',
            'message': '',
            'location': '',
            'status': Enumerations_1.CrmTaskStatus.Unknown,
            'priority': Enumerations_1.CrmTaskPriority.Unknown,
            'meeting_start_date': null,
            'meeting_end_date': null,
            'task_date': null,
            'voice_recording_url': '',
            'participants': []
        };
        return _this;
    }
    Object.defineProperty(CrmTask.prototype, "id", {
        get: function () {
            return this._data['crm_task_id'];
        },
        set: function (value) {
            this._data['crm_task_id'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CrmTask.prototype, "propertyId", {
        get: function () {
            return this._data['property_id'];
        },
        set: function (value) {
            this._data['property_id'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CrmTask.prototype, "customerId", {
        get: function () {
            return this._data['crm_task_id'];
        },
        set: function (value) {
            this._data['crm_task_id'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CrmTask.prototype, "taskType", {
        get: function () {
            return this._data['task_type'];
        },
        set: function (value) {
            this._data['task_type'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CrmTask.prototype, "taskSubType", {
        get: function () {
            return this._data['task_sub_type'];
        },
        set: function (value) {
            this._data['task_sub_type'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CrmTask.prototype, "status", {
        get: function () {
            return this._data['status'];
        },
        set: function (value) {
            this._data['status'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CrmTask.prototype, "priority", {
        get: function () {
            return this._data['status'];
        },
        set: function (value) {
            this._data['status'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CrmTask.prototype, "meetingStartDate", {
        get: function () {
            return this._data['meeting_start_date'];
        },
        set: function (value) {
            this._data['meeting_start_date'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CrmTask.prototype, "meetingEndDate", {
        get: function () {
            return this._data['meeting_end_date'];
        },
        set: function (value) {
            this._data['meeting_end_date'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CrmTask.prototype, "taskDate", {
        get: function () {
            return this._data['task_date'];
        },
        set: function (value) {
            this._data['task_date'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CrmTask.prototype, "participants", {
        get: function () {
            return this._data['participants'];
        },
        set: function (value) {
            this._data['participants'] = value;
        },
        enumerable: true,
        configurable: true
    });
    return CrmTask;
}(index_1.BmbyEntity));
exports.CrmTask = CrmTask;
