import { BmbyEntity } from "./BmbyEntity";
import { Contact } from "./Contact";
import { CrmTask } from "./CrmTask";

export class CustomerSummary extends BmbyEntity {
    private _contact: Contact;
    private _lastCrm: CrmTask;

    constructor() {
        super();

        this._data = {
            'customer_id': '',
            'matches': 0,
            'last_crm': null,
            'related_customers': 0,
            'related_properties': 0,
            'contact': null
        }
    }

    set data(value: any) {
        if (value['contact'] == undefined || value['contact'] == null) {
            this._contact = new Contact();
            value['contact'] = this._contact.data;
        } else {
            this._contact.data = value['contact'];
        }

        if (value['last_crm'] == undefined || value['last_crm'] == null) {
            this._lastCrm = new CrmTask();
            value['last_crm'] = this._lastCrm.data;
        } else {
            this._lastCrm.data = value['last_crm'];
        }

        this._data = value;
    }

    get id(): string {
        return this._data['customer_id'];
    }

    get property(): Contact {
        return this._contact;
    }

    get lastCrm(): CrmTask {
        return this._lastCrm;
    }

    get matches(): number {
        return this._data['matches'];
    }

    get relatedCustomers(): number {
        return this._data['related_customers'];
    }

    get relatedProperties(): number {
        return this._data['related_properties'];
    }
}