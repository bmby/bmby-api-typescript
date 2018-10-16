import { BmbyEntity } from "./BmbyEntity";

export class Agency extends BmbyEntity {
    constructor() {
        super();

        this._data = {
            'agency_id': '',
            'agency_name': ''
        }
    }
 
    get agencyId(): string {
        return this._data['agency_id'];
    }
    set agencyId(value: string) {
        this._data['agency_id'] = value
    }
     
    get agencyName(): string {
        return this._data['agency_name'];
    }
    set agencyName(value: string) {
        this._data['agency_name'] = value
    }
}