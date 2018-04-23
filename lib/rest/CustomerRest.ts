import { BmbyRest } from './BmbyRest';
import { Query } from '../entities/Query';
import { Customer } from '../entities/Customer';
import { Contact } from '../entities/Contact';
import { CrmTask } from '../entities/CrmTask';
import { BmbyHttpResponse, BmbyContentType } from '../IBmbyHttpClient';
import { QueryParams } from '../QueryParams';
import { PaginatedList } from '../PaginatedList';
import { ContactQueryParams } from '../querystrings/ContactQueryParams';
import { PropertyQueryParams } from '../querystrings/PropertyQueryParams';
import { CustomerProperty } from '../entities/CustomerProperty';
import { Property } from '../index';

export class CustomerRest extends BmbyRest {
    listCustomers(params: QueryParams): Promise<PaginatedList<Customer>> {
        var queryString = params != null ? params.queryString() : "";
        let result = this.get("/customers" + queryString, true);

        return new Promise<PaginatedList<Customer>>((resolve, reject) => {
            result
            .then(function(response) {
                try {
                    let customers = new Array<Customer>();
                    
                    for (let i in response.data.items) {
                        let customer = new Customer();
                        customer.data = response.data.items[i];
                        customers.push(customer);
                    }

                    response.data.items = customers;

                    resolve(new PaginatedList<Customer>(response.data));
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
    
    listContacts(params: ContactQueryParams): Promise<PaginatedList<Contact>> {
        var queryString = params != null ? params.queryString() : "";
        let result = this.get("/autocompletecontacts" + queryString, true);

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

    listQueries(customerId: string, params?: QueryParams): Promise<PaginatedList<Query>> {
        params = params != undefined && params != null ? params : new QueryParams();
        params.customerId = customerId;

        let result = this.get("/queries" + params.queryString(), true);

        return new Promise<PaginatedList<Query>>((resolve, reject) => {
            result
            .then(function(response) {
                try {
                    let queries = new Array<Query>();
                    
                    for (let i in response.data.items) {
                        let crmTask = new Query();
                        crmTask.data = response.data.items[i];
                        queries.push(crmTask);
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
    
    listMatchingProperties(params: PropertyQueryParams): Promise<PaginatedList<CustomerProperty>> {
        var queryString = params != null ? params.queryString() : "";
        let result = this.get("/customerproperties" + queryString, true);

        return new Promise<PaginatedList<CustomerProperty>>((resolve, reject) => {
            result
            .then(function(response) {
                try {
                    let customerProperties = new Array<CustomerProperty>();
                    
                    for (let i in response.data.items) {
                        let customer = new CustomerProperty();
                        customer.data = response.data.items[i];
                        customerProperties.push(customer);
                    }

                    response.data.items = customerProperties;

                    resolve(new PaginatedList<CustomerProperty>(response.data));
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

    addPropertyMatches(customerId:string, properties: Array<Property>): Promise<BmbyHttpResponse> {
        return this.put("/customerproperties/" + customerId, properties.map(p => p.id), true);
    }

    removePropertyMatches(customerId:string, properties: Array<Property>): Promise<BmbyHttpResponse> {
        return this.delete("/customerproperties/" + customerId, true, properties.map(p => p.id));
    }

    uploadImage(): Promise<BmbyHttpResponse> {
        return null;
    }

    insertCustomer(customer: Customer): Promise<BmbyHttpResponse> {
        return this.post("/customers", customer.data, true, BmbyContentType.Json);
    }

    updateCustomer(customer: Customer): Promise<BmbyHttpResponse> {
        return this.put("/customers", customer.data, true);
    }

    getCustomer(customerId: string): Promise<Customer> {
        let result = this.get("/customers/" + customerId, true);

        return new Promise<Customer>((resolve, reject) => {
            result
            .then(function(response) {
                try {
                    let customer = new Customer();
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
}