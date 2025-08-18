import {useContactDiscoverusStyles} from './contact-discover-us.style';
import {Link} from 'react-router-dom';
import {Routes} from '../../../../router/routes';
import {HomeIcon} from '../../../../assets/images/icons/home-icon';
import {ArrowSmallRight} from '../../../../assets/images/icons/arrows';
import {useContactDiscoverUsQuery} from './actions/contact-discover-us.queries';

const ContactDiscoverUsComponent = () => {
    const classes = useContactDiscoverusStyles();
    const {data: contact = [], isLoading} = useContactDiscoverUsQuery();
    return (
        <div className='container'>
            <div className={classes.homeIconSection}>
                <Link to={Routes.home}><HomeIcon/></Link>
                <ArrowSmallRight/>
                <h2>About Us</h2>
            </div>

            <div className={classes.discoverUs}>
                <div className={'row'}>
                    <div className={'col-lg-6 col-md-6 col-sm-12'}>
                        <div className={classes.leftDiv}>
                            <h1>DISCOVER US</h1>
                            <h6>
                                Flick is here to help you; <br/>
                                Our experts are available to answer any questions you might have. We’ve got the answers.
                            </h6>
                            <h2>Visit Us</h2>
                            <a href="#">Office no. G-02. Building 1, Ground <br/> Floor. Dubai Media City – Dubai</a>
                        </div>
                    </div>
                    <div className={'col-lg-6 col-md-6 col-sm-12'}>
                        <div className={classes.rightDiv}>
                            right
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactDiscoverUsComponent;