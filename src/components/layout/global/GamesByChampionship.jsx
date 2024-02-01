import { useEffect, useState } from 'react';
import { Lock } from "@phosphor-icons/react";
import { useGame } from '../../context/GameContext';
import { Link, useNavigate } from 'react-router-dom';

const apiUrl = import.meta.env.VITE_API_URL;

export default function GamesByChampionship() {
    const { addOrUpdateGame, removeGame, selectedGames } = useGame();
    const [selectedOdds, setSelectedOdds] = useState({});
    const [campeonatos, setCampeonatos] = useState([]);
    const [partidas, setPartidas] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${apiUrl}campeonatos.php`)
            .then(response => response.json())
            .then(data => setCampeonatos(data));
    }, []);

    useEffect(() => {
        campeonatos.forEach(campeonato => {
            fetch(`${apiUrl}partidas.php?cp=${campeonato.idCampeonato}`)
                .then(response => response.json())
                .then(data => {
                    setPartidas(prevPartidas => ({
                        ...prevPartidas,
                        [campeonato.idCampeonato]: data
                    }));
                });
        });
    }, [campeonatos]);
    
    useEffect(() => {
        const newSelectedOdds = {};
        selectedGames.forEach(game => {
            newSelectedOdds[game.idJogo] = game.oddSelecionada.tipo;
        });
        setSelectedOdds(newSelectedOdds);
    }, [selectedGames]);

    const handleGameClick = (idJogo) => {
        navigate(`/game/${idJogo}`);
    };
    
    function formatarDataHora(dataHora) {
        const data = new Date(dataHora);
        const dia = data.getDate().toString().padStart(2, '0');
        const mes = (data.getMonth() + 1).toString().padStart(2, '0');
        const horas = data.getHours().toString().padStart(2, '0');
        const minutos = data.getMinutes().toString().padStart(2, '0');
      
        return (
            <>
                <p className='text-xs'>{`${dia}/${mes}`}</p>
                <p className='text-xs'>{`${horas}h${minutos}`}</p>
            </>
        );
    }

    const toggleGameSelection = (campeonato, idJogo, oddType, oddValue, time1, time2) => {
        if (isOddSelected(idJogo, oddType)) {
            removeGame(idJogo);
            setSelectedOdds(prev => {
                const newOdds = { ...prev };
                delete newOdds[idJogo];
                return newOdds;
            });
        } else {
            const newGame = {
                campeonato: campeonato,
                idJogo: idJogo,
                oddSelecionada: { tipo: oddType, valor: oddValue },
                times: { casa: time1, visitante: time2 }
            };
            addOrUpdateGame(newGame);
            setSelectedOdds(prev => ({ ...prev, [idJogo]: oddType }));
        }
    };

    const isOddSelected = (idJogo, oddType) => selectedOdds[idJogo] === oddType;

    return (
        <div className="js-game-championship">
            {campeonatos.map(campeonato => (
                <div key={campeonato.idCampeonato} className='mb-2'>
                    <div className="py-2 px-4 bg-zinc-800 text-white rounded flex items-center gap-2">                           
                        <span>⚽</span>
                        <h3>{campeonato.campeonato}</h3>
                    </div>
                    {partidas[campeonato.idCampeonato] && partidas[campeonato.idCampeonato].map(partida => (
                        <div className="pl-4 lg:px-4 flex justify-between gap-4 items-center bg-zinc-50 hover:bg-zinc-100 border-x border-b" key={partida.idPartida}>

                            <div className="flex gap-4 items-center cursor-pointer js-game-name py-3" onClick={() => handleGameClick(partida.idPartida)}>
                                <div className="text-center">
                                    <div>{formatarDataHora(partida.dataPartida)}</div>
                                </div>
                                <div className="games">
                                    <p className="truncate text-xs items-center flex gap-2">
                                        <img 
                                            src={partida.escudo1 ? `https://cryptoscore.app/times/img_${partida.idTime1}.png` : 'https://cryptoscore.app/times/sem_escudo.png'}
                                            className='w-6' 
                                            alt={`Escudo ${partida.time1}`} 
                                        />
                                        <span className='-mb-1'>{partida.time1}</span>
                                    </p>
                                    <p className="truncate text-xs items-center flex gap-2">
                                        <img 
                                            src={partida.escudo2 ? `https://cryptoscore.app/times/img_${partida.idTime2}.png` : 'https://cryptoscore.app/times/sem_escudo.png'}
                                            className='w-6' 
                                            alt={`Escudo ${partida.time2}`} 
                                        />
                                        <span className='-mb-1'>{partida.time2}</span>
                                    </p>
                                </div>
                            </div>

                            <div className="flex w-full max-w-[172px] md:max-w-[224px] md:border-r">
                                {['casa', 'empate', 'visitante'].map(tipo => {
                                    const dadosOdd = partida.odds[tipo] || {};
                                    return (
                                        <button
                                            key={tipo}
                                            onClick={() => dadosOdd.cotacao && toggleGameSelection(campeonato.campeonato, partida.idPartida, tipo, dadosOdd.cotacao, partida.time1, partida.time2)}
                                            className={`w-full h-[72px] border-l ${isOddSelected(partida.idPartida, tipo) ? 'bg-green-600 text-white' : 'hover:bg-zinc-300 text-primary'}`}
                                            disabled={!dadosOdd.cotacao}
                                        >
                                            <span className='text-[9px]'>{tipo}</span>
                                            <p>{dadosOdd.cotacao ? dadosOdd.cotacao : <Lock className='mx-auto' size={20} />}</p>
                                        </button>
                                    );
                                })}
                            </div>
                            
                            <p className="hidden md:block">
                                <Link
                                    to={`/game/${partida.idPartida}`}
                                    className="underline text-sm hover:text-zinc-700 mr-4"
                                >
                                    Mais sobre o jogo
                                </Link>
                            </p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}
