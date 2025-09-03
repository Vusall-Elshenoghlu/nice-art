import {useCallback, useMemo, useState} from 'react';
import {Checkbox, Form, Input, message, Slider} from 'antd';
import {useCreditFormStyles} from './credit-form.style';
import Button from '../button/button.component';
import {useLeadQuery} from '../leads/actions/leads.queries';
import {ArrowRight} from '../../../assets/images/icons/arrows';
import {rem} from '../../../assets/styles/abstracts/functions';
import colors from '../../../assets/styles/abstracts/color';
import {ICreditForm} from './credit-form';
import useLocalization from '../../../assets/lang';
import {CreditFormModel} from './model/credit-form.model';

const CreditFormComponent = () => {
    const translate = useLocalization();
    const classes = useCreditFormStyles();
    const [amount, setAmount] = useState<number>(5000);
    const [month, setMonth] = useState<number>(12);
    const [rate, setRate] = useState<number>(15);
    const [form] = Form.useForm();

    const monthlyRate = rate / 12 / 100;

    const monthlyPayment = useMemo(() => {
        if (!monthlyRate || !month) return 0;
        return (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -month));
    }, [amount, monthlyRate, month]);
    const initialValues = {
        amount: 0,
        month: 0,
        rate: 0,
        finCode: '',
        contactNumber: ''
    };
    const onFinish = useCallback((values: ICreditForm) => {
        message.success(translate('home_credits_apply_success'));
        console.log('Credit values:', new CreditFormModel(values));
        form.resetFields();
    }, [form]);
    const onFinishFailed = useCallback((errorInfo: any) => {
        message.error(translate('products_detail_form_submission_failed'), errorInfo);
    }, [form]);

    const {data: leads = [], isLoading} = useLeadQuery();
    const heroLead = leads.find(lead => lead.id === 4);
    return (
        <Form
            initialValues={initialValues}
            name={'credit'}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}

        >
            <div className={classes.row}>
                <div>
                    <h6 className={classes.amountText}>{translate('home_credits_amount_credit')}</h6>
                    <div className={classes.input}>
                        <h2>{amount}</h2>
                        <h1>{translate('home_credits_money')}</h1>
                    </div>
                    <Slider
                        min={500}
                        max={50000}
                        step={100}
                        value={amount}
                        onChange={(val) => setAmount(val)}
                        className={classes.customSlider}
                        tooltip={{open: false}}
                        trackStyle={{backgroundColor: colors.activeLiColor, height: rem(2)}}
                        railStyle={{height: rem(2)}}
                        handleStyle={{width: rem(2), height: rem(2), border: 'none'}}


                    />
                </div>
                <div >
                    <h6 className={classes.amountText}>{translate('home_credits_time_credit')}</h6>
                    <div className={classes.input}>
                        <h2>{month}</h2>
                        <h1>{translate('home_credits_month')}</h1>
                    </div>
                    <Slider
                        min={6}
                        max={120}
                        step={1}
                        value={month}
                        onChange={(val) => setMonth(val)}
                        className={classes.customSlider}
                        tooltip={{open: false}}
                        trackStyle={{backgroundColor: colors.activeLiColor, height: rem(2)}}
                        railStyle={{height: rem(2)}}
                        handleStyle={{width: rem(2), height: rem(2), border: 'none'}}


                    />
                </div>
                <div>
                    <h6 className={classes.amountText}>{translate('home_credits_percent_degree')}</h6>
                    <div className={classes.input}>
                        <h2>{rate}</h2>
                        <h1>{translate('home_credits_percent')}</h1>
                    </div>
                    <Slider
                        min={1}
                        max={100}
                        step={1}
                        value={rate}
                        onChange={(val) => setRate(val)}
                        className={classes.customSlider}
                        tooltip={{open: false}}
                        trackStyle={{backgroundColor: colors.activeLiColor, height: rem(2)}}
                        railStyle={{height: rem(2)}}
                        handleStyle={{}}


                    />
                </div>

            </div>
            <p>{translate('home_credits_monthly_payment')}</p>
            <h1>{monthlyPayment.toFixed(2)} ₼</h1>
            <div>
                <div className={'mt-50 row'}>
                    <div className={'col-lg-6 col-sm-6 col-md-12'}>
                        <h6>{translate('home_credits_fin_code')}</h6>
                        <Form.Item name="finCode" rules={[{
                            required: true,
                            message: translate('home_credits_fin_code_required')
                        }]}>
                            <div className={classes.stringInput}>
                                <Input
                                    type="text"
                                    bordered={false}
                                    placeholder={translate('home_credits_fin_code_placeholder')}
                                />
                            </div>
                        </Form.Item>
                    </div>
                    <div className={'col-lg-6 col-md-6 col-sm-12 '}>
                        <h6>{translate('home_credits_contact_number')} </h6>
                        <Form.Item name="number" rules={[{
                            required: true,
                            message: translate('home_credits_number_required')
                        }]}>
                            <div className={classes.stringInput}>
                                <h5 className={classes.prefix}>{translate('home_credits_number_prefix')}</h5>
                                <Input
                                    type='text'
                                    bordered={false}
                                    placeholder={translate('home_credits_number_placeholder')}
                                />
                            </div>
                        </Form.Item>
                    </div>

                </div>

            </div>

            <div>
                <div className={'row'}>
                    <div className={'col-lg-6 col-md-6 col-sm-12 '}>
                        <Checkbox>
                            <p><a
                                href='#'>{translate('home_credits_AKB')} </a> {translate('home_credits_AKB_second_part')}
                                <br/> {translate('home_credits_AKB_third_part')} </p>
                        </Checkbox>
                    </div>
                    <div className={'col-lg-6 col-md-6 col-sm-12 '}>
                        <Button variant={'primary'} type={'submit'} className={classes.applyBtn}>
                            <p>{translate('home_credits_apply')}</p>
                            <ArrowRight/>
                        </Button>
                    </div>
                </div>
            </div>

        </Form>
    );
};

export default CreditFormComponent;