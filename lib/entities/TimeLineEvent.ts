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

    set description(value: string) {
        this._data['description'] = value;
    }
    get description(): string {
        return this._data['description'];
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
}