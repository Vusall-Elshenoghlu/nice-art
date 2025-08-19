import {IAboutModel, IFeaturesModel, IFileModel, IProducts} from '../products-section';

export class ProductsSectionModel {
    public id!: number;
    public name!: string;
    public file!: IFileModel;
    public about!: IAboutModel;
    public features!:IFeaturesModel;

    constructor(responseData: IProducts) {
        this._setId(responseData);
        this._setName(responseData);
        this._setFile(responseData);
        this._setAbout(responseData);
        this._setFeatures(responseData);
    }

    private _setId({id}: IProducts) {
        this.id = id;
    }
    private _setName({name}: IProducts) {
        this.name = name;
    }
    private _setFile({file}: IProducts) {
        this.file=file;
    }
    private _setAbout({about}: IProducts) {
        this.about=about;
    }
    private _setFeatures({features}: IProducts) {
        this.features=features;
    }
}