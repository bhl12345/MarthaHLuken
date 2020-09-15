/**
 * 
 */
import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div style={{backgroundImage: 'url(images/ )'}}>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta"></span>
                <h2 className="colorlib-heading animate-box">Services Provided</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2> Text <span>Text </span></h2>
                        <p>  
                            <ul>
                        	<br></br>
 
                        </ul></p>
                      </div>
                    </div>
                  </article>
         
 
 
 
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}