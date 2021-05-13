import Link from 'next/link';
import Image from 'next/image';

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-text">
        <h2 className="heading-2">Hello, I'm John Rudolph Lee</h2>
        <h1 className="heading-1">
          Front-End Web Developer & Digital Designer
        </h1>
        <div className="btn-container">
          <a className="btn" href="/johnrudolphlee-cv.pdf" download>
            Download CV
          </a>
          <a className="btn" href="#contact">
            Contact Me
          </a>
        </div>
      </div>
      <Image
        src="/portfolio-hero.svg"
        height={500}
        width={1000}
        className="banner-image"
      />
    </section>
  );
};

export default Banner;
