import { BmbyRest } from './BmbyRest';
import { Query } from '../entities/Query';
import { Customer } from '../entities/Customer';
import { Contact } from '../entities/Contact';
import { CrmTask } from '../entities/CrmTask';
import { BmbyHttpResponse, BmbyContentType } from '../IBmbyHttpClient';
import { ListItem } from '../entities/ListItem';

export class LocalizationRest extends BmbyRest {
    listCountries(params: any): Promise<Array<ListItem>> {
        let result = this.get("/localization/countries", true);

        return new Promise<Array<ListItem>>((resolve, reject) => {
            result
            .then(function(response) {
                try {
                    let items = new Array<ListItem>();
                    
                    for (let i in response.data) {
                        let item = new ListItem();
                        item.data = response.data[i];
                        items.push(item);
                    }

                    resolve(items);
                } catch(ex) {
                    reject(response);
                }
            })
            .catch(function(response){
                reject(response);
            });
        });
    }

    listCities(countryCode: string, params: any): Promise<Array<ListItem>> {
        let result = this.get("/localization/cities", true);

        return new Promise<Array<ListItem>>((resolve, reject) => {
            result
            .then(function(response) {
                try {
                    let items = new Array<ListItem>();
                    
                    for (let i in response.data) {
                        let item = new ListItem();
                        item.data = response.data[i];
                        items.push(item);
                    }

                    resolve(items);
                } catch(ex) {
                    reject(response);
                }
            })
            .catch(function(response){
                reject(response);
            });
        });
    }

    listNeighbourhoods(cityId: string, params: any): Promise<Array<ListItem>> {
        let result = this.get("/localization/neighbourhoods", true);

        return new Promise<Array<ListItem>>((resolve, reject) => {
            result
            .then(function(response) {
                try {
                    let items = new Array<ListItem>();
                    
                    for (let i in response.data) {
                        let item = new ListItem();
                        item.data = response.data[i];
                        items.push(item);
                    }

                    resolve(items);
                } catch(ex) {
                    reject(response);
                }
            })
            .catch(function(response){
                reject(response);
            });
        });
    }
 
    listStreets(cityId: string, params: any): Promise<Array<ListItem>> {
        let result = this.get("/localization/streets", true);

        return new Promise<Array<ListItem>>((resolve, reject) => {
            result
            .then(function(response) {
                try {
                    let items = new Array<ListItem>();
                    
                    for (let i in response.data) {
                        let item = new ListItem();
                        item.data = response.data[i];
                        items.push(item);
                    }

                    resolve(items);
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