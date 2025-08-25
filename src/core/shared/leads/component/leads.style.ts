import {createUseStyles} from 'react-jss';
import {rem} from '../../../../assets/styles/abstracts/functions';
import {breakpoint} from '../../../../assets/styles/abstracts/mixins';
import {breakpoints} from '../../../../assets/styles/abstracts/sizes';
import colors from '../../../../assets/styles/abstracts/color';

const styles = {
    wrapper: {
        width: '100%',
        marginTop: rem(300),

        '& h6': {
            fontSize: rem(16),
            fontWeight: '800',
            lineHeight: '100%',
            letterSpacing: '0%',
            color: colors.activeLiColor,
        },
        '& h1': {
            fontSize: rem(44),
            fontWeight: '800',
            lineHeight: '100%',
            color: colors.liColor,
            [breakpoint(breakpoints.tabletM)]: {
                fontSize: rem(30),
            }
        },
        '& p': {
            fontSize: rem(16),
            fontWeight: '400',
            lineHeight: rem(24),
            letterSpacing: '0%',
            color: colors.liColor,
            [breakpoint(breakpoints.tabletM)]: {
                marginTop:  rem(8),
            }
        },
        [breakpoint(breakpoints.tabletM)]: {
            marginTop: rem(0),
        }
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
        color: colors.mainBGColor,
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
        backgroundColor: colors.mainBGColor,
        color: colors.activeLiColor,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flow: 'vertical',
        gap: rem(8),
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: colors.activeLiColorWithOpacith,
        },

        '& p': {
            lineHeight: rem(24),
            fontSize: rem(16),
            fontWeight: '400',
            letterSpacing: '0%',
        }
    }
};

export const useLeadsStyles = createUseStyles(styles);