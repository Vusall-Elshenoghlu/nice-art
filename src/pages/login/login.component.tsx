import {Button, Card, Form, Input} from 'antd';
import React, {useCallback, useMemo} from 'react';
import {FormRule} from 'antd';
import useLocalization from 'assets/lang';
import {useLogin} from './actions/login.mutation';
import {useLoginStyles} from "./login.style"; // Sənin login API hookun
import photoLeft from "assets/images/statics/Saly-3.svg";
import photoRight from "assets/images/statics/Saly-2.svg";
import {ILoginFormValues} from './login';


const LoginComponent = () => {
    const translate = useLocalization();
    const {mutate, isLoading} = useLogin();


    const {
        title,
        page,
        panel,
        subtitle,
        leftPage,
        rightPage,
        loginAndRegister,
        rightPhoto,
        leftPhoto,
    } = useLoginStyles();

    const initialValues: ILoginFormValues = {
        email: '',
        password: '',
    };

    const rules: { [key: string]: FormRule[] } = useMemo(() => ({
        email: [
            {required: true, message: translate('input_required')},
            {
                pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: translate('email_invalid'),
            },
        ],
        password: [
            {required: true, message: translate('input_required')},
        ],
    }), [translate]);

    const onSubmit = useCallback((values: any) => {
        mutate(values);
        console.log(values);
    }, []);

    return (
        <div className={`${page} w-100 d-flex justify-center align-center`}>
            <div className={leftPage}><img className={leftPhoto} src={photoLeft} alt=""/></div>
            <div className={rightPage}><img className={rightPhoto} src={photoRight} alt=""/></div>
            <div className={panel}>
                <Card style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '6%',
                    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.3)"
                }}>
                    <div className="mb-35 text-center">
                        <h6 className={subtitle}>Welcome to Site</h6>
                        <h1 className={title}>Sign in</h1>
                    </div>
                    <Form
                        initialValues={initialValues}
                            name="login"
                            onFinish={onSubmit}
                            layout="vertical"
                            >
                        <Form.Item name="email" label=" Enter your username or email address">
                            <Input placeholder=" Username or email address" />
                        </Form.Item>

                        <Form.Item name="password" label=" Enter your password">
                            <Input type="password" placeholder="Password" />
                        </Form.Item>
                        <p style={{ marginLeft: "75%", color: "#BF5D46", cursor: "pointer" }}>Forgot Password</p>

                        <div className={`${loginAndRegister} d-flex`}>
                <Button loading={isLoading} className="w-100" style={{backgroundColor: "#E48700"}} htmlType="submit">
                    Sign in
                </Button>
                <h2 className="text-center">Or</h2>
                <Button
                    loading={isLoading}
                    onClick={() => window.location.href = "/auth/register"}
                    className="w-100"
                    style={{backgroundColor: "#ECBC76"}}
                >
                    Sign Up
                </Button>
            </div>
        </Form>
</Card>
</div>
</div>
)
    ;
};

export default LoginComponent;
