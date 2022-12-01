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
  } = useContext(PlayerContext);

  const HandleChangePlayerTurn = () => {
    setPlayerTurn(!playerTurn);
    setCounter(counter + 1);
  };

  const HandleAddSymbol = (box) => {
    box.innerText = playerTurn === true ? playerSymbol1 : playerSymbol2;
  };

  console.log(counter);
  return (
    <Container>
      {gameArray.map((element, index) => {
        return (
          <Box
            id={index}
            key={index}
            onClick={() => {
              HandleAddSymbol(document.getElementById(index));
              HandleChangePlayerTurn();
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
