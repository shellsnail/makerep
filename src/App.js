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

  name = "Chairman Meow";
  breed = "Sphynx";

  getBreed = () => {
    return this.name + ' is a ' + this.breed;
    }

  render() {
    return (
      <div>
        {this.getBreed()}
      </div>
    );
  }
}

export default App;
