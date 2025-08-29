import {IFileModel} from '../../../../pages/products/components/products-section/products-section';

export interface ILeads {
    id: number;
    title: string;
    tag: string | null;
    heading: string | null;
    description: string;
    file: IFileModel | null;
}
interface LeadComponentProps {
    heroLead?: ILeads;
    isLoading: boolean;
    isButtons?: boolean;
    isOneButton?: boolean;
    isTitleBig?: boolean;
    isTitleSmall?: boolean;
    tag?: boolean;
    heading?: boolean;
    description?: boolean;
    file?: boolean;
    isLearnMore? :boolean;
    isOnlyContent? :boolean;
}