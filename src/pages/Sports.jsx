import { Link } from "react-router-dom";
import SportsList from "../components/layout/global/json/sports.json";

export default function Sports() {
    return (
        <div className="py-8">
            <div className="w-full md:max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {SportsList.esportes.map((esporte, index) => (
                        <div key={index} className="bg-red-50 py-4 px-3 flex justify-between rounded items-center">
                            <span className="block text-xl font-bold">{esporte.nome}</span>
                            <Link
                                to={esporte.url}
                                className="bg-secondary hover:opacity-90 text-white px-4 py-2 rounded-md"
                            >
                                Jogar
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
