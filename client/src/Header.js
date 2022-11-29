import styled from "styled-components";
import { useState, useContext } from "react";
import { PlayerContext } from "./PlayerContext";

const Header = () => {
  const { playerTurn, setPlayerTurn } = useContext(PlayerContext);
  const [header, setHeader] = useState(
    playerTurn === true ? "It is player 1's turn!" : "It is player 2's turn!"
  );

  //   if (header === "start") {
  //     return <Div> The game will start shortly </Div>
  //   }
  return <Div> {header} </Div>;
};

export default Header;

const Div = styled.div`
  height: 50px;
  width: 100 vw;
  font-size: 25px;
  font-weight: 700;
`;
