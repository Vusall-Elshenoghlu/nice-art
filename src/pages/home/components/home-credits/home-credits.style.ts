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
            backgroundColor: colors.activeLiColorWithOpacith
        },
        [breakpoint(breakpoints.mobileL)]: {
            padding: rem(10),
            backgroundColor: colors.activeLiColorWithOpacith

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
            textAlign: 'center',
            alignItems: 'center',
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
        backgroundColor: colors.activeLiColorWithOpacith,
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
        width: rem(226),
        height: rem(51),
        backgroundColor: colors.mainBGColor,
        border: '1px solid #F1F1F1',
        padding: rem(20),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: rem(10),

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
        marginTop: rem(6),
        width: rem(315),
        height: rem(51),
        borderRadius: rem(4),
        backgroundColor: colors.mainBGColor,
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
            height: 2,
            marginTop: rem(-15),
        },
        '& .ant-slider-track': {
            backgroundColor: colors.activeLiColor,
            height: 2,
            marginTop: rem(-15),
            '&:hover': {
                backgroundColor: colors.activeLiColor,
            },
        },
        '& .ant-slider-handle': {

            marginTop: rem(-15),
            border: 'none',
            dotBorderColor: colors.activeLiColor,
            dotActiveBorderColor: colors.activeLiColor,
            '&:hover': {
                boxShadow: 'none',

            },
            '&:focus': {
                boxShadow: 'none',
            },
        },

    },
    checkboxAndButton: {
        marginTop: rem(15),
    },

    applyBtn: {
        width: rem(320),
        height: rem(48),
        borderRadius: rem(8),
        padding: `${rem(12)} ${rem(24)}`,
        backgroundColor: colors.activeLiColor,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        gap: rem(10),

        '& p': {
            color: colors.mainBGColor,
            fontSize: rem(16),
            lineHeight: rem(24),
            fontWeight: '400',
        },

        [breakpoint(breakpoints.tabletM)]: {
            width: '100%',
        },
    },
}as const;

export const useHomeCreditsStyles = createUseStyles(styles);