import React from "react";

function Portfolio() {
    return (
        <section id="work" className="section">
            <h1>PORTFOLIO</h1>
            <div className="links">
              <a href="/">
                <div className="work-img">
                  <div>
                    Self Report
                    <div>
                      MERN Stack
                    </div>
                  </div>
                </div>
              </a>
        
              <div className="work-img-others">
                <a href="/">
                  <div id="led-wall" className="small-img">
                    <div>
                      LED Wall
                      <div>
                        Node/IoT
                      </div>
                    </div>
                  </div>
                </a>
                <a href="link goes here">
                  <div id="calculator" className="small-img">
                    <div>
                      Project 1
                      <div>
                        JavaScript/CSS/HTML
                      </div>
                    </div>
                  </div>
                </a>
                <a href="link goes here">
                  <div id="quick-track" className="small-img">
                    <div>
                      Quick Track
                      <div>
                        Full Stack
                      </div>
                    </div>
                  </div>
                </a>
                <a href="link goes here">
                  <div id="run-buddy" className="small-img">
                    <div>
                      Run Buddy
                      <div>
                        HTML/CSS
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
        </section>
    )
}

export default Portfolio;