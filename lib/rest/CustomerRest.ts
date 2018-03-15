import { BmbyRest } from './BmbyRest';
import { Query } from '../entities/Query';
import { Customer } from '../entities/Customer';
import { Contact } from '../entities/Contact';
import { CrmTask } from '../entities/CrmTask';
import { BmbyHttpResponse, BmbyContentType } from '../IBmbyHttpClient';
import { QueryParams } from '../index';

export class CustomerRest extends BmbyRest {
    listCustomers(params: QueryParams): Promise<Array<Customer>> {
        var queryString = params != null ? params.queryString() : "";
        let result = this.get("/customers" + queryString, true);

        return new Promise<Array<Customer>>((resolve, reject) => {
            result
            .then(function(response) {
                try {
                    let customers = new Array<Customer>();
                    
                    for (let i in response.data) {
                        let customer = new Customer();
                        customer.data = response.data[i];
                        customers.push(customer);
                    }

                    resolve(customers);
                } catch(ex) {
                    reject(response);
                }
            })
            .catch(function(response){
                reject(response);
            });
        });
    }

    listQueries(customerId: string, params?: QueryParams): Promise<Array<Query>> {
        params = params != undefined ? params : new QueryParams();
        params.customerId = customerId;
        var queryString = params != null ? params.queryString() : "";

        let result = this.get("/queries" + queryString, true);

        return new Promise<Array<Query>>((resolve, reject) => {
            result
            .then(function(response) {
                try {
                    let queries = new Array<Query>();
                    
                    for (let i in response.data) {
                        let crmTask = new Query();
                        crmTask.data = response.data[i];
                        queries.push(crmTask);
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

    listCrmTasks(customerId: string, params?: QueryParams): Promise<Array<CrmTask>> {
        params = params != undefined ? params : new QueryParams();
        params.customerId = customerId;
        var queryString = params != null ? params.queryString() : "";

        let result = this.get("/crmtasks" + queryString, true);

        return new Promise<Array<CrmTask>>((resolve, reject) => {
            result
            .then(function(response) {
                try {
                    let crmTasks = new Array<CrmTask>();
                    
                    for (let i in response.data) {
                        let crmTask = new CrmTask();
                        crmTask.data = response.data[i];
                        crmTasks.push(crmTask);
                    }

                    resolve(crmTasks);
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