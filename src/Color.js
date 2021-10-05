import { useParams, Link } from 'react-router-dom';

import './Color.css'

const Color = () => {
  const { color } = useParams();
  return (
    <div className='Color' style={{ backgroundColor: color }}>
      <h2>{color}</h2>
      <Link to={'/colors'}>Go back!</Link>
    </div>
  )
}

export default Color;