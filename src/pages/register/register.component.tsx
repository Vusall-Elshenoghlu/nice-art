import { Button, Card, Form, Input } from 'antd';
import { useRegisterStyles } from './register.style';
import React, { useCallback, useMemo } from 'react';
import useLocalization from 'assets/lang';
import { FormRule } from 'antd';
import { IRegisterFormValues } from './register';
import {useRegister} from "./actions/register.mutation";
import photoLeft from "../../assets/images/statics/Saly-3.svg";
import photoRight from "../../assets/images/statics/Saly-2.svg";
import { useMutation } from 'react-query';
import {useLogin} from "../login/actions/login.mutation";



const RegisterComponent = () => {
    const translate = useLocalization();
    const {mutate, isLoading} = useRegister();
    const {
        title,
        page,
        panel,
        subtitle,
        leftPage,
        rightPage,
        loginAndRegister,
        formRow,
        leftPhoto,
        rightPhoto
    } = useRegisterStyles();

    const initialValues: IRegisterFormValues = {
        email: '',
        password: '',
        username: '',
        contactNumber: ''
    };

    const rules: { [key: string]: FormRule[] } = useMemo(() => ({
        email: [
            { required: true, message: translate('input_required') },
            { pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, message: translate('email_invalid') }
        ],
        password: [{ required: true, message: translate('input_required') }],
        username: [{ required: true, message: translate('input_required') }],
        contactNumber: [{ required: true, message: translate('input_required') }]
    }), [translate]);


    const onSubmit = useCallback((values: IRegisterFormValues) => {
        mutate(values);
        console.log('values:', values);
    }, []);

    return (
        <div className={`${page} w-100 d-flex justify-center align-center`}>
            <div className={`${leftPage}`}><img className={leftPhoto} src={photoLeft} alt="" /></div>
            <div className={`${rightPage}`}><img className={rightPhoto} src={photoRight} alt="" /></div>
            <div className={panel}>
                <Card style={{ width: '100%', height: '100%', borderRadius: '6%', boxShadow: "0 0 10px rgba(0,0,0,0.3)" }}>
                    <div className=''>
                        <div className='d-flex justify-between align-center mb-35'>
                            <div>
                                <h6 className={subtitle}>Welcome to Site</h6>
                                <h1 className={title}>Sign Up</h1>
                            </div>
                            <div style={{ textAlign: "right", fontSize: "14px" }}>
                                <p style={{ marginBottom: 0 }}>Have an account?</p>
                                <a href="/auth/login" style={{ color: "#E48700", textDecoration: "underline", cursor: "pointer" }}>
                                    Sign in
                                </a>
                            </div>
                        </div>
                    </div>
                    <Form
                        name='register'
                        initialValues={initialValues}
                        onFinish={onSubmit}
                        layout='vertical'
                    >
                        <Form.Item name='email' label='Enter your email address' rules={rules.email}>
                            <Input placeholder="Email address" />
                        </Form.Item>

                        <div className={formRow}>
                            <Form.Item name='username' label='Enter your username' rules={rules.username}>
                                <Input placeholder="Username" />
                            </Form.Item>

                            <Form.Item name='contactNumber' label='Contact number' rules={rules.contactNumber}>
                                <Input placeholder="Contact number" />
                            </Form.Item>
                        </div>

                        <Form.Item name='password' label='Enter your password' rules={rules.password}>
                            <Input type='password' placeholder="Password" />
                        </Form.Item>

                        <div className={`${loginAndRegister} d-flex`}>
                            <Button
                                className='w-100'
                                style={{ backgroundColor: "#E48700", color: "white" }}
                                htmlType='submit'
                                loading={isLoading}
                            >
                                Sign up
                            </Button>
                        </div>
                    </Form>
                </Card>
            </div>
        </div>
    );
};

export default RegisterComponent;
