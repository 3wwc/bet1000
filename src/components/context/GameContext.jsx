import PropTypes from 'prop-types';
import { createContext, useState, useContext } from 'react';

const GameContext = createContext();

export const useGame = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
    const [selectedGames, setSelectedGames] = useState([]);
    const [selectedOdds, setSelectedOdds] = useState({});
    const [betValue, setBetValue] = useState('');

    const formatBetValue = (value) => {
        let formattedValue = value.replace(/\D/g, '');
        formattedValue = (formattedValue / 100).toFixed(2) + '';
        formattedValue = formattedValue.replace(".", ",");
        formattedValue = formattedValue.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
        return formattedValue;
    };

    const addOrUpdateGame = (game) => {
        setSelectedGames(prevGames => {
            const gameIndex = prevGames.findIndex(g => g.idJogo === game.idJogo);
            if (gameIndex > -1) {
                const updatedGames = [...prevGames];
                updatedGames[gameIndex] = game;
                return updatedGames;
            } else {
                return [...prevGames, game];
            }
        });
    };

    const removeGame = (idJogo) => {
        setSelectedGames(prevGames => prevGames.filter(game => game.idJogo !== idJogo));
        deselectOdd(idJogo);
    };

    const deselectOdd = (idJogo) => {
        setSelectedOdds(prev => {
            const updatedOdds = { ...prev };
            delete updatedOdds[idJogo];
            return updatedOdds;
        });
    };

    const clearGames = () => {
        setSelectedGames([]);
        setSelectedOdds({});
    };

    return (
        <GameContext.Provider value={{ selectedGames, addOrUpdateGame, removeGame, deselectOdd, clearGames, betValue, setBetValue, formatBetValue, selectedOdds }}>
            {children}
        </GameContext.Provider>
    );
};

GameProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
