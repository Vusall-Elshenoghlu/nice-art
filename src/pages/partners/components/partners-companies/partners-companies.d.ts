import {IFileModel} from '../../../home/components/about-us/home-about-us';

export interface IPartnersCompany  {
    id: number;
    name: string;
    tag:  string;
    description: string;
    site: string;
    file: IFileModel | null;
}