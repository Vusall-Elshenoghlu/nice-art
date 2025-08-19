import {createUseStyles} from 'react-jss';
import {rem} from '../../../../assets/styles/abstracts/functions';
import colors from '../../../../assets/styles/abstracts/color';
import {breakpoint} from '../../../../assets/styles/abstracts/mixins';
import {breakpoints} from '../../../../assets/styles/abstracts/sizes';

const styles = {
    wrapper: {
        width: '100%',
        height: rem(400),
    },
    headingText: {
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
    malesudaParagraph: {
        fontSize: rem(17),
        lineHeight: rem(22),
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

export const useHeroSectionStyles = createUseStyles(styles);