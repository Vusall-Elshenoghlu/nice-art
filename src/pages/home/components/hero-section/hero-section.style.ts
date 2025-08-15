import {createUseStyles} from 'react-jss';
import {rem} from '../../../../assets/styles/abstracts/functions';
import fonts from '../../../../assets/styles/abstracts/fonts';
import colors from '../../../../assets/styles/abstracts/color';

const styles = {
    '@ global': {
        body: {
            backgroundColor: 'white',
        }
    },
    wrapper: {
        width: '100%',
        height: rem(400),
    },
    headingText: {
        fontWeight: 800,
        fontStyle: 'normal',
        fontSize: 72,
        lineHeight: 1,
        letterSpacing: 0,
        color: colors.activeLiColor,
    },
    malesudaParagraph: {
        fontSize: rem(17),
    },
    buttons: {
        display: 'flex',
        gap: rem(20),
        marginTop: rem(15),

    },
    productsBtn: {
        width: rem(148),
        height: rem(48),
        borderRadius: rem(8),
        backgroundColor: colors.activeLiColor,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: rem(8),
        border: 'none',
        color: colors.mainBGColor,
        cursor: 'pointer',
        padding: `${rem(12)} ${rem(24)} ${rem(12)} ${rem(24)}`,
        '& p': {
            lineHeight: rem(24),
            fontSize: rem(16),
            fontWeight: '400',
            letterSpacing: '0%',
        }
    },
    aboutBtn: {
        width: rem(190),
        height: rem(48),
        borderRadius: rem(8),
        border: `${rem(1)} solid ${colors.activeLiColor}`,
        backgroundColor: colors.mainBGColor,
        color: colors.activeLiColor,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: rem(8),
        '& p': {
            lineHeight: rem(24),
            fontSize: rem(16),
            fontWeight: '400',
            letterSpacing: '0%',
        }
    }

};

export const useHeroSectionStyles = createUseStyles(styles);