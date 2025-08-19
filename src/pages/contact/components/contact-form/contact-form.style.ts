import {createUseStyles} from 'react-jss';
import colors from '../../../../assets/styles/abstracts/color';
import {rem} from '../../../../assets/styles/abstracts/functions';
import {breakpoint} from '../../../../assets/styles/abstracts/mixins';
import {breakpoints} from '../../../../assets/styles/abstracts/sizes';
const styles = {
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        marginTop: rem(150),
        width: '100%',
        minHeight: '60vh',
        height: 'auto',
        backgroundColor: colors.footerColorWithOpacith
    },
    titleH: {
        fontWeight: '800',
        fontSize: rem(60),
        lineHeight: '100%',
        letterSpacing: '0%',
        color: colors.activeLiColor
    },
    description: {
        marginTop:  rem(20),
        fontWeight: '400',
        fontSize: rem(16),
        lineHeight: rem(22),
        letterSpacing: '0%',
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
};

export const useContactFormStyles = createUseStyles(styles);