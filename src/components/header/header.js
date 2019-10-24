import React, { Component } from "react";
import Typed from "react-typed";
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;

    // let typed_title = document.querySelector("#typed_title");
    // let typed = new Typed(typed_title, {
    //   strings: [resumeData.name],
    //   typeSpeed: 40,
    //   backSpeed: 50,
    //   loop: true,
    //   backDelay: 1200,
    //   fadeOut: true,
    //   smartBackspace: false
    // });
    return (
      <React.Fragment>
        {/*generated code*/}
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
              Show navigation
            </a>
            <a
              className="mobile-btn"
              tabIndex="0"
              href="#nav-wrap"
              title="Hide navigation"
            >
              Hide navigation
            </a>
            <ul id="nav" className="nav">
              <li className="current">
                <a className="smoothscroll" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#portfolio">
                  Works
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#resume">
                  Skills
                </a>
              </li>
              {/* <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li> */}
              <li>
                <a className="smoothscroll" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">
                <Typed strings={[resumeData.name]} typeSpeed={40} />
              </h1>
              <h2><span id="typed">
                <Typed
                  strings={["Development", "Debugging", "Deployment"]}
                  typeSpeed={90}
                  backSpeed={50}
                  loop
                ></Typed>
              </span></h2>
              <h3>
                {" "}
                {resumeData.role}.{resumeData.roleDescription}
              </h3>
              <hr />
              <ul className="social">
                {resumeData.socialLinks &&
                  resumeData.socialLinks.map(item => {
                    return (
                      <li key={item.name}>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className={item.className}></i>
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>

          <p className="scrolldown">
            <a className="smoothscroll" href="#about">
              <i className="icon-down-circle"></i>
            </a>
          </p>
        </header>
      </React.Fragment>
    );
  }
}
