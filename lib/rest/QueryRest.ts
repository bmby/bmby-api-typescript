import { BmbyRest } from './BmbyRest';
import { Query } from '../entities/Query';
import { Property } from '../entities/Property';
import { Contact } from '../entities/Contact';
import { BmbyHttpResponse, BmbyContentType } from '../IBmbyHttpClient';

export class QueryRest extends BmbyRest {
    listQueries(params: any): Promise<Array<Query>> {
        let result = this.get("/queries", true);

        return new Promise<Array<Query>>((resolve, reject) => {
            result
            .then(function(response) {
                try {
                    let queries = new Array<Query>();
                    
                    for (let i in response.data) {
                        let query = new Query();
                        query.data = response.data[i];
                        queries.push(query);
                    }

                    resolve(queries);
                } catch(ex) {
                    reject(response);
                }
            })
            .catch(function(response){
                reject(response);
            });
        });
    }

    listMatchedProperties(queryId: string): Promise<Array<Property>> {
        let result = this.get("/properties?queryId=" + queryId, true);

        return new Promise<Array<Property>>((resolve, reject) => {
            result
            .then(function(response) {
                try {
                    let properties = new Array<Property>();
                    
                    for (let i in response.data) {
                        let property = new Property();
                        property.data = response.data[i];
                        properties.push(property);
                    }

                    resolve(properties);
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

    setQueryStatus(queryId: string, isActive: boolean): Promise<BmbyHttpResponse> {
        return this.patch("/queries/" + queryId, { is_active: true }, true);
    }
}
