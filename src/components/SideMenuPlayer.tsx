import React, { useContext, useState } from 'react';
import { PokeListContext } from '../store/AppContext';
import imagePlaceholder from '../assets/image_placeholder.png';

type Pokemon = {
  id: number;
  name: string;
  sprite: string;
};

const PlaceholderComponent: React.FC = () => (
  <div style={{ width: '100px', height: '100px', padding: 5,  border: '2px solid green' }} ><img src={imagePlaceholder} alt="" /> </div>
);

const SideMenuPlayer: React.FC = () => {
  const { selectedRecords } = useContext(PokeListContext);

  console.log(selectedRecords);

  const numPlaceholders: number = 3 - selectedRecords.length;

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {selectedRecords.map((item) => (
          <div key={item.id} style={{ width: '100px', height: '100px', border: '1px solid black',margin: "12px 0" }}>
            <img src={item.sprite} alt={item.name} />
          </div>
        ))}
        {[...Array(numPlaceholders)].map((_, index) => (
          <div key={index} style={{ width: '100px', height: '100px', border: '1px solid black',margin: "12px 0" }}>
            <PlaceholderComponent />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideMenuPlayer;