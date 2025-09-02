import React, {useMemo} from 'react';
import {Spin} from 'antd';
import {useLeadsStyles} from './leads.style';
import {LeadComponentProps} from './leads';
import useLocalization from '../../../assets/lang';
import mainImg from '/src/assets/images/statics/about-page-image.png';
import classNames from 'classnames';

const LeadComponent = ({
                           heroLead,
                           isLoading,
                           title,
                           tag,
                           heading,
                           description,
                           file,
                           isOnlyContent,
                           titleVariant,
                           children,
                       }: LeadComponentProps) => {
    const classes = useLeadsStyles();
    const translate = useLocalization();
    const hasImageAndTitle = useMemo(() => {
        return heroLead?.title && heroLead.file;
    }, [heroLead]);
    const returnSmallContent = useMemo(() => {
        return (
            <>
                {tag && <h5 className={classes.tagText}>{heroLead?.tag}</h5>}
                {heading && <h1 className={classes.headingText}>{heroLead?.heading}</h1>}
                {description && <p className={classes.descriptionRightText}>{heroLead?.description}</p>}
            </>
        );
    }, [heroLead, classes]);
    if (isLoading) {
        return (
            <div className='d-flex justify-content-center align-items-center'>
                <Spin size='large'/>
            </div>
        );
    }

    if (!heroLead) return null;

    if (isOnlyContent) return <>{returnSmallContent}</>;
    return (
        <div className='row'>
            {
                file ? (
                    <>
                        <div className={hasImageAndTitle ? 'col-12' : 'col-lg-6 col-md-6 col sm-12'}>
                            {
                                hasImageAndTitle ? (
                                    <>
                                        <div className='row'>
                                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                                <h1 className={classes.titleTextSmall}>{heroLead?.title}</h1>
                                            </div>
                                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                                {returnSmallContent}
                                            </div>

                                        </div>
                                    </>
                                ) : (
                                    <>
                                        {returnSmallContent}
                                        <h4 className={classes.learnMoreText}>{translate('home_about_learn_more')}</h4>
                                        <div className={classes.lineDiv}></div>
                                    </>
                                )

                            }
                        </div>
                        <div className={hasImageAndTitle ? 'col-12' : 'col-lg-6 col-md-6 col sm-12'}>
                            {
                                hasImageAndTitle ? (
                                    <>
                                        <div className={classes.imgSection}>
                                            <img src={mainImg} alt={translate('about_main_image_alt')}/>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className={classes.rightDiv}>
                                            <img src={heroLead?.file?.url} alt={translate('home_about_image_alt')}/>
                                        </div>
                                    </>
                                )
                            }
                        </div>
                    </>
                ) : (
                    <>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            {
                                title && heroLead?.title ? (
                                    <>
                                        <h1 className={classNames(
                                            titleVariant === 'big' ? classes.titleTextBig : classes.titleTextSmall
                                        )}
                                        >
                                            {heroLead?.title}
                                        </h1>
                                    </>
                                ) : (
                                    <>
                                        {title && <h1 className={classes.titleTextSmall}>{heroLead?.title}</h1>}
                                        {returnSmallContent}
                                    </>
                                )
                            }
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            {
                                title && heroLead?.title ? (
                                    <>
                                        {returnSmallContent}
                                        {children}
                                    </>
                                ): (<p className={classes.descriptionRightText}>{heroLead?.description}</p>)
                            }
                        </div>
                    </>
                )
            }
        </div>
    );
};

export default LeadComponent;