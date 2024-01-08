import { Link } from "react-router-dom";
import GamesResults from "./json/items.json";

export default function GamesLive() {
    return (
        <>
            <div>
                {GamesResults.esportes.map((esporte, indexEsporte) => (
                    <div className="mb-4" key={indexEsporte}>
                        {esporte.campeonatos.map((campeonato, indexCampeonato) => (
                            <div key={indexCampeonato}>
                                <div className="py-2 px-4 bg-zinc-800 text-white rounded">                          
                                    <h3>{campeonato.nome}</h3>
                                </div>
                                <div className="grid gap-1">
                                {campeonato.jogos.map(jogo => (
                                    <div className="py-3 px-4 flex justify-between gap-4 items-center bg-zinc-50 hover:bg-zinc-100 rounded" key={jogo.id}>
                                        <div className="flex gap-4 items-center js-game-name">
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
                                            <button className="bg-zinc-300 hover:bg-zinc-400 w-12 md:w-16 h-12 rounded">
                                                <span className="hidden md:block text-xs">1</span>
                                                <p>{jogo.odds.casa}</p>
                                            </button>
                                            <button className="bg-zinc-300 hover:bg-zinc-400 w-12 md:w-16 h-12 rounded">
                                                <span className="hidden md:block text-xs">x</span>
                                                <p>{jogo.odds.empate}</p>
                                            </button>
                                            <button className="bg-zinc-300 hover:bg-zinc-400 w-12 md:w-16 h-12 rounded">
                                                <span className="hidden md:block text-xs">2</span>
                                                <p>{jogo.odds.visitante}</p>
                                            </button>
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
        </>
    );
}
