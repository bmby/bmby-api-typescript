import { BmbyRest } from './BmbyRest';
import { Query } from '../entities/Query';
import { Customer } from '../entities/Customer';
import { Contact } from '../entities/Contact';
import { BmbyHttpResponse } from '../IBmbyHttpClient';

export class CustomerRest extends BmbyRest {
    listCustomers(params: any): Promise<Array<Customer>> {
        return null;
    }

    listQueries(customerId: string): Promise<Array<Query>> {
        return null;
    }

    uploadImage(): Promise<BmbyHttpResponse> {
        return null;
    }

    insertCustomer(crmTask: Customer): Promise<BmbyHttpResponse> {
        return null;
    }

    updateCustomer(crmTask: Customer): Promise<BmbyHttpResponse> {
        return null;
    }

    getCustomer(id: string): Promise<Customer> {
        return null;
    }
}