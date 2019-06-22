import React, { Component } from 'react';
import NewSingle from './NewSingle';
import axios from 'axios';

class News extends Component {
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
                return res.json();
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
            <NewSingle key={item.url} item={item} />
        ))
    }

    render() {
        return (
            <div className="row">
                {this.renderItems()}
            </div>
        );
    }
}

export default News;