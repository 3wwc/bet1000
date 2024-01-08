import PropTypes from "prop-types";
import SidebarBet from "../global/SidebarBet";

export default function BetLayout({ children, sectionId }) {
    return (
        <section id={sectionId} className="py-4">
            <div className="container-bet">
                <div className="lg:flex gap-6 items-start">
                    <div className="lg:w-3/4 grid gap-4 pb-4">
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

BetLayout.propTypes = {
    children: PropTypes.node.isRequired,
    sectionId: PropTypes.string.isRequired,
};