import {useQuery} from 'react-query';
import {getLead} from './leads.service';

export const useLeadQuery=()=>{
    return useQuery({
        queryKey:'products-lead',
        queryFn:getLead,
    });
};