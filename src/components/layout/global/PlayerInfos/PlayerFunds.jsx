import { useEffect, useState } from 'react';

const apiUrl = import.meta.env.VITE_API_URL;

export default function PlayerFunds() {
    const [saldo, setSaldo] = useState('');

    useEffect(() => {
        const fetchSaldo = async () => {
            const token = localStorage.getItem('token');
            const id = localStorage.getItem('id');

            if (token && id) {
                try {
                    const response = await fetch(`${apiUrl}saldo.php?id=${id}&token=${token}`);
                    const data = await response.json();

                    if (data && data.saldo !== undefined) {
                        setSaldo(formatarComoMoeda(data.saldo));
                    }
                } catch (error) {
                    console.error('Erro ao buscar saldo:', error);
                }
            }
        };

        fetchSaldo();
    }, []);

    const formatarComoMoeda = (valor) => {
        return Number(valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    };

    return (
        <>
            <span>{saldo}</span>
        </>
    );
}