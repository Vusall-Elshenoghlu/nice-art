import axiosInstance from '../../../../../core/configs/axios.config';
import {IAboutUsVideo} from '../about-us';
import {API} from '../../../../../core/configs/api.config';
import {AboutUsVideoModel} from '../model/about-us.model';

export const getVideo = async (): Promise<any> => {
    const response = await axiosInstance.get<{ record: IAboutUsVideo; metadata: any}>(API.video);
    console.log(response.data.record);
    return new AboutUsVideoModel(response.data.record);
};