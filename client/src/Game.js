import styled from "styled-components";
import { useState } from "react";

const Game = () => {
  return (
    <Container>
      {" "}
      This is where the game/the grid/the symbols/game logic will be coded!{" "}
    </Container>
  );
};

export default Game;

const Container = styled.div`
  height: 500px;
  width: 800px;
  border: 2px solid green;
`;
