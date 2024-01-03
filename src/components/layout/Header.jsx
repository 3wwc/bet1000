import { Link } from 'react-router-dom';
import Logo from '/images/logo.png';

export default function Header() {
    return (
        <div>
            <header className="bg-primary text-white py-3">
                <div className="container-bet flex justify-between items-center">
                    <div className='flex items-center gap-6'>
                        <Link to={'/'}>
                            <img src={Logo} className='w-full max-w-[160px] -my-2' alt="Logo Bet1000.top" />
                        </Link>

                        <nav>
                            <ul className='flex gap-4 mt-2 uppercase'>
                                <li><Link to={'/'}>Esportes</Link></li>
                                <li><Link to={'/live'}>Ao Vivo</Link></li>
                                <li><Link to={'/casino'}>Cassino</Link></li>
                            </ul>
                        </nav>
                    </div>

                    <div className='flex gap-3'>
                        <Link
                            to={'/registro'}
                            className="bg-secondary text-white py-2 px-4 rounded"
                        >
                            Registrar-se Agora
                        </Link>
                        <Link
                            to={'/login'}
                            className="border hover:bg-white text-white hover:text-primary py-2 px-4 rounded transition-all duration-300"
                        >
                            Entrar
                        </Link>
                    </div>
                </div>
            </header>

            <div className='bg-primary text-white py-2'>
                <div className="container-bet">
                    <nav className=''>
                        <ul className='flex gap-4'>
                            <li>Página Inicial</li>
                            <li>Ao Vivo</li>
                            <li>Futebol</li>
                            <li>Basquete</li>
                            <li>Tênis</li>
                            <li>Minhas Apostas</li>
                            <li>Favoritos</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}