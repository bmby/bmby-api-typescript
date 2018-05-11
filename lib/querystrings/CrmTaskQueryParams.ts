import { QueryParams } from "../QueryParams";
import { CrmTaskStatus, CrmTaskPriority } from "..";

export class CrmTaskQueryParams extends QueryParams {
    constructor() {
        super();

        this._params['propertyId'] = null;
        this._params['customerId'] = null;
        this._params['status'] = null;
        this._params['priority'] = null;
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

    get status(): CrmTaskStatus {
        return this._params['status'];
    }
    set status(value: CrmTaskStatus) {
        this._params['status'] = value;
    }

    get priority(): CrmTaskPriority {
        return this._params['priority'];
    }
    set priority(value: CrmTaskPriority) {
        this._params['priority'] = value;
    }
}