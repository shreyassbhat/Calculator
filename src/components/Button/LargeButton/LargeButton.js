import React from 'react';

import Button from '../Button';
const lstyle = {
    width:'50%',
    color: '#fff',
    backgroundColor:'#ff6347'

}

const largeButton = (props) => <Button style={lstyle} {...props} />;

export default largeButton;