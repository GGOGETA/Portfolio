function About() {
    return (
      <section style={{ marginBottom: '25rem' }} id="a" data-scroll-section>
        <div className="sections" id="about" data-scroll data-scroll-speed="3">
          <i className="bi bi-person"></i> About
        </div>
        <div>
          <div data-scroll data-scroll-speed="1" className="about-head">
            <p>Every great code begins with an even <span style={{ color: 'aquamarine' }}>better story</span></p>
          </div>
          <div data-scroll data-scroll-speed="2" className="about-under">
            <p style={{ color: 'gray' }}>For about three years, I've been on an engineering journey, sharpening my coding skills and enjoying solving complex design challenges. I'm quietly confident and always eager to push my limits. As a motivated BE-CSE student, I'm skilled in various programming languages and adept at analyzing and solving problems. I'm good at communicating and working in a team and as a great team leader, and I'm determined to make a meaningful impact on technological progress. I'm committed to excelling in computer science, always learning and growing my skills. My aim is to make a substantial contribution to the ever-changing world of technology.</p>
          </div>
        </div>
      </section>
    );
  }

ReactDOM.render(<About  />, document.getElementById('Aboutt'));