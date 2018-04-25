import { BmbyEntity } from "./BmbyEntity";
import { Contact } from "./Contact";
import { CrmTaskType, CrmTaskSubType, CrmTaskStatus, CrmTaskPriority } from "../Enumerations";
import { User } from "./User";
import { File } from "./File";

export class CrmTask extends BmbyEntity {
    private _participants = Array<Contact>();

    constructor() {
        super();

        this._data = {
            'crm_task_id': '',
            'property_id': '',
            'customer_id': '',
            'crm_task_bmby_id': 0,
            'task_type': CrmTaskType.Unknown,
            'task_sub_type': CrmTaskSubType.Unknown,
            'is_private': false,
            'subject': '',
            'message': '',
            'location': '',
            'location_lat': 0,
            'location_lon': 0,
            'status': CrmTaskStatus.New,
            'priority': CrmTaskPriority.Normal,
            'meeting_start_date': null,
            'meeting_end_date': null,
            'task_date': null,
            'voice': '',
            'user': '',
            'participants': []
        }
    }
    
    set data(value: any) {
        this._data = value;

        this._data['task_type'] = CrmTaskType[this._data['task_type']];        
        this._data['task_sub_type'] = CrmTaskSubType[this._data['task_sub_type']];        
        this._data['status'] = CrmTaskStatus[this._data['status']];
        this._data['priority'] = CrmTaskPriority[this._data['priority']];

        this._participants = new Array<Contact>();

        if (value['participants'] != undefined && value['participants'][0] != undefined) {
            for (let i in value['participants']) {
                let contact = new Contact();
                contact.data = value['participants'][i];
            }
        }
    }
    get data(): any {
        this._data['participants'] = [];

        for (let i in this._participants) {
            this._data['participants'].push(this._participants[i].data);
        }

        return this._data;
    }

    get voice(): string {
        if (!this._data['voice'])
        {
            return null;
        }

        var file = new File();
        file.data = this._data['voice'];

        return file.url;
    }

    get id(): string {
        return this._data['crm_task_id'];
    }
    set id(value: string) {
        this._data['crm_task_id'] = value
    }

    get location(): string {
        return this._data['location'];
    }
    set location(value: string) {
        this._data['location'] = value
    }

    get locationLat(): number {
        return this._data['location_lat'];
    }
    set locationLat(value: number) {
        this._data['location_lat'] = value
    }

    get locationLon(): number {
        return this._data['location_lon'];
    }
    set locationLon(value: number) {
        this._data['location_lon'] = value
    }

    get propertyId(): string {
        return this._data['property_id'];
    }
    set propertyId(value: string) {
        this._data['property_id'] = value
    }

    get customerId(): string {
        return this._data['customer_id'];
    }
    set customerId(value: string) {
        this._data['customer_id'] = value
    }

    get subject(): string {
        return this._data['subject'];
    }
    set subject(value: string) {
        this._data['subject'] = value
    }

    get message(): string {
        return this._data['message'];
    }
    set message(value: string) {
        this._data['message'] = value
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
        return this._data['priority'];
    }
    set priority(value: CrmTaskPriority) {
        this._data['priority'] = value
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
    
    get user(): string {
        return this._data['user'];
    }
    set user(value: string) {
        this._data['user'] = value;
    }

    get participants(): Array<Contact> {
        return this._participants;
    }
    set participants(value: Array<Contact>) {
        this._participants = new Array<Contact>();

        if (value = null) {
            return;
        }

        for (let i in value) {
            this._participants.push(value[i]);
        }
    }
}