import { Link } from 'react-router-dom';

import './DogList.css';

const DogList = ({ dogs }) => {
  const dogList = dogs.map(dog => {
    const { name, src } = dog;
    return (
      <div className='row' key={dog.name}>
        <img src={src} alt={name} className='dogThumbnail' />
        <Link dog={dog} to={`/dogs/${name.toLowerCase()}`}>{name}</Link>
      </div>
    )
  })

  return (
    <div className='DogList'>
      <h2>Look at our pups!</h2>
      {dogList}
    </div>
  )
}



export default DogList;