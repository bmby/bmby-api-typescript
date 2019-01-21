import { BmbyRest } from './BmbyRest';
import { BmbyHttpResponse, BmbyContentType } from '../IBmbyHttpClient';
import { QueryParams } from '../QueryParams';
import { Platform } from '../Enumerations';

export class BmbyhoodRest extends BmbyRest {
    storeToken(portalId: string, token: string, platform: Platform): Promise<BmbyHttpResponse> {
        return this.post("/bmbyhood/storetoken", { "portal_id": portalId, "token": token, "platform": platform }, true, BmbyContentType.Json);
    }
}
