import { useParams, Link } from 'react-router-dom';

import './DogDetails.css'

const DogDetails = ({ dogs }) => {
  const { name } = useParams();
  const dog = dogs.find(d => d.name.toLowerCase() === name.toLowerCase());
  if (!dog) return null

  const { name: dogName, age, src, facts } = dog;
  return (
    <div className='DogDetails'>
      <h2>My name is {dogName}</h2>
      <img src={src} alt={name} />
      <h2>I am {age} years old</h2>
      <ul>
        {facts.map((fact, i) => (
          <li key={i}>{fact}</li>
        ))}
      </ul>
      <Link exact to='/dogs'>Go back!</Link>
    </div>
  )
}

export default DogDetails;