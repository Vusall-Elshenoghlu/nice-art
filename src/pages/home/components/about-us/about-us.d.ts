export interface IAboutUsVideo {
    id: number;
    file: IFileModel;
    description: string;
    alt: string;
}
export interface IFileModel {
    id: number;
    url: string;
}