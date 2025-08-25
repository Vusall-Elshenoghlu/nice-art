import React from 'react';
import { Spin } from 'antd';
import { useLeadsStyles } from './leads.style';
import {LeadComponentProps} from './leads';
import {Link} from 'react-router-dom';
import {Routes} from '../../../../router/routes';
import Button from '../../button/button.component';
import useLocalization from '../../../../assets/lang';
import {ArrowRight, ArrowSmallDown} from '../../../../assets/images/icons/arrows';

const LeadComponent = ({ heroLead, isLoading, isButtons }: LeadComponentProps) => {
    const classes = useLeadsStyles();
    const translate = useLocalization();

    if (isLoading) {
        return (
            <div className='d-flex justify-content-center align-items-center'>
                <Spin size='large' />
            </div>
        );
    }

    if (!heroLead) return null;
    return (
        <div className='container'>
            <div className={classes.wrapper}>
                <h6>{heroLead?.tag}</h6>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <h1 className='mt-20'>{heroLead?.heading}</h1>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        {heroLead?.description && <p>{heroLead.description}</p>}
                        {isButtons && (
                            <div className={classes.buttons}>
                                <Link to={Routes.products}>
                                    <Button className={classes.productsBtn}>
                                        <p>{translate('home_hero_productsBtn')}</p>
                                        <ArrowRight />
                                    </Button>
                                </Link>
                                <Link to={Routes.about}>
                                    <Button variant='secondary' className={classes.aboutBtn}>
                                        <p>{translate('home_hero_aboutBtn')}</p>
                                        <ArrowSmallDown />
                                    </Button>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeadComponent;
