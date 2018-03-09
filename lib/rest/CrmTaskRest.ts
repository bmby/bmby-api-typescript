import { BmbyRest } from './BmbyRest';
import { CrmTask } from '../entities/CrmTask';
import { Contact } from '../entities/Contact';
import { BmbyHttpResponse } from '../IBmbyHttpClient';

export class CrmTaskRest extends BmbyRest {
    listTasks(params: any): Promise<Array<CrmTask>> {
        let result = this.get("/crmtasks", true);

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
                    reject(null);
                }
            })
            .catch(function(response){
                reject(null);
            });
        });
    }

    insertTask(crmTask: CrmTask): Promise<BmbyHttpResponse> {
        return null;
    }

    updateTask(crmTask: CrmTask): Promise<BmbyHttpResponse> {
        return null;
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
                    reject(null);
                }
            })
            .catch(function(response){
                reject(null);
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
                    reject(null);
                }
            })
            .catch(function(response){
                reject(null);
            });
        });
    }
}
