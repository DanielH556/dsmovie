import React from 'react'
import '../styles/navbar.css'

import { ReactComponent as GithubIcon } from '../images/github.svg'

export default function Navbar() {
  return(
    <header>
    <nav className="container">
        <div className="dsmovie-nav-content">
            <h1>DSMovie</h1>
            <a href="https://github.com/devsuperior" target="_blank" rel="noreferrer">
                <div className="dsmovie-contact-container">
                    <GithubIcon />
                    <p className="dsmovie-contact-link">/devsuperior</p>
                </div>
            </a>
        </div>
    </nav>
    </header>
  )
}