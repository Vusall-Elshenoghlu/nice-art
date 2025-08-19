import {IContactDiscoverus} from '../contact-discover-us';
import {API} from '../../../../../core/configs/api.config';
import {ContactDiscoverUsModel} from '../model/contact-discover-us.model';
import axiosInstance from '../../../../../core/configs/axios.config';

export const getContactDiscoverUs = async (): Promise<any> => {
    const response = await axiosInstance.get<{record: IContactDiscoverus; metadata: any}>(API.contact);
    return new ContactDiscoverUsModel(response.data.record);
};