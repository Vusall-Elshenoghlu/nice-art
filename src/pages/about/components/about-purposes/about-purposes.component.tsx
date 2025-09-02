import {useAboutPurposesStyles} from './about-purposes.style';
import {FingerPrint} from '../../../../assets/images/icons/finger-print';
import useLocalization from '../../../../assets/lang';
import {usePurposesQuery} from '../../actions/purposes/purposes.query';
import {useLeadQuery} from '../../../../core/shared/leads/actions/leads.queries';
import {Spin} from 'antd';
import LeadComponent from '../../../../core/shared/leads/leads.component';

const AboutPurposesComponent = () => {
    const classes = useAboutPurposesStyles();
    const translate = useLocalization();
    const {data: purposes = []} = usePurposesQuery();
    const {data: leads = [], isLoading: isLoading} = useLeadQuery();
    const heroLead = leads.find(lead => lead.id === 6);
    if (isLoading) {
        return (
            <div className='d-flex justify-content-center align-items-center'>
                <Spin size='large' />
            </div>
        );
    }
    return (
        <div className={'container'}>
            <div className={classes.ourGoals}>
                <div className={classes.leftSection}>
                    <LeadComponent heroLead={heroLead} isLoading={isLoading} isOnlyContent tag heading description/>
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