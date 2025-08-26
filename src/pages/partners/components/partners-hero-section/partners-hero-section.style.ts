import {createUseStyles} from 'react-jss';
import {rem} from '../../../../assets/styles/abstracts/functions';
import colors from '../../../../assets/styles/abstracts/color';
import {breakpoint} from '../../../../assets/styles/abstracts/mixins';
import {breakpoints} from '../../../../assets/styles/abstracts/sizes';
const styles = {
    homeIconSection: {
        display: 'flex',
        alignItems: 'center',
        gap: rem(10),
        marginBottom: rem(40),

        '& h2': {
            color: colors.liColor,
            fontSize: rem(16),
            fontWeight: 'normal',
        },


        [breakpoint(breakpoints.tabletM)]: {
            marginBottom: rem(24),
            gap: rem(8),
            '& h2': {
                fontSize: rem(14),
            }
        }
    },
    titleText: {
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
    headintText: {
        fontWeight: '800',
        fontSize: rem(44),
        lineHeight: '100%',
        letterSpacing: '0%',
    },
    malesudaParagraph: {
        marginTop: rem(10),
        fontSize: rem(16),
        lineHeight: rem(22),
        fontWeight: '400',
        color: colors.liColor,
    },
    partnerBtn: {
        width: rem(215),
        height: rem(48),
        borderRadius: rem(8),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: rem(12),
        border: 'none',
        marginTop: rem(15),
        cursor: 'pointer',
        backgroundColor: colors.activeLiColor,
        '& p': {
            fontSize: rem(16),
            fontWeight: '400',
            lineHeight: rem(24),
            letterSpacing: '0%',
            color: colors.main_bg_color,
        }
    }

};
export const usePartnerHeroSectionStyles = createUseStyles(styles);