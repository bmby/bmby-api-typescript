import { BmbyEntity } from "./BmbyEntity";
import { Agency } from "./Agency";

export class User extends BmbyEntity {
    constructor() {
        super();

        this._data = {
            'first_name': '',
            'last_name': '',
            'email': '',
            'agency': null,
            'avatar_url': '',
            'agencies': []
        }
    }
 
    get firstName(): string {
        return this._data['first_name'];
    }
    set firstName(value: string) {
        this._data['first_name'] = value
    }
     
    get lastName(): string {
        return this._data['last_name'];
    }
    set lastName(value: string) {
        this._data['last_name'] = value
    }
     
    get email(): string {
        return this._data['email'];
    }
    set email(value: string) {
        this._data['email'] = value
    }
     
    get avatarUrl(): string {
        return this._data['avatar_url'];
    }
    set avatarUrl(value: string) {
        this._data['avatar_url'] = value
    }
     
    get agency(): Agency {
        let agency = new Agency();

        if (this._data['agency'] != null) {
            agency.data = this._data['agency']
        }
        return agency;
    }
    set agency(value: Agency) {
        this._data['agency'] = value.data;
    }

    get agencies(): Array<Agency> {
        let dealTypes = Array<Agency>();

        if (this._data['agencies']) {
            for (let i in this._data['agencies']) {
                let dealType = new Agency();
                dealType.data = this._data['agencies'][i];
                dealTypes.push(dealType);
            }
        }

        return dealTypes;
    }
    set agencies(value: Array<Agency>) {
        this._data['agencies'] = [];

        if (value != null) {
            for (let i in value) {
                this._data['agencies'].push(value[i].data)
            }
        }
    }
}