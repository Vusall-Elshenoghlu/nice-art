import {createUseStyles} from 'react-jss';
import {rem} from '../../../../assets/styles/abstracts/functions';
import colors from '../../../../assets/styles/abstracts/color';

const styles = {
    wrapper: {
        width: '100%',
        height: rem(1067),
        backgroundColor: colors.activeLiColor,
        opacity: '2%'
    },
};

export const useHomeAboutUsStyles = createUseStyles(styles);
