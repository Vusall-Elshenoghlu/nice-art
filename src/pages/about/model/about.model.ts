import {IAbout, IAboutFile} from '../about';

export class AboutModel {
    public id!: number;
    public title!: string;
    public description!: string;
    public file!: IAboutFile;

    constructor( reponseData: IAbout) {
        this._setId(reponseData);
        this._setTitle(reponseData);
        this._setDescription(reponseData);
        this._setFile(reponseData);
    }
    private _setId({id}:IAbout){
        this.id=id;
    }
    private _setTitle({title}:IAbout){
        this.title=title;
    }
    private _setDescription({description}:IAbout){
        this.description=description;
    }
    private _setFile({file}:IAbout){
        this.file=file;
    }
}