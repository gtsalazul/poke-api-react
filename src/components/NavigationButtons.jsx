import { usePokemon } from './PokemonContext';

const NavigationButtons = () => {
  const { currentId, setCurrentId } = usePokemon();

  return (
    <div className="actions">
      <button
        className="btn"
        onClick={() => setCurrentId(currentId > 1 ? currentId - 1 : 1)}
      >
        Previous
      </button>
      <button
        className="btn"
        onClick={() => setCurrentId(currentId + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default NavigationButtons;
