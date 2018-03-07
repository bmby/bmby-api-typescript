export declare enum HttpMethod {
    Get = 0,
    Post = 1,
    Put = 2,
    Delete = 3,
    Patch = 4,
}
export declare enum BmbyHttpResponseStatus {
    Ok = 0,
    Error = 1,
}
export declare class BmbyHttpResponse {
    private status;
    private data;
    constructor(status: BmbyHttpResponseStatus, data: any);
    getStatus(): BmbyHttpResponseStatus;
    getData(): any;
}
export interface IBmbyHttpClient {
    request(url: string, method: HttpMethod, headers: object): Promise<BmbyHttpResponse>;
}
