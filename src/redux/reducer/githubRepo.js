const githubRepo = (state = {
    repos: [],
    isLoading: true,
    isError: false
}, action) => {
    switch (action.type) {
        case "GETREPOREQUEST": {
            return { ...state, isLoading: true, isError: false };
        }
        case "GETREPOSUCCESS": {
            return { ...state, repos: action.payload.repos.items, isLoading: false };
        }
        case "GETREPOFAILURE": {
            return { ...state, isLoading: false, isError: true };
        }
        default:
            return state;
    }
}
export default githubRepo;
