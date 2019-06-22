import React, { Component } from 'react';
import Singlenews from './Singlenews';

class Sidenews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: []
        };
    }

    componentDidMount() {
        const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=${process.env.REACT_APP_API_KEY}`
    }

    render() {
        return (
            <div className="sidenews">
                <h2>Sidenews component</h2>
            </div>
        );
    }
}

export default Sidenews;