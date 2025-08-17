import useLocalization from '../../../../assets/lang';
import {useHomeCreditsStyles} from './home-credits.style';

const HomeCreditsComponent = () => {
    const translate = useLocalization();
    const classes = useHomeCreditsStyles();
    return (
        <div className='mt-50 container'>
            <div className={classes.wrapper}>

            </div>
        </div>
    );
};

export default HomeCreditsComponent;