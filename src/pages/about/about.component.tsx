import {HomeIcon} from '../../assets/images/icons/home-icon';
import {ArrowSmallRight} from '../../assets/images/icons/arrows';
import {useAboutStyles} from './about.style';
import {Link} from 'react-router-dom';
import {Routes} from '../../router/routes';
import mainImg from '/src/assets/images/statics/about-page-image.png';
import {FingerPrint} from '../../assets/images/icons/finger-print';
import {useLeadQuery} from '../../core/shared/leads/actions/leads.queries';
import {usePurposesQuery} from './actions/purposes/purposes.query';
import {useStrategiesQuery} from './actions/strategies/strategies.query';
import useLocalization from '../../assets/lang';

const AboutComponent = () => {
    const classes = useAboutStyles();
    const translate = useLocalization();
    const {data : purposes =[]} = usePurposesQuery();
    const {data: strategies=[]} = useStrategiesQuery();
    const {data:products=[], isLoading} = useLeadQuery();
    const filteredProducts = products.filter(products => products.tag==='About');

    if (isLoading) return <div>{translate('about_loading')}</div>;

    return (
        <div className={'container'}>
            <div className={classes.homeIconSection}>
                <Link to={Routes.home}><HomeIcon/></Link>
                <ArrowSmallRight/>
                <h2>{translate('about_breadcrumb_title')}</h2>
            </div>

            {filteredProducts.map(({id, heading, description}) => {
                return(
                    <div key={id} className={classes.aboutTitleSection}>
                        <div className={classes.firstTitle}>
                            <h1>{translate('about_title')}</h1>
                        </div>
                        <div className={classes.secondTitle}>
                            <p className={classes.bizKimik}>{translate('about_who_we_are')}</p>
                            <h1>{heading}</h1>
                            <p className={classes.description}>{description}</p>
                        </div>
                    </div>
                );
            })}

            <div className={classes.imgSection}>
                <img src={mainImg} alt={translate('about_main_image_alt')} />
            </div>

            <div className={classes.ourGoals}>
                <div className={classes.leftSection}>
                    <span>{translate('about_purpose')}</span>
                    <h2>{translate('about_purpose_subtitle')}</h2>
                    <p className={classes.description}>{translate('about_purpose_description')}</p>
                </div>

                <div className={classes.backgroundSection}>
                    <div className={classes.rightSection}>
                        {!purposes || purposes.length === 0 ? (
                                <div>{translate('about_no_purposes')}</div>
                            ) :
                            purposes.map(({title, description, id}) => {
                                return (
                                    <div
                                        className={classes.goalsSection}
                                        key={id}
                                    >
                                        <div><FingerPrint/></div>
                                        <div className={classes.rightTitle}>
                                            <h2>{title}</h2>
                                            <p>{description}</p>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>

            <div className={classes.strategySection}>
                <div className={classes.strategyTitle}>
                    <span>{translate('about_strategy')}</span>
                    <h2>{translate('about_strategy_subtitle')}</h2>
                </div>

                <div className={classes.strategyCards}>
                    {!strategies || strategies.length === 0 ? (
                            <div>{translate('about_no_strategies')}</div>
                        ) :
                        strategies.map(({title, description}) => {
                            return (
                                <div key={title} className={classes.strategyCard}>
                                    <div className={classes.strategyFingerPrint}><FingerPrint/></div>
                                    <h3>{title}</h3>
                                    <p>{description}</p>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
};


export default AboutComponent;