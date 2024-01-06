import { CaretLeft } from "@phosphor-icons/react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function ErrorMessage({ description }) {
    return (
        <section className="py-12">
            <div className="container-bet">
                <div className="text-center">
                    <h1 className="text-7xl font-bold">404</h1>
                    <p className="text-zinc-500 text-xl mt-1">{description}</p>
                </div>

                <div className="text-center mt-6">
                    <Link to={'/'} className="bg-secondary text-white inline-flex gap-2 items-center py-3 px-4 rounded">
                        <CaretLeft size={20} />
                        Voltar para a página inicial
                    </Link>
                </div>
            </div>
        </section>
    );
}

ErrorMessage.defaultProps = {
    description: "Página não encontrada"
};

ErrorMessage.propTypes = {
    description: PropTypes.string
};