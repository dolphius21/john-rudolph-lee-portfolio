import Image from 'next/image';

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="heading">About Me</div>
        <p>
          Hi, you can call me Rudolph, My 7 years of experience as a Graphic
          Designer has afforded me a well-rounded skillset, including concept
          design, project management and communication abilities. I am also
          learning new skills like web development and just recently completed a
          coding bootcamp which enabled me to learn new technologies like: HTML,
          CSS, Javascript, MERN(MongoDB, Express.JS, React.JS, Node.JS).
        </p>
        <div className="flex">
          <div className="col">
            <Image
              src="/web-development-icon.svg"
              height={120}
              width={120}
              className="about-icon"
            />
            <h4>Web Developement</h4>
            <p>
              Uses HTML, CSS, Javascript, MERN(MongoDB, Express.JS, React.JS,
              Node.JS.
            </p>
          </div>
          <div className="col">
            <Image
              src="/graphic-design-icon.svg"
              height={120}
              width={120}
              className="about-icon"
            />
            <h4>Graphic Design</h4>
            <p>
              I'm an expert when it comes to creating and illustrating
              vector-based graphics.
            </p>
          </div>
          <div className="col">
            <Image
              src="/motion-graphics-icon.svg"
              height={120}
              width={120}
              className="about-icon"
            />
            <h4>Motion Graphic</h4>
            <p>
              Animates vector-based graphics that can be used in your marketing
              ads.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
