import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGame } from '../../../context/GameContext';

const apiUrl = import.meta.env.VITE_API_URL;

export default function BetSection() {
    const { id } = useParams();
    const { addOrUpdateGame, removeGame, selectedGames } = useGame();
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
                const [dataPartida] = await responsePartida.json();
                setPartida(dataPartida);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
        };

        fetchData();
    }, [id]);

    const getCotacao = (idOpcao) => {
        const cotacao = cotacoes.find(c => c.o === idOpcao && c.p === parseInt(id));
        return cotacao && cotacao.a === 1 ? cotacao.c : '-';
    };

    const isOpcaoSelecionada = (idOpcao) => {
        return selectedGames.some(game => game.opcaoSelecionada === idOpcao);
    };

    const toggleOpcao = (opcao) => {
        const isSelected = isOpcaoSelecionada(opcao.idOpcao);

        if (isSelected) {
            removeGame(opcao.idOpcao);
        } else {
            const oddValue = getCotacao(opcao.idOpcao);
            const tipoOpcao = opcao.opcao
                .replace('[Time1]', 'Casa')
                .replace('[Time2]', 'Visitante');
            const newGame = {
                idJogo: id,
                campeonato: partida.campeonato,
                idOpcao: opcao.idOpcao,
                oddSelecionada: {
                    tipo: tipoOpcao,
                    valor: oddValue,
                },
                times: {
                    casa: partida.time1,
                    visitante: partida.time2
                },
            };
            addOrUpdateGame(newGame);
        }
    }; 

    const replaceTeamNames = (optionString) => {
        if (partida) {
            return optionString
                .replace(/\[Time1\]/g, partida.time1)
                .replace(/\[Time2\]/g, partida.time2);
        }
        return optionString;
    };    
    
    const categorizarOpcoes = (opcoes) => {
        const vitoriaTime1 = [];
        const empate = [];
        const vitoriaTime2 = [];
    
        opcoes.forEach(opcao => {
            const resultado = opcao.opcao.match(/(\d+)\s*x\s*(\d+)/);
            if (resultado) {
                const golsTime1 = parseInt(resultado[1], 10);
                const golsTime2 = parseInt(resultado[2], 10);
    
                if (golsTime1 > golsTime2) {
                    vitoriaTime1.push(opcao);
                } else if (golsTime1 === golsTime2) {
                    empate.push(opcao);
                } else if (golsTime1 < golsTime2) {
                    vitoriaTime2.push(opcao);
                }
            }
        });
    
        return { vitoriaTime1, empate, vitoriaTime2 };
    };

    const idsModalidadesEspeciais = [81, 181, 182];

    return (
        <section className='grid gap-2'>
            {modalidades.map(modalidade => {
                const opcoesValidas = modalidade.opcoes.filter(opcao => getCotacao(opcao.idOpcao, modalidade.idModalidade) !== '-');

                if (opcoesValidas.length === 0) return null;
    
                const isModalidadeEspecial = idsModalidadesEspeciais.includes(modalidade.idModalidade);
                
                let layoutOpcoes;
                if (isModalidadeEspecial) {
                    const { vitoriaTime1, empate, vitoriaTime2 } = categorizarOpcoes(opcoesValidas);
                    layoutOpcoes = (
                        <div className='grid grid-cols-3 gap-1 mt-1'>
                            <ul className='flex flex-col gap-1'>
                                {vitoriaTime1.map(opcao => (
                                    <li key={opcao.idOpcao}>
                                        <button
                                            className='w-full flex items-center justify-between border hover:bg-zinc-100'
                                            onClick={() => toggleOpcao(opcao)}
                                        >
                                            <span className='text-xs ml-3'>{opcao.opcao.match(/(\d+)\s*x\s*(\d+)/)[0]}</span> 
                                            <span className={`w-12 md:w-16 text-[10px] md:text-xs border-l py-2 md:py-3 font-bold ${isOpcaoSelecionada(opcao.idOpcao) ? 'bg-secondary text-white' : ''}`}>
                                                {getCotacao(opcao.idOpcao)}
                                            </span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            <ul className='flex flex-col gap-1'>
                                {empate.map(opcao => (
                                    <li key={opcao.idOpcao}>
                                        <button
                                            className='w-full flex items-center justify-between border hover:bg-zinc-100'
                                            onClick={() => toggleOpcao(opcao)}
                                        >
                                            <span className='text-xs ml-3'>{opcao.opcao.match(/(\d+)\s*x\s*(\d+)/)[0]}</span> 
                                            <span className={`w-12 md:w-16 text-[10px] md:text-xs border-l py-2 md:py-3 font-bold ${isOpcaoSelecionada(opcao.idOpcao) ? 'bg-secondary text-white' : ''}`}>
                                                {getCotacao(opcao.idOpcao)}
                                            </span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            <ul className='flex flex-col gap-1'>
                                {vitoriaTime2.map(opcao => (
                                    <li key={opcao.idOpcao}>
                                        <button
                                            className='w-full flex items-center justify-between border hover:bg-zinc-100'
                                            onClick={() => toggleOpcao(opcao)}
                                        >
                                            <span className='text-xs ml-3'>{opcao.opcao.match(/(\d+)\s*x\s*(\d+)/)[0]}</span> 
                                            <span className={`w-12 md:w-16 text-[10px] md:text-xs border-l py-2 md:py-3 font-bold ${isOpcaoSelecionada(opcao.idOpcao) ? 'bg-secondary text-white' : ''}`}>
                                                {getCotacao(opcao.idOpcao)}
                                            </span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    );
                } else {
                    layoutOpcoes = (
                        <ul className='grid md:grid-cols-3 md:gap-1'>
                            {modalidade.opcoes.map(opcao => {
                                const cotacao = getCotacao(opcao.idOpcao);
                                const isSelected = isOpcaoSelecionada(opcao.idOpcao); // Verifica se a opção está selecionada
                                return cotacao && cotacao !== '-' ? (
                                    <li key={opcao.idOpcao}>
                                        <button
                                            className='w-full flex items-center justify-between border hover:bg-zinc-100'
                                            onClick={() => toggleOpcao(opcao)}
                                        >
                                            <span className='text-xs ml-3'>{replaceTeamNames(opcao.opcao)}</span>
                                            <span className={`w-12 md:w-16 text-[10px] md:text-xs border-l py-2 md:py-3 font-bold ${isSelected ? 'bg-secondary text-white' : ''}`}>
                                                {cotacao}
                                            </span>
                                        </button>
                                    </li>
                                ) : null;
                            })}
                        </ul>
                    );
                }
    
                return (
                    <div key={modalidade.idModalidade} className={`box-bet-${modalidade.idModalidade}`}>
                        <div className='bg-secondary text-white py-1 px-4 md:mb-1 rounded-t-lg'>
                            <span className='text-xs'>{modalidade.modalidade}</span>
                        </div>
                        {layoutOpcoes}
                    </div> 
                );
            })}
        </section>
    );    
}