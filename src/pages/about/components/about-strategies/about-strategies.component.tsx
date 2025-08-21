import {useAboutStrategiesStyles} from './about-strategies.style';
import {FingerPrint} from '../../../../assets/images/icons/finger-print';
import useLocalization from '../../../../assets/lang';
import {useStrategiesQuery} from '../../actions/strategies/strategies.query';

const AboutStrategiesComponent=()=>{
    const classes=useAboutStrategiesStyles();
    const translate = useLocalization();
    const {data: strategies=[]} = useStrategiesQuery();
    return (
        <div className={'container'}>
            <div className={classes.strategySection}>
                <div className={classes.strategyTitle}>
                    <span>{translate('about_strategy')}</span>
                    <h2>{translate('about_strategy_subtitle')}</h2>
                </div>

                <div className={classes.strategyCards}>
                    {!strategies || strategies.length === 0 ? (
                            <div>{translate('about_no_strategies')}</div>
                        ) :
                        strategies.map(({title, description}) => {
                            return (
                                <div key={title} className={classes.strategyCard}>
                                    <div className={classes.strategyFingerPrint}><FingerPrint/></div>
                                    <h3>{title}</h3>
                                    <p>{description}</p>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
};
export default AboutStrategiesComponent;