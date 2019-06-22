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
        const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=${process.env.REACT_APP_API_KEY}`;
        axios.get(url)
            .then((res) => {
                this.setState({
                    sidenews: res.data.articles
                })
            })
            .catch(err => console.log(err));

    }

    renderItems = () => {
        return this.state.sidenews.map((item) => (
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