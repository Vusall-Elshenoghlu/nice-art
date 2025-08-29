import {useLeadQuery} from '../../../../core/shared/leads/actions/leads.queries';
import {Spin} from 'antd';
import LeadComponent from '../../../../core/shared/leads/component/leads.component';

const HeroSectionComponent = () => {
    const {data: leads = [], isLoading} = useLeadQuery();
    const heroLead = leads.find(lead => lead.id === 1);
    if (isLoading) {
        return (
            <div className='d-flex justify-content-center align-items-center'>
                <Spin size='large'/>
            </div>
        );
    }
    return (
        <div className='container mt-50'>
            <LeadComponent heroLead={heroLead} isLoading={isLoading} />
        </div>
    );
};
export default HeroSectionComponent;