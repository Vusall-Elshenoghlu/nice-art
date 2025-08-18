import {HomeIcon} from '../../assets/images/icons/home-icon';
import {ArrowSmallRight} from '../../assets/images/icons/arrows';
import {useAboutStyles} from './about.style';
import {Link} from 'react-router-dom';
import {Routes} from '../../router/routes';
import mainImg from '/src/assets/images/statics/about-page-image.png';
import {FingerPrint} from '../../assets/images/icons/finger-print';
import {rem} from '../../assets/styles/abstracts/functions';

const AboutComponent = () => {
    const classes = useAboutStyles();
    const goals=[
        {
            title:'Adipiscing phasellus orci in dictumst faucibus ullamcorper odio faucibus. Nunc.',
            text:'Malesuada tortor fringilla ut faucibus. Urna tellus lectus platea turpis non. Tellus odio eu ante ',
            classname:'ml-0',
        },
        {
            title:'Adipiscing phasellus orci in dictumst faucibus ullamcorper odio faucibus. Nunc.',
            text:'Malesuada tortor fringilla ut faucibus. Urna tellus lectus platea turpis non. Tellus odio eu ante ',
            classname:'ml-100',
        },
        {
            title:'Adipiscing phasellus orci in dictumst faucibus ullamcorper odio faucibus. Nunc.',
            text:'Malesuada tortor fringilla ut faucibus. Urna tellus lectus platea turpis non. Tellus odio eu ante ',
            classname:'ml-0',
        },
    ];
    const strategies=[
        {
            title:'Title',
            text:'Pulvinar amet ullamcorper nec nullam accumsan, iaculis risus. Feugiat nulla ni imperdiet tellus sit lobortis. Cursus adipiscing aliquam dignissim.',
        },
        {
            title:'Title',
            text:'Pulvinar amet ullamcorper nec nullam accumsan, iaculis risus. Feugiat nulla ni imperdiet tellus sit lobortis. Cursus adipiscing aliquam dignissim.',
        }
    ];
    return (
        <div className={'container'}>
            <div className={classes.homeIconSection}>
                <Link to={Routes.home}><HomeIcon/></Link>
                <ArrowSmallRight/>
                <h2>About Us</h2>
            </div>

            <div className={classes.aboutTitleSection}>
                <div className={classes.firstTitle}>
                    <h1>Title for about us<br/>or Lorem Ipsum<br/>motto</h1>
                </div>
                <div className={classes.secondTitle}>
                    <p className={classes.bizKimik}>Biz kimik?</p>
                    <h1>Lectus mauris pulvinar<br/>sit?</h1>
                    <p className={classes.description}>
                        Vehicula elit est, neque non mattis pharetra, urna lectus magnis. Ultricies tellus
                        adipiscing a sem ultrices eu pulvinar. Urna egestas est aliquet facilisis elit sit. Massa
                        libero turpis facilisi mattis sit ac consectetur malesuada et. Urna, orci arcu senectus
                        mattis nam euismod cum cursus. Enim nunc quis commodo leo libero diam.
                    </p>
                </div>
            </div>
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
                        {
                            goals.map(({title, text, classname}, index) => {
                                return (
                                    <div
                                        className={classes.goalsSection}
                                        key={index}
                                        style={{
                                            marginLeft: classname === 'ml-100' ? rem(100) : '0',
                                        }}
                                    >
                                        <div><FingerPrint/></div>
                                        <div className={classes.rightTitle}>
                                            <h2>{title}</h2>
                                            <p>{text}</p>
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
                    {
                        strategies.map(({title, text})=>{
                            return (
                                <div key={title} className={classes.strategyCard}>
                                    <div className={classes.strategyFingerPrint}><FingerPrint/></div>
                                    <h3>{title}</h3>
                                    <p>{text}</p>
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