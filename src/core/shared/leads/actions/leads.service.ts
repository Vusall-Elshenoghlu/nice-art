import axiosInstance from '../../../configs/axios.config';
import {API} from '../../../configs/api.config';
import {LeadsModel} from '../model/leads.model';
import {ILeads} from '../leads';

export const getLead =async () => {
    const response =await axiosInstance.get<{record: ILeads[], metadata:any}>(API.leads);
    console.log('API Response:', response.data.record);
    return response.data.record.map(product => new LeadsModel(product));
};