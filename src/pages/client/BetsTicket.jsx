import { Link } from "react-router-dom";
import { Copy, WhatsappLogo } from "@phosphor-icons/react";
import Logo from "/images/logo.png";

export default function BetsTicket() {
    return (
        <div className='py-8'>
            <div className="w-full max-w-5xl px-4 mx-auto">
                <div className='mb-2 text-center'>
                    <Link className='text-sm font-bold hover:underline' to='/'>Voltar</Link>
                </div>

                <header className='mb-8'>
                    <h1 className='text-2xl md:text-4xl font-bold text-center'>Minha Aposta</h1>
                </header>                

                <div className='bg-yellow-100 w-full max-w-xl mx-auto px-4 py-6 border shadow-lg'>
                    <div>
                        <img src={Logo} alt="Logo plataforma" className="mb-4" />
                    </div>
                    <div className="text-xs font-bold mb-4">
                        <p>ID da Aposta: 53032</p>
                        <p>Data da Aposta: 24/01/2024 - 10:30:20</p>
                    </div>

                    <div className="flex justify-between items-center">
                        <p>Link: <span>https://www.bet1000.top/coupon?id=52032</span></p>
                        <div className="flex gap-2">
                            <WhatsappLogo size={20} />
                            <Copy size={20} />
                        </div>
                    </div>

                    <div className="py-4">
                        <ul className='grid'>
                            <li><p>Usuário: (Valor)</p></li>
                            <li><p>Apostador: (Valor)</p></li>
                            <li><p>Eventos: (Valor)</p></li>
                            <li><p>Bônus: (Valor)</p></li>
                        </ul>
                    </div>

                    <div className="flex justify-between items-center">
                        <p>Valor: (Valor)</p>
                        <p>Retorno: (Valor)</p>
                    </div>

                    <div className="flex justify-between items-center">
                        <p>Status: (Valor)</p>
                        <p>Simples de (Valor)</p>
                    </div>

                    <div className="mt-4">
                        <ul className='grid gap-3'>
                            <li className="flex justify-between">
                                <div className="">
                                    <p>Futebol: Nome do Campeonato</p>
                                    <p>Nome Time 1</p>
                                    <p>Nome Time 2</p>
                                    <p><strong>Tempo Regular - [Fora (2.05)]</strong></p>
                                </div>
                                <div className="text-right">
                                    <p>24/01/2024</p>
                                    <p>13:30</p>
                                    <p>(Status)</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}