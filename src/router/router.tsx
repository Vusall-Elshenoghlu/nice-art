import {createBrowserRouter} from 'react-router-dom';
import PublicComponent from 'core/layouts/public/public.component';
import HomeComponent from 'pages/home/home.component';
import FormComponent from 'pages/form/form.component';
import TableComponent from 'pages/table/table.component';
import {Routes} from './routes';
import NotFound from 'pages/not-found/notfound.component';
import AboutComponent from '../pages/about/about.component';
import ContactComponent from '../pages/contact/contact.component';
import ProductsComponent from '../pages/products/products.component';
import PartnersComponent from '../pages/partners/partners.component';

const router = createBrowserRouter([
    {
        element: <PublicComponent/>,
        children: [
            {
                path: Routes.home,
                element: <HomeComponent/>,
            },
            {
                path: Routes.about,
                element: <AboutComponent/>,
            },
            {
                path: Routes.contact,
                element: <ContactComponent/>,
            },
            {
                path: Routes.products,
                element: <ProductsComponent/>,
            },
            {
                path: Routes.partners,
                element: <PartnersComponent/>,
            },
        ],
    },
    {
        path: '*',
        element: <NotFound/>,
    }
], {basename: '/',});

export default router;
