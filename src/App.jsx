import { useState, useEffect } from 'react';
import { PokemonProvider, usePokemon } from '../src/components/PokemonContext';
import PokemonCard from '../src/components/PokemonCard';
import SearchForm from '../src/components/SearchForm';
import NavigationButtons from '../src/components/NavigationButtons';

const App = () => {
  // Estados para armazenar detalhes do Pokémon, estado de carregamento e possíveis erros.
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Recupera o ID do Pokémon atual a partir do contexto.
  const { currentId } = usePokemon();

  // useEffect para carregar os dados do Pokémon sempre que `currentId` mudar.
  useEffect(() => {
    const loadPokemonData = async (id) => {
      setLoading(true); // Indica que a requisição está em andamento.
      setError(''); // Limpa erros anteriores.
      try {
        // Faz uma requisição à API para obter os dados do Pokémon.
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!response.ok) throw new Error('Pokémon não encontrado'); // Trata erros de resposta.
        const data = await response.json(); // Converte a resposta para JSON.
        setPokemonDetails(data); // Armazena os detalhes do Pokémon no estado.
      } catch (error) {
        // Armazena a mensagem de erro e limpa os detalhes do Pokémon.
        setError(error.message);
        setPokemonDetails(null);
      } finally {
        // Finaliza o estado de carregamento, independentemente do sucesso ou falha.
        setLoading(false);
      }
    };

    loadPokemonData(currentId); // Chama a função para carregar os dados do Pokémon.
  }, [currentId]); // `useEffect` é executado sempre que `currentId` mudar.

  return (
    <div className="container">
      <SearchForm /> {/* Formulário para buscar Pokémon por ID. */}
      {loading && <p>Carregando...</p>} {/* Exibe uma mensagem enquanto os dados estão carregando. */}
      {error && <p className="error">{error}</p>} {/* Exibe a mensagem de erro, se houver. */}
      {pokemonDetails && !loading && <PokemonCard details={pokemonDetails} />} {/* Exibe os detalhes do Pokémon se disponíveis. */}
      <NavigationButtons /> {/* Botões para navegar entre os IDs dos Pokémon. */}
    </div>
  );
};

// O `App` é envolvido pelo `PokemonProvider` para fornecer o contexto a todos os componentes filhos.
export default () => (
  <PokemonProvider>
    <App />
  </PokemonProvider>
);
