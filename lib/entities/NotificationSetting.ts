import { BmbyEntity } from "./BmbyEntity";

export class NotificationSetting extends BmbyEntity {
    constructor() {
        super();

        this._data = {
            'key': '',
            'enabled': false,
            'title': '',
            'description': ''
        }
    }

    set key(value: string) {
        this._data['key'] = value;
    }
    get key(): string {
        return this._data['key'];
    }

    set enabled(value: boolean) {
        this._data['enabled'] = value;
    }
    get enabled(): boolean {
        return this._data['enabled'];
    }

    set title(value: string) {
        this._data['title'] = value;
    }
    get title(): string {
        return this._data['title'];
    }

    set description(value: string) {
        this._data['description'] = value;
    }
    get description(): string {
        return this._data['description'];
    }
}