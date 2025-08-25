import {IContactImages} from '../components/contact-discover-us/contact-discover-us';

export class ContactImagesModel {
    public id!: number;
    public url! : string;

    constructor(responseData: IContactImages) {
        this._setId(responseData);
        this._setImgUrl(responseData);
    }

    private _setId({id}: IContactImages) {
        this.id = id;
    }
    private _setImgUrl({url}: IContactImages) {
        this.url = url;
    }
}