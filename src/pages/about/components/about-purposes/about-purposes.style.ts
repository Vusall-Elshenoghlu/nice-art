import {createUseStyles} from 'react-jss';
import {rem} from '../../../../assets/styles/abstracts/functions';
import {breakpoint} from '../../../../assets/styles/abstracts/mixins';
import {breakpoints} from '../../../../assets/styles/abstracts/sizes';
import colors from '../../../../assets/styles/abstracts/color';
import fonts from '../../../../assets/styles/abstracts/fonts';

const styles = {
    ourGoals: {
        display: 'flex',
        alignItems: 'center',
        marginTop: rem(160),
        position: 'relative',

        [breakpoint(breakpoints.tabletM)]: {
            flexDirection: 'column',
            alignItems: 'stretch',
            marginTop: rem(60),
            position: 'static',
        }
    },
    backgroundSection: {
        backgroundColor: colors.secondBg,
        padding: `${rem(100)} ${rem(100)} ${rem(120)} ${rem(270)}`,
        marginLeft: rem(200),

        [breakpoint(breakpoints.tabletM)]: {
            padding: rem(20),
            marginLeft: 0,
            marginTop: rem(24),
        }
    },
    leftSection: {
        position: 'absolute',
        left: 0,
        top: rem(200),
        width:'100%',
        zIndex: 2,
        whiteSpace: 'pre-line',
        '& h2': {
            fontFamily: fonts.mainFont,
            fontWeight: 800,
            fontSize: rem(44),
            color: colors.liColor,
            lineHeight: 1.1,
            margin: 0,
            marginBottom: rem(20),
        },
        '& span': {
            color: colors.activeLiColor,
            fontSize: rem(16),
            fontWeight: 600,
            margin: 0,
            marginBottom: rem(15),
            display: 'block',
        },

        [breakpoint(breakpoints.tabletM)]: {
            position: 'static',
            width: 'auto',
            zIndex: 'auto',
            marginBottom: rem(24),
            '& h2': {
                fontSize: rem(28),
                marginBottom: rem(16),
            },
            '& span': {
                fontSize: rem(14),
                marginBottom: rem(12),
            }
        }
    },
    rightSection: {
        flex: 1,
        marginLeft: rem(60),

        [breakpoint(breakpoints.tabletM)]: {
            flex: 'none',
        }
    },
    goalsSection: {
        display: 'flex',
        alignItems: 'center',
        gap: rem(35),

        marginBottom: rem(120),

        '&:last-child': {
            marginBottom: 0,
        },

        '&:nth-child(2)': {
            marginLeft: rem(80),
        },

        [breakpoint(breakpoints.tabletM)]: {
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: rem(16),
            marginBottom: rem(40),
            marginLeft: 0,
            '&:last-child': {
                marginBottom: 0,
            }
        }
    },
    rightTitle: {
        flex: 1,
        '& h2': {
            color: colors.liColor,
            fontSize: rem(20),
            fontWeight: 500,
            fontFamily: fonts.mainFont,
            marginBottom: rem(12),
            margin: 0,
            lineHeight: 1.3,
        },
        '& p': {
            color: colors.liColor,
            fontSize: rem(16),
            fontWeight: 400,
            fontFamily: fonts.mainFont,
            lineHeight: 1.5,
            margin: 0,
        },

        [breakpoint(breakpoints.tabletM)]: {
            flex: 'none',
            '& h2': {
                fontSize: rem(18),
                marginBottom: rem(8),
            },
            '& p': {
                fontSize: rem(14),
                lineHeight: 1.4,
            }
        }
    },
    description: {
        color: colors.liColor,
        fontSize: rem(16),
        lineHeight: 1.6,
        margin: 0,
        fontFamily: fonts.mainFont,
        whiteSpace: 'pre-line',

        [breakpoint(breakpoints.tabletM)]: {
            fontSize: rem(14),
            lineHeight: 1.5,
        }
    },
}as const;

export const useAboutPurposesStyles =createUseStyles(styles);