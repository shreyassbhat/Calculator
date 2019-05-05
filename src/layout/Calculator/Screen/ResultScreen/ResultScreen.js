import React from 'react';

const restyle = {
    height:'19vh',
    fontSize: '8rem',
    fontWeight: '600',
    borderRadius: '20',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
}

const resultScreen = (props) => (
    <div style={restyle}>
        {props.children}
    </div>
);

export default resultScreen;