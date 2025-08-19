import {IFileModel} from '../../../pages/products/components/products-section/products-section';

export interface ILeads {
    id: number;
    title: string;
    tag: string | null;
    heading: string | null;
    description: string;
    file: IFileModel | null;
}