import {IPartnersCompany} from '../partners-companies';
import axiosInstance from '../../../../../core/configs/axios.config';
import {API} from '../../../../../core/configs/api.config';
import {PartnersCompaniesModel} from '../model/partners-companies.model';

export const getPartners = async (): Promise<any[]> => {
    const response = await axiosInstance.get<{record: IPartnersCompany[]; metadata: any}>(API.partners);
    return response?.data.record.map((item) => new PartnersCompaniesModel(item));
};