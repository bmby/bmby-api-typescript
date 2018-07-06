import { Query } from "../entities/Query";
import { QueryParams } from "../QueryParams";
import { PropertyCatalog } from "..";

export class PropertyQueryParams extends QueryParams {
    private _propertyQuery: Query = null;

    constructor() {
        super();
        this._propertyQuery = new Query();

        this._params['propertyId'] = null;
        this._params['catalog'] = PropertyCatalog.Unknown;
       
        this._params['latitude'] = null;
        this._params['longitude'] = null;
        this._params['radius'] = null;
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

    get latitude(): number {
        return this._params['latitude'];
    }
    set latitude(value: number) {
        this._params['latitude'] = value;
    }

    get longitude(): number {
        return this._params['longitude'];
    }
    set longitude(value: number) {
        this._params['longitude'] = value;
    }

    get radius(): number {
        return this._params['radius'];
    }
    set radius(value: number) {
        this._params['radius'] = value;
    }
}