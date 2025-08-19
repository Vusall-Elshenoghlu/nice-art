import {createUseStyles} from 'react-jss';
import {rem} from '../../../../assets/styles/abstracts/functions';
import {breakpoint} from '../../../../assets/styles/abstracts/mixins';
import {breakpoints} from '../../../../assets/styles/abstracts/sizes';
import colors from '../../../../assets/styles/abstracts/color';

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
    discoverUs: {
        marginTop: rem(100),
        width: '100%',
        height: 'auto',
    },
    leftDiv: {
        width: '100%',
        height: 'auto',
        '& h1': {
            fontWeight: '800',
            fontSize: rem(44),
            lineHeight: '100%',
            letterSpacing: '0%',
            color: colors.liColor,
            marginLeft: rem(-3),
        },
        '& h6': {
            marginTop: rem(30),
            fontWeight: '400',
            fontSize: rem(22),
            lineHeight: rem(35),
            letterSpacing: '0%',
            color: colors.grayColor,
            marginLeft: rem(-3),
        },
        '& h2': {
            marginTop: rem(18),
            fontWeight: '800',
            fontSize: rem(32),
            letterSpacing: '0%',
            lineHeight: '100%',
            color: colors.liColor,
            marginBottom: rem(18),
        },
        '& a': {
            fontWeight: '400',
            fontSize: rem(22),
            lineHeight: rem(35),
            textDecoration: 'underline',
            textStyle: 'solid',
            color: colors.grayColor,
            marginTop: rem(18),
        }

    },
    aTeg: {
        fontSize: `${rem(21 )} !important`,
    },
    rightDiv: {
        width: '100%',
        height: '100%',
        [breakpoint(breakpoints.tabletM)]: {
            marginBottom: rem(350),
        },

    },
    gallery: {
        width: '100%',
        height: '100%',
        position: 'relative',
    },
    image: {
        width: rem(208),
        height: rem(300),
        border:  `${rem(4)} solid ${colors.activeLiColor}`,
        objectFit: 'cover',
        [breakpoint(breakpoints.tabletM)]: {
            width: rem(135),
            height: rem(175),
        },


        '&:nth-child(1)': {
            position: 'absolute',
            top: '15%',
            left: '61%',
        },
        '&:nth-child(2)': {
            position: 'absolute',
            top: '5%',
            left: '15%',
        },
        '&:nth-child(3)': {
            position: 'absolute',
            left: '45%',
            top: '48%'
        },

        '&:nth-child(4)': {
            position: 'absolute',
            top: '40%',
            left: '0%',
        },

    },
}as const;

export const useContactDiscoverusStyles = createUseStyles(styles);