import {createUseStyles} from 'react-jss';
import {rem} from '../../../../assets/styles/abstracts/functions';
import colors from '../../../../assets/styles/abstracts/color';
import {breakpoint} from '../../../../assets/styles/abstracts/mixins';
import {breakpoints} from '../../../../assets/styles/abstracts/sizes';

const styles = {
    partnerDiv: {

        width: 'auto',
        height: rem(114),
        borderRadius: rem(16),
        border: `${rem(1)} solid ${colors.active_li_color_with_opacity}`,
        backgroundColor: colors.main_bg_color,
        boxShadow: '0px 0px 4px 0px #3E6F000A',
        padding: rem(16),
        cursor: 'pointer',
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
        backgroundColor: colors.partner_color_with_opacity,
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
    },
    customModal: {
        "& .ant-modal-body": {
            padding: '0px !important',
        },
        "& .ant-modal-mask": {
            opacity: '0.1',
            height: rem(900),
            overflow: 'hidden',
        },
        "& .ant-modal-content": {
            backgroundColor: '#F7F9F5',
            borderRadius: 12,
            height: rem(318),
            borderRadiusCircle: rem(16),
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            overflow: 'hidden',
            border: 'none !important',
            boxShadow: 'none !important',
            outline: 'none !important',
            layerBlur: rem(154)
        },
        "& .ant-modal-wrap": {
            outline: 'none !important',
        },
        "& *": {
            outline: 'none !important',
            border: 'none !important',
        }
    },

    modalFlexDiv: {
        display: 'flex',
        alignItems: 'center',
        gap: rem(16),
        flexWrap: 'wrap',
        '& h4': {
            fontWeight: '500',
            fontSize: rem(20),
            lineHeight: '100%',
        }
    },
    modalImg: {
        width: rem(60),
        height: rem(60),
        objectFit: 'contain',
        flexShrink: 0,
    },
    modalDescrip: {
        marginTop: rem(10),
        fontWeight: '400',
        fontSize: rem(16),
        lineHeight: rem(22),
        color: colors.liColor,
    },
    selectedTagDiv: {
        width: 'auto',
        height: rem(14),
        borderRadius: rem(4),
        backgroundColor: colors.partner_color_with_opacity,
        marginTop: rem(10),
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
    },
    buttons: {
        position: 'absolute',
        bottom: 10,
        width: '100%',
        display: 'flex',
        gap: rem(26),
        [breakpoint(breakpoints.tabletM)]: {
            display: 'flex',
            gap: rem(5),
        },
    },
    visitBtn: {
        width: rem(282),
        height: rem(48),

        [breakpoint(breakpoints.tabletM)]: {
            width: rem(150),
        },
        '& a': {
            fontWeight: '400',
            fontSize: rem(16),
            lineHeight: rem(24),
            letterSpacing: '0%',
            color: colors.main_bg_color,
        }
    },
    closeBtn: {
        width: rem(282),
        height: rem(48),
        borderRadius: rem(8),
        backgroundColor: 'transparent',
        display: 'flex',
        border: '1px solid #3E6F00 !important',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        [breakpoint(breakpoints.tabletM)]: {
            width: rem(150),
        },
        '& p': {
            fontWeight: '400',
            fontSize: rem(16),
            lineHeight: rem(24),
            letterSpacing: '0%',
            color: colors.activeLiColor,
        }

    }

};

export const usePartnersCompaniesStyles = createUseStyles(styles);