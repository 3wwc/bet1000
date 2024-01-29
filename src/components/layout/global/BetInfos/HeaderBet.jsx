import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Stadium from "/images/sports/stadium.webp";

const apiUrl = import.meta.env.VITE_API_URL;

export default function HeaderBet() {
    const { id } = useParams();
    const [partida, setPartida] = useState(null);

    useEffect(() => {
        const fetchPartida = async () => {
            try {
                const response = await fetch(`${apiUrl}partidas.php?p=${id}`);
                const data = await response.json();
                if (data && data.length > 0) {
                    setPartida(data[0]);
                }
            } catch (error) {
                console.error("Erro ao buscar informações da partida:", error);
            }
        };

        fetchPartida();
    }, [id]);

    if (!partida) {
        return <div>Carregando...</div>;
    }

    const [data, hora] = partida.dataPartida.split(' ');
    const [, mes, dia] = data.split('-');
    const horaFormatada = `${hora.slice(0, 2)}h${hora.slice(3, 5)}`;
    const dataFormatada = `${dia}/${mes} - ${horaFormatada}`;

    return (
        <div className="py-12 bg-cover bg-center text-white" style={{backgroundImage: `url(${Stadium})`}}>
            <div className="md:w-5/6 mx-auto">
                <div className="flex justify-center items-center gap-5">
                    <div className="flex flex-col items-center text-center">
                        <img src="https://cryptoscore.app/times/sem_escudo.png" alt={`Escudo ${partida.time1}`} />
                        <p>{partida.time1}</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="md:text-2xl font-bold flex gap-2">
                            {dataFormatada}
                        </div>
                        <p className="text-xs font-bold">Horário da Partida</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <img src="https://cryptoscore.app/times/sem_escudo.png" alt={`Escudo ${partida.time2}`} />
                        {partida.time2}
                    </div>
                </div>
            </div>
        </div>
    );
}
