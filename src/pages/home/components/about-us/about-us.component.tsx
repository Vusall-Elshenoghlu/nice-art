import {useHomeAboutUsStyles} from './about-us.style';
import useLocalization from '../../../../assets/lang';
import ImgOne from 'assets/images/statics/home-about-component1.jpg';
import ImgTwo from 'assets/images/statics/home-about-component2.jpg';
import {PlayIcon} from '../../../../assets/images/icons/play-icon';
import {useAboutUsVideoQuery} from './actions/about-us.queries';
import {useState} from 'react';
import {Modal} from 'antd';

const HomeAboutUsComponent = () => {
    const classes = useHomeAboutUsStyles();
    const translate = useLocalization();
    const {data: aboutUsVideo = [], isLoading} = useAboutUsVideoQuery();
    const videoUrl = aboutUsVideo?.file?.url;
    const [isModalOpen, setIsModalOpen] = useState(false);
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
                                    onCancel={() => setIsModalOpen(false)} // burada onCancel işləyir
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
                        Malesuada tortor fringilla ut faucibus. Urna tellus lectus platea turpis non. Tellus odio eu
                        ante tincidunt vivamus nunc nibh arcu, augue. Egestas et amet neque placerat aliquam tempor.
                        Ultricies natoque lacus, id natoque cras. Erat aliquam sollicitudin risus semper molestie.
                        Ut
                        mattis nisl faucibus vel tincidunt.
                        Et in laoreet faucibus urna quis. Tempus in condimentum malesuada ut molestie et in.
                        Lobortis
                        neque aliquam felis ac ac augue elit.
                    </p>

                    <div className={classes.aboutUsContainer}>
                        <div className={'row'}>
                            <div className={'col-lg-6 col-md-6 col-sm-12'}>
                                <div className={classes.leftDiv}>
                                    <h5>ABOUT US</h5>
                                    <h1>Lectus mauris pulvinar <br/><h1 className={'mx-10'}>sit.</h1></h1>
                                    <p className={'mt-10'}>Malesuada tortor fringilla ut faucibus. Urna tellus
                                        lectus
                                        platea turpis non. Tellus odio eu ante tincidunt vivamus nunc nibh arcu,
                                        augue.
                                        Egestas et amet neque placerat aliquam tempor. Ultricies natoque lacus, id
                                        natoque cras. Erat aliquam sollicitudin risus semper molestie. Ut mattis
                                        nisl
                                        faucibus vel tincidunt.</p>
                                    <h4 className={'mt-50'}>Learn more</h4>
                                    <div className={classes.lineDiv}></div>
                                </div>
                            </div>
                            <div className={'col-lg-6 col-md-6 col-sm-12'}>
                                <div className={classes.rightDiv}>
                                    <img src={ImgTwo} alt={ImgTwo}/>
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