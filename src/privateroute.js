import { Route, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';
function PrivateRoute({ path, exact, component }) {
    const isAuth = useSelector(state => state.Auth);
    if (!isAuth.isAuth) {
        return <Redirect to="/" />;
    }
    return (
        <Route path={path} exact={exact} component={component} />
    );
}

export default PrivateRoute;