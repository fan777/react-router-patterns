import { useState } from 'react';
import { Link } from 'react-router-dom';

const ColorList = () => {
  const [colors, setColors] = useState();
  const addColor = (newColor) => {
    setColors(colors => [...colors, newColor])
  }

  return (
    <div>
      <h2>Welcome to the color factory</h2>
      <Link to={'/colors/new'}>Add a color</Link>
      <p>Please select a color</p>

    </div>
  )
}

export default ColorList;