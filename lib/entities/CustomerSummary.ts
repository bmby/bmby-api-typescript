import { BmbyEntity } from "./BmbyEntity";
import { Contact } from "./Contact";
import { CrmTask } from "./CrmTask";
import { Query } from "./Query";

export class CustomerSummary extends BmbyEntity {
    private _contact: Contact;
    private _lastCrm: CrmTask;
    private _query: Query;

    constructor() {
        super();

        this._contact = new Contact();
        this._lastCrm = new CrmTask();
        this._query = new Query();

        this._data = {
            'customer_id': '',
            'matches': 0,
            'potential_matches': 0,
            'query': null,
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

        if (value['query'] == undefined || value['query'] == null) {
            this._query = new Query();
            value['query'] = this._query.data;
        } else {
            this._query.data = value['query'];
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

    get potentialMatches(): number {
        return this._data['potential_matches'];
    }

    get relatedCustomers(): number {
        return this._data['related_customers'];
    }

    get relatedProperties(): number {
        return this._data['related_properties'];
    }
}