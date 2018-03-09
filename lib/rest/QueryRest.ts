import { BmbyRest } from './BmbyRest';
import { Query } from '../entities/Query';
import { Property } from '../entities/Property';
import { Contact } from '../entities/Contact';
import { BmbyHttpResponse } from '../IBmbyHttpClient';

export class QueryRest extends BmbyRest {
    listQueries(params: any): Promise<Array<Query>> {
        return null;
    }

    listMatchedProperties(queryId: string): Promise<Array<Property>> {
        return null;
    }

    insertQuery(crmTask: Query): Promise<BmbyHttpResponse> {
        return null;
    }

    updateQuery(crmTask: Query): Promise<BmbyHttpResponse> {
        return null;
    }

    getQuery(id: string): Promise<Query> {
        return null;
    }

    setQueryStatus(queryId: string, isActive: boolean): Promise<BmbyHttpResponse> {
        return null;
    }
}
