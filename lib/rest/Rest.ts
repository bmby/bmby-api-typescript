import { IBmbyHttpClient } from '../IBmbyHttpClinet';

export abstract class Rest {
    constructor(protected httpClient: IBmbyHttpClient) {}
}