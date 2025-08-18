import {createUseStyles} from 'react-jss';
import {rem} from '../../assets/styles/abstracts/functions';
import colors from '../../assets/styles/abstracts/color';
import fonts from '../../assets/styles/abstracts/fonts';
import {breakpoints} from '../../assets/styles/abstracts/sizes';
import {breakpoint} from '../../assets/styles/abstracts/mixins';

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
    aboutTitleSection: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: rem(60),

        [breakpoint(breakpoints.tabletM)]: {
            flexDirection: 'column',
            gap: rem(24),
        }
    },
    firstTitle: {
        marginTop: rem(35),
        flex: 1,
        paddingRight: rem(40),
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
    bizKimik: {
        color: colors.activeLiColor,
        fontSize: rem(16),
        fontWeight: 600,
        margin: 0,
        marginBottom: rem(15),

        [breakpoint(breakpoints.tabletM)]: {
            fontSize: rem(14),
            marginBottom: rem(12),
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
    imgSection: {
        backgroundColor: colors.secondBg,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: rem(512),
        marginTop: rem(200),
        '& img': {
            padding: `0 ${rem(100)} ${rem(180)}`,
        },

        [breakpoint(breakpoints.tabletM)]: {
            height: rem(240),
            marginTop: rem(80),
            '& img': {
                padding: `0 ${rem(20)} ${rem(40)}`,
                maxWidth: '100%',
                height: 'auto',
            }
        }
    },
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

        [breakpoint(breakpoints.tabletM)]: {
            flex: 'none',
        }
    },
    goalsSection: {
        display: 'flex',
        alignItems: 'center',
        gap: rem(25),
        marginBottom: rem(70),
        '&:last-child': {
            marginBottom: 0,
        },

        [breakpoint(breakpoints.tabletM)]: {
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: rem(16),
            marginBottom: rem(40),
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
    strategySection: {
        display: 'flex',
        alignItems: 'flex-start',
        marginTop: rem(200),
        gap: rem(120),

        // Mobile responsive
        [breakpoint(breakpoints.tabletM)]: {
            flexDirection: 'column',
            marginTop: rem(80),
            gap: rem(32),
        }
    },
    strategyTitle: {
        flex: '0 0 40%',
        '& span': {
            color: colors.activeLiColor,
            fontSize: rem(16),
            fontWeight: 600,
            display: 'block',
            marginBottom: rem(15),
        },
        '& h2': {
            fontFamily: fonts.mainFont,
            fontWeight: 800,
            fontSize: rem(44),
            color: colors.liColor,
            lineHeight: 1.1,
            margin: 0,
        },

        [breakpoint(breakpoints.tabletM)]: {
            flex: 'none',
            '& span': {
                fontSize: rem(14),
                marginBottom: rem(12),
            },
            '& h2': {
                fontSize: rem(28),
            }
        }
    },
    strategyCards: {
        display: 'flex',
        gap: rem(60),
        flex: 1,
        alignItems: 'flex-start',
        marginTop: rem(120),

        [breakpoint(breakpoints.tabletM)]: {
            flexDirection: 'column',
            gap: rem(32),
            marginTop: rem(24),
            flex: 'none',
        }
    },
    strategyCard: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        textAlign: 'left',
        flex: 1,
        '& h3': {
            fontFamily: fonts.mainFont,
            fontSize: rem(20),
            fontWeight: 600,
            color: colors.liColor,
            margin: `${rem(30)} 0 ${rem(15)} 0`,
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
            '& h3': {
                fontSize: rem(18),
                margin: `${rem(20)} 0 ${rem(12)} 0`,
            },
            '& p': {
                fontSize: rem(14),
                lineHeight: 1.4,
            }
        }
    },
    strategyFingerPrint:{
        background: colors.secondBg,
        borderRadius: rem(44),
        padding:`${rem(16)} ${rem(20)}`,

        [breakpoint(breakpoints.tabletM)]: {
            borderRadius: rem(32),
            padding: `${rem(12)} ${rem(16)}`,
        }
    }
}as const;

export const useAboutStyles = createUseStyles(styles);