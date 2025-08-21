import {IContactForm} from '../contact-form';

export class ContactFormModel {
    public email!: string;
    public phone!: string;
    public topic!: string;
    public message!: string;

    constructor(formData: IContactForm) {
        this._setEmail(formData);
        this._setPhone(formData);
        this._setTopic(formData);
        this._setMessage(formData);
    }

    private _setEmail({email}: IContactForm) {
        this.email = email;
    }
    private _setPhone({phone}: IContactForm) {
        this.phone = phone;
    }
    private _setTopic({topic}: IContactForm) {
        this.topic = topic;
    }
    private _setMessage({message}: IContactForm) {
        this.message = message;
    }

}