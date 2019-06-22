import React, { Component } from 'react'

class SingleSide extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="divider">
                <div className="section">
                    <h5>Section 1</h5>
                    <p>stuff</p>
                </div>
            </div>
        );
    }
}

export default SingleSide;