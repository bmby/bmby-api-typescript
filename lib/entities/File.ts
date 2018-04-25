import { BmbyEntity } from "./BmbyEntity";
import { FileAccess } from "../Enumerations";

export class File extends BmbyEntity {
    constructor() {
        super();

        this._data = {
            'file_id': '',
            'file_name': '',
            'mime_type': '',
            'entity_id': '',
            'folder': '',
            'file_size': '',
            'access': '',
            'md5': '',
        }
    }
    
    get id(): string {
        return this._data['file_id'];
    }

    get url(): string {
        var url = ""
        
        if (!this._data['file_id']) {
            return url;
        }
        
        url = "https://bmby.blob.core.windows.net/" + FileAccess[this._data['access']].toLowerCase();

        if (this._data['folder'])
        {
            url += "/" + this._data['folder'];
        }
        
        url += "/" + this._data['file_id'] + "/" + this._data['file_name'];

        return url;
    }
}