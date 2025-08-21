import { useProductDetailStyles } from './products-detail-header.style';
import {Link, useParams} from 'react-router-dom';
import { useProductsQuery } from '../../../products/components/products-section/actions/products-section.queries';
import {Routes} from '../../../../router/routes';
import {HomeIcon} from '../../../../assets/images/icons/home-icon';
import {ArrowSmallRight} from '../../../../assets/images/icons/arrows';
import useLocalization from '../../../../assets/lang';

const ProductsDetailHeaderComponent = () => {
    const classes = useProductDetailStyles();
    const translate = useLocalization();
    const { id } = useParams<{ id: string }>();
    const { data: products = [], isLoading } = useProductsQuery();

    if (isLoading) return <div>{translate('products_detail_loading')}</div>;

    const product = products.find((p: any) => p.id === Number(id));

    if (!product) return <div>{translate('products_detail_not_found')}</div>;

    return (
        <div className={'container'}>
            <div className={classes.productIconSection}>
                <Link to={Routes.home}><HomeIcon/></Link>
                <h2 className={classes.productName}>
                    <ArrowSmallRight /> <Link className={classes.productsLink} to={Routes.products}>{translate('products_detail_products')}</Link> <ArrowSmallRight />{' '}
                    <span>{product?.name}</span>
                </h2>
            </div>
            <div className={classes.productTitle}>
                <h2>{product?.name}</h2>
                <div className={classes.imageContainer}>
                    <img
                        src={product?.file?.url}
                        alt={product?.name}
                        className={classes.productImage}
                        onError={(e) => {
                            e.currentTarget.src = 'https://i.ibb.co/WPQXHZY/product-4.png';
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductsDetailHeaderComponent;
