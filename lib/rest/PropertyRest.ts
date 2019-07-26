import { BmbyRest } from './BmbyRest';
import { Property } from '../entities/Property';
import { Contact } from '../entities/Contact';
import { BmbyHttpResponse, BmbyContentType } from '../IBmbyHttpClient';
import { PaginatedList } from '../PaginatedList';
import { PropertyTypeCategory } from '../Enumerations';
import { ListItem } from '../entities/ListItem';
import { PropertyQueryParams } from '../querystrings/PropertyQueryParams';
import { PropertySummary } from '../entities/PropertySummary';

export class PropertyRest extends BmbyRest {
    listPropertiyTypes(languageCode: string, category?: PropertyTypeCategory): Promise<Array<ListItem>> {
        var categoryParam = category != undefined ? "?category=" + category : "";

        let result = this.get("/propertytypes/" + languageCode + categoryParam, true);

        return new Promise<Array<ListItem>>((resolve, reject) => {
            result
            .then(function(response) {
                try {
                    let propertyTypes = new Array<ListItem>();
                    
                    for (let i in response.data) {
                        let propertyType = new ListItem();
                        propertyType.data = response.data[i];
                        propertyTypes.push(propertyType);
                    }

                    resolve(propertyTypes);
                } catch(ex) {
                    reject(response);
                }
            })
            .catch(function(response){
                reject(response);
            });
        });
    }

    listProperties(params: any): Promise<PaginatedList<Property>> {
        var queryString = params != null ? params.queryString() : "";
        let result = this.get("/properties" + queryString, true);

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
    
    listMatchingCustomers(params: PropertyQueryParams): Promise<PaginatedList<Contact>> {
        var queryString = params != null ? params.queryString() : "";
        let result = this.get("/propertymatches" + queryString, true);

        return new Promise<PaginatedList<Contact>>((resolve, reject) => {
            result
            .then(function(response) {
                try {
                    let contacts = new Array<Contact>();
                    
                    for (let i in response.data.items) {
                        let customer = new Contact();
                        customer.data = response.data.items[i];
                        contacts.push(customer);
                    }

                    response.data.items = contacts;

                    resolve(new PaginatedList<Contact>(response.data));
                } catch(ex) {
                    console.log(ex)
                    reject(response);
                }
            })
            .catch(function(response){
                reject(response);
            });
        });
    }

    addMatches(propertyId:string, customers: Array<Contact>): Promise<BmbyHttpResponse> {
        return this.put("/propertymatches/" + propertyId, customers.map(c => c.relatedEntityId), true);
    }

    removeMatches(propertyId:string, customers: Array<Contact>): Promise<BmbyHttpResponse> {
        return this.delete("/propertymatches/" + propertyId, true, customers.map(c => c.relatedEntityId));
    }

    autocompleteProperties(params: PropertyQueryParams): Promise<PaginatedList<Property>> {
        let queryString = params.queryString();
        let result = this.get("/autocompleteproperties" + queryString, true);

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

    listPropertyViewHistory(params: PropertyQueryParams): Promise<PaginatedList<Property>> {
        let queryString = params.queryString();
        let result = this.get("/propertyviews" + queryString, true);

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

    insertProperty(property: Property): Promise<BmbyHttpResponse> {
        return this.post("/properties", property.data, true, BmbyContentType.Json);
    }

    updateProperty(property: Property): Promise<BmbyHttpResponse> {
        return this.put("/properties", property.data, true);
    }

    uploadPropertyImage(propertyId: string, filePath: string): Promise<BmbyHttpResponse> {
        return this.upload('/properties/images', { propertyId: propertyId }, filePath);
    }

    deletePropertyImage(imageId: string, propertyId: string): Promise<BmbyHttpResponse> {
        return this.delete('/properties/images?imageId=' + imageId + "&propertyId=" + propertyId, true);
    }

    getProperty(propertyId: string): Promise<Property> {
        let result = this.get("/properties/" + propertyId, true);

        return new Promise<Property>((resolve, reject) => {
            result
            .then(function(response) {
                try {
                    let property = new Property();
                    property.data = response.data;

                    resolve(property);
                } catch(ex) {
                    reject(response);
                }
            })
            .catch(function(response){
                reject(response);
            });
        });
    }

    getPropertyContact(propertyId: string): Promise<Contact> {
        let result = this.get("/properties/contact/" + propertyId, true);

        return new Promise<Contact>((resolve, reject) => {
            result
            .then(function(response) {
                try {
                    let contact = new Contact();
                    contact.data = response.data;

                    resolve(contact);
                } catch(ex) {
                    reject(response);
                }
            })
            .catch(function(response){
                reject(response);
            });
        });
    }

    propertySummary(propertyId: string): Promise<PropertySummary> {
        let result = this.get("/properties/summary/" + propertyId, true);

        return new Promise<PropertySummary>((resolve, reject) => {
            result
            .then(function(response) {
                try {
                    let summary = new PropertySummary();
                    summary.data = summary.data;

                    resolve(summary);
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
