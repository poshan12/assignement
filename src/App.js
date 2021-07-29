import './App.css';
import { Switch,Route} from 'react-router-dom'
import Login from './Components/login'
import Register from './Components/register';
import Nav from './Components/nav';
function App() {
  return (
    <div className="container">
      <Nav/>
         <Switch>
               
                 <Route path='/login' exact component={Login}/>
                 <Route path='/reg' exact component={Register}/>

               </Switch>
    </div>
  );
}

export default App;
