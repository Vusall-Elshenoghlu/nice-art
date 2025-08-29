import { createUseStyles } from 'react-jss';
import { rem } from '../../../../../assets/styles/abstracts/functions';
import colors from '../../../../../assets/styles/abstracts/color';
import {transition} from '../../../../../assets/styles/abstracts/mixins';

const styles = {
    modalOverlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: colors.loadingBackdropBgColor,
        display: 'flex',
        justifyContent: 'flex-end',
        zIndex: 1000,
    },
    modalContent: {
        width: '80%',
        maxWidth: rem(320),
        background: colors.secondBg,
        height: '100%',
        padding: rem(24),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        position: 'relative',
        animation: '$slideIn 0.3s ease',
    },
    closeBtn: {
        position: 'absolute',
        top: rem(16),
        right: rem(16),
        background: 'transparent',
        border: 'none',
        fontSize: rem(22),
        cursor: 'pointer',
        color: colors.liColor,
        '&:hover': {
            color: colors.activeLiColor,
        }
    },
    nav: {
        marginTop: rem(60),
        width: '100%',
        '& ul': {
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: rem(20),
        },
    },
    navLink: {
        fontSize: rem(18),
        fontWeight: 600,
        color: colors.liColor,
        textDecoration: 'none',
        transition: transition(null, 0.3, null),
        '&:hover': {
            color: colors.activeLiColor,
        }
    },
    socials: {
        marginTop: 'auto',
        display: 'flex',
        gap: rem(20),
        '& a': {
            fontSize: rem(20),
            color: colors.liColor,
            transition: transition(null, 0.3, null),
            '&:hover': {
                color: colors.activeLiColor,
            }
        }
    },
    '@keyframes slideIn': {
        from: { transform: 'translateX(100%)' },
        to: { transform: 'translateX(0)' },
    },
} as const;

export const useHeaderModalStyles = createUseStyles(styles);
