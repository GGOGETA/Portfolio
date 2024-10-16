const NavBar = () => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleHamburgerClick = () => {
    const hamburger = document.getElementById('hamburger-1');
    hamburger.classList.toggle('is-active');
    handleNavClick();
  };

  const handleNavClick = () => {
    const nav = document.querySelector('.nav');
    if (isExpanded) {
      nav.style.width = '3%';
      nav.style.backgroundColor = '#1c1c1c';
    } else {
      nav.style.width = '16%';
      nav.style.backgroundColor = '#1c1c1c';
    }
    setIsExpanded(!isExpanded);
  };


  return (
    <div>
    <div className="rowcf" data-scroll-section>
      <div className="three col" onClick={handleHamburgerClick}>
        <div className="hamburger" id="hamburger-1">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </div>
    <nav id="menuBar">
    <div className="nav">
        <ul className="nav-desc">
        <li><a href="#i" data-scroll-to>INTRODUCTION</a></li>
        <li><a href="#a" data-scroll-to>ABOUT</a></li>
        <li><a href="#r" data-scroll-to>RESUME</a></li>
        <li><a href="#s" data-scroll-to>SERVICES</a></li>
        <li><a href="#sk" data-scroll-to>SKILLS</a></li>
        <li><a href="#p" data-scroll-to>PORTFOLIO</a></li>
        <li><a href="#c" data-scroll-to>CONTACT ME</a></li>
      </ul>
      <ul className="nav-icon">
        <li><div className="-icon"><a href="#i" className="active" data-scroll-to="#i"><i className="bi bi-house-door active"></i></a></div></li>
        <li><div className="-icon"><a href="#a" data-scroll-to="#a"><i className="bi bi-person"></i></a></div></li>
        <li><div className="-icon"><a href="#r" data-scroll-to="#r"><i className="bi bi-file-earmark-text"></i></a></div></li>
        <li><div className="-icon"><a href="#s" data-scroll-to="#s"><i className="bi bi-stack"></i></a></div></li>
        <li><div className="-icon"><a href="#sk" data-scroll-to="#sk"><i className="bi bi-eyeglasses"></i></a></div></li>
        <li><div className="-icon"><a href="#p" data-scroll-to="#p"><i className="bi bi-buildings"></i></a></div></li>
        <li><div className="-icon"><a href="#c" data-scroll-to><i className="bi bi-envelope"></i></a></div></li>
      </ul>
    </div>
  </nav>
  </div>
    );
  };


ReactDOM.render(<NavBar  />, document.getElementById('nave'));