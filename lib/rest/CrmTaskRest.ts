import { BmbyRest } from './BmbyRest';
import { CrmTask } from '../entities/CrmTask';
import { Contact } from '../entities/Contact';
import { BmbyHttpResponse } from '../IBmbyHttpClient';
import { BmbyContentType, BmbyHttpResponseStatus, QueryParams, CrmTaskQueryParams } from '../index';
import { PaginatedList } from '../PaginatedList';

export class CrmTaskRest extends BmbyRest {
    listTasks(params: CrmTaskQueryParams): Promise<PaginatedList<CrmTask>> {
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

    insertTask(crmTask: CrmTask): Promise<BmbyHttpResponse> {
        return this.post("/crmtasks", crmTask.data, true, BmbyContentType.Json);
    }

    updateTask(crmTask: CrmTask): Promise<BmbyHttpResponse> {
        return this.put("/crmtasks", crmTask.data, true);
    }

    deleteTask(crmTaskId: string): Promise<BmbyHttpResponse> {
        return this.delete("/crmtasks/" + crmTaskId, true);
    }

    getTask(crmTaskId: string): Promise<CrmTask> {
        let result = this.get("/crmtasks/" + crmTaskId, true);

        return new Promise<CrmTask>((resolve, reject) => {
            result
            .then(function(response) {
                try {
                    let crmTask = new CrmTask();
                    crmTask.data = response.data;

                    resolve(crmTask);
                } catch(ex) {
                    reject(response);
                }
            })
            .catch(function(response){
                reject(response);
            });
        });
    }

    uploadVoice(contactId: string, filePath: string): Promise<BmbyHttpResponse> {
        return this.upload('/crmtasks/voice', { contactId: contactId }, filePath);
    }

    listContacts(params: QueryParams): Promise<PaginatedList<Contact>> {
        let result = this.get("/crmtasks/contacts" + params.queryString(), true);

        return new Promise<PaginatedList<Contact>>((resolve, reject) => {
            result
            .then(function(response) {
                try {
                    let contacts = new Array<Contact>();
                    
                    for (let i in response.data.items) {
                        let contact = new Contact();
                        contact.data = response.data.items[i];
                        contacts.push(contact);
                    }

                    let data = response.data;
                    data.items = contacts;

                    resolve(new PaginatedList<Contact>(data));
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
