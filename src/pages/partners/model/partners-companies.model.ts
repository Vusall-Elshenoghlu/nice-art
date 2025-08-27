import {IFileModel} from '../../home/components/about-us/home-about-us';
import {IPartnersCompany} from '../components/partners-companies/partners-companies';

export class PartnersCompaniesModel {
    public id!: number;
    public name!: string;
    public tag!:  string;
    public description!: string;
    public site!: string;
    public file!: IFileModel | null;

    constructor(formData: IPartnersCompany) {
        this._setId(formData);
        this._setName(formData);
        this._setTag(formData);
        this._setDescription(formData);
        this._setSite(formData);
        this._setFile(formData);
    }

    private _setId({id}: IPartnersCompany) {
        this.id = id;
    }
    private _setName({name}: IPartnersCompany) {
        this.name = name;
    }
    private _setTag({tag}: IPartnersCompany) {
        this.tag = tag;
    }
    private _setDescription({description}: IPartnersCompany) {
        this.description = description;
    }
    private _setFile({file}: IPartnersCompany) {
        this.file = file;
    }
    private _setSite({site}: IPartnersCompany) {
        this.site = site;
    }
}