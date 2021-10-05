import { Route, Switch, Redirect } from 'react-router-dom';
import { useState } from 'react';

import DogList from './DogList';
import FilteredDogDetails from './FilteredDogDetails';

import ColorList from './ColorList';
import NewColorForm from './NewColorForm';
import Color from './Color';

const Routes = ({ dogs }) => {
  const initialColors = {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF"
  }
  const [colors, setColors] = useState(initialColors);
  const addColor = newColor => {
    setColors(prevColors => ({ ...prevColors, ...newColor }));
  }
  const showColor = props => {
    const { color } = props.match.params;
    const colorValue = colors[color];
    return <Color {...props} colorValue={colorValue} colorName={color} />
  }

  return (
    <Switch>
      <Route exact path='/dogs'>
        <DogList dogs={dogs} />
      </Route>
      <Route path='/dogs/:name'>
        <FilteredDogDetails dogs={dogs} />
      </Route>
      <Route exact path='/colors'>
        <ColorList colors={colors} />
      </Route>
      <Route exact path='/colors/new'>
        <NewColorForm addColor={addColor} />
      </Route>
      <Route path='/colors/:color' render={showColor}>
      </Route>
      <Redirect to='/' />
    </Switch>
  )
}

export default Routes;