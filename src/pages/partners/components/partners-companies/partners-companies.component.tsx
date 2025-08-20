import useLocalization from '../../../../assets/lang';
import {usePartnersCompaniesStyles} from './partners-companies.style';
import {usePartnersCompanyQuery} from './actions/partners-companies.query';
import {IPartnersCompany} from './partners-companies';
import {Modal, Spin} from 'antd';
import {useCallback, useState} from 'react';
import Button from '../../../../core/shared/button/button.component';
import {ArrowRightUp} from '../../../../assets/images/icons/arrows';

const PartnersCompaniesComponent = () => {
    const translate = useLocalization();
    const classes = usePartnersCompaniesStyles();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPartner, setSelectedPartner] = useState<IPartnersCompany | null>(null);
    const {data: partners = [], isLoading} = usePartnersCompanyQuery();

    const handleOpenModal = useCallback((partner: IPartnersCompany) => {
        setSelectedPartner(partner);
        setIsModalOpen(true);
    }, []);
    if (isLoading) {
        return (
            <div className='d-flex justify-content-center align-items-center'>
                <Spin size='large'/>
            </div>
        );
    }
    return (
        <div className={'container mt-80 mb-80'}>
            <div className={'row'}>
                {
                    partners.map((partner: IPartnersCompany, index: any) => (
                        <div key={index} className={'col-lg-3 col-md-4 col-sm-6 col-6 mt-20'}>
                            <div
                                className={classes.partnerDiv}
                                onClick={() => handleOpenModal(partner)}
                            >
                                <div className={'d-flex'}>
                                    <img className={classes.partnerImage} src={partner.file?.url}
                                         alt={translate('partners_hero_btn')}/>
                                    <h4>{partner?.name}</h4>
                                </div>
                                <div className={classes.tagDiv}>
                                    <p>{partner?.tag}</p>
                                </div>
                            </div>
                            <Modal
                                open={isModalOpen}
                                footer={null}
                                onCancel={() => setIsModalOpen(false)}
                                centered
                                width={660}
                                closable={false}
                                rootClassName={classes.customModal}
                            >
                                    <div className={classes.modalFlexDiv}>
                                        <img src={selectedPartner?.file?.url} className={classes.modalImg} alt={translate('partners_hero_btn')}/>
                                        <div>
                                            <h4>{selectedPartner?.name}</h4>
                                            <div className={classes.selectedTagDiv}>
                                                <p>{selectedPartner?.tag}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <h5 className={classes.modalDescrip}>{selectedPartner?.description}</h5>
                                    <div className={classes.buttons}>
                                         <Button className={classes.visitBtn}>
                                             <a href={selectedPartner?.site} target={'_blank'}>{translate('partners_companies_visit')}</a>
                                             <ArrowRightUp/>

                                    </Button>
                                        <Button className={classes.closeBtn} onClick={() => setIsModalOpen(false)}>
                                            <p>Close</p>
                                        </Button>

                                    </div>

                            </Modal>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default PartnersCompaniesComponent;