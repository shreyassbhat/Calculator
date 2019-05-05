import React from 'react';

const rstyle = {

    height:'11vh',
    width: '100%',
    display: 'flex',
}
const keypadRow = (props) => (
    <div style={rstyle}>
        {props.children}
    </div>
);

export default keypadRow;