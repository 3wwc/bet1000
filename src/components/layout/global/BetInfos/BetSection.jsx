import { useEffect, useState } from 'react';

export default function BetSection() {
    const [modalidades, setModalidades] = useState([]);
    const [opcoes, setOpcoes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://cxlotto.app/bet1000/api/modalidades.php');
                const data = await response.json();
                setModalidades(data.modalidades);
                setOpcoes(data.opcoes);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            {modalidades.map(modalidade => (
                <div key={modalidade.idModalidade} className={`box-bet-${modalidade.idModalidade}`}>
                    <div className='bg-secondary text-white py-2 px-4 rounded-t-lg'>
                        <span>{modalidade.modalidade}</span>
                    </div>
                    <ul className='grid md:grid-cols-3'>
                        {opcoes.filter(opcao => opcao.modalidade === modalidade.idModalidade)
                            .map(opcaoFiltrada => (
                            <li
                                key={opcaoFiltrada.idOpcao}
                                className='flex justify-between px-3 md:px-4 py-2 md:py-3'
                            >
                                <div>{opcaoFiltrada.opcao}</div>
                                <div>odd</div>
                            </li>
                        ))}
                    </ul>
                </div> 
            ))}
        </>
    );
}
