const PokemonCard = ({ details }) => {
  // Componente que exibe os detalhes do Pokémon em um card.
  return (
    <div className="card">
      <img src={details.sprites.other.home.front_default} alt={details.name} /> {/* Exibe a imagem do Pokémon. */}
      <h2>{details.name}</h2> {/* Exibe o nome do Pokémon. */}
      <p>#{details.id}</p> {/* Exibe o ID do Pokémon. */}
    </div>
  );
};

export default PokemonCard;
