import {useQuery} from 'react-query';
import {getContactDiscoverUs} from './contact-discover-us.service';
export const useContactDiscoverUsQuery = () => {
    return useQuery({
        queryKey: ['contact'],
        queryFn: getContactDiscoverUs
    });
};