import { BmbyRest } from './BmbyRest';
import { Query } from '../entities/Query';
import { Customer } from '../entities/Customer';
import { Contact } from '../entities/Contact';
import { CrmTask } from '../entities/CrmTask';
import { BmbyHttpResponse, BmbyContentType } from '../IBmbyHttpClient';
import { QueryParams } from '../QueryParams';
import { PaginatedList } from '../PaginatedList';

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

    listQueries(customerId: string, params?: QueryParams): Promise<PaginatedList<Query>> {
        params = params != undefined ? params : new QueryParams();
        params.customerId = customerId;
        var queryString = params != null ? params.queryString() : "";

        let result = this.get("/queries" + queryString, true);

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

    listCrmTasks(customerId: string, params?: QueryParams): Promise<PaginatedList<CrmTask>> {
        params = params != undefined ? params : new QueryParams();
        params.customerId = customerId;
        var queryString = params != null ? params.queryString() : "";

        let result = this.get("/crmtasks" + queryString, true);

        return new Promise<PaginatedList<CrmTask>>((resolve, reject) => {
            result
            .then(function(response) {
                try {
                    let crmTasks = new Array<CrmTask>();
                    
                    for (let i in response.data.items) {
                        let crmTask = new CrmTask();
                        crmTask.data = response.data.items[i];
                        crmTasks.push(crmTask);
                    }

                    response.data.items = crmTasks;

                    resolve(new PaginatedList<CrmTask>(response.data));
                } catch(ex) {
                    reject(response);
                }
            })
            .catch(function(response){
                reject(response);
            });
        });
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