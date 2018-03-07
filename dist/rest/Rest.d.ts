import { IBmbyHttpClient } from '../IBmbyHttpClinet';
export declare abstract class Rest {
    protected httpClient: IBmbyHttpClient;
    constructor(httpClient: IBmbyHttpClient);
}
