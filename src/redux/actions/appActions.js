import {
    FETCH_APR
} from '../../constants/actionTypes';
import axios from 'axios';

const makeAPICall = (param) => {
    let axiosPromise = axios(param);
    axiosPromise.then(() => {
        console.log('success')
    }).catch(() => {
        console.log('failure')
    });
    return axiosPromise;
};
export function triggerFetchAPR(amount, months) {
    const params = {
        url: "https://ftl-frontend-test.herokuapp.com/interest?amount="+amount+"&numMonths="+months,
    };
    return ({ type: FETCH_APR, payload: makeAPICall(params) });
}