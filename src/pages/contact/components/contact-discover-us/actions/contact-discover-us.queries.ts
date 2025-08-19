import {useQuery} from 'react-query';
import {getContactDiscoverUs, getContactImages} from './contact-discover-us.service';
export const useContactDiscoverUsQuery = () => {
    return useQuery({
        queryKey: ['contact'],
        queryFn: getContactDiscoverUs
    });
};

export const useContactImagesQuery = () => {
    return useQuery({
        queryKey: ['contactImages'],
        queryFn: getContactImages
    });
};