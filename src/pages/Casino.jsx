import CasinoLayout from "../components/layout/content/CasinoLayout";
import SlideCasino from "../components/layout/global/SlideCasino";
import casinoGames from "../components/layout/global/json/cassino-games.json"

export default function Cassino() {
    return (
        <CasinoLayout slide={<SlideCasino/>}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {casinoGames.jogosDeCassino.map((game, index) => (
                    <div key={index} className="w-full h-40 overflow-hidden rounded relative img-casino">
                        <img src={game.image} className="w-full h-full object-cover" alt="" />

                        <div className="absolute w-full h-full -top-48 left-0 flex items-center justify-center bg-[#000000aa] img-casino-box">
                            <button className="bg-secondary text-white py-3 px-4 rounded">
                                Jogar Agora
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </CasinoLayout>
    )
}