import { Link } from "react-router-dom";

export default function Bets() {
    return (
        <div className="py-8">
            <div className='w-full max-w-5xl px-4 mx-auto'>
                <header className='mb-6'>
                    <h1 className="text-2xl md:text-4xl font-bold">Minhas apostas</h1>
                </header>

                <div className='overflow-x-scroll'>
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr>
                                <th className="border-b-2 p-3 no-wrap">ID</th>
                                <th className="border-b-2 p-3 no-wrap">Data da aposta</th>
                                <th className="border-b-2 p-3 no-wrap">Valor do bilhete</th>
                                <th className="border-b-2 p-3 no-wrap"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border-b p-3">53032</td>
                                <td className="border-b p-3">23/01/2024</td>
                                <td className="border-b p-3 no-wrap">R$ 4.98</td>
                                <td className="border-b p-3 no-wrap">
                                    <Link
                                        className='px-4 py-2 bg-green-600 rounded text-white'
                                        to={`/minha-conta/minhas-apostas/53032`}
                                    >
                                        Bilhete completo
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                        {/* <tbody>
                            {bets.map((bet, index) => (
                                <tr key={index}>
                                    <td className="border-b p-3"><p className="text-chave">{bet.chave}</p></td>
                                    <td className="border-b p-3">{formatarData(bet.dataExtracao)}</td>
                                    <td className="border-b p-3 no-wrap">{`R$ ${bet.valor.toFixed(2).replace('.', ',')}`}</td>
                                    <td className="border-b p-3 no-wrap">
                                        <Link
                                            className='px-4 py-2 bg-green-600 rounded text-white'
                                            to={`/minha-conta/minhas-apostas/${bet.chave}`}
                                        >
                                                Ver mais
                                            </Link>
                                        </td>
                                </tr>
                            ))}
                        // </tbody> */}
                    </table>
                </div>
            </div>
        </div>
    )
}