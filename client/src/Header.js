import styled from "styled-components";
import { useState, useContext } from "react";
import { PlayerContext } from "./PlayerContext";

const Header = () => {
  const { playerTurn, setPlayerTurn } = useContext(PlayerContext);
  const [header, setHeader] = useState(
    playerTurn === 1 ? "It is player 1's turn!" : "It is player 2's turn!"
  );
  return <Div> {header} </Div>;
};

export default Header;

const Div = styled.div`
  height: 50px;
  width: 100 vw;
  font-size: 25px;
  font-weight: 700;
`;
