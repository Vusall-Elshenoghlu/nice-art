import React from 'react';
import {Spin} from 'antd';
import {useLeadsStyles} from './leads.style';
import {LeadComponentProps} from './leads';
import {Link} from 'react-router-dom';
import {Routes} from '../../../../router/routes';
import Button from '../../button/button.component';
import useLocalization from '../../../../assets/lang';
import {ArrowRight, ArrowSmallDown} from '../../../../assets/images/icons/arrows';

export const LeadComponent = ({
                           heroLead,
                           isLoading,
                           isTitleBig,
                           isTitleSmall,
                           isTagLeft,
                           isTagRight,
                           isHeadingLeft,
                           isHeadingRight,
                           isButtons,
                           isOneButton,
                           isDescriptionLeft,
                           isDescriptionRight,
                           isFile,
                           isLearnMore
                       }: LeadComponentProps) => {
    const classes = useLeadsStyles();
    const translate = useLocalization();

    if (isLoading) {
        return (
            <div className='d-flex justify-content-center align-items-center'>
                <Spin size='large'/>
            </div>
        );
    }

    if (!heroLead) return null;
    return (
        <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12'>
                {
                    isTagLeft ? (<h5 className={classes.tagText}>{heroLead?.tag}</h5>) : ''
                }
                {
                    isTitleBig ? (<h1 className={classes.titleTextBig}>{heroLead?.title}</h1>) : ''
                }
                {
                    isTitleSmall ? (<h1 className={classes.titleTextSmall}>{heroLead?.title}</h1>) : ''
                }

                {
                    isHeadingLeft ? (<h1 className={classes.headingText}>{heroLead?.heading}</h1>) : ''
                }
                {
                    isDescriptionLeft ? (<p className={classes.descriptionLeftText}>{heroLead?.description}</p>) : ''
                }
                {
                    isLearnMore ? (
                        <>
                            <h4 className={classes.learnMoreText}>{translate('home_about_learn_more')}</h4>
                            <div className={classes.lineDiv}></div>
                        </>
                    ) : ''
                }
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12'>
                {
                    isTagRight ? (<h5 className={classes.tagText}>{heroLead?.tag}</h5>) : ''
                }
                {
                    isHeadingRight ? (<h1 className={classes.headingText}>{heroLead?.heading}</h1>) : ''
                }
                {
                    isDescriptionRight ? (<p className={classes.descriptionRightText}>{heroLead.description}</p>) : ''
                }
                {isButtons && (
                    <div className={classes.buttons}>
                        <Link to={Routes.products}>
                            <Button className={classes.productsBtn}>
                                <p>{translate('home_hero_productsBtn')}</p>
                                <ArrowRight/>
                            </Button>
                        </Link>
                        <Link to={Routes.about}>
                            <Button variant='secondary' className={classes.aboutBtn}>
                                <p>{translate('home_hero_aboutBtn')}</p>
                                <ArrowSmallDown/>
                            </Button>
                        </Link>
                    </div>
                )}
                {
                    isOneButton ? (
                        <>
                            <Button className={classes.partnerBtn}>
                                <p>{translate('partners_hero_btn')}</p>
                                <ArrowRight/>
                            </Button>
                        </>
                    ): ''
                }
                {
                    isFile ? (
                        <div className={classes.rightDiv}>
                            <img src={heroLead?.file?.url} alt={translate('home_about_image_alt')}/>
                        </div>
                    ) : ''
                }

            </div>
        </div>
    );
};
