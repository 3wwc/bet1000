import PropTypes from "prop-types";

export default function CasinoLayout({ children, slide }) {
    return (
        <>
            <div>
                {slide}
            </div>
            <section id="main-casino-layout" className="py-4">
                <div className="container-bet">
                    <div className="grid">
                        <div>
                            {children}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

CasinoLayout.propTypes = {
    children: PropTypes.node.isRequired,
    slide: PropTypes.node.isRequired
};