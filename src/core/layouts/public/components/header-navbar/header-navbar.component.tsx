import { useState } from 'react';
import {useLocation, NavLink, matchPath} from 'react-router-dom';
import Logo from 'assets/images/statics/Logo.png';
import HeaderModalComponent from '../header-modal/header-modal.component';
import useLocalization from '../../../../../assets/lang';
import { Routes } from 'router/routes';
import { useHeaderNavbarStyles } from './header-navbar.style';
import {NavbarMiniLogoIcon} from '../../../../../assets/images/icons/arrows';

const HeaderNavbarComponent = () => {
    const location = useLocation();
    const isProductDetail = matchPath({ path: `${Routes.products}/:id`, end: true }, location.pathname) !== null;
    const classes = useHeaderNavbarStyles({ isProductDetail });

    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const translate = useLocalization();

    const navLinks = [
        { to: Routes.home, label: translate('navbar_home') },
        { to: Routes.about, label: translate('navbar_about') },
        { to: Routes.products, label: translate('navbar_products') },
        { to: Routes.partners, label: translate('navbar_partners') },
        { to: Routes.contact, label: translate('navbar_contact') },
    ];

    return (
        <header className={classes.headerSection}>
            <div className='container'>
                <div className='row'>
                    <div className='col-6 col-md-3 col-lg-2 py-35'>
                        <div className={classes.left}>
                            <NavLink to={Routes.default}>
                                <img className={classes.logoImg} src={Logo} alt='logo'/>
                            </NavLink>
                        </div>
                    </div>

                    <div className='col-6 col-md-9 col-lg-10 p-30'>
                        <div className={`${classes.rightContainer} d-flex align-items-center`}>
                            <div className={`${classes.hamburger} d-lg-none`} onClick={() => setIsOpenMenu(prev => !prev)}>
                                &#9776;
                            </div>

                            {isOpenMenu && <HeaderModalComponent setIsOpenMenu={setIsOpenMenu}/>}

                            <div className='d-none d-lg-flex align-items-center w-100 justify-content-between'>
                                <nav className={classes.navigation}>
                                    <ul className={`${classes.navItems} d-flex`}>
                                        {navLinks.map(({ to, label }) => (
                                            <li key={to}>
                                                <NavLink
                                                    to={to}
                                                    className={({ isActive }) =>
                                                        `${classes.navLink} ${isActive ? classes.activeLink : ''}`
                                                    }
                                                >
                                                    {({ isActive }) => (
                                                        <div className={classes.logoAndLink}>
                                                            {isActive && <NavbarMiniLogoIcon />}
                                                            {label}
                                                        </div>
                                                    )}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderNavbarComponent;
