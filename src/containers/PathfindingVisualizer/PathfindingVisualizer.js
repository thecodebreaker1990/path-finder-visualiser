import React, { Component } from 'react';
import Node from '../../components/Node/Node';

import classes from './PathfindingVisualizer.module.css';

class PathfindingVisualizer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: []
        };
    }

    componentDidMount() {
        const nodes = [];
        for(let row = 0; row < 30; row++) {
            const currentRow = [];
            for(let col = 0; col < 70; col++) {
                currentRow.push([]);
            }
            nodes.push(currentRow);
        }
        this.setState({ nodes });
    }

    render() {
        const { nodes } = this.state;
        const grid = nodes.map((currentRow, idx) => <div className={classes.Grid} key={idx}>
            {
                currentRow.map((node, idx) => <Node key={idx}></Node>)
            }
        </div>);
        
        return <div className={classes.PathfindingVisualizer}>
            { grid }
        </div>;
    }
}

export default PathfindingVisualizer;