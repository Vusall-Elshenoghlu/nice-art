import {useProductsSectionStyles} from './products-section.style';
import {useProductsQuery} from './actions/products-section.queries';
import {Link} from 'react-router-dom';

const ProductsSectionComponent = () => {
    const classes = useProductsSectionStyles();
    const { data: products = [], isLoading, error } = useProductsQuery();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading products</div>;


    return (
        <div className={'container'}>
            <div className={classes.productsSection}>
                {!products || products.length === 0 ? (
                    <div>No products found</div>
                ) : (
                    products.map((product: any) => {
                        return (
                            <div key={product?.id} className={classes.productCard}>
                                <div className={classes.cardHeader}>
                                    <div className={classes.headerContent}>
                                        <h3 className={classes.cardTitle}>
                                            {product?.name || product?.about?.title }
                                        </h3>
                                        <p className={classes.cardSubtitle}>
                                            {product?.about?.description }
                                        </p>
                                    </div>

                                    <div className={classes.cardContent}>
                                        <div className={classes.loanDetails}>
                                            <div className={classes.detailItem}>
                                                <span className={classes.detailLabel}>Müddət (Ay)</span>
                                                <span className={classes.detailValue}>
                                             {product?.features?.period}
                                         </span>
                                            </div>
                                            <div className={classes.detailItem}>
                                                <span className={classes.detailLabel}>Məbləğ (AZN)</span>
                                                <span className={classes.detailValue}>
                                             {product?.features?.amount}
                                         </span>
                                            </div>
                                            <div className={classes.detailItem}>
                                                <span className={classes.detailLabel}>Faiz dərəcəsi (%)</span>
                                                <span className={classes.detailValue}>
                                            {product?.features?.percentage}
                                        </span>
                                            </div>
                                        </div>
                                    </div>

                                   <Link to={`/products/${product.id}`}>
                                       <button className={classes.applyButton}>
                                           Apply loan
                                           <span className={classes.arrow}>→</span>
                                       </button>
                                   </Link>

                                </div>



                                <div className={classes.imageContainer}>
                                    <img
                                        src={product?.file?.url}
                                        alt={product?.name || 'Product'}
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