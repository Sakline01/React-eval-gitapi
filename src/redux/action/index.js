export const getRepoRequest = () => {
    return {
        type: "GETREPOREQUEST"
    };
};

export const getRepoSuccess = (repos) => {
    return {
        type: "GETREPOSUCCESS",
        payload: {
            repos: repos
        }
    };
};

export const getRepoFailure = () => {
    return {
        type: "GETREPOFAILURE"
    };
};
export const auth = (val) => {
    return {
        type: "AUTH",
        payload: val
    };
};