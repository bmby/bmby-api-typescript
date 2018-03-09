import { BmbyEntity } from "./BmbyEntity";
import { Contact } from "./Contact";

export class Customer extends BmbyEntity {
    constructor() {
        super();

        this._data = {
            'customer_id': '',
            'contact': null
        }
    }

    set data(value: any) {
        this._data = value;

        if (this._data['contact'] != undefined && this._data['contact'] != null) {
            this._data['contact'] = new Contact();
            this._data['contact'].data = this._data['contact'];
        }
    }

    get data(): any {
        if (this._data['contact'] != undefined && this._data['contact'] instanceof Contact) {
            this._data['contact'] = this._data['contact'].data;
        }

        return this._data;
    }

    get contact(): Contact {
        if (this._data['contact'] == undefined || this._data['contact'] == null) {
            this._data['contact'] = new Contact();
        }

        return this._data['contact'];
    }
}