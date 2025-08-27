import {createUseStyles} from 'react-jss';
import {rem} from '../../../../assets/styles/abstracts/functions';
import colors from '../../../../assets/styles/abstracts/color';
import {breakpoint} from '../../../../assets/styles/abstracts/mixins';
import {breakpoints} from '../../../../assets/styles/abstracts/sizes';

const styles = {

    wrapper: {
        marginTop: rem(200),
        width: '100%',
        height: rem(1067),
        backgroundColor: colors.active_li_color_with_opacity,
        position: 'relative',
        [breakpoint(breakpoints.tabletM)]: {
            marginTop: rem(120),
        },
        [breakpoint(breakpoints.mobileL)]: {
            height: 'auto',
            marginTop: rem(80),
            paddingBottom: rem(40),
        },
    },
    absoluteDiv: {
        width: rem(958),
        height: rem(578),
        position: 'absolute',
        top: rem(-150),
        left: rem(75),

        [breakpoint(breakpoints.laptopSM)]: {
            width: rem(750),
            height: 'auto',
            left: rem(40),
            top: rem(-120),
        },
        [breakpoint(breakpoints.tabletM)]: {
            width: '90%',
            position: 'relative',
            top: rem(-80),
            left: '5%',
        },
        [breakpoint(breakpoints.mobileL)]: {
            width: '100%',
            position: 'relative',
            top: 0,
            left: 0,
            height: 'auto',
        },
    },
    imgAndPlay: {
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        '& img': {
            width: '100%',
            height: 'auto',
        },
    },
    playContainer: {
        position: 'absolute',
        bottom: rem(20),
        left: rem(20),
        width: rem(84),
        height: rem(84),
        borderRadius: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.24)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        [breakpoint(breakpoints.tabletM)]: {
            display: 'none'
        },
        [breakpoint(breakpoints.mobileL)]: {
            display: 'none'
        },
    },
    playSecondDiv: {
        width: rem(69),
        height: rem(69),
        borderRadius: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.48)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        [breakpoint(breakpoints.mobileL)]: {
            width: rem(40),
            height: rem(40),
        },
    },
    playLastDiv: {
        width: rem(52),
        height: rem(52),
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',

        [breakpoint(breakpoints.mobileL)]: {
            width: rem(28),
            height: rem(28),
        },
    },
    videoUrl: {
        width: '100%',
        borderRadius: rem(8),
    },
    malesuadaPar: {
        marginTop: rem(20),
        fontWeight: 'Regular',
        fontSize: rem(16),
        lineHeight: rem(22),
        letterSpacing: '0%',
        maxWidth: '100%',

        [breakpoint(breakpoints.tabletM)]: {
            fontSize: rem(14),
            lineHeight: rem(20),
            padding: rem(15)
        },
        [breakpoint(breakpoints.mobileL)]: {
            fontSize: rem(13),
            lineHeight: rem(18),
            textAlign: 'justify',
        },
    },
    aboutUsContainer: {
        marginTop: rem(70),
        marginBottom: rem(70),
        width: '100%',
        height: '100%',

        [breakpoint(breakpoints.tabletM)]: {
            marginTop: rem(50),
        },
        [breakpoint(breakpoints.mobileL)]: {
            marginTop: rem(30),
            padding: `0 ${rem(16)}`,
        },
    },

} as const;

export const useHomeAboutUsStyles = createUseStyles(styles);
