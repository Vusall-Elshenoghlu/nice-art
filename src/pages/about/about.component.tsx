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

const AboutComponent = () => {
    const classes = useAboutStyles();
    const {data : purposes =[]}=usePurposesQuery();
    const {data: strategies=[]}=useStrategiesQuery();
    const {data:products=[], isLoading}=useLeadQuery();
    const filteredProducts=products.filter(products => products.tag==='About');
    if (isLoading) return <div>Loading...</div>;
    return (
        <div className={'container'}>
            <div className={classes.homeIconSection}>
                <Link to={Routes.home}><HomeIcon/></Link>
                <ArrowSmallRight/>
                <h2>About Us</h2>
            </div>

            {
                filteredProducts.map(({id, heading, description})=>{
                    return(
                        <div key={id} className={classes.aboutTitleSection}>
                            <div className={classes.firstTitle}>
                                <h1>Title for about us<br/>or Lorem Ipsum<br/>motto</h1>
                            </div>
                            <div className={classes.secondTitle}>
                                <p className={classes.bizKimik}>Biz kimik?</p>
                                <h1>{heading}</h1>
                                <p className={classes.description}>{description}</p>
                            </div>
                        </div>
                    );
                })
            }
            <div className={classes.imgSection}>
                <img src={mainImg} alt='mainImg' />
            </div>
            <div className={classes.ourGoals}>
                <div className={classes.leftSection}>
                    <span>Məqsədimiz</span>
                    <h2>Id duis id turpis mi <br/> quisque. Nulla.</h2>
                    <p className={classes.description}>Malesuada tortor fringilla ut faucibus. Urna tellus lectus platea turpis <br/> non. Tellus odio eu ante tincidunt vivamus nunc nibh arcu, augue.<br/> Egestas et amet neque placerat aliquam tempo</p>
                </div>

                <div className={classes.backgroundSection}>
                    <div className={classes.rightSection}>
                        {!purposes || purposes.length === 0 ? (
                                <div>No purposes found</div>
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
                    <span>Strategiyamız</span>
                    <h2>Id duis id turpis mi<br/>quisque. Nulla.</h2>
                </div>

                <div className={classes.strategyCards}>
                    {!strategies || strategies.length === 0 ? (
                            <div>No strategies found</div>
                        ) :
                        strategies.map(({title, description})=>{
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