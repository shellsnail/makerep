import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid, Segment, Container, Header } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Container text>
    <Header as='h2'>Header</Header>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
      Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
      ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
      consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
      In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
      link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
      vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
      enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla
      ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
      Curabitur ullamcorper ultricies nisi.
    </p>
      </Container>

      <NewGrid />
      </div>
    );
  }
}

class NewGrid extends Component {
  render() {
    return(
      <div>
      <Grid.Row>
      <Grid columns='equal'>
      <Grid.Column>
        <Segment>1</Segment>
      </Grid.Column>
      <Grid.Column width={8}>
        <Segment>2</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>3</Segment>
      </Grid.Column>
      </Grid>
      </Grid.Row>
      </div>
    );
  }
}

export default App;
