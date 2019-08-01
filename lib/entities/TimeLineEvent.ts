import { BmbyEntity } from "./BmbyEntity";

export class TimeLineEvent extends BmbyEntity {
    constructor() {
        super();

        this._data = {
            'event_id': '',
            'type': '',
            'time': null,
            'title': '',
            'description': '',
            'done': false,
            'dismissed': false,
            'user_id': 0,
            'customer_id': null,
            'agency_id': null,
            'related_entity_id': null,
            'is_automatic_event': false,
            'phone': '',
            'action_title': ''
        }
    }

    set eventId(value: string) {
        this._data['event_id'] = value;
    }
    get eventId(): string {
        return this._data['event_id'];
    }
    
    get type(): string {
        return this._data['type'];
    }
    set type(value: string) {
        this._data['type'] = value;
    }

    get time(): Date {
        return this._data['time'];
    }
    set time(value: Date) {
        this._data['time'] = value
    }

    set title(value: string) {
        this._data['title'] = value;
    }
    get title(): string {
        return this._data['title'];
    }

    set phone(value: string) {
        this._data['phone'] = value;
    }
    get phone(): string {
        return this._data['phone'];
    }

    set actionTitle(value: string) {
        this._data['action_title'] = value;
    }
    get actionTitle(): string {
        return this._data['action_title'];
    }

    set description(value: string) {
        this._data['description'] = value;
    }
    get description(): string {
        return this._data['description'];
    }

    get isAutomaticEvent(): boolean {
        return this._data['is_automatic_event'];
    }
    set isAutomaticEvent(value: boolean) {
        this._data['is_automatic_event'] = value
    }

    get done(): boolean {
        return this._data['done'];
    }
    set done(value: boolean) {
        this._data['done'] = value
    }

    get dismissed(): boolean {
        return this._data['dismissed'];
    }
    set dismissed(value: boolean) {
        this._data['dismissed'] = value
    }

    get userId(): number {
        return this._data['user_id'];
    }
    set userId(value: number) {
        this._data['user_id'] = value
    }

    get customerId(): string {
        return this._data['customer_id'];
    }
    set customerId(value: string) {
        this._data['customer_id'] = value
    }

    get agencyId(): string {
        return this._data['agency_id'];
    }
    set agencyId(value: string) {
        this._data['agency_id'] = value
    }

    get relatedEntityId(): string {
        return this._data['related_entity_id'];
    }
    set relatedEntityId(value: string) {
        this._data['related_entity_id'] = value
    }

}