import {Link} from 'react-router-dom';
import {Routes} from '../../router/routes';
import {HomeIcon} from '../../assets/images/icons/home-icon';
import {ArrowSmallRight} from '../../assets/images/icons/arrows';
import {useProductStyles} from './products-page.style';
import ProductsSectionComponent from './components/products-section/products-section.component';
import {useLeadQuery} from '../../core/shared/leads/actions/leads.queries';
import {ILeads} from '../../core/shared/leads/leads';

const ProductsPageComponent = () => {
    const classes =useProductStyles();
    const {data: products = [], isLoading}=useLeadQuery();
    if (isLoading) return <div>Loading...</div>;
    const filteredeProducts = products.filter(product => product.tag ==='Products');

    return (
        <div className={'container'}>
            <div className={classes.productIconSection}>
                <Link to={Routes.home}><HomeIcon/></Link>
                <ArrowSmallRight/>
                <h2>Products</h2>
            </div>

                {
                    filteredeProducts.map(({id, heading, description}:ILeads)=>{
                    return(
                         <div className={classes.productsTitleSection} key={id} >
                             <div className={classes.firstTitle}>
                                 <h1>Title for Products <br/>or Lorem Ipsum<br/>motto</h1>
                             </div>
                             <div className={classes.secondTitle}>
                                 <h1>{heading}</h1>
                                 <p className={classes.description}>{description}</p>
                             </div>
                         </div>
                    );
                    })
                }


            <ProductsSectionComponent/>
        </div>
    );
};
export default ProductsPageComponent;