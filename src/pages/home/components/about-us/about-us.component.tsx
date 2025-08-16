import {useHomeAboutUsStyles} from './about-us.style';
import useLocalization from '../../../../assets/lang';
import ImgOne from 'assets/images/statics/home-about-component1.jpg'
const HomeAboutUsComponent = () => {
    const classes = useHomeAboutUsStyles();
    const translate = useLocalization();
    return (
        <div className={'container mt-150'}>
            <div className={classes.wrapper}>

            </div>
        </div>
    );
};

export default HomeAboutUsComponent;