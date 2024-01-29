import { useEffect, useState } from 'react';
import { Lock, SoccerBall } from "@phosphor-icons/react";
import { Link, useNavigate } from 'react-router-dom';
import { useGame } from '../../context/GameContext';

const apiUrl = import.meta.env.VITE_API_URL;

export default function GamesLive() {
    const { addOrUpdateGame, removeGame, selectedGames } = useGame();
    const [campeonatos, setCampeonatos] = useState([]);
    const [partidas, setPartidas] = useState([]);
    const [selectedOdds, setSelectedOdds] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        let isMounted = true;
    
        const fetchCampeonatos = async () => {
            const response = await fetch(`${apiUrl}campeonatos.php`);
            const data = await response.json();
            if (isMounted) setCampeonatos(data);
        };
    
        fetchCampeonatos();
    
        return () => {
            isMounted = false;
        };
    }, []);

    useEffect(() => {
        if (campeonatos.length > 0) {
            const now = new Date();
            const sixHoursLater = new Date(now.getTime() + 6 * 60 * 60 * 1000);
    
            campeonatos.forEach(async campeonato => {
                const response = await fetch(`${apiUrl}partidas.php?cp=${campeonato.idCampeonato}`);
                const data = await response.json();
    
                const partidasFiltradas = data.filter(partida => {
                    const partidaTime = new Date(partida.dataPartida);
                    return partidaTime >= now && partidaTime <= sixHoursLater;
                });
    
                setPartidas(prevPartidas => ({
                    ...prevPartidas,
                    [campeonato.idCampeonato]: partidasFiltradas
                }));
            });
        }
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

    const isOddSelected = (idJogo, oddType) => selectedOdds[idJogo] === oddType;

    return (
        <>
            <div>
                {campeonatos.map(campeonato => {
                    const partidasDoCampeonato = partidas[campeonato.idCampeonato];
                    if (!partidasDoCampeonato || partidasDoCampeonato.length === 0) {
                        return null;
                    }

                    return (
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
                                            <p className="truncate flex gap-2">
                                                <img src="https://cryptoscore.app/times/sem_escudo.png" className='w-6' alt={`Escudo ${partida.time1}`} />
                                                {partida.time1}
                                            </p>
                                            <p className="truncate flex gap-2">
                                                <img src="https://cryptoscore.app/times/sem_escudo.png" className='w-6' alt={`Escudo ${partida.time1}`} />
                                                {partida.time2}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 w-full max-w-[172px] md:max-w-[224px]">
                                        {['casa', 'empate', 'visitante'].map(tipo => {
                                            const dadosOdd = partida.odds[tipo] || {};
                                            return (
                                                <button
                                                    key={tipo}
                                                    onClick={() => dadosOdd.cotacao && toggleGameSelection(campeonato.campeonato, partida.idPartida, tipo, dadosOdd.cotacao, partida.time1, partida.time2)}
                                                    className={`w-12 md:w-16 h-12 md:h-14 rounded ${isOddSelected(partida.idPartida, tipo) ? 'bg-green-600 text-white' : 'bg-zinc-300 hover:bg-zinc-400 text-primary'}`}
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
                    );
                })}           
            </div>
        </>
    );
}
