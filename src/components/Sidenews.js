import React, { Component } from 'react';
import SingleSide from './SingleSide';
import axios from 'axios';

class Sidenews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidenews: []
        };
    }

    componentDidMount() {

    }

    renderItems = () => {
        return this.state.news.map((item) => (
            <SingleSide key={item.url} item={item} />
        ))
    }

    render() {
        return (
            <div className="container">
                <h2>{this.renderItems()}</h2>
            </div>
        );
    }
}

export default Sidenews;