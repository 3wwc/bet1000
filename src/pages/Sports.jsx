import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const apiUrl = import.meta.env.VITE_API_URL;

export default function Sports() {
    const [esportes, setEsportes] = useState([]);

    useEffect(() => {
        fetch(`${apiUrl}esportes.php`)
            .then(response => response.json())
            .then(data => setEsportes(data));
    }, []);

    const formatUrl = (nomeEsporte) => {
        return `/play/${nomeEsporte
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase()
            .replace(/\s+/g, '-')
        }`;
    };

    return (
        <div className="py-8">
            <div className="w-full md:max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {esportes.map((esporte, index) => (
                        <div key={index} className="bg-red-50 py-4 px-3 flex justify-between rounded items-center">
                            <span className="block text-xl font-bold">{esporte.esporte}</span>
                            <Link
                                to={formatUrl(esporte.esporte)}
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