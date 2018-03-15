import { BmbyRest } from './BmbyRest';
import { CrmTask } from '../entities/CrmTask';
import { Contact } from '../entities/Contact';
import { BmbyHttpResponse } from '../IBmbyHttpClient';
import { BmbyContentType, BmbyHttpResponseStatus, QueryParams } from '../index';

export class CrmTaskRest extends BmbyRest {
    listTasks(params: QueryParams): Promise<Array<CrmTask>> {
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

    listContacts(pattern: string): Promise<Array<Contact>> {
        let result = this.get("/crmtasks/contacts", true);

        return new Promise<Array<Contact>>((resolve, reject) => {
            result
            .then(function(response) {
                try {
                    let contacts = new Array<Contact>();
                    
                    for (let i in response.data) {
                        let contact = new Contact();
                        contact.data = response.data[i];
                        contacts.push(contact);
                    }

                    resolve(contacts);
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
