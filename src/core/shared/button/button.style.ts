import { createUseStyles } from 'react-jss';
import colors from '../../../assets/styles/abstracts/color';
import {rem} from '../../../assets/styles/abstracts/functions';

export const useButtonStyles = createUseStyles({
    base: {
        border: 'none',
        borderRadius: 6,
        fontWeight: 600,
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    primary: {
        backgroundColor: colors.activeLiColor,
        color: colors.mainBGColor,

    },
    secondary: {
        backgroundColor: colors.mainBGColor,
        color: colors.activeLiColor,
        border: `${rem(1)} solid ${colors.activeLiColor}`,

    },
    danger: {
        backgroundColor: '#dc3545',
        color: colors.mainBGColor,
        '&:hover': {
            backgroundColor: '#bb2d3b',
        },
    },
    outline: {
        backgroundColor: 'transparent',
        border: '1px solid #0d6efd',
        color: '#0d6efd',
        '&:hover': {
            backgroundColor: '#0d6efd',
            color: colors.mainBGColor,
        },
    },
    sm: {
        padding: '4px 10px',
        fontSize: '0.8rem',
    },
    md: {
        padding: '8px 16px',
        fontSize: '1rem',
    },
    lg: {
        padding: '12px 20px',
        fontSize: '1.2rem',
    },
    disabled: {
        opacity: 0.65,
        cursor: 'not-allowed',
    },
});
