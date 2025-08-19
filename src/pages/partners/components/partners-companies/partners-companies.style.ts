import {createUseStyles} from 'react-jss';
import {rem} from '../../../../assets/styles/abstracts/functions';
import colors from '../../../../assets/styles/abstracts/color';

const styles = {
    partnerDiv: {

        width: 'auto',
        height: rem(114),
        borderRadius: rem(16),
        border: `${rem(1)} solid ${colors.activeLiColorWithOpacith}`,
        backgroundColor: colors.mainBGColor,
        boxShadow:'0px 0px 4px 0px #3E6F000A',
        padding: rem(16),
        '& h4': {
            fontWeight: '500',
            fontSize: rem(16),
            lineHeight: '100%',
            letterSpacing: '0%',
            marginLeft: rem(16),
            marginTop: rem(8),
        }
    },
    partnerImage: {
        width: rem(32),
        height: rem(32),
        objectFit: 'contain',
    },
    tagDiv: {
        width: rem(64),
        height: rem(14),
        borderRadius: rem(4),
        backgroundColor: colors.partnerColorWithOpacith,
        marginTop: rem(40),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& p': {
            color: colors.activeLiColor,
            fontSize: rem(8),
            fontWeight: '500',
            lineHeight: '100%',
            letterSpacing: '0%',
            textTransform: 'uppercase',
        }
    }
};

export const usePartnersCompaniesStyles = createUseStyles(styles);