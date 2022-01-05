
const auth = (state = { isAuth: false }, action) => {
    switch (action.type) {
        case "AUTH":
            return { ...state, isAuth: action.payload };
        default:
            return state;
    }
}
export default auth;
