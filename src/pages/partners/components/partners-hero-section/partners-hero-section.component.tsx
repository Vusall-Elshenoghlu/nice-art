import useLocalization from '../../../../assets/lang';
import {usePartnerHeroSectionStyles} from './partners-hero-section.style';
import {Link} from 'react-router-dom';
import {Routes} from '../../../../router/routes';
import {HomeIcon} from '../../../../assets/images/icons/home-icon';
import { ArrowSmallRight} from '../../../../assets/images/icons/arrows';
import {useLeadQuery} from '../../../../core/shared/leads/actions/leads.queries';
import {Spin} from 'antd';
import LeadComponent from '../../../../core/shared/leads/component/leads.component';

 const PartnersHeroSectionComponent = () => {
    const translate = useLocalization();
    const classes = usePartnerHeroSectionStyles();
    const {data: leads = [], isLoading} = useLeadQuery();
    const heroLead = leads.find(lead => lead.id === 9);
    if (isLoading) {
        return (
            <div className='d-flex justify-content-center align-items-center'>
                <Spin size='large' />
            </div>
        );
    }
    return (
        <div className='container'>
            <div className={classes.homeIconSection}>
                <Link to={Routes.home}><HomeIcon/></Link>
                <ArrowSmallRight/>
                <h2>{translate('navbar_partners')}</h2>
            </div>

            <LeadComponent heroLead={heroLead} isLoading={isLoading} isTitleBig={true}  isOneButton={true}/>


        </div>
    );
};
export default PartnersHeroSectionComponent;