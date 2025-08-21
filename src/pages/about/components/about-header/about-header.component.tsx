import {Link} from 'react-router-dom';
import mainImg from '/src/assets/images/statics/about-page-image.png';
import {useAboutHeaderStyles} from './about-header.style';
import {HomeIcon} from '../../../../assets/images/icons/home-icon';
import {ArrowSmallRight} from '../../../../assets/images/icons/arrows';
import {Routes} from '../../../../router/routes';
import useLocalization from '../../../../assets/lang';
import {useLeadQuery} from '../../../../core/shared/leads/actions/leads.queries';

const AboutHeaderComponent = () => {
    const classes = useAboutHeaderStyles();
    const translate = useLocalization();
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

        </div>
    );
};


export default AboutHeaderComponent;