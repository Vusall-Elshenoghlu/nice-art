import axiosInstance from '../../../../core/configs/axios.config';
import {IAbout} from '../../about';
import {API} from '../../../../core/configs/api.config';
import {AboutModel} from '../../model/about.model';

export const getStrategies= async ():Promise<IAbout[]>=>{
    const response= await axiosInstance.get<{record:IAbout[], metadata:any}>(API.strategies);
    return response.data.record.map(strategy => new AboutModel(strategy));
};