export const getRepoRequest = () => {
    return {
        type: "GETREPOREQUEST",
        payload: {
            isLoading: true
        }
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
        type: "GETREPOFAILURE",
        payload: {
            isError: true
        }
    };
};
export const auth = () => {
    return {
        type: "AUTH",
    };
};