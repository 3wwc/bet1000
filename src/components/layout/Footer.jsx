import { Link } from "react-router-dom";
import BarBottom from "./global/BarBottom";
import LinksFooter from "./global/json/footer-links.json";

import pixImg from "/images/payments/pix_b.webp";
import boletoImg from "/images/payments/boleto_b.webp";
import tedImg from "/images/payments/ted_b.webp";
import itauImg from "/images/payments/itau_b.webp";
import caixaImg from "/images/payments/caixa_b.webp";
import santanderImg from "/images/payments/santander_b.webp";
import bradescoImg from "/images/payments/bradesco_b.webp";
import bancodobrasilImg from "/images/payments/bancodobrasil_b.webp";
import pf4Img from "/images/payments/P4F.webp";
import BetFlutuant from "./global/ui/BetFlutuant";

export default function Footer() {
    return (
        <>
        <footer className="bg-tertiary text-white border-t-4 border-t-secondary pt-8 pb-6 mb-14 md:mb-0">
            <div className="container-bet">
                <div className="grid gap-4">
                    <div className="grid lg:flex gap-4">
                        <div className="flex-shrink-0">
                            <span className="block font-bold mb-2">Links Úteis</span>
                            <ul className="footer-list-nav">
                                {LinksFooter.links.map((link, index) => (
                                    <li key={index}>
                                        <Link to={link.url} className="text-xs">{link.title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <span className="block font-bold mb-2">Sobre nós</span>
                            <p className="text-xs mb-2">Bet1000.top é uma marca de apostas esportivas online, pertencente à empresa BET 1000, S.A., que oferece uma plataforma de apostas online inovadora, que abrange numerosos mercados desportivos. A BET 1000 é uma marca internacional, que opera em diversos países europeus, e tem como objetivo oferecer a melhor experiência de apostas online aos seus clientes.</p>
                            <p className="text-xs">Este site é operado pela Kaizen Gaming International Ltd, uma empresa estabelecida em Malta com o número de registro C43209, com seu endereço registrado no Flat B8, The Atrium, West Street, Msida MSD 1731, Malta. Kaizen Gaming International Ltd. é licenciado e regulamentado pela Malta Gaming Authority sob licença MGA / CRP / 152/2007, emitida em 12 de junho de 2019.</p>
                        </div>
                        <div className="flex-shrink-0">
                            <span className="block font-bold mb-2">Métodos de pagamento</span>
                            <ul className="grid grid-cols-3 gap-3">
                                <li
                                    className="w-full h-14 px-2 bg-zinc-800 flex items-center justify-center rounded"
                                >
                                    <img src={pixImg} alt="" />
                                </li>
                                <li
                                    className="w-full h-14 px-2 bg-zinc-800 flex items-center justify-center rounded"
                                >
                                    <img src={boletoImg} alt="" />
                                </li>
                                <li
                                    className="w-full h-14 px-2 bg-zinc-800 flex items-center justify-center rounded"
                                >
                                    <img src={itauImg} alt="" />
                                </li>
                                <li
                                    className="w-full h-14 px-2 bg-zinc-800 flex items-center justify-center rounded"
                                >
                                    <img src={bancodobrasilImg} alt="" />
                                </li>
                                <li
                                    className="w-full h-14 px-2 bg-zinc-800 flex items-center justify-center rounded"
                                >
                                    <img src={bradescoImg} alt="" />
                                </li>
                                <li
                                    className="w-full h-14 px-2 bg-zinc-800 flex items-center justify-center rounded"
                                >
                                    <img src={caixaImg} alt="" />
                                </li>
                                <li
                                    className="w-full h-14 px-2 bg-zinc-800 flex items-center justify-center rounded"
                                >
                                    <img src={santanderImg} alt="" />
                                </li>
                                <li
                                    className="w-full h-14 px-2 bg-zinc-800 flex items-center justify-center rounded"
                                >
                                    <img src={tedImg} alt="" />
                                </li>
                                <li
                                    className="w-full h-14 px-2 bg-zinc-800 flex items-center justify-center rounded"
                                >
                                    <img src={pf4Img} alt="" />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <p className="md:w-11/12 mx-auto md:text-center text-xs md:text-xl">Jogar com moderação é fundamental, pois o jogo pode ser prejudicial quando não é controlado adequadamente. Portanto, é importante ler todas as informações fornecidas na seção de Jogo Responsável para garantir um comportamento responsável durante as atividades de jogo.</p>
                    </div>
                </div>
            </div>
        </footer>
        <BetFlutuant/>
        <BarBottom />
        </>
    )
}