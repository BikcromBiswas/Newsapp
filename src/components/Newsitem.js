import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl} = this.props;
    return (
      <div className="card shadow p-3" style={{width:"18rem",margin:'auto',height:'30rem'}}>
        <img src={imageUrl} className="card-img-top overflow-hidden d-block" alt="new-headline" style={{width:'254px',height:'141px'}} />
        <div className="card-body">
            <h5 className="card-title overflow-hidden">{title?title.slice(0,30):title}.......</h5>
            <p className="card-text overflow-hidden" style={{width:'222.400px',height:'120px',}}>{description?description.slice(0,150):description}</p>
            <a href={newsUrl} target='_blank' rel='noreferrer' className="btn btn-sm btn-primary my-3">Read More</a>
        </div>
      </div>
    )
  }
}

export default Newsitem
//222.400 * 120
//254.400 * 444.987