import {environment} from 'core/configs/app.config';
import {useFooterStyles} from './footer.style';
import useLocalization from 'assets/lang';
import logoImg from 'assets/images/statics/Logo.png';
import {
    EmailFooterIcon,
    FacebookIcon,
    InstagramIcon,
    LinkedinIcon, LocationFooterIcon, PhoneFooterIcon,
    TwitterIcon,
    YoutubeIcon
} from '../../../../../assets/images/icons/arrows';
import {Link} from 'react-router-dom';
import {Routes} from '../../../../../router/routes';

const FooterComponent = () => {
    const classes = useFooterStyles();
    const projectName = environment.applicationName;
    const date = new Date().getFullYear();
    const translate = useLocalization();

    const siteLinks = [
        { label: translate('footer_home'), to: Routes.home },
        { label: translate('footer_about'), to: Routes.about },
        { label: translate('footer_products'), to: Routes.products },
        { label: translate('footer_partners'), to: Routes.partners },
        { label: translate('footer_contact'), to: Routes.contact },
    ];

    const contactInfo = [
        { icon: <EmailFooterIcon/>, text: translate('footer_contact_company') },
        { icon: <PhoneFooterIcon/>, text: translate('footer_phone_company') },
        { icon: <LocationFooterIcon/>, text: translate('footer_location') },
    ];

    return (
        <footer className={`${classes.footerSection}`}>
            <div className='container mt-120'>
                <div className={'row'}>
                    <div className={'col-lg-6 col-md-6 col-sm-12'}>
                        <img src={logoImg} alt={translate('footer_logo_alt')}/>
                        <p className={classes.footerSubtitle}>{translate('footer_subtitle')}</p>
                        <div className={classes.socialMediaIcons}>
                            <FacebookIcon/>
                            <TwitterIcon/>
                            <InstagramIcon/>
                            <LinkedinIcon/>
                            <YoutubeIcon/>
                        </div>
                    </div>

                    <div className={'col-lg-6 col-md-6 col-sm-12'}>
                        <div className={'row'}>
                            <div className={'col-6'}>
                                <div className={classes.leftDiv}>
                                    <h5 className={classes.headingLinks}>{translate('footer_site')}</h5>
                                    {siteLinks.map(({ label, to }, index) => (
                                        <Link
                                            key={to}
                                            to={to}
                                        >
                                            <p className={`${classes.footerParagraph} ${index === 0 ? 'mt-50' : ''}`}>
                                                {label}
                                            </p>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <div className={'col-6'}>
                                <div className={classes.rightDiv}>
                                    <h5 className={classes.headingLinks}>{translate('footer_contact')}</h5>
                                    {contactInfo.map(({ icon, text }, index) => (
                                        <div
                                            key={text}
                                            className={`${classes.footerContactDiv} ${index === 0 ? 'mt-50' : ''}`}
                                        >
                                            {icon}
                                            <p>{text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className={classes.footerBottom}>
                <div className={'container'}>
                    <div className={'row'}>
                        <div className={'col-lg-6 col-md-6 col-sm-12'}>
                            <p className={classes.copyRight}>
                                {translate('footer_copyright')} {date} {translate('footer_author')}
                            </p>
                        </div>
                        <div className={'col-lg-6 col-md-6 col-sm-12'}>
                            <p className={classes.copyRight}>
                                {translate('footer_all_rights')} | <a href='#'>{translate('footer_terms')}</a> | <a
                                href='#'>{translate('footer_privacy')}</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};


export default FooterComponent;
