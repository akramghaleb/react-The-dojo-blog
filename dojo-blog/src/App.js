
import Navbar from './Navbar';
import HomePage from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateBlog from './Createblog';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

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
            <Route  path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route  path="*">
              <NotFound />
            </Route>
            </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
