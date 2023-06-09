import React, { Component } from "react";
import "./HomePage.css";

export default class HomePage extends Component {
  render() {
    return (
      <>
        

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
            
          </div>
        </div>

        <div id="projects">
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
            
          </div>
        </div>

        <div id="contact">
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
            
          </div>
        </div>
      </>
    );
  }
}
