import { Circle, PokerChip, SoccerBall, UserCircle, UserList } from '@phosphor-icons/react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function BarBottom() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (windowWidth <= 767) {
        return <>
            <div className='w-full bg-zinc-800 fixed bottom-0 left-0 px-3'>
                <div className="h-14 flex gap-2 justify-between items-center text-xs text-white">
                    <Link to='/'>
                        <div className='flex flex-col gap-1 items-center'>
                            <Circle size={20} />
                            <p>Ao vivo</p>
                        </div>
                    </Link>
                    <Link to='/esportes'>
                        <div className='flex flex-col gap-1 items-center'>
                            <SoccerBall size={20} />
                            <p>Esportes</p>
                        </div>
                    </Link>
                    <Link to='/minha-conta/minhas-apostas'>
                        <div className='flex flex-col gap-1 items-center'>
                            <UserList size={20} />
                            <p>Apostas</p>
                        </div>
                    </Link>
                    <Link to='/minha-conta'>
                        <div className='flex flex-col gap-1 items-center'>
                            <UserCircle size={20} />
                            <p>Conta</p>
                        </div>
                    </Link>
                    <Link to='/casino'>
                        <div className='flex flex-col gap-1 items-center'>
                            <PokerChip size={20} />
                            <p>Cassino</p>
                        </div>
                    </Link>
                </div>
            </div>
        </>;
    } else {
        return null;
    }
}