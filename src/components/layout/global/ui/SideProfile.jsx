import PropTypes from "prop-types";
import { X } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";

export default function SideProfile({ onClose }) {
    const handleLinkClick = () => {
        onClose();
    };

    return (
        <>
            <div className="fixed w-full h-screen bg-black opacity-60 top-0 left-0" onClick={onClose}></div>
            <div className="w-[300px] h-screen bg-zinc-900 absolute top-0 right-0">
                <div className="relative">
                    <div className="bg-zinc-800 pb-8">
                        <div className="p-3">
                            <div className="flex justify-end">
                                <X size={32} onClick={onClose} className="cursor-pointer" />
                            </div>
                        </div>

                        <div>
                            <span className="block text-xl text-center uppercase mb-4">Nome do Usuário</span>
                            <div>
                                <span className="block text-center mb-2">Meu saldo: R$ 0,00</span>
                                <div className="text-xs text-center">
                                    <span className="block">Retirável: R$ 0,00</span>
                                    <span className="block">Restrito: R$ 0,00</span>
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <Link
                                    to={"/minha-conta"}
                                    onClick={handleLinkClick}
                                    className="mt-4 text-xs inline-flex items-center justify-center bg-zinc-700 rounded py-2 px-4"
                                >
                                    <span>Minha conta</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="pt-3 px-3">
                        <span className="block text-xs font-bold uppercase">Financeiro</span>
                    </div>

                    <div className="px-3 py-3">
                        <Link
                            to={"/minha-conta/depositar"}
                            onClick={handleLinkClick}
                            className="flex justify-center text-xs font-bold uppercase bg-secondary rounded py-2 px-4"
                        >
                             Adicionar saldo via PIX
                        </Link>
                    </div>

                    <div>
                        <div>
                            <Link
                                to={"/minha-conta/depositar"}
                                onClick={handleLinkClick}
                                className="block hover:bg-zinc-700"
                            >
                                <span className="block mx-4 py-3 border-b border-zinc-700">Depositar</span>
                            </Link>
                        </div>
                        <div>
                            <Link
                                to={"/minha-conta/saque"}
                                onClick={handleLinkClick}
                                className="block hover:bg-zinc-700"
                            >
                                <span className="block mx-4 py-3 border-b border-zinc-700">Retirar</span>
                            </Link>
                        </div>
                        <div>
                            <Link
                                to={"/minha-conta/historico"}
                                onClick={handleLinkClick}
                                className="block hover:bg-zinc-700"
                            >
                                <span className="block mx-4 py-3 border-b border-zinc-700">Histórico Financeiro</span>
                            </Link>
                        </div>
                    </div>

                    <div className="mt-2 p-3">
                        <span className="block text-xs font-bold uppercase">Conta</span>
                    </div>

                    <div>
                        <div>
                            <Link
                                to={"/minha-conta/minhas-apostas"}
                                onClick={handleLinkClick}
                                className="block hover:bg-zinc-700"
                            >
                                <span className="block mx-4 py-3 border-b border-zinc-700">Minhas Apostas</span>
                            </Link>
                        </div>
                        <div>
                            <Link
                                to={"/minha-conta/perfil"}
                                onClick={handleLinkClick}
                                className="block hover:bg-zinc-700"
                            >
                                <span className="block mx-4 py-3 border-b border-zinc-700">Editar meu perfil</span>
                            </Link>
                        </div>
                        <div>
                            <Link
                                to={"/minha-conta/suporte"}
                                onClick={handleLinkClick}
                                className="block hover:bg-zinc-700"
                            >
                                <span className="block mx-4 py-3 border-b border-zinc-700">Ajuda e Contato</span>
                            </Link>
                        </div>
                    </div>

                    <div className="px-3 py-5">
                        <LogoutButton
                            className="w-full flex items-center justify-center gap-4 text-xs font-bold uppercase bg-red-400 rounded py-2 px-4"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

SideProfile.propTypes = {
    onClose: PropTypes.func.isRequired
}