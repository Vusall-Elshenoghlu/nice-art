import useLocalization from '../../../../assets/lang';
import {useHomeCreditsStyles} from '../../../home/components/home-credits/home-credits.style';
import CreditFormComponent from '../../../../core/shared/credit-form/credit-form.component';

const ProductApplyCreditComponent = () => {
    const translate = useLocalization();
    const classes = useHomeCreditsStyles();
    return (
        <div className='mt-50 container mb-100'>
            <div className={classes.wrapper}>
                <div className={'row'}>
                    <div className={'col-lg-1'}>
                        <div className={classes.leftDiv}>
                            <h6>{translate('product_apply_title')}</h6>
                            <h1>{translate('product_apply_subtitle')}</h1>
                            <p>{translate('product_apply_description')}</p>
                        </div>
                    </div>
                    <div className={'col-lg-11'}>
                        <div className={classes.rightDiv}>
                            <div className={classes.creditDiv}>
                                <CreditFormComponent/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductApplyCreditComponent;