import Link from 'next/link';
import Image from 'next/image';

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-text">
        <h2 className="heading-2">Hello, I'm John Rudolph Lee</h2>
        <h1 className="heading-1">
          A Front-End Web Developer & Digital Designer
        </h1>
        <div className="btn-container">
          <button className="btn">Download CV</button>
          <Link href="/register">
            <a className="btn">Contact Me</a>
          </Link>
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
