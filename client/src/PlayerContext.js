import { createContext, useState } from "react";

export const PlayerContext = createContext(null);

export const PlayerProvider = ({ children }) => {
  const [playerTurn, setPlayerTurn] = useState(1);

  return (
    <PlayerContext.Provider
      value={{
        playerTurn,
        setPlayerTurn,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};
