import { Link } from 'react-router-dom';

import './Color.css'

const Color = ({ colorName, colorValue }) => {
  return (
    <div className='Color' style={{ backgroundColor: colorValue }}>
      <h2>{colorName}</h2>
      <Link to='/colors'>Go back!</Link>
    </div>
  )
}

export default Color;