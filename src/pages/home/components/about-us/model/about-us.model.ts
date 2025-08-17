import {IAboutUsVideo, IFileModel} from '../about-us';

export class AboutUsVideoModel {
    public id!: number;
    public file!: IFileModel;
    public description!: string;
    public alt!: string;

    constructor(responseData: IAboutUsVideo) {
        this._setId(responseData);
        this._setFile(responseData);
        this._setDescription(responseData);
        this._setAlt(responseData);
    }

    private _setId({id}: IAboutUsVideo) {
        this.id = id;
    }

    private _setFile({file}: IAboutUsVideo) {
        this.file = file;
    }

    private _setDescription({description}: IAboutUsVideo) {
        this.description = description;
    }

    private _setAlt({alt}: IAboutUsVideo) {
        this.alt = alt;
    }

}