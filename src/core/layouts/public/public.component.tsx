import {Outlet} from 'react-router-dom';
import {usePublicLayoutStyles} from './public.style';
import HeaderNavbarComponent from './components/header-navbar/header-navbar.component';

const PublicComponent = () => {
    const classes = usePublicLayoutStyles();

    return (
        <div className={classes.public}>
            <HeaderNavbarComponent/>
                <Outlet/>
        </div>
    );
};


export default PublicComponent;

