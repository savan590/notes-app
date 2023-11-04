import React, { createContext, useContext, useState } from "react";

const SelectedContext = createContext();

export const useSelected = () => {
  return useContext(SelectedContext);
};

export const SelectedProvider = ({ children }) => {
  const [isSelected, setIsSelected] = useState('');

  return (
    <SelectedContext.Provider value={{ isSelected, setIsSelected }}>
      {children}
    </SelectedContext.Provider>
  );
};




                
