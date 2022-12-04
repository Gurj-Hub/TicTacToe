import { createContext, useState } from "react";

export const PlayerContext = createContext(null);

export const PlayerProvider = ({ children }) => {
  const [playerTurn, setPlayerTurn] = useState(true);
  const playerSymbol1 = "X";
  const playerSymbol2 = "O";
  const gameArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [counter, setCounter] = useState(0);
  const [header, setHeader] = useState("Player 1");

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
        header,
        setHeader,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};
