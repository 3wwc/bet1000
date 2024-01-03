import PropTypes from "prop-types";
import SidebarBet from "../global/SidebarBet";

export default function HomeLayout({ children }) {
    return (
        <section id="main-home-layout" className="py-4">
            <div className="container-bet">
                <div className="grid grid-cols-4 gap-4">
                    <div className="col-span-3">
                        {children}
                    </div>
                    
                    <div className="col-span-1">
                        <SidebarBet />
                    </div>
                </div>
            </div>
        </section>
    )
}

HomeLayout.propTypes = {
    children: PropTypes.node.isRequired,
};