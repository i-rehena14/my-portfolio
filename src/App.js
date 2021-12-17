import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './PortfolioContainer/Home/Home';
import Blogs from './PortfolioContainer/Blogs/Blogs';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/blogs'>
            <Blogs></Blogs>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
