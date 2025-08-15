// import { useHeaderModalStyles } from './header-modal.style';
import { NavLink, useNavigate } from 'react-router-dom';
import { Routes } from '../../../../../router/routes';
import { MessageOutlined, EnvironmentOutlined, FacebookOutlined, InstagramOutlined, LinkedinOutlined, YoutubeOutlined } from '@ant-design/icons';
import { ILanguages, IState } from '../../../../../store/store';
import { setLocale } from '../../../../../store/store.reducer';
import useLocalization from '../../../../../assets/lang';
import { useStore } from '../../../../../store/store.config';
import { useCallback, useMemo, useState } from 'react';
import { environment } from '../../../../configs/app.config';
import { ILang } from '../../../../../assets/lang/lang';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'antd';
import { successToast } from '../../../../shared/toast/toast';

const HeaderModalComponent = ({ setIsOpenMenu }: any) => {
    // const classes = useHeaderModalStyles();
    const translate = useLocalization();
    const languages = useStore('languages');
    const dispatch = useDispatch();
    const locale = useSelector((state: IState) => state.locale);
    const user = useStore('user');
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const currentLang = useMemo(() => {
        return (localStorage.getItem(`${environment.applicationName}-locale`) as ILang) || 'az';
    }, [locale]);

    const handleLogout = useCallback(() => {
        Modal.confirm({
            title: `translate('modalTitle')`,
            content: `translate('modalReturn')`,
            okText: `translate('modalOkText')`,
            cancelText: `translate('modalCancelText')`,
            onOk: () => {
                localStorage.removeItem('Architecture (Mode: Default)-token');
                successToast('Logged Out!');
                navigate(Routes.login);
                window.location.reload();
            },
        });
    }, []);

    // const navLinks = [
    //     { to: Routes.about, label: 'about' },
    //     { to: Routes.products, label: 'products' },
    //     { to: Routes.news, label: 'news_and_blog' },
    //     { to: Routes.contact, label: 'contact' },
    //
    // ];

    const socialLinks = [
        { icon: <FacebookOutlined />, href: '#', label: 'Facebook' },
        { icon: <InstagramOutlined />, href: '#', label: 'Instagram' },
        { icon: <LinkedinOutlined />, href: '#', label: 'LinkedIn' },
        { icon: <YoutubeOutlined />, href: '#', label: 'YouTube' },
    ];

    return (
        <div >
            salam
            {/*<div className={classes.headerModalContainer}>*/}
            {/*    <nav className={classes.navigation}>*/}


            {/*        <ul className={classes.navItems}>*/}
            {/*            {navLinks.map(link => (*/}
            {/*                <li key={link.to}>*/}
            {/*                    <NavLink*/}
            {/*                        to={link.to}*/}
            {/*                        className={classes.navLink}*/}
            {/*                        onClick={() => setIsOpenMenu(false)}*/}
            {/*                    >*/}
            {/*                        {translate(link.label)}*/}
            {/*                    </NavLink>*/}
            {/*                </li>*/}
            {/*            ))}*/}
            {/*        </ul>*/}


            {/*        {user ? (*/}
            {/*            <div className={classes.userDropdownWrapper}>*/}
            {/*                <div*/}
            {/*                    className={classes.userDropdownTrigger}*/}
            {/*                    onClick={() => setIsOpen(prev => !prev)}*/}
            {/*                >*/}
            {/*                    {user}*/}
            {/*                </div>*/}
            {/*                {isOpen && (*/}
            {/*                    <ul className={classes.userDropdownMenu}>*/}
            {/*                        <li*/}
            {/*                            className={classes.userDropdownItem}*/}
            {/*                            onClick={() => navigate(`${Routes.payments}`)}*/}
            {/*                        >*/}
            {/*                            {translate('payments')}*/}
            {/*                        </li>*/}
            {/*                        <li*/}
            {/*                            className={classes.userDropdownItem}*/}
            {/*                            onClick={() => navigate(`${Routes.settings}`)}*/}
            {/*                        >*/}
            {/*                            {translate('settings')}*/}
            {/*                        </li>*/}
            {/*                        <li*/}
            {/*                            className={classes.userDropdownItem}*/}
            {/*                            onClick={handleLogout}*/}
            {/*                        >*/}
            {/*                            {translate('logout')}*/}
            {/*                        </li>*/}
            {/*                    </ul>*/}
            {/*                )}*/}
            {/*            </div>*/}
            {/*        ) : (*/}
            {/*            <NavLink to={Routes.login}>*/}
            {/*                <button className={classes.signInBtn}>*/}
            {/*                    {translate('login_button')}*/}
            {/*                </button>*/}
            {/*            </NavLink>*/}
            {/*        )}*/}

            {/*        /!* Language Selector *!/*/}
            {/*        <ul className={classes.languageSelector}>*/}
            {/*            {languages.map((item: ILanguages) => (*/}
            {/*                <li*/}
            {/*                    key={item.key}*/}
            {/*                    className={`${classes.langBtn} ${currentLang === item.key ? classes.activeLang : ''}`}*/}
            {/*                    onClick={() => dispatch(setLocale(item.key))}*/}
            {/*                >*/}
            {/*                    {item.value}*/}
            {/*                </li>*/}
            {/*            ))}*/}
            {/*        </ul>*/}

            {/*        /!* Contact Info *!/*/}
            {/*        <div className={classes.contactInfo}>*/}
            {/*            <div className={classes.contactItem}>*/}
            {/*                <MessageOutlined />*/}
            {/*                <span>info@azincloud.az</span>*/}
            {/*            </div>*/}
            {/*            <div className={classes.contactItem}>*/}
            {/*                <EnvironmentOutlined />*/}
            {/*                <span>74, əlibəy Hüseynzadə, AZ1009, Bakı, Azərbaycan</span>*/}
            {/*            </div>*/}
            {/*        </div>*/}

            {/*        /!* Social Links *!/*/}
            {/*        <div className={classes.socialLinks}>*/}
            {/*            {socialLinks.map(link => (*/}
            {/*                <a key={link.label} href={link.href} aria-label={link.label}>*/}
            {/*                    {link.icon}*/}
            {/*                </a>*/}
            {/*            ))}*/}
            {/*        </div>*/}

            {/*    </nav>*/}
            {/*</div>*/}
        </div>
    );
};

export default HeaderModalComponent;
