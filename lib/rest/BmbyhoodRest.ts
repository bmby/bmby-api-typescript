import { BmbyRest } from './BmbyRest';
import { BmbyHttpResponse, BmbyContentType } from '../IBmbyHttpClient';
import { QueryParams } from '../QueryParams';
import { Platform } from '../Enumerations';
import { PortalId } from '../entities/PortalId';

export class BmbyhoodRest extends BmbyRest {
    storeToken(portalId: string, token: string, platform: Platform): Promise<BmbyHttpResponse> {
        return this.post("/bmbyhood/storetoken", { "portal_id": portalId, "token": token, "platform": platform }, true, BmbyContentType.Json);
    }

    portalIdByActivationCode(activationCode: number): Promise<PortalId> {
        let result = this.get("/bmbyhoodbycode/" + activationCode, true);

        return new Promise<PortalId>((resolve, reject) => {
            result
            .then(function(response) {
                try {
                    let portalId = new PortalId();
                    portalId.data = response.data;

                    resolve(portalId);
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
