import { BmbyRest } from './BmbyRest';
import { User } from '../entities/User';
import { BmbyHttpResponse, BmbyContentType } from '../IBmbyHttpClient';
import { Platform } from '../Enumerations';

export class UserRest extends BmbyRest {
    storeToken(token: string, platorm: Platform): Promise<BmbyHttpResponse> {
        return this.post("/users/storetoken", { "token": token, "platorm": platorm }, true, BmbyContentType.Json);
    }

    me(): Promise<User> {
        let result = this.get("/users/me", true);

        return new Promise<User>((resolve, reject) => {
            result
            .then(function(response) {
                try {
                    let property = new User();
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
}
