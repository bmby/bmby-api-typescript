import { Query } from "../entities/Query";
import { QueryParams } from "../QueryParams";

export class PropertyQueryParams extends QueryParams {
    private _propertyQuery: Query = null;

    constructor() {
        super();
        this._propertyQuery = new Query();

        this._params['propertyId'] = null;
    }

    queryString(): string {
        let params = [];
        
        for (let key in this._params) {
            let value = this._params[key];
            
            if (value == null || !isNaN(value) && value == 0 || value == "") {
                continue;
            }

            params.push(key + "=" + encodeURIComponent(value));
        }
        
        // if (this._propertyQuery != null) {
        //     var queryParams = this._propertyQuery.data;

        //     for (let key in queryParams)
        //     {

        //         params.push(key + "=" + encodeURIComponent(queryParams[key]));
        //     }
        // }

        let q = params.join("&");

        return q != "" ? '?' + q : "";
    }

    get propertyId(): string {
        return this._params['propertyId'];
    }
    set propertyId(value: string) {
        this._params['propertyId'] = value;
    }

    get query(): Query {
        return this._propertyQuery;
    }
    set query(value: Query) {
        this._propertyQuery = value;
    }
}