import {IContactDiscoverus, IContactImages} from '../contact-discover-us';
import {API} from '../../../../../core/configs/api.config';
import {ContactDiscoverUsModel} from '../models/contact-discover-us.model';
import axiosInstance from '../../../../../core/configs/axios.config';
import {ContactImagesModel} from '../models/contact-images.model';

export const getContactDiscoverUs = async (): Promise<any> => {
    const response = await axiosInstance.get<{record: IContactDiscoverus; metadata: any}>(API.contact);
    return new ContactDiscoverUsModel(response.data.record);
};

export const getContactImages = async (): Promise<any> => {
    const response = await axiosInstance.get<{record: IContactImages[]; metadata: any}>(API.contacFiles);
    console.log(response?.data?.record);
    return response.data.record.map((item) => new ContactImagesModel(item));
};