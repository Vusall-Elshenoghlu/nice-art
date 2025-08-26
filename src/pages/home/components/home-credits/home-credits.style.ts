import {createUseStyles} from 'react-jss';
import {rem} from '../../../../assets/styles/abstracts/functions';
import colors from '../../../../assets/styles/abstracts/color';
import {breakpoint} from '../../../../assets/styles/abstracts/mixins';
import {breakpoints} from '../../../../assets/styles/abstracts/sizes';
const styles = {
    wrapper: {
        minHeight: rem(583),
        height: 'auto',
        position: 'relative',
        [breakpoint(breakpoints.tabletM)]: {
            height: 'auto',
            padding: rem(20),
            backgroundColor: colors.active_li_color_with_opacity
        },
        [breakpoint(breakpoints.mobileL)]: {
            padding: rem(10),
            backgroundColor: colors.active_li_color_with_opacity

        },
    },

    leftDiv: {
        width: '33%',
        height: '100%',
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',

        '& h6': {
            fontSize: rem(16),
            fontWeight: '800',
            lineHeight: '100%',
            color: colors.activeLiColor,
        },
        '& h1': {
            fontWeight: '800',
            fontSize: rem(44),
            color: colors.liColor,
            marginTop: rem(12),
        },
        '& p': {
            fontSize: rem(16),
            fontWeight: '400',
            lineHeight: rem(22),
            color: colors.liColor,
            marginTop: rem(10),
        },

        [breakpoint(breakpoints.tabletM)]: {
            position: 'relative',
            width: '100%',
            marginBottom: rem(20),
        },
        [breakpoint(breakpoints.mobileL)]: {
            '& h1': {
                fontSize: rem(28),
            },
            '& p': {
                fontSize: rem(14),
                lineHeight: rem(20),
            },
        },
    },

    rightDiv: {
        width: '90%',
        marginLeft: 'auto',
        height: rem(583),
        backgroundColor: colors.active_li_color_with_opacity,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingRight: rem(18),

        [breakpoint(breakpoints.tabletM)]: {
            width: '100%',
            height: 'auto',
            justifyContent: 'center',
            padding: rem(20),
            backgroundColor: 'transparent',
        },
        [breakpoint(breakpoints.mobileL)]: {
            padding: rem(10),
            backgroundColor: 'transparent',

        },
    },

    creditDiv: {
        width: rem(681),
        minHeight: rem(343),
        height: 'auto',
        padding: rem(18),

        '& p': {
            color: colors.amountColor,
            fontSize: rem(12),
        },
        '& h1': {
            fontWeight: '500',
            fontSize: rem(18),
            color: colors.activeLiColor,
        },

        [breakpoint(breakpoints.tabletM)]: {
            width: '100%',

        },
    },
    amountText: {
        fontWeight: '500',
        fontSize: rem(16),
        color: colors.amountColor
    },
    input: {
        width: rem(215),
        height: rem(51),
        backgroundColor: colors.main_bg_color,
        border: '1px solid #E5E5E5',
        padding: `0 ${rem(20)}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: rem(10),
        marginBottom: rem(20),

        '& h2': {
            fontSize: rem(16),
        },
        '& h1': {
            fontSize: rem(16),
            fontWeight: '500',
        },

        [breakpoint(breakpoints.tabletM)]: {
            width: '100%',
        },
    },

    stringInput: {
        marginTop: rem(10),
        marginBottom: rem(20),
        width: '100%',
        height: rem(51),
        borderRadius: rem(4),
        backgroundColor: colors.main_bg_color,
        border: '1px solid #F1F1F1',
        paddingLeft: rem(15),
        display: 'flex',
        alignItems: 'center',

        [breakpoint(breakpoints.tabletM)]: {
            width: '100%',
        },
    },
    customSlider: {
        railBg: 'red',
        '& .ant-slider-rail': {
            backgroundColor: 'F1F1F1',
            height: rem(1),
            marginTop: rem(-25),
            marginLeft: rem(-8),
        },
        '& .ant-slider-track': {
            height:rem(2),
            backgroundColor: colors.activeLiColor,
            marginTop: rem(-25),
            marginLeft: rem(-8),
            '&:hover': {
                backgroundColor: colors.activeLiColor,
            },
        },
        '& .ant-slider-handle': {
            marginTop: rem(-23),
            boxShadow: 'none !important',
            transform: 'scale(1) !important',
            transition: 'none !important',


            '&:hover, &:focus, &:active': {
                border: 'none !important',
                boxShadow: 'none !important',
                transform: 'scale(1) !important',
                backgroundColor: 'transparent !important',
            },

            '&::before': {
                display: 'none !important',
            },

            '&::after': {
                height: rem(9),
                width: rem(9),
                border: '3px solid #3E6F00 !important',
                boxShadow: '0 0 0 1px #DFE4D9',
                transform: 'scale(1) !important',
                marginLeft: rem(-8),
            },
        },

        '& .ant-slider-handle-dragging': {
            transform: 'scale(1) !important',
            boxShadow: 'none !important',

            '&::after': {
                transform: 'scale(1) !important',
            }
        }

    },
    checkboxAndButton: {
        marginTop: rem(15),
    },

    applyBtn: {
        width: '100%',
        height: rem(48),
        borderRadius: rem(8),
        padding: `${rem(12)} ${rem(24)}`,
        border: 'none',
        backgroundColor: colors.activeLiColor,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        gap: rem(10),

        '& p': {
            color: colors.main_bg_color,
            fontSize: rem(16),
            lineHeight: rem(24),
            fontWeight: '400',
        },

        [breakpoint(breakpoints.tabletM)]: {
            width: '100%',
        },
    },
    prefix: {
        fontWeight: '700',
        fontSize: rem(16),
        lineHeight: '100%',
        letterSpacing: '0%',
        color: colors.amountColor,
        opacity: '60%'
    },
    row: {
        display: 'flex',
        width: '100%',
        [breakpoint(breakpoints.tabletM)]:{
            display: 'flex',
            flexDirection: 'column',
        }
    }
}as const;

export const useHomeCreditsStyles = createUseStyles(styles);