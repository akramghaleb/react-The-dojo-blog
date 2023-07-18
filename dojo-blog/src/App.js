
import Navbar from './Navbar';
import HomePage from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateBlog from './Createblog';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact  path="/">
              <HomePage />
            </Route>
            <Route  path="/create">
              <CreateBlog />
            </Route>
            </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
