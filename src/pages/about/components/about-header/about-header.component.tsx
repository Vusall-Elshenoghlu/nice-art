import {Link} from 'react-router-dom';
import {useAboutHeaderStyles} from './about-header.style';
import {HomeIcon} from '../../../../assets/images/icons/home-icon';
import {ArrowSmallRight} from '../../../../assets/images/icons/arrows';
import {Routes} from '../../../../router/routes';
import useLocalization from '../../../../assets/lang';
import {useLeadQuery} from '../../../../core/shared/leads/actions/leads.queries';
import {Spin} from 'antd';
import LeadComponent from '../../../../core/shared/leads/component/leads.component';

const AboutHeaderComponent = () => {
    const classes = useAboutHeaderStyles();
    const translate = useLocalization();
    const {data:leads=[], isLoading} = useLeadQuery();
    const heroLead = leads.find(lead => lead.id === 5);

    if (isLoading) {
        return (
            <div className='d-flex justify-content-center align-items-center'>
                <Spin size='large' />
            </div>
        );
    }

    return (
        <div className={'container'}>
            <div className={classes.homeIconSection}>
                <Link to={Routes.home}><HomeIcon/></Link>
                <ArrowSmallRight/>
                <h2>{translate('about_breadcrumb_title')}</h2>
            </div>

            <LeadComponent isLoading={isLoading} heroLead={heroLead} file/>


        </div>
    );
};


export default AboutHeaderComponent;