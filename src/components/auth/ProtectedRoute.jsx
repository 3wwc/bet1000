import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { isTokenValid } from './utils/Auth';

export default function ProtectedRoute({ children }) {
    const tokenValid = isTokenValid();

    if (tokenValid) {
        return <Navigate to="/" />;
    }

    return children;
}

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired
};
