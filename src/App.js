import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// Views
import Home from './views/Home';
import Show from './views/Show';
import Browse from './views/Browse';

// Components
import Nav from './components/Nav';

import './styles/styles.scss';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <div>
            <Nav/>
            <Switch>
              <Route exact path='/' render={props => <Home {...props} /> } />
              <Route exact path='/browse' component={Browse} />
              <Route exact path='/show/:id' render={props => <Show {...props} /> } />
            </Switch>
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
