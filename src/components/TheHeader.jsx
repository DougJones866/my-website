import React, { Component } from 'react'
import './TheHeader.css'

export default class TheHeader extends Component {
  render() {
    return (
      <>
      <nav class="header">
          <ul>
            <li>
              <a class="home" href="#top">
                Home
              </a>
            </li>
            <li>
              <a class="pagelink" href="#about">
                About
              </a>
            </li>
            <li>
              <a class="pagelink" href="#projects">
                Projects
              </a>
            </li>
            <li>
              <a class="pagelink" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </>
    )
  }
}
