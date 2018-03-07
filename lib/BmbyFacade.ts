import { 
    IBmbyHttpClient, 
    ILocalStorage, 
    CustomerRest, 
    PropertyRest, 
    CrmTaskRest, 
    IdentityRest
} from "./index";

export class BmbyFacade {
    private _identityRest: IdentityRest;
    private _customerRest: CustomerRest;
    private _propertyRest: PropertyRest;
    private _crmTaskRest: CrmTaskRest;

    constructor(private _httpClient: IBmbyHttpClient, private _localStore: ILocalStorage) {
        this._identityRest = new IdentityRest(_httpClient);
        this._customerRest = new CustomerRest(_httpClient);
        this._propertyRest = new PropertyRest(_httpClient);
        this._crmTaskRest = new CrmTaskRest(_httpClient);
    }

    get identityRest(): IdentityRest {
        return this._identityRest;
    }

    get customerRest(): CustomerRest {
        return this._customerRest;
    }

    get propertyRest(): PropertyRest {
        return this._propertyRest;
    }

    get crmTaskRest(): CrmTaskRest {
        return this._crmTaskRest;
    }
}