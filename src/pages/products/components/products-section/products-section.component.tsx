import {useProductsSectionStyles} from './products-section.style';
import {useProductsQuery} from './actions/products-section.queries';
import {Link} from 'react-router-dom';
import useLocalization from '../../../../assets/lang';
import {Spin} from "antd";


const ProductsSectionComponent = () => {
    const classes = useProductsSectionStyles();
    const translate = useLocalization();
    const { data: products = [], isLoading, error } = useProductsQuery();

    if (isLoading) {
        return (
            <div className='d-flex justify-content-center align-items-center'>
                <Spin size='large' />
            </div>
        );
    }
    if (error) return <div>{translate('products_section_error')}</div>;

    return (
        <div className={'container'}>
            <div className={classes.productsSection}>
                {!products || products.length === 0 ? (
                    <div>{translate('products_section_no_products')}</div>
                ) : (
                    products.map((product: any) => {
                        return (
                            <div key={product?.id} className={classes.productCard}>
                                <div className={classes.cardHeader}>
                                    <div className={classes.headerContent}>
                                        <h3 className={classes.cardTitle}>
                                            {product?.name || product?.about?.title}
                                        </h3>
                                        <p className={classes.cardSubtitle}>
                                            {product?.about?.description}
                                        </p>
                                    </div>

                                    <div className={classes.cardContent}>
                                        <div className={classes.loanDetails}>
                                            <div className={classes.detailItem}>
                                                <span className={classes.detailLabel}>{translate('products_section_period')}</span>
                                                <span className={classes.detailValue}>{product?.features?.period}</span>
                                            </div>
                                            <div className={classes.detailItem}>
                                                <span className={classes.detailLabel}>{translate('products_section_amount')}</span>
                                                <span className={classes.detailValue}>{product?.features?.amount}</span>
                                            </div>
                                            <div className={classes.detailItem}>
                                                <span className={classes.detailLabel}>{translate('products_section_percentage')}</span>
                                                <span className={classes.detailValue}>{product?.features?.percentage}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <Link to={`/products/${product.id}`}>
                                        <button className={classes.applyButton}>
                                            {translate('products_section_apply_loan')}
                                            <span className={classes.arrow}>→</span>
                                        </button>
                                    </Link>
                                </div>

                                <div className={classes.imageContainer}>
                                    <img
                                        src={product?.file?.url}
                                        alt={product?.name || translate('products_section_image_alt')}
                                        className={classes.productImage}
                                        onError={(e) => {
                                            e.currentTarget.src = 'https://i.ibb.co/WPQXHZY/product-4.png';
                                        }}
                                    />
                                </div>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
};

export default ProductsSectionComponent;
