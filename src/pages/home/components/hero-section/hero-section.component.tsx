import {useHeroSectionStyles} from './hero-section.style';
import Button from '../../../../core/shared/button/button.component';
import {ArrowRight, ArrowSmallDown} from '../../../../assets/images/icons/arrows';
import useLocalization from '../../../../assets/lang';
import {useLeadQuery} from '../../../../core/shared/leads/actions/leads.queries';
import {Spin} from 'antd';
import {Link} from 'react-router-dom';
import {Routes} from '../../../../router/routes';

const HeroSectionComponent = () => {
    const classes = useHeroSectionStyles();
    const translate = useLocalization();
    const {data: leads = [], isLoading} = useLeadQuery();
    const heroLead = leads.find(lead => lead.id === 1);
    if (isLoading) {
        return (
            <div className='d-flex justify-content-center align-items-center'>
                <Spin size='large' />
            </div>
        );
    }
    return (
        <div className='container mt-50'>
                <div className={'row'}>
                    <div className={'col-lg-6 col-md-6 col-sm-12 '}>
                        <h1 className={classes.headingText}>{heroLead?.title}</h1>
                    </div>
                    <div className={'col-lg-6 col-md-6 col-sm-12 '}>
                        <p className={classes.malesudaParagraph}>{heroLead?.description} </p>
                        <div className={classes.buttons}>
                                   <Link to={Routes.products}>
                                       <Button className={classes.productsBtn}>
                                           <p>{translate('home_hero_productsBtn')}</p>
                                           <ArrowRight/>
                                       </Button>
                                   </Link>
                                    <Link to={Routes.about}>
                                        <Button className={classes.aboutBtn}>
                                            <p>{translate('home_hero_aboutBtn')}</p>
                                            <ArrowSmallDown/>
                                        </Button>
                                    </Link>

                            </div>
                        </div>
                    </div>
                </div>
    );
};
export default HeroSectionComponent;