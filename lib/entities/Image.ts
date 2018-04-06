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
            'image_id': '',
            'original_image': '',
            'big_image': '',
            'medium_image': '',
            'small_image': ''
        }
    }
    
    get id(): string {
        return this._data['image_id'];
    }
 
    get originalImage(): string {
        return this.imageUrl(this._data['original_image']);
    }
 
    get bigImage(): string {
        return this.imageUrl(this._data['big_image']);
    }
 
    get mediumImage(): string {
        return this.imageUrl(this._data['medium_image']);
    }
 
    get smallImage(): string {
        return this.imageUrl(this._data['small_image']);
    }
}