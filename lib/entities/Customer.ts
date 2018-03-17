import { BmbyEntity } from "./BmbyEntity";
import { Contact } from "./Contact";

export class Customer extends BmbyEntity {
    private _contact: Contact;

    constructor() {
        super();

        this._contact = new Contact();

        this._data = {
            'customer_id': '',
            'contact': this._contact.data
        }
    }

    get data(): any {
        this._data['contact'] = this._contact.data;

        return this._data;
    }

    set data(value: any) {
        if (value['contact'] == undefined || value['contact'] == null) {
            this._contact = new Contact();
            value['contact'] = this._contact.data;
        } else {
            this._contact.data = value['contact'];
        }

        this._data = value;
    }

    get contact(): Contact {
        return this._contact;
    }

    set contact(contact: Contact) {
        this._contact = contact;
    } 
}