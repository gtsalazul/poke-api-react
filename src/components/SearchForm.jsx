import { useState } from 'react';
import { usePokemon } from './PokemonContext';

const SearchForm = () => {
  // Estado local para armazenar a entrada de pesquisa.
  const [searchInput, setSearchInput] = useState('');
  const { setCurrentId } = usePokemon(); // Função para atualizar o ID do Pokémon a partir do contexto.

  // Função para lidar com a submissão do formulário.
  const handleSubmit = (e) => {
    e.preventDefault(); // Previne o comportamento padrão de recarregar a página ao enviar o formulário.
    if (searchInput) {
      setCurrentId(searchInput); // Atualiza o ID do Pokémon no contexto.
      setSearchInput(''); // Limpa o campo de entrada após a submissão.
    }
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <label htmlFor="search-input">Pokémon ID</label>
      <input
        type="text"
        value={searchInput} // Vincula o valor ao estado `searchInput`.
        onChange={(e) => setSearchInput(e.target.value)} // Atualiza o estado conforme o usuário digita.
        placeholder="Digite o ID"
        id="search-input"
      />
    </form>
  );
};

export default SearchForm;
