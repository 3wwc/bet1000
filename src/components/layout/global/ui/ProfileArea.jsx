import { useState } from "react";
import { Link } from "react-router-dom";
import SideProfile from "./SideProfile";
// import PlayerFunds from "../PlayerInfos/PlayerFunds";

export default function ProfileArea() {
    const [isSidemenuOpen, setSidemenuOpen] = useState(false);

    const toggleSidemenu = () => {
        setSidemenuOpen(!isSidemenuOpen);
    };

    return (
        <>
            <div>
                <div className="flex gap-2">
                    <Link
                        to={'/minha-conta/depositar'}
                        className="bg-secondary inline-flex items-center text-white py-2 px-4 rounded"
                    >
                        Depositar
                    </Link>
                    <div
                        className="grid cursor-pointer"
                        onClick={toggleSidemenu}
                    >
                        <div className="rounded-full overflow-hidden h-8 w-8 mx-auto">
                            <img src="https://via.placeholder.com/50x50"  alt="" />
                        </div>
                        {/* <PlayerFunds/> */}
                        <span className="text-xs mt-1">R$ 0,00</span>
                    </div>
                </div>
            </div>
            {isSidemenuOpen && <SideProfile onClose={toggleSidemenu} />}
        </>
    )
}