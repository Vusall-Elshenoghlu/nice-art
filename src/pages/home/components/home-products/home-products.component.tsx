import {useLeadQuery} from '../../../../core/shared/leads/actions/leads.queries';
import {Spin} from 'antd';
import LeadComponent from '../../../../core/shared/leads/leads.component';
import {useHomeProductsStyles} from './home-products.style';

const HomeProductsComponent = () => {
    const {data: leads = [], isLoading} = useLeadQuery();
    const classes = useHomeProductsStyles();
    const heroLead = leads.find(lead => lead.id === 3);
    return (
        <div className='container'>
            <div className={classes.wrapper}>
                <LeadComponent heroLead={heroLead} isLoading={isLoading} title tag heading />
            </div>
        </div>
    );
};
export default HomeProductsComponent;