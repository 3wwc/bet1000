import Logo from '/images/logo.png';

export default function Loader() {
    return (
        <div className="w-screen h-screen fixed top-0 left-0 flex items-center justify-center z-[999]">
            <div className="bg-black w-screen h-screen opacity-75 absolute top-0 left-0"></div>
            <div className="flex justify-center items-center relative z-50">
                <div className="animate-pulse text-center">
                    <img src={Logo} className='w-[230px]' alt="Logo Bet1000.top" />
                    <p className='text-2xl text-white'>Carregando...</p>
                </div>
            </div>
        </div>
    );
}