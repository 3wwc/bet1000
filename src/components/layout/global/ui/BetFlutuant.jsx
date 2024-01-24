import { ArrowRight, Ticket, X } from "@phosphor-icons/react";
import { Trash } from "@phosphor-icons/react/dist/ssr";
import { useGame } from '../../../context/GameContext';
import { useState } from "react";
import PropTypes from 'prop-types';

const BetDetailsMb = ({ game, onRemove }) => (
    <div className="bg-white border border-zinc-300 rounded py-1 px-2">
        <div className="flex justify-between items-center mb-1">
            <div>
                <span className="text-xs">{game.times.casa} vs {game.times.visitante}</span>
            </div>
            <Trash size={20} className='text-red-600 cursor-pointer' role="button" aria-label="Remove bet" onClick={() => onRemove(game.idJogo)} />
        </div>
        <div className='flex justify-between items-center text-xs'>
            <span className="capitalize font-bold">{game.oddSelecionada.tipo}</span>
            <span className="py-1 px-2 rounded text-white bg-secondary">{game.oddSelecionada.valor}</span>
        </div>
    </div>
);

export default function BetFlutuant() {
    const { selectedGames, removeGame, deselectOdd, clearGames, betValue, setBetValue, formatBetValue } = useGame();
    const totalOdds = selectedGames.reduce((total, game) => total * game.oddSelecionada.valor, 1).toFixed(2);
    const [isBarOpen, setIsBarOpen] = useState(false);

    const calculatedPayout = (Number(betValue.replace(',', '.')) * totalOdds).toFixed(2).toString().replace(".", ",");

    const handleRemoveGame = (idJogo) => {
        removeGame(idJogo);
        deselectOdd(idJogo);
    };

    const handleToggleBar = () => {
        setIsBarOpen(!isBarOpen);
    };

    const handleBetValueChange = (event) => {
        const formattedValue = formatBetValue(event.target.value);
        setBetValue(formattedValue);
    };

    return (
        <>
            <div
                className={`fixed lg:hidden bottom-16 right-4 w-16 h-16 bg-primary rounded-full z-40 grid place-content-center ${isBarOpen ? 'hidden' : ''}`}
                onClick={handleToggleBar}
            >
                <div className="relative">
                        <div className="absolute bg-secondary -top-6 -right-2 w-5 h-5 flex justify-center items-center rounded-full">
                            <span className="text-[8px] text-white">{selectedGames.length}</span>
                        </div>
                    <Ticket className="text-white" size={32} />
                </div>
            </div>

            <div className={`fixed bottom-0 lg:hidden left-0 w-full bg-primary z-50 js-bar ${!isBarOpen ? 'hidden' : ''}`}>
                <div className="relative w-full">
                    <div
                        className="absolute -top-4 right-4 h-8 w-8 bg-black rounded-full text-white grid place-content-center"
                        onClick={handleToggleBar}
                    >
                        <X size={20}/>
                    </div>
                    <div className="py-8 px-4">
                        <div className="flex justify-between items-center mb-3">
                            <h2 className="text-2xl text-white font-bold">Cupom</h2>
                            <div>
                                <button
                                    className="flex gap-2 items-center justify-center bg-white text-primary rounded px-3 py-1"
                                    onClick={clearGames}
                                    >
                                        <Trash size={20} />
                                        <span className="text-xs">Limpar</span>
                                </button>
                            </div>
                        </div>
                        <hr />

                        <div className="grid gap-3 max-h-[360px] overflow-x-auto mt-3">
                            {selectedGames.length > 0 ? (
                            selectedGames.map((game, index) => (
                                <BetDetailsMb key={index} game={game} onRemove={handleRemoveGame} />
                            ))
                            ) : (
                                <p className="py-4 px-1 text-xs text-center text-white">Sem aposta adicionada</p>
                            )}
                        </div>

                        <div className="mt-4">
                            <div className="flex justify-between text-white">
                                <span>Total</span>
                                <span className="font-bold">{totalOdds}</span>
                            </div>

                            <div className="grid grid-cols-2 gap-3 mt-4">
                                <div className="relative">
                                    <input
                                        className="w-full h-10 rounded px-4 text-xs"
                                        type="text"
                                        value={betValue}
                                        onChange={handleBetValueChange}
                                    />
                                    <div className="flex items-center gap-3 absolute top-3 right-2">
                                        <ArrowRight size={16} className="text-secondary" />
                                        <span className="text-secondary text-xs font-bold">R$ {calculatedPayout}</span>
                                    </div>
                                </div>
                                <div>
                                    <button
                                        className="h-10 bg-secondary text-white rounded px-4 py-2 w-full"
                                    >
                                        Finalizar Aposta
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

BetDetailsMb.propTypes = {
    game: PropTypes.object.isRequired,
    onRemove: PropTypes.func.isRequired,
};