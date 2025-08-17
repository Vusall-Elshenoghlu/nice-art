import {useQuery} from 'react-query';
import {getVideo} from './about-us.service';

export const useAboutUsVideoQuery = () => {
    return useQuery({
        queryKey: ['aboutUsVideo'],
        queryFn: getVideo
    });
};