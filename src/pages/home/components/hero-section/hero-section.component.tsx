import {useHeroSectionStyles} from './hero-section.style';
import Button from '../../../../core/shared/button/button.component';
import {ArrowDown, ArrowSmallDown, ArrowSmallRight} from '../../../../assets/images/icons/arrows';

const HeroSectionComponent = () => {
    const classes = useHeroSectionStyles();
    return (
        <div className='container mt-50'>
            <div className={classes.wrapper}>
                <div className={'row'}>
                    <div className={'col-lg-6 col-md-6 col-sm-12 '}>
                        <h1 className={classes.headingText}>We help you find the perfect loan</h1>
                    </div>
                    <div className={'col-lg-6 col-md-6 col-sm-12 '}>
                        <p className={classes.malesudaParagraph}>Malesuada pellentesque bibendum enim eu sit. Tincidunt eget mi est, egestas. Nunc, dignissim amet, purus amet. Amet dictum sit elit urna non purus, gravida commodo. </p>
                        <div className={classes.buttons}>
                                    <Button className={classes.productsBtn}>
                                        <p>Products</p>
                                        <ArrowSmallRight/>
                                    </Button>
                                    <Button className={classes.aboutBtn}>
                                        <p>About NICART</p>
                                        <ArrowSmallDown/>
                                    </Button>

                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};
export default HeroSectionComponent;