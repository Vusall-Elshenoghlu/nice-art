export interface IProducts {
    id: number;
    name: string;
    file: IFileModel;
    about: IAboutModel;
    features:IFeaturesModel;
}
export interface IFileModel {
    id: number;
    url: string;
}
export interface IAboutModel {
    id: number;
    title: string;
    description: string;
}
export interface IFeaturesModel {
    amount: string;
    percentage:string;
    initialPayment:string;
    period:string;
    comission:string;
}