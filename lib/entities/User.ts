import { BmbyEntity } from "../index";

export class User extends BmbyEntity {
    constructor() {
        super();

        this._data = {
            'first_name': '',
            'last_name': '',
            'email': '',
        }
    }
 
    get id(): string {
        return this._data['first_name'];
    }
    set id(value: string) {
        this._data['first_name'] = value
    }
}