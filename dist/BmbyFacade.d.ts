import { IBmbyHttpClient, ILocalStorage, CustomerRest, PropertyRest, CrmTaskRest, IdentityRest } from "./index";
export declare class BmbyFacade {
    private _httpClient;
    private _localStore;
    private _identityRest;
    private _customerRest;
    private _propertyRest;
    private _crmTaskRest;
    constructor(_httpClient: IBmbyHttpClient, _localStore: ILocalStorage);
    readonly identityRest: IdentityRest;
    readonly customerRest: CustomerRest;
    readonly propertyRest: PropertyRest;
    readonly crmTaskRest: CrmTaskRest;
}
