import Image from 'next/image';

const SocialMedia = () => {
  return (
    <div className="social-container">
      <h4>Find me on social media</h4>
      <ul className="social-list">
        <li className="social-item">
          <a
            href="https://www.linkedin.com/in/john-rudolph-lee-bb5114151/"
            target="_blank"
          >
            <div className="animation-container">
              <Image src="/linkedin-icon.svg" height={50} width={50} />
            </div>
            <p className="social-text">Linkedin</p>
          </a>
        </li>
        <li className="social-item">
          <a href="https://github.com/dolphius21" target="_blank">
            <div className="animation-container">
              <Image src="/github-icon.svg" height={50} width={50} />
            </div>
            <p className="social-text">Github</p>
          </a>
        </li>
        <li className="social-item">
          <a href="https://dribbble.com/dolphius" target="_blank">
            <div className="animation-container">
              <Image src="/dribbble-icon.svg" height={50} width={50} />
            </div>
            <p className="social-text">Dribbble</p>
          </a>
        </li>
        <li className="social-item">
          <a href="https://www.behance.net/Dolphius" target="_blank">
            <div className="animation-container">
              <Image src="/behance-icon.svg" height={50} width={50} />
            </div>
            <p className="social-text">Behance</p>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;
