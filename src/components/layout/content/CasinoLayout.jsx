import PropTypes from "prop-types";

export default function CasinoLayout({ children }) {
    return (
        <section id="main-casino-layout" className="py-4">
            <div className="container-bet">
                <div className="grid">
                    <div>
                        {children}
                    </div>
                </div>
            </div>
        </section>
    )
}

CasinoLayout.propTypes = {
    children: PropTypes.node.isRequired,
};