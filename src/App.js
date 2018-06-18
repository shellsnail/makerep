import React from 'react';
import DisplayCategories from './categories.js';
import FeedbackForm from './forms.js';
import {DisplayProductsLargeView, DisplayProductsMediumView} from './products.js';
import './App.css';
import {Grid, Image} from 'semantic-ui-react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <Grid padded>
          <Grid.Column width={5}>
            <
              DisplayCategories
            />
            <
              FeedbackForm
            />
          </Grid.Column>
          <Grid.Column width={7}>
            <
              DisplayProductsLargeView
            />
          </Grid.Column>
          <Grid.Column width={4}>
            <
              DisplayProductsMediumView
            />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;
