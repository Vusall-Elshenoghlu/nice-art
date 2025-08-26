export enum Routes {
    default = '/',
    auth = '/auth',
    home = '/',
    table = '/table',
    login = '/auth/login',
    about = '/about',
    products = '/products',
    products_detail='/products/:id',
    partners = '/partners',
    contact = '/contact',
}


export const goTo = (route: string, param: string | number) => {
    return route + '/' + param;
};

export const goToWithQuery = (route: string, param: any) => {
    let path = route + '?';
    if (param)
        for (const key in param) {
            if (path.substr(path.length - 1) !== '?')
                path += '&';
            path += key + '=' + param[`${key}`];
        }
    return path;
};
