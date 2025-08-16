import {useHeroSectionStyles} from './hero-section.style';
import Button from '../../../../core/shared/button/button.component';
import {ArrowSmallDown, ArrowSmallRight} from '../../../../assets/images/icons/arrows';
import useLocalization from '../../../../assets/lang';

const HeroSectionComponent = () => {
    const classes = useHeroSectionStyles();
    const translate = useLocalization();
    return (
        <div className='container mt-50'>
                <div className={'row'}>
                    <div className={'col-lg-6 col-md-6 col-sm-12 '}>
                        <h1 className={classes.headingText}>{translate('home_hero_headingText')}</h1>
                    </div>
                    <div className={'col-lg-6 col-md-6 col-sm-12 '}>
                        <p className={classes.malesudaParagraph}>{translate('home_hero_malesudaParagraph')} </p>
                        <div className={classes.buttons}>
                                    <Button className={classes.productsBtn}>
                                        <p>{translate('home_hero_productsBtn')}</p>
                                        <ArrowSmallRight/>
                                    </Button>
                                    <Button className={classes.aboutBtn}>
                                        <p>{translate('home_hero_aboutBtn')}</p>
                                        <ArrowSmallDown/>
                                    </Button>

                            </div>
                        </div>
                    </div>
                </div>
    );
};
export default HeroSectionComponent;