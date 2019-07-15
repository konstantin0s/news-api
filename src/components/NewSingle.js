import React from 'react'

const NewSingle = ({ item }) => {
    return <div className="col-md-12 col-lg-12">
        <div className="card">
            <div className="card-image col-xs-auto col-md-auto col-lg-8">
                <img src={item.urlToImage} alt={item.title} />
                <span className="card-title">
                    {item.source.name}
                </span>
            </div>
            <div className="card-content">
                <p>{item.title}</p>
            </div>
            <div className="card-action">
                <a href={item.url} target="_blank" className="link">Full Article</a>
            </div>
        </div>
    </div>
}


export default NewSingle;