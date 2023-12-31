import Onyx from 'react-native-onyx';
import CONST from '@src/CONST';
import ONYXKEYS from '@src/ONYXKEYS';

/**
 * Clear CloseAccount error message to hide modal
 */
function clearError() {
    Onyx.merge(ONYXKEYS.FORMS.CLOSE_ACCOUNT_FORM, {errors: null});
}

/**
 * Set default Onyx data
 */
function setDefaultData() {
    Onyx.merge(ONYXKEYS.FORMS.CLOSE_ACCOUNT_FORM, {...CONST.DEFAULT_CLOSE_ACCOUNT_DATA});
}

export {
    // eslint-disable-next-line import/prefer-default-export
    clearError,
    setDefaultData,
};
