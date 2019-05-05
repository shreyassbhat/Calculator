import React from 'react';

const bstyle = {
  width: '25%',
  height: '100%',
  fontSize: '3rem',
  fontFamily: 'inherit',
  backgroundColor: '#fff',
  border: '1px solid transparent',
  outline: 'none',
    
  display: 'flex',
  justifyContent: 'center',
  alignItems:'center',
    
  transition: 'all'

}
const button = (props) => {
  const classes = ['btn'];

  if (typeof props !== 'undefined'
        && typeof props.type !== 'undefined')
      classes.push('btn--' + props.type);

  return (
        <button style={bstyle} onClick={props.onButtonPress}>
            {props.children}
        </button>
    );
};

export default button;
