import { useState } from 'react';
import SideProfile from '../global/ui/SideProfile';

export default function ParentComponent() {
    const [isSideProfileOpen, setIsSideProfileOpen] = useState(true);

    const toggleSideProfile = () => {
        setIsSideProfileOpen(!isSideProfileOpen);
    };

    return (
        <div>
            {isSideProfileOpen && <SideProfile onClose={toggleSideProfile} />}
        </div>
    );
}