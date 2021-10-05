import { useParams } from 'react-router-dom';
import DogDetails from './DogDetails';

const FilteredDogDetails = ({ dogs }) => {
  const { name } = useParams();

  if (name) {
    const dog = dogs.find(d => d.name.toLowerCase() === name.toLowerCase());
    return <DogDetails dog={dog} />
  }
  return null;
}

export default FilteredDogDetails;