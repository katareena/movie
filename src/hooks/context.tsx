import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react';
import { movies as mocksMovie } from '../mocks/movie';
import { MovieType } from '../types/movie-type';

type AppProviderProps = {
  children: JSX.Element;
};

type ContextProps = {
  activeId: undefined | number;
  setActiveId: React.Dispatch<React.SetStateAction<undefined | number>>;
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
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  movies: [] | MovieType[];
  setMovies: React.Dispatch<React.SetStateAction<[] | MovieType[]>>;
  activeMovie: null | MovieType;
  setActiveMovie: React.Dispatch<React.SetStateAction<null | MovieType>>;
};

const AppContext = createContext<ContextProps | null>(null);

const AppProvider = ({ children }: AppProviderProps) => {
  const [activeId, setActiveId] = useState<undefined | number>(undefined);
  const [isDelete, setIsDelete] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isNotifyModalOpen, setIsNotifyModalOpen] = useState<boolean>(false);
  const [isMovieModalOpen, setIsMovieModalOpen] = useState<boolean>(false);
  const [isCardOpen, setIsCardOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [movies, setMovies] = useState<[] | MovieType[]>([]);
  const [activeMovie, setActiveMovie] = useState<null | MovieType>(null);

  const fetchData = useCallback(() => {
    setIsLoading(true);

    setTimeout(() => {
      try {
        setMovies(mocksMovie);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    }, 2000);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

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
        activeId,
        setActiveId,
        isCardOpen,
        setIsCardOpen,
        isLoading,
        setIsLoading,
        movies,
        setMovies,
        activeMovie,
        setActiveMovie,
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
