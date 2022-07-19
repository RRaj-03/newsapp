import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">News-Mon</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><Link className="nav-link"  to="/">General</Link></li>
                            <li className="nav-item"><Link className="nav-link"  to="/business">Business</Link></li>
                            <li className="nav-item"><Link className="nav-link"  to="/entertainment">Entertainment</Link></li>
                            <li className="nav-item"><Link className="nav-link"  to="/health">Health</Link></li>
                            <li className="nav-item"><Link className="nav-link"  to="/science">Science</Link></li>
                            <li className="nav-item"><Link className="nav-link"  to="/sports">Sports</Link></li>
                            <li className="nav-item"><Link className="nav-link"  to="/technology">Technology</Link></li>
                        </ul>
                    </div>
                    <form className="d-flex">
                        <input className="form-control me-2" type="text" placeholder="Search" aria-label="Search" id='searchbar'/>
                            <button className="btn btn-outline-success" onClick={props.searching} type='button'>Search</button>
                    </form>

                </div>
            </nav>
        </>
    )
}