import {useMutation} from 'react-query';
import {store} from 'store/store.config';
import {setUser} from 'store/store.reducer';
import {setToken} from 'core/helpers/get-token';
import {useNavigate} from 'react-router-dom';
import {Routes} from 'router/routes';
import {IRegisterFormValues} from '../register';
import {errorToast, successToast} from "../../../core/shared/toast/toast";
import {register} from "./register.service";

export const useRegister = () => {
    const navigate = useNavigate();
    return useMutation({
        mutationFn: (credentials: IRegisterFormValues) => {
            return register(credentials);
        },
        onSuccess: () => {
            navigate(Routes.login);
            // successToast("Register Successful!");
            // console.log(data);
        },
        // onError: (error) => {
        //
        //
        // }
    });
};
