import { BmbyEntity } from "./BmbyEntity";

export class Image extends BmbyEntity {
    constructor() {
        super();

        this._data = {
            'image': '',
            'thumbnail': ''
        }
    }
 
    get image(): string {
        return this._data['image'];
    }
    set image(value: string) {
        this._data['image'] = value
    }
 
    get thumbnail(): string {
        return this._data['thumbnail'];
    }
    set thumbnail(value: string) {
        this._data['thumbnail'] = value
    }
}