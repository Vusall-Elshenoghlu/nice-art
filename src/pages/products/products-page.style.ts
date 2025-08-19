import {createUseStyles} from 'react-jss';
import {rem} from '../../assets/styles/abstracts/functions';
import colors from '../../assets/styles/abstracts/color';
import {breakpoint} from '../../assets/styles/abstracts/mixins';
import {breakpoints} from '../../assets/styles/abstracts/sizes';
import fonts from '../../assets/styles/abstracts/fonts';

const styles = {
    productIconSection:{
        display: 'flex',
        alignItems: 'center',
        gap: rem(10),
        marginBottom: rem(40),

        '& h2': {
            color: colors.activeLiColor,
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
    productsTitleSection: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: rem(30),

        [breakpoint(breakpoints.tabletM)]: {
            flexDirection: 'column',
            gap: rem(24),
        }
    },
    firstTitle: {
        flex: 1,
        '& h1': {
            fontFamily: fonts.mainFont,
            fontWeight: 800,
            fontSize: rem(60),
            color: colors.activeLiColor,
            lineHeight: 1.1,
            margin: 0,
        },


        [breakpoint(breakpoints.tabletM)]: {
            marginTop: rem(16),
            paddingRight: 0,
            '& h1': {
                fontSize: rem(32),
            }
        }
    },
    secondTitle: {
        fontFamily: fonts.mainFont,
        flex: 1,
        paddingLeft: rem(20),
        '& h1': {
            fontWeight: 800,
            fontSize: rem(44),
            color: colors.liColor,
            lineHeight: 1.1,
            margin: 0,
            marginBottom: rem(20),
        },

        [breakpoint(breakpoints.tabletM)]: {
            paddingLeft: 0,
            '& h1': {
                fontSize: rem(28),
                marginBottom: rem(16),
            }
        }
    },
    description: {
        color: colors.liColor,
        fontSize: rem(16),
        lineHeight: 1.6,
        margin: 0,
        fontFamily: fonts.mainFont,

        [breakpoint(breakpoints.tabletM)]: {
            fontSize: rem(14),
            lineHeight: 1.5,
        }
    },

}as const;

export  const  useProductStyles = createUseStyles(styles);