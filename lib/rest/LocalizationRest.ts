import { BmbyRest } from './BmbyRest';
import { Query } from '../entities/Query';
import { Customer } from '../entities/Customer';
import { Contact } from '../entities/Contact';
import { CrmTask } from '../entities/CrmTask';
import { BmbyHttpResponse, BmbyContentType } from '../IBmbyHttpClient';
import { ListItem } from '../entities/ListItem';
import { QueryParams } from '../index';
import { PaginatedList } from '../PaginatedList';
import { CityQueryParams } from '../querystrings/CityQueryParams';
import { NeighbourhoodQueryParams } from '../querystrings/NeighbourhoodQueryParams';
import { RegionQueryParams } from '../querystrings/RegionQueryParams';
import { StreetQueryParams } from '../querystrings/StreetQueryParams';

export class LocalizationRest extends BmbyRest {
    listCountries(languageCode: string, params: QueryParams): Promise<PaginatedList<ListItem>> {
        let result = this.get("/listcountries/" + languageCode + params.queryString(), true);

        return new Promise<PaginatedList<ListItem>>((resolve, reject) => {
            result
            .then(function(response) {
                try {
                    let items = new Array<ListItem>();
                    
                    for (let i in response.data.items) {
                        let item = new ListItem();
                        item.data = response.data.items[i];
                        items.push(item);
                    }

                    response.data.items = items;

                    resolve(new PaginatedList<ListItem>(response.data));
                } catch(ex) {
                    reject(response);
                }
            })
            .catch(function(response){
                reject(response);
            });
        });
    }

    listRegions(languageCode: string, params: RegionQueryParams): Promise<PaginatedList<ListItem>> {
        let result = this.get("/listregions/" + languageCode + params.queryString(), true);

        return new Promise<PaginatedList<ListItem>>((resolve, reject) => {
            result
            .then(function(response) {
                try {
                    let items = new Array<ListItem>();
                    
                    for (let i in response.data.items) {
                        let item = new ListItem();
                        item.data = response.data.items[i];
                        items.push(item);
                    }

                    response.data.items = items;

                    resolve(new PaginatedList<ListItem>(response.data));
                } catch(ex) {
                    reject(response);
                }
            })
            .catch(function(response){
                reject(response);
            });
        });
    }

    listCities(languageCode: string, params: CityQueryParams): Promise<PaginatedList<ListItem>> {
        let result = this.get("/listcities/" + languageCode + params.queryString(), true);

        return new Promise<PaginatedList<ListItem>>((resolve, reject) => {
            result
            .then(function(response) {
                try {
                    let items = new Array<ListItem>();
                    
                    for (let i in response.data.items) {
                        let item = new ListItem();
                        item.data = response.data.items[i];
                        items.push(item);
                    }

                    response.data.items = items;

                    resolve(new PaginatedList<ListItem>(response.data));
                } catch(ex) {
                    reject(response);
                }
            })
            .catch(function(response){
                reject(response);
            });
        });
    }

    listNeighbourhoods(languageCode: string, params: NeighbourhoodQueryParams): Promise<PaginatedList<ListItem>> {
        let result = this.get("/listneighbourhoods/" + languageCode + params.queryString(), true);

        return new Promise<PaginatedList<ListItem>>((resolve, reject) => {
            result
            .then(function(response) {
                try {
                    let items = new Array<ListItem>();
                    
                    for (let i in response.data.items) {
                        let item = new ListItem();
                        item.data = response.data.items[i];
                        items.push(item);
                    }

                    response.data.items = items;

                    resolve(new PaginatedList<ListItem>(response.data));
                } catch(ex) {
                    reject(response);
                }
            })
            .catch(function(response){
                reject(response);
            });
        });
    }
 
    listStreets(languageCode: string, params: StreetQueryParams): Promise<PaginatedList<ListItem>> {
        let result = this.get("/liststreets/" + languageCode + params.queryString(), true);

        return new Promise<PaginatedList<ListItem>>((resolve, reject) => {
            result
            .then(function(response) {
                try {
                    let items = new Array<ListItem>();
                    
                    for (let i in response.data.items) {
                        let item = new ListItem();
                        item.data = response.data.items[i];
                        items.push(item);
                    }

                    response.data.items = items;

                    resolve(new PaginatedList<ListItem>(response.data));
                } catch(ex) {
                    reject(response);
                }
            })
            .catch(function(response){
                reject(response);
            });
        });
    }
}