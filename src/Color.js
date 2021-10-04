import { useParams, Link } from 'react-router-dom';

const Color = () => {
  const { color } = useParams();
  return (
    <div>
      <h2>{color}</h2>
      <Link exact to={'/colors'}>Go back!</Link>
    </div>
  )
}

export default Color;