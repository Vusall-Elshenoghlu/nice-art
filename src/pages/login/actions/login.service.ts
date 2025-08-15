import {API} from 'core/configs/api.config';
import axiosInstance from 'core/configs/axios.config';
import {ILoginFormValues} from '../login';

export const login = async (credentials: ILoginFormValues) => {
    const res= await axiosInstance.post(API.login, credentials);
    return res.data;
};

