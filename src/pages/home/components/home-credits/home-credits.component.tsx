import {useHomeCreditsStyles} from './home-credits.style';
import {useLeadQuery} from '../../../../core/shared/leads/actions/leads.queries';
import LeadComponent from '../../../../core/shared/leads/leads.component';
import CreditFormComponent from '../../../../core/shared/credit-form/credit-form.component';

const HomeCreditsComponent = () => {
    const classes = useHomeCreditsStyles();
    const {data: leads = [], isLoading} = useLeadQuery();
    const heroLead = leads.find(lead => lead.id === 4);
    return (
        <div className='mt-50 container mb-150'>
            <div className={classes.wrapper}>
                <div className={'row'}>
                    <div className={'col-lg-1'}>
                        <div className={classes.leftDiv}>
                            <LeadComponent heroLead={heroLead} isLoading={isLoading} isOnlyContent tag heading/>
                        </div>
                    </div>
                    <div className={'col-lg-11'}>
                        <div className={classes.rightDiv}>
                            <div className={classes.creditDiv}>
                                <CreditFormComponent/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HomeCreditsComponent;