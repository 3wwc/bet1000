import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
    const [data, setData] = useState({});
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate('/');
        }
    }, [navigate]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
            const response = await fetch('https://cryptoscore.app/apiHomologa/login.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
    
            if (!response.ok) {
                throw new Error('Erro no login');
            }
    
            const responseData = await response.json();
    
            if (responseData.token) {
                localStorage.setItem('token', responseData.token);
                localStorage.setItem('id', responseData.idApostador);
                window.location.reload();
                navigate('/');
            } else {
                throw new Error('Token não recebido');
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <section className="py-8">
            <div className="container-bet">
                <div className="mx-auto w-full md:w-2/3">
                    <header>
                        <h1 className="text-2xl font-bold">Login</h1>
                        <p className="text-zinc-500">Acessar sua conta</p>
                    </header>

                    <form className="mt-8" onSubmit={handleSubmit}>
                        <div className="my-3 grid gap-3">
                            <div className="w-full">
                                <label
                                    htmlFor="login"
                                    className="mb-1 block font-bold text-xs"
                                >
                                    Login
                                </label>
                                <input
                                    className="w-full h-11 border rounded px-4 text-sm"
                                    placeholder="Digite seu login"
                                    name="login"
                                    type="text"
                                    id="login"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="w-full">
                                <label
                                    htmlFor="senha"
                                    className="mb-1 block font-bold text-xs"
                                >
                                    Senha
                                </label>
                                <input
                                    className="w-full h-11 border rounded px-4 text-sm"
                                    placeholder="Digite sua senha"
                                    name="senha"
                                    type="password"
                                    id="senha"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div>
                            <Link to="/recuperar-senha" className="text-flucolor-600 font-semibold">Esqueceu sua senha?</Link>
                        </div>
                        <div>
                            <button type="submit" className="w-full mt-4 p-4 bg-secondary hover:bg-flugreen-700 text-white transition-all duration-300 rounded font-bold">Acessar minha conta</button>
                        </div>
                    </form>

                    <div>
                        {error && <p className="text-red-500">{error}</p>}
                    </div>
                </div>
            </div>
        </section>
    )
}