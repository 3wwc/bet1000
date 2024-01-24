import { useEffect, useState } from 'react';
import { SoccerBall } from "@phosphor-icons/react";
import GamesResults from "./json/items.json";
import { useGame } from '../../context/GameContext';
import { Link, useNavigate } from 'react-router-dom';

export default function GamesByChampionship() {
    const { addOrUpdateGame, selectedGames } = useGame();
    const [selectedOdds, setSelectedOdds] = useState({});
    const navigate = useNavigate();
    
    useEffect(() => {
        const newSelectedOdds = {};
        selectedGames.forEach(game => {
            newSelectedOdds[game.idJogo] = game.oddSelecionada.tipo;
        });
        setSelectedOdds(newSelectedOdds);
    }, [selectedGames]);

    const handleGameClick = (idJogo) => {
        if (window.innerWidth <= 768) {
            navigate(`/game/${idJogo}`);
        }
    };    

    const handleOddClick = (campeonato, idJogo, oddType, oddValue, timeCasa, timeVisitante) => {
        const newGame = {
            campeonato: campeonato,
            idJogo: idJogo,
            oddSelecionada: { tipo: oddType, valor: oddValue },
            times: { casa: timeCasa, visitante: timeVisitante }
        };
        addOrUpdateGame(newGame);

        setSelectedOdds(prev => ({ ...prev, [idJogo]: oddType }));
    };

    const isOddSelected = (idJogo, oddType) => selectedOdds[idJogo] === oddType;

    return (
        <div className="js-game-championship">
            {GamesResults.esportes.map((esporte, indexEsporte) => (
                <div className="mb-4" key={indexEsporte}>
                    {esporte.campeonatos.map((campeonato, indexCampeonato) => (
                        <div key={indexCampeonato} className="mb-2">
                            <div className="py-2 px-4 bg-zinc-800 text-white mb-1 rounded flex items-center gap-2">                           
                                <SoccerBall size={20} />
                                <h3>{campeonato.nome}</h3>
                            </div>
                            <div className="grid gap-1">
                            {campeonato.jogos.map(jogo => (
                                <div className="py-3 px-4 flex justify-between gap-4 items-center bg-zinc-50 hover:bg-zinc-100 rounded" key={jogo.id}>
                                    <div className="flex gap-4 items-center js-game-name" onClick={() => handleGameClick(jogo.id)}>
                                        <div className="text-center">
                                            <p className="text-xs">Hoje</p>
                                            <p className="text-xs">12h30</p>
                                        </div>
                                        <div className="games">
                                            <p className="truncate">{jogo.timeCasa}</p>
                                            <p className="truncate">{jogo.timeVisitante}</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 w-full max-w-[172px] md:max-w-[224px]">
                                        {['casa', 'empate', 'visitante'].map(tipo => (
                                            <button
                                                key={tipo}
                                                onClick={() => handleOddClick(campeonato.nome, jogo.id, tipo, jogo.odds[tipo], jogo.timeCasa, jogo.timeVisitante)}
                                                className={`w-12 md:w-16 h-12 md:h-14 rounded ${isOddSelected(jogo.id, tipo) ? 'bg-green-600 text-white' : 'bg-zinc-300 hover:bg-zinc-400'}`}
                                            >
                                                <span className='text-[9px]'>{tipo}</span>
                                                <p>{jogo.odds[tipo]}</p>
                                            </button>
                                        ))}
                                    </div>
                                    
                                    <p className="hidden md:block">
                                        <Link
                                            to={`/game/${jogo.id}`}
                                            className="underline text-sm hover:text-zinc-700 mr-4"
                                        >
                                            Mais sobre o jogo
                                        </Link>
                                    </p>
                                </div>
                            ))}
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}
