import PropTypes from "prop-types";
import SidebarBet from "../global/SidebarBet";

export default function HomeLayout({ children }) {
    return (
        <section id="main-home-layout" className="py-4">
            <div className="container-bet">
                <div className="lg:flex gap-6 items-start">
                    <div className="lg:w-3/4">
                        {children}
                    </div>
                    
                    <div className="lg:w-1/4 sticky top-[82px]">
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