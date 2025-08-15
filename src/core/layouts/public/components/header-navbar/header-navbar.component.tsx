import Logo from 'assets/images/statics/Logo.png';
import { useHeaderNavbarStyles } from './header-navbar.style';
import { NavLink } from 'react-router-dom';
import { Routes } from 'router/routes';
import { useState } from 'react';
import HeaderModalComponent from '../header-modal/header-modal.component';

const HeaderNavbarComponent = () => {
    const classes = useHeaderNavbarStyles();
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const navLinks = [
        { to: Routes.about, label: 'about' },
        { to: Routes.products, label: 'products' },
        { to: Routes.contact, label: 'contact' },
        { to: Routes.partners, label: 'partners' },
    ];

    return (
        <div className={classes.navbarContainer}>
            <div className={'container'}>
                <div className='row'>
                    <div className='col-6 col-md-3 col-lg-2 p-35'>
                        <div className={classes.left}>
                            <NavLink to={Routes.default}>
                                <img className={classes.logoImg} src={Logo} alt='logo'/>
                            </NavLink>
                        </div>
                    </div>

                    <div className='col-6 col-md-9 col-lg-10 p-30'>
                        <div className={`${classes.rightContainer} d-flex align-items-center`}>
                            {/* Hamburger icon */}
                            <div
                                className={`${classes.hamburger} d-lg-none`}
                                onClick={() => setIsOpenMenu(prev => !prev)}
                            >
                                &#9776; {/* üç xəttli hamburger */}
                            </div>

                            {isOpenMenu && (
                                <HeaderModalComponent setIsOpenMenu={setIsOpenMenu}/>
                            )}

                            <div className='d-none d-lg-flex align-items-center w-100 justify-content-between'>
                                <nav className={classes.navigation}>
                                    <ul className={`${classes.navItems} d-flex`}>
                                        {navLinks.map(({ to, label }) => (
                                            <li key={to} className='me-4'>
                                                <NavLink
                                                    to={to}
                                                    className={classes.navLink}
                                                >
                                                    {label}
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
        </div>
    );
};

export default HeaderNavbarComponent;
