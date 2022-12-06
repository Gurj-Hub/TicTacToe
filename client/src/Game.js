import styled from "styled-components";
import { useState, useContext } from "react";
import { PlayerContext } from "./PlayerContext";
import { useEffect } from "react";

const Game = () => {
  const {
    setPlayerTurn,
    playerTurn,
    playerSymbol1,
    playerSymbol2,
    gameArray,
    counter,
    setCounter,
    setHeader,
    header,
  } = useContext(PlayerContext);

  const handleGameEndings = () => {
    if (
      (gameArray[0] === gameArray[1] && gameArray[1] === gameArray[2]) ||
      (gameArray[0] === gameArray[1] && gameArray[1] === gameArray[2]) ||
      (gameArray[0] === gameArray[1] && gameArray[1] === gameArray[2]) ||
      (gameArray[0] === gameArray[1] && gameArray[1] === gameArray[2]) ||
      (gameArray[0] === gameArray[1] && gameArray[1] === gameArray[2]) ||
      (gameArray[0] === gameArray[1] && gameArray[1] === gameArray[2]) ||
      (gameArray[0] === gameArray[1] && gameArray[1] === gameArray[2]) ||
      (gameArray[0] === gameArray[1] && gameArray[1] === gameArray[2])
    ) {
      setHeader(
        playerTurn === true ? "Winner is player 1 !" : "Winner is player 1 !"
      );
    }
  };

  const addSymbolAndChangePlayerTurn = (box) => {
    console.log(gameArray[box.id]);

    if (box.innerText === "") {
      box.innerText = playerTurn === true ? playerSymbol1 : playerSymbol2;
      gameArray[box.id] = playerTurn === true ? playerSymbol1 : playerSymbol2;
      setCounter(counter + 1);
      handleGameEndings();
      setPlayerTurn(!playerTurn);
    }
    if (counter + 1 === 9) {
      setHeader("over");
    }
  };

  return (
    <Container>
      {gameArray.map((element, index) => {
        return (
          <Box
            id={index}
            key={index}
            onClick={() => {
              addSymbolAndChangePlayerTurn(document.getElementById(index));
            }}
          ></Box>
        );
      })}
    </Container>
  );
};

export default Game;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 800px;
  width: 800px;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  height: calc(100% / 3);
  width: calc(100% / 3);
  border: 2px solid black;
  font-size: 60px;
`;
