import { BmbyEntity } from "./BmbyEntity";
import { TimeLineEntityType } from "../Enumerations";

export class TimeLineEvent extends BmbyEntity {
    constructor() {
        super();

        this._data = {
            'event_id': '',
            'type': null,
            'time': null,
            'description': '',
            'done': false,
            'dismissed': false,
            'user_id': 0
        }
    }

    set eventId(value: string) {
        this._data['event_id'] = value;
    }
    get eventId(): string {
        return this._data['event_id'];
    }
    
    get type(): TimeLineEntityType {
        return this._data['type'];
    }
    set type(value: TimeLineEntityType) {
        this._data['type'] = value;
    }

    get time(): Date {
        return this._data['time'];
    }
    set time(value: Date) {
        this._data['time'] = value
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