import { useEffect, useState } from 'react';

export default function Profile() {
    const [cpf, setCpf] = useState('');
    const [nome, setNome] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [login, setLogin] = useState('');

    useEffect(() => {
        const id = localStorage.getItem('id');
        const token = localStorage.getItem('token');

        fetch(`https://betbicho.top/api/buscaCliente.php?id=${id}&token=${token}`)
            .then(response => response.json())
            .then(data => {
                setCpf(data.cpf);
                setNome(data.nome);
                setNascimento(data.nascimento);
                setEmail(data.email);
                setTelefone(data.telefone);
                setLogin(data.login);
            })
            .catch(error => console.error('Erro ao buscar dados do usuário:', error));
    }, []);

    return (
        <section className='py-8'>
            <div className='w-full max-w-5xl px-4 mx-auto'>
                <header className='mb-6'>
                    <h1 className="text-2xl md:text-4xl font-bold">Perfil</h1>
                </header>

                <div className="grid md:grid-cols-2 gap-3">
                    <label>
                        <p className='mb-2'>CPF:</p>
                        <input type="text" className='px-2 h-12 w-full border border-zinc-300 rounded' value={cpf} onChange={e => setCpf(e.target.value)} />
                    </label>
                    <label>
                        <p className='mb-2'>Nome:</p>
                        <input type="text" className='px-2 h-12 w-full border border-zinc-300 rounded' value={nome} onChange={e => setNome(e.target.value)} />
                    </label>
                    <label>
                        <p className='mb-2'>Data de Nascimento:</p>
                        <input type="date" className='px-2 h-12 w-full border border-zinc-300 rounded' value={nascimento} onChange={e => setNascimento(e.target.value)} />
                    </label>
                    <label>
                        <p className='mb-2'>Email:</p>
                        <input type="email" className='px-2 h-12 w-full border border-zinc-300 rounded' value={email} onChange={e => setEmail(e.target.value)} />
                    </label>
                    <label>
                        <p className='mb-2'>Telefone:</p>
                        <input type="tel" className='px-2 h-12 w-full border border-zinc-300 rounded' value={telefone} onChange={e => setTelefone(e.target.value)} />
                    </label>
                    <label>
                        <p className='mb-2'>Login:</p>
                        <input type="text" className='px-2 h-12 w-full border border-zinc-300 rounded opacity-40' disabled value={login} onChange={e => setLogin(e.target.value)} />
                    </label>
                    <div className="md:col-span-2">
                        <div className="grid md:grid-cols-2 gap-3">
                            <a href="" className='px-2 w-full h-12 bg-red-600 text-white rounded grid place-content-center'>Desativar conta</a>
                            <a href="" className='px-2 w-full h-12 bg-green-600 text-white rounded grid place-content-center'>Alterar</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}