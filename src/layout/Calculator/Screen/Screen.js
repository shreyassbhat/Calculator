import React from 'react';

import ResultScreen from './ResultScreen/ResultScreen';
import ComputationScreen from './ComputationScreen/ComputationScreen';

const scstyle = {
    height: '25vh',
    width: '88.2%',
    padding: '0 2rem',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    
    color: '#fff',
    backgroundColor:'#790604'

}

const screen = (props) => (
    <section style={scstyle}>
        <ResultScreen>{props.result}</ResultScreen>
        <ComputationScreen>{props.equation}</ComputationScreen>
    </section>
);

export default screen;