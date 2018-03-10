import { IBmbyHttpClient } from './IBmbyHttpClient';
import { ILocalStorage } from './ILocalStorage';
import { CustomerRest } from './rest/CustomerRest';
import { PropertyRest } from './rest/PropertyRest';
import { CrmTaskRest } from './rest/CrmTaskRest';
import { IdentityRest } from './rest/IdentityRest';
import { QueryRest } from './rest/QueryRest';
import { LocalizationRest } from './rest/LocalizationRest';

export class BmbyFacade {
    private _identityRest: IdentityRest;
    private _customerRest: CustomerRest;
    private _propertyRest: PropertyRest;
    private _crmTaskRest: CrmTaskRest;
    private _queryRest: QueryRest;
    private _localizationRest: LocalizationRest;

    constructor(private _httpClient: IBmbyHttpClient, private _localStore: ILocalStorage) {
        this._identityRest = new IdentityRest(_httpClient, _localStore);
        this._customerRest = new CustomerRest(_httpClient, _localStore);
        this._propertyRest = new PropertyRest(_httpClient, _localStore);
        this._crmTaskRest = new CrmTaskRest(_httpClient, _localStore);
        this._queryRest = new QueryRest(_httpClient, _localStore);
        this._localizationRest = new LocalizationRest(_httpClient, _localStore);
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

    get queryRest(): QueryRest {
        return this._queryRest
    }

    get localizationRest(): LocalizationRest {
        return this._localizationRest;
    }
}