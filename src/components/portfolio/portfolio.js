import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>My portfolio</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <ul>
                {resumeData.portfolio && resumeData.portfolio.map((item) => {
                  return (<li key={item.id}>
                    <div className="columns portfolio-item" >
                      <div className="item-wrap"  >
                        <a href={`${item.appurl}`}>
                          <img src={`${item.imgurl}`} alt="img" className="item-img" />
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>{item.name}</h5>
                              <p>{item.description} <br />Ctrl + Click to open</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </li>




                  )
                })
                }</ul>
          </div>
        </div>
      </div>
  </section>
        );
  }
}
