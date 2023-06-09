import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";
import ContentLoader from "react-content-loader";

import styled from "styled-components";
import { keyframes } from "styled-components";
import { PokeListContext } from "../../store/AppContext";
import { SingleRecord } from '../../utils/types/pokeList'
import { Snackbar } from "../Snackbar";

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
  background: ${props => props.theme.colors.background};
  width: 150px;
  margin: 10px;
  border: 2px solid ${props => props.theme.colors.secondary};;
  transition: 0.1s ease-in-out;
  border-radius: 5px;

  .controls-area {
    visibility: hidden;
    opacity: 0;
    transition: 0.2s ease-in-out;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.1);
  }

  &:hover {
    border: 2px solid #79b9e1;
    .controls-area {
      opacity: 1;
      visibility: visible;
    }
  }

  &:hover .card-img {
    animation: ${moveImage} 1s;
  }

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
    color: ${props => props.theme.colors.text};
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
      background-color: #4096ffcc;
    }
  }
  a.control-item {
    &:hover {
      background-color: #3bb84380;
    }
  }

  @media (pointer: none), (pointer: coarse) {
    .controls-area {
      opacity: 1;
      visibility: visible;
    }
    button.control-item {
      background-color: #4096ffcc;
      color: #fff;
    }
    a.control-item {
      background-color: #3bb84380;
      color: #fff;
    }
  }

  @media (max-width: 768px) {
    width: 140px;
  }
`;
const FigureItem = styled.figure`
  background: ${props => props.theme.colors.primary};
  border-radius: 5px;
  width: 100%;
  margin: 0;
  /* width:146px; */
  height: 146px;

  .card-img {
    width: 100%;
    height: auto;
  }
`;
const TextboxInfo = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding-left: 12px;
  .card-text {
    font-family: "Montserrat", sans-serif;
    margin: 0.5em 0;
    font-size: 18px;
    color: ${props => props.theme.colors.background === "#000" ? props.theme.colors.text : "#919191"};
    padding-top: 2px;
  }
  .card-headline {
    font-family: "Smooch Sans", sans-serif;
    margin: 0.5em 0;
    color: ${props => props.theme.colors.background === "#000" ? props.theme.colors.text : "#313131"};
    font-size: 22px;
    text-transform: capitalize;
    /* @media (max-width: 768px) {
    font-size: 18px;
  } */
  }
`;

const PokeListItem = React.memo(({ id, pokemon_species: { name }, sprite, entry_number, currentPageAt }: SingleRecord) => {
  const [isSnackbarActive, setIsSnackbarActive] = useState<boolean>(false);
  const { addRecord, selectedRecords, handlePageNumberUserWasAt } = useContext(PokeListContext);
  const recordData = { id, entry_number, sprite, pokemon_species: { name } }

  const handleAddRecord = (recordData: SingleRecord) => {
    if (addRecord) {
      const isDuplicate = selectedRecords.some(item => item.id === recordData.id);
      if (!isDuplicate) {
        if (selectedRecords.length === 3) {
          setIsSnackbarActive(true);
        } else {
          addRecord(recordData);
        }
      } else {
        setIsSnackbarActive(true);
      }
    }
  };

  let snackbarMessage = '';
  if (selectedRecords.length === 3) {
    snackbarMessage = 'Team is full!';
  } else {
    snackbarMessage = 'Already in your team!';
  }

  const setCurrentPageAt = (page: number | undefined) => {
    if (page) {
      handlePageNumberUserWasAt(page)
    }
  }

  return (<>
    <Snackbar isSnackbarActive={isSnackbarActive}
      setIsSnackbarActive={setIsSnackbarActive}
      message={snackbarMessage} />
    <ItemWrapper>
      <FigureItem>
        <LazyLoad height={50}>
          {sprite ? (
            <img className="card-img" src={sprite} alt={`Pokemon ${name}`} />
          ) : (
            <ContentLoader>
              <rect x="0" y="0" rx="5" ry="5" width="146" height="146" />
            </ContentLoader>
          )}
        </LazyLoad>
      </FigureItem>
      <TextboxInfo>
        <p className="card-text">#{entry_number}</p>
        <h3 className="card-headline">{name}</h3>
      </TextboxInfo>
      <div className="controls-area">
        <button className="control-item" onClick={() => handleAddRecord(recordData)}>Add</button>
        <Link className="control-item" to={`${name}`} onClick={() => setCurrentPageAt(currentPageAt)}>
          More
        </Link>
      </div>
    </ItemWrapper>
  </>
  );
});

export default PokeListItem;
