import { Link } from "react-router-dom";

export default function LoginButtons() {
    return (
        <div className='flex gap-3'>
            <Link
                to={'/registro'}
                className="bg-secondary text-white py-2 px-4 rounded"
            >
                Registrar<span className='hidden sm:inline-block'>-se Agora</span>
            </Link>
            <Link
                to={'/login'}
                className="border hover:bg-white text-white hover:text-primary py-2 px-4 rounded transition-all duration-300"
            >
                Entrar
            </Link>
        </div>
    )
}