import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const handleResize = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth > 800) {
      setShowLinks(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setShowLinks]);

  return (
    <header className="container">
      <div className="nav-center">
        <div className="nav-header">
          <Link href="/">
            <Image className="logo" src="/logo.svg" width={150} height={30} />
          </Link>
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>
        <div className={`${showLinks && 'show-container'} links-container`}>
          <div
            className={`${showLinks && 'show-sidebar-header'} sidebar-header`}
          >
            <Link href="/">
              <Image className="logo" src="/logo.svg" width={150} height={30} />
            </Link>
            <FaTimes
              className="close-btn"
              onClick={() => setShowLinks(!showLinks)}
            />
          </div>
          <nav className="links">
            <Link href="#projects">
              <a>Projects</a>
            </Link>
            <Link href="#contact">
              <a>Contact</a>
            </Link>
          </nav>
        </div>
      </div>
      <div className={`${showLinks && 'dark-overlay'}`}></div>
    </header>
  );
};

export default NavBar;
