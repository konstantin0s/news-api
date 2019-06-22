import React from 'react'

const SingleSide = ({ item }) => {

    return <div className="divider">
        <a href={item.url} target="_blank" className="lin">
            <div className="section">
                <h5>{item.source.name}</h5>
                <p>{item.title}</p>
            </div>
        </a>

    </div>

}

export default SingleSide;