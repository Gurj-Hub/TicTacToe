import { createContext, useState } from "react";

export const PlayerContext = createContext(null);

export const PlayerProvider = ({ children }) => {
  const [playerTurn, setPlayerTurn] = useState(true);
  const playerSymbol1 = "X";
  const playerSymbol2 = "O";
  const gameArray = [1, 1, 1, 1, 1, 1, 1, 1, 1];
  const [counter, setCounter] = useState(0);

  return (
    <PlayerContext.Provider
      value={{
        playerTurn,
        setPlayerTurn,
        playerSymbol1,
        playerSymbol2,
        gameArray,
        counter,
        setCounter,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};
