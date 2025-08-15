import colors from 'assets/styles/abstracts/color';
import {rem} from 'assets/styles/abstracts/functions';
import {createUseStyles} from 'react-jss';

const styles = {
    page: {
        minHeight: '100vh',
        display: 'flex',
        position: 'relative',

    },
    wrapper: {
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    title: {
        fontSize: rem(32),
        fontWeight: 500,
    },
    subtitle: {
        fontSize: rem(16),
    },
    panel: {
        width: rem(480),
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 2,
        borderRadius:"40%",
        maxHeight:"auto"
    },
    or: {color: colors.authSubtitleText,},
    invalidField: {border: '1px solid ' + colors.validationErrorColor,},
    leftPage:{
        width: '50%',
        minHeight: '100vh',
        backgroundColor:"#ECBC76"
    },
    rightPage:{
        width:"50%",
        minHeight: '100vh',
        backgroundColor: "white"
    },
    rightPhoto:{
        width:'35%',
        position: 'absolute',
        left: '60%',
        bottom: '10%',

    },
    leftPhoto: {
        width:'20%',
        position: 'absolute',
        left: '10%',
        bottom: '50%',
    },
    loginAndRegister: {
        display:"flex",
        flexDirection: "column",
        gap:"10px"
    },
};

export const useLoginStyles = createUseStyles(styles);
