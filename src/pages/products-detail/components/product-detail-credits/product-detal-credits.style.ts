import {createUseStyles} from 'react-jss';
import {rem} from '../../../../assets/styles/abstracts/functions';
import fonts from '../../../../assets/styles/abstracts/fonts';
import colors from '../../../../assets/styles/abstracts/color';
import {breakpoint} from '../../../../assets/styles/abstracts/mixins';
import {breakpoints} from '../../../../assets/styles/abstracts/sizes';

const styles = {
    titleSection: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: rem(48),
        marginTop: rem(230),
        gap: rem(64),
        lineHeight: 1.6,

        '& p': {
            flex:1,
            fontSize: rem(16),
            color: colors.liColor,
            fontFamily: fonts.mainFont,
        },


        [breakpoint(breakpoints.tabletM)]: {
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: rem(24),
            marginTop: rem(150),
            marginBottom: rem(32),

            '& p': {
                flex: 'none',
                width: '100%',
            }
        },

        [breakpoint(breakpoints.mobileL)]: {
            marginTop: rem(100),
            marginBottom: rem(24),
            gap: rem(16),
        }
    },
    title: {
        flex:1,

        '& p': {
            fontSize: rem(16),
            color: colors.activeLiColor,
            margin: 0,
            marginBottom: rem(8),
            fontFamily: fonts.mainFont,
        },
        '& h2': {
            fontSize: rem(44),
            fontFamily: fonts.mainFont,
            color: colors.liColor,
            fontWeight: 800,
            margin: 0,
            lineHeight: 1.2,
        },


        [breakpoint(breakpoints.tabletM)]: {
            flex: 'none',
            width: '100%',

            '& h2': {
                fontSize: rem(36),
            }
        },

        [breakpoint(breakpoints.mobileL)]: {
            '& p': {
                fontSize: rem(14),
            },
            '& h2': {
                fontSize: rem(28),
            }
        }
    },
    creditsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: rem(24),
        marginTop: rem(32),


        [breakpoint(breakpoints.tabletM)]: {
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: rem(20),
            marginTop: rem(24),
        },

        [breakpoint(breakpoints.mobileL)]: {
            gridTemplateColumns: '1fr',
            gap: rem(16),
            marginTop: rem(20),
        }
    },
    creditItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: rem(16),
        padding: rem(20),
        borderRadius: rem(12),
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
        border: '1px solid #f0f0f0',

        [breakpoint(breakpoints.mobileL)]: {
            padding: rem(16),
            gap: rem(12),
        }
    },
    iconPlaceholder: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: rem(80),
        height: rem(80),
        backgroundColor: colors.bgColor,
        borderRadius: rem(44),
        marginBottom: rem(16),
        flexShrink: 0,

        [breakpoint(breakpoints.mobileL)]: {
            width: rem(60),
            height: rem(60),
            marginBottom: rem(12),
        }
    },
    creditContent: {
        flex: 1,

        '& h3': {
            fontSize: rem(16),
            fontFamily: fonts.mainFont,
            color: colors.activeLiColor,
            fontWeight: 600,
            margin: 0,
            marginBottom: rem(8),
            lineHeight: 1.4,
        },
        '& p': {
            fontSize: rem(14),
            color:colors.liColor,
            margin: 0,
            fontFamily: fonts.mainFont,
            lineHeight: 1.4,
        },

        [breakpoint(breakpoints.mobileL)]: {
            '& h3': {
                fontSize: rem(14),
                marginBottom: rem(6),
            },
            '& p': {
                fontSize: rem(13),
            }
        }
    }
} as const;

export const useProductDetailCreditsStyles = createUseStyles(styles);