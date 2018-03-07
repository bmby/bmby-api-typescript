export enum HttpMethod {
    Get = 0,
    Post,
    Put,
    Delete,
    Patch
}

export enum BmbyHttpResponseStatus {
    Ok = 0,
    Error = 1
}

export class BmbyHttpResponse {
    constructor (
        private status: BmbyHttpResponseStatus,
        private data: any
    ){};

    public getStatus(): BmbyHttpResponseStatus {
        return this.status;
    }

    public getData(): any {
        return this.data;
    }
}

export interface IBmbyHttpClient {
    request(url: string, method: HttpMethod, headers: object): Promise<BmbyHttpResponse>;
}