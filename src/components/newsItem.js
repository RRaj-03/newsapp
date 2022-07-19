import React from 'react'
export default function NewsItem(props) {
    return (
        <>
            <div className="container ">
                <div className="card" >
                <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0',
                        top: '-10px'
                    }
                    }> 
                        <span className="badge rounded-pill bg-danger"> {props.source} </span>
                    </div>
                    <img src={props.imgurl?props.imgurl:"https://www.dia.org/sites/default/files/No_Img_Avail.jpg"} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title?props.title:"Title Not Available"}</h5>
                        <p className="card-text"><small className="text-muted">By {!props.author ? "Unknown" : props.author} on  {new Date(props.publishDate).toGMTString()}</small></p>
                        <p className="card-text">{props.description?props.description:"description not available"}</p>
                        <a href={props.newsUrl} target='_blank' className="btn btn-primary">Read more</a>
                    </div>
                </div>
            </div>
        </>
    )
}