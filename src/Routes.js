import { Route, Switch, Redirect } from 'react-router-dom';
import DogList from './DogList';
import FilteredDogDetails from './FilteredDogDetails';
import ColorList from './ColorList';
import NewColorForm from './NewColorForm';
import Color from './Color';

const Routes = ({ dogs }) => {
  return (
    <Switch>
      <Route exact path='/dogs'>
        <DogList dogs={dogs} />
      </Route>
      <Route path='/dogs/:name'>
        <FilteredDogDetails dogs={dogs} />
      </Route>
      <Route exact path='/colors'>
        <ColorList />
      </Route>
      <Route exact path='/colors/new'>
        <NewColorForm />
      </Route>
      <Route exact path='/colors/:color'>
        <Color />
      </Route>
      <Redirect to='/' />
    </Switch>
  )
}

export default Routes;