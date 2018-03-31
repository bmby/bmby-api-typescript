import { Query } from "../entities/Query";
import { QueryParams } from "../QueryParams";

export class PropertyQueryParams extends QueryParams {
    private _propertyQuery: Query = null;

    constructor() {
        super();

        this._propertyQuery = new Query();
    }

    get query(): Query {
        return this._propertyQuery;
    }
    set query(value: Query) {
        this._propertyQuery = value;
    }
}