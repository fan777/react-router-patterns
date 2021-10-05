import {  Link } from 'react-router-dom';

import './DogDetails.css'

const DogDetails = ({ dog }) => {
  if (!dog) return null

  const { name, age, src, facts } = dog;
  return (
    <div className='DogDetails'>
      <h2>My name is {name}</h2>
      <img src={src} alt={name} />
      <h2>I am {age} years old</h2>
      <ul>
        {facts.map((fact, i) => (
          <li key={i}>{fact}</li>
        ))}
      </ul>
      <Link to='/dogs'>Go back!</Link>
    </div>
  )
}

export default DogDetails;