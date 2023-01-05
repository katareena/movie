import React, { createContext, useContext, useState } from 'react';

type AppProviderProps = {
  children: JSX.Element;
};

type ContextProps = {
  activeMovie: undefined | number;
  setActiveMovie: React.Dispatch<React.SetStateAction<undefined | number>>;
  isDelete: boolean;
  setIsDelete: React.Dispatch<React.SetStateAction<boolean>>;
  isEdit: boolean;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
  isNotifyModalOpen: boolean;
  setIsNotifyModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMovieModalOpen: boolean;
  setIsMovieModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isCardOpen: boolean;
  setIsCardOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const AppContext = createContext<ContextProps | null>(null);

const AppProvider = ({ children }: AppProviderProps) => {
  const [activeMovie, setActiveMovie] = useState<undefined | number>(undefined);
  const [isDelete, setIsDelete] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isNotifyModalOpen, setIsNotifyModalOpen] = useState<boolean>(false);
  const [isMovieModalOpen, setIsMovieModalOpen] = useState<boolean>(false);
  const [isCardOpen, setIsCardOpen] = useState<boolean>(false);

  return (
    <AppContext.Provider
      value={{
        isDelete,
        setIsDelete,
        isEdit,
        setIsEdit,
        isNotifyModalOpen,
        setIsNotifyModalOpen,
        isMovieModalOpen,
        setIsMovieModalOpen,
        activeMovie,
        setActiveMovie,
        isCardOpen,
        setIsCardOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(AppContext);
  if (context === null) {
    throw new Error('AppContext must be inside a Provider with a value');
  }
  return context;
};

export { AppContext, AppProvider };
