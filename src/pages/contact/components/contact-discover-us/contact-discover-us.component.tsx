import {useContactDiscoverusStyles} from './contact-discover-us.style';
import {Link} from 'react-router-dom';
import {Routes} from '../../../../router/routes';
import {HomeIcon} from '../../../../assets/images/icons/home-icon';
import {ArrowSmallRight} from '../../../../assets/images/icons/arrows';
import {useContactDiscoverUsQuery, useContactImagesQuery} from '../../actions/contact-discover-us.queries';
import {IContactImages} from './contact-discover-us';
import {Spin} from 'antd';
import useLocalization from '../../../../assets/lang';

const ContactDiscoverUsComponent = () => {
    const classes = useContactDiscoverusStyles();
    const {data: contact = [], isLoading: isContactDiscoverLoading} = useContactDiscoverUsQuery();
    const {data: images = [], isLoading: isContactImages} = useContactImagesQuery();
    const translate = useLocalization();

    if (isContactDiscoverLoading || isContactImages) {
        return (
            <div className="d-flex justify-content-center align-items-center">
                <Spin size="large"/>
            </div>
        );
    }
    return (
        <div className='container'>
            <div className={classes.homeIconSection}>
                <Link to={Routes.home}><HomeIcon/></Link>
                <ArrowSmallRight/>
                <h2>{translate('contact_discover_home_icon')}</h2>
            </div>

            <div className={classes.discoverUs}>
                <div className={'row'}>
                    <div className={'col-lg-6 col-md-6 col-sm-12'}>
                        <div className={classes.leftDiv}>
                            <h1>{translate('contact_discover_discover_us')}</h1>
                            <h6>
                                {translate('contact_discover_discover_description')}
                            </h6>
                            <h2>{translate('contact_discover_visit')}</h2>
                            <a href="#">{translate('contact_discover_visit_description')}</a>
                            <h6>{translate('contact_discover_subtitle')}</h6>
                            <h2>{translate('contact_discover_email')}</h2>
                            <a href="#">{contact.email}</a>
                            <h2>{translate('contact_discover_call')}</h2>
                            <a href="#" className={classes.aTeg}>{contact.phone}</a>
                        </div>
                    </div>
                    <div className={'col-lg-6 col-md-6 col-sm-12'}>
                        <div className={classes.rightDiv}>
                            <div className={classes.gallery}>
                                {images.map((image: IContactImages, index: any) => (
                                    <img
                                        key={index}
                                        src={image.url}
                                        alt={image.url}
                                        className={classes.image}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactDiscoverUsComponent;