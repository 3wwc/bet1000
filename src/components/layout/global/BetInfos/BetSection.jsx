import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const apiUrl = import.meta.env.VITE_API_URL;

export default function BetSection() {
    const { id } = useParams();
    const [modalidades, setModalidades] = useState([]);
    const [cotacoes, setCotacoes] = useState([]);
    const [partida, setPartida] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseModalidades = await fetch(`${apiUrl}modalidades.php`);
                const dataModalidades = await responseModalidades.json();
                setModalidades(dataModalidades);

                const responseCotacoes = await fetch(`${apiUrl}cotacoes.php?p=${id}`);
                const dataCotacoes = await responseCotacoes.json();
                setCotacoes(dataCotacoes);

                const responsePartida = await fetch(`${apiUrl}partidas.php?p=${id}`);
                const [dataPartida] = await responsePartida.json(); // Atribuindo o primeiro elemento do array
                setPartida(dataPartida);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
        };

        fetchData();
    }, [id]);

    const getCotacao = (idOpcao, idModalidade) => {
        const cotacao = cotacoes.find(c => c.o === idModalidade && c.p === parseInt(id));
        return cotacao && cotacao.a === 1 ? cotacao.c : '-';
    };

    const replaceTeamNames = (optionString) => {
        if (partida) {
            return optionString
                .replace('[Time1]', partida.time1)
                .replace('[Time2]', partida.time2);
        }
        return optionString;
    };

    const categorizarOpcoes = (opcoes) => {
        const vitoriaTime1 = [];
        const empate = [];
        const vitoriaTime2 = [];

        opcoes.forEach(opcao => {
            const resultado = opcao.opcao.split(' x ').map(Number);
            if (resultado[0] > resultado[1]) {
                vitoriaTime1.push(opcao);
            } else if (resultado[0] === resultado[1]) {
                empate.push(opcao);
            } else if (resultado[0] < resultado[1]) {
                vitoriaTime2.push(opcao);
            }
        });

        return { vitoriaTime1, empate, vitoriaTime2 };
    };

    const idsModalidadesEspeciais = [182];

    return (
        <>
            {modalidades.map(modalidade => {
                const opcoesValidas = modalidade.opcoes.filter(opcao => getCotacao(opcao.idOpcao, modalidade.idModalidade) !== '-');

                if (opcoesValidas.length === 0) return null;

                const isModalidadeEspecial = idsModalidadesEspeciais.includes(modalidade.idModalidade);
                
                let layoutOpcoes;
                if (isModalidadeEspecial) {
                    const { vitoriaTime1, empate, vitoriaTime2 } = categorizarOpcoes(modalidade.opcoes);
                    layoutOpcoes = (
                        <div className='grid grid-cols-3 gap-4'>
                            <ul>
                                {vitoriaTime1.map(opcao => (
                                    <li key={opcao.idOpcao} className='py-2'>
                                        {replaceTeamNames(opcao.opcao)}: {getCotacao(opcao.idOpcao, modalidade.idModalidade)}
                                    </li>
                                ))}
                            </ul>
                            <ul>
                                {empate.map(opcao => (
                                    <li key={opcao.idOpcao} className='py-2'>
                                        {replaceTeamNames(opcao.opcao)}: {getCotacao(opcao.idOpcao, modalidade.idModalidade)}
                                    </li>
                                ))}
                            </ul>
                            <ul>
                                {vitoriaTime2.map(opcao => (
                                    <li key={opcao.idOpcao} className='py-2'>
                                        {replaceTeamNames(opcao.opcao)}: {getCotacao(opcao.idOpcao, modalidade.idModalidade)}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    );
                } else {
                    layoutOpcoes = (
                        <ul className='grid md:grid-cols-3'>
                            {modalidade.opcoes.map(opcao => {
                                const cotacao = getCotacao(opcao.idOpcao, modalidade.idModalidade);
                                return cotacao && cotacao !== '-' ? (
                                    <li key={opcao.idOpcao} className='flex justify-between px-3 md:px-4 py-2 md:py-3'>
                                        <div>{replaceTeamNames(opcao.opcao)}</div>
                                        <div>{cotacao}</div>
                                    </li>
                                ) : null;
                            })}
                        </ul>
                    );
                }
    
                return (
                    <div key={modalidade.idModalidade} className={`box-bet-${modalidade.idModalidade}`}>
                        <div className='bg-secondary text-white py-2 px-4 rounded-t-lg'>
                            <span>{modalidade.modalidade}</span>
                        </div>
                        {layoutOpcoes}
                    </div> 
                );
            })}
        </>
    );    
}
