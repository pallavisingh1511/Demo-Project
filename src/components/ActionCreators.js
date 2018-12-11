import axios from 'axios'
import * as actions from './Actions'
import { GET_FEEDS_API_URL } from './../utils/constants'

export const getData = () => {
    return (dispatch) => {
        dispatch(actions.requestData())
        return axios.get(GET_FEEDS_API_URL).then(response => {
            if(response.status == 200)
                dispatch(actions.responseData( response.data ))
            else
                dispatch(actions.requestDataFailure())
        }).catch(error => {
            dispatch(actions.requestDataFailure())
        });
    };
}

export const toggleLike = ( params ) => {
    return (dispatch) => {
        dispatch(actions.toggleLike( params ))
    };
};