import {createUseStyles} from 'react-jss';
import {rem} from 'assets/styles/abstracts/functions';
import colors from 'assets/styles/abstracts/color';
import fonts from 'assets/styles/abstracts/fonts';
import {breakpoint} from '../../../../../assets/styles/abstracts/mixins';
import {breakpoints} from '../../../../../assets/styles/abstracts/sizes';

interface HeaderProps {
    isProductDetail: boolean;
}

const styles = {

    headerSection: (props: HeaderProps) => ({
        backgroundColor: props.isProductDetail ? '#fafff3 !important' : '#fff',
    }),

    logoImg: {
        width: '100%',
        height: '100%',
    },
    left: {
        width: rem(147.48),
        height: rem(40),
    },

    rightContainer: {
        height: '100%',
        display: 'flex',
        gap: rem(32),

        [breakpoint(breakpoints.laptopXL)]: {
            gap: rem(24),
        },

        [breakpoint(breakpoints.laptopML)]: {
            gap: rem(20),
        },

        [breakpoint(breakpoints.tabletM)]: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: rem(12),
            width: '100%',
        },

        [breakpoint(breakpoints.mobileL)]: {
            gap: rem(8),
        },
    },

    hamburger: {
        display: 'none',
        fontSize: rem(24),
        color: colors.activeLiColor,
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

        [breakpoint(breakpoints.tabletM)]: {
            display: 'flex !important',
            order: 1,
        },

        [breakpoint(breakpoints.laptopSM)]: {
            display: 'flex !important',
            order: 1,
        },

        [breakpoint(breakpoints.mobileL)]: {
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
        [breakpoint(breakpoints.tabletM)]: {
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

        [breakpoint(breakpoints.laptopXL)]: {
            gap: rem(24),
        },

        [breakpoint(breakpoints.laptopML)]: {
            gap: rem(20),
        },

        [breakpoint(breakpoints.laptopS)]: {
            gap: rem(16),
        },

        [breakpoint(breakpoints.tabletM)]: {
            display: 'none',
        },
    },

    activeLink: {
        color: `${colors.activeLiColor} !important`,
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


        [breakpoint(breakpoints.laptopXL)]: {
            fontSize: rem(15),
        },

        [breakpoint(breakpoints.laptopML)]: {
            fontSize: rem(14),
            padding: `${rem(6)} ${rem(2)}`,
        },

        [breakpoint(breakpoints.laptopS)]: {
            fontSize: rem(13),
            padding: `${rem(4)} ${rem(1)}`,
        },
    },
    logoAndLink: {
        display: 'flex',
        alignItems: 'center',
        gap: rem(2),
    }


};

export const useHeaderNavbarStyles = createUseStyles(styles);