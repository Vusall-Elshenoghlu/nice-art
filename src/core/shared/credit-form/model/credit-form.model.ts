import {ICreditForm} from '../credit-form';

export class CreditFormModel {
    public amount!: number;
    public month!: number;
    public rate!: number;
    public finCode!: string;
    public contactNumber!: string;

    constructor(formData:ICreditForm) {
        this._setAmount(formData);
        this._setMonth(formData);
        this._setRate(formData);
        this._setFinCode(formData);
        this._setContactNumber(formData);
    }

    private _setAmount({amount}:ICreditForm) {
        this.amount = amount;
    }
    private _setMonth({month}:ICreditForm) {
        this.month = month;
    }
    private _setRate({rate}:ICreditForm) {
        this.rate = rate;
    }
    private _setFinCode({finCode}:ICreditForm) {
        this.finCode = finCode;
    }
    private _setContactNumber({contactNumber}:ICreditForm) {
        this.contactNumber = contactNumber;
    }
}