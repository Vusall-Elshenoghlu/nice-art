import {useHomeAboutUsStyles} from './home-about-us.style';
import useLocalization from '../../../../assets/lang';
import ImgOne from 'assets/images/statics/home-about-component1.jpg';
import {PlayIcon} from '../../../../assets/images/icons/play-icon';
import {useAboutUsVideoQuery} from './actions/about-us.queries';
import {useState} from 'react';
import {Modal, Spin} from 'antd';
import {useLeadQuery} from '../../../../core/shared/leads/actions/leads.queries';

const HomeAboutUsComponent = () => {
    const classes = useHomeAboutUsStyles();
    const translate = useLocalization();
    const {data: aboutUsVideo = [], isLoading: isLoadingVideo} = useAboutUsVideoQuery();
    const videoUrl = aboutUsVideo?.file?.url;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {data: leads = [], isLoading: isLoadingLeads} = useLeadQuery();
    const heroLead = leads.find(lead => lead.id === 2);
    if (isLoadingVideo || isLoadingLeads) {
        return (
            <div className="d-flex justify-content-center align-items-center">
                <Spin size="large" />
            </div>
        );
    }
    return (
        <div className={'container'}>
            <div className={classes.wrapper}>
                <div className={classes.absoluteDiv}>
                    <div className={classes.imgAndPlay}>
                        <img src={ImgOne} alt={translate('home_hero_aboutBtn')}/>
                        <div className={classes.playContainer}>
                            <div className={classes.playSecondDiv}>
                                <div
                                    className={classes.playLastDiv}
                                    onClick={() => setIsModalOpen(true)}
                                >
                                    <PlayIcon/>
                                </div>

                                <Modal
                                    open={isModalOpen}
                                    footer={null}
                                    onCancel={() => setIsModalOpen(false)}
                                    centered
                                    width={1000}
                                >
                                    <video
                                        src={videoUrl}
                                        controls
                                        autoPlay
                                        className={classes.videoUrl}
                                    />
                                </Modal>
                            </div>
                        </div>
                    </div>
                    <p className={classes.malesuadaPar}>
                        {translate('home_about_lastParagraph')}
                    </p>

                    <div className={classes.aboutUsContainer}>
                        <div className={'row'}>
                            <div className={'col-lg-6 col-md-6 col-sm-12'}>
                                <div className={classes.leftDiv}>
                                    <h5>{heroLead?.tag}</h5>
                                    <h1>{heroLead?.heading}</h1>
                                    <p className={'mt-10'}>{heroLead?.description}</p>
                                    <h4 className={'mt-20'}>{translate('home_about_learn_more')}</h4>
                                    <div className={classes.lineDiv}></div>
                                </div>
                            </div>
                            <div className={'col-lg-6 col-md-6 col-sm-12'}>
                                <div className={classes.rightDiv}>
                                    <img src={heroLead?.file?.url} alt={translate('home_about_image_alt')}/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAboutUsComponent;