import { Link } from 'react-router-dom';
import { isTokenValid } from '../auth/utils/Auth';
import { HouseSimple, NumberCircleOne, Star, UserList } from '@phosphor-icons/react';

import Logo from '/images/logo.png';
import LoginButtons from './global/ui/LoginButtons';
import ProfileArea from './global/ui/ProfileArea';

export default function Header() {
    const token = isTokenValid();

    return (
        <>
            <header className="w-full bg-primary text-white py-3 z-50 sticky top-0 left-0">
                <div className="container-bet flex justify-between items-center">
                    <div className='flex items-center gap-6'>
                        <Link to={'/'}>
                            <img src={Logo} className='w-full max-w-[100px] md:max-w-[160px] -my-2' alt="Logo Bet1000.top" />
                        </Link>

                        <nav className='hidden md:block'>
                            <ul className='flex gap-4 mt-2 uppercase'>
                                <li><Link to={'/live'}>Ao Vivo</Link></li>
                                <li><Link to={'/esportes'}>Esportes</Link></li>
                                <li><Link to={'/casino'} className='text-secondary font-bold'>Cassino</Link></li>
                            </ul>
                        </nav>
                    </div>

                    <div>
                        {token ? <ProfileArea /> : <LoginButtons />}
                    </div>
                </div>
            </header>

            <div className='bg-primary text-white border-t-[#621924] border-t'>
                <div className="container-bet">
                    <nav>
                        <ul className='flex overflow-x-scroll lg:overflow-auto'>
                            <li className='py-2 px-4 flex-shrink-0'>
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
                                <Link to={'/play/futebol'} className='flex gap-2 items-center flex-shrink-0'>
                                    <span>⚽</span> Futebol
                                </Link>
                            </li>
                            <li className='py-2 px-4 flex gap-2 items-center flex-shrink-0'>
                                <Link to={'/play/basquete'} className='flex gap-2 items-center flex-shrink-0'>
                                    <span>🏀</span> Basquete
                                </Link>
                            </li>
                            <li className='py-2 px-4 flex gap-2 items-center flex-shrink-0'>
                                <Link to={'/play/volei'} className='flex gap-2 items-center flex-shrink-0'>
                                    <span>🏐</span> Volei
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