import {useLeadQuery} from '../../../../core/shared/leads/actions/leads.queries';
import {Spin} from 'antd';
import LeadComponent from '../../../../core/shared/leads/component/leads.component';
import {useHomeProductsStyles} from './home-products.style';

const HomeProductsComponent = () => {
    const {data: leads = [], isLoading} = useLeadQuery();
    const classes = useHomeProductsStyles();
    const heroLead = leads.find(lead => lead.id === 3);
    if (isLoading) {
        return (
            <div className='d-flex justify-content-center align-items-center'>
                <Spin size='large'/>
            </div>
        );
    }
    return (
        <div className='container'>
            <div className={classes.wrapper}>
                <LeadComponent heroLead={heroLead} isLoading={isLoading} isTagLeft={true} isHeadingLeft={true}
                               isDescriptionRight={true}/>
            </div>
        </div>
    );
};
export default HomeProductsComponent;