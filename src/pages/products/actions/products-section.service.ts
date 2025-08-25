import axiosInstance from '../../../core/configs/axios.config';
import {IProducts} from '../components/products-section/products-section';
import {API} from '../../../core/configs/api.config';
import {ProductsSectionModel} from '../model/products-section.model';

export const getProducts = async (): Promise<IProducts[]> => {
    const response = await axiosInstance.get<{ record: IProducts[], metadata: any }>(API.products);
    console.log('API Response:', response.data.record);

    return response.data.record.map(product => new ProductsSectionModel(product));
};
