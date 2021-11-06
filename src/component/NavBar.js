import React from 'react'

// import './NavBar.css';

const  NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light active-location">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="index.html">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="about-me.html">About Me</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="projects.html">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="contact.html">Contact</a>
                            </li>
                        </ul>
                    </div>
                    </div>
        </nav>

    )
}

export default NavBar;