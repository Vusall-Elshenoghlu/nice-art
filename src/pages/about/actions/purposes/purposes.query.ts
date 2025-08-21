import {useQuery} from 'react-query';
import { getPurposes} from './purposes.service';

export  const usePurposesQuery=()=>{
    return useQuery({
        queryKey:['purposes'],
        queryFn:getPurposes
    });
};