import {API} from 'core/configs/api.config';
import axiosInstance from 'core/configs/axios.config';
import {IRegisterFormValues} from '../register';

export const register = async (credentials: IRegisterFormValues) => {
    const res= await axiosInstance.post(API.register, credentials);
    return res.data;
};

