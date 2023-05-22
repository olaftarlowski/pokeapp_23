import React, { useContext, useState } from 'react';
import { PokeListContext } from '../../store/AppContext';
import imagePlaceholder from '../../assets/image_placeholder.png';
import { PokeListSingle } from '../../utils/types/pokeList';
import { SideMenuItemWrapper } from '../../style/styled-components';

const PlaceholderComponent: React.FC = () => (
  <SideMenuItemWrapper>
    <img src={imagePlaceholder} alt="placeholder similar to question mark" />
  </SideMenuItemWrapper>
);

const SideMenuPlayer: React.FC = () => {
  const { selectedRecords, removeElement } = useContext(PokeListContext);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>, index: number, item:any) => {
    console.log(item.id);

    event.dataTransfer.setData('text/plain', item.id);
    setIsDragging(true);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const droppedIndex = Number(event.dataTransfer.getData('text/plain'));
    console.log(droppedIndex)
    if (removeElement) {
      removeElement(droppedIndex);
    }
    setIsDragging(false);
  };

  const numPlaceholders: number = 3 - selectedRecords.length;

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {selectedRecords.map((item: PokeListSingle, index: number) => (
        <SideMenuItemWrapper
          key={item.id}
          draggable={!isDragging}
          onDragStart={event => handleDragStart(event, index, item)}
        >
          <img src={item.sprite} alt={item.name} />
        </SideMenuItemWrapper>
      ))}
      {[...Array(numPlaceholders)].map((_, index) => (
        <PlaceholderComponent key={index} />
      ))}
      <SideMenuItemWrapper
        id='remover'
        color="red"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      ></SideMenuItemWrapper>
    </div>
  );
};

export default SideMenuPlayer;
