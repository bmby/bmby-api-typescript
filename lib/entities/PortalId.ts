import { BmbyEntity } from "./BmbyEntity";

export class PortalId extends BmbyEntity {
    constructor() {
        super();

        this._data = {
            'portalId': ''
        }
    }

    set portalId(value: string) {
        this._data['portalId'] = value;
    }
    get portalId(): string {
        return this._data['portalId'];
    }
}