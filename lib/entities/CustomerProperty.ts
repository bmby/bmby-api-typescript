import { BmbyEntity } from "./BmbyEntity";
import { CustomerReaction } from "../Enumerations";
import { VisitStatus } from "../index";
import { Property } from "./Property";

export class CustomerProperty extends BmbyEntity {
    private _product:Property = new Property();

    constructor() {
        super();

        this._data = {
            'agency_broker_id': '',
            'customer_id': '',
            'property_id': '',
            'query_id': '',
            'recommended_by_broker': null,
            'signed_contract': null,
            'creation_time': null,
            'customer_reaction': CustomerReaction.Unknown,
            'visited': VisitStatus.Unknown,
            'reaction_time': null,
            'property': null,
        }
    }

    set data(value: any) {
        this._data = value;

        if (value['property'] == undefined || value['property'] == null) {
            this._product = new Property();
            value['property'] = this._product.data;
        } else {
            this._product.data = value['property'];
        }

        this._data['customer_reaction'] = CustomerReaction[this._data['customer_reaction']];        
        this._data['visited'] = VisitStatus[this._data['visited']];        
    }

    get data(): any {
        this._data['property'] = this._product.data;

        return this._data;
    }
 
    get agencyBrokerId(): string {
        return this._data['agency_broker_id'];
    }
    set agencyBrokerId(value: string) {
        this._data['agency_broker_id'] = value
    }
 
    get customerId(): string {
        return this._data['customer_id'];
    }
    set customerId(value: string) {
        this._data['customer_id'] = value
    }
 
    get propertyId(): string {
        return this._data['property_id'];
    }
    set propertyId(value: string) {
        this._data['property_id'] = value
    }
 
    get recommendedByBroker(): boolean {
        return this._data['recommended_by_broker'];
    }
    set recommendedByBroker(value: boolean) {
        this._data['recommended_by_broker'] = value
    }
 
    get signedContract(): boolean {
        return this._data['signed_contract'];
    }
    set signedContract(value: boolean) {
        this._data['signed_contract'] = value
    }
 
    get creationTime(): Date {
        return this._data['creation_time'];
    }
    set creationTime(value: Date) {
        this._data['creation_time'] = value
    }
 
    get customerReaction(): CustomerReaction {
        return this._data['customer_reaction'];
    }
    set customerReaction(value: CustomerReaction) {
        this._data['customer_reaction'] = CustomerReaction[value]
    }
 
    get visited(): CustomerReaction {
        return this._data['visited'];
    }
    set visited(value: CustomerReaction) {
        this._data['visited'] = CustomerReaction[value]
    }
 
    get reactionTime(): Date {
        return this._data['reaction_time'];
    }
    set reactionTime(value: Date) {
        this._data['reaction_time'] = value
    }
 
    get property(): Property {
        return this._data['property'];
    }
    set property(value: Property) {
        this._data['property'] = value
    }
}