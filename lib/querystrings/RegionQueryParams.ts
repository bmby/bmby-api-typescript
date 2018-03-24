import { QueryParams } from "../QueryParams";

export class RegionQueryParams extends QueryParams {
    constructor() {
        super();

        this._params['countryCode'] = null;
    }

    get countryCode(): string {
        return this._params['countryCode'];
    }
    set countryCode(value: string) {
        this._params['countryCode'] = value;
    }
}