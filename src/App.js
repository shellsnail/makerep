import React from 'react';
import DisplayCategories from './displaycategories.js';
import FeedbackForm from './feedbackform.js';
import DisplayProductsLargeView from './displayproductslargeview.js';
import DisplayProductsMediumView from './displayproductsmediumview.js';
import SearchExampleCategory from './searchbar.js';
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
            <Grid.Row>
              <
                DisplayCategories
              />
            </Grid.Row>
            <Grid.Row>
              <
               SearchExampleCategory
              />
            </Grid.Row>
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
