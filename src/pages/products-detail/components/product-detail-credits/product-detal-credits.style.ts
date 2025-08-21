import {createUseStyles} from 'react-jss';
import {rem} from '../../../../assets/styles/abstracts/functions';
import fonts from '../../../../assets/styles/abstracts/fonts';
import colors from '../../../../assets/styles/abstracts/color';

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
        }
    },
    creditsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: rem(24),
        marginTop: rem(32),
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
        }
    }
} as const;

export const useProductDetailCreditsStyles = createUseStyles(styles);