import {IFileModel} from '../../../../pages/products/components/products-section/products-section';
import {ILeads} from '../leads';


export class LeadsModel {
    public id!:number;
    public title!: string;
    public tag!: string | null;
    public heading!: string | null;
    public description!: string;
    public file!: null | IFileModel;

    constructor(responseData:ILeads) {
        this._setId(responseData);
        this._setTitle(responseData);
        this._setTag(responseData);
        this._setHeading(responseData);
        this._setDescription(responseData);
        this._setFile(responseData);
    }

    private _setId({id}:ILeads){
        this.id = id;
    }
    private _setTitle({title}:ILeads){
        this.title = title;
    }
    private _setTag({tag}:ILeads){
        this.tag = tag;
    }
    private _setHeading({heading}:ILeads){
        this.heading = heading;
    }
    private _setDescription({description}:ILeads){
        this.description = description;
    }
    private _setFile({file}:ILeads){
        this.file = file;
    }
}