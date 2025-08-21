import { useHeaderModalStyles } from './header-modal.style';
import { NavLink } from 'react-router-dom';
import { Routes } from '../../../../../router/routes';
import { FacebookOutlined, InstagramOutlined, LinkedinOutlined, YoutubeOutlined } from '@ant-design/icons';
import useLocalization from '../../../../../assets/lang';

const HeaderModalComponent = ({ setIsOpenMenu }: { setIsOpenMenu: (open: boolean) => void }) => {
    const classes = useHeaderModalStyles();
    const translate = useLocalization();

    const navLinks = [
        { to: Routes.about, label: translate('navbar_about') },
        { to: Routes.products, label: translate('navbar_products') },
        { to: Routes.contact, label: translate('navbar_contact') },
        { to: Routes.partners, label: translate('navbar_partners') },
    ];

    const socialLinks = [
        { icon: <FacebookOutlined />, href: '#', label: 'Facebook' },
        { icon: <InstagramOutlined />, href: '#', label: 'Instagram' },
        { icon: <LinkedinOutlined />, href: '#', label: 'LinkedIn' },
        { icon: <YoutubeOutlined />, href: '#', label: 'YouTube' },
    ];

    return (
        <div className={classes.modalOverlay}>
            <div className={classes.modalContent}>
                <button className={classes.closeBtn} onClick={() => setIsOpenMenu(false)}>
                    ✕
                </button>

                <nav className={classes.nav}>
                    <ul>
                        {navLinks.map(({ to, label }) => (
                            <li key={to}>
                                <NavLink
                                    to={to}
                                    className={classes.navLink}
                                    onClick={() => setIsOpenMenu(false)}
                                >
                                    {label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className={classes.socials}>
                    {socialLinks.map(({ icon, href, label }) => (
                        <a key={label} href={href} target='_blank' rel='noreferrer'>
                            {icon}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeaderModalComponent;
