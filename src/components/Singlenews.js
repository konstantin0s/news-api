import React, { Component } from 'react';
import axios from 'axios';
import SingleSide from './SingleSide';

class Sidenews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: []
        };
    }

    componentDidMount() {
        const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=${process.env.REACT_APP_API_KEY}`;
        axios.get(url)
            .then((res) => {
                return res.data;
            })
            .then(data => {
                this.setState({
                    news: data.articles
                })
            })
            .catch(err => console.log(err));
    }

    renderItems = () => {
        return this.state.news.map((item) => (
            <Sidenews key={item.url} item={item} />
        ))
    }

    render() {
        return (
            <div className="row">
                <h2>{this.renderItems()}</h2>
            </div>
        );
    }
}

export default Sidenews;