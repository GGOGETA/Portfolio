function Intro() {
  return (
    <>
      <div id="intro">
        <h1 id="vishal">
          Vishal
          <sup>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-cpu"
              viewBox="0 0 16 16"
            >
              <path d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0zm-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3h-7zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3zM6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
            </svg>
          </sup>
        </h1>
        <p id="programmer">Programmer & Software Engineer</p>
        <img id="profile" src="profile.jpeg" alt="Profile" />
        <p id="hello">
          Hello, _.vishal.sharma.__ <br />
          <span className="address">Base in Hathras,U.P.,India</span>
        </p>
        <p id="rights">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-c-circle"
            viewBox="0 0 16 16"
          >
            <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512Z" />
          </svg>{' '}
          2023 vishal. All rights reserved
        </p>
        <div className="center">
          <div id="social-test">
            <ul className="social">
              <a href="https://www.facebook.com/profile.php?id=100012307771385" target="_blank">
                <li>
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </li>
              </a>
              <a href="https://www.linkedin.com/in/vishal-sharma-087913286/" target="_blank">
                <li>
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </li>
              </a>
              <a href="https://www.instagram.com/_.vishal.sharma.__/" target="_blank">
                <li>
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </li>
              </a>
              <a href="https://github.com/GGOGETA" target="_blank">
                <li>
                  <i className="fa fa-github" aria-hidden="true"></i>
                </li>
              </a>
            </ul>
          </div>
        </div>
        <a href="#c" data-scroll-to="#c">
          <button id="hire" hire-me>
            <div className="envelope fold">
              <div className="top"></div>
              <div className="left"></div>
              <div className="back">
                <div className="paper">
                  <span className="line one"></span>
                  <span className="line two"></span>
                  <span className="line three"></span>
                  <span className="line two"></span>
                  <span className="line one"></span>
                </div>
              </div>
              <div className="right"></div>
              <div className="bottom"></div>
            </div>
            <p className="p">Message Me</p>
          </button>
        </a>
      </div>
    </>
  );
}

ReactDOM.render(<Intro  />, document.getElementById('Intr'));
