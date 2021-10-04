import { NavLink } from 'react-router-dom';

import './NavBar.css';

const NavBar = ({ dogs }) => {
  const dogList = dogs.map(dog =>
    <NavLink key={dog.name} to={`/dogs/${dog.name.toLowerCase()}`} className='miniLink'>{dog.name}</NavLink>
  )

  return (
    <nav>
      <NavLink exact to='/' className='navLink'>Home</NavLink><br />
      <NavLink exact to='/dogs' className='navLink'>Dogs</NavLink><br />
      {dogList}<br />
      <NavLink exact to='/colors' className='navLink'>Colors</NavLink><br />
    </nav>
  )
}

export default NavBar;