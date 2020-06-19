import React, { useContext } from 'react';
import { StoreRovers } from './store-rovers.js';
import { StoreRoverPage } from './store-rover-page.js';

const StoresContext = React.createContext();

export const StoresProvider = props => {

  const stores = {
    storeRovers: new StoreRovers(),
    storeRoverPage: new StoreRoverPage(),
  }

  return (
    <StoresContext.Provider value={stores}>
      {props.children}
    </StoresContext.Provider>
  )
};

export const useStore = () => {
  return useContext(StoresContext);
};
