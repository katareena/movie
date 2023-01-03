import React, { createContext, useContext, useState } from 'react';

type AppProviderProps = {
  children: JSX.Element;
};

type ContextProps = {
  isDelete: boolean;
  setIsDelete: React.Dispatch<React.SetStateAction<boolean>>;
  isEdit: boolean;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
  isNotifyModalOpen: boolean;
  setIsNotifyModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMovieModalOpen: boolean;
  setIsMovieModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  // searchTerm: string,
  // setSearchTerm: React.Dispatch<React.SetStateAction<string>>,
  // loading: boolean,
  // tvseries: TvseriesItem[] | [],
  // backgrounds: Background[] | [],
  // resultTitle: string,
  // setResultTitle: React.Dispatch<React.SetStateAction<string>>,
  // isSearchActive: boolean,
  // setIsSearchActive: React.Dispatch<React.SetStateAction<boolean>>,
  // searchResult: TvseriesItem[] | [],
};

const AppContext = createContext<ContextProps | null>(null);

const AppProvider = ({ children }: AppProviderProps) => {
  const [isDelete, setIsDelete] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isNotifyModalOpen, setIsNotifyModalOpen] = useState<boolean>(false);
  const [isMovieModalOpen, setIsMovieModalOpen] = useState<boolean>(false);

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
