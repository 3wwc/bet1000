import { SoccerBall } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export default function MainGames() {
    const games = [
        {
            championship: "Championship A",
            home: "Team A",
            visitor: "Team B",
            tie: "Draw",
            homeOdds: 2.5,
            visitorOdds: 3.0,
            tieOdds: 2.2
        },
        {
            championship: "Championship B",
            home: "Team C",
            visitor: "Team D",
            tie: "Draw",
            homeOdds: 1.8,
            visitorOdds: 2.0,
            tieOdds: 2.5
        },
        {
            championship: "Championship C",
            home: "Team E",
            visitor: "Team F",
            tie: "Draw",
            homeOdds: 2.0,
            visitorOdds: 2.5,
            tieOdds: 2.2
        },
        {
            championship: "Championship D",
            home: "Team G",
            visitor: "Team H",
            tie: "Draw",
            homeOdds: 1.5,
            visitorOdds: 2.8,
            tieOdds: 2.0
        },
        {
            championship: "Championship E",
            home: "Team I",
            visitor: "Team J",
            tie: "Draw",
            homeOdds: 2.2,
            visitorOdds: 3.2,
            tieOdds: 2.5
        },
        {
            championship: "Championship F",
            home: "Team K",
            visitor: "Team L",
            tie: "Draw",
            homeOdds: 1.9,
            visitorOdds: 2.3,
            tieOdds: 2.1
        }
    ];
    return (
        <div className="bg-zinc-100 p-4">
            <div>
                <h2 className="text-xl font-bold">Próximos Jogos</h2>
                <p className="text-sm text-gray-500 mb-4">Aqui você encontra os próximos jogos disponíveis para apostar.</p>
            </div>
            {games.map((game, index) => (
                <div key={index} className="flex justify-between mb-2 bg-white hover:bg-zinc-200 p-2 rounded">
                    <div className="flex gap-2 items-center">
                        <div>
                            <SoccerBall size={20} />
                        </div>
                        <div>
                            <p>{game.home}</p>
                            <p>{game.visitor}</p>
                        </div>
                    </div>

                    <div>
                        <ul className="flex gap-4">
                            <li>
                                <button
                                    className="bg-zinc-300 hover:bg-zinc-400 w-12 md:w-16 h-12 rounded"
                                >
                                    <span className="hidden md:block text-xs">1</span>
                                    <p>{game.homeOdds}</p>
                                </button>
                            </li>
                            <li>
                                <button
                                    className="bg-zinc-300 hover:bg-zinc-400 w-12 md:w-16 h-12 rounded"
                                >
                                    <span className="hidden md:block text-xs">x</span>
                                    <p>{game.tieOdds}</p>
                                </button>
                            </li>
                            <li>
                                <button
                                    className="bg-zinc-300 hover:bg-zinc-400 w-12 md:w-16 h-12 rounded"
                                >
                                    <span className="hidden md:block text-xs">2</span>
                                    <p>{game.visitorOdds}</p>
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div className="hidden md:flex items-center">
                        <Link
                            to={`/bet/${index}`}
                            className="underline text-sm hover:text-zinc-700 mr-4"
                        >
                            Mais sobre o jogo
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}