import { BmbyRest } from './BmbyRest';
import { Property } from '../entities/Property';
import { Contact } from '../entities/Contact';
import { BmbyHttpResponse } from '../IBmbyHttpClient';

export class PropertyRest extends BmbyRest {
    listProperties(params: any): Promise<Array<Property>> {
        return null;
    }

    insertProperty(crmTask: Property): Promise<BmbyHttpResponse> {
        return null;
    }

    updateProperty(crmTask: Property): Promise<BmbyHttpResponse> {
        return null;
    }

    uploadPropertyImage(propertyId: string): Promise<BmbyHttpResponse> {
        return null;
    }

    getProperty(propertyId: string): Promise<Property> {
        return null;
    }

    getPropertyContact(propertyId: string): Promise<Contact> {
        return null;
    }

}
