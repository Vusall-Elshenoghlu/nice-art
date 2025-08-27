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
    heroLead?: Lead;
    isLoading: boolean;
    isButtons?: boolean;
    isOneButton?: boolean;
    isTitleBig?: boolean;
    isTitleSmall?: boolean;
    isTagLeft?: boolean;
    isTagRight?: boolean;
    isHeadingLeft?: boolean;
    isHeadingRight?: boolean;
    isDescriptionLeft?: boolean;
    isDescriptionRight?: boolean;
    isFile?: boolean;
    isLearnMore? :boolean;
}