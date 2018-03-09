import { BmbyHttpResponse, IBmbyHttpClient, BmbyHttpMethod } from '../IBmbyHttpClient';
import { ILocalStorage } from '../ILocalStorage';

export abstract class BmbyRest {
    protected _endPoint: string = "https://api.bmby.com";
    protected _clientId: string = "";
    protected _clientSecret: string = "";
    protected _refereshTokenField: string = "bmbyRefreshToken";
    protected _accessTokenField: string = "bmbyAccessToken";
    protected _tokenExpirationField: string = "tokenExpirationTime"
    protected _httpClient: IBmbyHttpClient;
    protected _storage: ILocalStorage;

    protected readonly urlEncodedContentType: string = "application/x-www-form-urlencoded"; 
    protected readonly jsonContentType: string = "application/json"; 

    protected urlEncode(data: any) {
        let encodedItems = [];

        for (let key in data) {
            encodedItems.push(key + "=" + encodeURIComponent(data[key]));
        }

        return encodedItems.join("&");
    }

    protected getHeaders(authorize: boolean, contentType?: string):any {
        contentType = contentType != undefined ? contentType : this.jsonContentType;

        let headers: any = {
            "Content-Type": contentType
        }

        if (authorize) {
            headers["Authorization"] = "Bearer " + this._storage.get(this._accessTokenField);
        }
    }

    protected post(uri: string, data: any, authorize: boolean, contentType?: string): Promise<BmbyHttpResponse> {
        contentType = contentType != undefined ? contentType : this.jsonContentType;
        let headers = this.getHeaders(authorize, contentType);

        if (contentType == this.urlEncodedContentType) {
            data = this.urlEncode(data);
        }

        return this._httpClient.request(this._endPoint + uri, BmbyHttpMethod.Post, headers, data);
    }

    protected put(uri: string, data: any, authorize: boolean): Promise<BmbyHttpResponse> {
        let headers = this.getHeaders(authorize);
        return this._httpClient.request(this._endPoint + uri, BmbyHttpMethod.Put, headers, data);
    }

    protected patch(uri: string, data: any, authorize: boolean): Promise<BmbyHttpResponse> {
        let headers = this.getHeaders(authorize);
        return this._httpClient.request(this._endPoint + uri, BmbyHttpMethod.Patch, headers, data);
    }

    protected delete(uri: string, authorize: boolean): Promise<BmbyHttpResponse> {
        let headers = this.getHeaders(authorize);
        return this._httpClient.request(this._endPoint + uri, BmbyHttpMethod.Put, headers);
    }

    protected get(uri: string, authorize: boolean, params?: any): Promise<BmbyHttpResponse> {
        let headers = this.getHeaders(authorize);
        return this._httpClient.request(this._endPoint + uri, BmbyHttpMethod.Put, headers);
    }

    constructor(httpClient: IBmbyHttpClient, storage: ILocalStorage) {
        this._httpClient = httpClient;
        this._storage = storage;
    }
}