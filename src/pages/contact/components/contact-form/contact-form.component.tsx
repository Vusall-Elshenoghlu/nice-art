import useLocalization from '../../../../assets/lang';
import {useContactFormStyles} from './contact-form.style';
import {useLeadQuery} from '../../../../core/shared/leads/actions/leads.queries';
import {Input, Spin} from 'antd';

const ContactFormComponent = () => {
    const translate = useLocalization();
    const classes = useContactFormStyles();
    const {data: leads = [], isLoading } = useLeadQuery();
    const heroLead = leads.find(lead => lead.id === 9);
    if (isLoading) {
        return (
            <div className='d-flex justify-content-center align-items-center'>
                <Spin size='large' />
            </div>
        );
    }
    return (
        <div className={classes.wrapper}>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-lg-6 col-md-6 col-sm-12'}>
                        <h1 className={classes.titleH}>{heroLead?.title}</h1>
                        <p className={classes.description}>{heroLead?.description}</p>
                    </div>
                    <div className={'col-lg-6 col-md-6 col-sm-12'}>
                        <div className={'row'}>
                            <div className={'col-lg-6 col-md-6 col-sm-12'}>


                            </div>
                            <div className={'col-lg-6 col-md-6 col-sm-12'}>
                                <h6>{translate('home_credits_contact_number')} </h6>
                                <div className={classes.stringInput}>
                                    <h5>{translate('home_credits_number_prefix')}</h5>
                                    <Input
                                        type='text'
                                        bordered={false}
                                        placeholder={translate('home_credits_number_placeholder')}
                                    />
                                </div>

                            </div>
                            <div className={'col-lg-6 col-md-6 col-sm-12'}>
                                <h6>{translate('home_credits_contact_number')} </h6>
                                <div className={classes.stringInput}>
                                    <h5>{translate('home_credits_number_prefix')}</h5>
                                    <Input
                                        type='text'
                                        bordered={false}
                                        placeholder={translate('home_credits_number_placeholder')}
                                    />
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default  ContactFormComponent;