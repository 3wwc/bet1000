import PropTypes from 'prop-types';
import { ArrowRight, Trash } from '@phosphor-icons/react';
import { useGame } from '../../context/GameContext';

const BetDetails = ({ game, onRemove }) => (
    <div className="bg-white border border-zinc-300 rounded py-3 px-3">
        <div className="flex justify-between items-center mb-2">
            <div>
                <span className="block font-bold text-xs">{game.campeonato}</span>
                <span>{game.times.casa} vs {game.times.visitante}</span>
            </div>
            <Trash size={20} className='text-red-600 cursor-pointer' role="button" aria-label="Remove bet" onClick={() => onRemove(game.idJogo)} />
        </div>
        <div className='flex justify-between items-center'>
            <span className="capitalize font-bold">{game.oddSelecionada.tipo}</span>
            <span className="py-1 px-4 rounded text-white bg-secondary">{game.oddSelecionada.valor}</span>
        </div>
    </div>
);

export default function SidebarBet() {
    const { selectedGames, removeGame, deselectOdd, clearGames, betValue, setBetValue } = useGame();
    const totalOdds = selectedGames.reduce((total, game) => total * game.oddSelecionada.valor, 1).toFixed(2);

    const handleBetValueChange = (event) => {
        let value = event.target.value.replace(/\D/g, '');
        value = (value / 100).toFixed(2) + '';
        value = value.replace(".", ",");
        value = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
        setBetValue(value);
    };

    const calculatedPayout = (Number(betValue.replace(',', '.')) * totalOdds).toFixed(2).toString().replace(".", ",");

    const handleRemoveGame = (idJogo) => {
        removeGame(idJogo);
        deselectOdd(idJogo);
    };

    const handleAddValue = (addedValue) => {
        const currentValue = Number(betValue.replace(',', '.')) || 0;
        const newValue = (currentValue + addedValue).toFixed(2).replace('.', ',');
        setBetValue(newValue);
    };

    return (
        <div className='w-full h-screen overflow-y-scroll'>
            <div className="hidden lg:block w-full bg-zinc-100 rounded-2xl mb-4">
                <div className="w-full py-3 text-center border-b-2 border-secondary">
                    <p className="uppercase font-bold">Minhas Apostas</p>
                </div>

                <div className="py-3 px-4 grid gap-3">
                    {selectedGames.length > 0 ? (
                        selectedGames.map((game, index) => (
                            <BetDetails key={index} game={game} onRemove={handleRemoveGame} />
                        ))
                    ) : (
                        <p className="py-8 px-1 text-xs text-center">Sem seleções adicionadas</p>
                    )}
                </div>

                {selectedGames.length > 0 && (
                    <div className="py-3 px-4 grid gap-3">
                        <div className='flex justify-end'>
                            <button
                                className='text-white px-2 py-1 bg-red-500 flex rounded items-center gap-2'
                                onClick={clearGames}
                            >
                                <Trash size={20} />
                                <span className="text-xs">Limpar</span>
                            </button>
                        </div>
                        <div>
                            <div className='flex justify-between items-center'>
                                <span className='block text-xs font-bold'>
                                    {selectedGames.length > 1 ? 'Múltipla' : 'Simples'}
                                </span>
                                <span className='block text-xl text-secondary font-bold'>{totalOdds}</span>
                            </div>
                            <div className='flex justify-between items-center px-3 py-4 bg-zinc-200 rounded mt-2'>
                                <div>
                                    <input
                                        type="text"
                                        value={betValue}
                                        onChange={handleBetValueChange}
                                        className='w-32 h-8 border px-4'
                                        placeholder="R$ 0,00"
                                    />
                                </div>
                                <div>
                                    <ArrowRight size={20} className='text-secondary' />
                                </div>
                                <div>
                                    <span className="text-secondary font-bold">R$ {calculatedPayout}</span>
                                </div>
                            </div>
                            <div>
                                <ul className='flex justify-between gap-3 mt-2'>
                                    {[5, 10, 30, 50, 100].map(value => (
                                        <li key={value} className='w-full flex'>
                                            <button
                                                onClick={() => handleAddValue(value)}
                                                className='w-full px-2 py-3 bg-primary text-white rounded'
                                            >
                                                +{value}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div>
                            <button className='w-full text-white px-3 py-3 bg-secondary rounded uppercase text-xs'>Finalizar aposta</button>
                        </div>
                    </div>
                )}
            </div>

            <div className="w-full grid gap-3">
                <img src="https://via.placeholder.com/500x300" className="w-full" alt="" />
                <img src="https://via.placeholder.com/500x300" className="w-full" alt="" />
                <img src="https://via.placeholder.com/500x300" className="w-full" alt="" />
            </div>
        </div>
    );
}

BetDetails.propTypes = {
    game: PropTypes.object.isRequired,
    onRemove: PropTypes.func.isRequired,
};