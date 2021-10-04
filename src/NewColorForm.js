import { useState } from 'react';

import './NewColorForm.css';

const NewColorForm = () => {
  const initialState = {
    colorName: "",
    colorValue: ""
  }
  const [formData, setFormData] = useState(initialState);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(data => ({
      ...data,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // addBox({ ...formData });
    setFormData(initialState);
  }

  return (
    <div className='NewColorForm'>
      <h2>Color form!</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="colorName">Color name:</label>
        <input id="colorName" type="text" name="colorName" placeholder="Enter a name for the color" value={formData.colorName} onChange={handleChange} /> <br />
        <label htmlFor="colorValue">Color value:</label>
        <input id="colorValue" type="color" name="colorValue" value={formData.colorValue} onChange={handleChange} /><br />
        <button>Add this color</button>
      </form>
    </div>
  )
}

export default NewColorForm;