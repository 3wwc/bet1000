import { Link } from "react-router-dom";

export default function Account() {
    return (
        <div className="py-8">
            <div className='w-full max-w-5xl px-4 mx-auto'>
                <header className='mb-6'>
                    <h1 className="text-2xl md:text-3xl font-bold">Olá, (nome do jogador)</h1>
                    <p className="text-zinc-500">Gerencie sua conta, consulte suas apostas.</p>
                </header>

                <ul className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                    <li>
                        <Link
                            to={"/minha-conta/depositar"}
                            className="block bg-red-50 border border-red-100 py-4 px-3"
                        >
                            <span className="text-red-900 font-bold">Depósito</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={"/minha-conta/saque"}
                            className="block bg-red-50 border border-red-100 py-4 px-3"
                        >
                            <span className="text-red-900 font-bold">Sacar</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={"/minha-conta/historico"}
                            className="block bg-red-50 border border-red-100 py-4 px-3"
                        >
                            <span className="text-red-900 font-bold">Histórico Financeiro</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={"/minha-conta/minhas-apostas"}
                            className="block bg-red-50 border border-red-100 py-4 px-3"
                        >
                            <span className="text-red-900 font-bold">Minhas Apostas</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={"/minha-conta/bonus"}
                            className="block bg-red-50 border border-red-100 py-4 px-3"
                        >
                            <span className="text-red-900 font-bold">Bônus</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={"/minha-conta/perfil"}
                            className="block bg-red-50 border border-red-100 py-4 px-3"
                        >
                            <span className="text-red-900 font-bold">Ver Perfil</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={"/minha-conta/favoritos"}
                            className="block bg-red-50 border border-red-100 py-4 px-3"
                        >
                            <span className="text-red-900 font-bold">Favoritos</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={"/minha-conta/suporte"}
                            className="block bg-red-50 border border-red-100 py-4 px-3"
                        >
                            <span className="text-red-900 font-bold">Ajuda e Contato</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}