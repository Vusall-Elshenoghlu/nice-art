import {IContactDiscoverus} from '../contact-discover-us';

export class ContactDiscoverUsModel {
    public phone!: string;
    public email!: string;
    public location!: string;
    public callCenter!: string;

    constructor(responseData: IContactDiscoverus) {
        this._setPhone(responseData);
        this._setEmail(responseData);
        this._setLocation(responseData);
        this._setCallCenter(responseData);
    }

    private _setPhone({phone}: IContactDiscoverus) {
        this.phone = phone;
    }
    private _setEmail({email}: IContactDiscoverus) {
        this.email = email;
    }
    private _setLocation({location}: IContactDiscoverus) {
        this.location = location;
    }
    private _setCallCenter({callCenter}: IContactDiscoverus) {
        this.callCenter = callCenter;
    }
}