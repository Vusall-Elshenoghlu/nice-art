import axiosInstance from '../../../../core/configs/axios.config';
import {IAbout} from '../../about';
import {API} from '../../../../core/configs/api.config';
import {AboutModel} from '../../model/about.model';

export  const getPurposes =async (): Promise<IAbout[]> => {
    const response=await axiosInstance.get<{record:IAbout[], metadata:any}>(API.purposes);
    console.log('API Responseeee:', response.data);
    return response.data.record.map(purpose => new AboutModel(purpose));
};