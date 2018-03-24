import { QueryParams } from "../QueryParams";

export class CityQueryParams extends QueryParams {
    constructor() {
        super();

        this._params['countryCode'] = null;
        this._params['regionId'] = null;
    }

    get cityId(): string {
        return this._params['countryCode'];
    }
    set cityId(value: string) {
        this._params['countryCode'] = value;
    }

    get countryCode(): string {
        return this._params['regionId'];
    }
    set countryCode(value: string) {
        this._params['regionId'] = value;
    }
}