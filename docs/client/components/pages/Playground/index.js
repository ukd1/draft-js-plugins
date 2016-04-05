import React, { Component } from 'react';
import Container from '../../shared/Container';
import Heading from '../../shared/Heading';
import RainforestEditor from './SimpleHashtagEditor';
import NavBar from '../../shared/NavBar';
import Separator from '../../shared/Separator';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Separator />
        <Container>
          <Heading level={ 2 }>Development Playground</Heading>
        </Container>
        <Container>
          <RainforestEditor />
        </Container>
      </div>

    );
  }
}
