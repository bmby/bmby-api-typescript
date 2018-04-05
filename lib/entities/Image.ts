import { BmbyEntity } from "./BmbyEntity";
import { FileAccess } from "../index";

export class Image extends BmbyEntity {
    private imageUrl(imageData: any): string {
        var url = ""
        
        if (imageData == null && imageData == "") {
            return url;
        }
        
        url = "https://bmby.blob.core.windows.net/" + FileAccess[imageData['access']].toLowerCase;

        if (imageData['folder'] != null)
        {
            url += "/" + imageData['folder'];
        }

        url += "/" + imageData['file_id'] + "/" + imageData['file_name'];

        return url;
    }

    constructor() {
        super();

        this._data = {
            'original_image': '',
            'big_image': '',
            'medium_image': '',
            'small_image': ''
        }
    }
 
    get originalImage(): string {
        return this.imageUrl(this._data['original_image']);
    }
    set originalImage(value: string) {
        this._data['original_image'] = value
    }
 
    get bigImage(): string {
        return this.imageUrl(this._data['big_image']);
    }
    set bigImage(value: string) {
        this._data['big_image'] = value
    }
 
    get mediumImage(): string {
        return this.imageUrl(this._data['medium_image']);
    }
    set mediumImage(value: string) {
        this._data['medium_image'] = value
    }
 
    get smallImage(): string {
        return this.imageUrl(this._data['small_image']);
    }
    set smallImage(value: string) {
        this._data['small_image'] = value
    }
}