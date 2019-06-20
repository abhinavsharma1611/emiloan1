import { FETCH_APR_PENDING, FETCH_APR_REJECTED, FETCH_APR_FULFILLED } from '../../../constants/actionTypes';

const initialState = {
    isAPRLoading: false,
    isAPRError: false,
    isAPRSuccess: false
}

export default function appData(state = initialState, action) {
    switch (action.type) {
        /** START API */
        ////////////////get//////////////////////
        case FETCH_APR_PENDING: {
            return {
                ...state,
                isAPRLoading: true,
                isAPRError: false,
                isAPRSuccess: false,
            };
        }

        case FETCH_APR_REJECTED: {
            return {
                ...state,
                isAPRLoading: false,
                isAPRError: true,
                isAPRSuccess: false,
            };
        }

        case FETCH_APR_FULFILLED: {
            return {
                ...state,
                isAPRLoading: false,
                isAPRError: false,
                isAPRSuccess: true,
                dataAPR: action.payload.data
            };
        }

        default: {
            return state;
        }
    }
}