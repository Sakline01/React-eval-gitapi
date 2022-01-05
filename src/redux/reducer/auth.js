const auth = (state = false, action) => {
    switch (action.type) {
        case "AUTH": {
            return state = !state;
        }
        default:
            return state;
    }
}
export default auth;
