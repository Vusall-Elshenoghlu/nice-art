import {useLeadQuery} from '../../../../core/shared/leads/actions/leads.queries';
import {Spin} from 'antd';
import LeadComponent from '../../../../core/shared/leads/component/leads.component';

const HomeProductsComponent = () => {
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
        <>
        <LeadComponent heroLead={heroLead} isLoading={isLoading}/>

        </>
    );
};
export default HomeProductsComponent;