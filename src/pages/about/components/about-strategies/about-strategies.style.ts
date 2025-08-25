import {createUseStyles} from 'react-jss';
import {rem} from '../../../../assets/styles/abstracts/functions';
import {breakpoint} from '../../../../assets/styles/abstracts/mixins';
import {breakpoints} from '../../../../assets/styles/abstracts/sizes';
import colors from '../../../../assets/styles/abstracts/color';
import fonts from '../../../../assets/styles/abstracts/fonts';

const styles = {
    strategySection: {
        display: 'flex',
        alignItems: 'flex-start',
        marginTop: rem(200),

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
            fontWeight: 800,
            display: 'block',
            marginBottom: rem(15),
        },
        '& h2': {
            fontFamily: fonts.mainFont,
            fontWeight: 800,
            fontSize: rem(44),
            color: colors.liColor,
            lineHeight: 1.3,
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
        gap: rem(130),
        flex: 1,
        alignItems: 'flex-start',
        marginTop: rem(200),
        marginBottom: rem(180),

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
        borderBottom: `1px solid ${colors.borderBottom}`,
        flex: 1,
        '& h3': {
            fontFamily: fonts.mainFont,
            fontSize: rem(20),
            fontWeight: 800,
            color: colors.activeLiColor,
            margin: `${rem(30)} 0 ${rem(15)} 0`,
            lineHeight: 1.3,
        },
        '& p': {
            color: colors.descriptionColor,
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

export const useAboutStrategiesStyles = createUseStyles(styles);