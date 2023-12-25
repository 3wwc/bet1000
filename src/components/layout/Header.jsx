import Logo from '/images/logo.png';

export default function Header() {
    return (
        <header className="bg-[#882A38] text-white py-3">
            <div className="container-bet flex justify-between items-center">
                <div className='flex items-center gap-4'>
                    <img src={Logo} className='w-full max-w-[160px] -my-4' alt="Logo Bet1000.top" />

                    <nav>
                        <ul className='flex gap-2'>
                            <li><a href="">Esportes</a></li>
                            <li><a href="">Ao Vivo</a></li>
                            <li><a href="">Cassino</a></li>
                        </ul>
                    </nav>
                </div>

                <div className='flex gap-3'>
                    <button className="bg-[#00A859] text-white py-2 px-4 rounded">Registrar-se Agora</button>
                    <button className="bg-[#00A859] text-white py-2 px-4 rounded">Entrar</button>
                </div>
            </div>
        </header>
    )
}