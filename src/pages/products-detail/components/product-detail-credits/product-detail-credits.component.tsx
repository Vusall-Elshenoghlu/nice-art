import {useProductDetailCreditsStyles} from './product-detal-credits.style';
import {useParams} from 'react-router-dom';
import {useProductsQuery} from '../../../products/components/products-section/actions/products-section.queries';
import {Wallet} from '../../../../assets/images/icons/wallet';
import {DocumentPercentage} from '../../../../assets/images/icons/document-percentage';
import {CalendarIcon} from '../../../../assets/images/icons/calendar-icon';
import {MultipleDocumentPercentage} from '../../../../assets/images/icons/multiple-document-percentage';
import {CreditCard} from '../../../../assets/images/icons/credit-card';
import useLocalization from '../../../../assets/lang';

const ProductDetailCreditsComponent = () => {
    const classes = useProductDetailCreditsStyles();
    const translate = useLocalization();
    const { id } = useParams<{ id: string }>();
    const { data: products = [], isLoading } = useProductsQuery();

    if (isLoading) return <div>{translate('product_detail_loading')}</div>;

    const product = products.find((p:any) => p.id === Number(id));

    if (!product) return <div>{translate('product_detail_not_found')}</div>;
    if (!product.about) return <div>{translate('product_detail_no_info')}</div>;

    return (
        <div className='container'>
            <div className={classes.titleSection}>
                <div className={classes.title}>
                    <p>{translate('product_detail_title')}</p>
                    <h2>{product.about.title}</h2>
                </div>
                <p>{product.about.description}</p>
            </div>

            <div className={classes.creditsGrid}>
                <div className={classes.creditItem}>
                    <div className={classes.iconPlaceholder}><Wallet/></div>
                    <div className={classes.creditContent}>
                        <h3>{translate('product_detail_amount')}</h3>
                        <p>{product.features.amount}</p>
                    </div>
                </div>

                <div className={classes.creditItem}>
                    <div className={classes.iconPlaceholder}><CreditCard/></div>
                    <div className={classes.creditContent}>
                        <h3>{translate('product_detail_initial_payment')}</h3>
                        <p>{product.features.initialPayment}</p>
                    </div>
                </div>

                <div className={classes.creditItem}>
                    <div className={classes.iconPlaceholder}><DocumentPercentage/></div>
                    <div className={classes.creditContent}>
                        <h3>{translate('product_detail_percentage')}</h3>
                        <p>{product.features.percentage}</p>
                    </div>
                </div>

                <div className={classes.creditItem}>
                    <div className={classes.iconPlaceholder}><CalendarIcon/></div>
                    <div className={classes.creditContent}>
                        <h3>{translate('product_detail_period')}</h3>
                        <p>{product.features.period}</p>
                    </div>
                </div>

                <div className={classes.creditItem}>
                    <div className={classes.iconPlaceholder}><MultipleDocumentPercentage/></div>
                    <div className={classes.creditContent}>
                        <h3>{translate('product_detail_comission')}</h3>
                        <p>{product.features.comission}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailCreditsComponent;
