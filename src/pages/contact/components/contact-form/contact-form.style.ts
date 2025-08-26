import {createUseStyles} from 'react-jss';
import colors from '../../../../assets/styles/abstracts/color';
import {rem} from '../../../../assets/styles/abstracts/functions';
import {breakpoint} from '../../../../assets/styles/abstracts/mixins';
import {breakpoints} from '../../../../assets/styles/abstracts/sizes';

const styles = {
    wrapper: {
        marginTop: rem(150),
        paddingTop: rem(100),
        width: '100%',
        minHeight: '60vh',
        height: 'auto',
        backgroundColor: colors.footer_color_with_opacity,
        [breakpoint(breakpoints.tabletM)]: {
            paddingTop: rem(10),
        }
    },
    titleH: {
        fontWeight: '800',
        fontSize: rem(60),
        lineHeight: '100%',
        letterSpacing: '0%',
        color: colors.activeLiColor,
    },
    contact: {
        paddingTop: rem(15),
    },
    description: {
        marginTop: rem(20),
        fontWeight: '400',
        fontSize: rem(16),
        lineHeight: rem(22),
        letterSpacing: '0%',
    },
    labetInput: {
        fontSize: rem(14),
        fontWeight: '400',
        lineHeight: '100%',
        letterSpacing: '0%',
        color: colors.amountColor,
    },
    stringInput: {
        marginTop: rem(6),
        width: 'auto',
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
    prefix: {
        fontWeight: '700',
        fontSize: rem(16),
        lineHeight: '100%',
        letterSpacing: '0%',
        color: colors.amountColor,
        opacity: '60%'
    },
    submitBtn: {
        width: '100%',
        height: rem(48),
        borderRadius: rem(8),
        backgroundColor: colors.activeLiColor,
        border: '1px solid #F1F1F1',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: rem(15),
        '& h5': {
            fontSize: rem(16),
            lineHeight: rem(24),
            letterSpacing: '0%',
            color: colors.main_bg_color
        }
    },
    iframe: {
        marginTop: rem(100),
        width: '100%',
        height: rem(440),
        border: 'none',
    },
    textInput: {
        [breakpoint(breakpoints.tabletM)]: {
            height: rem(107),
            display: 'block',
            '& Input': {
                height: rem(50),
                '&::placeholder': {
                    paddingTop: rem(5),
                }

            }
        }
    }
};

export const useContactFormStyles = createUseStyles(styles);