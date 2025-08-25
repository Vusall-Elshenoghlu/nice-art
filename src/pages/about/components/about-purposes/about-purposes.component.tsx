import {useAboutPurposesStyles} from './about-purposes.style';
import {FingerPrint} from '../../../../assets/images/icons/finger-print';
import useLocalization from '../../../../assets/lang';
import {usePurposesQuery} from '../../actions/purposes/purposes.query';

const AboutPurposesComponent = () => {
    const classes = useAboutPurposesStyles();
    const translate = useLocalization();
    const {data: purposes = []} = usePurposesQuery();

    return (
        <div className={'container'}>
            <div className={classes.ourGoals}>
                <div className={classes.leftSection}>
                    <span>{translate('about_purpose')}</span>
                    <h2>{translate('about_purpose_subtitle')}</h2>
                    <p className={classes.description}>
                        {translate('about_purpose_description')}
                    </p>
                </div>

                <div className={classes.backgroundSection}>
                    <div className={classes.rightSection}>
                        {!purposes || purposes.length === 0 ? (
                            <div>{translate('about_no_purposes')}</div>
                        ) : (
                            purposes.map(({title, description, id}) => (
                                <div className={classes.goalsSection} key={id}>
                                    <div className={classes.iconContainer}>
                                        <FingerPrint/>
                                    </div>
                                    <div className={classes.rightTitle}>
                                        <h2>{title}</h2>
                                        <p>{description}</p>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPurposesComponent;