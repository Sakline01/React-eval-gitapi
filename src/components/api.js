import { getRepoFailure, getRepoRequest, getRepoSuccess } from "../redux/action";
import axios from 'axios';

export const getRepo = (querry) => (dispatch) => {

    dispatch(getRepoRequest());
    return axios(`https://api.github.com/search/repositories?q=${querry}&page=2&per_page=4`)
        .then((res) => {
            console.log(res);
            dispatch(getRepoSuccess(res.data));

        })
        .catch((res) => {
            dispatch(getRepoFailure());
        });
};