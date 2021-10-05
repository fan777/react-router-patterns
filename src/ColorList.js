import { Link } from 'react-router-dom';
import './ColorList.css';

const ColorList = ({ colors }) => {
  return (
    <div className='ColorList'>
      <h2>Welcome to the color factory</h2>
      <Link to={'/colors/new'}>Add a color</Link>
      <p>Please select a color</p>
      <ul>{Object.keys(colors).map(colorName => (
        <li key={colorName}>
          <Link to={`/colors/${colorName}`}>{colorName}</Link>
        </li>
      ))}</ul>
    </div>
  )
}

export default ColorList;