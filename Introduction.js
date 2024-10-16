const degreeToRadian = (angle) => {
  return angle * (Math.PI / 180);
};

const radius = 70;
const diameter = radius * 2;

const Introduction = () => {
  const circleRef = React.useRef(null);

  React.useEffect(() => {
    const circle = circleRef.current;
    circle.style.width = `${diameter}px`;
    circle.style.height = `${diameter}px`;

    const text = circle.dataset.text;
    const characters = text.split("");

    const deltaAngle = 360 / characters.length;
    const characterOffsetAngle = 8;
    let currentAngle = -90;

    characters.forEach((character, index) => {
      const span = document.createElement("span");
      span.innerText = character;
      const xPos = radius * (1 + Math.cos(degreeToRadian(currentAngle)));
      const yPos = radius * (1 + Math.sin(degreeToRadian(currentAngle)));

      const transform = `translate(${xPos}px, ${yPos}px)`;
      const rotate = `rotate(${index * deltaAngle + characterOffsetAngle}deg)`;
      span.style.transform = `${transform} ${rotate}`;

      currentAngle += deltaAngle;
      circle.appendChild(span);
    });
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'resume.pdf';
    link.download = 'resume.pdf';
    link.click();
  };

  return (
    <>
      <section data-scroll-section id="i">
        <div className="sections" id="introduce" data-scroll>
          <i className="bi bi-house-door" data-scroll></i> Introduce
        </div>
        <div data-scroll>
          <p id="hi">
            It's Hi from<span> Vishal</span>,<br /> Software Engineer and Developer
          </p>
          <p className="underword">I write and code beautifully simple things and I love what I do</p>
          <p className="underword1">Just Keeping it simple!</p>
        </div>

        {/* Rotating circle */}
        <div className="project" data-scroll>
          <i className="bi bi-arrow-down"></i>
          <div id='circle' data-text="   MY RESUME &nbsp;@&nbsp; MY RESUME &nbsp;@" ref={circleRef}></div>
        </div>

        {/* Experience section */}
        <div className="exp" style={{ top: '3rem' }} data-scroll data-scroll-speed="1.2">
          <div className="exp-container">
            <span style={{ color: 'aquamarine', fontSize: '6rem' }}>2+</span>
            <p>
            <br /> YEARS OF <br /> EXPERIENCE</p>
          </div>
          <div style={{ paddingTop: '7rem' }}>
            <span style={{ color: 'aquamarine', fontSize: '6rem' }}>10+</span>
            <p>
            <br /> PROJECT <br /> COMPLETION</p>
          </div>
          </div>
      </section>
    </>
  );
};

ReactDOM.render(<Introduction />, document.getElementById('introduction'));
