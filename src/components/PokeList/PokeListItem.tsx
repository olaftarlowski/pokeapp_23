import { Link } from "react-router-dom";





import styled from "styled-components";
import { keyframes } from "styled-components";

const moveImage = keyframes`
  from {
    transform: translateX(0px);
  }
  10% {
   transform: translateX(5px);
 }
 40% {
   transform: translateX(-5px);
 }
 60% {
   transform: translateX(5px);
 }
 90% {
   transform: translateX(-5px);
 }
 to {
   transform: translateX(0px);
 }
`;
const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #fff;
  width: 150px;
  margin: 10px;
  border: 2px solid #f2f2f2;
  transition: 0.1s ease-in-out;
  border-radius: 5px;

  .controls-area {
    visibility: hidden;
    opacity: 0;
    transition: 0.2s ease-in-out;
  }

  &:hover {
    border: 2px solid #79b9e1;
    .controls-area {
      opacity: 1;
      visibility: visible;
    }
  }

  &:hover img {
    animation: ${moveImage} 1s;
  }
  @media (pointer: none), (pointer: coarse) {
    .controls-area {
      opacity: 1;
      visibility: visible;
    }
    button.control-item {
      background-color: rgba(64, 150, 255, 0.8);
    }
    a.control-item {
      background-color: rgba(59, 184, 67, 0.5);
    }
  }

  @media (max-width: 768px) {
    width: 130px;
  }
`;
const FigureItem = styled.figure`
  background: #f2f2f2;
  border-radius: 5px;
  width: 100%;
  margin: 0;

  img {
    width: 100%;
    height: auto;
  }
`;
const TextboxInfo = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding-left: 12px;
  p {
    font-family: "Montserrat", sans-serif;
    margin: 0.5em 0;
    font-size: 18px;
    color: #919191;
    padding-top: 2px;
  }
  h3 {
    font-family: "Smooch Sans", sans-serif;
    margin: 0.5em 0;
    color: #313131;
    font-size: 22px;
    text-transform: capitalize;
    /* @media (max-width: 768px) {
    font-size: 18px;
  } */
  }
`;
const ControlsArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.1);

  .control-item {
    font-family: "Montserrat", sans-serif;
    height: 42px;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: 2px;
    box-sizing: border-box;
    color: #000;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    font-size: 18px;
    text-decoration: none;
    &:hover {
      color: #fff;
    }
  }

  button.control-item {
    &:hover {
      background-color: rgba(64, 150, 255, 0.8);
    }
  }
  a.control-item {
    &:hover {
      background-color: rgba(59, 184, 67, 0.5);
    }
  }
`;

interface PokeListItem {
    id: number
    name: string
    sprite: string
}

const PokeListItem = ({ id, name, sprite }: PokeListItem) => {
    return (
        <ItemWrapper>
            <FigureItem>
                <img src={sprite} alt={`Pokemon ${name}`} />
            </FigureItem>
            <TextboxInfo>
                <p>#{id}</p>
                <h3>{name}</h3>
            </TextboxInfo>
            <ControlsArea className="controls-area">
                <button className="control-item">Add</button>
                <Link className="control-item" to={`/${name}`}>
                    More
                </Link>
            </ControlsArea>
        </ItemWrapper>
    );
};

export default PokeListItem;
