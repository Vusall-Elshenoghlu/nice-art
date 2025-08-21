import {useQuery} from 'react-query';
import {getStrategies} from './strategies.service';

export const useStrategiesQuery=()=>{
    return useQuery({
        queryKey:['strategiies'],
        queryFn:getStrategies,
    });
};