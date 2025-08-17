import {createUseStyles} from 'react-jss';
import {rem} from '../../../../assets/styles/abstracts/functions';

const styles = {
    wrapper: {
        minHeight: rem(583),
        height: 'auto'
    },
};

export const useHomeCreditsStyles = createUseStyles(styles);