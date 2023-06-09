import React, { Component } from "react";
import "./HomePage.css";

export default class HomePage extends Component {
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
              <a class="pagelink" href="#serif">
                About
              </a>
            </li>
            <li>
              <a class="pagelink" href="#sans">
                Projects
              </a>
            </li>
            <li>
              <a class="pagelink" href="#mono">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div class="banner">
          <h1>Web Developer</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div id="serif">
          <div class="editorial">
            <h2>Placeholder Text!</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div class="font-card garamond">
            <h2>Placeholder</h2>
            <h5 class="creator">by Toko</h5>
            <span class="sample">
              <h2>Bold</h2>
              <span class="bold text">Abc</span>
            </span>
            <span class="sample">
              <h2>Regular</h2>
              <span class="regular text">Abc</span>
            </span>
            <span class="sample">
              <h2>Italic</h2>
              <span class="italic text">Abc</span>
            </span>
          </div>
        </div>

        <div id="sans">
          <div class="editorial">
            <h2>Placeholder</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div class="font-card helvetica">
            <h2>Projects</h2>
            <h5 class="creator">List of Projects</h5>
            <span class="sample">
              <h2>Bold</h2>
              <span class="bold text">Abc</span>
            </span>
            <span class="sample">
              <h2>Regular</h2>
              <span class="regular text">Abc</span>
            </span>
            <span class="sample">
              <h2>Italic</h2>
              <span class="italic text">Abc</span>
            </span>
          </div>
        </div>

        <div id="mono">
          <div class="editorial">
            <h2>Placeholder</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div class="font-card space">
            <h2>Contact</h2>
            <h5 class="creator">by Ragdoll</h5>
            <span class="sample">
              <h2>Regular</h2>
              <span class="regular text">Abc</span>
            </span>
          </div>
        </div>
      </>
    );
  }
}
