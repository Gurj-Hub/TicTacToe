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

  //   [1, 1, 1, 1, 1, 1, 1, 1, 1]

  const winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
  ];

  winCondition.forEach((condition) => {
    // console.log(condition);
    condition.map((index) => {
      //   console.log(index);
      if (gameArray.indexOf(playerSymbol1) === index) {
        console.log("yes, it happened");
      }
    });
  });

  const handleGameEndings = () => {
    // if (
    //   winCondition.forEach((condition) => {
    //     condition.every((index) => {
    //       return gameArray.indexOf(playerSymbol1) === index;
    //     });
    //   })
    // ) {
    //   console.log("its working!");
    // } else if (counter === 9) {
    //   setHeader("over");
    // }
  };

  const AddSymbolAndChangePlayerTurn = (box) => {
    // console.log(box.innerText);
    // console.log(gameArray);
    if (box.innerText === "") {
      box.innerText = playerTurn === true ? playerSymbol1 : playerSymbol2;
      setCounter(counter + 1);
      handleGameEndings();
      setPlayerTurn(!playerTurn);

      if (counter + 1 === 9) {
        setHeader("over");
      }
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
              AddSymbolAndChangePlayerTurn(document.getElementById(index));
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
