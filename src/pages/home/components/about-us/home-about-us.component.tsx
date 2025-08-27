import {useHomeAboutUsStyles} from './home-about-us.style';
import useLocalization from '../../../../assets/lang';
import ImgOne from 'assets/images/statics/home-about-component1.jpg';
import {PlayIcon} from '../../../../assets/images/icons/play-icon';
import {useAboutUsVideoQuery} from '../../actions/about-us.queries';
import {useState} from 'react';
import {Modal, Spin} from 'antd';
import {useLeadQuery} from '../../../../core/shared/leads/actions/leads.queries';
import LeadComponent from '../../../../core/shared/leads/component/leads.component';

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
                        <LeadComponent heroLead={heroLead} isLoading={isLoadingLeads} isTagLeft={true} isHeadingLeft={true} isDescriptionLeft={true} isFile={true} isLearnMore={true}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAboutUsComponent;