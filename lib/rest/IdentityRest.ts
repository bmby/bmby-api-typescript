import { BmbyRest } from './BmbyRest';
import { IBmbyHttpClient, BmbyHttpResponse, BmbyHttpResponseStatus, BmbyContentType } from '../IBmbyHttpClient';
import { ILocalStorage } from '../ILocalStorage';

export class IdentityRest extends BmbyRest {
    private _autorefreshing = false;

    protected _endPoint = "https://identity.bmby.com";
    protected _tokenUri = "/connect/token";

    isLoggedIn(): Promise<boolean> {

        return new Promise<boolean>((resolve, reject) => {
            reject(false);
        });
    }

    login(clientId: string, clientSecret: string, username: string, password: string): Promise<BmbyHttpResponse> {
        let data: any = {
            'grant_type': 'password',
            'client_id': clientId,
            'username': username,
            'password': password
        };

        if (clientSecret != "") {
            data['client_secret'] = clientSecret;
        }

        let result = this.post(this._tokenUri, data, false, BmbyContentType.UrlEncoded);
        let _this = this;

        result.then(function(response: BmbyHttpResponse){
            if (response.status == BmbyHttpResponseStatus.Ok) {
                let data = response.data;

                _this._storage.store(_this._accessTokenField, data.access_token);
                _this._storage.store(_this._refereshTokenField, data.refresh_token);
            }
        })
        .catch(function(){
            //
        });

        return result;
    }

    autoRefreshToken(clientId: string, clientSecret: string): void {
        if (this._autorefreshing) {
            return;
        }

        this._autorefreshing = true;
        let _this = this;

        // setInterval(function(){
        //     let refreshToken = _this._storage.get(_this._refereshTokenField);

        //     if (refreshToken == null) {
        //         return;
        //     }

        //     _this.refereshToken(clientId, clientSecret, refreshToken)
        //     .then(function(response: BmbyHttpResponse){
        //         console.log(response.data)
        //     })
        //     .catch(function(response: BmbyHttpResponse){
        //         console.log(response.data)
        //     });

        // }, 60000);
    }

    refereshToken(clientId: string, clientSecret: string, refereshToken: string): Promise<BmbyHttpResponse> {
        let data: any = {
            'grant_type': 'refresh_token',
            'client_id': clientId,
            'refresh_token': refereshToken
        };

        if (clientSecret != "") {
            data['client_secret'] = clientSecret;
        }

        let result = this.post(this._tokenUri, data, false, BmbyContentType.UrlEncoded);
        let _this = this;

        result.then(function(response: BmbyHttpResponse){
            if (response.status == BmbyHttpResponseStatus.Ok) {
                let data = response.data;

                _this._storage.store(_this._accessTokenField, data.access_token);
                _this._storage.store(_this._refereshTokenField, data.refresh_token);
            }
        });
        
        return result;
    }

    logout(clientId: string, clientSecret: string): Promise<BmbyHttpResponse> {
        this._storage.delete(this._accessTokenField);
        this._storage.delete(this._refereshTokenField);
        return null;
    }
}
