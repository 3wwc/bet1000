import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { isTokenValid } from './utils/Auth';

export default function AuthenticatedRoute({ children }) {
    if (!isTokenValid()) {
        return <Navigate to="/login" />;
    }

    return children;
}

AuthenticatedRoute.propTypes = {
    children: PropTypes.node.isRequired
};