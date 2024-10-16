function Resume() {
    return (
      <section style={{ marginBottom: '10rem' }} id="r" data-scroll-section>
        <div className="sections" id="resume" data-scroll data-scroll-speed="2">
          <i className="bi bi-file-earmark-text"></i> Resume
        </div>
  
        <p className="hiii" data-scroll data-scroll-speed="1">
          Education & <span>EXPERIENCE</span>
        </p>
  
        {/* Timeline */}
        <div className="timeline" data-scroll data-scroll-speed="2">
          <div className="checkpoint" data-scroll>
            <div className="containerr">
              <p>2011-2018</p>
              <h2>Matriculation</h2>
              <p>St. Francis Inter College, Thamna Ghadi, Hathras, UP</p>
            </div>
          </div>
          <div className="checkpoint" data-scroll>
            <div className="containerr">
              <p>2018-2020</p>
              <h2>Intermediate</h2>
              <p>S.B.S Public school, Salempur Sasni, Hathras, UP</p>
              <h2>Worked Under DSW</h2>
              <p>As a Student Organizer/Coordinator/Anchor</p>
            </div>
          </div>
          <div className="checkpoint" data-scroll>
            <div className="containerr">
              <p>2021-2022</p>
              <h2>Computer Science (specializing in Big Data Analytics), B.tech/B.E.</h2>
              <p>Chandigarh University, Gharuan, Punjab</p>
              <h2>Worked Under DSW</h2>
              <p>As a Student Organizer/Coordinator/Anchor</p>
              <h2>Programming Through c++, Data Analytics with Python </h2>
              <p>NPTEL course completions</p>
              <h2>Data Structure and algorithm</h2>
              <p>Intermediate level</p>
            </div>
          </div>
          <div className="checkpoint" style={{ paddingBottom: '0' }} data-scroll>
            <div className="containerr">
              <p>2023 - present</p>
              <h2>Web development</h2>
              <p>Portfolio sites</p>
              <p>Phisguardian</p>
              <h2>Started Working on Projects</h2>
              <p>OTP and QR based Login page</p>
              <p>working on research projects</p>
              <p>Titan 3023 - An educational game about Astronomy</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  ReactDOM.render(<Resume />, document.getElementById('Resumee'));