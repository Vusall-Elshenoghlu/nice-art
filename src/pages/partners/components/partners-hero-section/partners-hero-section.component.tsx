import useLocalization from '../../../../assets/lang';
import {usePartnerHeroSectionStyles} from './partners-hero-section.style';
import {Link} from 'react-router-dom';
import {Routes} from '../../../../router/routes';
import {HomeIcon} from '../../../../assets/images/icons/home-icon';
import {ArrowRight, ArrowSmallRight} from '../../../../assets/images/icons/arrows';
import {useLeadQuery} from '../../../../core/shared/leads/actions/leads.queries';
import {Spin} from 'antd';
import Button from '../../../../core/shared/button/button.component';

const PartnersHeroSectionComponent = () => {
    const translate = useLocalization();
    const classes = usePartnerHeroSectionStyles();
    const {data: leads = [], isLoading} = useLeadQuery();
    const heroLead = leads.find(lead => lead.id === 9);
    if (isLoading) {
        return (
            <div className="d-flex justify-content-center align-items-center">
                <Spin size="large" />
            </div>
        );
    }
    return (
        <div className="container">
            <div className={classes.homeIconSection}>
                <Link to={Routes.home}><HomeIcon/></Link>
                <ArrowSmallRight/>
                <h2>{translate('navbar_partners')}</h2>
            </div>

            <div className={'row'}>
                <div className={'col-lg-6 col-md-6 col-sm-12 '}>
                    <h1 className={classes.titleText}>{heroLead?.title}</h1>
                </div>
                <div className={'col-lg-6 col-md-6 col-sm-12 '}>
                    <h2 className={classes.headintText}>{heroLead?.heading}</h2>
                    <p className={classes.malesudaParagraph}>{heroLead?.description} </p>
                    <Button className={classes.partnerBtn}>
                        <p>{translate('partners_hero_btn')}</p>
                        <ArrowRight/>
                    </Button>
                </div>
            </div>


        </div>
    );
};
export default PartnersHeroSectionComponent;