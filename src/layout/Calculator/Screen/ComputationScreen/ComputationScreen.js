import React from 'react';

const scstyle = {
    height: '6vh',
    fontSize: '2.5rem',
    borderRadius: '20',
    display: 'flex',
    justifyContent:'flex-end',
    alignItems:'center'
        
};
const computationScreen = (props) => (

  
    <div style={scstyle}>
        {props.children}
    </div>
);

export default computationScreen;