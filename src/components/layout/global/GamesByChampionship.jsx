import { useEffect, useState } from 'react';
import { Lock, SoccerBall } from "@phosphor-icons/react";
import { useGame } from '../../context/GameContext';
import { Link, useNavigate } from 'react-router-dom';

export default function GamesByChampionship() {
    const { addOrUpdateGame, selectedGames } = useGame();
    const [selectedOdds, setSelectedOdds] = useState({});
    const [campeonatos, setCampeonatos] = useState([]);
    const [partidas, setPartidas] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://cxlotto.app/bet1000/api/campeonatos.php')
            .then(response => response.json())
            .then(data => setCampeonatos(data));
    }, []);

    useEffect(() => {
        campeonatos.forEach(campeonato => {
            fetch(`https://cxlotto.app/bet1000/api/partidas.php?cp=${campeonato.idCampeonato}`)
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

    const handleOddClick = (campeonato, idJogo, oddType, oddValue, time1, time2) => {
        const newGame = {
            campeonato: campeonato,
            idJogo: idJogo,
            oddSelecionada: { tipo: oddType, valor: oddValue },
            times: { casa: time1, visitante: time2 }
        };
        addOrUpdateGame(newGame);

        setSelectedOdds(prev => ({ ...prev, [idJogo]: oddType }));
    };

    const isOddSelected = (idJogo, oddType) => selectedOdds[idJogo] === oddType;

    return (
        <div className="js-game-championship">
            {campeonatos.map(campeonato => (
                <div key={campeonato.idCampeonato}>
                    <div className="py-2 px-4 bg-zinc-800 text-white mb-1 rounded flex items-center gap-2">                           
                        <SoccerBall size={20} />
                        <h3>{campeonato.campeonato}</h3>
                    </div>
                    {partidas[campeonato.idCampeonato] && partidas[campeonato.idCampeonato].map(partida => (
                        <div className="py-3 px-4 flex justify-between gap-4 items-center bg-zinc-50 hover:bg-zinc-100 rounded" key={partida.idPartida}>

                            <div className="flex gap-4 items-center cursor-pointer js-game-name" onClick={() => handleGameClick(partida.idPartida)}>
                                <div className="text-center">
                                    <div>{formatarDataHora(partida.dataPartida)}</div>
                                </div>
                                <div className="games">
                                    <p className="truncate">{partida.time1}</p>
                                    <p className="truncate">{partida.time2}</p>
                                </div>
                            </div>

                            <div className="flex gap-4 w-full max-w-[172px] md:max-w-[224px]">
                                {['casa', 'empate', 'visitante'].map(tipo => {
                                    const dadosOdd = partida.odds[tipo] || {};
                                    return (
                                        <button
                                            key={tipo}
                                            onClick={() => dadosOdd.cotacao && handleOddClick(campeonato.campeonato, partida.idPartida, tipo, dadosOdd.cotacao, partida.time1, partida.time2)}
                                            className={`w-12 md:w-16 h-12 md:h-14 rounded ${isOddSelected(partida.idPartida, tipo) ? 'bg-green-600 text-white' : 'bg-zinc-300 hover:bg-zinc-400'}`}
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
