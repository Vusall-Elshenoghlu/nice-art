import {Link} from 'react-router-dom';
import {Routes} from '../../router/routes';
import {HomeIcon} from '../../assets/images/icons/home-icon';
import {ArrowSmallRight} from '../../assets/images/icons/arrows';
import {useProductStyles} from './products-page.style';
import ProductsSectionComponent from './components/products-section/products-section.component';
import {useLeadQuery} from '../../core/shared/leads/actions/leads.queries';
import {ILeads} from '../../core/shared/leads/component/leads';
import useLocalization from '../../assets/lang';
import {Spin} from 'antd';

const ProductsPageComponent = () => {
    const classes = useProductStyles();
    const translate = useLocalization();
    const {data: products = [], isLoading} = useLeadQuery();

    if (isLoading) {
        return (
            <div className='d-flex justify-content-center align-items-center'>
                <Spin size='large' />
            </div>
        );
    }

    const filteredeProducts = products.filter(product => product.tag === 'Products');

    return (
        <div className={'container'}>
            <div className={classes.productIconSection}>
                <Link to={Routes.home}><HomeIcon/></Link>
                <ArrowSmallRight/>
                <h2>{translate('products_breadcrumb_title')}</h2>
            </div>

            {filteredeProducts.map(({id, heading, description}: ILeads) => {
                return (
                    <div className={classes.productsTitleSection} key={id}>
                        <div className={classes.firstTitle}>
                            <h1>{translate('products_title')}</h1>
                        </div>
                        <div className={classes.secondTitle}>
                            <h1>{heading}</h1>
                            <p className={classes.description}>{description}</p>
                        </div>
                    </div>
                );
            })}

            <ProductsSectionComponent/>
        </div>
    );
};

export default ProductsPageComponent;
