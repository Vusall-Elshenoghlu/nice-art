import {useLeadQuery} from '../../../../core/shared/leads/actions/leads.queries';
import {Spin} from 'antd';
import LeadComponent from '../../../../core/shared/leads/leads.component';
import {Link} from 'react-router-dom';
import {Routes} from '../../../../router/routes';
import Button from '../../../../core/shared/button/button.component';
import {ArrowRight, ArrowSmallDown} from '../../../../assets/images/icons/arrows';
import useLocalization from '../../../../assets/lang';
import {useHeroSectionStyles} from './hero-section.style';

const HeroSectionComponent = () => {
    const {data: leads = [], isLoading} = useLeadQuery();
    const translate = useLocalization();
    const classes = useHeroSectionStyles();
    const heroLead = leads.find(lead => lead.id === 1);
    return (
        <div className='container mt-50'>
            <LeadComponent heroLead={heroLead} isLoading={isLoading} title={true} titleVariant={'big'} description>
                <div className={classes.buttons}>
                    <Link to={Routes.products}>
                        <Button className={classes.productsBtn}>
                            <p>{translate('home_hero_productsBtn')}</p>
                            <ArrowRight/>
                        </Button>
                    </Link>
                    <Link to={Routes.about}>
                        <Button variant='secondary' className={classes.aboutBtn}>
                            <p>{translate('home_hero_aboutBtn')}</p>
                            <ArrowSmallDown/>
                        </Button>
                    </Link>
                </div>

            </LeadComponent>
        </div>
    );
};
export default HeroSectionComponent;