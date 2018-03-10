import { BmbyEntity } from "./BmbyEntity";

export class ListItem extends BmbyEntity {
    constructor() {
        super();

        this._data = {
            'key': '',
            'display_name': '',
            'tags': '',
            'avatar': '',
            'icon': '',
            'selected': false
        }
    }

    get key(): string {
        return this._data['key'];
    }

    get displayName(): string {
        return this._data['display_name'];
    }

    get tags(): string {
        return this._data['tags'];
    }

    get avatar(): string {
        return this._data['avatar'];
    }

    get icon(): string {
        return this._data['icon'];
    }

    get selected(): boolean {
        return this._data['selected'];
    }
}