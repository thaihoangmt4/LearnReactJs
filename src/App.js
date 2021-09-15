import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Navigation from './Component/Navigation/Navigation.js'
import Header from './Component/Header/Header.js';
import ContentSection from './Component/Content/ContentSection.js';
import Footer from './Component/Footer/Footer.js';

class App extends Component {
  render() {
    return (
      <div className="learnReact">
        <Navigation />
        <Header />
        <ContentSection title="For those about to rock..."
          location1="order-lg-2"
          location2="order-lg-1"
          linkImage="assets/img/01.jpg"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati." />
        <ContentSection title="For those about to rock..."
          location1="order-lg-1"
          location2="order-lg-2"
          linkImage="assets/img/02.jpg"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati." />
        <Footer/>
      </div>
    );
  }
}


export default App;
