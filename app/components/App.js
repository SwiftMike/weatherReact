var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Weather = require('./Weather');
var City = require('./City');
var Navbar = require('./Navbar');
var api = require('../utils/api');

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container-fluid'>
          <Navbar />

          <Switch>
            <Route exact path='/' component={Weather} />
            <Route path='/city' component={City}/>
            <Route render={function () {
              return <p>Not Found</p>
            }} />
          </Switch>
        </div>
      </Router>
    )
  }
}


module.exports = App;
