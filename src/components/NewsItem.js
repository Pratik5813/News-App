import React, { Component } from 'react'

const NewsItem = (props)=> {
    let { title, description, imageUrl, newsUrl, author, date,source } = props;
    return (
      <div className="my-3">
        <div className="card">
          <div className="d-flex position-absolute end-0" style={{justifyContent: 'flex-end'}}>
            <span className="badge rounded-pill bg-danger">
              {source}
            </span>
          </div>
          <img src={imageUrl ? imageUrl : "https://cdn.decrypt.co/resize/1536/wp-content/uploads/2022/05/bayc1-gID_4.png.webp"} className="card-img-top" alt="..." />
          <div className="card-body">
            <a href={newsUrl} target="_blank" className='text-decoration-none text-dark' ><h5 className="card-title">{title}</h5></a>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {author ? author : "unknown"} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" className="btn btn-primary btn-sm">Read More</a>
          </div>
        </div>
      </div>

    )
  }

export default NewsItem