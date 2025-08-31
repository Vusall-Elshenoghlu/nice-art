import {createUseStyles} from 'react-jss';
import {rem} from '../../../../assets/styles/abstracts/functions';
import {breakpoint} from '../../../../assets/styles/abstracts/mixins';
import {breakpoints} from '../../../../assets/styles/abstracts/sizes';
import colors from '../../../../assets/styles/abstracts/color';
import fonts from '../../../../assets/styles/abstracts/fonts';

const styles = {
    ourGoals: {
        display: 'flex',
        alignItems: 'flex-start',
        marginTop: rem(160),
        position: 'relative',
        minHeight: rem(600),

        [breakpoint(breakpoints.tabletM)]: {
            flexDirection: 'column',
            alignItems: 'stretch',
            marginTop: rem(60),
            position: 'static',
            minHeight: 'auto',
        }
    },
    backgroundSection: {
        backgroundColor: colors.secondBg,
        padding: `${rem(100)} ${rem(80)} ${rem(120)} ${rem(270)}`,
        marginLeft: rem(200),
        flex: 1,
        borderRadius: rem(8),

        [breakpoint(breakpoints.tabletM)]: {
            padding: rem(24),
            marginLeft: 0,
            marginTop: rem(24),
            borderRadius: rem(4),
        }
    },
    leftSection: {
        position: 'absolute',
        left: 0,
        top: rem(260),
        width:'50%',
        zIndex: 2,
        whiteSpace: 'pre-line',
    },
    rightSection: {
        flex: 1,
        marginLeft: rem(60),

        [breakpoint(breakpoints.tabletM)]: {
            flex: 'none',
            marginLeft: rem(0),

        }
    },
    goalsSection: {
        display: 'flex',
        alignItems: 'center',
        gap: rem(20),

        marginBottom: rem(80),

        '&:last-child': {
            marginBottom: 0,
        },

        '&:nth-child(2)': {
            marginLeft: rem(100),
        },

        [breakpoint(breakpoints.tabletM)]: {
            alignItems: 'flex-start',
            gap: rem(16),
            marginBottom: rem(100),
            marginLeft: 0,
            '&:last-child': {
                marginBottom: 0,
            },
            '&:nth-child(2)': {
                marginLeft: rem(0),
            },
        }
    },
    rightTitle: {
        flex: 1,
        minWidth: 0,

        '& h2': {
            color: colors.liColor,
            fontSize: rem(20),
            fontWeight: 500,
            fontFamily: fonts.mainFont,
            marginBottom: rem(12),
            margin: 0,
            lineHeight: 1.3,
            wordWrap: 'break-word',
            overflowWrap: 'break-word',
        },

        '& p': {
            color: colors.liColor,
            fontSize: rem(16),
            fontWeight: 400,
            fontFamily: fonts.mainFont,
            lineHeight: 1.5,
            margin: 0,
            wordWrap: 'break-word',
            overflowWrap: 'break-word',
        },

        [breakpoint(breakpoints.tabletM)]: {
            flex: 'none',
            width: 'calc(100% - 40px)',
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
    iconContainer: {
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:colors.white,
        padding: rem(30),
        borderRadius: rem(12),

        '& svg': {
            width: 'auto',
            height: 'auto',
        },

        [breakpoint(breakpoints.tabletM)]: {
            '& svg': {
                transform: 'scale(0.85)',
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
} as const;

export const useAboutPurposesStyles = createUseStyles(styles);