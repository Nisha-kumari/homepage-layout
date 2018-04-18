import React, { Component } from 'react';
import Heading from '../../Components/Header/Header';
import MainContent from '../../Components/MainContent/MainContent';
import Footer from '../../Components/Footer/Footer';
import logo from '../../images/think.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading
            title="Welcome Jhon Doe"
            imageUrl = {logo}
        />
        <MainContent/>
          <Footer />
      </div>
    );
  }

}


export default App;
