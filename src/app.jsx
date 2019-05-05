import React from 'react';
import Calculator from './layout/Calculator/Calculator';


const appstyle = {
  height:'100vh',
    width: '100%',
    backgroundImage: "url(" +"../src/download.jpg" + ")",
    backgroundSize: 'cover',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

export default class App extends React.Component {
  render() {
    return (
    
    <div style={appstyle}>
      
      <Calculator />
    </div>);
  }
}
