import { BmbyEntity } from "./BmbyEntity";
import { Property } from "./Property";
import { CrmTask } from "./CrmTask";

export class PropertySummary extends BmbyEntity {
    private _property: Property;
    private _lastCrm: CrmTask;


    constructor() {
        super();

        this._data = {
            'property_id': '',
            'matches': 0,
            'potential_matches': 0,
            'last_crm': null,
            'related_customers': 0,
            'related_properties': 0,
            'property': null
        }
    }

    set data(value: any) {
        if (value['property'] == undefined || value['property'] == null) {
            this._property = new Property();
            value['property'] = this._property.data;
        } else {
            this._property.data = value['property'];
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
        return this._data['property_id'];
    }

    get property(): Property {
        return this._property;
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