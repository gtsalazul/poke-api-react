import { createContext, useState, useContext } from 'react';

// Criando um contexto para armazenar o ID atual e a função de atualização.
const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [currentId, setCurrentId] = useState(1); // Estado inicial para o ID do Pokémon.

  // Provedor que disponibiliza `currentId` e `setCurrentId` para todos os componentes filhos.
  return (
    <PokemonContext.Provider value={{ currentId, setCurrentId }}>
      {children}
    </PokemonContext.Provider>
  );
};

// Hook customizado para acessar o contexto de Pokémon de forma mais simples.
export const usePokemon = () => useContext(PokemonContext);
