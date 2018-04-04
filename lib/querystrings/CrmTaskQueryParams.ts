import { QueryParams } from "../QueryParams";

export class CrmTaskQueryParams extends QueryParams {
    constructor() {
        super();

        this._params['propertyId'] = null;
        this._params['customerId'] = null;
    }

    get propertyId(): string {
        return this._params['propertyId'];
    }
    set propertyId(value: string) {
        this._params['propertyId'] = value;
    }

    get customerId(): string {
        return this._params['customerId'];
    }
    set customerId(value: string) {
        this._params['customerId'] = value;
    }
}