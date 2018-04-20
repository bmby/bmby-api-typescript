import { QueryParams } from "../QueryParams";
import { ContactType } from "../Enumerations";

export class ContactQueryParams extends QueryParams {
    constructor() {
        super();

        this._params['type'] = null;
    }

    get type(): ContactType {
        return this._params['type'];
    }
    set type(value: ContactType) {
        this._params['type'] = value;
    }
}