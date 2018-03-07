import { BmbyEntity, Contact } from "../index";
import { CrmTaskType, CrmTaskSubType, CrmTaskStatus, CrmTaskPriority } from "../Enumerations";

export class CrmTask extends BmbyEntity {
    constructor() {
        super();

        this._data = {
            'crm_task_id': '',
            'property_id': '',
            'customer_id': '',
            'crm_task_bmby_id': 0,
            'task_type': CrmTaskType.Unknown,
            'task_sub_type': CrmTaskSubType.Unknown,
            'agency_id': 0,
            'is_private': false,
            'subject': '',
            'message': '',
            'location': '',
            'status': CrmTaskStatus.Unknown,
            'priority': CrmTaskPriority.Unknown,
            'meeting_start_date': null,
            'meeting_end_date': null,
            'task_date': null,
            'voice_recording_url': '',
            'participants': []
        }
    }

    get id(): string {
        return this._data['crm_task_id'];
    }
    set id(value: string) {
        this._data['crm_task_id'] = value
    }

    get propertyId(): string {
        return this._data['property_id'];
    }
    set propertyId(value: string) {
        this._data['property_id'] = value
    }

    get customerId(): string {
        return this._data['crm_task_id'];
    }
    set customerId(value: string) {
        this._data['crm_task_id'] = value
    }

    get taskType(): CrmTaskType {
        return this._data['task_type'];
    }
    set taskType(value: CrmTaskType) {
        this._data['task_type'] = value
    }

    get taskSubType(): CrmTaskSubType {
        return this._data['task_sub_type'];
    }
    set taskSubType(value: CrmTaskSubType) {
        this._data['task_sub_type'] = value
    }

    get status(): CrmTaskStatus {
        return this._data['status'];
    }
    set status(value: CrmTaskStatus) {
        this._data['status'] = value
    }

    get priority(): CrmTaskPriority {
        return this._data['status'];
    }
    set priority(value: CrmTaskPriority) {
        this._data['status'] = value
    }

    get meetingStartDate(): Date {
        return this._data['meeting_start_date'];
    }
    set meetingStartDate(value: Date) {
        this._data['meeting_start_date'] = value
    }

    get meetingEndDate(): Date {
        return this._data['meeting_end_date'];
    }
    set meetingEndDate(value: Date) {
        this._data['meeting_end_date'] = value
    }

    get taskDate(): Date {
        return this._data['task_date'];
    }
    set taskDate(value: Date) {
        this._data['task_date'] = value
    }

    get participants(): Array<Contact> {
        return this._data['participants'];
    }
    set participants(value: Array<Contact>) {
        this._data['participants'] = value
    }
}