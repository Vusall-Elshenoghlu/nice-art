import nunitoBold from '../../fonts/Nunito/NunitoSans-Bold.ttf';
import nunitoLight from '../../fonts/Nunito/NunitoSans-Light.ttf';
import nunitoSemiBold from '../../fonts/Nunito/NunitoSans-SemiBold.ttf';
import nunitoRegular from '../../fonts/Nunito/NunitoSans-Regular.ttf';
import nunitoThin from '../../fonts/Nunito/NunitoSans-ExtraLight.ttf';
import nunitoXBlack from '../../fonts/Nunito/NunitoSans-ExtraBold.ttf';
import westTrialRegular from '../../fonts/WestTrial/WestTrial-Regular.otf';
import westTrialBold from '../../fonts/WestTrial/WestTrial-Bold.otf';
const typography = {
    '@font-face': [
        {
            fontFamily: 'Nunito Bold',
            src: `url("${nunitoBold}")`,
        },
        {
            fontFamily: 'Nunito Light',
            src: `url("${nunitoLight}")`,
        },
        {
            fontFamily: 'Nunito Medium',
            src: `url("${nunitoSemiBold}")`,
        },
        {
            fontFamily: 'Nunito Regular',
            src: `url("${nunitoRegular}")`,
        },
        {
            fontFamily: 'Nunito Thin',
            src: `url("${nunitoThin}")`,
        },
        {
            fontFamily: 'Nunito XBlack',
            src: `url("${nunitoXBlack}")`,
        },
        {
            fontFamily: 'West trial',
            src: `url("${westTrialRegular}")`,
            fontWeight: '400'
        },
        {
            fontFamily: 'West trial',
            src: `url("${westTrialBold}")`,
            fontWeight: '800'
        },

    ],
};

export default typography;
