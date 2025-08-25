import axiosInstance from '../../../core/configs/axios.config';
import {IAboutUsVideo} from '../components/about-us/home-about-us';
import {API} from '../../../core/configs/api.config';
import {AboutUsVideoModel} from '../model/about-us.model';

export const getVideo = async (): Promise<any> => {
    const response = await axiosInstance.get<{ record: IAboutUsVideo; metadata: any}>(API.video);
    return new AboutUsVideoModel(response.data.record);
};