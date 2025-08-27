import {createUseStyles} from 'react-jss';
import {rem} from '../../../../assets/styles/abstracts/functions';
import {breakpoint} from '../../../../assets/styles/abstracts/mixins';
import {breakpoints} from '../../../../assets/styles/abstracts/sizes';
import colors from '../../../../assets/styles/abstracts/color';

const styles = {
    wrapper: {
        width: '100%',
        marginTop: rem(250),
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
            marginTop: rem(10),
        }
    }
};

export const useHomeProductsStyles = createUseStyles(styles);