import { Link } from 'react-router-dom';
import Logo from '/images/logo.png';
import { Basketball, HouseSimple, NumberCircleOne, SoccerBall, Star, TennisBall, UserList } from '@phosphor-icons/react';

export default function Header() {
    return (
        <>
            <header className="bg-primary text-white py-3">
                <div className="container-bet flex justify-between items-center">
                    <div className='flex items-center gap-6'>
                        <Link to={'/'}>
                            <img src={Logo} className='w-full max-w-[100px] md:max-w-[160px] -my-2' alt="Logo Bet1000.top" />
                        </Link>

                        <nav className='hidden md:block'>
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

            <div className='bg-primary text-white border-t-[#621924] border-t'>
                <div className="container-bet">
                    <nav>
                        <ul className='flex overflow-x-scroll'>
                            <li className='py-2 px-4'>
                                <Link to={'/'} className='flex gap-2 items-center flex-shrink-0'>
                                    <HouseSimple size={20} /> Página Inicial
                                </Link>
                            </li>
                            <li className='py-2 px-4 flex gap-2 items-center flex-shrink-0'>
                                <Link to={'/live'} className='flex gap-2 items-center flex-shrink-0'>
                                    <NumberCircleOne size={20} /> Ao Vivo
                                </Link>
                            </li>
                            <li className='py-2 px-4 flex gap-2 items-center flex-shrink-0 border-l border-l-[#621924]'>
                                <Link to={'/futebol'} className='flex gap-2 items-center flex-shrink-0'>
                                    <SoccerBall size={20} /> Futebol
                                </Link>
                            </li>
                            <li className='py-2 px-4 flex gap-2 items-center flex-shrink-0'>
                                <Link to={'/basquete'} className='flex gap-2 items-center flex-shrink-0'>
                                    <Basketball size={20} /> Basquete
                                </Link>
                            </li>
                            <li className='py-2 px-4 flex gap-2 items-center flex-shrink-0'>
                                <Link to={'/tenis'} className='flex gap-2 items-center flex-shrink-0'>
                                    <TennisBall size={20} /> Tênis
                                </Link>
                            </li>
                            <li className='py-2 px-4 flex gap-2 items-center flex-shrink-0 border-l border-l-[#621924]'>
                                <Link to={'/minha-conta/minhas-apostas'} className='flex gap-2 items-center flex-shrink-0'>
                                    <UserList size={20} /> Minhas Apostas
                                </Link>
                            </li>
                            <li className='py-2 px-4 flex gap-2 items-center flex-shrink-0'>
                                <Link to={'/minha-conta/favoritos'} className='flex gap-2 items-center flex-shrink-0'>
                                    <Star size={20} /> Favoritos
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}