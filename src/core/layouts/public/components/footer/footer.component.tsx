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

const FooterComponent = () => {
    const classes = useFooterStyles();
    const projectName = environment.applicationName;
    const date = new Date().getFullYear();
    const translate = useLocalization();


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
                                    <p className={`${classes.footerParagraph} mt-50`}>{translate('footer_home')}</p>
                                    <p className={classes.footerParagraph}>{translate('footer_about')}</p>
                                    <p className={classes.footerParagraph}>{translate('footer_products')}</p>
                                    <p className={classes.footerParagraph}>{translate('footer_partners')}</p>
                                    <p className={classes.footerParagraph}>{translate('footer_contact')}</p>
                                </div>
                            </div>
                            <div className={'col-6'}>
                                <div className={classes.rightDiv}>
                                    <h5 className={classes.headingLinks}>{translate('footer_contact')}</h5>
                                    <div className={`${classes.footerContactDiv} mt-50`}>
                                        <EmailFooterIcon/>
                                        <p>{translate('footer_contact_company')}</p>
                                    </div>
                                    <div className={classes.footerContactDiv}>
                                        <PhoneFooterIcon/>
                                        <p>{translate('footer_phone_company')}</p>
                                    </div>
                                    <div className={classes.footerContactDiv}>
                                        <LocationFooterIcon/>
                                        <p>{translate('footer_location')}</p>
                                    </div>
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
                            <p className={classes.copyRight}>{translate('footer_copyright')} {date} {translate('footer_author')}</p>
                        </div>
                        <div className={'col-lg-6 col-md-6 col-sm-12'}>
                            <p className={classes.copyRight}>{translate('footer_all_rights')}  | <a href='#'>{translate('footer_terms')}</a>  | <a
                                href="#">{translate('footer_privacy')}</a></p>

                        </div>

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;
