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

    get contact(): Contact {
        if (this._data['contact'] == undefined || this._data['contact'] == null) {
            return new Contact();
        }

        let contact = new Contact();
        contact.data = this._data['contact'];
        return contact;
    }

    set contact(contact: Contact) {
        if (contact == null) {
            let emptyContact = new Contact();
            this._data['contact'] = emptyContact.data;
            return;
        }

        this._data['contact'] = contact.data;
    } 
}