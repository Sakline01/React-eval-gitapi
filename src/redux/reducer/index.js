import { combineReducers } from 'redux';
import auth from './auth';
import githubRepo from './githubRepo';
const allreducers = combineReducers({
    Repos: githubRepo,
    Auth: auth
})
export default allreducers;