import useLocalization from '../../../../assets/lang';
import {usePartnersCompaniesStyles} from './partners-companies.style';
import {usePartnersCompanyQuery} from './actions/partners-companies.query';
import {IPartnersCompany} from './partners-companies';

const PartnersCompaniesComponent = () => {
    const translate = useLocalization();
    const classes = usePartnersCompaniesStyles();
    const {data: partners = [], isLoading} = usePartnersCompanyQuery();
    console.log(partners);
    return (
        <div className={'container mt-80'}>
            <div className={'row'}>
                {
                    partners.map((partner:IPartnersCompany, index: any) => (
                        <div key={index} className={'col-lg-3 col-md-4 col-sm-6 col-6 mt-20'}>
                            <div className={classes.partnerDiv}>
                                <div className={'d-flex'}>
                                    <img className={classes.partnerImage} src={partner.file?.url} alt=""/>
                                    <h4>{partner?.name}</h4>
                                </div>
                                <div className={classes.tagDiv}>
                                    <p>{partner?.tag}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default PartnersCompaniesComponent;