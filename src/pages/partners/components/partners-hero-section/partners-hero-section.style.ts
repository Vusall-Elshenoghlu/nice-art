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
    partnerBtn: {
        width: rem(215),
        height: rem(48),
        gap: rem(12),
        border: 'none',
        marginTop: rem(15),
        '& p': {
            fontSize: rem(16),
            fontWeight: '400',
            lineHeight: rem(24),
            letterSpacing: '0%',
            color: colors.main_bg_color,
        }
    },
};
export const usePartnerHeroSectionStyles = createUseStyles(styles);