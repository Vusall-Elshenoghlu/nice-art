import useLocalization from '../../../../assets/lang';
import {useHomeCreditsStyles} from '../../../home/components/home-credits/home-credits.style';
import {useCallback, useMemo, useState} from 'react';
import {Checkbox, Form, Input, message, Slider} from 'antd';
import {IHomeCredits} from '../../../home/components/home-credits/home-credits';
import {HomeCreditsModel} from '../../../home/components/home-credits/model/home-credits.model';
import colors from '../../../../assets/styles/abstracts/color';
import {rem} from '../../../../assets/styles/abstracts/functions';
import {ArrowRight} from '../../../../assets/images/icons/arrows';

const ProductApplyCreditComponent = () => {
    const translate = useLocalization();
    const classes = useHomeCreditsStyles();
    const [amount, setAmount] = useState<number>(5000);
    const [month, setMonth] = useState<number>(12);
    const [rate, setRate] = useState<number>(15);
    const [form] = Form.useForm();

    const monthlyRate = rate / 12 / 100;

    const monthlyPayment = useMemo(() => {
        if (!monthlyRate || !month) return 0;
        return (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -month));
    }, [amount, monthlyRate, month]);
    console.log(monthlyPayment);
    const initialValues = {
        amount: 0,
        month: 0,
        rate: 0,
        finCode: '',
        contactNumber: ''
    };
    const onFinish = useCallback((values: IHomeCredits) => {
        console.log('Credit values:', new HomeCreditsModel(values));
        form.resetFields();
    }, [form]);
    const onFinishFailed = useCallback((errorInfo: any) => {
        message.error('Form submission failed:', errorInfo);
    }, [form]);
    return (
        <div className='mt-50 container'>
            <div className={classes.wrapper}>
                <div className={'row'}>
                    <div className={'col-lg-1'}>
                        <div className={classes.leftDiv}>
                            <h6>Apply to load</h6>
                            <h1>Id duis id turpis mi
                                quisque. Nulla.</h1>
                            <p>Malesuada tortor fringilla ut faucibus. Urna tellus lectus platea turpis non. Tellus odio eu ante tincidunt vivamus nunc nibh arcu, augue.</p>

                        </div>
                    </div>
                    <div className={'col-lg-11'}>
                        <div className={classes.rightDiv}>
                            <div className={classes.creditDiv}>
                                <Form
                                    initialValues={initialValues}
                                    name={'credit'}
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}

                                >
                                    <div className={'row'}>
                                        <div className={'col-lg-4 col-md-4 col-sm-12'}>
                                            <h6 className={classes.amountText}>Kreditin məbləği</h6>
                                            <div className={classes.input}>
                                                <h2>{amount}</h2>
                                                <h1>AZN</h1>
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
                                        <div className={'col-lg-4 col-md-4 col-sm-12'}>
                                            <h6 className={classes.amountText}>Kreditin müddəti</h6>
                                            <div className={classes.input}>
                                                <h2>{month}</h2>
                                                <h1>Ay</h1>
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
                                        <div className={'col-lg-4 col-md-4 col-sm-12'}>
                                            <h6 className={classes.amountText}>Faiz dərəcəsi</h6>
                                            <div className={classes.input}>
                                                <h2>{rate}</h2>
                                                <h1>%</h1>
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
                                                handleStyle={{width: rem(2), height: rem(2), border: 'none'}}


                                            />
                                        </div>

                                    </div>
                                    <p>Aylıq ödəniş</p>
                                    <h1>{monthlyPayment.toFixed(2)} ₼</h1>

                                    <div>
                                        <div className={'mt-50 row'}>
                                            <div className={'col-lg-6 col-sm-6 col-md-12'}>
                                                <h6>FIN code </h6>
                                                <div className={classes.stringInput}>
                                                    <Input
                                                        type='text'
                                                        bordered={false}
                                                        placeholder='ABCDEFG'
                                                    />
                                                </div>
                                            </div>
                                            <div className={'col-lg-6 col-md-6 col-sm-12 '}>
                                                <h6>Əlaqə nömrəsi </h6>
                                                <div className={classes.stringInput}>
                                                    <h5>+994</h5>
                                                    <Input
                                                        type='text'
                                                        bordered={false}
                                                        placeholder='00 000 00 00'
                                                    />
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                    <div className={classes.checkboxAndButton}>
                                        <div className={'row'}>
                                            <div className={'col-lg-6 col-md-6 col-sm-12 '}>
                                                <Checkbox>
                                                    <p><a href='#'>AKB RAZILIQ  </a> vəriləsi <br/> üçün icazə </p>
                                                </Checkbox>
                                            </div>
                                            <div className={'col-lg-6 col-md-6 col-sm-12 '}>
                                                <div className={classes.applyBtn}>
                                                    <p>Müraciət et</p>
                                                    <ArrowRight/>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </Form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductApplyCreditComponent;