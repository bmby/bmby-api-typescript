import { BmbyRest } from './BmbyRest';
import { BmbyHttpResponse, BmbyContentType } from '../IBmbyHttpClient';
import { Platform } from '../Enumerations';

export class UserRest extends BmbyRest {
    storeToken(token: string, platorm: Platform): Promise<BmbyHttpResponse> {
        return this.post("/users/storetoken", { "token": token, "platorm": platorm }, true, BmbyContentType.Json);
    }
}
