import PropTypes from "prop-types";

export default function AccountLayout({ children }) {
    return (
        <section id="my-account-layout" className="py-4">
            <div className="container-bet">
                <div className="grid lg:grid-cols-4 gap-4">
                    <div className="grid gap-4 lg:col-span-3">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    )
}

AccountLayout.propTypes = {
    children: PropTypes.node.isRequired,
};