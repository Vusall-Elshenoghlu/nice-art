import {createUseStyles} from 'react-jss';
import {rem} from 'assets/styles/abstracts/functions';
import colors from 'assets/styles/abstracts/color';
import fonts from 'assets/styles/abstracts/fonts';
import {breakpoint} from '../../../../../assets/styles/abstracts/mixins';
import {breakpoints} from '../../../../../assets/styles/abstracts/sizes';
const styles = {
    navbarContainer: {
        width: '100%',
        backgroundColor: colors.mainBGColor,
        zIndex: '100 !important',
        display: 'flex',
        alignItems: 'center',


        [breakpoint(1024)]: {
            height: rem(80),
            paddingLeft: rem(50),
            paddingRight: rem(80),
        },

        [breakpoint(768)]: {
            height: rem(70),
            paddingLeft: rem(20),
            paddingRight: rem(20),
        },

        [breakpoint(480)]: {
            height: rem(60),
            paddingLeft: rem(15),
            paddingRight: rem(15),
        },
    },
    logoImg: {
        width: rem(165),
        height: rem(40),
        objectFit: 'contain',

        [breakpoint(1024)]: {
            width: rem(140),
            height: rem(35),
        },

        [breakpoint(768)]: {
            width: rem(120),
            height: rem(30),
        },

        [breakpoint(480)]: {
            width: rem(100),
            height: rem(25),
        },
    },
    left: {
        width: '100%',
        alignItems: 'center',
        '& img': {
            display: 'block',
        }
    },

    rightContainer: {
        height: '100%',
        display: 'flex',
        gap: rem(32),

        [breakpoint(1200)]: {
            gap: rem(24),
        },

        [breakpoint(1024)]: {
            gap: rem(20),
        },

        [breakpoint(768)]: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: rem(12),
            width: '100%',
        },

        [breakpoint(480)]: {
            gap: rem(8),
        },
    },

    hamburger: {
        display: 'none',
        fontSize: rem(24),
        color: '#ffffff',
        cursor: 'pointer',
        padding: rem(8),
        borderRadius: rem(4),
        transition: 'background-color 0.3s ease',
        minWidth: rem(40),
        minHeight: rem(40),
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '80%',

        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
        },

        [breakpoint(768)]: {
            display: 'flex !important',
            order: 1,
        },

        [breakpoint(960)]: {
            display: 'flex !important',
            order: 1,
        },

        [breakpoint(480)]: {
            fontSize: rem(20),
            padding: rem(6),
            minWidth: rem(32),
            minHeight: rem(32),
        },
    },

    navigation: {
        display: 'flex',
        alignItems: 'center',
        width: 'auto',
        marginLeft: 'auto',
        [breakpoint(768)]: {
            display: 'none',
        },
    },

    navItems: {
        display: 'flex',
        alignItems: 'center',
        gap: rem(32),
        listStyle: 'none',
        flexWrap: 'nowrap',
        '& li': {
            display: 'flex',
            alignItems: 'center',
        },

        [breakpoint(1200)]: {
            gap: rem(24),
        },

        [breakpoint(1024)]: {
            gap: rem(20),
        },

        [breakpoint(900)]: {
            gap: rem(16),
        },

        [breakpoint(768)]: {
            display: 'none',
        },
    },

    navLink: {
        color: colors.liColor,
        fontFamily: fonts.mainFont,
        fontWeight: '500',
        fontStyle: 'normal',
        fontSize: rem(16),

        '&:hover': {
            color: colors.activeLiColor,
        },
        '&.active': {
            color: colors.activeLiColor,
        },

        [breakpoint(1200)]: {
            fontSize: rem(15),
        },

        [breakpoint(1024)]: {
            fontSize: rem(14),
            padding: `${rem(6)} ${rem(2)}`,
        },

        [breakpoint(900)]: {
            fontSize: rem(13),
            padding: `${rem(4)} ${rem(1)}`,
        },
    },



};

export const useHeaderNavbarStyles = createUseStyles(styles);