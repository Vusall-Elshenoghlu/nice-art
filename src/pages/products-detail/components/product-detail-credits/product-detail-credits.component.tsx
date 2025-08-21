import {useProductDetailCreditsStyles} from './product-detal-credits.style';
import {useParams} from 'react-router-dom';
import {useProductsQuery} from '../../../products/components/products-section/actions/products-section.queries';
import {Wallet} from '../../../../assets/images/icons/wallet';
import {DocumentPercentage} from '../../../../assets/images/icons/document-percentage';
import {CalendarIcon} from '../../../../assets/images/icons/calendar-icon';
import {MultipleDocumentPercentage} from '../../../../assets/images/icons/multiple-document-percentage';
import {CreditCard} from '../../../../assets/images/icons/credit-card';

const ProductDetailCreditsComponent = () => {
    const classes = useProductDetailCreditsStyles();
    const { id } = useParams<{ id: string }>();
    const { data: products = [], isLoading } = useProductsQuery();

    if (isLoading) return <div>Loading...</div>;

    const product = products.find((p:any) => p.id === Number(id));

    if (!product) return <div>Product not found</div>;
    if (!product.about) return <div>No credit info available</div>;

    return (
        <div className='container'>
            <div className={classes.titleSection}>
                <div className={classes.title}>
                    <p>Kredit Haqqında</p>
                    <h2>{product.about.title}</h2>
                </div>
                <p>{product.about.description}</p>
            </div>

            <div className={classes.creditsGrid}>
                <div className={classes.creditItem}>
                    <div className={classes.iconPlaceholder}><Wallet/></div>
                    <div className={classes.creditContent}>
                        <h3>Kreditin məbləği (AZN)</h3>
                        <p>{product.features.amount}</p>
                    </div>
                </div>

                <div className={classes.creditItem}>
                    <div className={classes.iconPlaceholder}><CreditCard/></div>
                    <div className={classes.creditContent}>
                        <h3>Kreditin ilkin ödənişi (%)</h3>
                        <p>{product.features.initialPayment}</p>
                    </div>
                </div>

                <div className={classes.creditItem}>
                    <div className={classes.iconPlaceholder}><DocumentPercentage/></div>
                    <div className={classes.creditContent}>
                        <h3>Kreditin faiz dərəcəsi (%)</h3>
                        <p>{product.features.percentage}</p>
                    </div>
                </div>

                <div className={classes.creditItem}>
                    <div className={classes.iconPlaceholder}><CalendarIcon/></div>
                    <div className={classes.creditContent}>
                        <h3>Kreditin müddəti (ay)</h3>
                        <p>{product.features.period}</p>
                    </div>
                </div>

                <div className={classes.creditItem}>
                    <div className={classes.iconPlaceholder}><MultipleDocumentPercentage/></div>
                    <div className={classes.creditContent}>
                        <h3>Kreditin razılaşdırılması üçün kommisiya haqqı (%)</h3>
                        <p>{product.features.comission}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailCreditsComponent;