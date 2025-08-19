import { useHomeProductsStyles} from './home-products.style';
import {useLeadQuery} from '../../../../core/shared/leads/actions/leads.queries';
import {Spin} from 'antd';

const HomeProductsComponent = () => {
    const classes = useHomeProductsStyles();
    const {data: leads = [], isLoading} = useLeadQuery();
    const heroLead = leads.find(lead => lead.id === 3);
    if (isLoading) {
        return (
            <div className='d-flex justify-content-center align-items-center'>
                <Spin size='large' />
            </div>
        );
    }
    return (
        <div className={'container'}>
            <div className={classes.wrapper}>
                <h6>{heroLead?.tag}</h6>
                <div className={'row'}>
                    <div className={'col-lg-6 col-md-6 col-sm-12'}>
                        <h1 className={'mt-20'}>{heroLead?.heading}</h1>
                    </div>
                    <div className={'col-lg-6 col-md-6 col-sm-12'}>
                        <p>{heroLead.description}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};
export default HomeProductsComponent;