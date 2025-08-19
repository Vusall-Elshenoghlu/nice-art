import useLocalization from '../../../../assets/lang';
import {useContactFormStyles} from './contact-form.style';
import {useLeadQuery} from '../../../../core/shared/leads/actions/leads.queries';
import {Input, Select, Spin} from 'antd';
import Button from '../../../../core/shared/button/button.component';
import {ArrowRight} from '../../../../assets/images/icons/arrows';

const ContactFormComponent = () => {
    const translate = useLocalization();
    const classes = useContactFormStyles();
    const {data: leads = [], isLoading} = useLeadQuery();
    const heroLead = leads.find(lead => lead.id === 9);
    if (isLoading) {
        return (
            <div className='d-flex justify-content-center align-items-center'>
                <Spin size='large'/>
            </div>
        );
    }
    return (
        <div className={classes.wrapper}>
            <div className={'container pt-100'}>
                <div className={'row'}>
                    <div className={'col-lg-6 col-md-6 col-sm-12'}>
                        <h1 className={classes.titleH}>{heroLead?.title}</h1>
                        <p className={classes.description}>{heroLead?.description}</p>
                    </div>
                    <div className={'col-lg-6 col-md-6 col-sm-12'}>
                        <div className={classes.contact}>
                            <div className={'row'}>
                                <div className={'col-lg-6 col-md-6 col-sm-12'}>

                                </div>
                                <div className={'col-lg-6 col-md-6 col-sm-12'}>
                                    <h6 className={classes.labetInput}>{translate('contact_form_email')} </h6>
                                    <div className={classes.stringInput}>
                                        <Input
                                            type='text'
                                            bordered={false}
                                            placeholder={translate('contact_form_email_placeholder')}
                                        />
                                    </div>
                                </div>
                                <div className={'col-lg-6 col-md-6 col-sm-12 mt-30'}>
                                    <h6 className={classes.labetInput}>{translate('home_credits_contact_number')} </h6>
                                    <div className={classes.stringInput}>
                                        <h5 className={classes.prefix}>{translate('home_credits_number_prefix')}</h5>
                                        <Input
                                            type='text'
                                            bordered={false}
                                            placeholder={translate('home_credits_number_placeholder')}
                                        />
                                    </div>
                                </div>
                                <div className={'col-lg-6 col-md-6 col-sm-12 mt-30'}>
                                    <h6 className={classes.labetInput}>{translate('contact_form_topic')} </h6>
                                    <div className={classes.stringInput}>
                                        <Select
                                            style={{width: '100%'}}
                                            bordered={false}
                                            placeholder={translate('contact_form_topic_placeholder')}

                                        />
                                    </div>
                                </div>
                                <div className={'col-12 mt-30'}>
                                    <h6 className={classes.labetInput}>{translate('contact_form_message')} </h6>
                                    <div className={classes.stringInput}>
                                        <Input
                                            type='text'
                                            bordered={false}
                                            placeholder={translate('contact_form_message_placeholder')}
                                        />
                                    </div>
                                </div>
                                <div className={'col-12 mt-30'}>
                                    <Button className={classes.submitBtn}>
                                        <h5>{translate('contact_form_submit')}</h5>
                                        <ArrowRight/>
                                    </Button>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.277335715424!2d49.8307079758254!3d40.38054557144545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307da26259811b%3A0xd8e93c5caf8d91ba!2sAzInTelecom!5e0!3m2!1saz!2saz!4v1755636363792!5m2!1saz!2saz"
                className={classes.iframe}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
    );
};

export default ContactFormComponent;