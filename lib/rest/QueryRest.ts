import { BmbyRest } from './BmbyRest';
import { Query } from '../entities/Query';
import { Property } from '../entities/Property';
import { Contact } from '../entities/Contact';
import { BmbyHttpResponse, BmbyContentType } from '../IBmbyHttpClient';
import { QueryParams } from '../QueryParams';
import { PaginatedList } from '../PaginatedList';

export class QueryRest extends BmbyRest {
    listQueries(params: QueryParams): Promise<PaginatedList<Query>> {
        var queryString = params != null ? params.queryString() : "";
        let result = this.get("/queries" + queryString, true);

        return new Promise<PaginatedList<Query>>((resolve, reject) => {
            result
            .then(function(response) {
                try {
                    let queries = new Array<Query>();
                    
                    for (let i in response.data.items) {
                        let query = new Query();
                        query.data = response.data.items[i];
                        queries.push(query);
                    }

                    response.data.items = queries;

                    resolve(new PaginatedList<Query>(response.data));
                } catch(ex) {
                    reject(response);
                }
            })
            .catch(function(response){
                reject(response);
            });
        });
    }

    listMatchedProperties(queryId: string): Promise<PaginatedList<Property>> {
        let result = this.get("/properties?queryId=" + queryId, true);

        return new Promise<PaginatedList<Property>>((resolve, reject) => {
            result
            .then(function(response) {
                try {
                    let properties = new Array<Property>();
                    
                    for (let i in response.data.items) {
                        let property = new Property();
                        property.data = response.data.items[i];
                        properties.push(property);
                    }
                    
                    response.data.items = properties;

                    resolve(new PaginatedList<Property>(response.data));
                } catch(ex) {
                    reject(response);
                }
            })
            .catch(function(response){
                reject(response);
            });
        });
    }

    insertQuery(query: Query): Promise<BmbyHttpResponse> {
        return this.post("/queries", query.data, true, BmbyContentType.Json);
    }

    updateQuery(query: Query): Promise<BmbyHttpResponse> {
        return this.put("/queries", query.data, true);
    }

    getQuery(queryId: string): Promise<Query> {
        let result = this.get("/queries/" + queryId, true);

        return new Promise<Query>((resolve, reject) => {
            result
            .then(function(response) {
                try {
                    let customer = new Query();
                    customer.data = response.data;

                    resolve(customer);
                } catch(ex) {
                    reject(response);
                }
            })
            .catch(function(response){
                reject(response);
            });
        });
    }

    deleteQuery(queryId: string): Promise<BmbyHttpResponse> {
        return this.delete("/queries/" + queryId, true);
    }

    setQueryStatus(queryId: string, isActive: boolean): Promise<BmbyHttpResponse> {
        return this.patch("/queries/" + queryId, { IsActive: isActive }, true);
    }
}
