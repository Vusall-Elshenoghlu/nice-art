import {createUseStyles} from 'react-jss';
import {rem} from '../../../../assets/styles/abstracts/functions';
import colors from '../../../../assets/styles/abstracts/color';
import fonts from '../../../../assets/styles/abstracts/fonts';
import {breakpoint} from '../../../../assets/styles/abstracts/mixins';
import {breakpoints} from '../../../../assets/styles/abstracts/sizes';

const styles = {
    productIconSection:{
        display: 'flex',
        alignItems: 'center',
        gap: rem(10),
        marginBottom: rem(40),

        '& h2': {

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
    productsLink:{
        textDecoration: 'none !important',
        color:colors.liColor,
        cursor: 'pointer',
    },
    productName:{
        color: colors.liColor,
        '& span':{
            color:colors.activeLiColor,
        },
    },
    productTitle:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '& h2':{
            color:colors.activeLiColor,
            fontFamily:fonts.mainFont,
            fontWeight:800,
            fontSize:rem(60),
            fontStyle:'extra-bold'
        }
    },
    imageContainer: {
        position: 'relative',
        width: rem(450),
        height: rem(300),
        flexShrink: 0,
    },
    productImage: {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        borderRadius: rem(8),
    },
}as const;

export  const useProductDetailStyles = createUseStyles(styles);
