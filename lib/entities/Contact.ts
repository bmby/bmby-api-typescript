import { BmbyEntity } from "./BmbyEntity";

export class Contact extends BmbyEntity {
    constructor() {
        super();
        
        this._data = {
            'contact_id': '',
            'first_name': '',
            'last_name': '',
            'company_name': '',
            'email': '',
            'mobile': '',
            'mobile2': '',
            'phone': '',
            'phone2': '',
            'fax': '',
            'fax2': '',
            'related_entity_type': '',
            'related_entity_id': ''
        }
    }

    get defaultMobile(): string {
        if (this.mobile != "") {
            return this.mobile
        }

        if (this.mobile2 != "") {
            return this.mobile2
        }

        return "";
    }

    get defaultPhone(): string {
        if (this.mobile != "") {
            return this.mobile
        }

        if (this.mobile2 != "") {
            return this.mobile2
        }

        if (this.phone != "") {
            return this.phone
        }

        if (this.phone2 != "") {
            return this.phone2
        }

        return "";
    }

    get relatedEntityType(): string {
        return this._data['related_entity_type'];
    }
    set relatedEntityType(value: string) {
        this._data['related_entity_type'] = value;
    }

    get relatedEntityId(): string {
        return this._data['related_entity_id'];
    }
    set relatedEntityId(value: string) {
        this._data['related_entity_id'] = value;
    }

    get id(): string {
        return this._data['contact_id'];
    }
    set id(value: string) {
        this._data['contact_id'] = value;
    }

    get firstName(): string {
        return this._data['first_name'];
    }
    set firstName(value: string) {
        this._data['first_name'] = value;
    }

    get lastName(): string {
        return this._data['last_name'];
    }
    set lastName(value: string) {
        this._data['last_name'] = value;
    }

    get companyName(): string {
        return this._data['company_name'];
    }
    set companyName(value: string) {
        this._data['company_name'] = value;
    }

    get email(): string {
        return this._data['email'];
    }
    set email(value: string) {
        this._data['email'] = value;
    }

    get mobile(): string {
        return this._data['mobile'];
    }
    set mobile(value: string) {
        this._data['mobile'] = value;
    }

    get mobile2(): string {
        return this._data['mobile2'];
    }
    set mobile2(value: string) {
        this._data['mobile2'] = value;
    }

    get phone(): string {
        return this._data['phone'];
    }
    set phone(value: string) {
        this._data['phone'] = value;
    }

    get phone2(): string {
        return this._data['phone2'];
    }
    set phone2(value: string) {
        this._data['phone2'] = value;
    }

    get fax(): string {
        return this._data['fax'];
    }
    set fax(value: string) {
        this._data['fax'] = value;
    }

    get fax2(): string {
        return this._data['fax2'];
    }
    set fax2(value: string) {
        this._data['fax2'] = value;
    }
}