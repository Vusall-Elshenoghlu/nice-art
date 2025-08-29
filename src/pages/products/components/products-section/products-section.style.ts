import {createUseStyles} from 'react-jss';
import {rem} from '../../../../assets/styles/abstracts/functions';
import colors from '../../../../assets/styles/abstracts/color';
import {breakpoint, transition} from '../../../../assets/styles/abstracts/mixins';
import {breakpoints} from '../../../../assets/styles/abstracts/sizes';

const styles = {
    productsSection: {
        display: 'flex',
        flexDirection: 'column',
        gap: rem(24),
        padding: `${rem(40)} 0`,
        marginTop: rem(60),
        [breakpoint(breakpoints.tabletM)]: {
            padding: `${rem(20)} ${rem(16)}`,
            gap: rem(16),
        },
    },

    productCard: {
        background: colors.secondBg,
        padding: rem(24),
        position: 'relative',
        overflow: 'hidden',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        display: 'flex',
        marginBottom: rem(15),

        [breakpoint(breakpoints.tabletM)]: {
            flexDirection: 'column',
            padding: rem(16),
            borderRadius: rem(12),
            position: 'relative',
            minHeight: rem(180),
        },

        [breakpoint(breakpoints.mobileL)]: {
            minHeight: rem(160),
            padding: rem(14),
        },

        [breakpoint(breakpoints.mobileM)]: {
            minHeight: rem(150),
            padding: rem(12),
        },
    },

    cardHeader: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: rem(20),
        gap: rem(20),

        [breakpoint(breakpoints.tabletM)]: {
            marginBottom: rem(16),
            gap: rem(8),
        },
    },

    headerContent: {
        flex: 1,
    },

    cardTitle: {
        fontSize: rem(20),
        fontWeight: 600,
        color: colors.activeLiColor,
        margin: 0,
        marginBottom: rem(12),
        lineHeight: 1.3,

        [breakpoint(breakpoints.tabletM)]: {
            fontSize: rem(18),
            marginBottom: rem(8),
            fontWeight: 600,
        },
    },

    cardSubtitle: {
        fontSize: rem(14),
        color: colors.liColor,
        lineHeight: 1.5,
        margin: 0,
        maxWidth: '80%',

        [breakpoint(breakpoints.tabletM)]: {
            maxWidth: '100%',
            fontSize: rem(13),
            lineHeight: 1.4,
            marginBottom: rem(16),
        },
    },

    cardContent: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginBottom: rem(32),
        gap: rem(20),

        [breakpoint(breakpoints.tabletM)]: {
            flexDirection: 'column',
            marginBottom: rem(16),
            gap: rem(16),
        },
    },

    loanDetails: {
        display: 'flex',
        gap: rem(40),
        alignItems: 'flex-start',
        flex: 1,

        [breakpoint(breakpoints.tabletM)]: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: rem(24),
            marginBottom: rem(20),
        },
    },

    detailItem: {
        display: 'flex',
        flexDirection: 'column',
        gap: rem(8),

        [breakpoint(breakpoints.tabletM)]: {
            gap: rem(4),
        },
    },

    detailLabel: {
        fontSize: rem(13),
        color: colors.liColor,
        fontWeight: 400,
        marginBottom: rem(4),

        [breakpoint(breakpoints.tabletM)]: {
            fontSize: rem(12),
            marginBottom: rem(2),
        },
    },

    detailValue: {
        fontSize: rem(16),
        color: colors.liColor,
        fontWeight: 600,

        [breakpoint(breakpoints.tabletM)]: {
            fontSize: rem(14),
            fontWeight: 600,
        },
    },

    imageContainer: {
        position: 'relative',
        width: rem(450),
        height: rem(300),
        flexShrink: 0,

        [breakpoint(breakpoints.tabletM)]: {
            position: 'absolute',
            bottom: rem(16),
            right: rem(16),
            width: rem(170),
            height: rem(150),
            zIndex: 10,
        },


        [breakpoint(breakpoints.mobileL)]: {
            width: rem(100),
            height: rem(85),
            bottom: rem(20),
            right: rem(12),
            zIndex: 10,
        },

        [breakpoint(breakpoints.mobileM)]: {
            width: rem(90),
            height: rem(75),
            bottom: rem(22),
            right: rem(10),
            zIndex: 10,
        },
    },

    productImage: {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        borderRadius: rem(8),
        marginLeft: rem(70),

        [breakpoint(breakpoints.tabletM)]: {
            borderRadius: rem(4),
        },
    },

    applyButton: {
        background: colors.activeLiColor,
        color: 'white',
        border: 'none',
        borderRadius: rem(8),
        padding: `${rem(12)} ${rem(20)}`,
        fontSize: rem(14),
        fontWeight: 600,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: rem(8),
        transition: transition(null, 0.2, null),
        alignSelf: 'flex-start',

        [breakpoint(breakpoints.tabletM)]: {
            alignSelf: 'flex-start',
            padding: `${rem(10)} ${rem(16)}`,
            fontSize: rem(13),
            borderRadius: rem(8),
            marginTop: 'auto',
            zIndex: 5,
            position: 'relative',
            maxWidth: '60%',
        },

        [breakpoint(breakpoints.mobileL)]: {
            maxWidth: '55%',
            padding: `${rem(8)} ${rem(14)}`,
            fontSize: rem(12),
        },

        [breakpoint(breakpoints.mobileM)]: {
            maxWidth: '50%',
            padding: `${rem(7)} ${rem(12)}`,
            fontSize: rem(11),
        },

        '&:hover': {
            background: colors.mainGreen,
            transform: 'translateY(-1px)',

            [breakpoint(breakpoints.tabletM)]: {
                transform: 'none',
            },
        },

        '@media (hover: none)': {
            '&:hover': {
                background: colors.activeLiColor,
                transform: 'none',
            },
        },
    },

    arrow: {
        fontSize: rem(16),
        transition: transition('transform', 0.2, null),
        [breakpoint(breakpoints.tabletM)]: {
            fontSize: rem(14),
        },

        '$applyButton:hover &': {
            transform: 'translateX(2px)',

            [breakpoint(breakpoints.tabletM)]: {
                transform: 'none',
            },
        },
    },
} as const;

export const useProductsSectionStyles = createUseStyles(styles);