import { BmbyRest } from './BmbyRest';
import { Property } from '../entities/Property';
import { Contact } from '../entities/Contact';
import { CrmTask } from '../entities/CrmTask';
import { BmbyHttpResponse, BmbyContentType } from '../IBmbyHttpClient';

export class PropertyRest extends BmbyRest {
    listProperties(params: any): Promise<Array<Property>> {
        let result = this.get("/properties", true);

        return new Promise<Array<Property>>((resolve, reject) => {
            result
            .then(function(response) {
                try {
                    let properties = new Array<Property>();
                    
                    for (let i in response.data) {
                        let property = new Property();
                        property.data = response.data[i];
                        properties.push(property);
                    }

                    resolve(properties);
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
        return this.post("/properties", property.data, true, BmbyContentType.Json);
    }

    listCrmTasks(propertyId: string): Promise<Array<CrmTask>> {
        let result = this.get("/crmtasks?propertyId=" + propertyId, true);

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

    uploadPropertyImage(propertyId: string): Promise<BmbyHttpResponse> {
        return null;
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

}
