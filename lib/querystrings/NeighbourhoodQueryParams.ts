import { QueryParams } from "../QueryParams";

export class NeighbourhoodQueryParams extends QueryParams {
    constructor() {
        super();

        this._params['cityId'] = null;
    }

    get cityId(): string {
        return this._params['cityId'];
    }
    set cityId(value: string) {
        this._params['cityId'] = value;
    }
}