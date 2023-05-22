import React, { useContext } from 'react';
import { PokeListContext } from '../../store/AppContext';
import imagePlaceholder from '../../assets/image_placeholder.png';
import { PokeListSingle } from '../../utils/types/pokeList';
import { SideMenuItemWrapper } from '../../style/styled-components';


const PlaceholderComponent: React.FC = () => (
  <SideMenuItemWrapper  ><img src={imagePlaceholder} alt="placeholder similar to question mark" /></SideMenuItemWrapper>
);

const SideMenuPlayer: React.FC = () => {
  const { selectedRecords } = useContext(PokeListContext);

  console.log(selectedRecords);

  const numPlaceholders: number = 3 - selectedRecords.length;

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {selectedRecords.map((item: PokeListSingle) => (
        <SideMenuItemWrapper key={item.id} >
          <img src={item.sprite} alt={item.name} />
        </SideMenuItemWrapper>
      ))}
      {[...Array(numPlaceholders)].map((_, index) => (
        <PlaceholderComponent key={index} />
      ))}
    </div>
  );
};

export default SideMenuPlayer;