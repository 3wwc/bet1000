import { SignOut } from '@phosphor-icons/react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export default function LogoutButton({ className }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('id');
        window.location.reload();
        navigate('/');
    };

    return (
        <button onClick={handleLogout} className={className}>
            <SignOut size={20} />
            Sair
        </button>
    );
}

LogoutButton.propTypes = {
    className: PropTypes.string
};
