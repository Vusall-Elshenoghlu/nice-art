import {createUseStyles} from 'react-jss';
import {rem} from '../../../assets/styles/abstracts/functions';
import {breakpoint} from '../../../assets/styles/abstracts/mixins';
import {breakpoints} from '../../../assets/styles/abstracts/sizes';
import colors from '../../../assets/styles/abstracts/color';

const styles = {
    titleTextBig: {
        fontWeight: 'bold',
        fontSize: 70,
        lineHeight: 1,
        letterSpacing: 0,
        color: colors.activeLiColor,
        [breakpoint(breakpoints.tabletM)]: {
            fontSize: rem(37),
            lineHeight: '100%',
            marginBottom: rem(15),
            fontWeight: '800',
        }
    },
    titleTextSmall: {
        fontWeight: 'bold',
        fontSize: 60,
        lineHeight: 1,
        letterSpacing: 0,
        color: colors.activeLiColor,
        [breakpoint(breakpoints.tabletM)]: {
            fontSize: rem(37),
            lineHeight: '100%',
            marginBottom: rem(15),
            fontWeight: '800',
        }
    },

    tagText: {
        fontWeight: '800',
        color: colors.activeLiColor,
    },
    headingText: {
        marginTop: rem(15),
        fontWeight: '800',
        fontSize: rem(44),
        lineHeight: '100%',
        letterSpacing: '0%',
        color: colors.liColor,

        [breakpoint(breakpoints.tabletM)]: {
            fontSize: rem(32),
        },
        [breakpoint(breakpoints.mobileL)]: {
            fontSize: rem(24),
            lineHeight: '110%',
        },
    },
    descriptionLeftText: {
        marginTop: rem(10),
        fontSize: rem(16),
        lineHeight: rem(22),
        letterSpacing: '0%',
        color: colors.liColor,

        [breakpoint(breakpoints.tabletM)]: {
            fontSize: rem(14),
            lineHeight: rem(20),
        },
        [breakpoint(breakpoints.mobileL)]: {
            fontSize: rem(13),
            lineHeight: rem(18),
            textAlign: 'justify',
        },
    },
    descriptionRightText: {
        marginTop: rem(10),
        fontSize: rem(16),
        lineHeight: rem(22),
        letterSpacing: '0%',
        color: colors.liColor,

        [breakpoint(breakpoints.tabletM)]: {
            fontSize: rem(14),
            lineHeight: rem(20),
        },
        [breakpoint(breakpoints.mobileL)]: {
            fontSize: rem(13),
            lineHeight: rem(18),
            textAlign: 'justify',
        },
    },
    learnMoreText: {
        marginTop: rem(20),
        fontWeight: '600',
        fontSize: rem(20),
        lineHeight: rem(22),
        letterSpacing: '0%',
        color: colors.liColor,
        cursor: 'pointer',

        [breakpoint(breakpoints.mobileL)]: {
            fontSize: rem(16),
        },
    },
    lineDiv: {
        marginTop: rem(8),
        height: rem(4),
        width: rem(105),
        backgroundColor: colors.activeLiColor,
        cursor: 'pointer',

        [breakpoint(breakpoints.mobileL)]: {
            width: rem(80),
            height: rem(3),
        },
    },
    buttons: {
        display: 'flex',
        gap: rem(20),
        marginTop: rem(20),

    },
    productsBtn: {
        width: rem(148),
        height: rem(48),
        borderRadius: rem(8),
        backgroundColor: colors.activeLiColor,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: rem(8),
        border: 'none',
        color: colors.main_bg_color,
        cursor: 'pointer',
        padding: `${rem(12)} ${rem(24)} ${rem(12)} ${rem(24)}`,
        '& p': {
            lineHeight: rem(24),
            fontSize: rem(16),
            fontWeight: '400',
            letterSpacing: '0%',
        }
    },
    aboutBtn: {
        width: rem(190),
        height: rem(48),
        borderRadius: rem(8),
        border: `${rem(1)} solid ${colors.activeLiColor}`,
        backgroundColor: colors.main_bg_color,
        color: colors.activeLiColor,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flow: 'vertical',
        gap: rem(8),
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: colors.active_li_color_with_opacity,
        },

        '& p': {
            lineHeight: rem(24),
            fontSize: rem(16),
            fontWeight: '400',
            letterSpacing: '0%',
        }
    },
    rightDiv: {
        width: rem(470),
        height: rem(543),
        '& img': {
            height: '100%',
            width: 'auto',
            objectFit: 'cover',
            overflow: 'hidden',
        },

        [breakpoint(breakpoints.tabletM)]: {
            width: '100%',
            height: 'auto',
        },
        [breakpoint(breakpoints.mobileL)]: {
            width: '100%',
            height: 'auto',
            marginTop: rem(20),
        },
    },
    imgSection: {
        backgroundColor: colors.secondBg,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: rem(512),
        marginTop: rem(150),
        '& img': {
            padding: `0 ${rem(80)} ${rem(180)}`,
        },

        [breakpoint(breakpoints.tabletM)]: {
            height: rem(240),
            marginTop: rem(80),
            '& img': {
                padding: `0 ${rem(20)} ${rem(100)}`,
                maxWidth: '100%',
                height: 'auto',
            }
        }
    },
};

export const useLeadsStyles = createUseStyles(styles);