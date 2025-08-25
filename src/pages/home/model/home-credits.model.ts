import {IHomeCredits} from '../components/home-credits/home-credits';

export class HomeCreditsModel {
    public amount!: number;
    public month!: number;
    public rate!: number;
    public finCode!: string;
    public contactNumber!: string;

    constructor(formData:IHomeCredits) {
        this._setAmount(formData);
        this._setMonth(formData);
        this._setRate(formData);
        this._setFinCode(formData);
        this._setContactNumber(formData);
    }

    private _setAmount({amount}:IHomeCredits) {
        this.amount = amount;
    }
    private _setMonth({month}:IHomeCredits) {
        this.month = month;
    }
    private _setRate({rate}:IHomeCredits) {
        this.rate = rate;
    }
    private _setFinCode({finCode}:IHomeCredits) {
        this.finCode = finCode;
    }
    private _setContactNumber({contactNumber}:IHomeCredits) {
        this.contactNumber = contactNumber;
    }
}