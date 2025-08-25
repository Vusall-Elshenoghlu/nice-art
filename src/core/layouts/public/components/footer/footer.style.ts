import {rem} from 'assets/styles/abstracts/functions';
import colors from 'assets/styles/abstracts/color';
import {createUseStyles} from 'react-jss';
import sizes, {breakpoints} from 'assets/styles/abstracts/sizes';
import {breakpoint, transition} from 'assets/styles/abstracts/mixins';

const styles = {
    footerSection: {
        width: '100%',
        backgroundColor: colors.footerColorWithOpacith,
        display: 'flex',
        flexDirection: 'column',
        minHeight: rem(541),
        height: 'auto',
        paddingBottom: rem(30),
    },
    firstSection: {
        marginTop: rem(100),
        [breakpoint(breakpoints.tabletM)]: {
            marginTop: rem(5),
        }

    },
    footerSubtitle: {
        marginTop: rem(30),
        fontSize: rem(16),
        fontWeight: '400',
        lineHeight: rem(24),
        color: colors.liColor,
        width: rem(310)
    },
    socialMediaIcons: {
        marginTop: rem(30),
        display: 'flex',
        gap: rem(22),
        alignItems: 'center',
    },
    headingLinks: {
        fontWeight: '700',
        fontSize: rem(20),
        lineHeight: rem(22),
        letterSpacing: '0%',
        color: colors.liColor,
    },
    footerParagraph: {
        marginTop: rem(30),
        fontSize: rem(18),
        fontWeight: '400',
        lineHeight: rem(20),
        horizontalAlign: 'center',
        color: colors.liColor,
        cursor: 'pointer',
    },
    footerContactDiv: {
        marginTop: rem(30),
        display: 'flex',
        alignItems: 'center',
        gap: rem(10),
        fontSize: rem(16),
        '& p': {
            fontSize: rem(18),
            fontWeight: '400',
            lineHeight: rem(20),
            horizontalAlign: 'center',
            color: colors.liColor,
            cursor: 'pointer',
        },
    },
    leftDiv: {
        width: 'auto',
        [breakpoint(breakpoints.tabletM)]: {
            width: '70%',
            marginTop: rem(50),
            marginBottom: rem(50),
        },
    },
    rightDiv: {
        width: 'auto',
        overflow: 'hidden',
        [breakpoint(breakpoints.tabletM)]: {
            marginTop: rem(50),
            marginLeft: rem(-70),
        },
    },
    footerBottom: {
        marginTop: rem(100),
        [breakpoint(breakpoints.tabletM)]: {
            marginTop: rem(10),
        }
    },
    copyRight: {
        fontSize: rem(18),
        fontWeight: '400',
        lineHeight: rem(30),
        letterSpacing: '0%',
        color: colors.footer_copy_right_color,
        '& a': {
            color: colors.activeLiColor,
            textDecoration: 'underline'
        }
    },
    terms: {
        [breakpoint(breakpoints.tabletM)]: {
            fontSize: rem(17),
        }
    },
    policy: {
        [breakpoint(breakpoints.tabletM)]: {
            marginLeft: rem(218),
        }
    }
};

export const useFooterStyles = createUseStyles(styles);
