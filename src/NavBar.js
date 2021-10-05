import { NavLink } from 'react-router-dom';

import './NavBar.css';

const NavBar = ({ dogs }) => {
  const dogList = dogs.map(dog =>
    <NavLink key={dog.name} to={`/dogs/${dog.name.toLowerCase()}`} className='miniLink'>{dog.name}</NavLink>
  )

  return (
    <nav>
      <NavLink to='/' className='navLink'>Home</NavLink><br />
      <NavLink to='/dogs' className='navLink'>Dogs</NavLink><br />
      {dogList}<br />
      <NavLink to='/colors' className='navLink'>Colors</NavLink><br />
    </nav>
  )
}

export default NavBar;