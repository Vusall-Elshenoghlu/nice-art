import {useQuery} from 'react-query';
import {getPartners} from './partners-companies.service';

export const usePartnersCompanyQuery = () => {
    return useQuery({
        queryKey: ['companies'],
        queryFn: getPartners
    });
};