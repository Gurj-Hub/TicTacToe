import styled from "styled-components";
import { useState, useContext } from "react";
import { PlayerContext } from "./PlayerContext";

const Header = () => {
  const { playerTurn, setPlayerTurn, counter, header, setHeader } =
    useContext(PlayerContext);

  if (header === "over") {
    return <Div> "The game is over!" </Div>;
  } else if (header !== "over" && playerTurn === true) {
    return <Div> "It is player 1's turn!" </Div>;
  } else if (header !== "over" && playerTurn === false) {
    return <Div> "It is player 2's turn!" </Div>;
  }
};

export default Header;

const Div = styled.div`
  height: 50px;
  width: 100 vw;
  font-size: 25px;
  font-weight: 700;
`;
